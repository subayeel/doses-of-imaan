import RevertStoryCard from "@/app/components/RevertStoryCard";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CHRISTIANITY_TO_ATHEISM_TO_ISLAM,
  MULTIPLE_FAITH_TO_ISLAM,
} from "@/data/revertStories";
import { Text } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";

interface AtheismDoseProps {
  setStep: Dispatch<SetStateAction<string>>;
  resetSurvey: () => void;
}

function AtheismDose({ setStep, resetSurvey }: AtheismDoseProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Results</CardTitle>
        <CardDescription>
          Based on your responses, we suggest learning more about the existence
          of God.
        </CardDescription>
      </CardHeader>
      <div className="px-6 space-y-2">
        <Card
          className="border rounded-md overflow-hidden relative flex items-center gap-4 hover:bg-gray-200 hover:cursor-pointer"
          onClick={() => (window.location.href = "/primary/god")}
        >
          <div className="space-y-2 p-6 flex items-center justify-between gap-4">
            <div className="space-y-2">
              <CardTitle> Primary Dose: Existence of God</CardTitle>
              <CardDescription>
                Explore the evidence for the Creator through common sense,
                design, and universal order.
              </CardDescription>
            </div>
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => (window.location.href = "/primary/god")}
            >
              <Text className="h-4 w-4" />
              Take Dose
            </Button>
          </div>
          <BorderBeam
            duration={6}
            size={400}
            className="from-transparent via-red-500 to-transparent"
          />
        </Card>

        <div className="py-4 space-y-2">
          <CardTitle>Stories of Reverts</CardTitle>
          <CardDescription>
            You can also read about the stories of Reverts who were on the same
            spiritual journey as you
          </CardDescription>
        </div>

        <div className="flex flex-col gap-4">
          <RevertStoryCard story={MULTIPLE_FAITH_TO_ISLAM} />
          <RevertStoryCard story={CHRISTIANITY_TO_ATHEISM_TO_ISLAM} />
        </div>
      </div>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => setStep("belief")}>
          Back
        </Button>
        <Button onClick={resetSurvey}>Restart Survey</Button>
      </CardFooter>
    </Card>
  );
}

export default AtheismDose;
