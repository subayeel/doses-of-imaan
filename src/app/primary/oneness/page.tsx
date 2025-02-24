import React from "react";
import Link from "next/link";
import {
  Target,
  Users,
  Layers,
  HelpCircle,
  AlertCircle,
  Check,
  Table,
  ArrowRight,
  Fingerprint,
  Infinity,
} from "lucide-react";

const GodsOneness = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-4 space-y-12">
            <h1 className="text-4xl font-bold mb-8">
              Understanding God&apos;s Oneness
            </h1>

            {/* Introduction Section */}
            <section id="introduction" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <Target className="text-purple-500" />
                Why There Can Only Be One God
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  Now that we&apos;ve established that there must be a Creator,
                  let&apos;s explore why there can only be one Creator and why
                  this Creator must be different from everything in our
                  universe.
                </p>
                <p className="text-lg leading-relaxed">
                  We&apos;re going to use the same common sense approach to
                  understand some important aspects about who God really is.
                  These ideas aren&apos;t complicated - they&apos;re actually
                  quite simple when we think about them step by step.
                </p>
              </div>
            </section>

            {/* Creator vs Creation Section */}
            <section id="creator-nature" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <Layers className="text-blue-500" />
                The Creator Is Not Like Creation
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  One of the first things we can figure out is that the Creator
                  must be fundamentally different from the universe. Think of it
                  this way - the artist is not the painting, the writer is not
                  the book, and the inventor is not the invention.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Why the Creator must be different:
                  </h3>
                  <p className="mb-4">
                    Remember our earlier reasoning - the universe needs a
                    creator because:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <span>
                        The universe couldn&apos;t come from nothing - you
                        can&apos;t get something from nothing, especially
                        something as vast and complex as our universe.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <span>
                        The universe couldn&apos;t create itself - nothing can
                        create itself before it exists!
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Self-Creation Impossibility */}
            <section id="self-creation" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <AlertCircle className="text-orange-500" />
                Could the Universe Create Itself?
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  Think about this for a moment - how could the universe create
                  itself? That would mean it existed before it existed to create
                  itself! It&apos;s a logical impossibility.
                </p>

                <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4">
                    The Phone Example Revisited:
                  </h3>
                  <p className="text-lg">
                    Remember our mobile phone example? Would any rational person
                    believe:
                  </p>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg mt-4">
                    <p>
                      &quot;This phone assembled itself into a working device,
                      organized all its components, wrote its own operating
                      system, and designed its own features.&quot;
                    </p>
                  </div>
                  <p className="mt-4">
                    Of course not! We know complex, functional things require
                    intelligent design.
                  </p>
                </div>
              </div>
            </section>

            {/* Infinite Regression Section */}
            <section id="infinite-regression" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <HelpCircle className="text-red-500" />
                Who Created the Creator?
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  This is where many people get stuck. They ask, &quot;If
                  everything needs a creator, then who created God?&quot;
                  It&apos;s a good question!
                </p>

                <p className="text-lg leading-relaxed">
                  But here&apos;s the logic problem: If we say God was created
                  by another creator, then who created that creator? And who
                  created the creator of the creator? We&apos;d end up in an
                  endless loop, going back forever.
                </p>

                <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4">
                    The Table Lifting Example:
                  </h3>
                  <p className="mb-4">
                    Imagine you want to lift a heavy table, but you can&apos;t
                    do it alone:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                        <Users className="text-blue-500 mb-2" />
                        <p>You ask your friend to help</p>
                      </div>
                      <ArrowRight className="flex-shrink-0" />
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                        <Users className="text-blue-500 mb-2" />
                        <p>
                          Your friend says: &quot;I&apos;ll only help if someone
                          else helps me first&quot;
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                        <Table className="text-blue-500 mb-2" />
                        <p>If this continues forever...</p>
                      </div>
                      <ArrowRight className="flex-shrink-0" />
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                        <AlertCircle className="text-red-500 mb-2" />
                        <p>The table will never be lifted!</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4">
                    Similarly, if every creator needs another creator, nothing
                    would ever get created! But we know the universe exists, so
                    this can&apos;t be right.
                  </p>
                </div>
              </div>
            </section>

            {/* Uncreated Creator Section */}
            <section id="uncreated-creator" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <Infinity className="text-green-500" />
                The Uncreated Creator
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  Using logical reasoning, we arrive at a sensible conclusion:
                  There must be an uncreated Creator - one that wasn&apos;t made
                  or designed but has always existed.
                </p>

                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Qualities of the Uncreated Creator:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Self-sufficient:</strong> While creation depends
                        on other things, the Creator depends on nothing.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Eternal:</strong> While creation has beginnings
                        and endings, the Creator has always existed.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Beyond space and time:</strong> While we&apos;re
                        confined by physical limits, the Creator exists beyond
                        these limitations.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Oneness Section */}
            <section id="oneness" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <Fingerprint className="text-purple-500" />
                Why There Can Only Be One
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  Finally, we come to the question of God&apos;s oneness. Why
                  must there be just one Creator rather than many?
                </p>

                <p className="text-lg leading-relaxed">
                  If there were multiple creators, they would limit each other.
                  Each would have boundaries where their power ends and
                  another&apos;s begins. But this would make them limited beings
                  - more like very powerful created beings rather than the
                  unlimited Creator we&apos;ve been describing.
                </p>

                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4">
                    The Logic of Oneness:
                  </h3>
                  <p className="mb-4">
                    An unlimited, self-sufficient, eternal Creator must be one
                    because:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <span>
                        Multiple creators would limit each other, making none of
                        them truly unlimited
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <span>
                        The perfect order of the universe suggests a single,
                        unified intelligence behind its design
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <span>
                        If multiple creators disagreed, there would be chaos
                        rather than the harmony we observe
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg leading-relaxed">
                  This is why we conclude there is One God - One Creator who
                  designed this universe with perfect balance and harmony.
                </p>
              </div>
            </section>
          </div>

          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-4">Contents</h3>
              <nav className="space-y-2">
                {[
                  { id: "introduction", title: "Introduction", icon: Target },
                  {
                    id: "creator-nature",
                    title: "Creator vs Creation",
                    icon: Layers,
                  },
                  {
                    id: "self-creation",
                    title: "Self-Creation?",
                    icon: AlertCircle,
                  },
                  {
                    id: "infinite-regression",
                    title: "Who Created God?",
                    icon: HelpCircle,
                  },
                  {
                    id: "uncreated-creator",
                    title: "Uncreated Creator",
                    icon: Infinity,
                  },
                  { id: "oneness", title: "God's Oneness", icon: Fingerprint },
                ].map(({ id, title, icon: Icon }) => (
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

export default GodsOneness;
