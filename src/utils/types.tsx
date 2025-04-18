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
