import { ReactNode } from "react";

export interface RevertStory {
  name: string;
  birthName: string;
  gender: "MALE" | "FEMALE";
  previousReligion: string;
  age: number;
  background: string;
  journey?: string;
  quranExperience?: string;
  shahada?: string;
  challenges?: string;
  advice?: string;
  image?: string;
  videoLink: string;

  //extra fields
  islamExperience?: string;
  mosqueTakeover?: string;
  signFromAllah?: string;
  reactionOfCommunity?: string;
  religiousUpbringing?: string;
  islamophobia?: string;
  materialismAndVoid?: string;
  conversionExperience?: string;
  aftermath?: string;
  reflections?: string;
  physicalAttributes?: string;
  education?: string;
  firstMuslimEncounter?: string;
  learningJourney?: string;
  spiritualTurningPoint?: string;
  transformation?: string;
  catalystForJourney?: string;
  spiritualSearch?: string;
  discoveryOfIslam?: string;
  realizations?: string;
  conversion?: string;
}

export interface ResultsType {
  level: string;
  message: string;
  suggestedLinks: ReactNode;
  percentage: number;
  totalPoints: number;
  maxPossible: number;
}

export interface EventType {
  id: number;
  name: string;
  arabicName: string;
  description: string;
  sources: string[];
}

export interface JihadType {
  id: number;
  name: string;
  arabicName: string;
  description: string;
  source: string;
  icon: React.ReactNode;
  color: string;
}

export interface RulingType {
  id: number;
  name: string;
  arabicName: string;
  description: string;
  examples: string[];
  additionalInfo?: string;
  color: string;
  icon: React.ReactNode;
}

export type AngelType = {
  id: number;
  name: string;
  arabicName: string;
  role: string;
  source: string;
  color: string;
};

export type MajorSinType = {
  id: number;
  name: string;
  description: string;
  category: "shirk" | "moral" | "social" | "financial" | "worship" | "family";
};

export type FamilyMemberType = {
  id: number;
  name: string;
  arabicName: string;
  relation: string;
  significance?: string;
};

export type CompanionType = {
  id: number;
  name: string;
  arabicName: string;
  achievement: string;
  color: string;
};

export type DivineBooksType = {
  id: number;
  name: string;
  arabicName: string;
  prophet: string;
  arabicProphetName: string;
  color: string;
  description: string;
};

export interface HifzPlanData {
  memoryRating: number | null;
  userCategory:
    | "student"
    | "employee"
    | "housewife"
    | "retired"
    | "unemployed"
    | null;
  schedule:
    | StudentSchedule
    | EmployeeSchedule
    | HousewifeSchedule
    | RetiredSchedule
    | UnemployedSchedule
    | null;
  // Potentially add plan details here once generated
  generatedPlan?: HifzPlanResult;
  memorizedSurahs?: number[];
}

export interface StudentSchedule {
  classHoursPerDay: number;
  studyHoursPerDay: number; // Added for realism
  daysPerWeekInClass: number;
  sleepHoursPerDay: number;
  choreHoursPerDay: number;
  leisureHoursPerDay: number;
  isVacation: boolean;
  vacationDays: number | null; // Only if isVacation is true
}

export interface EmployeeSchedule {
  workHoursPerDay: number;
  daysPerWeekAtWork: number;
  commuteHoursPerDay: number; // Added for realism
  sleepHoursPerDay: number;
  choreHoursPerDay: number;
  availableLeavesPerYear: number; // Maybe less useful for daily plan
  weekendLeisureHoursPerDay: number;
}

export interface HousewifeSchedule {
  choreHoursPerDay: number;
  childCareHoursPerDay: number; // Added for realism
  sleepHoursPerDay: number;
  personalTimeHoursPerDay: number;
}

export interface RetiredSchedule {
  sleepHoursPerDay: number;
  choreHoursPerDay: number;
  leisureHoursPerDay: number;
  leisureCommitmentHoursPerDay: number;
}

export interface UnemployedSchedule {
  jobSearchHoursPerDay: number;
  sleepHoursPerDay: number;
  choreHoursPerDay: number;
  personalTimeHoursPerDay: number;
}

export interface HifzPlanResult {
  dailyHifzTimeMinutes: number;
  memorizationMethod: string; // Description of the method
  estimatedPagesPerDay: number;
  estimatedDaysToComplete: number;
  estimatedTargetPerDayOnWeekDay: string;
  estimatedTargetPerDayOnWeekEnd?: string;
  estimatedTargetPerDayOnVacation?: string;
  estimatedCompletionDate: string;
  revisionScheduleSuggestion: string; // Basic suggestion
  availableHoursWeekday: number;
  availableHoursWeekend: number;

  memorizedVersesCount?: number;
  totalQuranVerses: number; // Add this for clarity in display
  percentageComplete?: number;
  remainingVersesToMemorize?: number; // Add this
}

export type UserCategory =
  | "student"
  | "employee"
  | "housewife"
  | "retired"
  | "unemployed";
