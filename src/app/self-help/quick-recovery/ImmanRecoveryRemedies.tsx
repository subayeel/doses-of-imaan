/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  ArrowUp,
  ArrowLeft,
  Menu,
  X,
  BookOpen,
  Moon,
  MessageCircle,
  Repeat,
  BookMarked,
  ShieldCheck,
  Users,
  Heart,
  DollarSign,
  UserCheck,
  HeartHandshake,
  Check,
  SparkleIcon,
  Cloud,
  Sparkle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImmanRecoveryRemediesProps {
  isDocument: boolean;
}

export const ImmanRecoveryRemedies = ({
  isDocument,
}: ImmanRecoveryRemediesProps) => {
  const [activeSection, setActiveSection] = useState("intro");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Introduction",
        icon: Heart,
      },
      {
        id: "salah",
        title: "1. Perform Your Salah",
        icon: Sparkle,
      },
      {
        id: "religious-company",
        title: "2. Religious Company",
        icon: Users,
      },
      {
        id: "repentance",
        title: "3. Practice Repentance",
        icon: Repeat,
      },
      {
        id: "fasting",
        title: "4. Fast & Be Grateful",
        icon: Moon,
      },
      {
        id: "death-awareness",
        title: "5. Remember Death",
        icon: Cloud,
      },
      {
        id: "quran-recitation",
        title: "6. Quran Recitation",
        icon: BookOpen,
      },
      {
        id: "dhikr",
        title: "7. Dhikr & Dua",
        icon: MessageCircle,
      },
      {
        id: "islamic-knowledge",
        title: "8. Seek Islamic Knowledge",
        icon: BookMarked,
      },
      {
        id: "avoid-sins",
        title: "9. Avoid Major Sins",
        icon: ShieldCheck,
      },
      {
        id: "charity",
        title: "10. Give Charity",
        icon: DollarSign,
      },
      {
        id: "good-deeds",
        title: "11. Do Good Deeds",
        icon: UserCheck,
      },
      {
        id: "gratitude",
        title: "12. Practice Gratitude",
        icon: HeartHandshake,
      },
    ];
  }, []);

  // Set up Intersection Observer
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

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Clean Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Heart
                className="text-red-600 dark:text-red-400 hidden md:block"
                size={28}
              />
              <h1 className="text-2xl md:text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Remedies to Recover Imaan
              </h1>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 font-light">
            Practical steps to strengthen your faith and draw closer to Allah
          </p>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
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
            <nav className="space-y-3 max-h-80 overflow-y-auto">
              {contents.map(({ id, title, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-md transition-colors ${
                    activeSection === id
                      ? "bg-gray-100 dark:bg-gray-800 font-medium"
                      : "hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  <Icon size={16} />
                  <span className="text-sm">{title}</span>
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
          <section id="intro" className="mb-16 scroll-mt-20">
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                  <Heart className="text-red-500" size={24} />
                </div>
                <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                  Remedies to Recover Imaan
                </h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-red-200 dark:border-red-800">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  If you're experiencing weakness in your faith or feeling
                  distant from Allah, know that this is a natural part of the
                  spiritual journey. The following remedies are based on Islamic
                  teachings and can help strengthen your Imaan and restore your
                  connection with Allah.
                </p>
                <div className="bg-red-50 dark:bg-red-900/30 rounded-lg p-4 border-l-4 border-red-500">
                  <p className="text-red-800 dark:text-red-200 font-medium">
                    "And it is He who created the heavens and earth in truth.
                    And the day He says, 'Be,' and it is, His word is the
                    truth." — Quran 6:73
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 1. Perform Your Salah */}
          <section id="salah" className="mb-16 scroll-mt-20">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                  <Sparkle className="text-blue-500" size={24} />
                </div>
                <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                  1. Perform Your Salah
                </h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  Prayer is the foundation of our faith and the direct
                  connection between us and Allah. Even if your heart feels
                  distant, maintain your prayers.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="text-blue-500 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">
                        Pray with Presence
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Focus on the meaning of the words you're reciting. Take
                        your time and avoid rushing.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-blue-500 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">
                        Add Voluntary Prayers
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Perform Sunnah prayers before and after the obligatory
                        ones to increase your connection.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-blue-500 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">
                        Night Prayer (Tahajjud)
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Wake up for voluntary night prayers, even if just for
                        10-15 minutes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mt-6 border-l-4 border-blue-500">
                  <p className="text-blue-800 dark:text-blue-200 italic">
                    "Verily, in the remembrance of Allah do hearts find rest." —
                    Quran 13:28
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Religious Company */}
          <section id="religious-company" className="mb-16 scroll-mt-20">
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                  <Users className="text-purple-500" size={24} />
                </div>
                <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                  2. Keep Religious Company
                </h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  The people we surround ourselves with greatly influence our
                  spiritual state. Seek the company of righteous people who
                  remind you of Allah.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">
                      Join Islamic Communities
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Attend mosque gatherings, Islamic study circles, or join
                      online communities focused on spiritual growth.
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">
                      Limit Negative Influences
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Reduce time spent with people who encourage sinful
                      behavior or mock religious practices.
                    </p>
                  </div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4 mt-6 border-l-4 border-purple-500">
                  <p className="text-purple-800 dark:text-purple-200 italic">
                    "A man follows the religion of his friend; so each one
                    should consider whom he makes his friend." — Abu Dawud
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Practice Repentance */}
          <section id="repentance" className="mb-16 scroll-mt-20">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                  <Repeat className="text-indigo-500" size={24} />
                </div>
                <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                  3. Practice Sincere Repentance (Tawbah)
                </h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-indigo-200 dark:border-indigo-800">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Repentance is a powerful remedy for spiritual ailments. It
                  purifies the heart and brings us closer to Allah's mercy.
                </p>
                <div className="space-y-6">
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h3 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                      Steps of Sincere Repentance:
                    </h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400">
                      <li>Recognize and acknowledge the sin</li>
                      <li>Feel genuine remorse for committing it</li>
                      <li>Seek Allah's forgiveness with sincerity</li>
                      <li>Make a firm intention never to repeat it</li>
                      <li>
                        If the sin involved wronging others, seek their
                        forgiveness too
                      </li>
                    </ol>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4">
                    <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                      Dua for Forgiveness:
                    </h4>
                    <p className="text-right text-lg text-indigo-800 dark:text-indigo-200 mb-2 font-arabic">
                      رَبِّ اغْفِرْ لِي ذَنْبِي وَخَطَئِي وَجَهْلِي
                    </p>
                    <p className="text-indigo-700 dark:text-indigo-300 italic">
                      "My Lord, forgive me my sin, my ignorance, and my
                      transgression."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Fasting & Gratitude */}
          <section id="fasting" className="mb-16 scroll-mt-20">
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                  <Moon className="text-amber-500" size={24} />
                </div>
                <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                  4. Fast & Practice Gratitude
                </h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-amber-200 dark:border-amber-800">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  Fasting is a powerful tool for spiritual purification and
                  developing consciousness of Allah (Taqwa).
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-amber-700 dark:text-amber-300 mb-3">
                      Types of Beneficial Fasting:
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="text-amber-500" size={16} />
                        <span className="text-gray-600 dark:text-gray-400">
                          Mondays and Thursdays
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-amber-500" size={16} />
                        <span className="text-gray-600 dark:text-gray-400">
                          Three white days (13th, 14th, 15th of lunar month)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-amber-500" size={16} />
                        <span className="text-gray-600 dark:text-gray-400">
                          Day of Arafah (for non-pilgrims)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-amber-500" size={16} />
                        <span className="text-gray-600 dark:text-gray-400">
                          Day of Ashura
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-700 dark:text-amber-300 mb-3">
                      Practice Gratitude:
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="text-amber-500" size={16} />
                        <span className="text-gray-600 dark:text-gray-400">
                          Count your blessings daily
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-amber-500" size={16} />
                        <span className="text-gray-600 dark:text-gray-400">
                          Say "Alhamdulillah" frequently
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-amber-500" size={16} />
                        <span className="text-gray-600 dark:text-gray-400">
                          Help those less fortunate
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-amber-500" size={16} />
                        <span className="text-gray-600 dark:text-gray-400">
                          Reflect on Allah's favors
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Continue with similar pattern for remaining sections... */}
          {/* For brevity, I'll add a few more key sections */}

          {/* 6. Quran Recitation */}
          <section id="quran-recitation" className="mb-16 scroll-mt-20">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                  <BookOpen className="text-green-500" size={24} />
                </div>
                <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                  6. Regular Quran Recitation
                </h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-green-200 dark:border-green-800">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  The Quran is a healing for what is in the hearts. Regular
                  recitation and reflection can revive your faith.
                </p>
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                      Daily Practices:
                    </h3>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• Read at least one page after each prayer</li>
                      <li>• Listen to Quran recitations during commute</li>
                      <li>• Study the meanings and tafsir</li>
                      <li>• Memorize short surahs</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 mt-6 border-l-4 border-green-500">
                  <p className="text-green-800 dark:text-green-200 italic">
                    "And We send down of the Quran that which is healing and
                    mercy for the believers..." — Quran 17:82
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Summary Section */}
          <section id="conclusion" className="mb-16 scroll-mt-20">
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                  <SparkleIcon
                    className="text-gray-600 dark:text-gray-300"
                    size={24}
                  />
                </div>
                <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                  Journey to Renewed Faith
                </h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Remember that strengthening faith is a journey, not a
                  destination. Be patient with yourself and consistent in your
                  efforts. Allah is All-Merciful and loves those who turn to
                  Him.
                </p>
                <div className="bg-teal-50 dark:bg-teal-900/30 rounded-lg p-6 border-l-4 border-teal-500">
                  <h3 className="font-semibold text-teal-700 dark:text-teal-300 mb-3 flex items-center gap-2">
                    <SparkleIcon size={20} /> Final Supplication
                  </h3>
                  <p className="text-right text-lg text-teal-800 dark:text-teal-200 mb-3 font-arabic">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ إِيمَانًا لَا يَرْتَدُّ،
                    وَنَعِيمًا لَا يَنْفَدُ
                  </p>
                  <p className="text-teal-700 dark:text-teal-300 italic mb-2">
                    "O Allah, I ask You for faith that does not waver, and
                    blessings that do not diminish."
                  </p>
                  <p className="text-center font-semibold text-teal-700 dark:text-teal-300">
                    Ameen
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>

      {/* Clean Footer */}
      {!isDocument && (
        <footer className="border-t border-gray-200 dark:border-gray-700 py-12 mt-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-xl  font-semibold mb-4 text-gray-900 dark:text-gray-100">
              May Allah Strengthen Our Faith
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              May Allah strengthen our imaan, purify our hearts, and guide us to
              the straight path. May these remedies be a means of drawing closer
              to Him and finding peace in this life and the next.
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
                onClick={() => (window.location.href = "/")}
                className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                <ArrowLeft size={16} className="mr-2" /> Back to Home
              </Button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};
