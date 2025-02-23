import React from "react";
import Link from "next/link";
import {
  Phone,
  Sun,
  Wind,
  Zap,
  AlertCircle,
  Check,
  BookOpen,
  Target,
  Brain,
  Settings,
  X,
} from "lucide-react";

const GodExistence = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-4 space-y-12">
            <h1 className="text-4xl font-bold mb-8">
              Understanding God&apos;s Existence Through Reason
            </h1>

            {/* Premise Section */}
            <section id="premise" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <BookOpen className="text-blue-500" />
                The Premise of Our Discussion
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  The foundation of our discussion rests on a simple yet
                  profound premise: the best way to make sense of the world
                  around us is through common sense and reason. This isn&apos;t
                  just a arbitrary choice - it&apos;s a practical necessity.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Alternative Methods People Often Use:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <AlertCircle className="text-yellow-500" size={20} />
                      Feelings and emotions
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="text-yellow-500" size={20} />
                      Dreams and personal experiences
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="text-yellow-500" size={20} />
                      Ancestral wisdom (&quot;My grandfather said so&quot;)
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="text-yellow-500" size={20} />
                      Spiritual experiences
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="text-yellow-500" size={20} />
                      Signs and miracles
                    </li>
                  </ul>
                </div>

                <p className="text-lg leading-relaxed">
                  The fundamental problem with these alternative methods is
                  their subjective nature. Anyone can claim to have had a
                  transformative spiritual experience or a compelling feeling,
                  but these personal experiences can&apos;t serve as universal
                  proof.
                </p>
              </div>
            </section>

            {/* Common Sense Section */}
            <section id="common-sense" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <Brain className="text-green-500" />
                The Power of Common Sense
              </h2>
              <p className="text-lg leading-relaxed">
                It is something that is universal and common! It’s something we
                can all agree on, it’s what people agree is the best thing to
                use to make decisions in their everyday lives and also by and
                large, it’s objective, not subjective.{" "}
              </p>
              <div className="prose dark:prose-invert max-w-none">
                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">
                    The Red Underpants Analogy
                  </h3>
                  <p className="text-lg leading-relaxed">
                    Imagine this scenario: A man wearing nothing but red
                    underpants knocks on your door, claiming to be the
                    electricity meter reader. How would you react? Would you:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <X className="text-red-500" />
                      Simply believe him without question?
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="text-red-500" />
                      Just &apos;have faith&apos; in his claim?
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-500" />
                      Use reason and common sense to assess the situation?
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Design Argument Section */}
            <section id="design-argument" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <Phone className="text-purple-500" />
                The Design Argument
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">
                    The Mobile Phone Example
                  </h3>
                  <div className="space-y-4">
                    <p className="text-lg leading-relaxed">
                      Consider your mobile phone. At its core, it&apos;s made of
                      simple elements:
                    </p>
                    <ul className="space-y-2">
                      <li>Plastic (derived from oil)</li>
                      <li>Glass and silicon (from sand)</li>
                      <li>Precious metals</li>
                    </ul>
                    <p className="text-lg leading-relaxed">
                      Now, imagine finding a mobile phone in the Arabian desert.
                      Would you believe it formed naturally through:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                        <Wind className="text-blue-500 mb-2" />
                        <p>Wind blowing</p>
                      </div>
                      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                        <Sun className="text-yellow-500 mb-2" />
                        <p>Sun shining</p>
                      </div>
                      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                        <Zap className="text-orange-500 mb-2" />
                        <p>Lightning striking</p>
                      </div>
                    </div>

                    <p className="text-lg leading-relaxed">
                      Of course not! The complexity of the phone&apos;s design
                      and function points to a designer. Similarly, the
                      universe&apos;s vast complexity and orderliness suggest a
                      Creator.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Universe Order Section */}
            <section id="universe-order" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <Settings className="text-blue-500" />
                Order in the Universe
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  The universe exhibits remarkable fine-tuning that makes life
                  possible:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      Earth&apos;s Perfect Rotation
                    </h3>
                    <p>
                      Our planet rotates once every 24 hours. If a day was 30-40
                      years long:
                    </p>
                    <ul className="mt-4">
                      <li>One side would be extremely hot</li>
                      <li>Other side extremely cold</li>
                      <li>Life would be nearly impossible</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      The Habitable Zone
                    </h3>
                    <p>Earth sits in the perfect position from the sun:</p>
                    <ul className="mt-4">
                      <li>Not too close (too hot)</li>
                      <li>Not too far (too cold)</li>
                      <li>Perfect for liquid water</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Creator's Nature Section */}
            <section id="creator-nature" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <Target className="text-red-500" />
                The Nature of the Creator
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  Through our reasoning, we can deduce several key points about
                  the nature of the Creator:
                </p>
                <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Key Attributes:
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <strong>Different from Creation:</strong> The Creator must
                      be fundamentally different from the universe itself.
                    </li>
                    <li>
                      <strong>Uncreated:</strong> The Creator cannot have been
                      created, or we would face an infinite regression.
                    </li>
                    <li>
                      <strong>Self-sufficient:</strong> While creation is needy,
                      the Creator must be self-sufficient.
                    </li>
                    <li>
                      <strong>Eternal:</strong> While creation is temporary, the
                      Creator must be eternal.
                    </li>
                    <li>
                      <strong>Unlimited:</strong> While creation is confined by
                      space and time, the Creator must be free of these
                      limitations.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-4">Contents</h3>
              <nav className="space-y-2">
                {[
                  { id: "premise", title: "The Premise", icon: BookOpen },
                  { id: "common-sense", title: "Common Sense", icon: Brain },
                  {
                    id: "design-argument",
                    title: "Design Argument",
                    icon: Phone,
                  },
                  {
                    id: "universe-order",
                    title: "Universal Order",
                    icon: Settings,
                  },
                  {
                    id: "creator-nature",
                    title: "Creator's Nature",
                    icon: Target,
                  },
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

export default GodExistence;
