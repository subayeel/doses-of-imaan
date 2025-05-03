"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  BookOpen,
  Trees,
  Star,
  Heart,
  Zap,
  ChevronRight,
  Layers,
  Award,
  Gift,
  Coffee,
  Feather,
  Check,
  ArrowUp,
  ArrowLeft,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ThreeDimensionsOfFaithProps {
  isDocument: boolean;
}
export const ThreeDimensionsOfFaith = ({
  isDocument = false,
}: ThreeDimensionsOfFaithProps) => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "The Three Dimensions",
        icon: Layers,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "iman",
        title: "Iman: The Roots",
        icon: Trees,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "islam",
        title: "Islam: The Trunk",
        icon: Zap,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
      },
      {
        id: "ihsan",
        title: "Ihsan: The Fruit",
        icon: Gift,
        color: "bg-pink-100 dark:bg-pink-900",
        iconColor: "text-pink-500",
      },
      {
        id: "ihsan-meaning",
        title: "The Meaning of Ihsan",
        icon: BookOpen,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "ihsan-rewards",
        title: "Rewards of Ihsan",
        icon: Award,
        color: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-500",
      },
      {
        id: "daily-life",
        title: "Ihsan in Daily Life",
        icon: Coffee,
        color: "bg-yellow-100 dark:bg-yellow-900",
        iconColor: "text-yellow-500",
      },
    ];
  }, []);

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const currentRefs = sectionRefs.current;

    // Observe all section elements
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element;
        observer.observe(element);
      }
    });

    return () => {
      // Clean up observer
      contents.forEach(({ id }) => {
        const element = currentRefs[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [contents]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-emerald-800 dark:from-teal-700 dark:to-emerald-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="text-teal-200 hidden md:block" size={32} />
            <h1 className="text-4xl font-bold">
              The Three Dimensions of Faith
            </h1>
          </div>
          <p className="text-xl max-w-2xl text-teal-100">
            Discover the beautiful harmony of Iman (Faith), Islam (Submission),
            and Ihsan (Excellence)
          </p>

          {!isDocument && (
            <div className="flex flex-wrap gap-4 mt-8">
              <Button
                className="bg-white text-teal-700 hover:bg-teal-50"
                onClick={() => scrollToSection("ihsan")}
              >
                Discover Ihsan <ChevronRight size={16} />
              </Button>
              <Button
                variant="outline"
                className="border-white bg-stone-200 text-teal-700 hover:bg-stone-50"
                onClick={() => scrollToSection("intro")}
              >
                Learn the Basics
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div
          className={`grid grid-cols-1 ${
            isDocument ? "" : "xl:grid-cols-4"
          } gap-8`}
        >
          {/* Navigation Sidebar */}

          {!isDocument && (
            <div className="hidden xl:block col-span-1">
              <div className="sticky top-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Journey Map</CardTitle>
                    <CardDescription>
                      Explore the dimensions of faith
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <nav className="space-y-1">
                      {contents.map(({ id, title, icon: Icon, iconColor }) => (
                        <button
                          key={id}
                          onClick={() => scrollToSection(id)}
                          className={`flex items-center gap-3 p-3 w-full text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                            activeSection === id
                              ? "bg-gray-100 dark:bg-gray-800 font-medium"
                              : ""
                          }`}
                        >
                          <Icon className={iconColor} size={18} />
                          <span>{title}</span>
                          {activeSection === id && (
                            <ChevronRight className="ml-auto" size={16} />
                          )}
                        </button>
                      ))}
                    </nav>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="xl:col-span-3 space-y-12">
            {/* Introduction */}
            <section id="intro" className="scroll-mt-20">
              <Card className={`border-l-4 border-blue-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Layers className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>The Three Dimensions of Faith</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Our faith consists of three beautiful, interconnected
                    dimensions that work together to create a balanced spiritual
                    life:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Trees size={16} className="text-green-500" /> Iman
                        (Faith)
                      </h3>
                      <p>
                        The roots of our faith - the beliefs we hold in our
                        hearts that anchor our entire spiritual life.
                      </p>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Zap size={16} className="text-amber-500" /> Islam
                        (Submission)
                      </h3>
                      <p>
                        The trunk of our faith - the actions and practices that
                        demonstrate our submission to Allah.
                      </p>
                    </div>
                    <div className="bg-pink-50 dark:bg-pink-900/30 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Gift size={16} className="text-pink-500" /> Ihsan
                        (Excellence)
                      </h3>
                      <p>
                        The fruit of our faith - striving for excellence and
                        beauty in everything we do for Allah.
                      </p>
                    </div>
                  </div>
                  <p>
                    Each dimension builds upon the previous one, creating a path
                    of spiritual growth that leads to a fulfilling relationship
                    with Allah and a beautiful life.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Iman Section */}
            <section id="iman" className="scroll-mt-20">
              <Card className={`border-l-4 border-green-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Trees className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Iman: The Roots of Faith</CardTitle>
                  </div>
                  <CardDescription>
                    The foundation upon which everything else is built
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-800">
                    <p className="font-medium">
                      &quot;Iman or faith must be mentioned as the first part of
                      our deen because it serves as our roots.&quot;
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p>
                      For many years at the beginning of Prophet Muhammad&apos;s
                      mission, Allah revealed nothing except the concepts of:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <Card className="border-green-200 dark:border-green-800">
                        <CardContent className="pt-4">
                          <div className="flex justify-center mb-3">
                            <div className="p-2 rounded-full bg-green-100 dark:bg-green-900">
                              <Heart className="text-green-500" size={24} />
                            </div>
                          </div>
                          <h3 className="font-medium text-center mb-2">
                            Taqwa
                          </h3>
                          <p className="text-center">
                            God consciousness - being aware of Allah in
                            everything we do
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border-green-200 dark:border-green-800">
                        <CardContent className="pt-4">
                          <div className="flex justify-center mb-3">
                            <div className="p-2 rounded-full bg-green-100 dark:bg-green-900">
                              <Star className="text-green-500" size={24} />
                            </div>
                          </div>
                          <h3 className="font-medium text-center mb-2">
                            Ikhlas
                          </h3>
                          <p className="text-center">
                            Sincerity - acting purely for Allah&apos;s sake
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border-green-200 dark:border-green-800">
                        <CardContent className="pt-4">
                          <div className="flex justify-center mb-3">
                            <div className="p-2 rounded-full bg-green-100 dark:bg-green-900">
                              <Trees className="text-green-500" size={24} />
                            </div>
                          </div>
                          <h3 className="font-medium text-center mb-2">Iman</h3>
                          <p className="text-center">
                            Faith - believing in Allah and the unseen
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <p>
                      It was only after the hearts of the first Muslims became
                      saturated and strong with true Iman that Allah began
                      introducing the next concept - Islam.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Islam Section */}
            <section id="islam" className="scroll-mt-20">
              <Card className={`border-l-4 border-amber-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <Zap className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>Islam: The Trunk of Faith</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-900/30 border border-amber-100 dark:border-amber-800">
                    <p className="font-medium">
                      &quot;After our roots are firmly in place and take hold
                      within the rich soil of Iman and that is watered and
                      nourished continually, we can begin understanding and
                      encouraging the practice of Islam or submission to the
                      will of Allah.&quot;
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">
                        The Trunk of the Tree
                      </h3>
                      <p>
                        Islam - our submission to Allah - is like the trunk of
                        the tree: sturdy and reaching up to heights. It
                        represents the outward actions and practices that
                        demonstrate our faith.
                      </p>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">
                        Building on Strong Roots
                      </h3>
                      <p>
                        Just as Muslim children aren&apos;t required to pray
                        until age 7, the &quot;rules&quot; of Islam come more
                        easily to those who have prepared their hearts with
                        Iman. This early time is for planting the seed of faith.
                      </p>
                    </div>
                  </div>

                  <p>
                    When our roots of faith are strong, our practice of Islam
                    can grow tall and strong. This is why parents spend the
                    first seven years teaching their children about Allah, about
                    paradise, about miracles and angels - all to prepare them to
                    have a strong, balanced character.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Ihsan Section */}
            <section id="ihsan" className="scroll-mt-20">
              <Card className={`border-l-4 border-pink-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900">
                      <Gift className="text-pink-500" size={24} />
                    </div>
                    <CardTitle>Ihsan: The Fruit of Faith</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="p-4 rounded-lg bg-pink-50 dark:bg-pink-900/30 border border-pink-100 dark:border-pink-800">
                    <p className="font-medium">
                      &quot;Ihsan, which means excellence in belief, is the
                      neglected 1/3 of our deen... It is the fruit that blossoms
                      from our planted trees and shows up when the roots are
                      strong and nourished, free from disease and harmful
                      insects.&quot;
                    </p>
                  </div>

                  <div className="bg-pink-50 dark:bg-pink-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Our Lost Treasure</h3>
                    <p>
                      Ihsan is our lost treasure that we must unearth and
                      revive. If we fail to nourish our Iman by submitting to
                      Allah, we will bear no fruit and our soul will die. But
                      look into the Islamic legacy - it is rich with ihsan!
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card className="border-pink-200 dark:border-pink-800">
                      <CardContent className="pt-4">
                        <h3 className="font-medium mb-2">
                          Legacy of Excellence
                        </h3>
                        <p>
                          All the Islamic achievements in art, science,
                          architecture, literature, geography, politics,
                          economics, social movements, philosophy, medicine and
                          more came from Muslims&apos; desire to attain ihsan.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-pink-200 dark:border-pink-800">
                      <CardContent className="pt-4">
                        <h3 className="font-medium mb-2">
                          The Complete Picture
                        </h3>
                        <p>
                          When we combine strong roots (Iman) with a sturdy
                          trunk (Islam), we can produce beautiful fruit (Ihsan)
                          that benefits the world and pleases Allah.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* The Meaning of Ihsan */}
            <section id="ihsan-meaning" className="scroll-mt-20">
              <Card className={`border-l-4 border-purple-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <BookOpen className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>The Meaning of Ihsan</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                    <p>
                      &quot;Ihsan...what does it mean? Like so many other Arabic
                      words that I have mentioned, it has a vast array of
                      meanings. It cannot be summed up prettily in one English
                      word or phrase.&quot;
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <Badge className="bg-purple-500/20 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300 hover:bg-purple-500/30 py-2">
                      Excellence
                    </Badge>
                    <Badge className="bg-purple-500/20 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300 hover:bg-purple-500/30 py-2">
                      Perfection
                    </Badge>
                    <Badge className="bg-purple-500/20 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300 hover:bg-purple-500/30 py-2">
                      Beauty
                    </Badge>
                    <Badge className="bg-purple-500/20 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300 hover:bg-purple-500/30 py-2">
                      Balance
                    </Badge>
                    <Badge className="bg-purple-500/20 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300 hover:bg-purple-500/30 py-2">
                      Harmony
                    </Badge>
                    <Badge className="bg-purple-500/20 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300 hover:bg-purple-500/30 py-2">
                      Discipline
                    </Badge>
                    <Badge className="bg-purple-500/20 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300 hover:bg-purple-500/30 py-2">
                      Good Character
                    </Badge>
                    <Badge className="bg-purple-500/20 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300 hover:bg-purple-500/30 py-2">
                      Gentleness
                    </Badge>
                  </div>

                  <p>
                    Ihsan is a human reflection, a human attempt to achieve a
                    high level in the areas covered by the revealed 99 beautiful
                    names of Allah.
                  </p>

                  <div className="p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <p className="italic">
                      &quot;When a man says I cannot, he has made a suggestion
                      to himself. He has weakened his power of accomplishing
                      that which otherwise would have been accomplished.&quot;
                      <span className="block text-sm font-normal mt-1">
                        - Muhammad Ali
                      </span>
                    </p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">The Powerful Question</h3>
                    <p>
                      In Surat Ar-Rahman (Quranic chapter &quot;The
                      Merciful&quot;), Allah uses the rhetorical question:
                      &quot;Is there any reward for ihsan except ihsan?&quot;
                      This profound question invites us to contemplate the deep
                      meaning and importance of excellence in our faith.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Rewards of Ihsan */}
            <section id="ihsan-rewards" className="scroll-mt-20">
              <Card className={`border-l-4 border-red-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <Award className="text-red-500" size={24} />
                    </div>
                    <CardTitle>The Rewards of Ihsan</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The Quranic question &quot;Is there any reward for ihsan
                    except ihsan?&quot; has multiple beautiful layers of
                    meaning:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="border-red-200 dark:border-red-800">
                      <CardContent className="pt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-red-500">1</Badge>
                          <h3 className="font-medium">Sweetness of Faith</h3>
                        </div>
                        <p>
                          Those who strive for excellence will be rewarded with
                          the sweetness of faith in their hearts. They&apos;ll
                          be among the few who have tasted this level of faith.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-red-200 dark:border-red-800">
                      <CardContent className="pt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-red-500">2</Badge>
                          <h3 className="font-medium">Success in This World</h3>
                        </div>
                        <p>
                          Those who attain ihsan will be rewarded with success
                          in this world. The Islamic Golden Age is proof -
                          Muslims attained excellence in worship and activities,
                          and Allah rewarded them with amazing achievements.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-red-200 dark:border-red-800">
                      <CardContent className="pt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-red-500">3</Badge>
                          <h3 className="font-medium">
                            Paradise in the Hereafter
                          </h3>
                        </div>
                        <p>
                          The ultimate reward for excellence is the ultimate
                          excellence - paradise in the hereafter (jannah in
                          al-akhira).
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/30 border border-red-100 dark:border-red-800">
                    <p>
                      Those who realize the value of ihsan, who reach and strive
                      and work for excellence, who nourish their roots and groom
                      their trunk in order to bear plentiful, amazing fruit will
                      be rewarded with Allah&apos;s form of ihsan - the
                      sweetness of faith, success in this world, and the
                      ultimate success in the hereafter.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Ihsan in Daily Life */}
            <section id="daily-life" className="scroll-mt-20">
              <Card className={`border-l-4 border-yellow-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                      <Coffee className="text-yellow-500" size={24} />
                    </div>
                    <CardTitle>Ihsan in Daily Life</CardTitle>
                  </div>
                  <CardDescription>
                    Excellence in everyday moments
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    So how does this relate to us right here, right now? Whether
                    you&apos;re a student, working professional, newly married,
                    or fulfilling family responsibilities - ihsan can transform
                    your everyday life:
                  </p>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">
                      Changing Our Perspective
                    </h3>
                    <p>
                      When faced with a boring class, a difficult assignment, a
                      huge project from your boss, chores at home, or helping
                      family members - stop the immediate negative reaction.
                      Instead, see it as an opportunity for ihsan, a chance to
                      please Allah.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <p className="italic font-medium">
                      &quot;Allah loves when one of you is given a task, that he
                      or she does it in the most excellent manner.&quot;
                      <span className="block text-sm font-normal mt-1">
                        - Sheikh Yusuf al-Qaradawi
                      </span>
                    </p>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg space-y-3">
                    <h3 className="font-medium">Imagine This:</h3>
                    <div className="flex gap-3 items-start">
                      <div className="mt-1 p-1 bg-yellow-200 dark:bg-yellow-800 rounded-full">
                        <Check
                          size={14}
                          className="text-yellow-600 dark:text-yellow-200"
                        />
                      </div>
                      <p>
                        Standing before Allah on the Day of Judgment and having
                        Him tell you all the things you did that He LOVED
                      </p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="mt-1 p-1 bg-yellow-200 dark:bg-yellow-800 rounded-full">
                        <Check
                          size={14}
                          className="text-yellow-600 dark:text-yellow-200"
                        />
                      </div>
                      <p>
                        How the feeling of Allah loving your actions would be
                        infinitely greater than any worldly praise
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-r from-amber-500/20 to-yellow-500/20 dark:from-amber-900/40 dark:to-yellow-900/40 text-center">
                    <p className="font-medium">
                      So when you have a test or a paper or chores or any task,
                      do it with ihsan!
                    </p>
                    <p className="mt-2">
                      Don&apos;t just &quot;be,&quot; don&apos;t just get by,
                      don&apos;t just pass. <br />
                      <span className="font-bold">
                        Be EXCELLENT, strive for PERFECTION, be the BEST!
                      </span>
                      <br />
                      Show the world how Islam inspires you to attain ihsan!
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 text-center">
                    <p className="italic">
                      &quot;We are given just a few moments in this world. Each
                      breath is a priceless jewel and when it passes it never
                      returns...make this moment, this breath, this heart beat
                      one that resounds with ihsan (Excellence)!&quot;
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}

      {!isDocument && (
        <div className="lg:hidden fixed bottom-6 right-6 z-50">
          <Popover>
            <PopoverTrigger asChild>
              <Button className="rounded-full h-14 w-14 shadow-lg bg-teal-600 hover:bg-teal-700">
                <Layers size={24} />
              </Button>
            </PopoverTrigger>
            <PopoverContent side="top" className="w-64 p-0 mr-6 mb-2">
              <nav className="max-h-80 overflow-y-auto">
                {contents.map(({ id, title, icon: Icon, iconColor }) => (
                  <button
                    key={id}
                    onClick={() => {
                      scrollToSection(id);
                    }}
                    className={`flex items-center gap-3 p-3 w-full text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                      activeSection === id
                        ? "bg-gray-100 dark:bg-gray-800 font-medium"
                        : ""
                    }`}
                  >
                    <Icon className={iconColor} size={18} />
                    <span>{title}</span>
                    {activeSection === id && (
                      <ChevronRight className="ml-auto" size={16} />
                    )}
                  </button>
                ))}
              </nav>
            </PopoverContent>
          </Popover>
        </div>
      )}

      {/* Footer */}
      {!isDocument && (
        <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Feather className="text-teal-600" size={18} />
              <h3 className="text-lg font-medium">Journey to Excellence</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
              May we all strive for ihsan in every aspect of our lives, building
              beautiful roots of faith and cultivating a life of meaning and
              purpose.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => (window.location.href = "/religion/imaan")}
              >
                <ArrowLeft size={14} /> Revisit Imaan
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Back to Top <ArrowUp size={14} />
              </Button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};
