import type {
  HifzPlanData,
  HifzPlanResult,
  StudentSchedule,
  EmployeeSchedule,
} from "@/utils/types"; // Import necessary types
import { TOTAL_QURAN_VERSES, getVersesBySurahs } from "@/utils/quranData";
import {
  getAvailableHifzTime,
  calculateStudentTime,
  calculateEmployeeTime,
} from "./calculateTime";

// --- Constants ---

const BASE_MINUTES_PER_VERSE = 30; // Estimated avg time per verse (minutes)
const MINUTES_PER_HOUR = 60; // Added for conversion

// --- Helper Functions --- (getMemoryScaleFactor, calculateEndDateString, formatDuration remain the same)
// ... (keep the existing helper functions: getMemoryScaleFactor, calculateEndDateString, formatDuration) ...
function getMemoryScaleFactor(rating: number | null): number {
  // ... (implementation as before)
  if (rating === null || rating < 1 || rating > 10) return 1.0;
  const scale = 1.0 + (5 - rating) * 0.16;
  return Math.max(0.5, Math.min(2.5, scale));
}
export function calculateEndDateString(days: number): string {
  // ... (implementation as before)
  if (days <= 0 || !isFinite(days)) return "N/A";
  try {
    const today = new Date();
    const endDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + Math.ceil(days)
    );
    return endDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return "Calculation Error";
  }
}
export function formatDuration(totalDays: number): string {
  // ... (implementation as before)
  if (totalDays <= 0 || !isFinite(totalDays)) return "N/A";
  const roundedDays = Math.ceil(totalDays);
  const years = Math.floor(roundedDays / 365);
  const months = Math.floor((roundedDays % 365) / 30.44);
  const days = Math.round(roundedDays % 30.44);
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} month${months > 1 ? "s" : ""}`);
  if (days > 0 || parts.length === 0)
    parts.push(`${days} day${days !== 1 ? "s" : ""}`);
  return parts.join(", ");
}
// --- Main Plan Generation Function ---

/**
 * Generates the Hifz plan based on user data, focusing on verses.
 * Includes separate available time breakdown for Students and Employees.
 */
export function generateHifzPlan(planData: HifzPlanData): HifzPlanResult {
  // 1. Calculate Average Daily Time (for overall progress estimation)
  const averageAvailableMinutes = getAvailableHifzTime(planData).weekDays;

  const memorizedVersesCount = getVersesBySurahs(planData.memorizedSurahs);
  const remainingVersesToMemorize = Math.max(
    0,
    TOTAL_QURAN_VERSES - memorizedVersesCount
  );
  const percentageComplete =
    TOTAL_QURAN_VERSES > 0
      ? (memorizedVersesCount / TOTAL_QURAN_VERSES) * 100
      : 0;
  // Base result structure
  const result: Partial<HifzPlanResult> = {
    dailyHifzTimeMinutes: Math.max(0, Math.round(averageAvailableMinutes)),
    memorizationMethod:
      "Intensive Repetition (20x+ per verse/segment) + Meaning Focus Recommended",
    revisionScheduleSuggestion: `Dedicate ~25% (${Math.max(
      5,
      Math.round(averageAvailableMinutes * 0.25)
    )} min) of daily time & specific weekend slots for revising previous lessons. Consistency is crucial.`,
    availableHoursWeekday: undefined, // Initialize as undefined
    availableHoursWeekend: undefined, // Initialize as undefined

    memorizedVersesCount: memorizedVersesCount, // *** NEW ***
    totalQuranVerses: TOTAL_QURAN_VERSES, // *** NEW ***
    percentageComplete: percentageComplete, // *** NEW ***
    remainingVersesToMemorize: remainingVersesToMemorize, // *** NEW ***
  };

  // 2. Handle Insufficient Time Case (based on average)
  if (averageAvailableMinutes < BASE_MINUTES_PER_VERSE / 2) {
    result.estimatedTargetPerDayOnWeekDay =
      "Insufficient time for consistent progress";
    result.estimatedDaysToComplete = Infinity;
    result.estimatedCompletionDate = "N/A";
    // result.estimatedDurationString = "N/A";
    return result as HifzPlanResult; // Cast to full type before returning
  }

  // 3. Calculate Core Metrics (based on average time)
  const memoryScale = getMemoryScaleFactor(planData.memoryRating);
  const timePerVerseMinutes = BASE_MINUTES_PER_VERSE * memoryScale;

  const versesPerDay = averageAvailableMinutes / timePerVerseMinutes;

  if (versesPerDay < 1) {
    result.estimatedTargetPerDayOnWeekDay = `~${versesPerDay.toFixed(
      1
    )} verses (less than 1 verse/day)`;
  } else {
    result.availableHoursWeekday = Number(
      (averageAvailableMinutes / 60).toFixed(0)
    );
    result.estimatedTargetPerDayOnWeekDay = `~${Math.round(
      versesPerDay
    )} verse(s)`;
  }

  const estimatedDays =
    versesPerDay > 0 ? TOTAL_QURAN_VERSES / versesPerDay : Infinity;
  result.estimatedDaysToComplete = isFinite(estimatedDays)
    ? Math.ceil(estimatedDays)
    : Infinity;
  result.estimatedCompletionDate = calculateEndDateString(estimatedDays);
  // result.estimatedDurationString = formatDuration(estimatedDays);

  // 4. *** Calculate and Add Weekday/Weekend Breakdown (for Student/Employee) ***
  if (planData.schedule) {
    // Ensure schedule data exists
    if (planData.userCategory === "student") {
      try {
        const times = calculateStudentTime(
          planData.schedule as StudentSchedule
        );
        // Convert minutes to hours, rounding to 1 decimal place
        result.availableHoursWeekday = parseFloat(
          (times.weekdayMinutes / MINUTES_PER_HOUR).toFixed(1)
        );
        const versesPerWeekDay =
          (result.availableHoursWeekday * 60) / timePerVerseMinutes;

        result.estimatedTargetPerDayOnWeekDay = `${versesPerWeekDay} verse(s)`;

        result.availableHoursWeekend = parseFloat(
          (times.weekendMinutes / MINUTES_PER_HOUR).toFixed(1)
        );

        const versesPerWeekEnd =
          (result.availableHoursWeekend * 60) / timePerVerseMinutes;

        result.estimatedTargetPerDayOnWeekEnd = `${versesPerWeekEnd} verse(s)`;
        // Optionally add vacation day calculation here if needed
        // result.availableHoursVacationDay = parseFloat(
        //   (times.vacationDayMinutes / MINUTES_PER_HOUR).toFixed(1)
        // );
      } catch (e) {
        console.error("Error calculating student time breakdown:", e);
      }
    } else if (planData.userCategory === "employee") {
      try {
        const times = calculateEmployeeTime(
          planData.schedule as EmployeeSchedule
        );
        // weekday
        result.availableHoursWeekday = parseFloat(
          (times.weekdayMinutes / MINUTES_PER_HOUR).toFixed(1)
        );
        const versesPerWeekDay =
          (result.availableHoursWeekday * 60) / timePerVerseMinutes;

        result.estimatedTargetPerDayOnWeekDay = `${versesPerWeekDay.toFixed(
          0
        )} verse(s)`;

        //weekend
        result.availableHoursWeekend = parseFloat(
          (times.weekendMinutes / MINUTES_PER_HOUR).toFixed(1)
        );
        const versesPerWeekEnd =
          (result.availableHoursWeekend * 60) / timePerVerseMinutes;

        result.estimatedTargetPerDayOnWeekEnd = `${versesPerWeekEnd.toFixed(
          0
        )} verse(s)`;
      } catch (e) {
        console.error("Error calculating employee time breakdown:", e);
      }
    }
  }

  // 5. Return the complete result object
  return result as HifzPlanResult; // Cast finalized object to the full type
}
