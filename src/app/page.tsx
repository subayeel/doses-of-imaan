/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Brain, Heart, Lightbulb, Pill } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Particles } from "@/components/magicui/particles";
import { useTheme } from "next-themes";
import { Meteors } from "@/components/magicui/meteors";
import SpiritualityDrawer from "./components/Dashboard Drawers/SpiritualityDrawer";
import ReligionDrawer from "./components/Dashboard Drawers/ReligionDrawer";
import MentalHealthDrawer from "./components/Dashboard Drawers/MentalHealthDrawer";
import MentalClarityDrawer from "./components/Dashboard Drawers/MentalClarityDrawer";
import HeartDiseaseDrawer from "./components/Dashboard Drawers/HeartDiseaseDrawer";
import PhysicalHealthDrawer from "./components/Dashboard Drawers/PhysicalHealthDrawer";
import ParentsDrawer from "./components/Dashboard Drawers/ParentsDrawer";
import ChildrenDrawer from "./components/Dashboard Drawers/ChildrenDrawer";
import RelativesDrawer from "./components/Dashboard Drawers/RelativesDrawer";
import NeighborDrawer from "./components/Dashboard Drawers/NeighborDrawer";
import FriendsDrawer from "./components/Dashboard Drawers/FriendsDrawer";
import LawDrawer from "./components/Dashboard Drawers/LawDrawer";
import SpouseDrawer from "./components/Dashboard Drawers/SpouseDrawer";

const Page = () => {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  const [onHeart, setOnHeart] = useState(false);
  const [onMind, setOnMind] = useState(false);
  const [onHealth, setOnHealth] = useState(false);
  const [onReasoning, setOnReasoning] = useState(false);

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-start w-full pb-24">
      <div
        id="google_translate_element"
        style={{
          position: "fixed",
          right: 0,
          top: 0,
          zIndex: 1000,
          backgroundColor: "#eee",
          borderRadius: "10px",
          padding: "12px",
        }}
      ></div>
      <div className="relative flex flex-col items-center justify-start">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl mt-8 font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 z-10">
          Spiritual Journey
        </span>

        <div className="grid md:grid-cols-5">
          <div className="relative hidden md:flex my-12 justify-center md:col-span-1">
            <div
              onMouseOver={() => setOnMind(true)}
              onMouseOut={() => setOnMind(false)}
              className=" flex items-center absolute top-0 right-[50%] left-auto p-2 gap-2 text-xs font-bold rounded-full border bg-white dark:bg-gray-500 shadow-md hover:cursor-pointer hover:bg-black hover:text-white hover:shadow-md z-11 scale-90"
            >
              <Brain size={14} /> Brain
            </div>
            <div
              onMouseOver={() => setOnReasoning(true)}
              onMouseOut={() => setOnReasoning(false)}
              className=" flex items-center absolute top-0 right-0 left-auto p-2 gap-2 text-xs font-bold rounded-full border bg-white dark:bg-gray-500 shadow-md hover:cursor-pointer hover:bg-black hover:text-white hover:shadow-md z-11 scale-90"
            >
              <Lightbulb size={14} /> Reasoning
            </div>
            <div
              onMouseOver={() => setOnHeart(true)}
              onMouseOut={() => setOnHeart(false)}
              className=" flex items-center absolute top-[20%] right-[30%] left-auto p-2 gap-2 text-xs font-bold rounded-full border bg-white dark:bg-gray-500 shadow-md hover:cursor-pointer hover:bg-black hover:text-white hover:shadow-md z-11 scale-90"
            >
              <Heart size={14} /> Heart
            </div>
            <div
              onMouseOver={() => setOnHealth(true)}
              onMouseOut={() => setOnHealth(false)}
              className=" flex items-center absolute top-[35%] right-[30%] left-auto p-2 gap-2 text-xs font-bold rounded-full border bg-white dark:bg-gray-500 shadow-md hover:cursor-pointer hover:bg-black hover:text-white hover:shadow-md z-11 scale-90"
            >
              <Pill size={14} /> Health
            </div>
            {resolvedTheme === "dark" ? (
              <Image
                src="/human-dark.png"
                alt="Human"
                height={200}
                width={300}
                objectFit="contain"
                className="pointer-events-auto "
              />
            ) : (
              <Image
                src="/human.png"
                alt="Human"
                height={200}
                width={300}
                objectFit="contain"
                className="pointer-events-auto"
              />
            )}
          </div>

          <div className="flex flex-col gap-4 md:col-span-4 scale-90 z-10">
            <div className="flex gap-4 flex-wrap md:flex-nowrap">
              <SpiritualityDrawer
                resolvedTheme={resolvedTheme}
                state={onReasoning}
              />
              <ReligionDrawer
                resolvedTheme={resolvedTheme}
                state={onReasoning}
              />
            </div>
            <div className="flex gap-4 flex-wrap md:flex-nowrap">
              <MentalHealthDrawer
                resolvedTheme={resolvedTheme}
                state={onMind}
              />

              <MentalClarityDrawer
                resolvedTheme={resolvedTheme}
                state={onMind}
              />
            </div>

            <div className="flex gap-4 items-start flex-wrap md:flex-nowrap">
              <HeartDiseaseDrawer
                resolvedTheme={resolvedTheme}
                state={onHeart}
              />

              <PhysicalHealthDrawer
                resolvedTheme={resolvedTheme}
                state={onHealth}
              />
            </div>
          </div>
        </div>

        <Particles
          className="absolute inset-0 z-0"
          quantity={700}
          ease={80}
          color={color}
          refresh
        />
      </div>

      <Separator className="my-12" />
      <div className="relative overflow-hidden flex flex-col items-center justify-center">
        <Meteors number={50} />

        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-primary to-gray-300/80 bg-clip-text text-center text-5xl md:text-7xl mt-8 font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 z-10">
          Your Family
        </span>

        <div className="flex md:grid md:grid-cols-3 gap-6 scale-90 items-center flex-col-reverse">
          <div className="flex flex-col gap-6 md:col-span-2">
            <ParentsDrawer />

            <SpouseDrawer />
            <ChildrenDrawer />

            <RelativesDrawer />
          </div>

          <div className="md:col-span-1">
            <Image
              src="/house.png"
              alt="House"
              height={500}
              width={500}
              objectFit="contain"
              className="z-10 m-auto"
            ></Image>
          </div>
        </div>
      </div>

      <Separator />

      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-primary to-gray-300/80 bg-clip-text text-center text-5xl md:text-7xl mt-8 font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 z-10">
        Community
      </span>
      <div className="relative overflow-hidden grid md:grid-cols-3 gap-8 items-center justify-center py-12 px-4">
        <div className="md:col-span-1">
          <Image
            src="/community.png"
            alt="Community"
            height={500}
            width={400}
            objectFit="contain"
            className="z-10 m-auto"
          ></Image>
        </div>

        <div className="flex flex-col gap-6 md:col-span-2 max-w-2xl">
          <NeighborDrawer />

          <FriendsDrawer />
        </div>
      </div>

      <Separator />

      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-primary to-gray-300/80 bg-clip-text text-center text-5xl md:text-7xl mt-8 font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 z-10 my-6">
        Your Country
      </span>
      <div className="relative overflow-hidden flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center justify-start py-12 px-4">
        <div className="flex flex-col gap-6 md:col-span-1 max-w-2xl">
          <LawDrawer />
        </div>
        <div className="md:col-span-1">
          <Image
            src="/world.png"
            alt="Community"
            height={800}
            width={800}
            objectFit="contain"
            className="z-10 m-auto dark:invert dark:brightness-0"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Page;
