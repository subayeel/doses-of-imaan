"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HousewifeSchedule } from "@/utils/types";

interface Props {
  schedule: Partial<HousewifeSchedule> | null;
  onChange: (scheduleData: HousewifeSchedule) => void;
}

export default function HousewifeForm({ schedule, onChange }: Props) {
  const [localSchedule, setLocalSchedule] = useState<
    Partial<HousewifeSchedule>
  >(
    schedule || {
      choreHoursPerDay: 4,
      childCareHoursPerDay: 3, // Default, adjust as needed
      sleepHoursPerDay: 7,
      personalTimeHoursPerDay: 2,
    }
  );

  // Update parent component whenever local state changes
  useEffect(() => {
    onChange(localSchedule as HousewifeSchedule);
  }, [localSchedule]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setLocalSchedule((prev) => ({
      ...prev,
      [name]: type === "number" ? parseFloat(value) || 0 : value,
    }));
  };

  // Calculate potential free time based on inputs (display only)
  const commitments =
    (localSchedule.sleepHoursPerDay || 0) +
    (localSchedule.choreHoursPerDay || 0) +
    (localSchedule.childCareHoursPerDay || 0) +
    (localSchedule.personalTimeHoursPerDay || 0);
  const potentialFree = Math.max(0, 24 - commitments);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-1">
        <Label htmlFor="choreHoursPerDay">
          {" "}
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
          step="0.5"
          required
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="childCareHoursPerDay">
          Avg Childcare/Family Care Hours/Day
        </Label>
        <Input
          type="number"
          id="childCareHoursPerDay"
          name="childCareHoursPerDay"
          value={localSchedule.childCareHoursPerDay}
          onChange={handleChange}
          min="0"
          max="24"
          step="0.5"
          required
        />
        <p className="text-xs text-muted-foreground">
          Include active supervision, feeding, etc.
        </p>
      </div>
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
        <Label htmlFor="personalTimeHoursPerDay">
          Avg Personal/Leisure Hours/Day
        </Label>
        <Input
          type="number"
          id="personalTimeHoursPerDay"
          name="personalTimeHoursPerDay"
          value={localSchedule.personalTimeHoursPerDay}
          onChange={handleChange}
          min="0"
          max="24"
          step="0.5"
          required
        />
        <p className="text-xs text-muted-foreground">
          Time for yourself, hobbies, appointments, rest (outside sleep).
        </p>
      </div>

      <div className="md:col-span-2 mt-2 p-3 bg-muted rounded">
        <p className="text-sm font-medium">
          Estimated remaining free time per day (for Hifz, rest, etc.):{" "}
          <span className="text-primary font-bold">
            {potentialFree.toFixed(1)} hours
          </span>
        </p>
        <p className="text-xs text-muted-foreground">
          This is calculated based on your inputs above (24 - Sleep - Chores -
          Child Care - Leisure/Commitments).
        </p>
      </div>
    </div>
  );
}
