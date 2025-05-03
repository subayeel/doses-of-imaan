"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider"; // Use Slider for rating
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { HifzPlanData } from "@/utils/types";

interface Props {
  formData: HifzPlanData;
  updateFormData: (data: Partial<HifzPlanData>) => void;
  onNext: () => void;
}

export default function Step1_MemoryRating({
  formData,
  updateFormData,
  onNext,
}: Props) {
  const rating = formData.memoryRating ?? 5; // Default to 5

  const handleRatingChange = (value: number[]) => {
    updateFormData({ memoryRating: value[0] });
  };

  const canProceed = formData.memoryRating !== null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-primary">
          Personalized Hifz Plan Generator
        </CardTitle>
        <CardDescription className="text-center text-muted-foreground">
          Create a realistic Quran memorization schedule based on your
          lifestyle.
        </CardDescription>
      </CardHeader>
      <CardHeader>
        <CardTitle>Step 1: Assess Your Memory</CardTitle>
        <CardDescription>
          Rate your ability to memorize new information on a scale of 1 (Needs
          Improvement) to 10 (Excellent).
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Label htmlFor="memory-rating">
          Memory Rating:{" "}
          <span className="font-bold text-lg text-primary">{rating}</span> / 10
        </Label>
        <Slider
          id="memory-rating"
          min={1}
          max={10}
          step={1}
          value={[rating]}
          onValueChange={handleRatingChange}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Needs Improvement</span>
          <span>Average</span>
          <span>Excellent</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={onNext} disabled={!canProceed}>
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
