import React from "react";
import Link from "next/link";
import {
  Target,
  BookOpen,
  Shield,
  FileText,
  Globe,
  Search,
  CheckCircle,
  Zap,
  AlignLeft,
  Check,
  Bookmark,
  Award,
  Clock,
  AlertCircle,
} from "lucide-react";

const WhyTheQuran = () => {
  const contents = [
    { id: "introduction", title: "Introduction", icon: Target },
    {
      id: "preservation",
      title: "Preservation",
      icon: Shield,
    },
    {
      id: "inimitability",
      title: "Inimitability",
      icon: Award,
    },
    {
      id: "clear-message",
      title: "Clear Message",
      icon: CheckCircle,
    },
    {
      id: "universal-message",
      title: "Universal Message",
      icon: Globe,
    },
    {
      id: "falsification-test",
      title: "Authenticity Test",
      icon: Search,
    },
    {
      id: "accuracies",
      title: "Remarkable Accuracies",
      icon: Zap,
    },
    {
      id: "conclusion",
      title: "Conclusion",
      icon: CheckCircle,
    },
  ];
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-4 space-y-12">
            <h1 className="text-4xl font-bold mb-8">
              Why the Quran is Divine Revelation
            </h1>

            {/* Introduction Section */}
            <section id="introduction" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <Target className="text-purple-500" />
                Our Guide for Life
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  Let&apos;s think about something we all do. When you buy a new
                  phone or appliance, what&apos;s always included in the box? An
                  instruction manual, right? It shows you how to use it
                  properly, what to do and what not to do, and all the important
                  warnings.
                </p>
                <p className="text-lg leading-relaxed">
                  In a similar way, we believe God has sent us an instruction
                  manual for life - the Quran. It guides us on how to live, what
                  to do and avoid, and gives us important warnings and
                  recommendations for our journey through life.
                </p>
                <p className="text-lg leading-relaxed">
                  But why should we believe the Quran is actually from God?
                  Let&apos;s explore some really fascinating reasons that might
                  surprise you!
                </p>
              </div>
            </section>

            {/* Preservation Section */}
            <section id="preservation" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <Shield className="text-green-500" />
                Remarkably Preserved
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  One of the most amazing things about the Quran is how
                  perfectly it&apos;s been preserved over 1,400 years. The Quran
                  itself makes a bold promise about this:
                </p>

                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg my-6">
                  <p className="italic text-center text-xl mb-2">
                    &quot;It is certainly We Who have revealed the Reminder [the
                    Quran], and it is certainly We Who will preserve it.&quot;
                  </p>
                  <p className="text-right">— Quran 15:9</p>
                </div>

                <p className="text-lg leading-relaxed">
                  This isn&apos;t just a claim - it&apos;s a reality you can
                  verify yourself! You could pick up a copy of the Quran from
                  anywhere in the world today and compare it with manuscripts
                  dating back to within thirty years after Prophet
                  Muhammad&apos;s time, and you&apos;d find the text to be
                  exactly the same (apart from writing style and pronunciation
                  marks).
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Bookmark className="text-blue-500" />
                    Two ways the Quran is preserved:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                        <FileText className="text-purple-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Written preservation:</strong> Identical
                          manuscripts exist from the earliest Islamic period,
                          with careful systems to ensure accuracy.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                        <BookOpen className="text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Memorization:</strong> Millions of people
                          worldwide, speaking countless languages, have
                          memorized the entire Quran word for word - something
                          not seen with any other book in history.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Inimitability Section */}
            <section id="inimitability" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <Award className="text-yellow-500" />
                Impossible to Imitate
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  The Quran presents an interesting challenge to anyone who
                  doubts its divine origin:
                </p>

                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg my-6">
                  <p className="italic text-center text-xl mb-2">
                    &quot;And if you all are in doubt about what I have revealed
                    to My servant, bring a single chapter like it, and call your
                    witnesses besides God if you are truthful.&quot;
                  </p>
                  <p className="text-right">— Quran 2:23</p>
                </div>

                <p className="text-lg leading-relaxed">
                  This challenge is fascinating because the shortest chapter in
                  the Quran is just three verses long (Surah al-Kawthar). How
                  hard could it be to write three lines?
                </p>

                <p className="text-lg leading-relaxed">
                  Well, the people who received this challenge were the Arabs of
                  that time - master poets and linguistic experts who took
                  immense pride in their language skills. Yet many of them
                  embraced Islam just from hearing the Quran being recited.
                  Despite their expertise, they couldn&apos;t meet this
                  seemingly simple challenge.
                </p>

                <p className="text-lg leading-relaxed">
                  The unique literary style of the Quran - neither poetry nor
                  prose but something entirely distinct - continues to captivate
                  listeners, even those who don&apos;t understand Arabic often
                  find its recitation moving and powerful.
                </p>
              </div>
            </section>

            {/* Clear Message Section */}
            <section id="clear-message" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <CheckCircle className="text-blue-500" />A Clear Message About
                God
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  Remember our earlier discussions about the nature of God? How
                  reason tells us there must be One Creator unlike creation? The
                  Quran&apos;s description of God perfectly matches what we can
                  understand through rational thinking:
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4">
                    How the Quran describes God:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>One without partners:</strong> &quot;Say: He is
                        God, the One and Alone&quot; (Quran 112:1)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Creator of everything:</strong> &quot;God is the
                        Creator of all things&quot; (Quran 39:62)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Everything depends on Him:</strong> &quot;O
                        humanity! It is you who stand in need of God, while God
                        is the Self-Sufficient, the Praiseworthy&quot; (Quran
                        35:15)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Entirely unique:</strong> &quot;There is nothing
                        like Him&quot; (Quran 42:11)
                      </div>
                    </li>
                  </ul>
                </div>

                <p className="text-lg leading-relaxed">
                  A beautiful summary of this concept is found in the short
                  chapter called Surah Al-Ikhlas:
                </p>

                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg my-6">
                  <p className="italic text-center text-xl">
                    &quot;Say: He is God, the One and Alone, God the one whom
                    everything needs and who Himself needs nothing, He is not
                    born, nor does He beget, and there is nothing that can be
                    compared to Him.&quot;
                  </p>
                  <p className="text-right">— Quran 112:1-4</p>
                </div>
              </div>
            </section>

            {/* Universal Message Section */}
            <section id="universal-message" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <Globe className="text-purple-500" />A Message for Everyone
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  Another remarkable aspect of the Quran is its universal
                  message. It&apos;s not meant for just one tribe, nation, or
                  time period - it speaks to all of humanity across all ages.
                </p>

                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4">
                    The Quran&apos;s universal values:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <span>Be fair and just (16:90)</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <span>Honor your parents (17:23)</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <span>Be good to neighbors (4:36)</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <span>Saving lives is sacred (5:32)</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <span>Don&apos;t be prideful (17:37)</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <span>Don&apos;t cheat or steal (17:35)</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed">
                  These values aren&apos;t tied to any specific culture or time
                  period - they&apos;re universal principles that make sense for
                  creating a balanced, healthy society no matter where or when
                  you live. Isn&apos;t it interesting that these align with what
                  most of us already feel is right?
                </p>
              </div>
            </section>

            {/* Falsification Test Section */}
            <section id="falsification-test" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <Search className="text-red-500" />
                The Quran&apos;s Own Test of Authenticity
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  The Quran doesn&apos;t shy away from scrutiny. In fact, it
                  offers its own test to determine if it&apos;s really from God:
                </p>

                <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg my-6">
                  <p className="italic text-center text-xl mb-2">
                    &quot;Do they not then consider the Quran carefully? Had it
                    been from other than Allah, they would surely have found
                    therein contradictions in abundance&quot;
                  </p>
                  <p className="text-right">— Quran 4:82</p>
                </div>

                <p className="text-lg leading-relaxed">
                  This is a powerful challenge! The Quran was revealed over 23
                  years, addressing countless topics from theology to law, from
                  personal conduct to cosmic events. For a human author to
                  maintain perfect consistency across such a vast range of
                  subjects over such a long period would be extremely difficult.
                </p>

                <p className="text-lg leading-relaxed">
                  This challenge invites readers to examine the Quran
                  critically, searching for contradictions or inconsistencies -
                  a level of confidence that suggests it knows it will pass such
                  examination.
                </p>
              </div>
            </section>

            {/* Accuracies Section */}
            <section id="accuracies" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <Zap className="text-orange-500" />
                Remarkable Accuracies
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  The Quran contains statements about history, science, and the
                  natural world that are remarkably accurate - especially
                  considering the time and place it was revealed.
                </p>

                <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Historical accuracies:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                        <Clock className="text-blue-500 flex-shrink-0" />
                        <div>
                          <strong>Ancient Egyptian titles:</strong> The Quran
                          correctly refers to the ruler in Joseph&apos;s time as
                          a &quot;King&quot; but in Moses&apos; time as
                          &quot;Pharaoh&quot; - matching what we now know from
                          historical records.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                        <AlignLeft className="text-purple-500 flex-shrink-0" />
                        <div>
                          <strong>Multilayered descriptions:</strong> The Quran
                          describes natural phenomena in ways that made sense to
                          ancient audiences but also align with modern
                          discoveries.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed">
                  For example, consider how the Quran describes the origins of
                  the universe:
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-6">
                  <p className="italic text-center text-xl mb-2">
                    &quot;Do the disbelievers not realize that the heavens and
                    earth were once one mass then We split them apart?&quot;
                  </p>
                  <p className="text-right">— Quran 21:30</p>
                </div>

                <p className="text-lg leading-relaxed">
                  For a 7th century audience, this description made sense, but
                  for us today, it also aligns with our understanding of the
                  universe beginning from a singularity (what scientists call
                  the Big Bang).
                </p>

                <p className="text-lg leading-relaxed">
                  Similarly, the Quran&apos;s description of embryonic
                  development uses the Arabic word &quot;alaqah&quot; - which
                  can mean a clinging substance, a leech-like structure, or a
                  blood clot. When we look at an embryo around days 22-25, it
                  does indeed resemble a leech and is clinging to the uterine
                  wall!
                </p>

                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <AlertCircle className="text-yellow-500" />A balanced view:
                  </h3>
                  <p className="text-lg">
                    Remember, the Quran isn&apos;t meant to be a science
                    textbook - it&apos;s a book of guidance. These fascinating
                    alignments with modern knowledge are signs for reflection,
                    not scientific claims. Science constantly evolves with new
                    discoveries, while the Quran&apos;s purpose is to invite us
                    to contemplate the Creator&apos;s wisdom and power.
                  </p>
                </div>
              </div>
            </section>

            {/* Conclusion Section */}
            <section id="conclusion" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <CheckCircle className="text-green-500" />
                Bringing It All Together
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  When we look at all these aspects together - the Quran&apos;s
                  perfect preservation, its inimitable style, its clear and
                  consistent message about God, its universal values, its
                  invitation to scrutiny, and its remarkable accuracies - a
                  compelling picture emerges.
                </p>

                <p className="text-lg leading-relaxed">
                  These qualities suggest that the Quran isn&apos;t just another
                  book written by humans, but rather a divine revelation - our
                  instruction manual for life from the Creator Himself.
                </p>

                <p className="text-lg leading-relaxed">
                  Just as we would trust the manufacturer&apos;s guide to show
                  us how to use our devices properly, the Quran offers guidance
                  on how to live our lives in accordance with our Creator&apos;s
                  wisdom and purpose.
                </p>
              </div>
            </section>
          </div>

          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-4">Contents</h3>
              <nav className="space-y-2">
                {contents.map(({ id, title, icon: Icon }) => (
                  <Link
                    key={id}
                    href={`#${id}`}
                    className={`flex items-center gap-2 p-2 rounded-md transition-colors `}
                  >
                    <Icon size={16} />
                    {title}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTheQuran;
