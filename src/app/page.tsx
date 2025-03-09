/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Brain, Heart, Lightbulb, Pill } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Separator } from "@/components/ui/separator";
import { Particles } from "@/components/magicui/particles";
import { useTheme } from "next-themes";
import { Meteors } from "@/components/magicui/meteors";

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
    <div className="relative flex flex-col items-center justify-start w-full pb-24">
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
              <Card
                className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer"
                style={{
                  background: onReasoning
                    ? resolvedTheme === "dark"
                      ? "#1a2e1a"
                      : "#f9ffd9"
                    : "",
                }}
              >
                <CardContent>
                  <CardTitle className="mb-2 flex justify-between">
                    Spirituality <ArrowUpRight />
                  </CardTitle>
                  <CardDescription>
                    Have you ever gazed at the stars and wondered who created
                    all this? Using pure logic and reasoning, we'll explore how
                    the intricate design of our universe points to the existence
                    of Allah. No blind faith required—just your intellect and an
                    open heart to discover the Creator's unmistakable signs.
                    <br />
                    <div className="flex flex-wrap gap-1 mt-1">
                      <Badge variant="secondary">Evidence of Creator</Badge>
                      <Badge variant="secondary">Divine Attributes</Badge>
                    </div>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card
                className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer"
                style={{
                  background: onReasoning
                    ? resolvedTheme === "dark"
                      ? "#1a2e1a"
                      : "#f9ffd9"
                    : "",
                }}
              >
                <CardContent>
                  <CardTitle className="mb-2 flex justify-between">
                    Religion <ArrowUpRight />
                  </CardTitle>
                  <CardDescription>
                    With so many religions claiming truth, how can you find the
                    right path? We'll examine how Islam's pure monotheism,
                    preserved scripture, and logical framework provide clear
                    guidance from Allah. Discover why the message of Tawhid
                    (Divine Oneness) resonates with your natural intuition and
                    rational mind.
                    <br />
                    <div className="flex flex-wrap gap-1 mt-1">
                      <Badge variant="secondary">Tawhid (Divine Oneness)</Badge>
                      <Badge variant="secondary">Divine Revelation</Badge>
                    </div>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="flex gap-4 flex-wrap md:flex-nowrap">
              <Card
                className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer"
                style={{
                  background: onMind
                    ? resolvedTheme === "dark"
                      ? "#1a2742"
                      : "#dce3f9"
                    : "",
                }}
              >
                <CardContent>
                  <CardTitle className="mb-2 flex justify-between">
                    Mental Health <ArrowUpRight />
                  </CardTitle>

                  <CardDescription>
                    True peace of mind comes through connecting with Allah.
                    Explore how Islamic practices like prayer, dhikr
                    (remembrance), and mindfulness create mental tranquility
                    beyond what modern psychology alone can offer. When your
                    thoughts align with your Creator's guidance, anxiety
                    diminishes and clarity emerges.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card
                className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer"
                style={{
                  background: onMind
                    ? resolvedTheme === "dark"
                      ? "#1a2742"
                      : "#dce3f9"
                    : "",
                }}
              >
                <CardContent>
                  <CardTitle className="mb-2 flex justify-between">
                    Mental Clarity <ArrowUpRight />
                  </CardTitle>
                  <CardDescription>
                    In a world of endless distractions, the Qur'an offers a
                    framework for crystal-clear thinking. Discover how regular
                    contemplation of Allah's signs, structured daily prayers,
                    and Qur'anic wisdom train your mind to focus on what truly
                    matters, helping you make decisions aligned with your
                    purpose of worshipping the Creator.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4 flex-wrap md:flex-nowrap">
              <Card
                className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer md:min-w-[350px]"
                style={{
                  background: onHeart
                    ? resolvedTheme === "dark"
                      ? "#3d1a1a"
                      : "#ffd1d1"
                    : "",
                }}
              >
                <CardContent>
                  <CardTitle className="mb-2 flex justify-between">
                    Diseases of the Heart <ArrowUpRight />
                  </CardTitle>
                  <CardDescription className="flex flex-wrap gap-1">
                    <Badge variant="secondary">Desires and Greed</Badge>
                    <Badge variant="secondary">
                      Negative Verbal and Physical Behaviors
                    </Badge>
                    <Badge variant="secondary">Negative Emotions</Badge>
                    <Badge variant="secondary">Negative Character</Badge>
                    <Badge variant="secondary">Negative Spirituality</Badge>
                  </CardDescription>
                </CardContent>
              </Card>
              <Card
                className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer"
                style={{
                  background: onHealth
                    ? resolvedTheme === "dark"
                      ? "#2e1a29"
                      : "#f7d5e8"
                    : "",
                }}
              >
                <CardContent>
                  <CardTitle className="mb-2 flex justify-between">
                    Physical Health <ArrowUpRight />
                  </CardTitle>
                  <CardDescription>
                    Islam's holistic approach to physical wellbeing preceded
                    modern medicine by centuries. Explore how the Prophet
                    Muhammad's (peace be upon him) teachings on diet, hygiene,
                    fasting, and moderation create a divinely-guided blueprint
                    for physical health that honors your body as an amanah
                    (trust) from Allah.
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <Badge variant="secondary">Exercise</Badge>
                    <Badge variant="secondary">Nutrition</Badge>
                    <Badge variant="secondary">Sleep</Badge>
                    <Badge variant="secondary">Manage stress</Badge>
                  </div>
                </CardContent>
              </Card>
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
            <Card className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer">
              <CardContent>
                <CardTitle className="mb-2 flex justify-between ">
                  Parents <ArrowUpRight />
                </CardTitle>

                <CardDescription>
                  Allah elevates honoring parents just below worship of Him
                  alone. Discover the profound spiritual rewards of treating
                  parents with excellence (ihsan), even when challenging. The
                  Prophet Muhammad (peace be upon him) taught that Paradise lies
                  at the feet of mothers—learn practical ways to earn Allah's
                  pleasure through fulfilling these sacred relationships.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer">
              <CardContent>
                <CardTitle className="mb-2 flex justify-between">
                  Spouse & Children <ArrowUpRight />
                </CardTitle>

                <CardDescription>
                  Islamic marriage is a profound spiritual bond described in the
                  Qur'an as a source of tranquility and mercy. Explore how
                  Allah's guidance transforms marriage into an act of worship
                  and child-raising into a sacred trust. Learn practical wisdom
                  from the Prophet's example of nurturing a family centered on
                  remembrance of Allah and mutual compassion.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer">
              <CardContent>
                <CardTitle className="mb-2 flex justify-between">
                  Relatives <ArrowUpRight />
                </CardTitle>

                <CardDescription>
                  The concept of silat al-rahim (maintaining family ties) is so
                  significant in Islam that Allah links it to His mercy.
                  Discover how nurturing extended family relationships, even
                  with differences, becomes an act of worship that brings baraka
                  (divine blessing) into your life and lengthens your provision,
                  as the Prophet Muhammad (peace be upon him) taught.
                </CardDescription>
              </CardContent>
            </Card>
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
          <Card className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer">
            <CardContent>
              <CardTitle className="mb-2 flex justify-between ">
                Neighbors <ArrowUpRight />
              </CardTitle>

              <CardDescription>
                Did you know the Prophet Muhammad (peace be upon him) emphasized
                neighbors' rights so strongly that early Muslims thought they
                might inherit from their neighbors? Explore how Islam elevates
                neighborly relations beyond mere courtesy to a spiritual
                obligation. Learn practical ways to revive this forgotten Sunnah
                and earn Allah's pleasure through kindness that transcends
                differences.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer">
            <CardContent>
              <CardTitle className="mb-2 flex justify-between">
                Friends <ArrowUpRight />
              </CardTitle>

              <CardDescription>
                "A person follows the religion of his close friend, so let each
                of you look at whom he befriends." This profound hadith reveals
                how friendships shape our spiritual journey. Discover Allah's
                guidance on nurturing friendships that strengthen your faith,
                encourage righteousness, and help you remember your Creator.
                Learn to balance genuine care with boundaries that protect your
                worship.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-primary to-gray-300/80 bg-clip-text text-center text-5xl md:text-7xl mt-8 font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 z-10 my-6">
        Your Country
      </span>
      <div className="relative overflow-hidden flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center justify-start py-12 px-4">
        <div className="flex flex-col gap-6 md:col-span-1 max-w-2xl">
          <Card className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer">
            <CardContent>
              <CardTitle className="mb-2 flex justify-between ">
                Law & Order <ArrowUpRight />
              </CardTitle>

              <CardDescription>
                Islam teaches that following just laws is an extension of
                worshipping Allah. Explore how the Qur'anic principles of
                justice, public welfare (maslaha), and respect for authority
                create a framework for being an exemplary citizen while
                maintaining your primary identity as a servant of Allah. Learn
                how the early Muslims modeled civic responsibility while never
                compromising their faith.
              </CardDescription>
            </CardContent>
          </Card>
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
