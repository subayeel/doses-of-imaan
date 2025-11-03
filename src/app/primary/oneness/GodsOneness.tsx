/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Check, ArrowRight, ArrowUp, ArrowLeft, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

interface GodsOnenessProps {
  isDocument: boolean;
}
export const GodsOneness = ({ isDocument = false }: GodsOnenessProps) => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contents = useMemo(() => {
    return [
      {
        id: "introduction",
        title: "Introduction",
      },
      {
        id: "creator-nature",
        title: "Creator vs Creation",
      },
      {
        id: "self-creation",
        title: "Self-Creation?",
      },
      {
        id: "infinite-regression",
        title: "Who Created God?",
      },
      {
        id: "uncreated-creator",
        title: "Uncreated Creator",
      },
      {
        id: "oneness",
        title: "God's Oneness",
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
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
              Module 3: Understanding God's Oneness
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
            Explore why there can only be One Creator and why this Creator must
            be different from everything in our universe.
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Why There Can Only Be One God
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Now that we've established that there must be a Creator, let's
              explore why there can only be one Creator and why this Creator
              must be different from everything in our universe.
            </p>
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              We're going to use the same common sense approach to understand
              some important aspects about who God really is. These ideas aren't
              complicated—they're actually quite simple when we think about them
              step by step.
            </p>
          </section>

          {/* Creator vs Creation Section */}
          <section id="creator-nature" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              The Creator Is Not Like Creation
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              One of the first things we can figure out is that the Creator must
              be fundamentally different from the universe. Think of it this
              way—the artist is not the painting, the writer is not the book,
              and the inventor is not the invention.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Why the Creator must be different:
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Remember our earlier reasoning—the universe needs a creator
                because:
              </p>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    The universe couldn't come from nothing—you can't get
                    something from nothing, especially something as vast and
                    complex as our universe.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    The universe couldn't create itself—nothing can create
                    itself before it exists!
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Self-Creation Impossibility */}
          <section id="self-creation" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Could the Universe Create Itself?
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Think about this for a moment—how could the universe create
              itself? That would mean it existed before it existed to create
              itself! It's a logical impossibility.
            </p>

            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                The Phone Example Revisited:
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Remember our mobile phone example? Would any rational person
                believe:
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 my-4 border-l-4 border-orange-300 dark:border-orange-600">
                <p className="italic text-gray-700 dark:text-gray-300">
                  "This phone assembled itself into a working device, organized
                  all its components, wrote its own operating system, and
                  designed its own features."
                </p>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Of course not! We know complex, functional things require
                intelligent design.
              </p>
            </div>
          </section>

          {/* Infinite Regression Section */}
          <section id="infinite-regression" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Who Created the Creator?
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              This is where many people get stuck. They ask, "If everything
              needs a creator, then who created God?" It's a good question!
            </p>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              But here's the logic problem: If we say God was created by another
              creator, then who created that creator? And who created the
              creator of the creator? We'd end up in an endless loop, going back
              forever.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                The Table Lifting Example:
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Imagine you want to lift a heavy table, but you can't do it
                alone:
              </p>
              <div className="space-y-4">
                <div className="flex flex-col space-y-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                      Step 1:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      You ask your friend to help
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                      Step 2:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Your friend says: "I'll only help if someone else helps me
                      first"
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                      Result:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      If this continues forever... the table will never be
                      lifted!
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Similarly, if every creator needs another creator, nothing would
                ever get created! But we know the universe exists, so this can't
                be right.
              </p>
            </div>
          </section>

          {/* Uncreated Creator Section */}
          <section id="uncreated-creator" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              The Uncreated Creator
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Using logical reasoning, we arrive at a sensible conclusion: There
              must be an uncreated Creator—one that wasn't made or designed but
              has always existed.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Qualities of the Uncreated Creator:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Self-sufficient:
                    </strong>{" "}
                    While creation depends on other things, the Creator depends
                    on nothing.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Eternal:
                    </strong>{" "}
                    While creation has beginnings and endings, the Creator has
                    always existed.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Beyond space and time:
                    </strong>{" "}
                    While we're confined by physical limits, the Creator exists
                    beyond these limitations.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Oneness Section */}
          <section id="oneness" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Why There Can Only Be One
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Finally, we come to the question of God's oneness. Why must there
              be just one Creator rather than many?
            </p>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              If there were multiple creators, they would limit each other. Each
              would have boundaries where their power ends and another's begins.
              But this would make them limited beings—more like very powerful
              created beings rather than the unlimited Creator we've been
              describing.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                The Logic of Oneness:
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                An unlimited, self-sufficient, eternal Creator must be one
                because:
              </p>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    Multiple creators would limit each other, making none of
                    them truly unlimited
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    The perfect order of the universe suggests a single, unified
                    intelligence behind its design
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    If multiple creators disagreed, there would be chaos rather
                    than the harmony we observe
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              This is why we conclude there is One God—One Creator who designed
              this universe with perfect balance and harmony.
            </p>
          </section>
        </article>
      </main>

      {/* Clean Footer */}
      {!isDocument && (
        <footer className="border-t border-gray-200 dark:border-gray-700 py-12 mt-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-xl  font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Understanding God's Nature
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              May we all gain a deeper understanding of God's oneness and grow
              in our appreciation of the Creator's unique nature and perfect
              design.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => (window.location.href = "/primary/god")}
                className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <ArrowLeft size={16} className="mr-2" /> Revisit God's Existence
              </Button>
              <Button
                variant="outline"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <ArrowUp size={16} className="mr-2" /> Back to Top
              </Button>
              <Button
                onClick={() => (window.location.href = "/primary/revelation")}
                className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                Why we need Revelation?{" "}
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};
