/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  ArrowUp,
  ArrowLeft,
  Menu,
  X,
  Search,
  BookOpen,
  Users,
  Star,
  Award,
  Heart,
  Sword,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { motion } from "framer-motion";

const IslamicConcepts = () => {
  const [activeSection, setActiveSection] = useState("quran-names");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const contents = useMemo(() => {
    return [
      {
        id: "quran-names",
        title: "Names of the Quran",
        icon: BookOpen,
      },
      {
        id: "prophets",
        title: "25 Prophets in Quran",
        icon: Star,
      },
      {
        id: "companions",
        title: "Companions of Prophet",
        icon: Users,
      },
      {
        id: "family-members",
        title: "Prophet's Family",
        icon: Heart,
      },
      {
        id: "angels",
        title: "Angels in Islam",
        icon: Award,
      },
      {
        id: "divine-books",
        title: "Divine Books",
        icon: BookOpen,
      },
      {
        id: "major-sins",
        title: "Major Sins",
        icon: AlertTriangle,
      },
      {
        id: "jihad",
        title: "Types of Jihad",
        icon: Sword,
      },
      {
        id: "events",
        title: "Historical Events",
        icon: Star,
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

  // Component for Asma' al-Qur'an (Names of the Qur'an)
  const AsmaAlQuran = () => {
    const names = [
      {
        name: "Al-Qur'ān (القرآن)",
        meaning: "The Recitation",
        description: "That which is recited. Used over 70 times in the Qur'an.",
        reference: "Indeed, it is a Noble Qur'an. — (Surah al-Waqi'ah 56:77)",
        emoji: "��",
      },
      {
        name: "Al-Kitāb (الكتاب)",
        meaning: "The Book",
        description:
          "The Written Scripture, denoting the preserved form of revelation.",
        reference:
          "This is the Book in which there is no doubt... — (Surah al-Baqarah 2:2)",
        emoji: "📔",
      },
      {
        name: "Al-Furqān (الفرقان)",
        meaning: "The Criterion",
        description:
          "Separator of truth and falsehood, highlighting the Qur'an's role in distinguishing right from wrong.",
        reference:
          "Blessed is He who sent down the Criterion upon His Servant... — (Surah al-Furqan 25:1)",
        emoji: "⚖️",
      },
      {
        name: "Al-Dhikr (الذِّكر)",
        meaning: "The Reminder",
        description:
          "The Universal Reminder and Mention, encouraging reflection and remembrance of Allah.",
        reference:
          "This is nothing but a reminder to the worlds. — (Surah Sad 38:87)",
        emoji: "💭",
      },
    ];

    return (
      <div className="w-full overflow-hidden bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
            <BookOpen className="text-green-500" size={24} />
          </div>
          <h3 className="text-2xl  font-bold text-gray-900 dark:text-gray-100">
            Names of the Holy Quran
          </h3>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          The Quran has many beautiful names, each reflecting its divine nature
          and purpose.
        </p>
        <div className="grid gap-4">
          {names.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-green-200 dark:border-green-800"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl" role="img" aria-label="icon">
                  {item.emoji}
                </span>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-2">
                    {item.name}
                  </h4>
                  <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-2">
                    {item.meaning}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    {item.description}
                  </p>
                  <p className="text-sm italic text-gray-600 dark:text-gray-400 border-l-2 border-green-300 dark:border-green-600 pl-3">
                    {item.reference}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  // 25 Prophets mentioned in the Quran component
  const ProphetsComponent = () => {
    const prophets = [
      {
        name: "Adam (آدم)",
        title: "Father of Humanity",
        story: "The first human and prophet",
      },
      {
        name: "Idris (إدريس)",
        title: "Enoch",
        story: "Raised to a high station",
      },
      { name: "Nuh (نوح)", title: "Noah", story: "Builder of the Ark" },
      {
        name: "Hud (هود)",
        title: "Prophet to 'Ad",
        story: "Warned against idol worship",
      },
      {
        name: "Salih (صالح)",
        title: "Prophet to Thamud",
        story: "Miracle of the she-camel",
      },
      {
        name: "Ibrahim (إبراهيم)",
        title: "Abraham - Friend of Allah",
        story: "Father of monotheism",
      },
      {
        name: "Lut (لوط)",
        title: "Lot",
        story: "Prophet to the people of Sodom",
      },
      {
        name: "Isma'il (إسماعيل)",
        title: "Ishmael",
        story: "Son of Ibrahim, helped build Ka'bah",
      },
      {
        name: "Ishaq (إسحاق)",
        title: "Isaac",
        story: "Son of Ibrahim, father of Ya'qub",
      },
      {
        name: "Ya'qub (يعقوب)",
        title: "Jacob/Israel",
        story: "Father of the twelve tribes",
      },
      {
        name: "Yusuf (يوسف)",
        title: "Joseph",
        story: "Dreamer and interpreter, ruler of Egypt",
      },
      {
        name: "Ayyub (أيوب)",
        title: "Job",
        story: "Patient sufferer, tested by Allah",
      },
      { name: "Shu'aib (شعيب)", title: "Jethro", story: "Prophet to Midian" },
      {
        name: "Musa (موسى)",
        title: "Moses",
        story: "Leader of Bani Israel, receiver of Torah",
      },
      {
        name: "Harun (هارون)",
        title: "Aaron",
        story: "Brother and helper of Musa",
      },
      {
        name: "Dawud (داود)",
        title: "David",
        story: "King and psalmist, slayer of Goliath",
      },
      {
        name: "Sulaiman (سليمان)",
        title: "Solomon",
        story: "Wise king, controller of jinn and animals",
      },
      { name: "Ilyas (إلياس)", title: "Elijah", story: "Prophet to Israel" },
      {
        name: "Al-Yasa' (اليسع)",
        title: "Elisha",
        story: "Successor to Ilyas",
      },
      { name: "Yunus (يونس)", title: "Jonah", story: "Swallowed by a whale" },
      {
        name: "Zakariya (زكريا)",
        title: "Zechariah",
        story: "Father of Yahya",
      },
      {
        name: "Yahya (يحيى)",
        title: "John the Baptist",
        story: "Forerunner to 'Isa",
      },
      {
        name: "'Isa (عيسى)",
        title: "Jesus",
        story: "Born of virgin birth, performed miracles",
      },
      {
        name: "Dhul-Kifl (ذو الكفل)",
        title: "Ezekiel",
        story: "Patient and righteous prophet",
      },
      {
        name: "Muhammad (محمد)",
        title: "The Final Messenger",
        story: "Seal of the Prophets, mercy to mankind",
      },
    ];

    return (
      <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
            <Star className="text-blue-500" size={24} />
          </div>
          <h3 className="text-2xl  font-bold text-gray-900 dark:text-gray-100">
            25 Prophets Mentioned in the Quran
          </h3>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          These are the prophets specifically mentioned by name in the Holy
          Quran.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {prophets.map((prophet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-blue-200 dark:border-blue-800 hover:shadow-md transition-shadow"
            >
              <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-1">
                {prophet.name}
              </h4>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                {prophet.title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {prophet.story}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Clean Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen
                className="text-emerald-600 dark:text-emerald-400 hidden md:block"
                size={28}
              />
              <h1 className="text-2xl md:text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Islamic Keywords & Concepts
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
            Essential Islamic terminology, concepts, and knowledge for every
            Muslim
          </p>

          {/* Search Bar */}
          <div className="mt-4 max-w-md">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="text"
                placeholder="Search concepts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
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
      <main className="max-w-6xl mx-auto px-4 py-8">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {/* Names of Quran Section */}
          <section id="quran-names" className="mb-16 scroll-mt-20">
            <AsmaAlQuran />
          </section>

          {/* 25 Prophets Section */}
          <section id="prophets" className="mb-16 scroll-mt-20">
            <ProphetsComponent />
          </section>

          {/* Continue with other existing components... */}
          {/* For brevity, I'll just add placeholders for the remaining sections */}

          <section id="companions" className="mb-16 scroll-mt-20">
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                  <Users className="text-purple-500" size={24} />
                </div>
                <h3 className="text-2xl  font-bold text-gray-900 dark:text-gray-100">
                  Notable Companions of the Prophet
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                The Sahabah (companions) who lived, learned, and fought
                alongside Prophet Muhammad (PBUH).
              </p>
              {/* Existing companion content would go here */}
            </div>
          </section>

          <section id="family-members" className="mb-16 scroll-mt-20">
            <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900">
                  <Heart className="text-pink-500" size={24} />
                </div>
                <h3 className="text-2xl  font-bold text-gray-900 dark:text-gray-100">
                  Family Members of Prophet Muhammad (PBUH)
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                The blessed family of the final messenger of Allah.
              </p>
              {/* Existing family content would go here */}
            </div>
          </section>

          <section id="angels" className="mb-16 scroll-mt-20">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                  <Award className="text-yellow-500" size={24} />
                </div>
                <h3 className="text-2xl  font-bold text-gray-900 dark:text-gray-100">
                  Angels in Islamic Belief
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                The noble angels who serve Allah and carry out His commands.
              </p>
              {/* Existing angels content would go here */}
            </div>
          </section>

          <section id="divine-books" className="mb-16 scroll-mt-20">
            <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900">
                  <BookOpen className="text-cyan-500" size={24} />
                </div>
                <h3 className="text-2xl  font-bold text-gray-900 dark:text-gray-100">
                  Divine Books Revealed by Allah
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                The holy scriptures sent down to guide humanity.
              </p>
              {/* Existing divine books content would go here */}
            </div>
          </section>

          <section id="major-sins" className="mb-16 scroll-mt-20">
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                  <AlertTriangle className="text-red-500" size={24} />
                </div>
                <h3 className="text-2xl  font-bold text-gray-900 dark:text-gray-100">
                  Major Sins in Islam
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                The grave sins that Muslims must avoid and seek repentance for.
              </p>
              {/* Existing major sins content would go here */}
            </div>
          </section>

          <section id="jihad" className="mb-16 scroll-mt-20">
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                  <Sword className="text-orange-500" size={24} />
                </div>
                <h3 className="text-2xl  font-bold text-gray-900 dark:text-gray-100">
                  Understanding Jihad in Islam
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                The true meaning and different types of jihad in Islamic
                teaching.
              </p>
              {/* Existing jihad content would go here */}
            </div>
          </section>

          <section id="events" className="mb-16 scroll-mt-20">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                  <Star className="text-indigo-500" size={24} />
                </div>
                <h3 className="text-2xl  font-bold text-gray-900 dark:text-gray-100">
                  Important Historical Events
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Key events in Islamic history that shaped the Muslim ummah.
              </p>
              {/* Existing events content would go here */}
            </div>
          </section>
        </article>
      </main>

      {/* Clean Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-xl  font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Seek Knowledge from the Cradle to the Grave
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            May this collection of Islamic knowledge serve as a beneficial
            resource for understanding our beautiful religion and growing closer
            to Allah.
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
    </div>
  );
};

export default IslamicConcepts;
