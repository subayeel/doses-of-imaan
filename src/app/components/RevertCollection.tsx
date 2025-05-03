// src/app/components/RevertCollection.tsx
"use client";
// Removed eslint disable for no-explicit-any as we have better typing now
import React, { useState } from "react";
import RevertStoryCard from "./RevertStoryCard"; // Assuming this component exists
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RevertStory } from "@/utils/types"; // Assuming RevertStory type is exported here

type RevertStoriesProps = {
  stories: RevertStory[]; // <-- Changed prop type from Record to Array
  isDocument: boolean;
};

const RevertStoriesCollection = ({
  stories,
  isDocument,
}: RevertStoriesProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterReligion, setFilterReligion] = useState("all");
  const [filterGender, setFilterGender] = useState("all");

  // Get unique previous religions for filter directly from the array
  const religions = [
    "all",
    ...new Set(stories.map((story) => story.previousReligion)),
  ];

  // Filter stories based on search and filters directly on the array
  const filteredStories = stories.filter((story) => {
    const searchTerms = searchTerm
      .toLowerCase()
      .split(/\s+/)
      .filter((term) => term.length > 0);

    const matchesSearch =
      searchTerms.length === 0 ||
      searchTerms.some(
        (term) =>
          story.name.toLowerCase().includes(term) ||
          story.background.toLowerCase().includes(term) ||
          story.journey?.toLowerCase().includes(term) || // Use optional chaining
          story.advice?.toLowerCase().includes(term) // Also include advice in search
      );

    const matchesReligion =
      filterReligion === "all" || story.previousReligion === filterReligion;
    const matchesGender =
      filterGender === "all" ||
      story.gender.toLowerCase() === filterGender.toLowerCase(); // Compare lowercase genders

    return matchesSearch && matchesReligion && matchesGender;
  });

  // Only render filters/search if not in document mode and there are stories to filter
  const showFilters = !isDocument && stories.length > 0;

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Title always shown */}
      <h1
        className={`text-3xl font-bold text-center mb-8 ${
          isDocument ? "text-gray-800 print-text-black" : "text-primary"
        }`}
      >
        Journey to Islam: Revert Stories
      </h1>

      {showFilters && (
        <div className="flex flex-col md:flex-row gap-4 mb-8 animate-fadeIn">
          {" "}
          {/* Add animation */}
          <div className="relative flex-grow">
            <Input
              placeholder="🔎 Search stories..."
              className=" bg-white dark:bg-transparent max-w-xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <Select value={filterReligion} onValueChange={setFilterReligion}>
              <SelectTrigger className="w-full sm:w-36 bg-white dark:bg-transparent">
                {" "}
                {/* Styled select */}
                <SelectValue placeholder="Religion" />
              </SelectTrigger>
              <SelectContent className="">
                {" "}
                {/* Styled select content */}
                {religions.map((religion) => (
                  <SelectItem key={religion} value={religion}>
                    {religion === "all" ? "All Religions" : religion}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterGender} onValueChange={setFilterGender}>
              <SelectTrigger className="w-full sm:w-36 bg-white dark:bg-transparent ">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Genders</SelectItem>
                <SelectItem value="male">Male</SelectItem>{" "}
                <SelectItem value="female">Female</SelectItem>{" "}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {filteredStories.length === 0 ? (
        <div
          className={`text-center p-12 rounded-lg border ${
            isDocument
              ? "bg-gray-100 border-gray-300 text-gray-700"
              : "bg-gray-800 border-gray-700 text-gray-300"
          }`}
        >
          {/* Styled empty state */}
          <h3 className="text-xl font-semibold mb-2">
            No stories match the criteria
          </h3>
          <p className={` ${isDocument ? "text-gray-600" : "text-gray-400"}`}>
            {showFilters
              ? "Try adjusting the search or filters"
              : "No stories available at the moment."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8">
          {filteredStories.map((story, index) => (
            <RevertStoryCard key={index} story={story} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RevertStoriesCollection;
