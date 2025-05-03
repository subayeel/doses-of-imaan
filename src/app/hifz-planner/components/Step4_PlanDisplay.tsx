"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Copy, Download, RefreshCw, Edit, RefreshCcw } from "lucide-react"; // Icons
import { generateShareURL } from "../utils/shareLink";
import { generatePdf } from "../utils/pdfGenerator";
import type { HifzPlanData, HifzPlanResult } from "@/utils/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"; // For icons

interface Props {
  planData: HifzPlanData;
  generatedPlan: HifzPlanResult | null;
  onUpdate: () => void; // Function to go back and edit inputs
  onReset: () => void; // Function to start over
}

export default function Step4_PlanDisplay({
  planData,
  generatedPlan,
  onUpdate,
  onReset,
}: Props) {
  const [shareStatus, setShareStatus] = useState<"idle" | "copied">("idle");
  const [pdfLoading, setPdfLoading] = useState(false);
  const planRef = useRef<HTMLDivElement>(null); // Ref for PDF generation

  console.log("ggg", generatedPlan);
  if (!generatedPlan) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Generating Plan...</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Please wait while we calculate your personalized Hifz plan.</p>
          {/* Optional: Add a loading spinner */}
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="outline" onClick={onReset}>
            Start Over
          </Button>
        </CardFooter>
      </Card>
    );
  }

  const shareUrl = generateShareURL(planData); // Generate the URL with input data

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShareStatus("copied");
      setTimeout(() => setShareStatus("idle"), 2000); // Reset status after 2 seconds
    } catch (err) {
      console.error("Failed to copy share link:", err);
      alert("Failed to copy link. Please copy it manually:\n" + shareUrl);
    }
  };

  const handleDownloadPdf = async () => {
    if (!planRef.current) return;
    setPdfLoading(true);
    try {
      await generatePdf(
        planRef.current,
        planData,
        generatedPlan,
        "hifz-plan.pdf"
      );
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF.");
    } finally {
      setPdfLoading(false);
    }
  };

  // Calculate completion date properly (example)
  const calculateEndDate = (days: number): string => {
    const today = new Date();
    const endDate = new Date(today.setDate(today.getDate() + days));
    return endDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  const estimatedCompletionDate = calculateEndDate(
    generatedPlan.estimatedDaysToComplete
  );
  const years = Math.floor(generatedPlan.estimatedDaysToComplete / 365);
  const months = Math.floor((generatedPlan.estimatedDaysToComplete % 365) / 30);
  const days = generatedPlan.estimatedDaysToComplete % 30;
  const durationString = `${years > 0 ? years + " year(s), " : ""}${
    months > 0 ? months + " month(s), " : ""
  }${days} day(s)`;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-2xl text-primary">
          Your Personalized Hifz Plan
        </CardTitle>
        <CardDescription className="text-center">
          This is an estimated plan based on your input. Consistency and
          revision are key!
        </CardDescription>
      </CardHeader>
      <CardContent
        ref={planRef}
        className="space-y-4 p-6 bg-background rounded-md"
      >
        {" "}
        {/* Add ref here and styling */}
        <h3 className="font-semibold text-lg border-b pb-2 mb-3">
          Plan Summary
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
          <div className="col-span-2">
            <div className="space-y-1 bg-secondary/50 rounded-md">
              <p>
                <strong>Hifz Progress:</strong>
              </p>
              <p className="ml-2 text-sm">
                Memorized Verses:{" "}
                <span className="font-semibold text-primary">
                  {generatedPlan.memorizedVersesCount ?? 0}
                </span>{" "}
                / {generatedPlan.totalQuranVerses ?? "N/A"}
              </p>
              <p className="ml-2 text-sm">
                Quran Completion:{" "}
                <span className="font-semibold text-primary">
                  {generatedPlan.percentageComplete?.toFixed(1) ?? "0.0"}%
                </span>
              </p>
              {generatedPlan.remainingVersesToMemorize !== undefined &&
                generatedPlan.remainingVersesToMemorize > 0 && (
                  <p className="ml-2 text-sm">
                    Remaining Verses:{" "}
                    <span className="font-semibold text-primary">
                      {generatedPlan.remainingVersesToMemorize}
                    </span>
                  </p>
                )}
              {generatedPlan.remainingVersesToMemorize !== undefined &&
                generatedPlan.remainingVersesToMemorize <= 0 && (
                  <p className="ml-2 text-sm text-green-600 font-bold">
                    Congratulations! You have memorized the entire Quran.
                  </p>
                )}
            </div>
          </div>
          <p>
            <strong>Memory Rating:</strong> {planData.memoryRating}/10
          </p>
          <p>
            <strong>User Category:</strong>{" "}
            <span className="capitalize">{planData.userCategory}</span>
          </p>

          {generatedPlan.availableHoursWeekday != null && (
            <div className="space-y-1 border rounded-md py-2 px-3">
              {planData.userCategory &&
                ["employee", "student"].includes(planData.userCategory) && (
                  <p className="text-sm font-semibold m-0">
                    Weekdays (
                    {planData.userCategory === "employee" ? "Work" : "Class"}{" "}
                    Days)
                  </p>
                )}

              <p className="text-sm">
                <span className="font-semibold">Est. Time : </span>{" "}
                {generatedPlan.availableHoursWeekday > 0
                  ? `${generatedPlan.availableHoursWeekday.toFixed(
                      0
                    )} hours/day`
                  : "Minimal"}
              </p>
              <p className="text-sm">
                Memorization Target :{" "}
                {generatedPlan.estimatedTargetPerDayOnWeekDay}
              </p>
            </div>
          )}
          {generatedPlan.availableHoursWeekend != null && (
            <div className="space-y-1 border rounded-md py-2 px-3">
              <p className="text-sm font-semibold m-0">
                Weekdays (
                {planData.userCategory === "employee" ? "Weekends" : "Holidays"}{" "}
                Days)
              </p>
              <p className="text-sm">
                <span className="font-semibold">Est. Time : </span>{" "}
                {generatedPlan.availableHoursWeekend > 0
                  ? `${generatedPlan.availableHoursWeekend.toFixed(
                      0
                    )} hours/day`
                  : "Minimal"}
              </p>
              <p className="text-sm">
                Memorization Target :{" "}
                {generatedPlan.estimatedTargetPerDayOnWeekEnd}
              </p>
            </div>
          )}
        </div>
        <h3 className="font-semibold text-lg border-b pb-2 mb-3 mt-4">
          Method & Estimation
        </h3>
        <div className="space-y-2">
          <p>
            <strong>Primary Method:</strong> {generatedPlan.memorizationMethod}
          </p>
          <p className="text-sm text-muted-foreground">
            Based on repeating verses/sections 20+ times and connecting them.
            Consider spending extra time understanding meanings (Tafsir) for
            better retention, as suggested.
          </p>
          <p>
            <strong>Estimated Total Duration:</strong> ~{durationString}
          </p>
          <p>
            <strong>Estimated Completion Date:</strong>{" "}
            {estimatedCompletionDate}
          </p>
        </div>
        <Alert className="mt-4 bg-amber-50 border-amber-200 text-amber-800">
          <RefreshCw className="h-4 w-4 !text-amber-600" />
          <AlertTitle className="font-semibold !text-amber-900">
            Crucial: Revision is Essential!
          </AlertTitle>
          <AlertDescription className="!text-amber-700">
            {generatedPlan.revisionScheduleSuggestion} The transcript
            emphasizes: without constant revision, memorization fades quickly.
            Make it a non-negotiable part of your daily/weekly routine.
          </AlertDescription>
        </Alert>
        {/* Hidden section with raw data for PDF if needed, or just style the above */}
        <div id="pdf-data-details" className="hidden">
          {/* Include user schedule details here if needed for the PDF */}
          <p>Memory: {planData.memoryRating}</p>
          <p>Category: {planData.userCategory}</p>
          {/* ... more details ... */}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-between gap-3 pt-6">
        <div className="flex gap-2">
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleShare}
                  disabled={shareStatus === "copied"}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {shareStatus === "copied"
                    ? "Link Copied!"
                    : "Copy Share Link"}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleDownloadPdf}
                  disabled={pdfLoading}
                >
                  {pdfLoading ? (
                    <RefreshCw className="h-4 w-4 animate-spin" />
                  ) : (
                    <Download className="h-4 w-4" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download as PDF</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" onClick={onUpdate}>
                  <Edit className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit Inputs</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Button variant="outline" onClick={onReset}>
          <RefreshCcw />
          Start New Plan
        </Button>
      </CardFooter>
    </Card>
  );
}
