/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Check, ArrowRight, ArrowUp, ArrowLeft, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhyTheQuranProps {
  isDocument: boolean;
}
export const WhyTheQuran = ({ isDocument = false }: WhyTheQuranProps) => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contents = useMemo(() => {
    return [
      {
        id: "introduction",
        title: "Introduction",
      },
      {
        id: "preservation",
        title: "Preservation",
      },
      {
        id: "inimitability",
        title: "Inimitability",
      },
      {
        id: "clear-message",
        title: "Clear Message",
      },
      {
        id: "universal-message",
        title: "Universal Message",
      },
      {
        id: "falsification-test",
        title: "Authenticity Test",
      },
      {
        id: "accuracies",
        title: "Remarkable Accuracies",
      },
      {
        id: "conclusion",
        title: "Conclusion",
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
              Why the Quran is Divine Revelation
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
            Discover the compelling evidence for the divine origin of the Quran
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
          {/* Introduction Section */}
          <section id="introduction" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Our Guide for Life
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Let's think about something we all do. When you buy a new phone or
              appliance, what's always included in the box? An instruction
              manual, right? It shows you how to use it properly, what to do and
              what not to do, and all the important warnings.
            </p>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              In a similar way, we believe God has sent us an instruction manual
              for life—the Quran. It guides us on how to live, what to do and
              avoid, and gives us important warnings and recommendations for our
              journey through life.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              But why should we believe the Quran is actually from God? Let's
              explore some really fascinating reasons that might surprise you!
            </p>
          </section>

          {/* Preservation Section */}
          <section id="preservation" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Remarkably Preserved
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              One of the most amazing things about the Quran is how perfectly
              it's been preserved over 1,400 years. The Quran itself makes a
              bold promise about this:
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 my-8 border-l-4 border-green-300 dark:border-green-600">
              <p className="italic text-center text-xl mb-2 text-gray-700 dark:text-gray-300">
                "It is certainly We Who have revealed the Reminder [the Quran],
                and it is certainly We Who will preserve it."
              </p>
              <p className="text-right text-gray-600 dark:text-gray-400">
                — Quran 15:9
              </p>
            </div>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              This isn't just a claim—it's a reality you can verify yourself!
              You could pick up a copy of the Quran from anywhere in the world
              today and compare it with manuscripts dating back to within thirty
              years after Prophet Muhammad's time, and you'd find the text to be
              exactly the same (apart from writing style and pronunciation
              marks).
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Two ways the Quran is preserved:
              </h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <strong className="text-gray-900 dark:text-gray-100">
                    Written preservation:
                  </strong>
                  <span className="text-gray-700 dark:text-gray-300">
                    {" "}
                    Identical manuscripts exist from the earliest Islamic
                    period, with careful systems to ensure accuracy.
                  </span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <strong className="text-gray-900 dark:text-gray-100">
                    Memorization:
                  </strong>
                  <span className="text-gray-700 dark:text-gray-300">
                    {" "}
                    Millions of people worldwide, speaking countless languages,
                    have memorized the entire Quran word for word—something not
                    seen with any other book in history.
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Inimitability Section */}
          <section id="inimitability" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Impossible to Imitate
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              The Quran presents an interesting challenge to anyone who doubts
              its divine origin:
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 my-8 border-l-4 border-yellow-300 dark:border-yellow-600">
              <p className="italic text-center text-xl mb-2 text-gray-700 dark:text-gray-300">
                "And if you all are in doubt about what I have revealed to My
                servant, bring a single chapter like it, and call your witnesses
                besides God if you are truthful."
              </p>
              <p className="text-right text-gray-600 dark:text-gray-400">
                — Quran 2:23
              </p>
            </div>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              This challenge is fascinating because the shortest chapter in the
              Quran is just three verses long (Surah al-Kawthar). How hard could
              it be to write three lines?
            </p>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Well, the people who received this challenge were the Arabs of
              that time—master poets and linguistic experts who took immense
              pride in their language skills. Yet many of them embraced Islam
              just from hearing the Quran being recited. Despite their
              expertise, they couldn't meet this seemingly simple challenge.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              The unique literary style of the Quran—neither poetry nor prose
              but something entirely distinct—continues to captivate listeners,
              even those who don't understand Arabic often find its recitation
              moving and powerful.
            </p>
          </section>

          {/* Clear Message Section */}
          <section id="clear-message" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              A Clear Message About God
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Remember our earlier discussions about the nature of God? How
              reason tells us there must be One Creator unlike creation? The
              Quran's description of God perfectly matches what we can
              understand through rational thinking:
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                How the Quran describes God:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">
                      One without partners:
                    </strong>{" "}
                    "Say: He is God, the One and Alone" (Quran 112:1)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Creator of everything:
                    </strong>{" "}
                    "God is the Creator of all things" (Quran 39:62)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Everything depends on Him:
                    </strong>{" "}
                    "O humanity! It is you who stand in need of God, while God
                    is the Self-Sufficient, the Praiseworthy" (Quran 35:15)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Entirely unique:
                    </strong>{" "}
                    "There is nothing like Him" (Quran 42:11)
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              A beautiful summary of this concept is found in the short chapter
              called Surah Al-Ikhlas:
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 my-8 border-l-4 border-purple-300 dark:border-purple-600">
              <p className="italic text-center text-xl text-gray-700 dark:text-gray-300">
                "Say: He is God, the One and Alone, God the one whom everything
                needs and who Himself needs nothing, He is not born, nor does He
                beget, and there is nothing that can be compared to Him."
              </p>
              <p className="text-right text-gray-600 dark:text-gray-400">
                — Quran 112:1-4
              </p>
            </div>
          </section>

          {/* Universal Message Section */}
          <section id="universal-message" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              A Message for Everyone
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Another remarkable aspect of the Quran is its universal message.
              It's not meant for just one tribe, nation, or time period—it
              speaks to all of humanity across all ages.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                The Quran's universal values:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    Be fair and just (16:90)
                  </span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    Honor your parents (17:23)
                  </span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    Be good to neighbors (4:36)
                  </span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    Saving lives is sacred (5:32)
                  </span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    Don't be prideful (17:37)
                  </span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    Don't cheat or steal (17:35)
                  </span>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              These values aren't tied to any specific culture or time
              period—they're universal principles that make sense for creating a
              balanced, healthy society no matter where or when you live. Isn't
              it interesting that these align with what most of us already feel
              is right?
            </p>
          </section>

          {/* Falsification Test Section */}
          <section id="falsification-test" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              The Quran's Own Test of Authenticity
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              The Quran doesn't shy away from scrutiny. In fact, it offers its
              own test to determine if it's really from God:
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 my-8 border-l-4 border-red-300 dark:border-red-600">
              <p className="italic text-center text-xl mb-2 text-gray-700 dark:text-gray-300">
                "Do they not then consider the Quran carefully? Had it been from
                other than Allah, they would surely have found therein
                contradictions in abundance"
              </p>
              <p className="text-right text-gray-600 dark:text-gray-400">
                — Quran 4:82
              </p>
            </div>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              This is a powerful challenge! The Quran was revealed over 23
              years, addressing countless topics from theology to law, from
              personal conduct to cosmic events. For a human author to maintain
              perfect consistency across such a vast range of subjects over such
              a long period would be extremely difficult.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              This challenge invites readers to examine the Quran critically,
              searching for contradictions or inconsistencies—a level of
              confidence that suggests it knows it will pass such examination.
            </p>
          </section>

          {/* Accuracies Section */}
          <section id="accuracies" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Remarkable Accuracies
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              The Quran contains statements about history, science, and the
              natural world that are remarkably accurate—especially considering
              the time and place it was revealed.
            </p>

            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Historical accuracies:
              </h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <strong className="text-gray-900 dark:text-gray-100">
                    Ancient Egyptian titles:
                  </strong>
                  <span className="text-gray-700 dark:text-gray-300">
                    {" "}
                    The Quran correctly refers to the ruler in Joseph's time as
                    a "King" but in Moses' time as "Pharaoh"—matching what we
                    now know from historical records.
                  </span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <strong className="text-gray-900 dark:text-gray-100">
                    Multilayered descriptions:
                  </strong>
                  <span className="text-gray-700 dark:text-gray-300">
                    {" "}
                    The Quran describes natural phenomena in ways that made
                    sense to ancient audiences but also align with modern
                    discoveries.
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              For example, consider how the Quran describes the origins of the
              universe:
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-8 border-l-4 border-blue-300 dark:border-blue-600">
              <p className="italic text-center text-xl mb-2 text-gray-700 dark:text-gray-300">
                "Do the disbelievers not realize that the heavens and earth were
                once one mass then We split them apart?"
              </p>
              <p className="text-right text-gray-600 dark:text-gray-400">
                — Quran 21:30
              </p>
            </div>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              For a 7th century audience, this description made sense, but for
              us today, it also aligns with our understanding of the universe
              beginning from a singularity (what scientists call the Big Bang).
            </p>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Similarly, the Quran's description of embryonic development uses
              the Arabic word "alaqah"—which can mean a clinging substance, a
              leech-like structure, or a blood clot. When we look at an embryo
              around days 22-25, it does indeed resemble a leech and is clinging
              to the uterine wall!
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                A balanced view:
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Remember, the Quran isn't meant to be a science textbook—it's a
                book of guidance. These fascinating alignments with modern
                knowledge are signs for reflection, not scientific claims.
                Science constantly evolves with new discoveries, while the
                Quran's purpose is to invite us to contemplate the Creator's
                wisdom and power.
              </p>
            </div>
          </section>

          {/* Conclusion Section */}
          <section id="conclusion" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Bringing It All Together
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              When we look at all these aspects together—the Quran's perfect
              preservation, its inimitable style, its clear and consistent
              message about God, its universal values, its invitation to
              scrutiny, and its remarkable accuracies—a compelling picture
              emerges.
            </p>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              These qualities suggest that the Quran isn't just another book
              written by humans, but rather a divine revelation—our instruction
              manual for life from the Creator Himself.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Just as we would trust the manufacturer's guide to show us how to
              use our devices properly, the Quran offers guidance on how to live
              our lives in accordance with our Creator's wisdom and purpose.
            </p>
          </section>

          {/* Conclusion Section */}
          <section id="conclusion" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Miracle of the Quran
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              The Quran is a miracle in itself. It is a book that has been
              preserved perfectly for over 1400 years. It is a book that has
              been translated into all the languages of the world. It is a book
              that has been proven to be the word of God by the most
              sophisticated scientific and historical methods.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
              <p className="text-lg font-semibold mb-2">Not convinced yet?</p>
              <p>
                Once you see the scientific,mathematical and historical miracles
                in Quran, you will be convinced that this book cannot be
                written. Visit the website to know more about the miracles.
              </p>
              <a
                href="https://quranic-miracles.vercel.app/"
                target="_blank"
                className="text-yellow-600 underline hover:cursor-pointer"
              >
                Quranic Miracles
              </a>
            </div>
          </section>
        </article>
      </main>

      {/* Clean Footer */}
      {!isDocument && (
        <footer className="border-t border-gray-200 dark:border-gray-700 py-12 mt-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-xl  font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Journey of Truth
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              May we all approach questions of faith with honesty, critical
              thinking, and an open heart to discover the truth that resonates
              with both reason and spirituality.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => (window.location.href = "/primary/revelation")}
                className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <ArrowLeft size={16} className="mr-2" /> Revisit need of
                Revelation
              </Button>
              <Button
                variant="outline"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <ArrowUp size={16} className="mr-2" /> Back to Top
              </Button>
              <Button
                onClick={() => (window.location.href = "/primary/prophethood")}
                className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                Why we need Prophet? <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};
