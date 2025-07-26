/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Check, ArrowUp, ArrowRight, ArrowLeft, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SweetnessOfImanProps {
  isDocument: boolean;
}

export const SweetnessOfIman = ({
  isDocument = false,
}: SweetnessOfImanProps) => {
  const [activeSection, setActiveSection] = useState("intro");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "What is Iman?",
      },
      {
        id: "iman-fitan",
        title: "Iman in Tough Times",
      },
      {
        id: "why-people-leave",
        title: "Why Faith Fades",
      },
      {
        id: "sweetness-iman",
        title: "The Sweet Taste of Faith",
      },
      {
        id: "sins-barrier",
        title: "Barriers to Sweetness",
      },
      {
        id: "how-to-taste",
        title: "Finding the Sweetness",
      },
      {
        id: "leads-to",
        title: "The Beautiful Journey",
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
      threshold: 0.3,
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
              The Sweetness of Iman
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
            Discovering the profound joy and fulfillment that comes from true
            faith
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
            <nav className="space-y-3">
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
          {/* Introduction */}
          <section id="intro" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              What is Iman?
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Imaan is the second level of the Religion of Allah. It means firm
              belief and consists of three basic aspects: conviction with the
              heart, proclamation with the tongue, and action with the limbs.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                The Six Pillars of Faith
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Iman means believing in:
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    <strong>Allah:</strong> His existence, oneness of His
                    Lordship, worship, and uniqueness of His names and
                    attributes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    <strong>His Angels:</strong> Created from light, who never
                    disobey Allah
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    <strong>His Books:</strong> All revelations, especially the
                    four mentioned in the Quran
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    <strong>His Messengers:</strong> Chosen from mankind to call
                    to Allah
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    <strong>The Last Day:</strong> Resurrection, judgment,
                    rewards, and punishments
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    <strong>Divine Decree:</strong> The good and ill of fate,
                    predetermined by Allah's knowledge and will
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                The Three Dimensions of Faith
              </h3>
              <ol className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white text-sm w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    1
                  </span>
                  <span>
                    <strong>Conviction with the heart:</strong> Firm belief and
                    certainty without doubt
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white text-sm w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    2
                  </span>
                  <span>
                    <strong>Proclamation with the tongue:</strong> Verbally
                    declaring one's faith
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white text-sm w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    3
                  </span>
                  <span>
                    <strong>Action with the limbs:</strong> Practicing faith
                    through deeds and worship
                  </span>
                </li>
              </ol>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Imaan increases with obedience and decreases with disobedience.
              The Prophet Muhammad ﷺ said faith has over 60 branches, including
              both your heart's belief and your physical actions. The core of
              faith is believing there's no god worthy of worship except Allah.
            </p>
          </section>

          {/* Iman in Times of Fitan */}
          <section id="iman-fitan" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Iman in Tough Times
            </h2>

            <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-6 my-8">
              <p className="text-lg text-gray-600 dark:text-gray-400 italic">
                "Faith wears out in the heart just like clothes wear out - so
                renew your faith."
                <span className="block text-sm font-normal mt-1">
                  — Prophet Muhammad ﷺ
                </span>
              </p>
            </div>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Faith is like a tree that needs constant care. We need to water
              our faith with knowledge, good deeds, and remembrance of Allah. We
              also need to protect it from "pests" - sins, desires, and doubts.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  Care for Your Faith
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We need to water our faith with knowledge, good deeds, and
                  remembrance of Allah. We also need to protect it from "pests"
                  - sins, desires, and doubts.
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  Greater Rewards
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The Prophet ﷺ said those who do good deeds during difficult
                  times will get the reward of fifty people! Staying strong
                  during tests brings amazing rewards.
                </p>
              </div>
            </div>
          </section>

          {/* Why People Leave Islam */}
          <section id="why-people-leave" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Why Faith Fades
            </h2>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                The Root Cause
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                The main reason people leave Islam is that the essence of faith
                never truly entered their hearts to begin with.
              </p>
            </div>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Once faith truly merges with your heart, you'll never want to give
              it up. Faith has a sweetness - once you taste it, nothing else
              compares! But if you've never tasted this sweetness, you won't
              realize what you're missing.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Many people practice Islam only through external actions without
              understanding the inner beauty. Their worship becomes just rituals
              without a real connection to Allah.
            </p>
          </section>

          {/* What is Sweetness of Iman */}
          <section id="sweetness-iman" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              The Sweet Taste of Faith
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              One of Allah's greatest gifts is making faith beloved to us,
              adorning our hearts with its beauty, and letting us taste its
              sweetness.
            </p>

            <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-6 my-8">
              <p className="text-lg text-gray-600 dark:text-gray-400 italic">
                "Faith has a flavor and sweetness that is tasted by the heart
                just like the sweetness of food and drink is tasted by the
                mouth. Faith is food for the heart, just as food and drink
                nourish the body."
                <span className="block text-sm font-normal mt-1">
                  — Ibn Rajab
                </span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  Finding Joy in Good
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The sweetness of faith means finding joy in doing good deeds
                  and even in facing difficulties for Allah's sake.
                </p>
              </div>

              <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  Experience It Yourself
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  You can read about this sweetness all you want, but you won't
                  truly understand until you experience it!
                </p>
              </div>
            </div>
          </section>

          {/* Sins: A Barrier */}
          <section id="sins-barrier" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Barriers to Sweetness
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Think of it like being sick. When you're feeling nauseous, even
              the most delicious meal doesn't appeal to you. Similarly, when our
              hearts are "sick" from sins and desires, we can't enjoy the
              sweetness of faith.
            </p>

            <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-6 my-8">
              <p className="text-lg text-gray-600 dark:text-gray-400 italic">
                "If you want to find the sweetness of worship, put an iron wall
                between yourself and worldly desires."
                <span className="block text-sm font-normal mt-1">
                  — Malik ibn Dinar
                </span>
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-8">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Sins prevent us from tasting the sweetness of faith. The more
                pleasure we find in sinning, the less joy we find in worshipping
                Allah.
              </p>
            </div>
          </section>

          {/* How to Taste Sweetness */}
          <section id="how-to-taste" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Finding the Sweetness
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              The sweetness of faith comes from worshipping Allah completely -
              combining outer actions with inner feelings. Here's how to taste
              this sweetness, according to the Prophet Muhammad ﷺ:
            </p>

            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Seven Ways to Taste the Sweetness of Faith:
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    1. Love Allah and His Messenger ﷺ
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Make Allah and His Messenger more beloved to you than
                    anything else in this world.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    2. Pure Love for Others
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Love others purely for Allah's sake, not for personal gain
                    or worldly benefits.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    3. Strong Conviction
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Have such strong faith that you'd rather face hardship than
                    abandon your belief.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    4. Purify Your Soul
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Live with the awareness that Allah is with you wherever you
                    are.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    5. Joyful Giving
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Give charity with a happy heart rather than reluctantly or
                    for show.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    6. Accept Allah's Decree
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Truly believe that what happened couldn't have missed you,
                    and what missed you couldn't have happened.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    7. Be Pleased with Allah
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Be happy with Allah as your Lord, Islam as your way of life,
                    and Muhammad ﷺ as your Prophet. When you're truly content
                    with Allah as your Lord, you accept how He manages your
                    life, including the tests He gives you and the rules He
                    sets.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What it Leads To */}
          <section id="leads-to" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              The Beautiful Journey
            </h2>

            <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-6 my-8">
              <p className="text-lg text-gray-600 dark:text-gray-400 italic">
                "If kings knew the spiritual happiness we experience, they would
                fight us for it with their swords."
                <span className="block text-sm font-normal mt-1">
                  — Ibrahim ibn Adham
                </span>
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                What Happens When You Taste the Sweetness:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong>Life Changes:</strong> Experiencing the sweetness of
                    faith transforms everything! Your whole life changes and
                    you'll always crave that feeling.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong>Natural Protection:</strong> This sweetness makes
                    you naturally dislike sins and disbelief, creating a shield
                    for your heart.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong>Focus Shift:</strong> When you taste the sweetness
                    of faith, the world is no longer your main goal. Your eyes
                    are fixed on what lasts forever.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 my-8 text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 italic">
                Let's ask Allah with the words of the Prophet ﷺ:
                <br />
                "O Allah, adorn us with the beauty of faith and make us those
                who guide others and are guided themselves."
              </p>
            </div>

            {!isDocument && (
              <div className="flex justify-center mt-8">
                <Button
                  onClick={() => (window.location.href = "/religion/ihsaan")}
                  className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200"
                >
                  Achieve Ihsaan <ArrowRight size={16} className="ml-2" />
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
              Strength of Imaan
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              O Allah, strengthen our Imaan, fill our hearts with certainty, and
              grant us the ability to worship You with sincerity and devotion.
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
                onClick={() => (window.location.href = "/religion/islam")}
                className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                <ArrowLeft size={16} className="mr-2" /> Learn about Islam
              </Button>
              <Button
                onClick={() => (window.location.href = "/religion/ihsaan")}
                className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                Achieve Ihsaan <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};
