"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import type { HifzPlanData, UserCategory } from "@/utils/types";

interface Props {
  formData: HifzPlanData;
  updateFormData: (data: Partial<HifzPlanData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const categories: { value: UserCategory; label: string }[] = [
  { value: "student", label: "Student" },
  { value: "employee", label: "Employee" },
  { value: "housewife", label: "Housewife / Homemaker" },
  { value: "retired", label: "Retired" },
  { value: "unemployed", label: "Unemployed / Job Seeker" },
];

export default function Step2_UserCategory({
  formData,
  updateFormData,
  onNext,
  onBack,
}: Props) {
  const handleCategoryChange = (value: string) => {
    updateFormData({ userCategory: value as UserCategory });
  };

  const canProceed = formData.userCategory !== null;

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
        <CardTitle>Step 2: Tell Us About Yourself</CardTitle>
        <CardDescription>
          Select the category that best describes your current primary
          occupation or life stage.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={formData.userCategory ?? ""}
          onValueChange={handleCategoryChange}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {categories.map((cat) => (
            <Label
              key={cat.value}
              htmlFor={cat.value!} // Add definite assignment assertion if value can't be null here
              className={`flex items-center space-x-2 border rounded-md p-4 cursor-pointer transition-colors ${
                formData.userCategory === cat.value
                  ? "bg-primary text-primary-foreground border-primary"
                  : "hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              <RadioGroupItem
                value={cat.value!}
                id={cat.value!}
                className="border-primary text-primary ring-offset-primary focus:ring-primary focus-visible:ring-primary"
              />
              <span>{cat.label}</span>
            </Label>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onNext} disabled={!canProceed}>
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
