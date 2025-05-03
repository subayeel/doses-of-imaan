import type {
  HifzPlanData,
  StudentSchedule,
  EmployeeSchedule,
  RetiredSchedule,
  HousewifeSchedule,
  UnemployedSchedule,
} from "@/utils/types.jsx";

const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;

/**
 * Calculates available minutes for Hifz for a Student.
 * Distinguishes between weekdays, weekends, and vacation days.
 */
export function calculateStudentTime(schedule: StudentSchedule): {
  weekdayMinutes: number;
  weekendMinutes: number;
  vacationDayMinutes: number;
} {
  // Weekday commitments
  const weekdayCommitmentHours =
    (schedule.classHoursPerDay || 0) +
    (schedule.studyHoursPerDay || 0) +
    (schedule.sleepHoursPerDay || 0) +
    (schedule.choreHoursPerDay || 0) +
    (schedule.leisureHoursPerDay || 0);
  const weekdayFreeHours = Math.max(0, HOURS_PER_DAY - weekdayCommitmentHours);

  // Weekend commitments (assuming sleep, chores, leisure are similar, but uses weekendFreeHours input for consistency if needed)

  const weekendCommitmentHours =
    (schedule.sleepHoursPerDay || 0) +
    (schedule.choreHoursPerDay || 0) + // Assuming chores are similar on weekends
    (schedule.leisureHoursPerDay || 0); // Assuming leisure is similar unless specified otherwise
  const weekendFreeHours = Math.max(0, HOURS_PER_DAY - weekendCommitmentHours);

  // Vacation Day commitments
  const vacationCommitmentHours =
    (schedule.sleepHoursPerDay || 0) +
    (schedule.choreHoursPerDay || 0) + // Assume chores continue
    (schedule.leisureHoursPerDay || 0); // Leisure might increase, but use base for now
  const vacationFreeHours = Math.max(
    0,
    HOURS_PER_DAY - vacationCommitmentHours
  );

  return {
    weekdayMinutes: weekdayFreeHours * MINUTES_PER_HOUR,
    weekendMinutes: weekendFreeHours * MINUTES_PER_HOUR, // Use calculated value for now
    vacationDayMinutes: vacationFreeHours * MINUTES_PER_HOUR,
  };
}

/**
 * Calculates available minutes for Hifz for an Employee.
 * Distinguishes between weekdays and weekends.
 */
export function calculateEmployeeTime(schedule: EmployeeSchedule): {
  weekdayMinutes: number;
  weekendMinutes: number;
} {
  // Weekday commitments
  const weekdayCommitmentHours =
    (schedule.workHoursPerDay || 0) +
    (schedule.commuteHoursPerDay || 0) +
    (schedule.sleepHoursPerDay || 0) +
    (schedule.choreHoursPerDay || 0);
  // Note: Leisure on weekdays wasn't explicitly asked, assuming it fits within remaining time
  const weekdayFreeHours = Math.max(0, HOURS_PER_DAY - weekdayCommitmentHours);

  // Weekend commitments
  const weekendCommitmentHours =
    (schedule.sleepHoursPerDay || 0) +
    (schedule.choreHoursPerDay || 0) +
    (schedule.weekendLeisureHoursPerDay || 0);
  const weekendFreeHours = Math.max(0, HOURS_PER_DAY - weekendCommitmentHours);

  return {
    weekdayMinutes: weekdayFreeHours * MINUTES_PER_HOUR,
    weekendMinutes: weekendFreeHours * MINUTES_PER_HOUR,
  };
}

/**
 * Calculates available daily minutes for Hifz for a Housewife/Homemaker.
 */
function calculateHousewifeTime(schedule: HousewifeSchedule): {
  dailyMinutes: number;
} {
  const dailyCommitmentHours =
    (schedule.choreHoursPerDay || 0) +
    (schedule.childCareHoursPerDay || 0) +
    (schedule.sleepHoursPerDay || 0) +
    (schedule.personalTimeHoursPerDay || 0);
  const dailyFreeHours = Math.max(0, HOURS_PER_DAY - dailyCommitmentHours);

  return { dailyMinutes: dailyFreeHours * MINUTES_PER_HOUR };
}

/**
 * Calculates available daily minutes for Hifz for a Retired Person.
 */
function calculateRetiredTime(schedule: RetiredSchedule): {
  dailyMinutes: number;
} {
  const dailyCommitmentHours =
    (schedule.sleepHoursPerDay || 0) +
    (schedule.choreHoursPerDay || 0) +
    (schedule.leisureCommitmentHoursPerDay || 0);
  const dailyFreeHours = Math.max(0, HOURS_PER_DAY - dailyCommitmentHours);

  return { dailyMinutes: dailyFreeHours * MINUTES_PER_HOUR };
}

/**
 * Calculates available daily minutes for Hifz for an Unemployed Person.
 */
function calculateUnemployedTime(schedule: UnemployedSchedule): {
  dailyMinutes: number;
} {
  const dailyCommitmentHours =
    (schedule.jobSearchHoursPerDay || 0) +
    (schedule.sleepHoursPerDay || 0) +
    (schedule.choreHoursPerDay || 0) +
    (schedule.personalTimeHoursPerDay || 0);
  const dailyFreeHours = Math.max(0, HOURS_PER_DAY - dailyCommitmentHours);

  return { dailyMinutes: dailyFreeHours * MINUTES_PER_HOUR };
}

/**
 * Gets the average available daily minutes for Hifz based on user category and schedule.
 * Averages weekday/weekend time for Students and Employees.
 */
export function getAvailableHifzTime(planData: HifzPlanData): {
  weekDays: number;
  weekEnd: number;
  vacation: number;
} {
  if (!planData.userCategory || !planData.schedule) {
    return { weekDays: 0, weekEnd: 0, vacation: 0 };
  }

  switch (planData.userCategory) {
    case "student": {
      const schedule = planData.schedule as StudentSchedule;
      const times = calculateStudentTime(schedule);

      if (
        schedule.isVacation &&
        schedule.vacationDays &&
        schedule.vacationDays > 0
      ) {
        return { weekDays: 0, weekEnd: 0, vacation: times.vacationDayMinutes };
      }

      const workDays = schedule.daysPerWeekInClass || 0;
      const freeDays = 7 - workDays;
      if (workDays < 0 || workDays > 7)
        return { weekDays: 0, weekEnd: 0, vacation: 0 }; // Invalid input

      return {
        weekDays: times.weekdayMinutes * workDays,
        weekEnd: times.weekendMinutes * freeDays,
        vacation: times.vacationDayMinutes,
      };
    }
    case "employee": {
      const schedule = planData.schedule as EmployeeSchedule;
      const times = calculateEmployeeTime(schedule);
      const workDays = schedule.daysPerWeekAtWork || 0;
      const freeDays = 7 - workDays;
      if (workDays < 0 || workDays > 7)
        return { weekDays: 0, weekEnd: 0, vacation: 0 }; // Invalid input

      return {
        weekDays: times.weekdayMinutes * workDays,
        weekEnd: times.weekendMinutes * freeDays,
        vacation: 0,
      };
    }
    case "housewife":
      return {
        weekDays: calculateHousewifeTime(planData.schedule as HousewifeSchedule)
          .dailyMinutes,
        weekEnd: 0,
        vacation: 0,
      };
    case "retired":
      return {
        weekDays: calculateRetiredTime(planData.schedule as RetiredSchedule)
          .dailyMinutes,
        weekEnd: 0,
        vacation: 0,
      };

    case "unemployed":
      return {
        weekDays: calculateUnemployedTime(
          planData.schedule as UnemployedSchedule
        ).dailyMinutes,
        weekEnd: 0,
        vacation: 0,
      };
    default:
      return { weekDays: 0, weekEnd: 0, vacation: 0 };
  }
}
