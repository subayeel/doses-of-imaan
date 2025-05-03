// app/hifz-planner/components/HifzPlannerClient.tsx

"use client";

import React, { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Step1_MemoryRating from "./Step1_MemoryRating";
import Step2_UserCategory from "./Step2_UserCategory";
import Step2_5CurrentHifz from "./Step2_5CurrentHifz";
import Step3_ScheduleInput from "./Step3_ScheduleInput";
import Step4_PlanDisplay from "./Step4_PlanDisplay";

import { parseShareData } from "../utils/shareLink";
import { generateHifzPlan } from "../utils/generatePlan";
import type { HifzPlanData, HifzPlanResult } from "@/utils/types";
import { Loader2 } from "lucide-react";

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br p-6">
    <div className="text-center">
      <Loader2 className="mx-auto h-12 w-12 text-teal-400 animate-spin" />
      <p className="mt-4 text-xl">Loading personalized journey...</p>
    </div>
  </div>
);

function HifzPlannerClientContent() {
  const [currentStep, setCurrentStep] = useState(1);
  const [planData, setPlanData] = useState<HifzPlanData>({
    memoryRating: 5,
    userCategory: null,
    schedule: null,
    memorizedSurahs: [],
  });
  const [generatedPlan, setGeneratedPlan] = useState<HifzPlanResult | null>(
    null
  );
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname(); // Get current path

  // State to prevent processing URL data multiple times on fast refreshes etc.
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);

  // Load data from URL on initial mount or when searchParams change
  useEffect(() => {
    // Only process URL data once on initial load if not already processed
    if (!initialDataLoaded) {
      const dataParam = searchParams.get("data");
      if (dataParam) {
        console.log("Found data param, attempting to parse...");
        try {
          const decodedData = parseShareData(dataParam);
          if (decodedData) {
            console.log("Parsed data successfully:", decodedData);
            decodedData.memorizedSurahs = decodedData.memorizedSurahs || [];
            // *** GENERATE PLAN IMMEDIATELY ***
            const plan = generateHifzPlan(decodedData);
            console.log("Generated plan from shared data:", plan);

            // *** SET STATE ***
            setPlanData(decodedData);
            setGeneratedPlan(plan);
            setCurrentStep(5); // Jump to plan display AFTER setting data and plan
            setInitialDataLoaded(true); // Mark as loaded

            // Optional: Replace URL to remove the data param after loading
            // router.replace(pathname, { scroll: false }); // Use pathname obtained from usePathname
          } else {
            console.warn("Parsed data was null or invalid.");
            // Optionally clear URL param if invalid
            // router.replace(pathname, { scroll: false });
            setInitialDataLoaded(true); // Mark attempt as done
          }
        } catch (error) {
          console.error("Failed to parse or process share data:", error);
          // Optionally clear URL param on error
          // router.replace(pathname, { scroll: false });
          setInitialDataLoaded(true); // Mark attempt as done
        }
      } else {
        // No data param, normal flow starts, mark as "loaded" (no shared data)
        setInitialDataLoaded(true);
      }
    }
  }, [searchParams, router, pathname, initialDataLoaded]); // Add dependencies

  const totalSteps = 5;

  const updatePlanData = (data: Partial<HifzPlanData>) => {
    setPlanData((prev) => {
      const newData = { ...prev, ...data };
      // Ensure memorizedSurahs is always an array
      if (
        newData.memorizedSurahs === undefined ||
        newData.memorizedSurahs === null
      ) {
        newData.memorizedSurahs = [];
      }
      return newData;
    });
    // If user updates data, clear generated plan to force recalculation
    if (currentStep < 5) {
      // Avoid clearing if just loaded shared plan
      setGeneratedPlan(null);
    }
  };

  const handleNext = useCallback(() => {
    if (currentStep < totalSteps) {
      // Only generate plan when moving from step 3 to 4 manually
      if (currentStep === 4) {
        console.log("Moving from Step 3 to 4, generating plan...");
        const plan = generateHifzPlan(planData);
        setGeneratedPlan(plan);
      }
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep, planData]);

  const handleBack = () => {
    if (currentStep > 1) {
      // Clear generated plan when going back from step 4 or 3
      if (currentStep >= 4) {
        setGeneratedPlan(null);
      }
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setPlanData({
      memoryRating: null,
      userCategory: null,
      schedule: null,
      memorizedSurahs: [],
    });
    setGeneratedPlan(null);
    setCurrentStep(1);
    setInitialDataLoaded(false); // Allow re-processing URL if page reloads/navigates back here
    router.replace(pathname, { scroll: false }); // Clear URL params
  };

  const handleUpdate = () => {
    setGeneratedPlan(null); // Clear plan to allow re-generation
    setCurrentStep(1); // Go back to the first step to allow edits
    setInitialDataLoaded(false); // Allow potential URL reprocessing if needed (though unlikely in this flow)
  };

  const renderStep = () => {
    // Add a check for initial data loading state if desired (show loading spinner for the whole component)
    if (!initialDataLoaded && searchParams.get("data")) {
      return <div>Loading shared plan...</div>;
    }

    switch (currentStep) {
      case 1:
        return (
          <Step1_MemoryRating
            formData={planData}
            updateFormData={updatePlanData}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <Step2_UserCategory
            formData={planData}
            updateFormData={updatePlanData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );

      case 3:
        // Need to ensure userCategory is selected before allowing next
        const canProceedFromStep3 = planData.userCategory !== null;
        return (
          <Step2_5CurrentHifz
            formData={planData}
            updateFormData={updatePlanData}
            // Only allow next if userCategory is selected (prevent skipping)
            onNext={canProceedFromStep3 ? handleNext : () => {}}
            onBack={handleBack}
          />
        );

      case 4:
        // Pass canProceed prop based on schedule validation if needed
        return (
          <Step3_ScheduleInput
            formData={planData}
            updateFormData={updatePlanData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 5:
        // Now, Step4_PlanDisplay should receive a non-null generatedPlan when loaded from URL
        return (
          <Step4_PlanDisplay
            planData={planData}
            generatedPlan={generatedPlan} // Pass the generated plan state
            onUpdate={handleUpdate}
            onReset={handleReset}
          />
        );
      default:
        return <div>Invalid Step</div>;
    }
  };

  return <div className="space-y-6">{renderStep()}</div>;
}

const HifzPlannerClient: React.FC = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <HifzPlannerClientContent />
    </Suspense>
  );
};
export default HifzPlannerClient;
