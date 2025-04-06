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
  Brain,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Compass,
  BrainCircuit,
  Scale,
  ArrowRight,
} from "lucide-react";

interface MentalClarityDrawerProps {
  state: boolean;
  resolvedTheme?: string;
}

function MentalClarityDrawer({
  state,
  resolvedTheme,
}: MentalClarityDrawerProps) {
  return (
    <Sheet>
      <SheetTrigger>
        <Card
          className="border shadow-lg z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer bg-gradient-to-r from-cyan-100 to-teal-100 dark:from-cyan-900 dark:to-teal-900"
          style={{
            background: state
              ? resolvedTheme === "dark"
                ? "linear-gradient(to right, #134e4a, #155e75)"
                : "linear-gradient(to right, #ccfbf1, #cffafe)"
              : "",
          }}
        >
          <CardContent className="p-6">
            <CardTitle className="mb-3 flex justify-between items-center text-teal-800 dark:text-teal-300">
              Mental Clarity <ArrowUpRight className="h-5 w-5" />
            </CardTitle>

            <CardDescription className="text-gray-700 dark:text-gray-300 text-sm">
              Discover how to achieve a sharper mind, clearer thoughts, and
              undivided focus for better decision-making and wellbeing.
            </CardDescription>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto w-full sm:max-w-md md:max-w-lg">
        <SheetHeader className="pb-4 border-b">
          <SheetTitle className="text-2xl text-teal-700 dark:text-teal-300 flex items-center gap-2">
            <BrainCircuit className="h-6 w-6 text-cyan-500" strokeWidth={1.5} />
            Mental Clarity
          </SheetTitle>
          <SheetDescription className="text-gray-600 dark:text-gray-300">
            Understanding and achieving mental clarity in today's busy world
          </SheetDescription>
        </SheetHeader>

        <div className="py-6 space-y-6">
          {/* What is Mental Clarity */}
          <div className="bg-gradient-to-r from-teal-50 to-teal-100 dark:from-teal-900/40 dark:to-teal-800/40 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-teal-700 dark:text-teal-300 flex items-center gap-2 mb-2">
              <Brain className="h-5 w-5" /> What is Mental Clarity?
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Mental clarity is a state where your mind feels sharp, your
              thoughts are clear, and your focus is undivided. It helps you
              think quickly, solve problems effectively, and maintain
              concentration without distraction.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Having mental clarity is like having a superpower in today's
              fast-paced world - it helps you make wise decisions and handle
              life's challenges with resilience.
            </p>
          </div>

          {/* Causes of Mental Fog */}
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/40 dark:to-amber-800/40 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-amber-700 dark:text-amber-300 flex items-center gap-2 mb-2">
              <AlertTriangle className="h-5 w-5" /> What Causes Mental Fog?
            </h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Insufficient sleep</li>
              <li>• Poor nutrition</li>
              <li>• Information overload</li>
              <li>• Physical inactivity</li>
              <li>• Chronic stress</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm italic">
              Research shows that prolonged stress triggers long-term brain
              changes that may lead to cognitive problems and decreased mental
              clarity.
            </p>
          </div>

          {/* Signs of Poor Mental Clarity */}
          <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/40 dark:to-red-800/40 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-red-700 dark:text-red-300 flex items-center gap-2 mb-2">
              <Compass className="h-5 w-5" /> Signs You're Struggling
            </h3>

            <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
              Common Signs of Poor Mental Clarity
            </p>
            <div>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 pl-2 text-xs">
                <li>
                  <span className="font-medium">Difficulty concentrating:</span>{" "}
                  Mind wandering even during important tasks
                </li>
                <li>
                  <span className="font-medium">Trouble at work:</span> Making
                  unusual mistakes or feeling overwhelmed
                </li>
                <li>
                  <span className="font-medium">Forgetfulness:</span> Misplacing
                  items or missing appointments
                </li>
                <li>
                  <span className="font-medium">Mental sluggishness:</span>{" "}
                  Thinking feels slower than usual
                </li>
                <li>
                  <span className="font-medium">Decision paralysis:</span>{" "}
                  Simple choices become difficult
                </li>
                <li>
                  <span className="font-medium">Social withdrawal:</span>{" "}
                  Avoiding interaction because it feels too demanding
                </li>
                <li>
                  <span className="font-medium">Poor sleep:</span> Trouble
                  falling asleep or waking up tired
                </li>
                <li>
                  <span className="font-medium">Constant fatigue:</span>{" "}
                  Persistent tiredness regardless of rest
                </li>
              </ul>
            </div>
          </div>

          {/* Strategies to Improve */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/40 dark:to-green-800/40 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-green-700 dark:text-green-300 flex items-center gap-2 mb-2">
              <CheckCircle2 className="h-5 w-5" /> Strategies to Improve
            </h3>

            <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
              11 Ways to Boost Mental Clarity
            </p>
            <div>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 pl-2 text-xs">
                <li>
                  <span className="font-medium text-green-600 dark:text-green-300">
                    Prioritize sleep:
                  </span>{" "}
                  Give your brain the "deep clean" it needs
                </li>
                <li>
                  <span className="font-medium text-green-600 dark:text-green-300">
                    Manage stress:
                  </span>{" "}
                  Reduce the fight-or-flight response
                </li>
                <li>
                  <span className="font-medium text-green-600 dark:text-green-300">
                    Limit screen time:
                  </span>{" "}
                  Prevent digital overwhelm
                </li>
                <li>
                  <span className="font-medium text-green-600 dark:text-green-300">
                    Exercise regularly:
                  </span>{" "}
                  Boost circulation to the brain
                </li>
                <li>
                  <span className="font-medium text-green-600 dark:text-green-300">
                    Eat mindfully:
                  </span>{" "}
                  Choose foods that fuel your mind
                </li>
                <li>
                  <span className="font-medium text-green-600 dark:text-green-300">
                    Challenge your brain:
                  </span>{" "}
                  Puzzles, reading, learning new skills
                </li>
                <li>
                  <span className="font-medium text-green-600 dark:text-green-300">
                    Practice mindfulness:
                  </span>{" "}
                  Close mental "tabs" through meditation
                </li>
                <li>
                  <span className="font-medium text-green-600 dark:text-green-300">
                    Balance work-life:
                  </span>{" "}
                  Prevent burnout
                </li>
                <li>
                  <span className="font-medium text-green-600 dark:text-green-300">
                    Reduce clutter:
                  </span>{" "}
                  Simplify your physical and digital spaces
                </li>
                <li>
                  <span className="font-medium text-green-600 dark:text-green-300">
                    Stay hydrated:
                  </span>{" "}
                  Your brain is 75% water
                </li>
                <li>
                  <span className="font-medium text-green-600 dark:text-green-300">
                    Consult healthcare:
                  </span>{" "}
                  Seek help for persistent fog
                </li>
              </ul>
            </div>
          </div>

          {/* Mental Bias Section */}

          <div className="bg-gradient-to-r from-indigo-50 to-purple-100 dark:from-indigo-900/40 dark:to-purple-800/40 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-indigo-700 dark:text-indigo-300 flex items-center gap-2 mb-2">
              <Scale className="h-5 w-5" /> Mental Bias
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Mental biases are systematic errors in thinking that affect our
              decisions and judgments. Even with mental clarity, we can fall
              prey to these cognitive shortcuts.
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-100 dark:from-indigo-900/40 dark:to-purple-800/40 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-indigo-700 dark:text-indigo-300 flex items-center gap-2 mb-2">
              <Scale className="h-5 w-5" /> Overcoming Mental Bias
            </h3>

            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p className="font-medium text-indigo-600 dark:text-indigo-300">
                Common Mental Biases:
              </p>
              <ul className="pl-2 space-y-1">
                <li>
                  • <span className="font-medium">Confirmation bias:</span>{" "}
                  Seeking information that confirms existing beliefs
                </li>
                <li>
                  • <span className="font-medium">Availability bias:</span>{" "}
                  Overestimating the likelihood of things we recall easily
                </li>
                <li>
                  • <span className="font-medium">Anchoring bias:</span> Relying
                  too heavily on the first piece of information
                </li>
                <li>
                  • <span className="font-medium">Negativity bias:</span> Giving
                  more weight to negative experiences
                </li>
              </ul>

              <p className="font-medium text-indigo-600 dark:text-indigo-300 mt-4">
                Strategies to Overcome Bias:
              </p>
              <ul className="pl-2 space-y-2">
                <li>
                  <span className="font-medium">Practice self-awareness:</span>
                  <p className="text-sm mt-1">
                    Recognize when you might be falling into biased thinking
                    patterns. Regular mindfulness meditation helps develop this
                    awareness.
                  </p>
                </li>
                <li>
                  <span className="font-medium">
                    Seek diverse perspectives:
                  </span>
                  <p className="text-sm mt-1">
                    Actively look for viewpoints that challenge your existing
                    beliefs and assumptions.
                  </p>
                </li>
                <li>
                  <span className="font-medium">
                    Use decision-making frameworks:
                  </span>
                  <p className="text-sm mt-1">
                    Structured approaches help ensure you consider multiple
                    factors before reaching conclusions.
                  </p>
                </li>
                <li>
                  <span className="font-medium">Slow down your thinking:</span>
                  <p className="text-sm mt-1">
                    Take time to deliberately process information rather than
                    relying on quick judgments.
                  </p>
                </li>
              </ul>
            </div>
            <br />
            <a
              className="flex p-3 rounded-md border justify-between items-center border-pink-600 text-pink-700 bg-pink-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-pink-100"
              href="/dissolving-bias"
            >
              <span className="font-medium">
                {" "}
                Discover How to Overcome Mental Bias
              </span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Brain-Body Connection */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-blue-700 dark:text-blue-300 flex items-center gap-2 mb-2">
              <Zap className="h-5 w-5" /> Did You Know?
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Your brain's "deep clean" happens during sleep through the
              glymphatic system - a specialized pathway that removes waste
              products from the brain. This process is critical for maintaining
              cognitive function.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Just 20-30 minutes of moderate exercise can immediately boost
              brain function and mental clarity by increasing blood flow and
              oxygen to the brain.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MentalClarityDrawer;
