/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect, useMemo } from "react";
import { ArrowUp, ArrowLeft, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState("vision");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contents = useMemo(() => {
    return [
      {
        id: "vision",
        title: "Our Vision",
      },
      {
        id: "mission",
        title: "Our Mission",
      },
      {
        id: "objectives",
        title: "Our Objectives",
      },
      {
        id: "approach",
        title: "Our Approach",
      },
      {
        id: "prayer",
        title: "Our Prayer",
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
            <h1 className="text-2xl md:text-3xl  font-bold text-gray-900 dark:text-gray-100">
              About Us
            </h1>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 font-light">
            Our vision, mission, and approach to spreading authentic Islamic
            knowledge
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
          {/* Vision Section */}
          <section id="vision" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Our Vision
            </h2>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              To serve as a comprehensive and authentic source of Islamic
              knowledge, providing insightful content that enlightens, educates,
              and inspires individuals on their spiritual journey.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-8">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                We envision a world where authentic Islamic teachings are
                accessible to everyone, helping people understand the beauty and
                wisdom of Islam through clear, well-researched, and
                compassionate content.
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section id="mission" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Our Mission
            </h2>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Our platform is dedicated to spreading the message of Islam,
              strengthening the faith of Muslims, and guiding those seeking the
              truth. We strive to present authentic Islamic teachings in a clear
              and accessible manner, making it easier for everyone to understand
              and implement in their lives.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Core Mission Elements:
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    Spread the authentic message of Islam to all humanity
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    Strengthen the faith and knowledge of Muslims worldwide
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    Guide sincere seekers of truth with wisdom and compassion
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Objectives Section */}
          <section id="objectives" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Our Objectives
            </h2>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              We have established clear objectives to fulfill our mission and
              achieve our vision of spreading authentic Islamic knowledge.
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Our Key Objectives:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-medium mt-1 flex-shrink-0">
                    1
                  </span>
                  <span>
                    To spread the message of Islam to all humanity with wisdom
                    and beautiful preaching
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-medium mt-1 flex-shrink-0">
                    2
                  </span>
                  <span>
                    To provide content that nurtures and strengthens faith
                    (Iman)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-medium mt-1 flex-shrink-0">
                    3
                  </span>
                  <span>
                    To offer guidance on spiritual, social, and ethical matters
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-medium mt-1 flex-shrink-0">
                    4
                  </span>
                  <span>
                    To dispel misconceptions and clarify authentic Islamic
                    teachings
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-medium mt-1 flex-shrink-0">
                    5
                  </span>
                  <span>
                    To inspire people towards a life of righteousness and
                    devotion to Allah
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Approach Section */}
          <section id="approach" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Our Approach
            </h2>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              We adhere to the beliefs of Ahl as-Sunnah wa'l-Jamaa'ah and follow
              the teachings of the Qur'an and authentic Sunnah. Our content is
              curated with references from esteemed scholars and traditional
              Islamic sources, ensuring credibility and accuracy.
            </p>
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Our Methodology:
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Strict adherence to Qur'an and authentic Sunnah</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Content reviewed by qualified Islamic scholars</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    Avoiding debates, controversies, and divisive topics
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Focus on uplifting and beneficial knowledge</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    Clear citations and references from authentic sources
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              We believe in presenting Islam in its pure and original form, free
              from cultural additions or personal interpretations, following the
              understanding of the righteous predecessors (Salaf as-Salih).
            </p>
          </section>

          {/* Prayer Section */}
          <section id="prayer" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Our Prayer
            </h2>
            <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-6 my-8">
              <p className="text-xl leading-relaxed italic text-gray-700 dark:text-gray-300">
                May Allah guide us to the straight path, grant us sincerity in
                our efforts, and allow this platform to be a means of benefit
                for all.
              </p>
              <p className="text-xl leading-relaxed italic text-gray-700 dark:text-gray-300 mt-4">
                Ameen.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-8">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                We pray that Allah accepts our humble efforts and makes this
                work a source of continuous charity (Sadaqah Jariyah) that
                benefits people long after we are gone. May Allah purify our
                intentions and make us among those who call people to guidance
                and good.
              </p>
            </div>
          </section>
        </article>
      </main>

      {/* Clean Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-12 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-xl  font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Join Us in This Noble Mission
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            May Allah bless our efforts and make this platform a source of
            guidance and benefit for all who seek the truth.
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

export default AboutUs;
