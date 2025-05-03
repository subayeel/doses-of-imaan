"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EmployeeSchedule } from "@/utils/types";
import { calculateEmployeeTime } from "../../utils/calculateTime";

interface Props {
  schedule: Partial<EmployeeSchedule> | null;
  onChange: (scheduleData: EmployeeSchedule) => void;
}

export default function EmployeeForm({ schedule, onChange }: Props) {
  const [localSchedule, setLocalSchedule] = useState<EmployeeSchedule>({
    workHoursPerDay: schedule?.workHoursPerDay ?? 8,
    daysPerWeekAtWork: schedule?.daysPerWeekAtWork ?? 5,
    commuteHoursPerDay: schedule?.commuteHoursPerDay ?? 1,
    sleepHoursPerDay: schedule?.sleepHoursPerDay ?? 7,
    choreHoursPerDay: schedule?.choreHoursPerDay ?? 1,
    weekendLeisureHoursPerDay: schedule?.weekendLeisureHoursPerDay ?? 4, // Example default
    availableLeavesPerYear: schedule?.availableLeavesPerYear ?? 0,
  });

  // Update parent component whenever local state changes
  useEffect(() => {
    // Basic validation can be added here before calling onChange
    onChange(localSchedule as EmployeeSchedule);
  }, [localSchedule]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setLocalSchedule((prev) => ({
      ...prev,
      [name]: type === "number" ? parseFloat(value) || 0 : value,
    }));
  };

  // Calculate potential free time based on inputs (display only)
  const commitments = calculateEmployeeTime(localSchedule);

  const potentialFreeWeekdays = (commitments.weekdayMinutes / 60).toFixed(0);

  const potentialFreeWeekends = (commitments.weekendMinutes / 60).toFixed(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Work Week Details */}
      <div className="space-y-1">
        <Label htmlFor="workHoursPerDay">
          Avg Work Hours/Day (on work days)
        </Label>
        <Input
          type="number"
          id="workHoursPerDay"
          name="workHoursPerDay"
          value={localSchedule.workHoursPerDay}
          onChange={handleChange}
          min="0"
          max="24"
          step="0.5"
          required
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="daysPerWeekAtWork">Days/Week at Work</Label>
        <Input
          type="number"
          id="daysPerWeekAtWork"
          name="daysPerWeekAtWork"
          value={localSchedule.daysPerWeekAtWork}
          onChange={handleChange}
          min="0"
          max="7"
          step="1"
          required
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="commuteHoursPerDay">
          Avg Commute Hours/Day (on work days)
        </Label>
        <Input
          type="number"
          id="commuteHoursPerDay"
          name="commuteHoursPerDay"
          value={localSchedule.commuteHoursPerDay}
          onChange={handleChange}
          min="0"
          max="24"
          step="0.25"
          required
        />
      </div>

      {/* General Daily / Weekend */}
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
          step="0.25"
          required
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="weekendLeisureHoursPerDay">
          Avg Leisure/Other Commitments Hours/Day (on non-work days)
        </Label>
        <Input
          type="number"
          id="weekendLeisureHoursPerDay"
          name="weekendLeisureHoursPerDay"
          value={localSchedule.weekendLeisureHoursPerDay}
          onChange={handleChange}
          min="0"
          max="24"
          step="0.5"
          required
        />
        <p className="text-xs text-muted-foreground">
          Time spent on hobbies, family, errands etc. on weekends/days off.
        </p>
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
        </p>
        <p className="text-xs text-muted-foreground">
          This is calculated based on your inputs above (24 - Sleep - Chores -
          Leisure/Commitments).
        </p>
      </div>
    </div>
  );
}
