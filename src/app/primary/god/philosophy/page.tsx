/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Target,
  Layers,
  Check,
  Table,
  ArrowRight,
  Fingerprint,
  Infinity,
  Sparkles,
  ChevronRight,
  ArrowUp,
  Feather,
  ArrowLeft,
  Compass,
  FileDigit,
  Settings,
  Sliders,
  Logs,
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

const ProofsForGod = () => {
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
        id: "proof-1",
        title: "Dependence Proof",
        icon: Layers,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "proof-2",
        title: "Necessary Facts",
        icon: FileDigit,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "proof-3",
        title: "Arrangement Proof",
        icon: Settings,
        color: "bg-orange-100 dark:bg-orange-900",
        iconColor: "text-orange-500",
      },
      {
        id: "proof-4",
        title: "Fine-Tuning",
        icon: Sliders,
        color: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-500",
      },
      {
        id: "proof-5",
        title: "Composite Things",
        icon: Table,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
      },
      {
        id: "oneness-1",
        title: "Uniqueness",
        icon: Fingerprint,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "oneness-2",
        title: "Ultimate Capacity",
        icon: Infinity,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "oneness-3",
        title: "Natural Order",
        icon: Compass,
        color: "bg-teal-100 dark:bg-teal-900",
        iconColor: "text-teal-500",
      },
      {
        id: "conclusion",
        title: "Conclusion",
        icon: Sparkles,
        color: "bg-violet-100 dark:bg-violet-900",
        iconColor: "text-violet-500",
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
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 dark:from-blue-700 dark:to-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-yellow-200 hidden md:block" size={32} />
            <h1 className="text-4xl font-bold">Proofs for God's Existence</h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">
            Explore logical proofs for the existence of God and why there must
            be one unique, necessary, and independent creator.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("proof-1")}
            >
              Explore the Proofs <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="border-white bg-stone-200 text-blue-700 hover:bg-stone-50"
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
                    Key proofs and arguments for God's existence
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
                    <CardTitle>Understanding the Proofs for God</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Throughout human history, people have pondered the existence
                    of a Creator. These aren't just religious claims but logical
                    arguments that can be understood and evaluated by anyone,
                    regardless of their background.
                  </p>
                  <p className="text-lg leading-relaxed">
                    We'll explore five key proofs that point toward the
                    existence of a necessary, independent Creator, followed by
                    three arguments for why this Creator must be One. These
                    proofs build upon common sense and logical reasoning that we
                    use in our everyday lives.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      What we'll cover:
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          Five logical proofs for the existence of God
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>Three arguments for why God must be One</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          Clear explanations of key terms and concepts
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Proof 1 Section */}
            <section id="proof-1" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Layers className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>
                      Proof 1: Dependence on an Independent Cause
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Look around you. Everything you see—from trees to buildings,
                    from smartphones to stars—is made up of parts. These
                    composite things cannot exist on their own without something
                    holding them together.
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Core Reasoning:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Premise:</strong> All things made of parts
                          (like a smartphone or even the universe) require
                          something to hold them together.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Reasoning:</strong> Parts cannot create or
                          sustain themselves indefinitely. They need an
                          underlying cause.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Conclusion:</strong> The existence of our
                          universe implies there must be one self-sufficient
                          entity that underpins everything else.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-blue-200 dark:border-blue-900">
                    <h4 className="font-medium mb-2">Key Terms:</h4>
                    <p>
                      <strong>Self-sufficient:</strong> Capable of existing
                      without relying on anything else.
                    </p>
                    <p>
                      <strong>Independent being:</strong> An existence that
                      doesn't depend on anything else; the foundational cause.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Proof 2 Section */}
            <section id="proof-2" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <FileDigit className="text-green-500" size={24} />
                    </div>
                    <CardTitle>
                      Proof 2: Necessary Facts Presuppose Existence
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Think about simple mathematical truths like "2 + 2 = 4."
                    These are necessary truths—they're always true regardless of
                    time, place, or circumstance. Yet these truths presuppose
                    that something exists to make them meaningful.
                  </p>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Core Reasoning:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Premise:</strong> For any truth to be
                          meaningful, there must be an underlying reality that
                          makes those truths "real."
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Reasoning:</strong> Since necessary truths are
                          unchangeable, they indicate a fundamental reality that
                          doesn't rely on anything else.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Conclusion:</strong> The existence of
                          necessary truths implies there is a fundamental,
                          independent being that is the basis for all existence.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-green-200 dark:border-green-900">
                    <h4 className="font-medium mb-2">Key Terms:</h4>
                    <p>
                      <strong>Necessary truths:</strong> Statements that are
                      true in every possible circumstance, like mathematical
                      facts.
                    </p>
                    <p>
                      <strong>Necessary:</strong> Something that must be the
                      case and cannot be otherwise—it exists in all possible
                      scenarios.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Proof 3 Section */}
            <section id="proof-3" className="scroll-mt-20">
              <Card className="border-l-4 border-orange-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                      <Settings className="text-orange-500" size={24} />
                    </div>
                    <CardTitle>
                      Proof 3: Arrangement Indicates a Choosing Agent
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    If you walk into a room and find furniture arranged in a
                    particular way, you naturally assume someone arranged it
                    that way. Similarly, the specific arrangement of our
                    universe suggests a deliberate choice.
                  </p>

                  <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Core Reasoning:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Premise:</strong> If something could be
                          arranged in different ways, its current arrangement
                          suggests a deliberate choice.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Reasoning:</strong> Since the universe could
                          have been different, its specific arrangement
                          indicates a choosing agent must have made that
                          arrangement.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Conclusion:</strong> This external arranger
                          must be an independent being whose own nature is
                          necessary—not dependent on anything else.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-orange-200 dark:border-orange-900">
                    <h4 className="font-medium mb-2">Real-World Example:</h4>
                    <p>
                      Think about your home. The furniture and decorations are
                      arranged in a specific way because someone chose that
                      arrangement. They could have been arranged differently,
                      but they weren't. Similarly, the universe's specific
                      arrangement indicates a choosing agent.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Proof 4 Section */}
            <section id="proof-4" className="scroll-mt-20">
              <Card className="border-l-4 border-red-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <Sliders className="text-red-500" size={24} />
                    </div>
                    <CardTitle>Proof 4: Fine-Tuning of the Universe</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Scientists have discovered that the physical constants and
                    laws of our universe are finely tuned to allow life to
                    exist. Even tiny changes to these values would make life
                    impossible.
                  </p>

                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Core Reasoning:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Premise:</strong> The laws of physics,
                          constants of nature, and stability of the universe are
                          set at precise values that allow life to thrive.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Reasoning:</strong> Whether this fine-tuning
                          is necessary or contingent, it requires an explanation
                          from a foundation that is not itself contingent.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Conclusion:</strong> The finely tuned nature
                          of the universe suggests the presence of an
                          underlying, purposeful cause—an independent and
                          necessary entity.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-red-200 dark:border-red-900">
                    <h4 className="font-medium mb-2">Key Terms:</h4>
                    <p>
                      <strong>Contingent:</strong> Something that depends on
                      certain conditions or could be otherwise.
                    </p>
                    <p>
                      <strong>Fine-tuning:</strong> The precise calibration of
                      physical constants and laws that make our universe capable
                      of supporting life.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Proof 5 Section */}
            <section id="proof-5" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <Table className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>
                      Proof 5: Causation of Composite Things
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Everything composed of multiple parts—from smartphones to
                    living organisms to galaxies—must have been caused by
                    something else. The universe itself, being composite,
                    requires an external cause.
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Core Reasoning:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Premise:</strong> Just as a car is assembled
                          from many parts, the universe is composed of various
                          elements.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Reasoning:</strong> Since every composite
                          thing is caused by how its parts are arranged, the
                          universe too must have been caused.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Conclusion:</strong> This cause must be an
                          independent being that is self-sufficient and
                          necessary—not caused by anything else.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-amber-200 dark:border-amber-900">
                    <h4 className="font-medium mb-2">Real-World Example:</h4>
                    <p>
                      Consider your smartphone. It's made of various components
                      that someone assembled in a specific way. It didn't
                      assemble itself! Similarly, the universe, with its
                      billions of galaxies, stars, and planets, must have been
                      caused by something beyond itself.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Arguments for Oneness */}
            <div className="py-6">
              <h2 className="text-2xl font-bold text-center mb-2">
                Arguments for the Oneness of God
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Now that we've established the existence of a necessary Creator,
                let's explore why this Creator must be One.
              </p>
            </div>

            {/* Oneness Argument 1 */}
            <section id="oneness-1" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Fingerprint className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>Argument 1: Uniqueness by Definition</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    A necessary existence, by its very nature, cannot vary or
                    have alternatives. It must be exactly as it is in every
                    possible scenario.
                  </p>

                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Core Reasoning:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Premise:</strong> If something is truly
                          necessary, it must exist exactly as it is in every
                          possible scenario.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Reasoning:</strong> If there were two or more
                          necessary beings, each would have some distinguishing
                          feature. But any difference would mean one could have
                          been otherwise, contradicting the idea of necessity.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Conclusion:</strong> There can only be one
                          unique necessary existence.
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Oneness Argument 2 */}
            <section id="oneness-2" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Infinity className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Argument 2: Ultimate Capacity</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    The necessary existence is responsible for everything else,
                    so it must have unlimited power or capacity over all things.
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Core Reasoning:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Premise:</strong> An entity that is the cause
                          of all that exists must hold ultimate authority or
                          capacity over the entire cosmos.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Reasoning:</strong> If this capacity were
                          shared between multiple entities, none could claim
                          full responsibility for creation and maintenance of
                          all things.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Conclusion:</strong> The necessary existence
                          must be unique in its capacity—it is the only one that
                          holds ultimate control.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-purple-200 dark:border-purple-900">
                    <h4 className="font-medium mb-2">Real-World Example:</h4>
                    <p>
                      Consider a national government. It works most effectively
                      when there's a single, central authority rather than
                      competing powers. Similarly, the universe's perfect
                      coordination suggests a single source of ultimate
                      authority.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Oneness Argument 3 */}
            <section id="oneness-3" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <Compass className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>Argument 3: Natural Order</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    The consistent order, stability, and regularity we observe
                    in nature point to one organization agent rather than many
                    competing forces.
                  </p>

                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Core Reasoning:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Premise:</strong> Nature exhibits remarkable
                          stability, regularity, and uniformity across different
                          contexts.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Reasoning:</strong> For such consistent order
                          to exist, there must be a single, unified source
                          arranging the natural world. Multiple competing agents
                          would likely result in chaos or inconsistency.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Conclusion:</strong> The natural world's
                          ordered structure is best explained by one unique,
                          necessary being acting as the sole arranger.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-teal-200 dark:border-teal-900">
                    <h4 className="font-medium mb-2">Real-World Example:</h4>
                    <p>
                      The laws of physics work the same way throughout the
                      universe. Gravity behaves consistently whether on Earth or
                      in distant galaxies. This universal consistency suggests a
                      single source of order rather than multiple creators with
                      different approaches.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Conclusion Section */}
            <section id="conclusion" className="scroll-mt-20">
              <Card className="border-l-4 border-violet-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-violet-100 dark:bg-violet-900">
                      <Sparkles className="text-violet-500" size={24} />
                    </div>
                    <CardTitle>Conclusion: One Necessary Creator</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    These proofs and arguments lead us to a remarkable
                    conclusion: there must be One unique, necessary, and
                    independent Creator behind our universe.
                  </p>

                  <div className="bg-violet-50 dark:bg-violet-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      What We've Discovered:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>An Independent Being:</strong> The universe
                          depends on something self-sufficient that doesn't
                          depend on anything else.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>A Necessary Existence:</strong> This being
                          must exist in all possible scenarios—it cannot not
                          exist.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>A Singular Creator:</strong> By necessity and
                          reasoning, this being must be One—unique and without
                          equal.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-lg leading-relaxed">
                    These logical proofs don't just suggest the existence of a
                    Creator—they point to specific attributes this Creator must
                    have: independence, necessity, and oneness. These align
                    remarkably well with what many religious traditions have
                    taught about God for thousands of years.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Whether you approach these arguments from a philosophical,
                    scientific, or theological perspective, they invite us to
                    consider the profound implications of a universe that points
                    beyond itself to One necessary Creator.
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
              <ArrowLeft size={14} /> Existence of God
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
              onClick={() => (window.location.href = "/primary/oneness")}
            >
              Revisit Oneness of God
              <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProofsForGod;
