/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Check, ArrowUp, ArrowRight, ArrowLeft, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UnderstandingIslamProps {
  isDocument: boolean;
}

export const UnderstandingIslam = ({
  isDocument = false,
}: UnderstandingIslamProps) => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contents = useMemo(() => {
    return [
      {
        id: "introduction",
        title: "What Islam Really Is",
      },
      {
        id: "shia",
        title: "Shia & Sunni",
      },
      {
        id: "islamic-madhhabs",
        title: "Madhabs",
      },
      {
        id: "misconceptions",
        title: "Clearing Up Misconceptions",
      },
      {
        id: "five-pillars",
        title: "The Five Pillars",
      },
      {
        id: "pure-monotheism",
        title: "Pure Monotheism",
      },
      {
        id: "core-beliefs",
        title: "Core Beliefs",
      },
      {
        id: "true-islam",
        title: "The True Face of Islam",
      },
      {
        id: "prophets",
        title: "The Line of Prophets",
      },
      {
        id: "companions",
        title: "The Companions",
      },
      {
        id: "golden-period",
        title: "The Golden Age",
      },
      {
        id: "caliphates",
        title: "Islamic Caliphates",
      },
      {
        id: "fastest-growing",
        title: "Fastest Growing Religion",
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

    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      contents.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [contents]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Clean Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl  font-bold text-gray-900 dark:text-gray-100">
              Understanding Islam: A Complete Guide
            </h1>
            {!isDocument && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 font-light">
            Discover the core teachings, history, and beauty of Islam through
            this comprehensive guide
          </p>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {!isDocument && isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black/20"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl p-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Contents</h2>
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <nav className="space-y-3 max-h-[80vh] overflow-y-auto">
              {contents.map(({ id, title }) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                    activeSection === id
                      ? "bg-gray-100 dark:bg-gray-800 font-medium"
                      : "hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {title}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {/* Introduction Section */}
          <section id="introduction" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              What Islam Really Is
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              If you refer to Arabic language dictionaries, you will find that
              the meaning of the word Islam is: <strong>submission</strong>,{" "}
              <strong>humbling oneself</strong>, and{" "}
              <strong>obeying commands</strong> and{" "}
              <strong>heeding prohibitions without objection</strong>, sincerely
              worshipping Allah alone, believing what He tells us and having
              faith in Him.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              All the religions on earth are called by various names, either the
              name of a specific man or a specific nation. So Christianity takes
              its name from Christ; Buddhism takes its name from its founder,
              the Buddha; the Zoroastrians became well known by this name
              because their founder and standard-bearer was Zoroaster.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Similarly, Judaism took its name from a tribe known as Yehudah
              (Judah), so it became known as Judaism. And so on.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-8">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Except for Islam; for it is not attributed to any specific man
                or to any specific nation, rather its name refers to the meaning
                of the word Islam. What this name indicates is that the
                establishment and founding of this religion was not the work of
                one particular man and that it is not only for one particular
                nation to the exclusion of all others. Rather its aim is to give
                the attribute implied by the word Islam to all the peoples of
                the earth.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              So everyone who acquires this attribute, whether he is from the
              past or the present, is a Muslim, and everyone who acquires this
              attribute in the future will also be a Muslim. Let's explore what
              Islam truly teaches, beyond headlines and misconceptions, and
              discover why it continues to resonate with billions of people
              worldwide as a source of guidance, comfort, and meaning.
            </p>
          </section>

          {/* Sunni & Shia */}
          <section id="shia" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Why there are Sunnis and Shias?
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              If a child asks about the Shi'ah, they can be informed in a simple
              manner that these are people who commit wrong actions and slander
              the noble companions and wives of the Prophet (peace and blessings
              be upon him). Since these companions were the best of people after
              the Prophets, we do not approve of such behavior.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              If the child has seen Shi'ah practices, such as touching graves or
              celebrating 'Ashoora', they should be taught that these acts are
              not permissible in Islam. We worship Allah alone, without
              associating partners, and do not prostrate to graves or harm
              ourselves and others. This will help the child understand that
              such actions are deviations from the correct path.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              To ensure clarity, the child should be reminded that we are Sunnis
              who follow the Sunnah of the Prophet (peace and blessings be upon
              him) without introducing innovations into our religion. If they
              watch any Shi'ah practices, it is important to accompany this with
              clear warnings and explanations.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              For further understanding, one can refer to trustworthy sources
              that explain the deviations of the Shi'ah and why their beliefs
              and practices are misguided.
            </p>
          </section>

          {/* Madhabs */}
          <section id="islamic-madhhabs" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Understanding Islamic Schools of Thought (Madhhabs)
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Throughout Islamic history, different approaches to understanding
              Islamic law developed, resulting in schools of thought known as
              "madhhabs." These schools aren't different religions but different
              ways of interpreting the same sources:
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Key Points About Islamic Madhhabs:
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    1. The Foundation: Quran and Sunnah
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    All Muslims follow the Quran and authentic teachings of
                    Prophet Muhammad (Sunnah).
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Differences between scholars emerged based on which
                    teachings they had access to and how they understood them.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    2. The Famous Four Schools
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    While many schools of thought existed, four became most
                    widely known: Hanafi, Maliki, Shafi'i, and Hanbali.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    These are named after their founding scholars who were
                    respected for their knowledge and devotion to Islam.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    3. Why Differences Exist
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                      <span>
                        Scholars had access to different collections of hadith
                        (Prophet's sayings)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                      <span>
                        They sometimes understood the same texts differently
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                      <span>
                        They used different methods to determine which evidence
                        was strongest
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    4. Following a Madhhab
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    It's acceptable for Muslims to follow a particular school of
                    thought.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    However, when clear evidence from Quran or Sunnah shows
                    another view is correct, that should be followed instead.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    The imams themselves advised their followers: "If you find
                    authentic evidence contradicting my opinion, follow the
                    evidence."
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              People follow different madhhabs based on their background,
              education, and local community. These differences in understanding
              are considered a mercy in Islam, providing flexibility while
              maintaining core principles. What's most important is following
              the Quran and authentic Sunnah, regardless of which scholarly
              method helps you understand them.
            </p>
          </section>

          {/* Misconceptions Section */}
          <section id="misconceptions" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Clearing Up Major Misconceptions
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Before diving into what Islam is, let's address some common
              misunderstandings that might be clouding our view:
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Common misconceptions about Islam:
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    Misconception: Islam promotes violence
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Reality:</strong> Islam places enormous emphasis on
                    peace, compassion, and the sanctity of life. The Quran
                    states: "Whoever kills a person... it is as if he has killed
                    all of mankind, and whoever saves a life, it is as if he has
                    saved all of mankind." (5:32)
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    Misconception: Islam oppresses women
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Reality:</strong> Islam elevated women's status in
                    the 7th century by giving them the right to education,
                    property ownership, inheritance, divorce, and participation
                    in public life. The current situation in some
                    Muslim-majority countries often reflects cultural practices
                    rather than Islamic teachings.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    Misconception: Islam is just for Arabs
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Reality:</strong> Only about 20% of Muslims
                    worldwide are Arabs. The largest Muslim populations are in
                    Indonesia, Pakistan, India, and Bangladesh. Islam embraces
                    all ethnicities and backgrounds - the Quran states: "We have
                    made you into nations and tribes so that you may know one
                    another" (49:13).
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    Misconception: Islam is rigid and unchanging
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Reality:</strong> While core beliefs remain
                    constant, Islamic scholarship has a rich tradition of
                    interpretation and adaptation to different times and places.
                    The concept of ijtihad (reasoned interpretation) allows for
                    flexibility in applying principles to new situations.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              It's important to distinguish between the teachings of Islam and
              the actions of some individuals or cultural practices that may
              contradict those teachings. Just as we wouldn't judge any faith by
              its worst examples, we should approach Islam by examining its
              actual principles and teachings.
            </p>
          </section>

          {/* Five Pillars Section */}
          <section id="five-pillars" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              The Five Pillars: Islam's Foundation
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Like any building needs a strong foundation, Islam is built on
              five core practices that shape a Muslim's life. These Five Pillars
              provide the structure that helps Muslims maintain their faith and
              live out its principles:
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                The Five Pillars of Islam:
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    1. Shahada (Declaration of Faith)
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    The testimony: There is no god but God, and Muhammad is the
                    messenger of God.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    This simple statement is the foundation of Islamic belief -
                    acknowledging One God and accepting Muhammad as His prophet.
                    It's not just words though - it's a commitment to live by
                    these beliefs.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    2. Salah (Prayer)
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Five daily prayers at dawn, noon, afternoon, sunset, and
                    evening.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Think of prayer as a regular check-in with God - it helps
                    Muslims stay mindful and connected throughout their day.
                    Each prayer takes just a few minutes and involves physical
                    postures that engage the body, mind, and spirit. It's like
                    pressing a reset button five times a day!
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    3. Zakat (Charitable Giving)
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Annual donation of 2.5% of one's savings to those in need.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Zakat isn't just charity - it's a recognition that wealth is
                    a blessing from God that comes with responsibility. By
                    giving a portion to those in need, Muslims purify their
                    wealth and help create a more equitable society where
                    everyone's basic needs are met.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    4. Sawm (Fasting)
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Abstaining from food, drink, and other physical needs from
                    dawn to sunset during Ramadan (the 9th month of the Islamic
                    calendar).
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Fasting teaches self-discipline and empathy for those less
                    fortunate. It's also a time of increased prayer, charity,
                    and community. Many Muslims describe Ramadan as a spiritual
                    tune-up that helps them reset their priorities and
                    strengthen their connection with God.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    5. Hajj (Pilgrimage)
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Journey to Mecca once in a lifetime for those who are
                    physically and financially able.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Hajj is the ultimate spiritual journey where over 2 million
                    Muslims from all walks of life gather in Mecca wearing
                    simple white garments that erase distinctions of class,
                    wealth, and status. It commemorates the experiences of
                    Prophet Abraham and his family and represents the unity of
                    believers before God.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              These pillars aren't meant to be burdensome rituals but practices
              that enrich life and foster a continuous connection with God. They
              balance personal spiritual growth with social responsibility,
              helping Muslims develop both as individuals and as contributing
              members of their communities.
            </p>
          </section>

          {/* Pure Monotheism Section */}
          <section id="pure-monotheism" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Pure Monotheism: The Essence of Islam
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              At the very heart of Islam is a crystal-clear concept of God - a
              pure monotheism that's often described as the most uncompromising
              form of belief in One God.
            </p>

            <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-6 my-8">
              <p className="text-lg text-center italic text-gray-600 dark:text-gray-400 mb-2">
                Say: He is Allah, the One and Only; Allah, the Eternal,
                Absolute; He begets not, nor is He begotten; And there is none
                like unto Him.
              </p>
              <p className="text-right text-gray-500 dark:text-gray-500">
                — Quran 112:1-4
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Key aspects of Islamic monotheism:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong>Absolute Oneness:</strong> God is One without
                    partners, associates, or equals. Nothing shares in God's
                    nature or attributes.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong>No physical form:</strong> God is not material and
                    cannot be represented by images or idols. "Vision cannot
                    grasp Him, but He grasps all vision." (Quran 6:103)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong>Direct relationship:</strong> Every person has
                    direct access to God without intermediaries. "When My
                    servants ask you about Me, indeed I am near. I respond to
                    the call of the caller when they call upon Me." (Quran
                    2:186)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong>Creator not creation:</strong> God is entirely
                    separate from creation - not a person, not incarnated in
                    human form, and not part of the universe.
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              This understanding of God isn't abstract theology - it shapes how
              Muslims approach life. When you believe that there is only One
              Ultimate Reality worthy of worship, your focus and priorities
              become clearer. The Islamic concept of monotheism also means that
              nothing in the creation - not wealth, career, desires, or even
              religious figures - should be elevated to a position that only God
              deserves.
            </p>
          </section>

          {/* Core Beliefs Section */}
          <section id="core-beliefs" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Core Beliefs: The Articles of Faith
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Beyond the Five Pillars that shape daily practice, Islam has six
              fundamental beliefs that form its theological foundation. These
              Articles of Faith provide the worldview through which Muslims
              understand existence:
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                The Six Articles of Faith:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong>1. Belief in One God (Allah):</strong> The absolute
                    oneness of God (Tawhid) is the central pillar of Islamic
                    faith. God is the Creator, Sustainer, and Master of the
                    universe.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong>2. Belief in Angels:</strong> Muslims believe in
                    beings created from light who carry out God's commands and
                    never disobey Him.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong>3. Belief in Divine Books:</strong> Muslims believe
                    God revealed books to various prophets as guidance for
                    humanity, with the Quran being the final revelation.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong>4. Belief in Prophets:</strong> Muslims believe God
                    sent prophets to every nation throughout history to guide
                    people to truth.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong>5. Belief in the Day of Judgment:</strong> Muslims
                    believe this life is a test and that one day everyone will
                    be resurrected and held accountable.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong>6. Belief in Divine Decree:</strong> Muslims believe
                    God has knowledge of everything while humans have free will
                    and are responsible for their choices.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fastest Growing Religion Section */}
          <section id="fastest-growing" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Islam: The Fastest Growing Religion
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Did you know that Islam is the fastest-growing religion in the
              world? This isn't just about numbers; it's about people finding
              meaning, purpose, and peace in its teachings.
            </p>

            <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Why Islam Resonates:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></span>
                  <div>
                    <strong>Clear Guidance:</strong> In a world full of
                    confusion, Islam offers a straightforward path to living a
                    meaningful life.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></span>
                  <div>
                    <strong>Strong Community:</strong> The sense of belonging
                    and brotherhood/sisterhood in Islam attracts many to its
                    fold.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></span>
                  <div>
                    <strong>Spiritual Fulfillment:</strong> The balance between
                    worship, work, and relationships provides a holistic
                    approach to life.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></span>
                  <div>
                    <strong>Logical Faith:</strong> Islam encourages questioning
                    and reasoning, making it appealing to those seeking
                    intellectual satisfaction.
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Whether through personal reflection, the example of Muslim
              friends, or simply reading the Quran, millions are discovering the
              beauty of Islam every year. It's a testament to the timeless
              relevance of its message.
            </p>
          </section>

          {/* Conclusion Section */}
          <section id="conclusion" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Discovering Islam for Yourself
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              We've covered a lot, but this is just the beginning. Islam is a
              vast ocean of wisdom, and the best way to understand it is to dive
              in yourself. Whether you're curious about its teachings, inspired
              by its history, or seeking answers to life's big questions, Islam
              has something to offer.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Remember, Islam isn't about blind faith—it's about seeking truth
              with an open heart and mind. As the Quran says: "So have they not
              traveled through the earth and have hearts by which to reason and
              ears by which to hear?" (22:46)
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              If you're interested in learning more, start by reading the Quran,
              visiting a local mosque, or talking to Muslims in your community.
              You might just find the peace and purpose you've been looking for.
            </p>

            {!isDocument && (
              <div className="flex justify-center mt-8">
                <Button
                  onClick={() => (window.location.href = "/religion/imaan")}
                  className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200"
                >
                  Learn about Imaan <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            )}
          </section>
        </article>
      </main>

      {/* Clean Footer */}
      {!isDocument && (
        <footer className="border-t border-gray-200 dark:border-gray-700 py-12 mt-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-xl  font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Foundation of Islam
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              O Allah, guide our hearts to the truth of Islam, grant us
              understanding of Your deen, and make us steadfast upon the path
              that pleases You.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <ArrowUp size={16} className="mr-2" /> Back to Top
              </Button>
              <Button
                onClick={() => (window.location.href = "/primary/god")}
                className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                <ArrowLeft size={16} className="mr-2" /> Revisit Primary Dose
              </Button>
              <Button
                onClick={() => (window.location.href = "/religion/imaan")}
                className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                Learn about Imaan <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};
