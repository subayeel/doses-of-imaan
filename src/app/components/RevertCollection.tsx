"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import RevertStoryCard from "./RevertStoryCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { RevertStory } from "@/utils/types";

type RevertStoriesProps = {
  stories: Record<string, RevertStory>;
};

const RevertStoriesCollection = ({ stories }: RevertStoriesProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterReligion, setFilterReligion] = useState("all");
  const [filterGender, setFilterGender] = useState("all");

  // Get unique previous religions for filter
  const religions = [
    "all",
    ...new Set(Object.values(stories).map((story) => story.previousReligion)),
  ];

  // Filter stories based on search and filters
  const filteredStories = Object.values(stories).filter((story) => {
    const matchesSearch =
      (story.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.background.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.journey?.toLowerCase().includes(searchTerm.toLowerCase())) ??
      "";

    const matchesReligion =
      filterReligion === "all" || story.previousReligion === filterReligion;
    const matchesGender =
      filterGender === "all" || story.gender === filterGender;

    return matchesSearch && matchesReligion && matchesGender;
  });

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Journey to Islam: Revert Stories
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search stories..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-2 items-center">
          <Filter className="h-4 w-4 text-gray-500" />
          <Select value={filterReligion} onValueChange={setFilterReligion}>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Religion" />
            </SelectTrigger>
            <SelectContent>
              {religions.map((religion) => (
                <SelectItem key={religion} value={religion}>
                  {religion === "all" ? "All Religions" : religion}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filterGender} onValueChange={setFilterGender}>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Genders</SelectItem>
              <SelectItem value="MALE">Male</SelectItem>
              <SelectItem value="FEMALE">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredStories.length === 0 ? (
        <div className="text-center p-12 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-2">
            No stories match your search
          </h3>
          <p className="text-gray-500">Try adjusting your search or filters</p>
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
