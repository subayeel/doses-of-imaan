import React from "react";
import RevertStoriesCollection from "@/app/components/RevertCollection";

// Import your story data
import {
  SIKHISM_TO_ISLAM,
  PSYCHOLOGY_TO_ISLAM,
  MULTIPLE_FAITH_TO_ISLAM,
  HINDU_TO_ISLAM,
  HINDU_TO_ISLAM_FEMALE,
  HINDU_BRAHMIN_TO_ISLAM,
  CHRISTIANITY_TO_ISLAM,
  FEMALE_CHRISTIANITY_TO_ISLAM,
  CHRISTIANITY_TO_ATHEISM_TO_ISLAM,
  JEWISH_TO_ISLAM,
} from "@/data/revertStories";

export default function RevertStoriesPage() {
  // Combine all stories into one object
  const allStories = {
    SIKHISM_TO_ISLAM,
    PSYCHOLOGY_TO_ISLAM,
    MULTIPLE_FAITH_TO_ISLAM,
    HINDU_TO_ISLAM,
    HINDU_TO_ISLAM_FEMALE,
    HINDU_BRAHMIN_TO_ISLAM,
    CHRISTIANITY_TO_ISLAM,
    FEMALE_CHRISTIANITY_TO_ISLAM,
    CHRISTIANITY_TO_ATHEISM_TO_ISLAM,
    JEWISH_TO_ISLAM,
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <RevertStoriesCollection stories={allStories} />
    </div>
  );
}
