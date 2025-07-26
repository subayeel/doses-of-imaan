/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Check, ArrowUp, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProofsForGodProps {
  isDocument: boolean;
}

export const ProofsForGod = ({ isDocument }: ProofsForGodProps) => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contents = useMemo(() => {
    return [
      {
        id: "introduction",
        title: "Introduction",
      },
      {
        id: "proof-1",
        title: "Dependence Proof",
      },
      {
        id: "proof-2",
        title: "Necessary Facts",
      },
      {
        id: "proof-3",
        title: "Arrangement Proof",
      },
      {
        id: "proof-4",
        title: "Fine-Tuning",
      },
      {
        id: "proof-5",
        title: "Composite Things",
      },
      {
        id: "oneness-1",
        title: "Uniqueness",
      },
      {
        id: "oneness-2",
        title: "Ultimate Capacity",
      },
      {
        id: "oneness-3",
        title: "Natural Order",
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
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              Proofs for God's Existence
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
            Logical proofs for the existence of God and why there must be one
            unique, necessary, and independent creator
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Understanding the Proofs for God
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Throughout human history, people have pondered the existence of a
              Creator. These aren't just religious claims but logical arguments
              that can be understood and evaluated by anyone, regardless of
              their background.
            </p>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              We'll explore five key proofs that point toward the existence of a
              necessary, independent Creator, followed by three arguments for
              why this Creator must be One. These proofs build upon common sense
              and logical reasoning that we use in our everyday lives.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                What we'll cover:
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Five logical proofs for the existence of God</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Three arguments for why God must be One</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Clear explanations of key terms and concepts</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Proof 1 Section */}
          <section id="proof-1" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Proof 1: Dependence on an Independent Existence
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Everything that exists is either dependent or independent.
              Dependent things rely on something else for their existence and
              cannot sustain themselves indefinitely. If everything were
              dependent, there would be no foundation for existence, making the
              presence of an independent existence necessary.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Core Reasoning:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Premise:
                    </strong>{" "}
                    Everything composed of parts is dependent, as its existence
                    relies on the arrangement and interaction of its components.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Logical Extension:
                    </strong>{" "}
                    The universe, being composed of countless interacting parts,
                    must also be dependent.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Conclusion:
                    </strong>{" "}
                    A dependent universe or even an infinite multiverse requires
                    an independent existence to serve as its foundation.
                  </span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-300 dark:border-blue-600 pl-6 my-8">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                Key Terms:
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Dependent Existence:</strong> An entity that requires
                something else to sustain its existence.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Independent Existence:</strong> A necessary,
                self-sufficient existence that underlies all dependent entities.
              </p>
            </div>
          </section>

          {/* Proof 2 Section */}
          <section id="proof-2" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Proof 2: Necessary Facts Presuppose Existence
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              The most fundamental reality is that existence is undeniable—there
              is no doubt that something exists. This foundational truth is more
              basic than any fact, including necessary facts such as
              mathematical truths. Even statements like "2 + 2 = 4" presuppose
              the existence of something that allows these truths to hold
              meaning.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Core Reasoning:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Premise:
                    </strong>{" "}
                    Existence is presupposed in everything real, including
                    necessary facts.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Reasoning:
                    </strong>{" "}
                    Necessary facts are unchangeable and absolute, yet their
                    truth depends on the existence of reality itself.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Conclusion:
                    </strong>{" "}
                    Since necessary facts presuppose existence, they ultimately
                    depend on it, affirming that existence is the most
                    fundamental category.
                  </span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-green-300 dark:border-green-600 pl-6 my-8">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                Key Terms:
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Existence:</strong> The most fundamental reality, which
                is undeniable and independent of any fact.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Necessary truths:</strong> Facts that are true in every
                possible circumstance but presuppose the existence of reality.
              </p>
            </div>
          </section>

          {/* Proof 3 Section */}
          <section id="proof-3" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Proof 3: Arrangement Indicates a Choosing Agent
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              If something could have been arranged differently in an abstract
              sense, then its current arrangement must be the result of some
              external factor rather than necessity. The universe, as we observe
              it, could have been arranged in countless other ways. Therefore,
              its specific configuration must be attributed to an external
              arranger, rather than being necessary in itself.
            </p>

            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Core Reasoning:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Premise:
                    </strong>{" "}
                    Anything that could be conceived in a different way must
                    have been arranged by something external to it.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Reasoning:
                    </strong>{" "}
                    Since the universe could have had an alternate structure,
                    its current arrangement must be due to a deliberate act of
                    arrangement.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Conclusion:
                    </strong>{" "}
                    This arranger must be independent and necessary in itself,
                    meaning it is not contingent on anything else.
                  </span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-300 dark:border-orange-600 pl-6 my-8">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                Illustrative Analogy:
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Imagine a set of letters—A, B, and C—that can be rearranged in
                different ways. If one specific order exists, it must have been
                chosen by something. Likewise, the universe's specific
                structure, which could have been different, suggests it was
                arranged by an external, independent being.
              </p>
            </div>
          </section>

          {/* Proof 4 Section */}
          <section id="proof-4" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Proof 4: Fine-Tuning of the Universe
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Scientists have discovered that the physical constants and laws of
              our universe are finely tuned to allow life to exist. Even tiny
              changes to these values would make life impossible.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Core Reasoning:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Premise:
                    </strong>{" "}
                    The laws of physics, constants of nature, and stability of
                    the universe are set at precise values that allow life to
                    thrive.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Reasoning:
                    </strong>{" "}
                    Whether this fine-tuning is necessary or contingent, it
                    requires an explanation from a foundation that is not itself
                    contingent.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Conclusion:
                    </strong>{" "}
                    The finely tuned nature of the universe suggests the
                    presence of an underlying, purposeful cause—an independent
                    and necessary entity.
                  </span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-red-300 dark:border-red-600 pl-6 my-8">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                Key Terms:
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Contingent:</strong> Something that depends on certain
                conditions or could be otherwise.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Fine-tuning:</strong> The precise calibration of
                physical constants and laws that make our universe capable of
                supporting life.
              </p>
            </div>
          </section>

          {/* Proof 5 Section */}
          <section id="proof-5" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Proof 5: Causation of Composite Things
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Everything composed of multiple parts—from smartphones to living
              organisms to galaxies—must have been caused by something else. The
              universe itself, being composite, requires an external cause.
            </p>

            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Core Reasoning:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Premise:
                    </strong>{" "}
                    Just as a car is assembled from many parts, the universe is
                    composed of various elements.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Reasoning:
                    </strong>{" "}
                    Since every composite thing is caused by how its parts are
                    arranged, the universe too must have been caused.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Conclusion:
                    </strong>{" "}
                    This cause must be an independent being that is
                    self-sufficient and necessary—not caused by anything else.
                  </span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-amber-300 dark:border-amber-600 pl-6 my-8">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                Real-World Example:
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Consider your smartphone. It's made of various components that
                someone assembled in a specific way. It didn't assemble itself!
                Similarly, the universe, with its billions of galaxies, stars,
                and planets, must have been caused by something beyond itself.
              </p>
            </div>
          </section>

          {/* Arguments for Oneness Divider */}
          <div className="py-8 border-t border-gray-200 dark:border-gray-700 my-16">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
              Arguments for the Oneness of God
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Now that we've established the existence of a necessary Creator,
              let's explore why this Creator must be One.
            </p>
          </div>

          {/* Oneness Argument 1 */}
          <section id="oneness-1" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Argument 1: Uniqueness by Definition
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              A necessary existence, by its very nature, cannot vary or have
              alternatives. It must be exactly as it is in every possible
              scenario.
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Core Reasoning:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Premise:
                    </strong>{" "}
                    If something is truly necessary, it must exist exactly as it
                    is in every possible scenario.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Reasoning:
                    </strong>{" "}
                    If there were two or more necessary beings, each would have
                    some distinguishing feature. But any difference would mean
                    one could have been otherwise, contradicting the idea of
                    necessity.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Conclusion:
                    </strong>{" "}
                    There can only be one unique necessary existence.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Oneness Argument 2 */}
          <section id="oneness-2" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Argument 2: Ultimate Capacity
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              The necessary existence is responsible for everything else, so it
              must have unlimited power or capacity over all things.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Core Reasoning:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Premise:
                    </strong>{" "}
                    An entity that is the cause of all that exists must hold
                    ultimate authority or capacity over the entire cosmos.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Reasoning:
                    </strong>{" "}
                    If this capacity were shared between multiple entities, none
                    could claim full responsibility for creation and maintenance
                    of all things.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Conclusion:
                    </strong>{" "}
                    The necessary existence must be unique in its capacity—it is
                    the only one that holds ultimate control.
                  </span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-300 dark:border-purple-600 pl-6 my-8">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                Real-World Example:
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Consider a national government. It works most effectively when
                there's a single, central authority rather than competing
                powers. Similarly, the universe's perfect coordination suggests
                a single source of ultimate authority.
              </p>
            </div>
          </section>

          {/* Oneness Argument 3 */}
          <section id="oneness-3" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Argument 3: Natural Order
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              The consistent order, stability, and regularity we observe in
              nature point to one organizing agent rather than many competing
              forces.
            </p>

            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Core Reasoning:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Premise:
                    </strong>{" "}
                    Nature exhibits remarkable stability, regularity, and
                    uniformity across different contexts.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Reasoning:
                    </strong>{" "}
                    For such consistent order to exist, there must be a single,
                    unified source arranging the natural world. Multiple
                    competing agents would likely result in chaos or
                    inconsistency.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Conclusion:
                    </strong>{" "}
                    The natural world's ordered structure is best explained by
                    one unique, necessary being acting as the sole arranger.
                  </span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-teal-300 dark:border-teal-600 pl-6 my-8">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                Real-World Example:
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                The laws of physics work the same way throughout the universe.
                Gravity behaves consistently whether on Earth or in distant
                galaxies. This universal consistency suggests a single source of
                order rather than multiple creators with different approaches.
              </p>
            </div>
          </section>

          {/* Conclusion Section */}
          <section id="conclusion" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Conclusion: One Necessary Creator
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              These proofs and arguments lead us to a remarkable conclusion:
              there must be One unique, necessary, and independent Creator
              behind our universe.
            </p>

            <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                What We've Discovered:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      An Independent Being:
                    </strong>{" "}
                    The universe depends on something self-sufficient that
                    doesn't depend on anything else.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      A Necessary Existence:
                    </strong>{" "}
                    This being must exist in all possible scenarios—it cannot
                    not exist.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong className="text-gray-900 dark:text-gray-100">
                      A Singular Creator:
                    </strong>{" "}
                    By necessity and reasoning, this being must be One—unique
                    and without equal.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              These logical proofs don't just suggest the existence of a
              Creator—they point to specific attributes this Creator must have:
              independence, necessity, and oneness. These align remarkably well
              with what many religious traditions have taught about God for
              thousands of years.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              Whether you approach these arguments from a philosophical,
              scientific, or theological perspective, they invite us to consider
              the profound implications of a universe that points beyond itself
              to One necessary Creator.
            </p>

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
        </article>
      </main>

      {/* Clean Footer */}
      {!isDocument && (
        <footer className="border-t border-gray-200 dark:border-gray-700 py-12 mt-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
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
                ← Existence of God
              </Button>
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
                Revisit Oneness of God <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};
