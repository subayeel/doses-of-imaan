/* eslint-disable react/no-unescaped-entities */
import RevertStoryCard from "@/app/components/RevertStoryCard";
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
  CHRISTIANITY_TO_ATHEISM_TO_ISLAM,
  CHRISTIANITY_TO_ISLAM,
  FEMALE_CHRISTIANITY_TO_ISLAM,
  JEWISH_TO_ISLAM,
} from "@/data/revertStories";
import { Text } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";

interface ChristianityDoseProps {
  setStep: Dispatch<SetStateAction<string>>;
  resetSurvey: () => void;
}
function ChristianityDose({ setStep, resetSurvey }: ChristianityDoseProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Results</CardTitle>
        <CardDescription>
          Based on your responses, we suggest learning more about the existence
          of God.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
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
        </Card>
        <Card
          className="border rounded-md overflow-hidden relative flex items-center gap-4 hover:bg-gray-200 hover:cursor-pointer"
          onClick={() => (window.location.href = "/primary/oneness")}
        >
          <CardContent className="flex items-center gap-4">
            <div className="space-y-2">
              <CardTitle> Primary Dose: Understanding God's Oneness</CardTitle>
              <CardDescription>
                Explore why there can only be One Creator and why this Creator
                must be different from everything in our universe.
              </CardDescription>
            </div>
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => (window.location.href = "/primary/oneness")}
            >
              <Text className="h-4 w-4" />
              Take Dose
            </Button>
          </CardContent>
        </Card>
        <Card
          className="border rounded-md overflow-hidden relative flex items-center gap-4 hover:bg-gray-200 hover:cursor-pointer"
          onClick={() => (window.location.href = "/primary/revelation")}
        >
          <CardContent className="flex items-center gap-4">
            <div className="space-y-2">
              <CardTitle> Primary Dose: Why We Need Divine Guidance</CardTitle>
              <CardDescription>
                Exploring the necessity of revelation and why the Creator would
                communicate with us
              </CardDescription>
            </div>
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => (window.location.href = "/primary/revelation")}
            >
              <Text className="h-4 w-4" />
              Take Dose
            </Button>
          </CardContent>
        </Card>

        <Card
          className="border rounded-md overflow-hidden relative flex items-center gap-4 hover:bg-gray-200 hover:cursor-pointer"
          onClick={() => (window.location.href = "/primary/prophethood")}
        >
          <CardContent className="flex items-center gap-4">
            <div className="space-y-2">
              <CardTitle>
                Primary Dose: Was Muhammad ﷺ Really a Messenger of God?
              </CardTitle>
              <CardDescription>
                Explore the logical analysis of Prophet Muhammad's claim to
                prophethood
              </CardDescription>
            </div>
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => (window.location.href = "/primary/prophethood")}
            >
              <Text className="h-4 w-4" />
              Take Dose
            </Button>
          </CardContent>
        </Card>

        <Card
          className="border rounded-md overflow-hidden relative flex items-center gap-4 hover:bg-gray-200 hover:cursor-pointer"
          onClick={() => (window.location.href = "/primary/quran")}
        >
          <CardContent className="flex items-center gap-4 justify-between w-full">
            <div className="space-y-2">
              <CardTitle>
                Primary Dose: Why the Quran is Divine Revelation
              </CardTitle>
              <CardDescription>
                Discover the compelling evidence for the divine origin of the
                Quran
              </CardDescription>
            </div>
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => (window.location.href = "/primary/quran")}
            >
              <Text className="h-4 w-4" />
              Take Dose
            </Button>
          </CardContent>
        </Card>

        <div className="py-4 space-y-2">
          <CardTitle>Stories of Reverts</CardTitle>
          <CardDescription>
            You can also read about the stories of Reverts who were on the same
            spiritual journey as you
          </CardDescription>
        </div>

        <div className="flex flex-col gap-4">
          <RevertStoryCard story={CHRISTIANITY_TO_ISLAM} />
          <RevertStoryCard story={FEMALE_CHRISTIANITY_TO_ISLAM} />
          <RevertStoryCard story={CHRISTIANITY_TO_ATHEISM_TO_ISLAM} />
          <RevertStoryCard story={JEWISH_TO_ISLAM} />
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

export default ChristianityDose;
