/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowUpRight,
  Heart,
  Brain,
  Sparkles,
  BookOpen,
  UserRound,
  AlertTriangle,
} from "lucide-react";

interface MentalHealthDrawerProps {
  state: boolean;
  resolvedTheme?: string;
}

function MentalHealthDrawer({ state, resolvedTheme }: MentalHealthDrawerProps) {
  return (
    <Sheet>
      <SheetTrigger>
        <Card
          className="border shadow-lg z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900"
          style={{
            background: state
              ? resolvedTheme === "dark"
                ? "linear-gradient(to right, #1a2742, #2d1f4f)"
                : "linear-gradient(to right, #dce3f9, #efe1ff)"
              : "",
          }}
        >
          <CardContent className="p-6">
            <CardTitle className="mb-3 flex justify-between items-center text-blue-800 dark:text-blue-300">
              Mental Health <ArrowUpRight className="h-5 w-5" />
            </CardTitle>

            <CardDescription className="text-gray-700 dark:text-gray-300 text-sm">
              True peace of mind comes through connecting with Allah. Explore
              how Islamic practices create mental tranquility and help manage
              life's challenges.
            </CardDescription>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto w-full sm:max-w-md md:max-w-lg">
        <SheetHeader className="pb-4 border-b">
          <SheetTitle className="text-2xl text-purple-700 dark:text-purple-300 flex items-center gap-2">
            <Heart
              className="h-6 w-6 text-pink-500"
              fill="#ec4899"
              strokeWidth={1.5}
            />
            Mental Health & Islam
          </SheetTitle>
          <SheetDescription className="text-gray-600 dark:text-gray-300">
            Understanding mental health from an Islamic perspective
          </SheetDescription>
        </SheetHeader>

        <div className="py-6 space-y-6">
          {/* What is Mental Health */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-blue-700 dark:text-blue-300 flex items-center gap-2 mb-2">
              <Brain className="h-5 w-5" /> What is Mental Health?
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Mental health affects how we think, feel, act, handle stress,
              relate to others, and make choices. It's not limited to emotional
              problems but encompasses all aspects of our wellbeing.
            </p>
          </div>

          {/* Common Mental Health Issues */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/40 dark:to-green-800/40 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-green-700 dark:text-green-300 flex items-center gap-2 mb-2">
              <AlertTriangle className="h-5 w-5" /> Common Mental Health Issues
            </h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                <span className="font-medium">Stress:</span> Body's response to
                demands that can affect physical and emotional health
              </li>
              <li>
                <span className="font-medium">Anxiety:</span> Excessive worry
                and fear unrelated to specific events
              </li>
              <li>
                <span className="font-medium">Depression:</span> Persistent
                feelings of hopelessness affecting daily activities
              </li>
              <li>
                <span className="font-medium">Panic Attacks:</span> Sudden
                intense fear with physical symptoms
              </li>
            </ul>
          </div>

          {/* Connection to Islam */}
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/40 dark:to-purple-800/40 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-purple-700 dark:text-purple-300 flex items-center gap-2 mb-2">
              <BookOpen className="h-5 w-5" /> Islam & Mental Health
            </h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-3">
              <li>
                <span className="font-medium text-purple-600 dark:text-purple-300">
                  Spiritual Resilience:
                </span>
                <p>
                  Islam offers a spiritual sanctuary through a strong
                  relationship with Allah, helping cultivate inner strength and
                  positive thoughts.
                </p>
              </li>
              <li>
                <span className="font-medium text-purple-600 dark:text-purple-300">
                  Role of Patience:
                </span>
                <p>
                  Patience (mentioned in about 200 Quranic verses) helps Muslims
                  proceed toward worthy goals despite challenges.
                </p>
              </li>
              <li>
                <span className="font-medium text-purple-600 dark:text-purple-300">
                  Divine Support:
                </span>
                <p>
                  "For those who fear Allah, He always prepares a way out..."
                  (Quran 65:2-3)
                </p>
              </li>
            </ul>
          </div>

          {/* Misconceptions */}
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/40 dark:to-amber-800/40 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-amber-700 dark:text-amber-300 flex items-center gap-2 mb-2">
              <Sparkles className="h-5 w-5" /> Common Misconceptions
            </h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                Mental health issues don't indicate lack of faith - they affect
                everyone
              </li>
              <li>
                Seeking professional help is compatible with Islamic values
              </li>
              <li>
                Muslims can experience mental health challenges while having
                strong faith
              </li>
              <li>
                Mental health professionals respect religious values and beliefs
              </li>
            </ul>
          </div>

          {/* Guidance */}
          <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/40 dark:to-red-800/40 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-red-700 dark:text-red-300 flex items-center gap-2 mb-2">
              <UserRound className="h-5 w-5" /> Seeking Help
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              While imams provide valuable spiritual guidance, most aren't
              trained in mental health. Islam encourages seeking professional
              help when needed.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Islam doesn't require superhuman strength - it offers solutions
              for regaining psychological balance while supporting appropriate
              treatment.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MentalHealthDrawer;
