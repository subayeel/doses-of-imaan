/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  User,
  Award,
  Shield,
  FileText,
  Brain,
  AlertTriangle,
  CheckCircle,
  Zap,
  Check,
  X,
  MessageCircle,
  Clock,
  Logs,
  ChevronRight,
  Feather,
  ArrowUp,
  ArrowRight,
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

const ProphetMuhammad = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "introduction",
        title: "Understanding the Claim",
        icon: User,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "lying",
        title: "Was He Lying?",
        icon: X,
        color: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-500",
      },
      {
        id: "deluded",
        title: "Was He Deluded?",
        icon: Brain,
        color: "bg-orange-100 dark:bg-orange-900",
        iconColor: "text-orange-500",
      },
      {
        id: "truthful",
        title: "He Was Truthful",
        icon: CheckCircle,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "conclusion",
        title: "A Messenger for Humanity",
        icon: Award,
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
            <User className="text-purple-200 hidden md:block" size={32} />
            <h1 className="text-4xl font-bold">
              Was Muhammad ﷺ Really a Messenger of God?
            </h1>
          </div>
          <p className="text-xl max-w-2xl text-purple-100">
            Explore the logical analysis of Prophet Muhammad's claim to
            prophethood
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              className="bg-white text-purple-700 hover:bg-purple-50"
              onClick={() => scrollToSection("truthful")}
            >
              See the Evidence <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="border-white bg-purple-200 text-purple-700 hover:bg-purple-50"
              onClick={() => scrollToSection("introduction")}
            >
              Start from the Beginning
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
                  <CardTitle className="text-lg">Logical Analysis</CardTitle>
                  <CardDescription>
                    Examining the claim of prophethood
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
                      <User className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Understanding the Prophet's Claim</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Let's explore something really important - how we can know
                    if Prophet Muhammad ﷺ was truly sent by God. If you've
                    already seen how the Quran is divine, this becomes simpler,
                    because the Quran clearly states:
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg my-6">
                    <p className="italic text-center text-xl mb-2">
                      &quot;Say, [O Muhammad], 'O mankind, indeed I am the
                      Messenger of Allah to you all.'&quot;
                    </p>
                    <p className="text-right">— Quran 7:158</p>
                  </div>

                  <p className="text-lg leading-relaxed">
                    But let's take a different approach too. When someone makes
                    a big claim like being a prophet, there are really only
                    three possibilities to consider:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                    <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <X className="text-red-500" size={16} /> He was lying
                      </h3>
                      <p>
                        He knew he wasn't a prophet but claimed to be one anyway
                      </p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Brain className="text-orange-500" size={16} /> He was
                        mistaken
                      </h3>
                      <p>
                        He genuinely thought he was a prophet but was confused
                        or deluded
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Check className="text-green-500" size={16} /> He was
                        truthful
                      </h3>
                      <p>He was actually chosen by God as a messenger</p>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed">
                    Let's examine each possibility logically and see which one
                    makes the most sense. This approach helps us think
                    critically about this important question!
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Was He Lying Section */}
            <section id="lying" className="scroll-mt-20">
              <Card className="border-l-4 border-red-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <X className="text-red-500" size={24} />
                    </div>
                    <CardTitle>Was He Lying?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Let's look at what we know about Muhammad's character ﷺ,
                    especially before he claimed to be a prophet:
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      His reputation before prophethood:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          He was known as &quot;Al-Sadiq Al-Amin&quot; (The
                          Truthful, The Trustworthy) among his people
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          He avoided the common vices of his society (like idol
                          worship, drinking, and gambling)
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          He was known for caring for orphans, the elderly, and
                          helping his community
                        </div>
                      </li>
                    </ul>
                  </div>

                  <p className="text-lg leading-relaxed">
                    Even his enemies acknowledged his honesty! Consider this
                    fascinating historical account:
                  </p>

                  <Card className="my-6 border-yellow-500">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                          <MessageCircle
                            className="text-yellow-500"
                            size={20}
                          />
                        </div>
                        <CardTitle className="text-xl">
                          The Abu Sufyan Incident
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-lg mb-4">
                        Abu Sufyan was a strong opponent of Muhammad ﷺ at the
                        time. When he met Heraclius (the Roman Emperor), he was
                        asked several questions about Muhammad ﷺ, including:
                      </p>
                      <div className="space-y-4 pl-4 border-l-4 border-yellow-300 dark:border-yellow-700">
                        <p className="italic">
                          &quot;Have you ever accused him of telling lies before
                          his claim to be a prophet?&quot;
                        </p>
                        <p>Abu Sufyan answered: &quot;No.&quot;</p>
                        <p className="italic">
                          (Later, Abu Sufyan admitted, &quot;If I had not been
                          afraid of my companions labeling me a liar, I would
                          not have spoken the truth about Muhammad ﷺ.&quot;)
                        </p>
                      </div>
                      <p className="mt-4">
                        Heraclius concluded: &quot;I asked whether he was ever
                        accused of telling lies before he said what he said, and
                        your reply was in the negative. So I wondered how a
                        person who does not tell a lie about others could ever
                        tell a lie about God.&quot;
                      </p>
                      <p className="text-right text-sm mt-2">
                        (Recorded in Sahih Bukhari)
                      </p>
                    </CardContent>
                  </Card>

                  <p className="text-lg leading-relaxed">
                    Let's also consider what people typically lie for:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="text-amber-500 h-5 w-5" />
                          <CardTitle className="text-lg">
                            What did he gain?
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <ul className="space-y-2 text-base">
                          <li>• Lived simply, not luxuriously</li>
                          <li>• Mended his own shoes and clothes</li>
                          <li>• Ate basic meals</li>
                          <li>
                            • Left minimal possessions when he passed away
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="text-amber-500 h-5 w-5" />
                          <CardTitle className="text-lg">
                            What did he endure?
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <ul className="space-y-2 text-base">
                          <li>• Persecution and mockery</li>
                          <li>• Social boycott for 3 years</li>
                          <li>• Physical attacks</li>
                          <li>• Forced exile from his hometown</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <p className="text-lg leading-relaxed">
                    He even refused generous offers to stop preaching! The
                    leaders of Mecca once offered him wealth, women, and power
                    if he would just stop spreading his message. He refused
                    without hesitation.
                  </p>

                  <p className="text-lg leading-relaxed">
                    When we consider all this evidence, the &quot;he was
                    lying&quot; explanation starts to make less and less sense.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Was He Deluded Section */}
            <section id="deluded" className="scroll-mt-20">
              <Card className="border-l-4 border-orange-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                      <Brain className="text-orange-500" size={24} />
                    </div>
                    <CardTitle>Was He Mistaken or Deluded?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Could Muhammad ﷺ have sincerely but mistakenly believed he
                    was a prophet? Let's think about what this would mean:
                  </p>

                  <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      What Muhammad ﷺ brought:
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                          <FileText className="text-blue-500 flex-shrink-0 mt-1" />
                          <div>
                            <strong>A complete system for life:</strong>{" "}
                            Including laws about family, economics, diet,
                            hygiene, social relations, and spiritual practices -
                            all still benefiting millions today
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                          <Zap className="text-yellow-500 flex-shrink-0 mt-1" />
                          <div>
                            <strong>Accurate prophecies:</strong> Such as
                            &quot;barefooted bedouins competing in building tall
                            buildings&quot; - which we see fulfilled today with
                            skyscrapers in the Arabian Peninsula
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                          <Shield className="text-green-500 flex-shrink-0 mt-1" />
                          <div>
                            <strong>Consistent character:</strong> He remained
                            honest, humble, and principled throughout his life,
                            never showing signs of mental instability
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed">
                    Let's also consider a specific incident that reveals his
                    character:
                  </p>

                  <Card className="my-6 border-blue-500">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                          <Clock className="text-blue-500" size={20} />
                        </div>
                        <CardTitle className="text-xl">
                          The Solar Eclipse Incident
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-lg">
                        When Muhammad's ﷺ young son Ibrahim died, there happened
                        to be a solar eclipse on the same day. Many people
                        thought this was a divine sign mourning the death of the
                        Prophet's son.
                      </p>
                      <p className="text-lg mt-4">
                        If Muhammad ﷺ was deluded or dishonest, this would have
                        been a perfect opportunity to reinforce his claim to
                        prophethood. Instead, he gathered people and said:
                      </p>
                      <p className="italic text-center text-xl my-4">
                        &quot;The sun and the moon do not eclipse because of the
                        death of someone from the people, but they are two signs
                        amongst the signs of God. When you see them, stand up
                        and pray.&quot;
                      </p>
                      <p className="text-right text-xs font-bold">
                        Sahih al-Bukhari, Book 18, Number 154
                      </p>
                      <br />
                      <p className="text-lg">
                        He rejected the chance to use this coincidence for
                        personal gain, instead teaching scientific accuracy and
                        focusing on God alone.
                      </p>
                    </CardContent>
                  </Card>

                  <p className="text-lg leading-relaxed">
                    When we consider the consistency, complexity, and lasting
                    impact of his teachings, along with his rational behavior in
                    moments where a deluded person would likely act differently,
                    this explanation also becomes increasingly unlikely.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Was He Truthful Section */}
            <section id="truthful" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <CheckCircle className="text-green-500" size={24} />
                    </div>
                    <CardTitle>The Conclusion: He Was Truthful</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    When we've carefully examined the first two possibilities
                    and found them inadequate to explain the historical facts,
                    we're left with the third option - that Muhammad ﷺ was
                    indeed telling the truth about being God's messenger.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Consider all we've discussed:
                  </p>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      The evidence points to truth:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>His impeccable character</strong> - Known for
                          honesty before and after prophethood, even by his
                          enemies
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>No personal benefit</strong> - He faced
                          hardship and lived simply despite opportunities for
                          wealth and power
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>The coherence of his message</strong> - A
                          comprehensive system that continues to benefit
                          humanity
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>His rational behavior</strong> - Even in
                          situations where a liar or deluded person would likely
                          act differently
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Fulfilled prophecies</strong> - Predictions
                          that have come true long after his lifetime
                        </div>
                      </li>
                    </ul>
                  </div>

                  <p className="text-lg leading-relaxed">
                    The most reasonable conclusion, when we eliminate the
                    alternatives, is that Muhammad ﷺ was indeed what he claimed
                    to be - a messenger chosen by God to deliver divine guidance
                    to humanity.
                  </p>

                  <p className="text-lg leading-relaxed">
                    This perspective aligns with what the Quran says about him
                    and explains why his message has had such a profound and
                    lasting impact on human history.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Conclusion Section */}
            <section id="conclusion" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Award className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>A Messenger for Humanity</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    When we look at Muhammad's life ﷺ, his character, his
                    message, and the impact he's had on history, the evidence
                    points to the truth of his claim to be God's messenger.
                  </p>

                  <p className="text-lg leading-relaxed">
                    His message wasn't just for people of his time or region -
                    it was meant for all of humanity. The Quran states:
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg my-6">
                    <p className="italic text-center text-xl mb-2">
                      &quot;And We have not sent you, [O Muhammad], except as a
                      mercy to the worlds.&quot;
                    </p>
                    <p className="text-right">— Quran 21:107</p>
                  </div>

                  <p className="text-lg leading-relaxed">
                    By recognizing Muhammad ﷺ as God's messenger, we open
                    ourselves to learning from his teachings and example -
                    guidance that has positively transformed countless lives
                    throughout history and continues to do so today.
                  </p>

                  <p className="text-lg leading-relaxed">
                    His life and character stand as a practical demonstration of
                    the Quran's teachings in action, showing us how to implement
                    divine guidance in our daily lives.
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
              onClick={() => (window.location.href = "/primary/quran")}
            >
              <ArrowLeft size={14} /> Revisit Quran
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
              onClick={() => (window.location.href = "/religion/islam")}
            >
              Explore Islam <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProphetMuhammad;
