"use client";
import React from "react";

import { CardContent } from "@/components/ui/card";
import { Copy, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import IslamicGuidance from "@/app/components/Guidance";

const Page = () => {
  const { theme } = useTheme();

  return (
    <div className=" w-full px-3 md:px-6 space-y-6">
      <div className="space-y-4 flex flex-col justify-center mt-10">
        <div
          className={cn(
            "m-auto z-10 group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 h-fit "
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-between px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Spiritual Journey</span>
          </AnimatedShinyText>
        </div>
      </div>
      {/* God Card */}
      <div className="grid md:grid-cols-2 gap-6 items-stretch relative overflow-hidden w-full">
        <MagicCard
          className="cursor-pointer flex flex-col justify-between  border text-4xl w-full py-6 rounded-xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <CardContent>
            <div className="flex justify-between w-full">
              <p className="text-3xl mb-6">God&apos;s Existence</p>

              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Copy />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Info />
                </Button>
              </div>
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-400 ">
              <li>
                <strong className="text-xl">Design Argument:</strong>
                <br></br> Like a phone made of oil and sand couldn&apos;t form
                randomly, the universe&apos;s complexity points to a designer.
              </li>
              ...
              <li>
                <strong className="text-xl">Order in Universe:</strong>
                <br></br>
                Fine-tuned conditions for life (Earth&apos;s rotation, habitable
                zone, atmosphere) suggest intelligent design
              </li>
              ...
              <li>
                <strong className="text-xl">Everything has a cause:</strong>
                <br></br> The universe couldn&apos;t come from nothing or create
                itself, pointing to a Creator.
              </li>
            </ul>
          </CardContent>
        </MagicCard>

        <MagicCard
          className="relative overflow-hidden z-10 border flex flex-col w-full"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="flex justify-between p-6 w-full">
            <p className="text-3xl">God&apos;s Oneness</p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Copy />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full ">
                <Info />
              </Button>
            </div>
          </div>
          <CardContent>
            <ul className="text-sm text-gray-600 dark:text-gray-400">
              <li>
                <strong className="text-xl">
                  Creator must be different from creation:
                </strong>
                <br></br> If Creator was like creation, it would need a creator
                too.
              </li>
              ...
              <li>
                <strong className="text-xl">
                  Cannot have infinite creators:
                </strong>
                <br></br>
                Cannot have infinite creators: Like an endless chain of people
                refusing to lift a table, we need an uncaused cause.
              </li>
              ...
              <li>
                <strong className="text-xl">One Unique Creator:</strong>
                <br></br>One Unique Creator: The Creator must be
                self-sufficient, eternal, and uncreated.
              </li>
            </ul>
          </CardContent>
        </MagicCard>
      </div>

      {/* Revelation & Prophethood */}
      <div className="grid md:grid-cols-2 gap-6 items-stretch relative overflow-hidden w-ful">
        <MagicCard
          className="relative overflow-hidden shadow-none z-10 border flex flex-col w-full"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="flex justify-between p-6 w-full">
            <p className="text-3xl">Revelation (Quran)</p>

            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="rounded-full ">
                <Copy />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full ">
                <Info />
              </Button>
            </div>
          </div>
          <CardContent>
            <ul className="text-gray-600 dark:text-gray-400 text-sm">
              <li>
                <strong className="text-xl">Perfect Preservation:</strong>
                <br></br>
                Unchanged text for 1400+ years, memorized by millions globally.
              </li>
              ...
              <li>
                <strong className="text-xl">Linguistic Miracle:</strong>
                <br></br>
                Unmatched literary excellence, even by master Arab poets.
              </li>
              ...
              <li>
                <strong className="text-xl">Universal Message:</strong>
                <br></br>
                Teachings align with rational understanding of Creator.
              </li>
              ...
              <li>
                <strong className="text-xl">Scientific Harmony:</strong>
                <br></br>
                Natural phenomena descriptions align with modern discoveries.
              </li>
            </ul>
          </CardContent>
        </MagicCard>

        <MagicCard
          className=" relative overflow-hidden shadow-none border flex flex-col w-full"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="flex justify-between p-6 w-full">
            <p className="text-3xl">Prophethood</p>

            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="rounded-full ">
                <Copy />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Info />
              </Button>
            </div>
          </div>
          <CardContent>
            <ul className="text-sm text-gray-600 dark:text-gray-400">
              <li>
                <strong className="text-xl">Character Analysis:</strong>
                <br></br>
                Known as &apos;The Truthful&apos; even before prophethood.
              </li>
              ...
              <li>
                <strong className="text-xl">No Personal Gain:</strong>
                <br></br>
                Faced persecution, lived simply, rejected worldly offers.
              </li>
              ...
              <li>
                <strong className="text-xl">Complete System:</strong>
                <br></br>
                Brought comprehensive life guidance (social, economic,
                spiritual).
              </li>
              ...
              <li>
                <strong className="text-xl">Fulfilled Prophecies:</strong>
                <br></br>
                Accurately predicted future events.
              </li>
            </ul>
          </CardContent>
        </MagicCard>
      </div>

      <div className="flex w-full justify-start mt-10 items-center mb-6 text-5xl text-gray-800 font-bold">
        Religion Dose
      </div>
      <IslamicGuidance />
    </div>
  );
};

export default Page;
