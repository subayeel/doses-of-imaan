/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";

import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import Image from "next/image";
import { ArrowUpRight, Brain, Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LifeScale from "./components/LifeScale";

const Page = () => {
  // const spiritualSteps = [
  //   {
  //     title: "God's Existence",
  //     description:
  //       "Understanding God's existence through Reasons, Common Sense and Logic",
  //     link: "/primary/god",
  //     status: "completed",
  //   },
  //   {
  //     title: "Oneness of God",
  //     description: "Exploring the concept of One God through reasoning",
  //     link: "/primary/oneness",
  //     status: "completed",
  //   },
  //   {
  //     title: "Revelation from God",
  //     description: "How God communicates with humanity",
  //     link: "/primary/revelation",
  //     status: "active",
  //   },
  //   {
  //     title: "Quran",
  //     description: "Studying the divine book",
  //     link: "/primary/quran",
  //     status: "upcoming",
  //   },
  //   {
  //     title: "Prophethood",
  //     description: "Learning about the messengers of God",
  //     link: "/primary/prophethood",
  //     status: "upcoming",
  //   },
  // ];
  return (
    <div className="relative flex flex-col items-center justify-start w-full h-screen">
      <div
        className={cn(
          "my-4 mx-auto z-10 group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 h-fit "
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-between px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Your Spiritual Journey</span>
        </AnimatedShinyText>
      </div>

      <div className="grid md:grid-cols-5 px-4">
        <div className="relative hidden md:flex justify-center md:col-span-1 ">
          <div className=" flex items-center absolute top-0 right-[50%] left-auto p-2 gap-2 text-xs font-bold rounded-full border bg-white shadow-md hover:cursor-pointer hover:bg-black hover:text-white hover:shadow-md">
            <Brain size={14} /> Brain
          </div>
          <div className=" flex items-center absolute top-[20%] right-[30%] left-auto p-2 gap-2 text-xs font-bold rounded-full border bg-white shadow-md hover:cursor-pointer hover:bg-black hover:text-white hover:shadow-md">
            <Heart size={14} /> Heart
          </div>
          <Image
            src="/human.png"
            alt="Human"
            height={800}
            width={300}
            objectFit="contain h-[100px]"
          ></Image>
        </div>

        <div className="flex flex-col gap-2 md:col-span-4">
          <div className="flex gap-2 flex-wrap md:flex-nowrap">
            <Card className="border shadow-none">
              <CardContent>
                <CardTitle className="mb-2 flex justify-between">
                  Mental Health <ArrowUpRight />
                </CardTitle>

                <CardDescription>
                  Understanding how mental health influences emotions and
                  behavior is crucial for personal well-being. Would you like to
                  explore ways to cultivate emotional balance and improve mental
                  resilience?
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border shadow-none ">
              <CardContent>
                <CardTitle className="mb-2 flex justify-between">
                  Mental Clarity <ArrowUpRight />
                </CardTitle>
                <CardDescription>
                  Mental clarity is the ability to think clearly, focus, and
                  make decisions without feeling distracted. It can impact your
                  productivity, relationships, and overall well-being.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="flex gap-2 flex-wrap md:flex-nowrap">
            <Card className="border shadow-none">
              <CardContent>
                <CardTitle className="mb-2 flex justify-between">
                  Diseases of the Heart <ArrowUpRight />
                </CardTitle>
                <CardDescription className="flex flex-wrap gap-1">
                  <Badge>Desires and Greed</Badge>
                  <Badge>Negative Verbal and Physical Behaviors</Badge>
                  <Badge>Negative Emotions</Badge>
                  <Badge>Negative Character</Badge>
                  <Badge>Negative Spirituality</Badge>
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border shadow-none">
              <CardContent>
                <CardTitle className="mb-2 flex justify-between">
                  Physical Health <ArrowUpRight />
                </CardTitle>
                <CardDescription>
                  Physical health can be defined as the normal functioning of
                  the body. Representing one dimension of total well-being, it's
                  about how your body grows, feels and moves, how you care for
                  it, and what you put into it.
                </CardDescription>
                <div className="flex flex-wrap gap-1 mt-2">
                  <Badge>Exercise</Badge>
                  <Badge>Nutrition</Badge>
                  <Badge>Sleep</Badge>
                  <Badge>Manage stress</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex gap-2 flex-wrap md:flex-nowrap">
            <Card className="border shadow-none">
              <CardContent>
                <CardTitle className="mb-2 flex justify-between">
                  Spirituality <ArrowUpRight />
                </CardTitle>
                <CardDescription>
                  Spirituality is not "Self-Actualization" or "Transcendence" ,
                  it is finding the true purpose of Life by using your own
                  intellect and following your Heart with 0 biases.
                  <br />
                  <div className="flex flex-wrap gap-1 mt-1">
                    <Badge>Existence of Higher Power</Badge>
                    <Badge>Attribute of the Higher Power</Badge>
                  </div>
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border shadow-none">
              <CardContent>
                <CardTitle className="mb-2 flex justify-between">
                  Religion <ArrowUpRight />
                </CardTitle>
                <CardDescription>
                  The need for religion and the challenge of choosing one can
                  feel overwhelming, but your own common sense is enough to
                  guide you.
                  <br />
                  <div className="flex flex-wrap gap-1 mt-1">
                    <Badge>Oneness of Higher Power</Badge>
                    <Badge>Revelation</Badge>
                  </div>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content */}
      {/* <main className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Compass className="h-8 w-8 text-emerald-600 hidden md:block" />
                  <span className="text-3xl">Begin Your Spiritual Journey</span>
                </CardTitle>
                <CardDescription className="text-xl">
                  Follow these steps on your journey of faith
                </CardDescription>
              </CardHeader>
              <div className="px-6">
                <div className="py-4">
                  {spiritualSteps.map((step, index) => (
                    <StepperItem
                      key={index}
                      title={step.title}
                      description={step.description}
                      isCompleted={step.status === "completed"}
                      isActive={step.status === "active"}
                      isLast={index === spiritualSteps.length - 1}
                      link={step.link}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6 md:col-span-2">
            <Card className="bg-white border-l-4 border-l-amber-500">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-amber-500 " />
                  <span>Diagnose Your Faith</span>
                </CardTitle>
                <CardDescription>
                  Evaluate your faith with a simple assessment
                </CardDescription>
              </CardHeader>
              <div className="px-6">
                <div className="space-y-3">
                  <p className="text-gray-700">
                    Take a short questionnaire to understand the strength of
                    your faith and get personalized recommendations.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant="outline"
                      className="bg-amber-50 text-amber-700 border-amber-200"
                    >
                      5 minutes
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-amber-50 text-amber-700 border-amber-200"
                    >
                      10 questions
                    </Badge>
                  </div>
                </div>
              </div>
              <CardFooter>
                <Link href={"/self-help/diagnosis"}>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600">
                    Start Assessment <ArrowRight />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <div>
              <ReligionsGrowth />
            </div>
          </div>
        </div>
      </main> */}

      {/* God Card */}
      {/* <div className="grid md:grid-cols-2 gap-6 items-stretch relative overflow-hidden w-full">
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
              ...
              <li>
                <strong className="text-xl">Instinctive Evidence:</strong>
                <br></br> Every person feels inside himself that he has a Lord
                and Creator.
              </li>
              ...
              <li>
                <strong className="text-xl">
                  COSMOLOGICAL AND ONTOLOGICAL ARGUMENTS:
                </strong>
                <br></br> Kalam Argument, Leibniz and the Principle of
                Sufficient Reason, Alvin Plantinga&apos;s Victorious
                Argument&apos;, Gödel&apos;s Ontological Argument
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
      </div> */}

      {/* Revelation & Prophethood */}
      {/* <div className="grid md:grid-cols-2 gap-6 items-stretch relative overflow-hidden w-ful">
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
      </div> */}

      {/* <div className="flex w-full justify-start mt-10 items-center mb-6 text-5xl text-gray-800 font-bold">
        Religion Dose
      </div>
      <IslamicGuidance /> */}

      <div className="absolute bottom-0 right-0 left-0">
        <LifeScale />
      </div>
    </div>
  );
};

export default Page;
