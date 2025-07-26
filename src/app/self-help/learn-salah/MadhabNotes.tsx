"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  ArrowUp,
  ArrowLeft,
  Menu,
  X,
  Book,
  Users,
  Star,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { madhabNotes } from "@/data/constant";

export default function MadhabPrayerGuide() {
  const [activeMadhab, setActiveMadhab] = useState<
    "hanafi" | "maliki" | "shafii" | "hanbali"
  >("shafii");
  const [activeSection, setActiveSection] = useState("overview");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contents = useMemo(() => {
    return [
      { id: "overview", title: "Overview", icon: Book },
      { id: "hanafi", title: "Hanafi Madhab", icon: Star },
      { id: "maliki", title: "Maliki Madhab", icon: Compass },
      { id: "shafii", title: "Shafi'i Madhab", icon: Users },
      { id: "hanbali", title: "Hanbali Madhab", icon: Book },
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

  type Madhab = {
    name: string;
    color: string;
    bgColor: string;
    description: string;
  };

  const madhabs: Record<string, Madhab> = {
    hanafi: {
      name: "Hanafi",
      color: "text-emerald-700 dark:text-emerald-300",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      description:
        "The largest Sunni school of Islamic jurisprudence, founded by Imam Abu Hanifa.",
    },
    maliki: {
      name: "Maliki",
      color: "text-blue-700 dark:text-blue-300",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      description:
        "Based on the practices of the people of Medina, founded by Imam Malik.",
    },
    shafii: {
      name: "Shafi'i",
      color: "text-purple-700 dark:text-purple-300",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      description:
        "Emphasizes the importance of hadith in Islamic law, founded by Imam ash-Shafi'i.",
    },
    hanbali: {
      name: "Hanbali",
      color: "text-amber-700 dark:text-amber-300",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      description:
        "The most conservative of the four schools, founded by Imam Ahmad ibn Hanbal.",
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Clean Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Compass
                className="text-blue-600 dark:text-blue-400 hidden md:block"
                size={28}
              />
              <h1 className="text-2xl md:text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Prayer Guide by Madhab
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
            Understanding the different approaches to prayer across the four
            main schools of Islamic jurisprudence
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
          {/* Overview Section */}
          <section id="overview" className="mb-16 scroll-mt-20">
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                  <Book
                    className="text-gray-600 dark:text-gray-300"
                    size={24}
                  />
                </div>
                <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                  About the Four Madhabs
                </h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  The four madhabs (schools of thought) in Sunni Islam offer
                  slightly different interpretations of how to perform salah
                  (prayer) based on their understanding of the Sunnah and
                  scholarly tradition.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Each madhab is valid to follow, and differences in practice
                  reflect the richness of Islamic scholarship rather than
                  contradictions in the religion itself.
                </p>

                {/* Madhab Selection Pills */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
                  {Object.entries(madhabs).map(
                    ([key, { name, color, bgColor }]) => (
                      <button
                        key={key}
                        className={`py-3 px-4 rounded-lg font-medium transition-all ${
                          activeMadhab === key
                            ? `${bgColor} ${color} ring-2 ring-offset-2 ring-current`
                            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                        }`}
                        onClick={() =>
                          setActiveMadhab(
                            key as "hanafi" | "maliki" | "shafii" | "hanbali"
                          )
                        }
                      >
                        {name}
                      </button>
                    )
                  )}
                </div>

                {/* Active Madhab Description */}
                <div
                  className={`${madhabs[activeMadhab].bgColor} rounded-lg p-4 border-l-4 border-current ${madhabs[activeMadhab].color}`}
                >
                  <h3
                    className={`text-xl font-semibold mb-2 ${madhabs[activeMadhab].color}`}
                  >
                    {madhabs[activeMadhab].name} Madhab
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {madhabs[activeMadhab].description}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Individual Madhab Sections */}
          {Object.entries(madhabs).map(([key, { name, color, bgColor }]) => (
            <section key={key} id={key} className="mb-16 scroll-mt-20">
              <div className={`${bgColor} rounded-lg p-6`}>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-2 rounded-lg ${bgColor
                      .replace("50", "100")
                      .replace("900/20", "900")}`}
                  >
                    <Star
                      className={
                        color.includes("emerald")
                          ? "text-emerald-500"
                          : color.includes("blue")
                          ? "text-blue-500"
                          : color.includes("purple")
                          ? "text-purple-500"
                          : "text-amber-500"
                      }
                      size={24}
                    />
                  </div>
                  <h2 className={`text-3xl  font-bold ${color}`}>
                    {name} Madhab Prayer Notes
                  </h2>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <div className="space-y-4">
                    {madhabNotes[key as keyof typeof madhabNotes].map(
                      (note, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold ${
                              color.includes("emerald")
                                ? "bg-emerald-500"
                                : color.includes("blue")
                                ? "bg-blue-500"
                                : color.includes("purple")
                                ? "bg-purple-500"
                                : "bg-amber-500"
                            }`}
                          >
                            {index + 1}
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 flex-1">
                            {note.startsWith("•") ? note.substring(2) : note}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </article>
      </main>

      {/* Clean Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-12 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-xl  font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Unity in Diversity
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            While the madhabs may differ in some details of prayer, they all
            lead to the same goal: establishing a connection with Allah through
            sincere worship and devotion.
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
}
