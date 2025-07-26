/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  ArrowUp,
  ArrowLeft,
  Menu,
  X,
  BookOpen,
  Heart,
  Clock,
  Target,
  Users,
  Trophy,
  Star,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const HifzPage = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contents = useMemo(() => {
    return [
      {
        id: "introduction",
        title: "What is Hifz?",
        icon: BookOpen,
      },
      {
        id: "benefits",
        title: "Benefits of Memorizing Quran",
        icon: Heart,
      },
      {
        id: "getting-started",
        title: "Getting Started",
        icon: Target,
      },
      {
        id: "methodology",
        title: "Effective Methods",
        icon: Star,
      },
      {
        id: "schedule",
        title: "Creating a Schedule",
        icon: Clock,
      },
      {
        id: "maintaining",
        title: "Maintaining Your Hifz",
        icon: Trophy,
      },
      {
        id: "community",
        title: "Community Support",
        icon: Users,
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
              <BookOpen
                className="text-green-600 dark:text-green-400 hidden md:block"
                size={28}
              />
              <h1 className="text-2xl md:text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Hifz: Memorizing the Quran
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
            A comprehensive guide to memorizing the Holy Quran with proper
            methodology and dedication
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
            <nav className="space-y-3">
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
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                <BookOpen className="text-green-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                What is Hifz?
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Hifz (Arabic: حفظ) literally means "memorization" or
              "preservation." In Islamic terminology, it specifically refers to
              the memorization of the entire Quran. A person who has memorized
              the complete Quran is called a Hafiz (male) or Hafiza (female).
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                The Sacred Tradition
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Memorizing the Quran is one of the most honored traditions in
                Islam. It connects Muslims directly to the words of Allah,
                allowing them to carry the divine guidance in their hearts
                wherever they go. This practice has been continuous since the
                time of Prophet Muhammad (peace be upon him).
              </p>
            </div>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              The Quran consists of 114 chapters (Surahs) with over 6,000 verses
              (Ayahs). While the task may seem daunting, millions of Muslims
              throughout history have successfully memorized the entire Quran,
              proving that with dedication, proper methodology, and Allah's
              help, this noble goal is achievable.
            </p>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                <Heart className="text-purple-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Benefits of Memorizing the Quran
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              The journey of Hifz brings numerous spiritual, intellectual, and
              practical benefits that extend far beyond the memorization itself.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  Spiritual Benefits
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-purple-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Strengthened connection with Allah</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-purple-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Enhanced spiritual awareness and mindfulness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-purple-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Greater reward and status in the afterlife</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-purple-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Purification of the heart and soul</span>
                  </li>
                </ul>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  Practical Benefits
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-purple-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Improved memory and cognitive abilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-purple-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Enhanced Arabic language skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-purple-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Ability to lead prayers anywhere</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="text-purple-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Deep understanding of Islamic teachings</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-purple-300 dark:border-purple-600 pl-6 my-8">
              <p className="text-lg italic text-gray-700 dark:text-gray-300">
                "The best of you are those who learn the Quran and teach it."
              </p>
              <cite className="text-sm text-gray-600 dark:text-gray-400 not-italic">
                - Prophet Muhammad (peace be upon him), Sahih Bukhari
              </cite>
            </div>
          </section>

          {/* Getting Started Section */}
          <section id="getting-started" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                <Target className="text-blue-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Getting Started with Your Hifz Journey
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Beginning your Hifz journey requires careful preparation, sincere
              intention, and proper foundational knowledge.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Prerequisites for Hifz:
              </h3>
              <ol className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mt-1 flex-shrink-0">
                    1
                  </span>
                  <div>
                    <strong>Learn to Read Arabic Fluently:</strong> You must be
                    able to read the Quran correctly with proper pronunciation
                    (Tajweed).
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mt-1 flex-shrink-0">
                    2
                  </span>
                  <div>
                    <strong>Purify Your Intention (Niyyah):</strong> Your
                    intention should be solely to please Allah and gain
                    closeness to Him.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mt-1 flex-shrink-0">
                    3
                  </span>
                  <div>
                    <strong>Find a Qualified Teacher:</strong> A knowledgeable
                    teacher is essential to guide you and correct your mistakes.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mt-1 flex-shrink-0">
                    4
                  </span>
                  <div>
                    <strong>Commit to Regular Practice:</strong> Consistency is
                    key to successful memorization and retention.
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Age Considerations:
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    <strong>Children (5-15 years):</strong> Generally have the
                    strongest memorization ability
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    <strong>Adults:</strong> May take longer but often have
                    better understanding and retention
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    <strong>Remember:</strong> It's never too late to start -
                    Allah accepts sincere efforts at any age
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Methodology Section */}
          <section id="methodology" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                <Star className="text-orange-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Effective Memorization Methods
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Different methods work for different people. Here are proven
              techniques that have helped millions of students succeed in their
              Hifz journey.
            </p>

            <div className="space-y-8 my-8">
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  1. The Traditional Method (Sabaq, Sabqi, Manzil)
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Sabaq (New Lesson):</strong> Learn new verses
                    (typically 1 page)
                  </li>
                  <li>
                    <strong>Sabqi (Previous Lesson):</strong> Review yesterday's
                    lesson
                  </li>
                  <li>
                    <strong>Manzil (Old Lessons):</strong> Review previously
                    memorized portions
                  </li>
                </ul>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  This method ensures continuous revision while learning new
                  material.
                </p>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  2. Verse-by-Verse Method
                </h3>
                <ol className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    1. Read the verse 10-20 times while looking at the text
                  </li>
                  <li>2. Recite from memory without looking 10 times</li>
                  <li>3. Move to the next verse and repeat</li>
                  <li>
                    4. Combine verses once individual verses are memorized
                  </li>
                </ol>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  3. Audio-Visual Method
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li>• Listen to recitations while following the text</li>
                  <li>• Use apps with audio and visual cues</li>
                  <li>• Record yourself and listen back for errors</li>
                  <li>• Helpful for auditory learners</li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  4. Understanding-Based Method
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li>• Learn the meaning of verses you're memorizing</li>
                  <li>• Understand the context and themes</li>
                  <li>• Connect verses to create logical flow</li>
                  <li>• Especially effective for adult learners</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Schedule Section */}
          <section id="schedule" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                <Clock className="text-indigo-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Creating an Effective Schedule
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              A well-structured schedule is crucial for maintaining consistency
              and making steady progress in your memorization journey.
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Daily Schedule Framework:
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                    Morning Session (1-2 hours)
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• New memorization (Sabaq)</li>
                    <li>• Mind is fresh and alert</li>
                    <li>• Best time for learning new material</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
                    Evening Session (30-60 minutes)
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Review and revision</li>
                    <li>• Consolidate morning's work</li>
                    <li>• Practice with teacher if available</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Weekly Revision Schedule:
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    <strong>Monday-Thursday:</strong> New memorization + daily
                    revision
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    <strong>Friday:</strong> Review the week's work
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    <strong>Saturday:</strong> Comprehensive revision of older
                    portions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    <strong>Sunday:</strong> Rest or light revision
                  </span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-indigo-300 dark:border-indigo-600 pl-6 my-8">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong>Remember:</strong> Quality over quantity. It's better to
                memorize fewer verses correctly than to rush through many verses
                with mistakes. Adjust your pace according to your capacity and
                circumstances.
              </p>
            </div>
          </section>

          {/* Maintaining Section */}
          <section id="maintaining" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                <Trophy className="text-amber-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Maintaining Your Hifz
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Completing your Hifz is just the beginning. Maintaining what
              you've memorized requires ongoing effort and dedication throughout
              your life.
            </p>

            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Essential Maintenance Practices:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-amber-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong>Daily Recitation:</strong> Recite at least 2-3 pages
                    daily to maintain fluency
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-amber-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong>Regular Khatm:</strong> Complete the entire Quran
                    monthly or bi-monthly
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-amber-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong>Prayer Leadership:</strong> Lead prayers regularly
                    to practice your memorization
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-amber-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong>Teaching Others:</strong> Teaching helps reinforce
                    your own memorization
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-amber-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong>Continued Learning:</strong> Study Tafseer to deepen
                    your understanding
                  </div>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-amber-300 dark:border-amber-600 pl-6 my-8">
              <p className="text-lg italic text-gray-700 dark:text-gray-300">
                "Take care of the Quran, for by the One in whose hand is my
                soul, it slips away faster than camels from their hobbles."
              </p>
              <cite className="text-sm text-gray-600 dark:text-gray-400 not-italic">
                - Prophet Muhammad (peace be upon him), Sahih Muslim
              </cite>
            </div>
          </section>

          {/* Community Section */}
          <section id="community" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                <Users className="text-teal-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Community Support and Resources
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              The journey of Hifz is greatly enhanced by community support,
              proper resources, and connection with fellow memorizers.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  Finding Support
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li>• Join local Hifz circles or study groups</li>
                  <li>• Connect with other Huffaz for motivation</li>
                  <li>• Seek guidance from experienced teachers</li>
                  <li>• Involve family members in your journey</li>
                  <li>• Use online communities and forums</li>
                </ul>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  Helpful Resources
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li>• High-quality Mushaf for memorization</li>
                  <li>• Audio recitations by skilled Qaris</li>
                  <li>• Hifz tracking apps and tools</li>
                  <li>• Tajweed learning resources</li>
                  <li>• Books on memorization techniques</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Important Note on Hifz Planning
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                For those seeking a structured approach to their Hifz journey,
                consider using our <strong>Hifz Planner</strong> tool. It can
                help you create a personalized memorization schedule based on
                your lifestyle, available time, and current level. A good plan
                is the foundation of successful memorization.
              </p>
              <div className="mt-4">
                <Button
                  onClick={() => (window.location.href = "/hifz-planner")}
                  className="bg-teal-600 dark:bg-teal-700 text-white hover:bg-teal-700 dark:hover:bg-teal-800"
                >
                  Try Our Hifz Planner
                </Button>
              </div>
            </div>
          </section>
        </article>
      </main>

      {/* Clean Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-12 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-xl  font-semibold mb-4 text-gray-900 dark:text-gray-100">
            May Allah Make Your Hifz Journey Successful
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Remember that memorizing the Quran is not just about storing words
            in memory, but about allowing the divine guidance to transform your
            heart and soul. May Allah grant you success and make you among the
            people of the Quran.
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

export default HifzPage;
