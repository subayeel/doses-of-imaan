/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Check, ArrowRight, ArrowUp, ArrowLeft, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NeedForRevelationProps {
  isDocument: boolean;
}
export const NeedForRevelation = ({
  isDocument = false,
}: NeedForRevelationProps) => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contents = useMemo(() => {
    return [
      {
        id: "introduction",
        title: "Introduction",
      },
      {
        id: "needs-fulfilled",
        title: "Our Needs",
      },
      {
        id: "big-questions",
        title: "Big Questions",
      },
      {
        id: "divine-explanation",
        title: "Divine Explanations",
      },
      {
        id: "gods-communication",
        title: "God's Communication",
      },
      {
        id: "prophets",
        title: "Why Prophets?",
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
              Why We Need Divine Guidance
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
            Exploring the necessity of revelation and why the Creator would
            communicate with us
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
              The Next Step in Our Journey
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Now that we've explored God's existence and oneness, let's talk
              about something really fascinating—why would this Creator want to
              communicate with us at all?
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Think about it this way: if you created something amazing,
              wouldn't you want to explain how it works and what it's for? Let's
              explore why revelation and prophets make perfect sense once we
              understand there's One Creator.
            </p>
          </section>

          {/* Every Need Fulfilled Section */}
          <section id="needs-fulfilled" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              A Creator Who Meets Our Every Need
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Have you ever noticed how perfectly our world is set up to meet
              our needs? It's quite remarkable when you think about it!
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Our needs are beautifully provided for:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Physical needs:
                    </strong>{" "}
                    We need food, water, and air—and look around, they're all
                    available to us!
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Emotional needs:
                    </strong>{" "}
                    We're wired for love, friendship, and connection—and we have
                    the ability to form these relationships.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Intellectual needs:
                    </strong>{" "}
                    We're curious creatures with minds that crave knowledge—and
                    we live in a universe that can be explored and understood.
                  </div>
                </li>
              </ul>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                So here's a thought: If our Creator has provided for all these
                needs, wouldn't it make sense that He'd also provide for our
                spiritual and existential needs too?
              </p>
            </div>
          </section>

          {/* Big Questions Section */}
          <section id="big-questions" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              The Big Questions We All Ask
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Have you ever found yourself staring at the ceiling at night,
              wondering about the big questions in life? You're definitely not
              alone!
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Questions we all wonder about:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    What's the purpose of our existence?
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    Why is there suffering in the world?
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    Where are we heading in this life?
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    Is there life after death?
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                These aren't just random curiosities—they're deep, meaningful
                questions that shape how we live our lives. But how can we find
                reliable answers?
              </p>
            </div>
          </section>

          {/* Need for Divine Explanation Section */}
          <section id="divine-explanation" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Some Things Only God Can Explain
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Let's talk about something we all struggle with—the question of
              suffering. Why do bad things happen to good people? Why is there
              pain in the world?
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                The Problem of Suffering:
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                When we think about suffering, it's important to remember a few
                things:
              </p>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    The existence of suffering doesn't disprove God—we've
                    already established logical reasons why God exists.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    This question is often more emotional than logical—it's
                    about understanding, not proving.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    The only way to truly know the purpose behind suffering is
                    if the Creator explains it to us.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              This is just one example where human reasoning alone can't give us
              complete answers. Our minds are amazing, but limited. Just like a
              smartphone user needs the manufacturer's guide to fully understand
              all its features, we need guidance from our Creator to understand
              life's deepest aspects.
            </p>
          </section>

          {/* God's Communication Section */}
          <section id="gods-communication" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Why Would God Talk To Us?
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Think about it—if you created something special, wouldn't you want
              to explain how it works? There are so many good reasons why God
              would communicate with us!
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Why God would send revelation:
              </h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300">
                      To explain our purpose—why we're here
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300">
                      To teach us how to have a relationship with Him
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300">
                      To give us guidance on how to live our best life
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300">
                      To explain what happens after death
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              It makes perfect sense that God would want to communicate with
              us—not just to tell us He exists, but to help us understand who He
              is, what He wants from us, and how we can live in harmony with His
              design.
            </p>
          </section>

          {/* Prophets Section */}
          <section id="prophets" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Why Prophets Make Perfect Sense
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              If God wants to communicate with humanity, what would be the most
              effective way? Through other humans who can explain, demonstrate,
              and relate to us!
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Why prophets are the perfect messengers:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    They can explain divine guidance in ways we understand
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    They can demonstrate what it looks like to live by God's
                    guidance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    They can answer questions and clarify misunderstandings
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    They provide a living example that we can relate to and
                    follow
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              This is why the concept of prophets and divine revelation makes so
              much sense. Once we understand there is One Creator who designed
              everything with purpose, it's natural to conclude that this
              Creator would guide us through revelation and messengers.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              This brings us to the Quran and Prophet Muhammad ﷺ. Having
              established the need for divine guidance, we can now explore why
              Islam offers the most compelling answers to life's biggest
              questions.
            </p>
          </section>
        </article>
      </main>

      {/* Clean Footer */}
      {!isDocument && (
        <footer className="border-t border-gray-200 dark:border-gray-700 py-12 mt-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-xl  font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Journey to Understanding
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              May we all seek divine guidance in our lives, finding purpose and
              meaning through the Creator's message.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => (window.location.href = "/primary/oneness")}
                className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <ArrowLeft size={16} className="mr-2" /> Revisit oneness of God
              </Button>
              <Button
                variant="outline"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <ArrowUp size={16} className="mr-2" /> Back to Top
              </Button>
              <Button
                onClick={() => (window.location.href = "/primary/quran")}
                className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                Is Quran from God? <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};
