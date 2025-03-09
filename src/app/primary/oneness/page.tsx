/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Target,
  Users,
  Layers,
  HelpCircle,
  AlertCircle,
  Check,
  Table,
  ArrowRight,
  Fingerprint,
  Infinity,
  User,
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

const GodsOneness = () => {
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
        id: "creator-nature",
        title: "Creator vs Creation",
        icon: Layers,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "self-creation",
        title: "Self-Creation?",
        icon: AlertCircle,
        color: "bg-orange-100 dark:bg-orange-900",
        iconColor: "text-orange-500",
      },
      {
        id: "infinite-regression",
        title: "Who Created God?",
        icon: HelpCircle,
        color: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-500",
      },
      {
        id: "uncreated-creator",
        title: "Uncreated Creator",
        icon: Infinity,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "oneness",
        title: "God's Oneness",
        icon: Fingerprint,
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
      <div className="bg-gradient-to-r from-purple-600 to-blue-800 dark:from-purple-700 dark:to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Fingerprint
              className="text-purple-200 hidden md:block"
              size={32}
            />
            <h1 className="text-4xl font-bold">Understanding God's Oneness</h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-100">
            Explore why there can only be One Creator and why this Creator must
            be different from everything in our universe.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              className="bg-white text-purple-700 hover:bg-purple-50"
              onClick={() => scrollToSection("oneness")}
            >
              Explore God&apos;s Oneness <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="border-white bg-stone-200 text-purple-700 hover:bg-stone-50"
              onClick={() => scrollToSection("introduction")}
            >
              Start with the Basics
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
                  <CardTitle className="text-lg">Contents</CardTitle>
                  <CardDescription>
                    Key concepts in understanding God&apos;s oneness
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
            {/* Introduction Section */}
            <section id="introduction" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Target className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Why There Can Only Be One God</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Now that we&apos;ve established that there must be a
                    Creator, let&apos;s explore why there can only be one
                    Creator and why this Creator must be different from
                    everything in our universe.
                  </p>
                  <p className="text-lg leading-relaxed">
                    We&apos;re going to use the same common sense approach to
                    understand some important aspects about who God really is.
                    These ideas aren&apos;t complicated - they&apos;re actually
                    quite simple when we think about them step by step.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Creator vs Creation Section */}
            <section id="creator-nature" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Layers className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>The Creator Is Not Like Creation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    One of the first things we can figure out is that the
                    Creator must be fundamentally different from the universe.
                    Think of it this way - the artist is not the painting, the
                    writer is not the book, and the inventor is not the
                    invention.
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Why the Creator must be different:
                    </h3>
                    <p className="mb-4">
                      Remember our earlier reasoning - the universe needs a
                      creator because:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          The universe couldn&apos;t come from nothing - you
                          can&apos;t get something from nothing, especially
                          something as vast and complex as our universe.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          The universe couldn&apos;t create itself - nothing can
                          create itself before it exists!
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Self-Creation Impossibility */}
            <section id="self-creation" className="scroll-mt-20">
              <Card className="border-l-4 border-orange-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                      <AlertCircle className="text-orange-500" size={24} />
                    </div>
                    <CardTitle>Could the Universe Create Itself?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Think about this for a moment - how could the universe
                    create itself? That would mean it existed before it existed
                    to create itself! It&apos;s a logical impossibility.
                  </p>

                  <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      The Phone Example Revisited:
                    </h3>
                    <p className="text-lg">
                      Remember our mobile phone example? Would any rational
                      person believe:
                    </p>
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg mt-4">
                      <p>
                        &quot;This phone assembled itself into a working device,
                        organized all its components, wrote its own operating
                        system, and designed its own features.&quot;
                      </p>
                    </div>
                    <p className="mt-4">
                      Of course not! We know complex, functional things require
                      intelligent design.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Infinite Regression Section */}
            <section id="infinite-regression" className="scroll-mt-20">
              <Card className="border-l-4 border-red-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <HelpCircle className="text-red-500" size={24} />
                    </div>
                    <CardTitle>Who Created the Creator?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    This is where many people get stuck. They ask, &quot;If
                    everything needs a creator, then who created God?&quot;
                    It&apos;s a good question!
                  </p>

                  <p className="text-lg leading-relaxed">
                    But here&apos;s the logic problem: If we say God was created
                    by another creator, then who created that creator? And who
                    created the creator of the creator? We&apos;d end up in an
                    endless loop, going back forever.
                  </p>

                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      The Table Lifting Example:
                    </h3>
                    <p className="mb-4">
                      Imagine you want to lift a heavy table, but you can&apos;t
                      do it alone:
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 flex-col md:flex-row">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1 w-full">
                          <User className="text-blue-500 mb-2" />
                          <p>You ask your friend to help</p>
                        </div>
                        <ArrowRight className="flex-shrink-0 hidden md:block" />
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1 w-full">
                          <Users className="text-blue-500 mb-2" size={56} />
                          <p>
                            Your friend says: &quot;I&apos;ll only help if
                            someone else helps me first&quot;
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1 w-full">
                          <Table className="text-blue-500 mb-2" />
                          <p>If this continues forever...</p>
                        </div>
                        <ArrowRight className="flex-shrink-0 hidden md:block" />
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1 w-full">
                          <AlertCircle className="text-red-500 mb-2" />
                          <p>The table will never be lifted!</p>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4">
                      Similarly, if every creator needs another creator, nothing
                      would ever get created! But we know the universe exists,
                      so this can&apos;t be right.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Uncreated Creator Section */}
            <section id="uncreated-creator" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Infinity className="text-green-500" size={24} />
                    </div>
                    <CardTitle>The Uncreated Creator</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Using logical reasoning, we arrive at a sensible conclusion:
                    There must be an uncreated Creator - one that wasn&apos;t
                    made or designed but has always existed.
                  </p>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Qualities of the Uncreated Creator:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Self-sufficient:</strong> While creation
                          depends on other things, the Creator depends on
                          nothing.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Eternal:</strong> While creation has
                          beginnings and endings, the Creator has always
                          existed.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Beyond space and time:</strong> While
                          we&apos;re confined by physical limits, the Creator
                          exists beyond these limitations.
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Oneness Section */}
            <section id="oneness" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Fingerprint className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Why There Can Only Be One</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Finally, we come to the question of God&apos;s oneness. Why
                    must there be just one Creator rather than many?
                  </p>

                  <p className="text-lg leading-relaxed">
                    If there were multiple creators, they would limit each
                    other. Each would have boundaries where their power ends and
                    another&apos;s begins. But this would make them limited
                    beings - more like very powerful created beings rather than
                    the unlimited Creator we&apos;ve been describing.
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      The Logic of Oneness:
                    </h3>
                    <p className="mb-4">
                      An unlimited, self-sufficient, eternal Creator must be one
                      because:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          Multiple creators would limit each other, making none
                          of them truly unlimited
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          The perfect order of the universe suggests a single,
                          unified intelligence behind its design
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          If multiple creators disagreed, there would be chaos
                          rather than the harmony we observe
                        </span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-lg leading-relaxed">
                    This is why we conclude there is One God - One Creator who
                    designed this universe with perfect balance and harmony.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
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

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Feather className="text-purple-600" size={18} />
            <h3 className="text-lg font-medium">
              Understanding God&apos;s Nature
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            May we all gain a deeper understanding of God&apos;s oneness and
            grow in our appreciation of the Creator&apos;s unique nature and
            perfect design.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => (window.location.href = "/primary/god")}
            >
              <ArrowLeft size={14} /> Revisit Oneness of God
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
              onClick={() => (window.location.href = "/primary/revelation")}
            >
              Why we need Revelation? <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GodsOneness;
