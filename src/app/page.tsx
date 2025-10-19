/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="relative flex flex-col items-center justify-start w-full pb-24">
      {/* Article Container */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl  lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-4">
            The Purification of the Self (Tazkiyat al-Nafs)
          </h1>
          <h2 className="text-sm md:text-lg text-gray-700 mb-6">
            A Journey to Spiritual Excellence and Inner Peace
          </h2>
          <p className="text-lg text-gray-600 italic">
            How to master your inner self and become the best version of
            yourself through Islamic spiritual psychology
          </p>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-gray-200 mb-12 hidden md:block"></div>

        {/* What is Tazkiyat al-Nafs Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Tazkiyat al-Nafs
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            The purification of self (Tazkiyat al-Nafs) is an{" "}
            <strong>extremely important</strong> approach to perfecting the
            human condition and actualizing the state of being God's vicegerent
            on earth.
          </p>

          <p className="text-lg text-gray-700 mb-4">
            The term <em>tazkiyah</em> in Arabic means:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-lg text-gray-700">
              ✨ <strong>Purification</strong> of something from impurities
            </li>
            <li className="text-lg text-gray-700">
              🌱 <strong>Growth</strong> and development
            </li>
            <li className="text-lg text-gray-700">
              🎯 <strong>Perfection</strong> of character
            </li>
          </ul>

          <p className="text-lg text-gray-700 mb-4">
            Imam al-Ghazali developed this practice based on the Quranic verse
            (91:7-10):
          </p>

          <blockquote className="border-l-4 border-primary pl-6 py-4 bg-primary/10 mb-6">
            <p className="text-lg italic text-gray-800">
              "By the soul/self, and the proportion and order given to it; and
              its enlightenment as to its wrong and its right; truly he succeeds
              that purifies it [zakkaha], and he fails that corrupts it!"
            </p>
          </blockquote>

          <p className="text-lg text-gray-700">
            <strong>In simple terms:</strong> Tazkiyat al-nafs is the
            purification of the self from all evil inclinations and its
            beautification with good values and virtues. 💎
          </p>
        </section>

        {/* Why This Matters Today Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why This Matters Today 🌍
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            In our modern world filled with:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-lg text-gray-700">
              📱 <strong>Digital distractions</strong>
            </li>
            <li className="text-lg text-gray-700">
              🎭 <strong>Moral confusion</strong>
            </li>
            <li className="text-lg text-gray-700">
              💸 <strong>Material temptations</strong>
            </li>
            <li className="text-lg text-gray-700">
              😰 <strong>Stress and anxiety</strong>
            </li>
          </ul>
          <p className="text-lg text-gray-700">
            We desperately need a method to regain mastery over ourselves and
            purify our hearts from negative influences. This allows us to
            nurture our individual growth as better Muslims. 🕌
          </p>

          <p className="text-2xl font-bold my-4 text-gray-700">
            {" "}
            The Divinely revealed law (Objective Morality) is crucial for
            knowing what is right and what is wrong.
          </p>
          <p className="text-lg text-gray-700">
            However, even when we know what is right and wrong, we may be under
            the influence of compulsions and temptations that control us or skew
            our judgment. Therefore, before we start our journey it is important
            to understand the concept of Nafs.
          </p>
        </section>

        {/* Three Levels of Self Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Three Levels of the Self 🧠
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Following the Quran, Ghazali explains there are{" "}
            <strong>three levels</strong> to our self:
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                1. The Inciting Self (al-nafs al-ammarah)
              </h3>
              <ul className="space-y-2 list-decimal ml-8">
                <li className="text-gray-700">
                  The part that pushes us toward wrong things
                </li>
                <li className="text-gray-700">
                  Overlaps with our passions, desires, ego, and instincts
                </li>
                <li className="text-gray-700 italic">
                  Think of it as your inner devil's advocate
                </li>
              </ul>
            </div>

            <div className="">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                2. The Reproaching Self (al-nafs al-lawwamah)
              </h3>
              <ul className="space-y-2 list-decimal ml-8">
                <li className="text-gray-700">
                  The part that scolds us for doing wrong
                </li>
                <li className="text-gray-700">
                  Overlaps with reasoning and judgment
                </li>
                <li className="text-gray-700 italic">
                  Your inner conscience and moral compass
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                3. The Tranquil Self (al-nafs al-mutma'innah)
              </h3>
              <ul className="space-y-2 list-decimal ml-8">
                <li className="text-gray-700">
                  The part that has attained peace and serenity
                </li>
                <li className="text-gray-700">
                  Achieved through purification and perfection
                </li>
                <li className="text-gray-700 italic">
                  Your inner sanctuary of calm
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg flex items-center justify-center">
            <Image
              src="/self-illustration.png"
              width={500}
              height={500}
              alt="Learn Arabic"
              className="m-auto"
            />
          </div>
          <p className="text-lg text-gray-700 my-6">
            Purification of self is the struggle against the inciting self to
            actualize the tranquil self. This requires that we turn inward,
            starting with understanding our inner life.
          </p>
        </section>

        {/* Science of Intention Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Science of Intention (Niyya) 🎯
          </h2>

          <blockquote className="border-l-4 border-primary pl-6 py-4 bg-primary/10 mb-6">
            <p className="text-lg italic text-gray-800">
              “Umar Ibn Al-Khattab relates that he heard the Messenger of Allah
              (SAW), say, ‘Verily actions are by intentions, and for every
              person is what he intended. So the one whose hijrah was to Allah
              and His Messenger, then his hijrah was to Allah and His Messenger.
              And the one whose hijrah was for the world to gain from it, or a
              woman to marry her, then his hijrah was to what he made hijrah
              for.’”
            </p>
          </blockquote>

          <p className="text-lg text-gray-700 mb-4">
            Every Muslim knows this hadith, but its deeper meaning is often
            overlooked! 🤯
          </p>

          <p className="text-lg text-gray-700 mb-6">
            According to Imam al-Ghazali, quoting the great pious Muslim Sufyan
            al-Thawri, the early generation of Muslims{" "}
            <b>
              “learned how to perform intentions for actions in the same way
              that you learn how to perform the actions themselves.”
            </b>{" "}
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Today we seem to only focus on doing what is right. But Islam
            teaches us to intend what is right also! When students of knowledge
            used to ask the early generation about an action that one can
            perform constantly for the sake of Allah, they were told to always
            make an intention for the sake of Allah.
          </p>
        </section>

        {/* How Intentions Work Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How Intentions Actually Work 🔄
          </h2>

          <div className="bg-gray-100 rounded-xl items-center justify-center p-3 my-4">
            <Image
              src="/intention-illustration.png"
              width={800}
              height={500}
              alt="Learn Arabic"
              className="m-auto object-contain rounded-xl pl-3 bg-[#074351]"
            />

            <p className="font-bold text-center mt-4">
              Relation between our Inner Life and Outer life
            </p>
          </div>

          <p className="text-lg text-gray-700 mb-6">
            Look at the diagram above. Intention is something that we do when we
            are just about to perform an action. It means that an intention
            happens at the moment that an action is about to be performed. But
            an intention is the result of a long internal process that begins
            with what the scholars call a prompting (khatir). What is a
            prompting?
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">
                1. Prompting (Khatir) 💭
              </h4>
              <p className="text-lg text-gray-700">
                A prompting is a faint idea, passing thought, or suggestion that
                pops into our head quickly and pops out as quickly as it came.
                It happens extremely fast. We have these ‘faint ideas’ all the
                time. A prompting is an urge to do something right or wrong and
                is characterized by the speed by which it comes to us and leaves
                us.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">2. Will (Irada) 💪</h4>
              <p className="text-lg text-gray-700">
                The scholars teach us that if we think about the prompting or
                entertain it a little in our mind it transforms into a will
                (irada) or desire to do it.
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">
                3. Determination ('Azm) 🎯
              </h4>
              <p className="text-lg text-gray-700">
                If we still think about it, it becomes stronger and transforms
                into a determination (‘azm){" "}
              </p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">4. Objective (Qasd) 🏆</h4>
              <p className="text-lg text-gray-700">
                If we keep pondering upon the determination, and craft a mental
                plan to do it, then we call it objective (qasd). At this point
                we have thought about it long enough that it becomes a
                purposeful thing we intend to do.
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">
                5. Intention (Niyya) ✨
              </h4>
              <p className="text-lg text-gray-700">
                Once the plan and means are decided, the final decision to act
                upon it is the intention (niyya).
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-12">
            It all starts with a prompting. There are two types of promptings:
            <ul className="list-decimal ml-8 space-y-2">
              <li>Good promptings</li>
              <li>Bad promptings</li>
            </ul>
          </p>
          <p className="text-lg text-gray-700 mb-6">
            There are five source of a prompting:
            <ul className="list-decimal ml-8 space-y-2">
              <li>Allah</li>
              <li>The Angels</li>
              <li>Our Higher Self</li>
              <li>Our Lower Self</li>
              <li>Shaytan</li>
            </ul>
          </p>

          <div className="bg-gray-100 rounded-xl items-center justify-center p-3 my-4">
            <Image
              src="/prompting-illustration.png"
              width={400}
              height={300}
              alt="Learn Arabic"
              className="m-auto object-contain rounded-xl"
            />

            <p className="font-bold text-center mt-4">Sources of Promptings</p>
          </div>

          <p className="text-lg text-gray-700 mb-6">
            Good promptings come to us either from Allah, the angels, or our
            higher Self. In either case, we experience an inclination and
            thought to do something good. It might be the faint suggestion to
            get up and do fajr early in the morning or the inclination to help
            someone or forgive them. The scholars tell us that Allah sends his
            emissaries or ambassadors to suggest good thoughts to us to do good
            things, these ambassadors are the promptings.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Sometimes bad promptings come to us. These are either from our lower
            self or shaytan. It might be a faint suggestion to mention something
            bad about someone to someone else (back biting) or to cheat someone.
            If we dwell on it and entertain the idea long enough it transforms
            into an intention to do it. We must not encourage this. We should be
            able to ward it off as soon as it arrives so that we do not dwell on
            it. Otherwise, it will transform into an intention to do wrong.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Look at the diagram above again. The scholars teach us that if we
            think about the prompting or entertain it a little in our mind it
            transforms into a will (irada) or desire to do it. If we still think
            about it, it becomes stronger and transforms into a determination
            (‘azm) and then an objective (qasd) or goal. At this point we have
            thought about it long enough that it becomes a purposeful thing we
            intend to do. This process is very fast, faster than the blink of an
            eye sometimes. Hence the importance of cultivating the growth and
            crystallization of a good intention.
          </p>
        </section>

        {/* Seven Characteristics Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Seven Amazing Characteristics of Good Intentions ✨
          </h2>

          <div className="space-y-6">
            <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                1. Starts in the Heart ❤️
              </h3>
              <ul className="space-y-1">
                <li>Emerges from within you</li>
                <li>Focuses your heart on doing good</li>
                <li>Best reason: for the sake of Allah (li wajhi-llah)</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                2. Articulated by the Tongue 🗣️
              </h3>
              <ul className="space-y-1">
                <li>Speaking it out loud strengthens it</li>
                <li>Writing it down makes it even stronger</li>
                <li className="italic">
                  Try it: verbalize your good intentions!
                </li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                3. Confirmed by the Mind 🧠
              </h3>
              <ul className="space-y-1">
                <li>Your conscious mind processes it</li>
                <li>Rational decision-making is involved</li>
                <li>You're fully aware of what you're doing</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                4. Manifested by the Body 🏃‍♂️
              </h3>
              <ul className="space-y-1">
                <li>You actually DO what you intended</li>
                <li>Action completes the intention</li>
                <li className="italic">Talk is cheap, action is everything</li>
              </ul>
            </div>

            <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                5. Flows Through the Entire Action 🌊
              </h3>
              <ul className="space-y-1">
                <li>Like blood flowing through veins</li>
                <li>Like a river flowing through its bed</li>
                <li>The intention is the "spirit" of the action</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                6. Preserves You in Purity 🛡️
              </h3>
              <ul className="space-y-1">
                <li>Acts like a protective shield</li>
                <li>Keeps negative thoughts away</li>
                <li>If you lose focus, just renew your intention!</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                7. Purifies Your Unconscious Mind 🧽
              </h3>
              <ul className="space-y-1">
                <li>Sinks deep into your unconscious</li>
                <li>Cleanses negative influences</li>
                <li>Like chlorine purifying a swimming pool</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Life-Changing Power Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Life-Changing Power of Intentions 🌟
          </h2>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                A Good Intention Reconfigures Your Life 🔄
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                When you cultivate good intentions:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  👥 <strong>New people</strong> enter your life
                </li>
                <li>
                  💡 <strong>New ideas</strong> come to mind
                </li>
                <li>
                  🛤️ <strong>New paths</strong> open up
                </li>
                <li>
                  🎯 <strong>New possibilities</strong> emerge
                </li>
              </ul>
              <p className="text-lg text-gray-700 mt-4">
                It's like being put on a completely new trajectory! 🚀
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                A Good Intention is Emancipatory 🕊️
              </h3>
              <p className="text-lg text-gray-700 mb-4">Intentions help you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Free FROM</strong> negative impulses and compulsions
                </li>
                <li>
                  <strong>Free FOR</strong> your spiritual journey to Allah
                </li>
                <li>Reclaim control from unconscious influences</li>
                <li>Exercise your God-given freedom to choose</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                A Good Intention Brings You Closer to Allah 🕌
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Every good intention is a step toward Allah. In a sacred
                tradition, Allah says:
              </p>
              <blockquote className="border-l-4 border-purple-500 pl-4 py-2 bg-white rounded">
                <p className="text-lg italic text-gray-800">
                  "I am sitting with the one who remembers Me."
                </p>
              </blockquote>
              <p className="text-lg text-gray-700 mt-4">
                By making a good intention, you've moved toward Allah in the
                Unseen world—even without physically moving! 🌟
              </p>
            </div>
          </div>
        </section>

        {/* How to Start Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How to Start Your Journey 🚀
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                1. Begin with Self-Awareness 🔍
              </h3>
              <ul className="space-y-2">
                <li>Notice your promptings</li>
                <li>Distinguish between good and bad thoughts</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                2. Practice Making Intentions 🎯
              </h3>
              <ul className="space-y-2">
                <li>Before every action, ask: "Why am I doing this?"</li>
                <li>Make it for the sake of Allah</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                3. Verbalize Your Intentions 🗣️
              </h3>
              <ul className="space-y-2">
                <li>Say them out loud</li>
                <li>Write them down</li>
                <li>Make them concrete</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                4. Follow Through 🏃‍♂️
              </h3>
              <ul className="space-y-2">
                <li>Don't just intend—act!</li>
                <li>Let your intention flow through the entire action</li>
              </ul>
            </div>

            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                5. Reflect and Renew 🔄
              </h3>
              <ul className="space-y-2">
                <li>Check your intentions regularly</li>
                <li>Renew them when you lose focus</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom Line Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Bottom Line 💎
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            The early Muslims learned the{" "}
            <strong>science of crafting intentions</strong> as much as they
            learned how to act. The key is combining:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-lg text-gray-700">
              🎯 <strong>The art of crafting an intention</strong>
            </li>
            <li className="text-lg text-gray-700">
              🏃‍♂️ <strong>The art of doing the action</strong>
            </li>
          </ul>

          <p className="text-lg text-gray-700 mb-6">
            When you master both, you unlock the power to:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li className="text-lg text-gray-700">✨ Purify your soul</li>
            <li className="text-lg text-gray-700">🌟 Transform your life</li>
            <li className="text-lg text-gray-700">🕌 Draw closer to Allah</li>
            <li className="text-lg text-gray-700">🕊️ Find true freedom</li>
          </ul>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg text-center">
            <p className="text-xl font-bold text-gray-900 mb-2">
              Start today. Make one good intention. See what happens. 🌱
            </p>
          </div>
        </section>

        {/* Final Quote */}
        <div className="text-center bg-gray-50 p-8 rounded-lg">
          <p className="text-lg italic text-gray-700">
            Remember: Every journey begins with a single step. Every
            transformation begins with a single intention. 💫
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
