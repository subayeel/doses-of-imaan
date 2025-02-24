import React from "react";
import Link from "next/link";
import {
  User,
  Award,
  Shield,
  FileText,
  Brain,
  AlertTriangle,
  CheckCircle,
  Zap,
  Check,
  X,
  MessageCircle,
  Clock,
} from "lucide-react";

const ProphetMuhammad = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-4 space-y-12">
            <h1 className="text-4xl font-bold mb-8">
              Was Muhammad Really a Messenger of God?
            </h1>

            {/* Introduction Section */}
            <section id="introduction" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <User className="text-purple-500" />
                Understanding the Prophet&apos;s Claim
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  Let&apos;s explore something really important - how we can
                  know if Prophet Muhammad ﷺ was truly sent by God. If
                  you&apos;ve already seen how the Quran is divine, this becomes
                  simpler, because the Quran clearly states:
                </p>

                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg my-6">
                  <p className="italic text-center text-xl mb-2">
                    &quot;Say, [O Muhammad], &apos;O mankind, indeed I am the
                    Messenger of Allah to you all.&apos;&quot;
                  </p>
                  <p className="text-right">— Quran 7:158</p>
                </div>

                <p className="text-lg leading-relaxed">
                  But let&apos;s take a different approach too. When someone
                  makes a big claim like being a prophet, there are really only
                  three possibilities to consider:
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Three possibilities:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                        <X className="text-red-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>He was lying</strong> - He knew he wasn&apos;t
                          a prophet but claimed to be one anyway
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                        <Brain className="text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>He was mistaken</strong> - He genuinely
                          thought he was a prophet but was confused or deluded
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                        <Check className="text-green-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>He was telling the truth</strong> - He was
                          actually chosen by God as a messenger
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed">
                  Let&apos;s examine each possibility logically and see which
                  one makes the most sense. This approach helps us think
                  critically about this important question!
                </p>
              </div>
            </section>

            {/* Was He Lying Section */}
            <section id="lying" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <X className="text-red-500" />
                Was He Lying?
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  Let&apos;s look at what we know about Muhammad&apos;s
                  character ﷺ, especially before he claimed to be a prophet:
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4">
                    His reputation before prophethood:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        He was known as &quot;Al-Sadiq Al-Amin&quot; (The
                        Truthful, The Trustworthy) among his people
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        He avoided the common vices of his society (like idol
                        worship, drinking, and gambling)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        He was known for caring for orphans, the elderly, and
                        helping his community
                      </div>
                    </li>
                  </ul>
                </div>

                <p className="text-lg leading-relaxed">
                  Even his enemies acknowledged his honesty! Consider this
                  fascinating historical account:
                </p>

                <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <MessageCircle className="text-yellow-500" />
                    The Abu Sufyan Incident:
                  </h3>
                  <p className="text-lg mb-4">
                    Abu Sufyan was a strong opponent of Muhammad at the time.
                    When he met Heraclius (the Roman Emperor), he was asked
                    several questions about Muhammad, including:
                  </p>
                  <div className="space-y-4 pl-4 border-l-4 border-yellow-300 dark:border-yellow-700">
                    <p className="italic">
                      &quot;Have you ever accused him of telling lies before his
                      claim to be a prophet?&quot;
                    </p>
                    <p>Abu Sufyan answered: &quot;No.&quot;</p>
                    <p className="italic">
                      (Later, Abu Sufyan admitted, &quot;If I had not been
                      afraid of my companions labeling me a liar, I would not
                      have spoken the truth about Muhammad.&quot;)
                    </p>
                  </div>
                  <p className="mt-4">
                    Heraclius concluded: &quot;I asked whether he was ever
                    accused of telling lies before he said what he said, and
                    your reply was in the negative. So I wondered how a person
                    who does not tell a lie about others could ever tell a lie
                    about God.&quot;
                  </p>
                  <p className="text-right text-sm mt-2">
                    (Recorded in Sahih Bukhari)
                  </p>
                </div>

                <p className="text-lg leading-relaxed">
                  Let&apos;s also consider what people typically lie for:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <AlertTriangle className="text-amber-500 h-5 w-5" />
                      What did he gain?
                    </h4>
                    <ul className="space-y-2 text-base">
                      <li>• Lived simply, not luxuriously</li>
                      <li>• Mended his own shoes and clothes</li>
                      <li>• Ate basic meals</li>
                      <li>• Left minimal possessions when he passed away</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <AlertTriangle className="text-amber-500 h-5 w-5" />
                      What did he endure?
                    </h4>
                    <ul className="space-y-2 text-base">
                      <li>• Persecution and mockery</li>
                      <li>• Social boycott for 3 years</li>
                      <li>• Physical attacks</li>
                      <li>• Forced exile from his hometown</li>
                    </ul>
                  </div>
                </div>

                <p className="text-lg leading-relaxed">
                  He even refused generous offers to stop preaching! The leaders
                  of Mecca once offered him wealth, women, and power if he would
                  just stop spreading his message. He refused without
                  hesitation.
                </p>

                <p className="text-lg leading-relaxed">
                  When we consider all this evidence, the &quot;he was
                  lying&quot; explanation starts to make less and less sense.
                </p>
              </div>
            </section>

            {/* Was He Deluded Section */}
            <section id="deluded" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <Brain className="text-orange-500" />
                Was He Mistaken or Deluded?
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  Could Muhammad have sincerely but mistakenly believed he was a
                  prophet? Let&apos;s think about what this would mean:
                </p>

                <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4">
                    What Muhammad brought:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                        <FileText className="text-blue-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>A complete system for life:</strong> Including
                          laws about family, economics, diet, hygiene, social
                          relations, and spiritual practices - all still
                          benefiting millions today
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                        <Zap className="text-yellow-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Accurate prophecies:</strong> Such as
                          &quot;barefooted bedouins competing in building tall
                          buildings&quot; - which we see fulfilled today with
                          skyscrapers in the Arabian Peninsula
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex gap-4 flex-1">
                        <Shield className="text-green-500 flex-shrink-0 mt-1" />
                        <div>
                          <strong>Consistent character:</strong> He remained
                          honest, humble, and principled throughout his life,
                          never showing signs of mental instability
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed">
                  Let&apos;s also consider a specific incident that reveals his
                  character:
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Clock className="text-blue-500" />
                    The Solar Eclipse Incident:
                  </h3>
                  <p className="text-lg">
                    When Muhammad&apos;s young son Ibrahim died, there happened
                    to be a solar eclipse on the same day. Many people thought
                    this was a divine sign mourning the death of the
                    Prophet&apos;s son.
                  </p>
                  <p className="text-lg mt-4">
                    If Muhammad was deluded or dishonest, this would have been a
                    perfect opportunity to reinforce his claim to prophethood.
                    Instead, he gathered people and said:
                  </p>
                  <p className="italic text-center text-xl my-4">
                    &quot;The sun and the moon do not eclipse because of the
                    death of someone from the people, but they are two signs
                    amongst the signs of God. When you see them, stand up and
                    pray.&quot;
                  </p>
                  <p className="text-right text-xs font-bold">
                    Sahih al-Bukhari, Book 18, Number 154
                  </p>
                  <br />
                  <p className="text-lg">
                    He rejected the chance to use this coincidence for personal
                    gain, instead teaching scientific accuracy and focusing on
                    God alone.
                  </p>
                </div>

                <p className="text-lg leading-relaxed">
                  When we consider the consistency, complexity, and lasting
                  impact of his teachings, along with his rational behavior in
                  moments where a deluded person would likely act differently,
                  this explanation also becomes increasingly unlikely.
                </p>
              </div>
            </section>

            {/* Was He Truthful Section */}
            <section id="truthful" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <CheckCircle className="text-green-500" />
                The Conclusion: He Was Truthful
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  When we&apos;ve carefully examined the first two possibilities
                  and found them inadequate to explain the historical facts,
                  we&apos;re left with the third option - that Muhammad ﷺ was
                  indeed telling the truth about being God&apos;s messenger.
                </p>

                <p className="text-lg leading-relaxed">
                  Consider all we&apos;ve discussed:
                </p>

                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4">
                    The evidence points to truth:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>His impeccable character</strong> - Known for
                        honesty before and after prophethood, even by his
                        enemies
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>No personal benefit</strong> - He faced hardship
                        and lived simply despite opportunities for wealth and
                        power
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>The coherence of his message</strong> - A
                        comprehensive system that continues to benefit humanity
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>His rational behavior</strong> - Even in
                        situations where a liar or deluded person would likely
                        act differently
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Fulfilled prophecies</strong> - Predictions that
                        have come true long after his lifetime
                      </div>
                    </li>
                  </ul>
                </div>

                <p className="text-lg leading-relaxed">
                  The most reasonable conclusion, when we eliminate the
                  alternatives, is that Muhammad ﷺ was indeed what he claimed to
                  be - a messenger chosen by God to deliver divine guidance to
                  humanity.
                </p>

                <p className="text-lg leading-relaxed">
                  This perspective aligns with what the Quran says about him and
                  explains why his message has had such a profound and lasting
                  impact on human history.
                </p>
              </div>
            </section>

            {/* Conclusion Section */}
            <section id="conclusion" className="space-y-6">
              <h2 className="text-3xl font-semibold flex items-center gap-2">
                <Award className="text-purple-500" />A Messenger for Humanity
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  When we look at Muhammad&apos;s life, his character, his
                  message, and the impact he&apos;s had on history, the evidence
                  points to the truth of his claim to be God&apos;s messenger.
                </p>

                <p className="text-lg leading-relaxed">
                  His message wasn&apos;t just for people of his time or region
                  - it was meant for all of humanity. The Quran states:
                </p>

                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg my-6">
                  <p className="italic text-center text-xl mb-2">
                    &quot;And We have not sent you, [O Muhammad], except as a
                    mercy to the worlds.&quot;
                  </p>
                  <p className="text-right">— Quran 21:107</p>
                </div>

                <p className="text-lg leading-relaxed">
                  By recognizing Muhammad as God&apos;s messenger, we open
                  ourselves to learning from his teachings and example -
                  guidance that has positively transformed countless lives
                  throughout history and continues to do so today.
                </p>

                <p className="text-lg leading-relaxed">
                  His life and character stand as a practical demonstration of
                  the Quran&apos;s teachings in action, showing us how to
                  implement divine guidance in our daily lives.
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
                  {
                    id: "introduction",
                    title: "Understanding the Claim",
                    icon: User,
                  },
                  {
                    id: "lying",
                    title: "Was He Lying?",
                    icon: X,
                  },
                  {
                    id: "deluded",
                    title: "Was He Deluded?",
                    icon: Brain,
                  },
                  {
                    id: "truthful",
                    title: "He Was Truthful",
                    icon: CheckCircle,
                  },
                  {
                    id: "conclusion",
                    title: "A Messenger for Humanity",
                    icon: Award,
                  },
                ].map(({ id, title, icon: Icon }) => (
                  <Link
                    key={id}
                    href={`#${id}`}
                    className={`flex items-center text-xs gap-2 py-2 rounded-md transition-colors `}
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

export default ProphetMuhammad;
