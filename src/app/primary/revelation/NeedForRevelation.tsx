"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";

import {
  Target,
  HelpCircle,
  AlertCircle,
  Check,
  MessageCircle,
  Book,
  Compass,
  Heart,
  Home,
  Map,
  MessageSquare,
  Lightbulb,
  ArrowRight,
  Logs,
  ChevronRight,
  ArrowUp,
  Feather,
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

interface NeedForRevelationProps {
  isDocument: boolean;
}
export const NeedForRevelation = ({
  isDocument = false,
}: NeedForRevelationProps) => {
  const [activeSection, setActiveSection] = useState("introduction");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "introduction",
        title: "Introduction",
        icon: Target,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "needs-fulfilled",
        title: "Our Needs",
        icon: Heart,
        color: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-500",
      },
      {
        id: "big-questions",
        title: "Big Questions",
        icon: HelpCircle,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "divine-explanation",
        title: "Divine Explanations",
        icon: Lightbulb,
        color: "bg-yellow-100 dark:bg-yellow-900",
        iconColor: "text-yellow-500",
      },
      {
        id: "gods-communication",
        title: "God's Communication",
        icon: MessageCircle,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "prophets",
        title: "Why Prophets?",
        icon: MessageSquare,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
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
      <div className="bg-gradient-to-r from-purple-600 to-indigo-800 dark:from-purple-700 dark:to-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-purple-200 hidden md:block" size={32} />
            <h1 className="text-4xl font-bold">Why We Need Divine Guidance</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-100">
            Exploring the necessity of revelation and why the Creator would
            communicate with us
          </p>
          {!isDocument && (
            <div className="flex flex-wrap gap-4 mt-8">
              <Button
                className="bg-white text-purple-700 hover:bg-purple-50"
                onClick={() => scrollToSection("prophets")}
              >
                Discover Prophets <ChevronRight size={16} />
              </Button>
              <Button
                variant="outline"
                className="border-white bg-stone-200 text-purple-700 hover:bg-stone-50"
                onClick={() => scrollToSection("introduction")}
              >
                Start Journey
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
                    <CardTitle className="text-lg">Contents</CardTitle>
                    <CardDescription>
                      Navigate through the journey
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
            {/* Introduction Section */}
            <section id="introduction" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Target className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>The Next Step in Our Journey</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Now that we&apos;ve explored God&apos;s existence and
                    oneness, let&apos;s talk about something really fascinating
                    - why would this Creator want to communicate with us at all?
                  </p>
                  <p className="text-lg leading-relaxed">
                    Think about it this way: if you created something amazing,
                    wouldn&apos;t you want to explain how it works and what
                    it&apos;s for? Let&apos;s explore why revelation and
                    prophets make perfect sense once we understand there&apos;s
                    One Creator.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Every Need Fulfilled Section */}
            <section id="needs-fulfilled" className="scroll-mt-20">
              <Card className="border-l-4 border-red-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <Heart className="text-red-500" size={24} />
                    </div>
                    <CardTitle>A Creator Who Meets Our Every Need</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Have you ever noticed how perfectly our world is set up to
                    meet our needs? It&apos;s quite remarkable when you think
                    about it!
                  </p>

                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Our needs are beautifully provided for:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Physical needs:</strong> We need food, water,
                          and air - and look around, they&apos;re all available
                          to us!
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Emotional needs:</strong> We&apos;re wired for
                          love, friendship, and connection - and we have the
                          ability to form these relationships.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Intellectual needs:</strong> We&apos;re
                          curious creatures with minds that crave knowledge -
                          and we live in a universe that can be explored and
                          understood.
                        </div>
                      </li>
                    </ul>
                    <p className="mt-4">
                      So here&apos;s a thought: If our Creator has provided for
                      all these needs, wouldn&apos;t it make sense that
                      He&apos;d also provide for our spiritual and existential
                      needs too?
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Big Questions Section */}
            <section id="big-questions" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <HelpCircle className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>The Big Questions We All Ask</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Have you ever found yourself staring at the ceiling at
                    night, wondering about the big questions in life?
                    You&apos;re definitely not alone!
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Questions we all wonder about:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <p className="flex items-center gap-2">
                          <Compass className="text-purple-500 flex-shrink-0" />
                          <span>What&apos;s the purpose of our existence?</span>
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <p className="flex items-center gap-2">
                          <AlertCircle className="text-orange-500 flex-shrink-0" />
                          <span>Why is there suffering in the world?</span>
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <p className="flex items-center gap-2">
                          <Map className="text-green-500 flex-shrink-0" />
                          <span>Where are we heading in this life?</span>
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <p className="flex items-center gap-2">
                          <Home className="text-blue-500 flex-shrink-0" />
                          <span>Is there life after death?</span>
                        </p>
                      </div>
                    </div>
                    <p className="mt-4">
                      These aren&apos;t just random curiosities - they&apos;re
                      deep, meaningful questions that shape how we live our
                      lives. But how can we find reliable answers?
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Need for Divine Explanation Section */}
            <section id="divine-explanation" className="scroll-mt-20">
              <Card className="border-l-4 border-yellow-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                      <Lightbulb className="text-yellow-500" size={24} />
                    </div>
                    <CardTitle>Some Things Only God Can Explain</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Let&apos;s talk about something we all struggle with - the
                    question of suffering. Why do bad things happen to good
                    people? Why is there pain in the world?
                  </p>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      The Problem of Suffering:
                    </h3>
                    <p className="mb-4">
                      When we think about suffering, it&apos;s important to
                      remember a few things:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          The existence of suffering doesn&apos;t disprove God -
                          we&apos;ve already established logical reasons why God
                          exists.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          This question is often more emotional than logical -
                          it&apos;s about understanding, not proving.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          The only way to truly know the purpose behind
                          suffering is if the Creator explains it to us.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-lg leading-relaxed">
                    This is just one example where human reasoning alone
                    can&apos;t give us complete answers. Our minds are amazing,
                    but limited. Just like a smartphone user needs the
                    manufacturer&apos;s guide to fully understand all its
                    features, we need guidance from our Creator to understand
                    life&apos;s deepest aspects.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* God's Communication Section */}
            <section id="gods-communication" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <MessageCircle className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Why Would God Talk To Us?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Think about it - if you created something special,
                    wouldn&apos;t you want to explain how it works? There are so
                    many good reasons why God would communicate with us!
                  </p>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Why God would send revelation:
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center flex-col md:flex-row gap-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                          <Compass className="text-blue-500 flex-shrink-0" />
                          <p>To explain our purpose - why we&apos;re here</p>
                        </div>
                        <ArrowRight className="flex-shrink-0 hidden md:block" />
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                          <Heart className="text-red-500 flex-shrink-0" />
                          <p>To teach us how to have a relationship with Him</p>
                        </div>
                      </div>
                      <div className="flex items-center flex-col md:flex-row gap-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                          <Book className="text-purple-500 flex-shrink-0" />
                          <p>
                            To give us guidance on how to live our best life
                          </p>
                        </div>
                        <ArrowRight className="flex-shrink-0 hidden md:block" />
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                          <MessageSquare className="text-yellow-500 flex-shrink-0" />
                          <p>To explain what happens after death</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed">
                    It makes perfect sense that God would want to communicate
                    with us - not just to tell us He exists, but to help us
                    understand who He is, what He wants from us, and how we can
                    live in harmony with His design.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Prophets Section */}
            <section id="prophets" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <MessageSquare className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Why Prophets Make Perfect Sense</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    If God wants to communicate with humanity, what would be the
                    most effective way? Through other humans who can explain,
                    demonstrate, and relate to us!
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Why prophets are the perfect messengers:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          They can explain divine guidance in ways we understand
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          They can demonstrate what it looks like to live by
                          God&apos;s guidance
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          They can answer questions and clarify
                          misunderstandings
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          They provide a living example that we can relate to
                          and follow
                        </span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-lg leading-relaxed">
                    This is why the concept of prophets and divine revelation
                    makes so much sense. Once we understand there is One Creator
                    who designed everything with purpose, it&apos;s natural to
                    conclude that this Creator would guide us through revelation
                    and messengers.
                  </p>

                  <p className="text-lg leading-relaxed">
                    This brings us to the Quran and Prophet Muhammad ﷺ. Having
                    established the need for divine guidance, we can now explore
                    why Islam offers the most compelling answers to life&apos;s
                    biggest questions.
                  </p>
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
              <Button className="rounded-full h-14 w-14 shadow-lg bg-purple-600 hover:bg-purple-700">
                <Logs size={24} />
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
              <Feather className="text-purple-600" size={18} />
              <h3 className="text-lg font-medium">Journey to Understanding</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
              May we all seek divine guidance in our lives, finding purpose and
              meaning through the Creator&apos;s message.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => (window.location.href = "/primary/oneness")}
              >
                <ArrowLeft size={14} className="ml-2" /> Revisit oneness of God
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Back to Top <ArrowUp size={14} className="ml-2" />
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => (window.location.href = "/primary/quran")}
              >
                Is Quran from God? <ArrowRight size={14} className="ml-2" />
              </Button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};
