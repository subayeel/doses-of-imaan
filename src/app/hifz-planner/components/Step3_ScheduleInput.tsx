"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import type {
  EmployeeSchedule,
  HifzPlanData,
  HousewifeSchedule,
  RetiredSchedule,
  StudentSchedule,
  UnemployedSchedule,
} from "@/utils/types";

// Import specific forms
import StudentForm from "./ScheduleForms/StudentForm.tsx";
import EmployeeForm from "./ScheduleForms/EmployeeForm";
import HousewifeForm from "./ScheduleForms/HousewifeForm";
import RetiredForm from "./ScheduleForms/RetiredForm";
import UnemployedForm from "./ScheduleForms/UnemployedForm";

interface Props {
  formData: HifzPlanData;
  updateFormData: (data: Partial<HifzPlanData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step3_ScheduleInput({
  formData,
  updateFormData,
  onNext,
  onBack,
}: Props) {
  const handleScheduleChange = (
    scheduleData:
      | HousewifeSchedule
      | StudentSchedule
      | EmployeeSchedule
      | RetiredSchedule
      | UnemployedSchedule
  ) => {
    updateFormData({ schedule: scheduleData });
  };

  const renderForm = () => {
    switch (formData.userCategory) {
      case "student":
        return (
          <StudentForm
            schedule={formData.schedule}
            onChange={handleScheduleChange}
          />
        );
      case "employee":
        return (
          <EmployeeForm
            schedule={formData.schedule}
            onChange={handleScheduleChange}
          />
        );
      case "housewife":
        return (
          <HousewifeForm
            schedule={formData.schedule}
            onChange={handleScheduleChange}
          />
        );
      case "retired":
        return (
          <RetiredForm
            schedule={formData.schedule}
            onChange={handleScheduleChange}
          />
        );
      case "unemployed":
        return (
          <UnemployedForm
            schedule={formData.schedule}
            onChange={handleScheduleChange}
          />
        );
      default:
        return (
          <p className="text-red-500">Please select a user category first.</p>
        );
    }
  };

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
        <CardTitle>Step 3: Your Schedule Details</CardTitle>
        <CardDescription>
          Provide details about your typical time commitments to help estimate
          your available time for Hifz.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">{renderForm()}</CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        {/* Add disabled={!canProceed} after implementing validation in sub-forms */}
        <Button onClick={onNext}>Generate Plan</Button>
      </CardFooter>
    </Card>
  );
}
