"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Target,
  BookOpen,
  Shield,
  FileText,
  Globe,
  Search,
  CheckCircle,
  Zap,
  AlignLeft,
  Check,
  Bookmark,
  Award,
  Clock,
  AlertCircle,
  ChevronRight,
  Layers,
  Feather,
  ArrowUp,
  ArrowLeft,
  ArrowRight,
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

const WhyTheQuran = () => {
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
        id: "preservation",
        title: "Preservation",
        icon: Shield,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "inimitability",
        title: "Inimitability",
        icon: Award,
        color: "bg-yellow-100 dark:bg-yellow-900",
        iconColor: "text-yellow-500",
      },
      {
        id: "clear-message",
        title: "Clear Message",
        icon: CheckCircle,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "universal-message",
        title: "Universal Message",
        icon: Globe,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "falsification-test",
        title: "Authenticity Test",
        icon: Search,
        color: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-500",
      },
      {
        id: "accuracies",
        title: "Remarkable Accuracies",
        icon: Zap,
        color: "bg-orange-100 dark:bg-orange-900",
        iconColor: "text-orange-500",
      },
      {
        id: "conclusion",
        title: "Conclusion",
        icon: CheckCircle,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
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
            <BookOpen className="text-teal-200 hidden md:block" size={32} />
            <h1 className="text-4xl font-bold">
              Why the Quran is Divine Revelation
            </h1>
          </div>
          <p className="text-xl max-w-2xl text-teal-100">
            Discover the compelling evidence for the divine origin of the Quran
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              className="bg-white text-teal-700 hover:bg-teal-50"
              onClick={() => scrollToSection("preservation")}
            >
              Explore Preservation <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="border-white bg-stone-200 text-teal-700 hover:bg-stone-50"
              onClick={() => scrollToSection("introduction")}
            >
              Start from Beginning
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
                    Explore the evidence for divine revelation
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
              <Card className={`border-l-4 border-purple-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Target className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Our Guide for Life</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Let&apos;s think about something we all do. When you buy a
                    new phone or appliance, what&apos;s always included in the
                    box? An instruction manual, right? It shows you how to use
                    it properly, what to do and what not to do, and all the
                    important warnings.
                  </p>
                  <p>
                    In a similar way, we believe God has sent us an instruction
                    manual for life - the Quran. It guides us on how to live,
                    what to do and avoid, and gives us important warnings and
                    recommendations for our journey through life.
                  </p>
                  <p>
                    But why should we believe the Quran is actually from God?
                    Let&apos;s explore some really fascinating reasons that
                    might surprise you!
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Preservation Section */}
            <section id="preservation" className="scroll-mt-20">
              <Card className={`border-l-4 border-green-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Shield className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Remarkably Preserved</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    One of the most amazing things about the Quran is how
                    perfectly it&apos;s been preserved over 1,400 years. The
                    Quran itself makes a bold promise about this:
                  </p>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg my-6">
                    <p className="italic text-center text-xl mb-2">
                      &quot;It is certainly We Who have revealed the Reminder
                      [the Quran], and it is certainly We Who will preserve
                      it.&quot;
                    </p>
                    <p className="text-right">— Quran 15:9</p>
                  </div>

                  <p>
                    This isn&apos;t just a claim - it&apos;s a reality you can
                    verify yourself! You could pick up a copy of the Quran from
                    anywhere in the world today and compare it with manuscripts
                    dating back to within thirty years after Prophet
                    Muhammad&apos;s time, and you&apos;d find the text to be
                    exactly the same (apart from writing style and pronunciation
                    marks).
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Bookmark className="text-blue-500" />
                      Two ways the Quran is preserved:
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                          <FileText className="text-purple-500 flex-shrink-0 mt-1" />
                          <div>
                            <strong>Written preservation:</strong> Identical
                            manuscripts exist from the earliest Islamic period,
                            with careful systems to ensure accuracy.
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                          <BookOpen className="text-orange-500 flex-shrink-0 mt-1" />
                          <div>
                            <strong>Memorization:</strong> Millions of people
                            worldwide, speaking countless languages, have
                            memorized the entire Quran word for word - something
                            not seen with any other book in history.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Inimitability Section */}
            <section id="inimitability" className="scroll-mt-20">
              <Card className={`border-l-4 border-yellow-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                      <Award className="text-yellow-500" size={24} />
                    </div>
                    <CardTitle>Impossible to Imitate</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The Quran presents an interesting challenge to anyone who
                    doubts its divine origin:
                  </p>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg my-6">
                    <p className="italic text-center text-xl mb-2">
                      &quot;And if you all are in doubt about what I have
                      revealed to My servant, bring a single chapter like it,
                      and call your witnesses besides God if you are
                      truthful.&quot;
                    </p>
                    <p className="text-right">— Quran 2:23</p>
                  </div>

                  <p>
                    This challenge is fascinating because the shortest chapter
                    in the Quran is just three verses long (Surah al-Kawthar).
                    How hard could it be to write three lines?
                  </p>

                  <p>
                    Well, the people who received this challenge were the Arabs
                    of that time - master poets and linguistic experts who took
                    immense pride in their language skills. Yet many of them
                    embraced Islam just from hearing the Quran being recited.
                    Despite their expertise, they couldn&apos;t meet this
                    seemingly simple challenge.
                  </p>

                  <p>
                    The unique literary style of the Quran - neither poetry nor
                    prose but something entirely distinct - continues to
                    captivate listeners, even those who don&apos;t understand
                    Arabic often find its recitation moving and powerful.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Clear Message Section */}
            <section id="clear-message" className="scroll-mt-20">
              <Card className={`border-l-4 border-blue-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <CheckCircle className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>A Clear Message About God</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Remember our earlier discussions about the nature of God?
                    How reason tells us there must be One Creator unlike
                    creation? The Quran&apos;s description of God perfectly
                    matches what we can understand through rational thinking:
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      How the Quran describes God:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>One without partners:</strong> &quot;Say: He
                          is God, the One and Alone&quot; (Quran 112:1)
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Creator of everything:</strong> &quot;God is
                          the Creator of all things&quot; (Quran 39:62)
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Everything depends on Him:</strong> &quot;O
                          humanity! It is you who stand in need of God, while
                          God is the Self-Sufficient, the Praiseworthy&quot;
                          (Quran 35:15)
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Entirely unique:</strong> &quot;There is
                          nothing like Him&quot; (Quran 42:11)
                        </div>
                      </li>
                    </ul>
                  </div>

                  <p>
                    A beautiful summary of this concept is found in the short
                    chapter called Surah Al-Ikhlas:
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg my-6">
                    <p className="italic text-center text-xl">
                      &quot;Say: He is God, the One and Alone, God the one whom
                      everything needs and who Himself needs nothing, He is not
                      born, nor does He beget, and there is nothing that can be
                      compared to Him.&quot;
                    </p>
                    <p className="text-right">— Quran 112:1-4</p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Universal Message Section */}
            <section id="universal-message" className="scroll-mt-20">
              <Card className={`border-l-4 border-purple-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Globe className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>A Message for Everyone</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Another remarkable aspect of the Quran is its universal
                    message. It&apos;s not meant for just one tribe, nation, or
                    time period - it speaks to all of humanity across all ages.
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      The Quran&apos;s universal values:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>Be fair and just (16:90)</span>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>Honor your parents (17:23)</span>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>Be good to neighbors (4:36)</span>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>Saving lives is sacred (5:32)</span>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>Don&apos;t be prideful (17:37)</span>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>Don&apos;t cheat or steal (17:35)</span>
                      </div>
                    </div>
                  </div>

                  <p>
                    These values aren&apos;t tied to any specific culture or
                    time period - they&apos;re universal principles that make
                    sense for creating a balanced, healthy society no matter
                    where or when you live. Isn&apos;t it interesting that these
                    align with what most of us already feel is right?
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Falsification Test Section */}
            <section id="falsification-test" className="scroll-mt-20">
              <Card className={`border-l-4 border-red-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <Search className="text-red-500" size={24} />
                    </div>
                    <CardTitle>
                      The Quran&apos;s Own Test of Authenticity
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The Quran doesn&apos;t shy away from scrutiny. In fact, it
                    offers its own test to determine if it&apos;s really from
                    God:
                  </p>

                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg my-6">
                    <p className="italic text-center text-xl mb-2">
                      &quot;Do they not then consider the Quran carefully? Had
                      it been from other than Allah, they would surely have
                      found therein contradictions in abundance&quot;
                    </p>
                    <p className="text-right">— Quran 4:82</p>
                  </div>

                  <p>
                    This is a powerful challenge! The Quran was revealed over 23
                    years, addressing countless topics from theology to law,
                    from personal conduct to cosmic events. For a human author
                    to maintain perfect consistency across such a vast range of
                    subjects over such a long period would be extremely
                    difficult.
                  </p>

                  <p>
                    This challenge invites readers to examine the Quran
                    critically, searching for contradictions or inconsistencies
                    - a level of confidence that suggests it knows it will pass
                    such examination.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Accuracies Section */}
            <section id="accuracies" className="scroll-mt-20">
              <Card className={`border-l-4 border-orange-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                      <Zap className="text-orange-500" size={24} />
                    </div>
                    <CardTitle>Remarkable Accuracies</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The Quran contains statements about history, science, and
                    the natural world that are remarkably accurate - especially
                    considering the time and place it was revealed.
                  </p>

                  <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Historical accuracies:
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                          <Clock className="text-blue-500 flex-shrink-0" />
                          <div>
                            <strong>Ancient Egyptian titles:</strong> The Quran
                            correctly refers to the ruler in Joseph&apos;s time
                            as a &quot;King&quot; but in Moses&apos; time as
                            &quot;Pharaoh&quot; - matching what we now know from
                            historical records.
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                          <AlignLeft className="text-purple-500 flex-shrink-0" />
                          <div>
                            <strong>Multilayered descriptions:</strong> The
                            Quran describes natural phenomena in ways that made
                            sense to ancient audiences but also align with
                            modern discoveries.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p>
                    For example, consider how the Quran describes the origins of
                    the universe:
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-6">
                    <p className="italic text-center text-xl mb-2">
                      &quot;Do the disbelievers not realize that the heavens and
                      earth were once one mass then We split them apart?&quot;
                    </p>
                    <p className="text-right">— Quran 21:30</p>
                  </div>

                  <p>
                    For a 7th century audience, this description made sense, but
                    for us today, it also aligns with our understanding of the
                    universe beginning from a singularity (what scientists call
                    the Big Bang).
                  </p>

                  <p>
                    Similarly, the Quran&apos;s description of embryonic
                    development uses the Arabic word &quot;alaqah&quot; - which
                    can mean a clinging substance, a leech-like structure, or a
                    blood clot. When we look at an embryo around days 22-25, it
                    does indeed resemble a leech and is clinging to the uterine
                    wall!
                  </p>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <AlertCircle className="text-yellow-500" />A balanced
                      view:
                    </h3>
                    <p>
                      Remember, the Quran isn&apos;t meant to be a science
                      textbook - it&apos;s a book of guidance. These fascinating
                      alignments with modern knowledge are signs for reflection,
                      not scientific claims. Science constantly evolves with new
                      discoveries, while the Quran&apos;s purpose is to invite
                      us to contemplate the Creator&apos;s wisdom and power.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Conclusion Section */}
            <section id="conclusion" className="scroll-mt-20">
              <Card className={`border-l-4 border-green-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <CheckCircle className="text-green-500" size={24} />
                    </div>
                    <CardTitle>Bringing It All Together</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    When we look at all these aspects together - the
                    Quran&apos;s perfect preservation, its inimitable style, its
                    clear and consistent message about God, its universal
                    values, its invitation to scrutiny, and its remarkable
                    accuracies - a compelling picture emerges.
                  </p>

                  <p>
                    These qualities suggest that the Quran isn&apos;t just
                    another book written by humans, but rather a divine
                    revelation - our instruction manual for life from the
                    Creator Himself.
                  </p>

                  <p>
                    Just as we would trust the manufacturer&apos;s guide to show
                    us how to use our devices properly, the Quran offers
                    guidance on how to live our lives in accordance with our
                    Creator&apos;s wisdom and purpose.
                  </p>
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
            <Feather className="text-purple-600" size={18} />
            <h3 className="text-lg font-medium">Journey of Truth</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            May we all approach questions of faith with honesty, critical
            thinking, and an open heart to discover the truth that resonates
            with both reason and spirituality.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => (window.location.href = "/primary/revelation")}
            >
              <ArrowLeft size={14} /> Revisit need of Revelation
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
              onClick={() => (window.location.href = "/primary/prophethood")}
            >
              Why we need Prophet? <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </footer>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="rounded-full h-14 w-14 shadow-lg bg-teal-600 hover:bg-teal-700">
              <Layers size={24} />
            </Button>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-64 p-0 mr-6 mb-2">
            <nav className="max-h-80 overflow-y-auto">
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

export default WhyTheQuran;
