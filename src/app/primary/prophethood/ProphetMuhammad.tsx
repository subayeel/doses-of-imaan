/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Check, ArrowUp, ArrowRight, ArrowLeft, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProphetMuhammadProps {
  isDocument: boolean;
}
export const ProphetMuhammad = ({
  isDocument = false,
}: ProphetMuhammadProps) => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contents = useMemo(() => {
    return [
      {
        id: "introduction",
        title: "Understanding the Claim",
      },
      {
        id: "lying",
        title: "Was He Lying?",
      },
      {
        id: "deluded",
        title: "Was He Deluded?",
      },
      {
        id: "truthful",
        title: "He Was Truthful",
      },
      {
        id: "conclusion",
        title: "A Messenger for Humanity",
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
              Module 4: Was Muhammad ﷺ a Messenger of God?
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
            Explore the logical analysis of Prophet Muhammad's claim to
            prophethood
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
            <h2 className="text-2xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Understanding the Prophet's Claim
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Let's explore something really important—how we can know if
              Prophet Muhammad ﷺ was truly sent by God. If you've already seen
              how the Quran is divine, this becomes simpler, because the Quran
              clearly states:
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 my-8 border-l-4 border-purple-300 dark:border-purple-600">
              <p className="italic text-xl text-center mb-2 text-gray-700 dark:text-gray-300">
                "Say, [O Muhammad], 'O mankind, indeed I am the Messenger of
                Allah to you all.'"
              </p>
              <p className="text-right text-gray-600 dark:text-gray-400">
                — Quran 7:158
              </p>
            </div>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              But let's take a different approach too. When someone makes a big
              claim like being a prophet, there are really only three
              possibilities to consider:
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  He was lying
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  He knew he wasn't a prophet but claimed to be one anyway
                </p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  He was mistaken
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  He genuinely thought he was a prophet but was confused or
                  deluded
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <Check
                    className="text-green-600 dark:text-green-400"
                    size={16}
                  />
                  He was truthful
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  He was actually chosen by God as a messenger
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Let's examine each possibility logically and see which one makes
              the most sense. This approach helps us think critically about this
              important question!
            </p>
          </section>

          {/* Was He Lying Section */}
          <section id="lying" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Was He Lying?
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Let's look at what we know about Muhammad's character ﷺ,
              especially before he claimed to be a prophet:
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                His reputation before prophethood:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    He was known as "Al-Sadiq Al-Amin" (The Truthful, The
                    Trustworthy) among his people
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    He avoided the common vices of his society (like idol
                    worship, drinking, and gambling)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    He was known for caring for orphans, the elderly, and
                    helping his community
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Even his enemies acknowledged his honesty! Consider this
              fascinating historical account:
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 my-8 border-l-4 border-yellow-300 dark:border-yellow-600">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                The Abu Sufyan Incident
              </h3>
              <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                Abu Sufyan was a strong opponent of Muhammad ﷺ at the time. When
                he met Heraclius (the Roman Emperor), he was asked several
                questions about Muhammad ﷺ, including:
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 my-4">
                <p className="italic text-gray-700 dark:text-gray-300 mb-2">
                  "Have you ever accused him of telling lies before his claim to
                  be a prophet?"
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Abu Sufyan answered: "No."
                </p>
                <p className="italic text-gray-600 dark:text-gray-400 text-sm">
                  (Later, Abu Sufyan admitted, "If I had not been afraid of my
                  companions labeling me a liar, I would not have spoken the
                  truth about Muhammad ﷺ.")
                </p>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Heraclius concluded: "I asked whether he was ever accused of
                telling lies before he said what he said, and your reply was in
                the negative. So I wondered how a person who does not tell a lie
                about others could ever tell a lie about God."
              </p>
              <p className="text-right text-sm mt-2 text-gray-600 dark:text-gray-400">
                (Recorded in Sahih Bukhari)
              </p>
            </div>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Let's also consider what people typically lie for:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  What did he gain?
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Lived simply, not luxuriously</li>
                  <li>• Mended his own shoes and clothes</li>
                  <li>• Ate basic meals</li>
                  <li>• Left minimal possessions when he passed away</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  What did he endure?
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Persecution and mockery</li>
                  <li>• Social boycott for 3 years</li>
                  <li>• Physical attacks</li>
                  <li>• Forced exile from his hometown</li>
                </ul>
              </div>
            </div>

            <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
              He even refused generous offers to stop preaching! The leaders of
              Mecca once offered him wealth, women, and power if he would just
              stop spreading his message. He refused without hesitation.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              When we consider all this evidence, the "he was lying" explanation
              starts to make less and less sense.
            </p>
          </section>

          {/* Was He Deluded Section */}
          <section id="deluded" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Was He Mistaken or Deluded?
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Could Muhammad ﷺ have sincerely but mistakenly believed he was a
              prophet? Let's think about what this would mean:
            </p>

            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                What Muhammad ﷺ brought:
              </h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <strong className="text-gray-900 dark:text-gray-100">
                    A complete system for life:
                  </strong>
                  <span className="text-gray-700 dark:text-gray-300">
                    {" "}
                    Including laws about family, economics, diet, hygiene,
                    social relations, and spiritual practices—all still
                    benefiting millions today
                  </span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <strong className="text-gray-900 dark:text-gray-100">
                    Accurate prophecies:
                  </strong>
                  <span className="text-gray-700 dark:text-gray-300">
                    {" "}
                    Such as "barefooted bedouins competing in building tall
                    buildings"—which we see fulfilled today with skyscrapers in
                    the Arabian Peninsula
                  </span>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <strong className="text-gray-900 dark:text-gray-100">
                    Consistent character:
                  </strong>
                  <span className="text-gray-700 dark:text-gray-300">
                    {" "}
                    He remained honest, humble, and principled throughout his
                    life, never showing signs of mental instability
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Let's also consider a specific incident that reveals his
              character:
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-8 border-l-4 border-blue-300 dark:border-blue-600">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                The Solar Eclipse Incident
              </h3>
              <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                When Muhammad's ﷺ young son Ibrahim died, there happened to be a
                solar eclipse on the same day. Many people thought this was a
                divine sign mourning the death of the Prophet's son.
              </p>
              <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                If Muhammad ﷺ was deluded or dishonest, this would have been a
                perfect opportunity to reinforce his claim to prophethood.
                Instead, he gathered people and said:
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 my-4">
                <p className="italic text-center text-xl text-gray-700 dark:text-gray-300">
                  "The sun and the moon do not eclipse because of the death of
                  someone from the people, but they are two signs amongst the
                  signs of God. When you see them, stand up and pray."
                </p>
                <p className="text-right text-sm mt-2 text-gray-600 dark:text-gray-400">
                  Sahih al-Bukhari, Book 18, Number 154
                </p>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                He rejected the chance to use this coincidence for personal
                gain, instead teaching scientific accuracy and focusing on God
                alone.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              When we consider the consistency, complexity, and lasting impact
              of his teachings, along with his rational behavior in moments
              where a deluded person would likely act differently, this
              explanation also becomes increasingly unlikely.
            </p>
          </section>

          {/* Was He Truthful Section */}
          <section id="truthful" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              The Conclusion: He Was Truthful
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              When we've carefully examined the first two possibilities and
              found them inadequate to explain the historical facts, we're left
              with the third option—that Muhammad ﷺ was indeed telling the truth
              about being God's messenger.
            </p>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Consider all we've discussed:
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                The evidence points to truth:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">
                      His impeccable character
                    </strong>{" "}
                    — Known for honesty before and after prophethood, even by
                    his enemies
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">
                      No personal benefit
                    </strong>{" "}
                    — He faced hardship and lived simply despite opportunities
                    for wealth and power
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">
                      The coherence of his message
                    </strong>{" "}
                    — A comprehensive system that continues to benefit humanity
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">
                      His rational behavior
                    </strong>{" "}
                    — Even in situations where a liar or deluded person would
                    likely act differently
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">
                      Fulfilled prophecies
                    </strong>{" "}
                    — Predictions that have come true long after his lifetime
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              The most reasonable conclusion, when we eliminate the
              alternatives, is that Muhammad ﷺ was indeed what he claimed to
              be—a messenger chosen by God to deliver divine guidance to
              humanity.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              This perspective aligns with what the Quran says about him and
              explains why his message has had such a profound and lasting
              impact on human history.
            </p>
          </section>

          {/* Conclusion Section */}
          <section id="conclusion" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              A Messenger for Humanity
            </h2>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              When we look at Muhammad's life ﷺ, his character, his message, and
              the impact he's had on history, the evidence points to the truth
              of his claim to be God's messenger.
            </p>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              His message wasn't just for people of his time or region—it was
              meant for all of humanity. The Quran states:
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 my-8 border-l-4 border-purple-300 dark:border-purple-600">
              <p className="italic text-center text-xl mb-2 text-gray-700 dark:text-gray-300">
                "And We have not sent you, [O Muhammad], except as a mercy to
                the worlds."
              </p>
              <p className="text-right text-gray-600 dark:text-gray-400">
                — Quran 21:107
              </p>
            </div>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              By recognizing Muhammad ﷺ as God's messenger, we open ourselves to
              learning from his teachings and example—guidance that has
              positively transformed countless lives throughout history and
              continues to do so today.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              His life and character stand as a practical demonstration of the
              Quran's teachings in action, showing us how to implement divine
              guidance in our daily lives.
            </p>
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
                onClick={() => (window.location.href = "/primary/quran")}
                className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <ArrowLeft size={16} className="mr-2" /> Revisit Quran
              </Button>
              <Button
                variant="outline"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <ArrowUp size={16} className="mr-2" /> Back to Top
              </Button>
              <Button
                onClick={() => (window.location.href = "/religion/islam")}
                className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                Explore Islam <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};
