import React from "react";
import Link from "next/link";
import {
  Target,
  HelpCircle,
  AlertCircle,
  Check,
  MessageCircle,
  Book,
  Compass,
  Heart,
  Home,
  Map,
  MessageSquare,
  Lightbulb,
  ArrowRight,
  Logs,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const NeedForRevelation = () => {
  const contents = [
    { id: "introduction", title: "Introduction", icon: Target },
    {
      id: "needs-fulfilled",
      title: "Our Needs",
      icon: Heart,
    },
    {
      id: "big-questions",
      title: "Big Questions",
      icon: HelpCircle,
    },
    {
      id: "divine-explanation",
      title: "Divine Explanations",
      icon: Lightbulb,
    },
    {
      id: "gods-communication",
      title: "God's Communication",
      icon: MessageCircle,
    },
    {
      id: "prophets",
      title: "Why Prophets?",
      icon: MessageSquare,
    },
  ];
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-4 space-y-12">
            <h1 className="text-4xl font-bold mb-8">
              Why We Need Divine Guidance
            </h1>

            {/* Introduction Section */}
            <section id="introduction" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <Target className="text-purple-500" />
                The Next Step in Our Journey
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  Now that we&apos;ve explored God&apos;s existence and oneness,
                  let&apos;s talk about something really fascinating - why would
                  this Creator want to communicate with us at all?
                </p>
                <p className="text-lg leading-relaxed">
                  Think about it this way: if you created something amazing,
                  wouldn&apos;t you want to explain how it works and what
                  it&apos;s for? Let&apos;s explore why revelation and prophets
                  make perfect sense once we understand there&apos;s One
                  Creator.
                </p>
              </div>
            </section>

            {/* Every Need Fulfilled Section */}
            <section id="needs-fulfilled" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <Heart className="text-red-500" />A Creator Who Meets Our Every
                Need
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  Have you ever noticed how perfectly our world is set up to
                  meet our needs? It&apos;s quite remarkable when you think
                  about it!
                </p>

                <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Our needs are beautifully provided for:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Physical needs:</strong> We need food, water,
                        and air - and look around, they&apos;re all available to
                        us!
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Emotional needs:</strong> We&apos;re wired for
                        love, friendship, and connection - and we have the
                        ability to form these relationships.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Intellectual needs:</strong> We&apos;re curious
                        creatures with minds that crave knowledge - and we live
                        in a universe that can be explored and understood.
                      </div>
                    </li>
                  </ul>
                  <p className="mt-4">
                    So here&apos;s a thought: If our Creator has provided for
                    all these needs, wouldn&apos;t it make sense that He&apos;d
                    also provide for our spiritual and existential needs too?
                  </p>
                </div>
              </div>
            </section>

            {/* Big Questions Section */}
            <section id="big-questions" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <HelpCircle className="text-blue-500" />
                The Big Questions We All Ask
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  Have you ever found yourself staring at the ceiling at night,
                  wondering about the big questions in life? You&apos;re
                  definitely not alone!
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Questions we all wonder about:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="flex items-center gap-2">
                        <Compass className="text-purple-500 flex-shrink-0" />
                        <span>What&apos;s the purpose of our existence?</span>
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="flex items-center gap-2">
                        <AlertCircle className="text-orange-500 flex-shrink-0" />
                        <span>Why is there suffering in the world?</span>
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="flex items-center gap-2">
                        <Map className="text-green-500 flex-shrink-0" />
                        <span>Where are we heading in this life?</span>
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="flex items-center gap-2">
                        <Home className="text-blue-500 flex-shrink-0" />
                        <span>Is there life after death?</span>
                      </p>
                    </div>
                  </div>
                  <p className="mt-4">
                    These aren&apos;t just random curiosities - they&apos;re
                    deep, meaningful questions that shape how we live our lives.
                    But how can we find reliable answers?
                  </p>
                </div>
              </div>
            </section>

            {/* Need for Divine Explanation Section */}
            <section id="divine-explanation" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <Lightbulb className="text-yellow-500" />
                Some Things Only God Can Explain
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  Let&apos;s talk about something we all struggle with - the
                  question of suffering. Why do bad things happen to good
                  people? Why is there pain in the world?
                </p>

                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4">
                    The Problem of Suffering:
                  </h3>
                  <p className="mb-4">
                    When we think about suffering, it&apos;s important to
                    remember a few things:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <span>
                        The existence of suffering doesn&apos;t disprove God -
                        we&apos;ve already established logical reasons why God
                        exists.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <span>
                        This question is often more emotional than logical -
                        it&apos;s about understanding, not proving.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <span>
                        The only way to truly know the purpose behind suffering
                        is if the Creator explains it to us.
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg leading-relaxed">
                  This is just one example where human reasoning alone
                  can&apos;t give us complete answers. Our minds are amazing,
                  but limited. Just like a smartphone user needs the
                  manufacturer&apos;s guide to fully understand all its
                  features, we need guidance from our Creator to understand
                  life&apos;s deepest aspects.
                </p>
              </div>
            </section>

            {/* God's Communication Section */}
            <section id="gods-communication" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <MessageCircle className="text-green-500" />
                Why Would God Talk To Us?
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  Think about it - if you created something special,
                  wouldn&apos;t you want to explain how it works? There are so
                  many good reasons why God would communicate with us!
                </p>

                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Why God would send revelation:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                        <Compass className="text-blue-500 flex-shrink-0" />
                        <p>To explain our purpose - why we&apos;re here</p>
                      </div>
                      <ArrowRight className="flex-shrink-0 hidden md:block" />
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                        <Heart className="text-red-500 flex-shrink-0" />
                        <p>To teach us how to have a relationship with Him</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                        <Book className="text-purple-500 flex-shrink-0" />
                        <p>To give us guidance on how to live our best life</p>
                      </div>
                      <ArrowRight className="flex-shrink-0 hidden md:block" />
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                        <MessageSquare className="text-yellow-500 flex-shrink-0" />
                        <p>To explain what happens after death</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed">
                  It makes perfect sense that God would want to communicate with
                  us - not just to tell us He exists, but to help us understand
                  who He is, what He wants from us, and how we can live in
                  harmony with His design.
                </p>
              </div>
            </section>

            {/* Prophets Section */}
            <section id="prophets" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <MessageSquare className="text-purple-500" />
                Why Prophets Make Perfect Sense
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  If God wants to communicate with humanity, what would be the
                  most effective way? Through other humans who can explain,
                  demonstrate, and relate to us!
                </p>

                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Why prophets are the perfect messengers:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <span>
                        They can explain divine guidance in ways we understand
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <span>
                        They can demonstrate what it looks like to live by
                        God&apos;s guidance
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <span>
                        They can answer questions and clarify misunderstandings
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <span>
                        They provide a living example that we can relate to and
                        follow
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg leading-relaxed">
                  This is why the concept of prophets and divine revelation
                  makes so much sense. Once we understand there is One Creator
                  who designed everything with purpose, it&apos;s natural to
                  conclude that this Creator would guide us through revelation
                  and messengers.
                </p>

                <p className="text-lg leading-relaxed">
                  This brings us to the Quran and Prophet Muhammad ﷺ. Having
                  established the need for divine guidance, we can now explore
                  why Islam offers the most compelling answers to life&apos;s
                  biggest questions.
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
          <div className="lg:hidden fixed bottom-6 right-6">
            <Popover>
              <PopoverTrigger asChild>
                <Button className="rounded-full h-10 w-10 shadow-lg bg-black text-white dark:bg-gray-100 dark:text-black">
                  <Logs size={24} />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                <h3 className="font-semibold mb-2">Contents</h3>
                <nav className="space-y-2">
                  {contents.map(({ id, title, icon: Icon }) => (
                    <Link
                      key={id}
                      href={`#${id}`}
                      className="flex items-center gap-2 p-2 rounded-md transition-colors"
                    >
                      <Icon size={16} />
                      {title}
                    </Link>
                  ))}
                </nav>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedForRevelation;
