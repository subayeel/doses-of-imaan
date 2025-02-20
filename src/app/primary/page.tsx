"use client";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightIcon, Copy, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import IslamicGuidance from "../components/Guidance";

const Page = () => {
  const { theme } = useTheme();

  return (
    <div className=" w-full px-3 md:px-6">
      <div className="space-y-4 flex flex-col justify-center mt-10">
        <div
          className={cn(
            "m-auto z-10 group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 h-fit max-w-56 w-full"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-between px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Spiritual Journey</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
        <h1 className="text-5xl font-semibold text-center">We Start Here!</h1>
      </div>
      {/* God Card */}
      <div className="flex gap-6 items-stretch relative overflow-hidden w-full py-4 ">
        <div className="cursor-pointer flex flex-col justify-between  border text-4xl flex-2 w-full py-6 rounded-xl">
          <CardContent>
            <div className="flex justify-between w-full">
              <p className="text-3xl mb-6">God's Existence</p>

              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-gray-50"
                >
                  <Copy />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-gray-50"
                >
                  <Info />
                </Button>
              </div>
            </div>
            <ul className="text-sm text-gray-600">
              <li>
                <strong>Design Argument:</strong> Like a phone made of oil and
                sand couldn't form randomly, the universe's complexity points to
                a designer.
              </li>
              ...
              <li>
                <strong>Order in Universe:</strong>Fine-tuned conditions for
                life (Earth's rotation, habitable zone, atmosphere) suggest
                intelligent design
              </li>
              ...
              <li>
                <strong>Everything has a cause:</strong> The universe couldn't
                come from nothing or create itself, pointing to a Creator.
              </li>
            </ul>
          </CardContent>
          <div className="flex justify-center gap-4 w-full mt-4">
            <div
              className={cn(
                "z-10 group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 h-fit max-w-36 w-full"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-between px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Logic</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
            <div
              className={cn(
                "z-10 group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 h-fit max-w-48 w-full"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-between px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Reasoning</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </div>
        </div>

        <MagicCard
          className="relative overflow-hidden max-w-[400px] z-10 border"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="flex justify-between p-6 w-full">
            <p className="text-3xl">God's Oneness</p>

            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-50"
              >
                <Copy />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-50"
              >
                <Info />
              </Button>
            </div>
          </div>
          <CardContent>
            <ul className="text-sm text-gray-600">
              <li>
                <strong>Creator must be different from creation:</strong> If
                Creator was like creation, it would need a creator too.
              </li>
              ...
              <li>
                <strong>Cannot have infinite creators:</strong>Cannot have
                infinite creators: Like an endless chain of people refusing to
                lift a table, we need an uncaused cause.
              </li>
              ...
              <li>
                <strong>One Unique Creator:</strong>One Unique Creator: The
                Creator must be self-sufficient, eternal, and uncreated.
              </li>
            </ul>

            <div className="flex justify-center mt-4 gap-4">
              <div
                className={cn(
                  "z-10 group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 h-fit max-w-48 w-full"
                )}
              >
                <AnimatedShinyText className="inline-flex items-center justify-between px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span>✨ Logic</span>
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </div>
              <div
                className={cn(
                  "z-10 group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 h-fit max-w-48 w-full"
                )}
              >
                <AnimatedShinyText className="inline-flex items-center justify-between px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span>✨ Reasoning</span>
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </div>
            </div>
          </CardContent>
        </MagicCard>
      </div>

      {/* Revelation & Prophethood */}
      <div className="flex gap-8 justify-center">
        <Card className="relative overflow-hidden max-w-[400px] mt-10 z-10">
          <div className="flex justify-between p-6 w-full">
            <p className="text-3xl">Revelation (Quran)</p>

            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-50"
              >
                <Copy />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-50"
              >
                <Info />
              </Button>
            </div>
          </div>
          <CardContent>
            <ul className="text-gray-700 text-sm">
              <li>
                <strong>Perfect Preservation:</strong>
                Unchanged text for 1400+ years, memorized by millions globally.
              </li>
              ...
              <li>
                <strong>Linguistic Miracle:</strong>
                Unmatched literary excellence, even by master Arab poets.
              </li>
              ...
              <li>
                <strong>Universal Message:</strong>
                Teachings align with rational understanding of Creator.
              </li>
              ...
              <li>
                <strong>Scientific Harmony:</strong>
                Natural phenomena descriptions align with modern discoveries.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className=" relative overflow-hidden max-w-[400px] mt-10">
          <div className="flex justify-between p-6 w-full">
            <p className="text-3xl">Prophethood</p>

            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-50"
              >
                <Copy />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-50"
              >
                <Info />
              </Button>
            </div>
          </div>
          <CardContent>
            <ul className="text-sm text-gray-700">
              <li>
                <strong>Character Analysis:</strong>
                Known as 'The Truthful' even before prophethood.
              </li>
              ...
              <li>
                <strong>No Personal Gain:</strong>
                Faced persecution, lived simply, rejected worldly offers.
              </li>
              ...
              <li>
                <strong>Complete System:</strong>
                Brought comprehensive life guidance (social, economic,
                spiritual).
              </li>
              ...
              <li>
                <strong>Fulfilled Prophecies:</strong>
                Accurately predicted future events.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="flex w-full justify-center items-center mt-3 mb-6 text-3xl">
        ...
      </div>
      <IslamicGuidance />
    </div>
  );
};

export default Page;
