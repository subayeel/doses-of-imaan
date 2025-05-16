"use client";

import React, { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { HifzPlanData } from "@/utils/types"; // Import the type
import {
  QURAN_SURAHS,
  getVersesBySurahs,
  TOTAL_QURAN_VERSES,
} from "@/utils/quranData"; // Import Quran data

interface Props {
  formData: HifzPlanData;
  updateFormData: (data: Partial<HifzPlanData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step3_CurrentHifz({
  formData,
  updateFormData,
  onNext,
  onBack,
}: Props) {
  const [selectedSurahs, setSelectedSurahs] = useState<number[]>(
    formData.memorizedSurahs || [] // Initialize with existing data
  );

  // Update parent formData when local state changes
  useEffect(() => {
    updateFormData({ memorizedSurahs: selectedSurahs });
  }, [selectedSurahs]);

  const handleSurahToggle = (surahNumber: number, isChecked: boolean) => {
    setSelectedSurahs((prevSelected) => {
      if (isChecked) {
        // Add surah if checked and not already in the list
        return [...prevSelected, surahNumber].sort((a, b) => a - b); // Keep sorted
      } else {
        // Remove surah if unchecked and in the list
        return prevSelected.filter((num) => num !== surahNumber);
      }
    });
  };

  // Calculate progress display
  const memorizedVerses = getVersesBySurahs(selectedSurahs);
  const percentage =
    TOTAL_QURAN_VERSES > 0
      ? ((memorizedVerses / TOTAL_QURAN_VERSES) * 100).toFixed(1)
      : "0";

  const handleSelectAll = () => {
    const allSurahNumbers = QURAN_SURAHS.map((surah) => surah.number);
    setSelectedSurahs(allSurahNumbers);
  };

  const handleDeselectAll = () => {
    setSelectedSurahs([]);
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-start w-full mb-8">
        <h2 className="text-4xl font-bold text-primary">
          Step 3: Your Current <br></br> Hifz Progress
        </h2>

        <div className="px-3 py-2 bg-gray-50 border w-fit rounded-md text-sm">
          {/* <p className="font-medium">Progress Summary:</p> */}
          <p>
            Memorized Verses:{" "}
            <span className="font-bold text-primary">{memorizedVerses}</span> /{" "}
            {TOTAL_QURAN_VERSES}
          </p>
          <p>
            Quran Completion:{" "}
            <span className="font-bold text-primary">{percentage}%</span>
          </p>
        </div>
      </div>

      {/* Select All/Deselect All buttons */}

      <div className="flex items-center justify-between w-full">
        <p className="text-sm text-gray-700">
          Select the Surahs you have <br></br>already memorized completely.
        </p>
        <div className="flex space-x-2">
          <Button type="button" variant="secondary" onClick={handleSelectAll}>
            Select All
          </Button>
          <Button type="button" variant="outline" onClick={handleDeselectAll}>
            Deselect All
          </Button>
        </div>
      </div>

      {/* List of Surahs with checkboxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 h-96 overflow-y-auto pr-2">
        {QURAN_SURAHS.map((surah) => (
          <div key={surah.number} className="flex items-center space-x-2">
            <Checkbox
              id={`surah-${surah.number}`}
              checked={selectedSurahs.includes(surah.number)}
              onCheckedChange={(checked) =>
                handleSurahToggle(surah.number, checked === true)
              }
            />
            <Label
              htmlFor={`surah-${surah.number}`}
              className="text-sm cursor-pointer"
            >
              {surah.number}. {surah.name} ({surah.verses} verses)
            </Label>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onNext}>Next</Button>
      </div>
    </div>
  );
}
