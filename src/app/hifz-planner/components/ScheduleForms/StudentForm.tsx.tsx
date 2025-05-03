"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { StudentSchedule } from "@/utils/types";
import { calculateStudentTime } from "../../utils/calculateTime";

interface Props {
  schedule: Partial<StudentSchedule> | null;
  onChange: (scheduleData: StudentSchedule) => void;
}

export default function StudentForm({ schedule, onChange }: Props) {
  const [localSchedule, setLocalSchedule] = useState<StudentSchedule>({
    classHoursPerDay: schedule?.classHoursPerDay ?? 8,
    studyHoursPerDay: schedule?.studyHoursPerDay ?? 1,
    daysPerWeekInClass: schedule?.daysPerWeekInClass ?? 5,
    sleepHoursPerDay: schedule?.sleepHoursPerDay ?? 8,
    choreHoursPerDay: schedule?.choreHoursPerDay ?? 1,
    leisureHoursPerDay: schedule?.leisureHoursPerDay ?? 2,
    isVacation: schedule?.isVacation ?? false,
    vacationDays: schedule?.vacationDays ?? null,
  });

  // Update parent component whenever local state changes
  useEffect(() => {
    onChange(localSchedule as StudentSchedule); // Pass validated/complete object ideally
  }, [localSchedule]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLocalSchedule((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
          ? parseFloat(value) || 0
          : value,
    }));
  };

  const handleCheckboxChange = (checked: boolean | "indeterminate") => {
    const isChecked = checked === true;
    setLocalSchedule((prev) => ({
      ...prev,
      isVacation: isChecked,
      vacationDays: isChecked ? prev.vacationDays ?? 30 : null, // Reset or keep previous value if needed
    }));
  };

  // Calculate potential free time based on inputs (display only)
  const commitments = calculateStudentTime(localSchedule);

  const potentialFreeWeekdays = (commitments.weekdayMinutes / 60).toFixed(0);
  const potentialFreeVacation = (commitments.vacationDayMinutes / 60).toFixed(
    0
  );
  const potentialFreeWeekends = (commitments.weekendMinutes / 60).toFixed(0);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Class/Study Hours (Weekday) */}
        <div className="space-y-1">
          <Label htmlFor="classHoursPerDay">
            Avg Class Hours/Day (on class days)
          </Label>
          <Input
            type="number"
            id="classHoursPerDay"
            name="classHoursPerDay"
            value={localSchedule.classHoursPerDay}
            onChange={handleChange}
            min="0"
            max="24"
            step="0.5"
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="studyHoursPerDay">
            Avg Study Hours/Day (on class days, outside class)
          </Label>
          <Input
            type="number"
            id="studyHoursPerDay"
            name="studyHoursPerDay"
            value={localSchedule.studyHoursPerDay}
            onChange={handleChange}
            min="0"
            max="24"
            step="0.5"
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="daysPerWeekInClass">Days/Week in Class</Label>
          <Input
            type="number"
            id="daysPerWeekInClass"
            name="daysPerWeekInClass"
            value={localSchedule.daysPerWeekInClass}
            onChange={handleChange}
            min="0"
            max="7"
            step="1"
            required
          />
        </div>

        {/* General Daily */}
        <div className="space-y-1">
          <Label htmlFor="sleepHoursPerDay">Avg Sleep Hours/Day</Label>
          <Input
            type="number"
            id="sleepHoursPerDay"
            name="sleepHoursPerDay"
            value={localSchedule.sleepHoursPerDay}
            onChange={handleChange}
            min="0"
            max="24"
            step="0.5"
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="choreHoursPerDay">
            Avg Household Chores/Salah/Meals Hours/Day
          </Label>
          <Input
            type="number"
            id="choreHoursPerDay"
            name="choreHoursPerDay"
            value={localSchedule.choreHoursPerDay}
            onChange={handleChange}
            min="0"
            max="24"
            step="0.25"
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="leisureHoursPerDay">
            Avg Personal Leisure Hours/Day
          </Label>
          <Input
            type="number"
            id="leisureHoursPerDay"
            name="leisureHoursPerDay"
            value={localSchedule.leisureHoursPerDay}
            onChange={handleChange}
            min="0"
            max="24"
            step="0.5"
            required
          />
        </div>

        {/* Vacation */}
        <div className="md:col-span-2 flex items-center space-x-2 pt-4">
          <Checkbox
            id="isVacation"
            name="isVacation"
            checked={localSchedule.isVacation}
            onCheckedChange={handleCheckboxChange}
          />
          <Label htmlFor="isVacation">Currently on Vacation?</Label>
        </div>
        {localSchedule.isVacation && (
          <div className="space-y-1 md:col-span-2">
            <Label htmlFor="vacationDays">Total Vacation Days</Label>
            <Input
              type="number"
              id="vacationDays"
              name="vacationDays"
              value={localSchedule.vacationDays ?? ""}
              onChange={handleChange}
              min="1"
              step="1"
              required={localSchedule.isVacation}
            />
          </div>
        )}
      </div>

      <div className="md:col-span-2 mt-2 p-3 bg-muted rounded">
        <p className="text-sm font-medium">
          Estimated remaining free time per day (for Hifz, rest, etc.):{" "}
          {potentialFreeWeekdays && (
            <div className="text-primary font-bold">
              On Week-Days: {potentialFreeWeekdays} hours
            </div>
          )}
          {potentialFreeWeekends && (
            <div className="text-primary font-bold">
              On Week-ends: {potentialFreeWeekends} hours
            </div>
          )}
          {localSchedule.isVacation && (
            <div className="text-primary font-bold">
              On Vacation: {potentialFreeVacation} hours
            </div>
          )}
        </p>
        <p className="text-xs text-muted-foreground">
          This is calculated based on your inputs above (24 - Sleep - Chores -
          Leisure/Commitments).
        </p>
      </div>
    </div>
  );
}

// --- Create similar forms for Employee, Housewife, Retired, Unemployed ---
