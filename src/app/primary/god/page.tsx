/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef, useState, useEffect, useMemo } from "react";
import {
  Phone,
  Sun,
  Wind,
  Zap,
  AlertCircle,
  Check,
  BookOpen,
  Target,
  Brain,
  Settings,
  X,
  ChevronRight,
  Layers,
  ArrowUp,
  Feather,
  ArrowRight,
  Info,
  Sparkles,
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

const GodExistence = () => {
  const [activeSection, setActiveSection] = useState("premise");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "premise",
        title: "The Premise",
        icon: BookOpen,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "common-sense",
        title: "Common Sense",
        icon: Brain,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "design-argument",
        title: "Design Argument",
        icon: Phone,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "universe-order",
        title: "Universal Order",
        icon: Settings,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
      },
      {
        id: "creator-nature",
        title: "Creator's Nature",
        icon: Target,
        color: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-500",
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
            <Target className="text-blue-200 hidden md:block" size={32} />
            <h1 className="text-4xl font-bold">
              Understanding God&apos;s Existence Through Reason
            </h1>
          </div>
          <p className="text-xl max-w-2xl text-blue-100">
            Exploring the evidence for the Creator through common sense, design,
            and universal order
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => scrollToSection("design-argument")}
            >
              Explore Design Argument <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="border-white bg-stone-200 text-blue-700 hover:bg-stone-50"
              onClick={() => scrollToSection("premise")}
            >
              Start From Beginning
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
                    Explore the reasoning for God&apos;s existence
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
            {/* Premise Section */}
            <section id="premise" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <BookOpen className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>The Premise of Our Discussion</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    The foundation of our discussion rests on a simple yet
                    profound premise: the best way to make sense of the world
                    around us is through common sense and reason. This
                    isn&apos;t just a arbitrary choice - it&apos;s a practical
                    necessity.
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Alternative Methods People Often Use:
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <AlertCircle className="text-yellow-500" size={20} />
                        Feelings and emotions
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertCircle className="text-yellow-500" size={20} />
                        Dreams and personal experiences
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertCircle className="text-yellow-500" size={20} />
                        Ancestral wisdom (&quot;My grandfather said so&quot;)
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertCircle className="text-yellow-500" size={20} />
                        Spiritual experiences
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertCircle className="text-yellow-500" size={20} />
                        Signs and miracles
                      </li>
                    </ul>
                  </div>

                  <p className="text-lg leading-relaxed">
                    The fundamental problem with these alternative methods is
                    their subjective nature. Anyone can claim to have had a
                    transformative spiritual experience or a compelling feeling,
                    but these personal experiences can&apos;t serve as universal
                    proof.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Common Sense Section */}
            <section id="common-sense" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Brain className="text-green-500" size={24} />
                    </div>
                    <CardTitle>The Power of Common Sense</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    It is something that is universal and common! It&apos;s
                    something we can all agree on, it&apos;s what people agree
                    is the best thing to use to make decisions in their everyday
                    lives and also by and large, it&apos;s objective, not
                    subjective.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Scenario</h3>
                    <p className="text-lg leading-relaxed">
                      Imagine this scenario: A man wearing nothing but
                      underpants knocks on your door, claiming to be the
                      electricity meter reader. How would you react? Would you:
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <X className="text-red-500" />
                        Simply believe him without question?
                      </li>
                      <li className="flex items-center gap-2">
                        <X className="text-red-500" />
                        Just &apos;have faith&apos; in his claim?
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-green-500" />
                        Use reason and common sense to assess the situation?
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Design Argument Section */}
            <section id="design-argument" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Phone className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>The Design Argument</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      The Mobile Phone Example
                    </h3>
                    <div className="space-y-4">
                      <p className="text-lg leading-relaxed">
                        Consider your mobile phone. At its core, it&apos;s made
                        of simple elements:
                      </p>
                      <ul className="space-y-2">
                        <li>Plastic (derived from oil)</li>
                        <li>Glass and silicon (from sand)</li>
                        <li>Precious metals</li>
                      </ul>
                      <p className="text-lg leading-relaxed">
                        Now, imagine finding a mobile phone in the Arabian
                        desert. Would you believe it formed naturally through:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                          <Wind className="text-blue-500 mb-2" />
                          <p>Wind blowing</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                          <Sun className="text-yellow-500 mb-2" />
                          <p>Sun shining</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                          <Zap className="text-orange-500 mb-2" />
                          <p>Lightning striking</p>
                        </div>
                      </div>

                      <p className="text-lg leading-relaxed">
                        Of course not! The complexity of the phone&apos;s design
                        and function points to a designer. Similarly, the
                        universe&apos;s vast complexity and orderliness suggest
                        a Creator.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Universe Order Section */}
            <section id="universe-order" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <Settings className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>Order in the Universe</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    The universe exhibits remarkable fine-tuning that makes life
                    possible:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">
                        Earth&apos;s Perfect Rotation
                      </h3>
                      <p>
                        Our planet rotates once every 24 hours. If a day was
                        30-40 years long:
                      </p>
                      <ul className="mt-4">
                        <li>One side would be extremely hot</li>
                        <li>Other side extremely cold</li>
                        <li>Life would be nearly impossible</li>
                      </ul>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">
                        The Habitable Zone
                      </h3>
                      <p>Earth sits in the perfect position from the sun:</p>
                      <ul className="mt-4">
                        <li>Not too close (too hot)</li>
                        <li>Not too far (too cold)</li>
                        <li>Perfect for liquid water</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Creator's Nature Section */}
            <section id="creator-nature" className="scroll-mt-20">
              <Card className="border-l-4 border-red-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <Target className="text-red-500" size={24} />
                    </div>
                    <CardTitle>The Nature of the Creator</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Through our reasoning, we can deduce several key points
                    about the nature of the Creator:
                  </p>
                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Key Attributes:
                    </h3>
                    <ul className="space-y-4">
                      <li>
                        <strong>Different from Creation:</strong> The Creator
                        must be fundamentally different from the universe
                        itself.
                      </li>
                      <li>
                        <strong>Uncreated:</strong> The Creator cannot have been
                        created, or we would face an infinite regression.
                      </li>
                      <li>
                        <strong>Self-sufficient:</strong> While creation is
                        needy, the Creator must be self-sufficient.
                      </li>
                      <li>
                        <strong>Eternal:</strong> While creation is temporary,
                        the Creator must be eternal.
                      </li>
                      <li>
                        <strong>Unlimited:</strong> While creation is confined
                        by space and time, the Creator must be free of these
                        limitations.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            <div className="flex justify-center items-center gap-4 w-full m-auto">
              <Info />
              <p className="text-sm text-gray-500">
                This reasoning is enough to understand the need for a Higher
                Power, but some have confirmation bias due to their knowledge of
                philosophy. If you don't, skip to the next section:
                <a href="/primary/oneness">Oneness of God</a>.
              </p>
            </div>

            {/* Summary Section */}
            <section id="summary" className="scroll-mt-20">
              <Card className="border-l-4 border-violet-500">
                <CardHeader className="pb-2 flex flex-row justify-between w-full">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-violet-100 dark:bg-violet-900">
                      <Sparkles className="text-violet-500" size={24} />
                    </div>
                    <CardTitle>Philosophical Perspective</CardTitle>
                  </div>
                  <a href="/primary/god/philosophy">
                    <Button className="bg-primary">View Details</Button>
                  </a>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    The logical proofs and arguments presented lead us to the
                    conclusion that there must be a unique, necessary, and
                    independent Creator behind the universe. Here's a summary of
                    the key points:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="bg-violet-50 dark:bg-violet-900/30 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">
                        Five Logical Proofs
                      </h3>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="text-green-500 mt-1 flex-shrink-0" />
                          <span>Dependence on an Independent Cause</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="text-green-500 mt-1 flex-shrink-0" />
                          <span>Necessary Facts Presuppose Existence</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="text-green-500 mt-1 flex-shrink-0" />
                          <span>Arrangement Indicates a Choosing Agent</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="text-green-500 mt-1 flex-shrink-0" />
                          <span>Fine-Tuning of the Universe</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="text-green-500 mt-1 flex-shrink-0" />
                          <span>Causation of Composite Things</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-violet-50 dark:bg-violet-900/30 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">
                        Three Arguments for Oneness
                      </h3>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="text-green-500 mt-1 flex-shrink-0" />
                          <span>Uniqueness by Definition</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="text-green-500 mt-1 flex-shrink-0" />
                          <span>Ultimate Capacity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="text-green-500 mt-1 flex-shrink-0" />
                          <span>Natural Order</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed">
                    These proofs and arguments collectively point to the
                    existence of a single, necessary, and independent Creator
                    who is the foundation of all existence.
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
            <Button className="rounded-full h-14 w-14 shadow-lg bg-blue-600 hover:bg-blue-700">
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

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Feather className="text-blue-600" size={18} />
            <h3 className="text-lg font-medium">
              Understanding Through Reason
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            May we all use our reason and common sense to better understand the
            universe and the nature of its Creator.
          </p>
          <div className="flex justify-center gap-4 mt-6">
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
              onClick={() => (window.location.href = "/primary/oneness")}
            >
              How many gods? <ArrowRight size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GodExistence;
