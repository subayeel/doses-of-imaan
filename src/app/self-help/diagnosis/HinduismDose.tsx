import RevertStoryCard from "@/app/components/RevertStoryCard";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HINDU_BRAHMIN_TO_ISLAM,
  HINDU_TO_ISLAM,
  HINDU_TO_ISLAM_FEMALE,
} from "@/data/revertStories";
import { Text } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";

interface HinduismDoseProps {
  setStep: Dispatch<SetStateAction<string>>;
  resetSurvey: () => void;
}
function HinduismDose({ setStep, resetSurvey }: HinduismDoseProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Results</CardTitle>
        <CardDescription>
          Based on your responses, we suggest learning more about the existence
          of God.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Card
          className="border rounded-md overflow-hidden relative flex items-center gap-4 hover:bg-gray-200 hover:cursor-pointer"
          onClick={() => (window.location.href = "/primary/god")}
        >
          <CardContent className="flex items-center gap-4">
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
          </CardContent>
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
          <RevertStoryCard story={HINDU_BRAHMIN_TO_ISLAM} />
          <RevertStoryCard story={HINDU_TO_ISLAM} />
          <RevertStoryCard story={HINDU_TO_ISLAM_FEMALE} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => setStep("belief")}>
          Back
        </Button>
        <Button onClick={resetSurvey}>Restart Survey</Button>
      </CardFooter>
    </Card>
  );
}

export default HinduismDose;
