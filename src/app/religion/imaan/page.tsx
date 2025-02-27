"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

import {
  AlertCircle,
  BookOpen,
  Target,
  X,
  Logs,
  Lightbulb,
  ShieldCheck,
  ChevronRight,
  Star,
  Trees,
  Zap,
  Smile,
  ArrowRight,
  Coffee,
  Layers,
  ArrowLeft,
  Feather,
  ArrowUp,
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

const SweetnessOfIman = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "What is Iman?",
        icon: BookOpen,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "iman-fitan",
        title: "Iman in Tough Times",
        icon: Trees,
        color: "bg-yellow-100 dark:bg-yellow-900",
        iconColor: "text-yellow-500",
      },
      {
        id: "why-people-leave",
        title: "Why Faith Fades",
        icon: X,
        color: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-500",
      },
      {
        id: "sweetness-iman",
        title: "The Sweet Taste of Faith",
        icon: Coffee,
        color: "bg-pink-100 dark:bg-pink-900",
        iconColor: "text-pink-500",
      },
      {
        id: "sins-barrier",
        title: "Barriers to Sweetness",
        icon: ShieldCheck,
        color: "bg-gray-100 dark:bg-gray-700",
        iconColor: "text-gray-500",
      },
      {
        id: "how-to-taste",
        title: "Finding the Sweetness",
        icon: Lightbulb,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
      },
      {
        id: "leads-to",
        title: "The Beautiful Journey",
        icon: Target,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
    ];
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe all section elements
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        sectionRefs.current[id] = element;
        observer.observe(element);
      }
    });

    return () => {
      // Clean up observer
      contents.forEach(({ id }) => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const element = sectionRefs.current[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [contents]);
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-emerald-800 dark:from-teal-700 dark:to-emerald-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="text-teal-200 hidden md:block" size={32} />
            <h1 className="text-xl md:text-4xl font-bold">
              The Three Dimensions of Faith
            </h1>
          </div>
          <p className="text-lg md:text-xl max-w-2xl text-teal-100">
            Discover the beautiful harmony of Iman (Faith), Islam (Submission),
            and Ihsan (Excellence)
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              className="bg-white text-teal-700 hover:bg-teal-50"
              onClick={() => scrollToSection("ihsan")}
            >
              Discover Ihsan <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="border-white text-white bg-teal-700"
              onClick={() => scrollToSection("intro")}
            >
              Learn the Basics
            </Button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="hidden xl:block col-span-1">
            <div className="sticky top-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Journey Map</CardTitle>
                  <CardDescription>
                    Explore the path to sweetness
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

          {/* Main Content */}
          <div className="xl:col-span-3 space-y-12">
            {/* Introduction */}

            <section id="intro" className="scroll-mt-20">
              <Card className={`border-l-4 border-blue-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <BookOpen className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>What is Iman?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Imaan is the second level of the Religion of Allah. It means
                    firm belief and consists of three basic aspects: conviction
                    with the heart, proclamation with the tongue, and action
                    with the limbs.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Star size={16} className="text-blue-500" /> The Six
                        Pillars of Faith
                      </h3>
                      <p>Iman means believing in:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          Allah (His existence, oneness of His Lordship,
                          worship, and uniqueness of His names and attributes)
                        </li>
                        <li>
                          His Angels (created from light, who never disobey
                          Allah)
                        </li>
                        <li>
                          His Books (all revelations, especially the four
                          mentioned in the Quran)
                        </li>
                        <li>
                          His Messengers (chosen from mankind to call to Allah)
                        </li>
                        <li>
                          The Last Day (resurrection, judgment, rewards, and
                          punishments)
                        </li>
                        <li>
                          Divine Decree (the good and ill of fate, predetermined
                          by Allah&apos;s knowledge and will)
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Zap size={16} className="text-blue-500" /> Nature of
                        Faith
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          Imaan increases with obedience and decreases with
                          disobedience
                        </li>
                        <li>
                          The Prophet Muhammad ﷺ said faith has over 60 branches
                        </li>
                        <li>
                          It includes both your heart&apos;s belief and your
                          physical actions
                        </li>
                        <li>
                          The core of faith is believing there&apos;s no god
                          worthy of worship except Allah
                        </li>
                        <li>
                          Imaan is primarily built upon inward actions, but is
                          manifested outwardly
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30">
                    <h3 className="font-medium mb-2">
                      The Three Dimensions of Faith
                    </h3>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <span className="font-medium">
                          Conviction with the heart:
                        </span>{" "}
                        Firm belief and certainty without doubt
                      </li>
                      <li>
                        <span className="font-medium">
                          Proclamation with the tongue:
                        </span>{" "}
                        Verbally declaring one&apos;s faith
                      </li>
                      <li>
                        <span className="font-medium">
                          Action with the limbs:
                        </span>{" "}
                        Practicing faith through deeds and worship
                      </li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Iman in Times of Fitan */}
            <section id="iman-fitan" className="scroll-mt-20">
              <Card className={`border-l-4 border-yellow-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                      <Trees className="text-yellow-500" size={24} />
                    </div>
                    <CardTitle>Iman in Tough Times</CardTitle>
                  </div>
                  <CardDescription>
                    Faith is like a tree that needs constant care
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-100 dark:border-yellow-800">
                    <p className="italic font-medium text-lg">
                      &quot;Faith wears out in the heart just like clothes wear
                      out - so renew your faith.&quot;
                      <span className="block text-sm font-normal mt-1">
                        - Prophet Muhammad ﷺ
                      </span>
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card className="border-yellow-200 dark:border-yellow-800">
                      <CardContent className="pt-4">
                        <h3 className="font-medium mb-2">
                          Care for Your Faith
                        </h3>
                        <p>
                          We need to water our faith with knowledge, good deeds,
                          and remembrance of Allah. We also need to protect it
                          from &quot;pests&quot; - sins, desires, and doubts.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-yellow-200 dark:border-yellow-800">
                      <CardContent className="pt-4">
                        <h3 className="font-medium mb-2">Greater Rewards</h3>
                        <p>
                          The Prophet ﷺ said those who do good deeds during
                          difficult times will get the reward of fifty people!
                          Staying strong during tests brings amazing rewards.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Why People Leave Islam */}
            <section id="why-people-leave" className="scroll-mt-20">
              <Card className={`border-l-4 border-red-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <X className="text-red-500" size={24} />
                    </div>
                    <CardTitle>Why Faith Fades</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">The Root Cause</h3>
                    <p>
                      The main reason people leave Islam is that the essence of
                      faith never truly entered their hearts to begin with.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-red-200 dark:border-red-800">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <AlertCircle size={16} className="text-red-500" /> Missing
                      Out on Sweetness
                    </h3>
                    <p>
                      Once faith truly merges with your heart, you&apos;ll never
                      want to give it up. Faith has a sweetness - once you taste
                      it, nothing else compares! But if you&apos;ve never tasted
                      this sweetness, you won&apos;t realize what you&apos;re
                      missing.
                    </p>
                  </div>

                  <p>
                    Many people practice Islam only through external actions
                    without understanding the inner beauty. Their worship
                    becomes just rituals without a real connection to Allah.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* What is Sweetness of Iman */}
            <section id="sweetness-iman" className="scroll-mt-20">
              <Card className={`border-l-4 border-pink-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900">
                      <Coffee className="text-pink-500" size={24} />
                    </div>
                    <CardTitle>The Sweet Taste of Faith</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    One of Allah&apos;s greatest gifts is making faith beloved
                    to us, adorning our hearts with its beauty, and letting us
                    taste its sweetness.
                  </p>

                  <div className="p-4 rounded-lg bg-pink-50 dark:bg-pink-900/30 border border-pink-100 dark:border-pink-800">
                    <p className="italic font-medium">
                      &quot;Faith has a flavor and sweetness that is tasted by
                      the heart just like the sweetness of food and drink is
                      tasted by the mouth. Faith is food for the heart, just as
                      food and drink nourish the body.&quot;
                      <span className="block text-sm font-normal mt-1">
                        - Ibn Rajab
                      </span>
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-pink-50 dark:bg-pink-900/30 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Finding Joy in Good</h3>
                      <p>
                        The sweetness of faith means finding joy in doing good
                        deeds and even in facing difficulties for Allah&apos;s
                        sake.
                      </p>
                    </div>
                    <div className="bg-pink-50 dark:bg-pink-900/30 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">
                        Experience It Yourself
                      </h3>
                      <p>
                        You can read about this sweetness all you want, but you
                        won&apos;t truly understand until you experience it!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Sins: A Barrier */}
            <section id="sins-barrier" className="scroll-mt-20">
              <Card className={`border-l-4 border-gray-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                      <ShieldCheck className="text-gray-500" size={24} />
                    </div>
                    <CardTitle>Barriers to Sweetness</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">The Sick Heart</h3>
                      <p>
                        Think of it like being sick. When you&apos;re feeling
                        nauseous, even the most delicious meal doesn&apos;t
                        appeal to you. Similarly, when our hearts are
                        &quot;sick&quot; from sins and desires, we can&apos;t
                        enjoy the sweetness of faith.
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Wisdom from the Past</h3>
                      <p className="italic">
                        &quot;If you want to find the sweetness of worship, put
                        an iron wall between yourself and worldly desires.&quot;
                        <span className="block text-sm font-normal mt-1">
                          - Malik ibn Dinar
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <p>
                      Sins prevent us from tasting the sweetness of faith. The
                      more pleasure we find in sinning, the less joy we find in
                      worshipping Allah.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* How to Taste Sweetness */}
            <section id="how-to-taste" className="scroll-mt-20">
              <Card className={`border-l-4 border-amber-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <Lightbulb className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>Finding the Sweetness</CardTitle>
                  </div>
                  <CardDescription>
                    Seven ways to taste the sweetness of faith
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4 space-y-6">
                  <p>
                    The sweetness of faith comes from worshipping Allah
                    completely - combining outer actions with inner feelings.
                    Here&apos;s how to taste this sweetness, according to the
                    Prophet Muhammad ﷺ:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="border-amber-200 dark:border-amber-800">
                      <CardContent className="pt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-amber-500">1</Badge>
                          <h3 className="font-medium">
                            Love Allah and His Messenger ﷺ
                          </h3>
                        </div>
                        <p>
                          Make Allah and His Messenger more beloved to you than
                          anything else in this world.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-amber-200 dark:border-amber-800">
                      <CardContent className="pt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-amber-500">2</Badge>
                          <h3 className="font-medium">Pure Love for Others</h3>
                        </div>
                        <p>
                          Love others purely for Allah&apos;s sake, not for
                          personal gain or worldly benefits.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-amber-200 dark:border-amber-800">
                      <CardContent className="pt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-amber-500">3</Badge>
                          <h3 className="font-medium">Strong Conviction</h3>
                        </div>
                        <p>
                          Have such strong faith that you&apos;d rather face
                          hardship than abandon your belief.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-amber-200 dark:border-amber-800">
                      <CardContent className="pt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-amber-500">4</Badge>
                          <h3 className="font-medium">Purify Your Soul</h3>
                        </div>
                        <p>
                          Live with the awareness that Allah is with you
                          wherever you are.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-amber-200 dark:border-amber-800">
                      <CardContent className="pt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-amber-500">5</Badge>
                          <h3 className="font-medium">Joyful Giving</h3>
                        </div>
                        <p>
                          Give charity with a happy heart rather than
                          reluctantly or for show.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-amber-200 dark:border-amber-800">
                      <CardContent className="pt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-amber-500">6</Badge>
                          <h3 className="font-medium">
                            Accept Allah&apos;s Decree
                          </h3>
                        </div>
                        <p>
                          Truly believe that what happened couldn&apos;t have
                          missed you, and what missed you couldn&apos;t have
                          happened.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-amber-200 dark:border-amber-800 md:col-span-2">
                      <CardContent className="pt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-amber-500">7</Badge>
                          <h3 className="font-medium">Be Pleased with Allah</h3>
                        </div>
                        <p>
                          Be happy with Allah as your Lord, Islam as your way of
                          life, and Muhammad ﷺ as your Prophet. When you&apos;re
                          truly content with Allah as your Lord, you accept how
                          He manages your life, including the tests He gives you
                          and the rules He sets.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* What it Leads To */}
            <section id="leads-to" className="scroll-mt-20">
              <Card className={`border-l-4 border-green-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Target className="text-green-500" size={24} />
                    </div>
                    <CardTitle>The Beautiful Journey</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                    <p className="italic font-medium">
                      &quot;If kings knew the spiritual happiness we experience,
                      they would fight us for it with their swords.&quot;
                      <span className="block text-sm font-normal mt-1">
                        - Ibrahim ibn Adham
                      </span>
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Card className="border-green-200 dark:border-green-800">
                      <CardContent className="pt-4">
                        <div className="flex justify-center mb-3">
                          <div className="p-2 rounded-full bg-green-100 dark:bg-green-900">
                            <Smile className="text-green-500" size={24} />
                          </div>
                        </div>
                        <h3 className="font-medium text-center mb-2">
                          Life Changes
                        </h3>
                        <p className="text-center">
                          Experiencing the sweetness of faith transforms
                          everything! Your whole life changes and you&apos;ll
                          always crave that feeling.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-green-200 dark:border-green-800">
                      <CardContent className="pt-4">
                        <div className="flex justify-center mb-3">
                          <div className="p-2 rounded-full bg-green-100 dark:bg-green-900">
                            <ShieldCheck className="text-green-500" size={24} />
                          </div>
                        </div>
                        <h3 className="font-medium text-center mb-2">
                          Natural Protection
                        </h3>
                        <p className="text-center">
                          This sweetness makes you naturally dislike sins and
                          disbelief, creating a shield for your heart.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-green-200 dark:border-green-800">
                      <CardContent className="pt-4">
                        <div className="flex justify-center mb-3">
                          <div className="p-2 rounded-full bg-green-100 dark:bg-green-900">
                            <ArrowRight className="text-green-500" size={24} />
                          </div>
                        </div>
                        <h3 className="font-medium text-center mb-2">
                          Focus Shift
                        </h3>
                        <p className="text-center">
                          When you taste the sweetness of faith, the world is no
                          longer your main goal. Your eyes are fixed on what
                          lasts forever.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="p-4 rounded-lg border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/30 text-center">
                    <p className="italic">
                      Let&apos;s ask Allah with the words of the Prophet ﷺ:
                      <br />
                      &quot;O Allah, adorn us with the beauty of faith and make
                      us those who guide others and are guided themselves.&quot;
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Feather className="text-indigo-600" size={18} />
            <h3 className="text-lg font-medium">Strength of Imaan</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            O Allah, strengthen our Imaan, fill our hearts with certainty, and
            grant us the ability to worship You with sincerity and devotion.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => (window.location.href = "/religion/islam")}
            >
              <ArrowLeft size={14} /> Learn about Islam
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Back to Top <ArrowUp size={14} />
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => (window.location.href = "/religion/ihsaan")}
            >
              Achieve Ihsaan <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </footer>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="rounded-full h-14 w-14 shadow-lg bg-blue-600 hover:bg-blue-700 text-white">
              <Logs size={24} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-72 p-0 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <div className="p-3 border-b dark:border-gray-700">
              <h3 className="font-semibold">Quick Navigation</h3>
            </div>
            <nav className="max-h-[60vh] overflow-y-auto">
              {contents.map(({ id, title, icon: Icon, iconColor, color }) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                  }}
                  className={`flex items-center gap-3 p-3 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    activeSection === id ? "bg-gray-100 dark:bg-gray-800" : ""
                  }`}
                >
                  <div className={`p-2 rounded-md ${color}`}>
                    <Icon className={iconColor} size={18} />
                  </div>
                  <span>{title}</span>
                </button>
              ))}
            </nav>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default SweetnessOfIman;
