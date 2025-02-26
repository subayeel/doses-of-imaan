"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Target,
  BookOpen,
  Shield,
  FileText,
  Globe,
  CheckCircle,
  Zap,
  AlignLeft,
  Check,
  Bookmark,
  Award,
  AlertCircle,
  Heart,
  Users,
  Star,
  Map,
  TrendingUp,
  Feather,
  MessageCircle,
  Calendar,
  Compass,
  Coffee,
  User,
  UserPlus,
  History,
  Layers,
  ChevronRight,
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

const UnderstandingIslam = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = [
    {
      id: "introduction",
      title: "What Islam Really Is",
      icon: Target,
      color: "bg-blue-100 dark:bg-blue-900",
      iconColor: "text-blue-500",
    },
    {
      id: "misconceptions",
      title: "Clearing Up Misconceptions",
      icon: AlertCircle,
      color: "bg-red-100 dark:bg-red-900",
      iconColor: "text-red-500",
    },
    {
      id: "five-pillars",
      title: "The Five Pillars",
      icon: Layers,
      color: "bg-green-100 dark:bg-green-900",
      iconColor: "text-green-500",
    },
    {
      id: "pure-monotheism",
      title: "Pure Monotheism",
      icon: Star,
      color: "bg-yellow-100 dark:bg-yellow-900",
      iconColor: "text-yellow-500",
    },
    {
      id: "core-beliefs",
      title: "Core Beliefs",
      icon: Shield,
      color: "bg-purple-100 dark:bg-purple-900",
      iconColor: "text-purple-500",
    },
    {
      id: "true-islam",
      title: "The True Face of Islam",
      icon: FileText,
      color: "bg-pink-100 dark:bg-pink-900",
      iconColor: "text-pink-500",
    },
    {
      id: "prophets",
      title: "The Line of Prophets",
      icon: Users,
      color: "bg-teal-100 dark:bg-teal-900",
      iconColor: "text-teal-500",
    },
    {
      id: "companions",
      title: "The Companions",
      icon: UserPlus,
      color: "bg-orange-100 dark:bg-orange-900",
      iconColor: "text-orange-500",
    },
    {
      id: "golden-period",
      title: "The Golden Age",
      icon: Award,
      color: "bg-amber-100 dark:bg-amber-900",
      iconColor: "text-amber-500",
    },
    {
      id: "caliphates",
      title: "Islamic Caliphates",
      icon: Compass,
      color: "bg-indigo-100 dark:bg-indigo-900",
      iconColor: "text-indigo-500",
    },
    {
      id: "fastest-growing",
      title: "Fastest Growing Religion",
      icon: TrendingUp,
      color: "bg-cyan-100 dark:bg-cyan-900",
      iconColor: "text-cyan-500",
    },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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

    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        sectionRefs.current[id] = element;
        observer.observe(element);
      }
    });

    return () => {
      contents.forEach(({ id }) => {
        const element = sectionRefs.current[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-emerald-800 dark:from-teal-700 dark:to-emerald-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="text-teal-200" size={32} />
            <h1 className="text-xl md:text-4xl font-bold">
              Understanding Islam: A Complete Guide
            </h1>
          </div>
          <p className="text-lg md:text-xl max-w-2xl text-teal-100">
            Discover the core teachings, history, and beauty of Islam through
            this comprehensive guide.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="hidden lg:block col-span-1">
            <div className="sticky top-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Table of Contents</CardTitle>
                  <CardDescription>
                    Explore the different sections of this guide
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
          <div className="lg:col-span-3 space-y-12">
            {/* Introduction Section */}
            <section id="introduction" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Target className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>What Islam Really Is</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    When we hear the word &quot;Islam&quot; today, it might
                    bring to mind all sorts of images and ideas. But what is
                    Islam really about at its core? The word itself gives us a
                    clue - it comes from the Arabic word &quot;salam,&quot;
                    which means peace. Islam means &quot;submission to God that
                    brings peace.&quot;
                  </p>
                  <p className="text-lg leading-relaxed">
                    Islam isn&apos;t just a set of rituals or rules - it&apos;s
                    a complete way of life centered around a relationship with
                    God. It&apos;s about finding your purpose, connecting with
                    your Creator, and living in a way that brings peace to
                    yourself and those around you.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Let&apos;s explore what Islam truly teaches, beyond
                    headlines and misconceptions, and discover why it continues
                    to resonate with billions of people worldwide as a source of
                    guidance, comfort, and meaning.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Misconceptions Section */}
            <section id="misconceptions" className="scroll-mt-20">
              <Card className="border-l-4 border-red-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                      <AlertCircle className="text-red-500" size={24} />
                    </div>
                    <CardTitle>Clearing Up Major Misconceptions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Before diving into what Islam is, let&apos;s address some
                    common misunderstandings that might be clouding our view:
                  </p>

                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      Common misconceptions about Islam:
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                          <AlertCircle className="text-red-500 flex-shrink-0 mt-1" />
                          <div>
                            <strong>
                              Misconception: &quot;Islam promotes violence&quot;
                            </strong>
                            <p className="mt-2">
                              Reality: Islam places enormous emphasis on peace,
                              compassion, and the sanctity of life. The Quran
                              states: &quot;Whoever kills a person... it is as
                              if he has killed all of mankind, and whoever saves
                              a life, it is as if he has saved all of
                              mankind.&quot; (5:32)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                          <AlertCircle className="text-red-500 flex-shrink-0 mt-1" />
                          <div>
                            <strong>
                              Misconception: &quot;Islam oppresses women&quot;
                            </strong>
                            <p className="mt-2">
                              Reality: Islam elevated women&apos;s status in the
                              7th century by giving them the right to education,
                              property ownership, inheritance, divorce, and
                              participation in public life. The current
                              situation in some Muslim-majority countries often
                              reflects cultural practices rather than Islamic
                              teachings.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                          <AlertCircle className="text-red-500 flex-shrink-0 mt-1" />
                          <div>
                            <strong>
                              Misconception: &quot;Islam is just for Arabs&quot;
                            </strong>
                            <p className="mt-2">
                              Reality: Only about 20% of Muslims worldwide are
                              Arabs. The largest Muslim populations are in
                              Indonesia, Pakistan, India, and Bangladesh. Islam
                              embraces all ethnicities and backgrounds - the
                              Quran states: &quot;We have made you into nations
                              and tribes so that you may know one another&quot;
                              (49:13).
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                          <AlertCircle className="text-red-500 flex-shrink-0 mt-1" />
                          <div>
                            <strong>
                              Misconception: &quot;Islam is rigid and
                              unchanging&quot;
                            </strong>
                            <p className="mt-2">
                              Reality: While core beliefs remain constant,
                              Islamic scholarship has a rich tradition of
                              interpretation and adaptation to different times
                              and places. The concept of &quot;ijtihad&quot;
                              (reasoned interpretation) allows for flexibility
                              in applying principles to new situations.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed">
                    It&apos;s important to distinguish between the teachings of
                    Islam and the actions of some individuals or cultural
                    practices that may contradict those teachings. Just as we
                    wouldn&apos;t judge any faith by its worst examples, we
                    should approach Islam by examining its actual principles and
                    teachings.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Five Pillars Section */}
            <section id="five-pillars" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Layers className="text-green-500" size={24} />
                    </div>
                    <CardTitle>
                      The Five Pillars: Islam&apos;s Foundation
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Like any building needs a strong foundation, Islam is built
                    on five core practices that shape a Muslim&apos;s life.
                    These &quot;Five Pillars&quot; provide the structure that
                    helps Muslims maintain their faith and live out its
                    principles:
                  </p>

                  <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      The Five Pillars of Islam:
                    </h3>
                    <div className="space-y-6">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="text-lg font-semibold flex items-center gap-2">
                          <MessageCircle className="text-blue-500" />
                          1. Shahada (Declaration of Faith)
                        </h4>
                        <p className="mt-2">
                          The testimony: &quot;There is no god but God, and
                          Muhammad is the messenger of God.&quot;
                        </p>
                        <p className="mt-2">
                          This simple statement is the foundation of Islamic
                          belief - acknowledging One God and accepting Muhammad
                          as His prophet. It&apos;s not just words though -
                          it&apos;s a commitment to live by these beliefs.
                        </p>
                      </div>

                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="text-lg font-semibold flex items-center gap-2">
                          <Compass className="text-purple-500" />
                          2. Salah (Prayer)
                        </h4>
                        <p className="mt-2">
                          Five daily prayers at dawn, noon, afternoon, sunset,
                          and evening.
                        </p>
                        <p className="mt-2">
                          Think of prayer as a regular check-in with God - it
                          helps Muslims stay mindful and connected throughout
                          their day. Each prayer takes just a few minutes and
                          involves physical postures that engage the body, mind,
                          and spirit. It&apos;s like pressing a reset button
                          five times a day!
                        </p>
                      </div>

                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="text-lg font-semibold flex items-center gap-2">
                          <Heart className="text-red-500" />
                          3. Zakat (Charitable Giving)
                        </h4>
                        <p className="mt-2">
                          Annual donation of 2.5% of one&apos;s savings to those
                          in need.
                        </p>
                        <p className="mt-2">
                          Zakat isn&apos;t just charity - it&apos;s a
                          recognition that wealth is a blessing from God that
                          comes with responsibility. By giving a portion to
                          those in need, Muslims purify their wealth and help
                          create a more equitable society where everyone&apos;s
                          basic needs are met.
                        </p>
                      </div>

                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="text-lg font-semibold flex items-center gap-2">
                          <Coffee className="text-yellow-500" />
                          4. Sawm (Fasting)
                        </h4>
                        <p className="mt-2">
                          Abstaining from food, drink, and other physical needs
                          from dawn to sunset during Ramadan (the 9th month of
                          the Islamic calendar).
                        </p>
                        <p className="mt-2">
                          Fasting teaches self-discipline and empathy for those
                          less fortunate. It&apos;s also a time of increased
                          prayer, charity, and community. Many Muslims describe
                          Ramadan as a spiritual &quot;tune-up&quot; that helps
                          them reset their priorities and strengthen their
                          connection with God.
                        </p>
                      </div>

                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="text-lg font-semibold flex items-center gap-2">
                          <Map className="text-teal-500" />
                          5. Hajj (Pilgrimage)
                        </h4>
                        <p className="mt-2">
                          Journey to Mecca once in a lifetime for those who are
                          physically and financially able.
                        </p>
                        <p className="mt-2">
                          Hajj is the ultimate spiritual journey where over 2
                          million Muslims from all walks of life gather in Mecca
                          wearing simple white garments that erase distinctions
                          of class, wealth, and status. It commemorates the
                          experiences of Prophet Abraham and his family and
                          represents the unity of believers before God.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed">
                    These pillars aren&apos;t meant to be burdensome rituals but
                    practices that enrich life and foster a continuous
                    connection with God. They balance personal spiritual growth
                    with social responsibility, helping Muslims develop both as
                    individuals and as contributing members of their
                    communities.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Pure Monotheism Section */}
            <section id="pure-monotheism" className="scroll-mt-20">
              <Card className="border-l-4 border-yellow-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                      <Star className="text-yellow-500" size={24} />
                    </div>
                    <CardTitle>Pure Monotheism: The Essence of Islam</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    At the very heart of Islam is a crystal-clear concept of God
                    - a pure monotheism that&apos;s often described as the most
                    uncompromising form of belief in One God.
                  </p>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg">
                    <p className="italic text-center text-xl mb-2">
                      &quot;Say: He is Allah, the One and Only; Allah, the
                      Eternal, Absolute; He begets not, nor is He begotten; And
                      there is none like unto Him.&quot;
                    </p>
                    <p className="text-right">— Quran 112:1-4</p>
                  </div>

                  <p className="text-lg leading-relaxed">
                    This concept of God, known in Arabic as &quot;Tawhid,&quot;
                    is what sets Islam apart from other religious traditions. It
                    means:
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      Key aspects of Islamic monotheism:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Absolute Oneness:</strong> God is One without
                          partners, associates, or equals. Nothing shares in
                          God&apos;s nature or attributes.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>No physical form:</strong> God is not material
                          and cannot be represented by images or idols.
                          &quot;Vision cannot grasp Him, but He grasps all
                          vision.&quot; (Quran 6:103)
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Direct relationship:</strong> Every person has
                          direct access to God without intermediaries.
                          &quot;When My servants ask you about Me, indeed I am
                          near. I respond to the call of the caller when they
                          call upon Me.&quot; (Quran 2:186)
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Creator not creation:</strong> God is entirely
                          separate from creation - not a person, not incarnated
                          in human form, and not part of the universe.
                        </div>
                      </li>
                    </ul>
                  </div>

                  <p className="text-lg leading-relaxed">
                    This understanding of God isn&apos;t abstract theology - it
                    shapes how Muslims approach life. When you believe that
                    there is only One Ultimate Reality worthy of worship, your
                    focus and priorities become clearer. You seek to please this
                    One God rather than trying to navigate competing loyalties.
                  </p>

                  <p className="text-lg leading-relaxed">
                    The Islamic concept of monotheism also means that nothing in
                    the creation - not wealth, career, desires, or even
                    religious figures - should be elevated to a position that
                    only God deserves. This is liberating because it frees a
                    person from being enslaved to worldly attachments or human
                    opinions.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Core Beliefs Section */}
            <section id="core-beliefs" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Shield className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>Core Beliefs: The Articles of Faith</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Beyond the Five Pillars that shape daily practice, Islam has
                    six fundamental beliefs that form its theological
                    foundation. These &quot;Articles of Faith&quot; provide the
                    worldview through which Muslims understand existence:
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      The Six Articles of Faith:
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Check className="text-green-500" />
                          1. Belief in One God (Allah)
                        </h4>
                        <p className="mt-2">
                          The absolute oneness of God (Tawhid) is the central
                          pillar of Islamic faith. God is the Creator,
                          Sustainer, and Master of the universe.
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Check className="text-green-500" />
                          2. Belief in Angels
                        </h4>
                        <p className="mt-2">
                          Muslims believe in beings created from light who carry
                          out God&apos;s commands and never disobey Him. Angels
                          like Gabriel delivered revelations to prophets, while
                          others record our deeds, etc.
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Check className="text-green-500" />
                          3. Belief in Divine Books
                        </h4>
                        <p className="mt-2">
                          Muslims believe God revealed books to various prophets
                          as guidance for humanity. These include the Torah (to
                          Moses), the Psalms (to David), the Gospel (to Jesus),
                          and the Quran (to Muhammad). Muslims believe the Quran
                          is the final revelation and the only one preserved in
                          its original form.
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Check className="text-green-500" />
                          4. Belief in Prophets
                        </h4>
                        <p className="mt-2">
                          Muslims believe God sent prophets to every nation
                          throughout history to guide people to truth. The Quran
                          mentions 25 prophets by name (including Adam, Noah,
                          Abraham, Moses, Jesus, and Muhammad) but states there
                          were many more. All prophets taught the same essential
                          message of monotheism.
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Check className="text-green-500" />
                          5. Belief in the Day of Judgment
                        </h4>
                        <p className="mt-2">
                          Muslims believe this life is a test and that one day
                          everyone will be resurrected and held accountable for
                          their actions. This belief in ultimate justice gives
                          purpose to life and encourages ethical behavior.
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Check className="text-green-500" />
                          6. Belief in Divine Decree
                        </h4>
                        <p className="mt-2">
                          Muslims believe God has knowledge of everything and
                          has decreed all things. However, humans have free will
                          and are responsible for their choices. This balanced
                          view acknowledges both God&apos;s sovereignty and
                          human accountability.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed">
                    These beliefs create a coherent worldview that answers the
                    big questions about existence: Where did we come from? Why
                    are we here? What happens after death? They provide Muslims
                    with a sense of purpose and a framework for understanding
                    life&apos;s challenges and opportunities.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* True Islam vs Political Image */}
            <section id="true-islam" className="scroll-mt-20">
              <Card className="border-l-4 border-pink-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900">
                      <FileText className="text-pink-500" size={24} />
                    </div>
                    <CardTitle>The True Face of Islam</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    There&apos;s often a significant gap between what Islam
                    actually teaches and how it&apos;s sometimes portrayed or
                    practiced. Let&apos;s distinguish between Islam&apos;s
                    authentic teachings and problematic interpretations or
                    cultural practices:
                  </p>

                  <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      Authentic Islam vs. Misconceptions:
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-500">
                            Authentic Islamic Teaching
                          </h4>
                          <p className="mt-2">
                            &quot;There is no compulsion in religion.&quot;
                            (Quran 2:256) - Faith must be freely chosen, not
                            forced.
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-semibold text-red-500">
                            Misconception/Misapplication
                          </h4>
                          <p className="mt-2">
                            Groups that try to impose religious practices
                            through coercion or intimidation.
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-500">
                            Authentic Islamic Teaching
                          </h4>
                          <p className="mt-2">
                            &quot;The believers, men and women, are protectors
                            of one another.&quot; (Quran 9:71) - Gender equity
                            and mutual support.
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-semibold text-red-500">
                            Misconception/Misapplication
                          </h4>
                          <p className="mt-2">
                            Cultural practices that deny women rights that Islam
                            itself guarantees them.
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-500">
                            Authentic Islamic Teaching
                          </h4>
                          <p className="mt-2">
                            &quot;If anyone killed a person... it would be as if
                            he killed all mankind.&quot; (Quran 5:32) - Sanctity
                            of human life.
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-semibold text-red-500">
                            Misconception/Misapplication
                          </h4>
                          <p className="mt-2">
                            Extremist groups that violate this principle and
                            misuse religious language to justify violence.
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-500">
                            Authentic Islamic Teaching
                          </h4>
                          <p className="mt-2">
                            &quot;The most excellent jihad is for a person to
                            strive against his own self.&quot; (Hadith) - Inner
                            spiritual struggle.
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-semibold text-red-500">
                            Misconception/Misapplication
                          </h4>
                          <p className="mt-2">
                            Misrepresentation of &quot;jihad&quot; primarily as
                            warfare rather than its broader meaning of striving
                            in God&apos;s path.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed">
                    The Prophet Muhammad emphasized character and compassion
                    throughout his life. When asked about his mission, he simply
                    stated: &quot;I have only been sent to perfect good moral
                    character.&quot; His example shows that true Islam is about
                    developing inner qualities like honesty, kindness, and
                    integrity.
                  </p>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Heart className="text-red-500" />
                      The Prophet&apos;s Example of Character:
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Mercy to enemies:</strong> When he returned to
                          Mecca victorious over those who had persecuted him for
                          years, he declared general amnesty saying, &quot;Go,
                          for you are free.&quot;
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Respect for diversity:</strong> The
                          Constitution of Medina, which he implemented,
                          protected the rights of non-Muslim communities and
                          established a pluralistic society.
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Kindness to all:</strong> He taught, &quot;He
                          who is not merciful to others, will not be treated
                          mercifully.&quot;
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Line of Prophets */}
            <section id="prophets" className="scroll-mt-20">
              <Card className="border-l-4 border-teal-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                      <Users className="text-teal-500" size={24} />
                    </div>
                    <CardTitle>
                      The Line of Prophets: One Connected Message
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    A unique aspect of Islamic belief is its view that God sent
                    prophets to all peoples throughout history. Muslims
                    don&apos;t see Islam as a new religion started in the 7th
                    century but as the continuation and completion of the same
                    message brought by all prophets.
                  </p>

                  <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      Major Prophets in the Islamic Tradition:
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4">
                        <User className="text-blue-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Adam</strong>: The first human and prophet.
                          Muslims believe he built the original structure of the
                          Kaaba (the cubic building in Mecca that Muslims face
                          during prayer).
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4">
                        <User className="text-green-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Noah (Nuh)</strong>: Called people to
                          monotheism for 950 years and built the ark when his
                          people rejected his message.
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4">
                        <User className="text-purple-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Abraham (Ibrahim)</strong>: The patriarch who
                          demonstrated perfect submission to God. He rebuilt the
                          Kaaba with his son Ishmael and established many of the
                          Hajj rituals.
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4">
                        <User className="text-red-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Moses (Musa)</strong>: Received the Torah and
                          led the Children of Israel out of bondage in Egypt. He
                          is mentioned more times in the Quran than any other
                          prophet.
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4">
                        <User className="text-yellow-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Jesus (Isa)</strong>: Born miraculously to the
                          Virgin Mary, he was a mighty messenger who performed
                          miracles by God&apos;s permission. Muslims honor him
                          greatly but believe he was a prophet, not divine.
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4">
                        <User className="text-teal-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Muhammad</strong> : The final prophet who
                          received the Quran and established the complete way of
                          life that is Islam. His life is the best-documented of
                          any religious founder in history, providing a clear
                          example for Muslims to follow in all aspects of life.
                        </div>
                      </div>
                    </div>

                    <p className="text-lg leading-relaxed">
                      This line of prophets shows that Islam isn&apos;t a new or
                      isolated message but part of a long tradition of divine
                      guidance. Each prophet came with the same core message of
                      monotheism, tailored to the needs of their time and
                      people. Muhammad, as the final prophet, brought a
                      universal message for all of humanity.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Companions of the Prophet Section */}
            <section id="companions" className="scroll-mt-20">
              <Card className="border-l-4 border-orange-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                      <Users className="text-orange-500" size={24} />
                    </div>
                    <CardTitle>
                      The Companions: Living Examples of Faith
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    The companions of Prophet Muhammad ﷺ (known as the Sahaba)
                    were the first generation of Muslims who lived and learned
                    directly from him. Their lives are a treasure trove of
                    inspiration, showing how ordinary people can achieve
                    extraordinary things through faith and dedication.
                  </p>

                  <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      Notable Companions and Their Contributions:
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4">
                        <UserPlus className="text-blue-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Abu Bakr</strong>: The first Caliph and
                          closest friend of Muhammad. Known for his unwavering
                          faith and leadership during challenging times.
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4">
                        <UserPlus className="text-green-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Umar ibn Al-Khattab</strong>: A strong leader
                          who expanded the Islamic state with justice and
                          fairness, earning the title &quot;Al-Farooq&quot; (the
                          one who distinguishes between right and wrong).
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4">
                        <UserPlus className="text-purple-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Uthman ibn Affan</strong>: Known for his
                          generosity and for compiling the Quran into a single
                          book. His calm and compassionate leadership left a
                          lasting impact.
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4">
                        <UserPlus className="text-red-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Ali ibn Abi Talib</strong>: Muhammad&apos;s
                          cousin and son-in-law, known for his deep knowledge
                          and bravery. His teachings on justice and wisdom
                          continue to inspire.
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4">
                        <UserPlus className="text-yellow-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Khadijah</strong>: The first wife of Muhammad
                          and the first believer in his message. Her support and
                          faith were crucial in the early days of Islam.
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4">
                        <UserPlus className="text-teal-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Aisha</strong>: A scholar and teacher, she
                          narrated many hadiths and played a key role in
                          educating the Muslim community after Muhammad&apos;s
                          passing.
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed">
                    These companions weren&apos;t perfect, but their dedication
                    to living out Islamic principles in their daily lives makes
                    them role models for Muslims today. Their stories remind us
                    that faith is about action, not just belief.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Golden Period of Islam Section */}
            <section id="golden-period" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <Award className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>
                      The Golden Age: When Islam Lit Up the World
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Did you know that for centuries, the Islamic world was at
                    the forefront of science, art, and culture? This period,
                    often called the &quot;Golden Age of Islam,&quot; shows how
                    faith and reason can work together to create a thriving
                    civilization.
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      Highlights of the Islamic Golden Age:
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4">
                        <BookOpen className="text-blue-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>House of Wisdom</strong>: A major intellectual
                          center in Baghdad where scholars translated and
                          preserved works from Greek, Persian, and Indian
                          traditions.
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4">
                        <Zap className="text-green-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Scientific Advancements</strong>: Muslim
                          scientists made groundbreaking discoveries in fields
                          like algebra, optics, and medicine. Figures like
                          Al-Khwarizmi (the father of algebra) and Ibn Sina
                          (Avicenna) revolutionized their fields.
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4">
                        <Feather className="text-purple-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Art and Architecture</strong>: From the
                          intricate designs of the Alhambra to the stunning
                          calligraphy in mosques, Islamic art emphasized beauty
                          and spirituality.
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4">
                        <Globe className="text-red-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Global Trade</strong>: Muslim merchants
                          connected the world through trade routes, spreading
                          goods, ideas, and culture from China to Europe.
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed">
                    This era wasn&apos;t just about achievements; it was about a
                    mindset. Muslims saw learning as a form of worship and
                    believed that understanding the world brought them closer to
                    God. It&apos;s a legacy that continues to inspire Muslims to
                    seek knowledge and contribute to humanity.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Islamic Caliphates Section */}
            <section id="caliphates" className="scroll-mt-20">
              <Card className="border-l-4 border-indigo-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Compass className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>
                      Islamic Caliphates: Unity and Diversity
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    After the Prophet Muhammad&apos;s passing, the Muslim
                    community was led by a series of caliphates. These
                    weren&apos;t just political entities but also centers of
                    learning, culture, and governance that shaped the Islamic
                    world.
                  </p>

                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      Major Islamic Caliphates:
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4">
                        <Calendar className="text-blue-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Rashidun Caliphate</strong>: The first four
                          caliphs (Abu Bakr, Umar, Uthman, and Ali) who led with
                          justice and humility, setting the standard for Islamic
                          leadership.
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4">
                        <Map className="text-green-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Umayyad Caliphate</strong>: Expanded the
                          Islamic empire from Spain to India, blending Arab and
                          local cultures.
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4">
                        <Bookmark className="text-purple-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Abbasid Caliphate</strong>: Known as the
                          Golden Age, this period saw incredible advancements in
                          science, art, and philosophy.
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4">
                        <History className="text-red-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Ottoman Caliphate</strong>: Lasting over 600
                          years, the Ottomans created a vast empire that
                          connected three continents and preserved Islamic
                          traditions.
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed">
                    These caliphates weren&apos;t perfect, but they show how
                    Islam can adapt to different times and places while
                    maintaining its core values. They remind us that unity in
                    faith doesn&apos;t mean uniformity in culture or governance.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Fastest Growing Religion Section */}
            <section id="fastest-growing" className="scroll-mt-20">
              <Card className="border-l-4 border-cyan-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900">
                      <TrendingUp className="text-cyan-500" size={24} />
                    </div>
                    <CardTitle>Islam: The Fastest Growing Religion</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Did you know that Islam is the fastest-growing religion in
                    the world? This isn&apos;t just about numbers; it&apos;s
                    about people finding meaning, purpose, and peace in its
                    teachings.
                  </p>

                  <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      Why Islam Resonates:
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4">
                        <Heart className="text-red-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Clear Guidance</strong>: In a world full of
                          confusion, Islam offers a straightforward path to
                          living a meaningful life.
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4">
                        <Users className="text-green-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Strong Community</strong>: The sense of
                          belonging and brotherhood/sisterhood in Islam attracts
                          many to its fold.
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4">
                        <Star className="text-yellow-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Spiritual Fulfillment</strong>: The balance
                          between worship, work, and relationships provides a
                          holistic approach to life.
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4">
                        <AlignLeft className="text-blue-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Logical Faith</strong>: Islam encourages
                          questioning and reasoning, making it appealing to
                          those seeking intellectual satisfaction.
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed">
                    Whether through personal reflection, the example of Muslim
                    friends, or simply reading the Quran, millions are
                    discovering the beauty of Islam every year. It&apos;s a
                    testament to the timeless relevance of its message.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Conclusion Section */}
            <section id="conclusion" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <CheckCircle className="text-green-500" size={24} />
                    </div>
                    <CardTitle>
                      Conclusion: Discovering Islam for Yourself
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    We&apos;ve covered a lot, but this is just the beginning.
                    Islam is a vast ocean of wisdom, and the best way to
                    understand it is to dive in yourself. Whether you&apos;re
                    curious about its teachings, inspired by its history, or
                    seeking answers to life&apos;s big questions, Islam has
                    something to offer.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Remember, Islam isn&apos;t about blind faith—it&apos;s about
                    seeking truth with an open heart and mind. As the Quran
                    says: &quot;So have they not traveled through the earth and
                    have hearts by which to reason and ears by which to
                    hear?&quot; (22:46)
                  </p>
                  <p className="text-lg leading-relaxed">
                    If you&apos;re interested in learning more, start by reading
                    the Quran, visiting a local mosque, or talking to Muslims in
                    your community. You might just find the peace and purpose
                    you&apos;ve been looking for.
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

export default UnderstandingIslam;
