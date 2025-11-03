/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Check, ArrowUp, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GodExistenceProps {
  isDocument: boolean;
}
export function GodExistence({
  isDocument = false,
}: Readonly<GodExistenceProps>) {
  const [activeSection, setActiveSection] = useState("premise");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contents = useMemo(() => {
    return [
      {
        id: "premise",
        title: "The Premise",
      },
      {
        id: "common-sense",
        title: "Common Sense",
      },
      {
        id: "design-argument",
        title: "Design Argument",
      },
      {
        id: "universe-order",
        title: "Universal Order",
      },
      {
        id: "philosophical-perspective",
        title: "Philosophical Perspective",
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
      <header className="border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
              Module 1: Understanding God's Existence Through Reason
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
            Exploring the evidence for the Creator through common sense, design,
            and universal order
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
          {/* Premise Section */}
          <section id="premise" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              The Premise of Our Discussion
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              The foundation of our discussion rests on a simple yet profound
              premise: the best way to make sense of the world around us is
              through common sense and reason. This isn't just an arbitrary
              choice—it's a practical necessity.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Alternative Methods People Often Use:
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Feelings and emotions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Dreams and personal experiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Ancestral wisdom ("My grandfather said so")</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Spiritual experiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Signs and miracles</span>
                </li>
              </ul>
            </div>

            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              The fundamental problem with these alternative methods is their
              subjective nature. Anyone can claim to have had a transformative
              spiritual experience or a compelling feeling, but these personal
              experiences can't serve as universal proof.
            </p>
          </section>

          {/* Natural Disposition Section */}
          <section id="natural-disposition" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Natural Predisposition to Belief
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Children have a natural predisposition to believe in a supreme
              being, according to Dr. Justin Barrett from Oxford's Centre for
              Anthropology and Mind. His research suggests that even without
              religious teaching, children instinctively see the world as
              purposefully designed, making belief in God intuitive for young
              minds.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Research Evidence
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                Dr. Barrett's claims are based on psychological experiments that
                show children's innate tendency to attribute purpose and design
                to natural phenomena:
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    Six and seven-year-olds believed birds existed "to make nice
                    music" or "because it makes the world look nice"
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    12-month-old babies showed surprise when watching a ball
                    apparently creating order from chaos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    By age four, children understand the difference between
                    human-made objects and the natural world
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                According to Barrett, this innate tendency makes children "more
                likely to believe in creationism rather than evolution," as
                evolutionary concepts are "unnatural for human minds; relatively
                difficult to believe."
              </p>
            </div>
          </section>

          {/* Common Sense Section */}
          <section id="common-sense" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              The Power of Common Sense
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              It is something that is universal and common! It's something we
              can all agree on, it's what people agree is the best thing to use
              to make decisions in their everyday lives and also by and large,
              it's objective, not subjective.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Scenario
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                Imagine this scenario: A man wearing nothing but underpants
                knocks on your door, claiming to be the electricity meter
                reader. How would you react? Would you:
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Simply believe him without question?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Just 'have faith' in his claim?</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    Use reason and common sense to assess the situation?
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Design Argument Section */}
          <section id="design-argument" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              The Design Argument
            </h2>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                The Mobile Phone Example
              </h3>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Consider your mobile phone. At its core, it's made of simple
                  elements:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>Plastic (derived from oil)</li>
                  <li>Glass and silicon (from sand)</li>
                  <li>Precious metals</li>
                </ul>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Now, imagine finding a mobile phone in the Arabian desert.
                  Would you believe it formed naturally through wind blowing,
                  sun shining, or lightning striking?
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Of course not! The complexity of the phone's design and
                  function points to a designer. Similarly, the universe's vast
                  complexity and orderliness suggest a Creator.
                </p>
              </div>
            </div>
          </section>

          {/* Universe Order Section */}
          <section id="universe-order" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Order in the Universe
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              The universe exhibits remarkable fine-tuning that makes life
              possible:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  Earth's Perfect Rotation
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Our planet rotates once every 24 hours. If a day was 30-40
                  years long:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• One side would be extremely hot</li>
                  <li>• Other side extremely cold</li>
                  <li>• Life would be nearly impossible</li>
                </ul>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  The Habitable Zone
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Earth sits in the perfect position from the sun:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Not too close (too hot)</li>
                  <li>• Not too far (too cold)</li>
                  <li>• Perfect for liquid water</li>
                </ul>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              If you observe carefully, you will find order and fine-tuning in
              many aspects of your day-to-day life. For example, the air you
              breathe contains the right amount of oxygen and nitrogen for
              humans to survive and for plants to thrive.
            </p>
          </section>

          {/* Creator's Nature Section */}
          <section id="creator-nature" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              The Nature of the Creator
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Through our reasoning, we can deduce several key points about the
              nature of the Creator:
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Key Attributes:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-gray-100">
                    Different from Creation:
                  </strong>{" "}
                  The Creator must be fundamentally different from the universe
                  itself.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-gray-100">
                    Uncreated:
                  </strong>{" "}
                  The Creator cannot have been created, or we would face an
                  infinite regression.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-gray-100">
                    Self-sufficient:
                  </strong>{" "}
                  While creation is needy, the Creator must be self-sufficient.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-gray-100">
                    Eternal:
                  </strong>{" "}
                  While creation is temporary, the Creator must be eternal.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-gray-100">
                    Unlimited:
                  </strong>{" "}
                  While creation is confined by space and time, the Creator must
                  be free of these limitations.
                </li>
              </ul>
            </div>

            {!isDocument && (
              <div className="flex justify-center mt-8">
                <Button
                  onClick={() => (window.location.href = "/primary/oneness")}
                  className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200"
                >
                  Next: God's Oneness <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            )}
          </section>

          {/* Summary Section */}
          <section
            id="philosophical-perspective"
            className="mb-16 scroll-mt-20"
          >
            <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-6 my-8">
              <p className="text-lg text-gray-600 dark:text-gray-400 italic">
                Reasoning given above are enough to understand the need for a
                Higher Power, but some have confirmation bias due to their
                knowledge of philosophy.
                {!isDocument && (
                  <>
                    {" "}
                    If you don't, skip to the next section:{" "}
                    <a
                      href="/primary/oneness"
                      className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      Oneness of God
                    </a>
                    .
                  </>
                )}
              </p>
            </div>

            <h2 className="text-2xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Philosophical Perspective
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              The logical proofs and arguments presented lead us to the
              conclusion that there must be a unique, necessary, and independent
              Creator behind the universe. Here's a summary of the key points:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  Five Logical Proofs
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <Check
                      className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Dependence on an Independent Cause</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check
                      className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Necessary Facts Presuppose Existence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check
                      className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Arrangement Indicates a Choosing Agent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check
                      className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Fine-Tuning of the Universe</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check
                      className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Causation of Composite Things</span>
                  </li>
                </ul>
              </div>
              <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  Three Arguments for Oneness
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <Check
                      className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Uniqueness by Definition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check
                      className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Ultimate Capacity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check
                      className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span>Natural Order</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              These proofs and arguments collectively point to the existence of
              a single, necessary, and independent Creator who is the foundation
              of all existence.
            </p>

            {!isDocument && (
              <div className="flex justify-center mt-8">
                <Button
                  onClick={() =>
                    (window.location.href = "/primary/god/philosophy")
                  }
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  View Detailed Philosophy{" "}
                  <ArrowRight size={16} className="ml-2" />
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
              Understanding Through Reason
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              May we all use our reason and common sense to better understand
              the universe and the nature of its Creator.
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
                onClick={() => (window.location.href = "/primary/oneness")}
                className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                How many gods? <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
