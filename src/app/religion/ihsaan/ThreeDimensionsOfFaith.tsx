/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { Check } from "lucide-react";

export const ThreeDimensionsOfFaith = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Clean Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
              Module 3: The Three Dimensions of Faith
            </h1>
          </div>
          <p className=" text-gray-600 dark:text-gray-400 mt-2 font-light">
            Discover the beautiful harmony of Iman (Faith), Islam (Submission),
            and Ihsan (Excellence)
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {/* Introduction */}
          <section id="intro" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              The Three Dimensions of Faith
            </h2>

            <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Our faith consists of three beautiful, interconnected dimensions
              that work together to create a balanced spiritual life:
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-8">
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
                The Three Connected Dimensions:
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    <strong>Iman (Faith):</strong> The roots of our faith - the
                    beliefs we hold in our hearts that anchor our entire
                    spiritual life.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    <strong>Islam (Submission):</strong> The trunk of our faith
                    - the actions and practices that demonstrate our submission
                    to Allah.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    <strong>Ihsan (Excellence):</strong> The fruit of our faith
                    - striving for excellence and beauty in everything we do for
                    Allah.
                  </span>
                </li>
              </ul>
            </div>

            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              Each dimension builds upon the previous one, creating a path of
              spiritual growth that leads to a fulfilling relationship with
              Allah and a beautiful life.
            </p>
          </section>

          {/* Iman Section */}
          <section id="iman" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Iman: The Roots of Faith
            </h2>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 my-8">
              <p className=" text-center italic text-gray-700 dark:text-gray-300">
                "Iman or faith must be mentioned as the first part of our deen
                because it serves as our roots."
              </p>
            </div>

            <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              For many years at the beginning of Prophet Muhammad's mission,
              Allah revealed nothing except the concepts of:
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-8">
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
                The Foundation Concepts:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong>Taqwa:</strong> God consciousness - being aware of
                    Allah in everything we do
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong>Ikhlas:</strong> Sincerity - acting purely for
                    Allah's sake
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    <strong>Iman:</strong> Faith - believing in Allah and the
                    unseen
                  </span>
                </li>
              </ul>
            </div>

            <p className=" leading-relaxed text-gray-700 dark:text-gray-300">
              It was only after the hearts of the first Muslims became saturated
              and strong with true Iman that Allah began introducing the next
              concept - Islam.
            </p>
          </section>

          {/* Islam Section */}
          <section id="islam" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Islam: The Trunk of Faith
            </h2>

            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 my-8">
              <p className=" text-center italic text-gray-700 dark:text-gray-300">
                "After our roots are firmly in place and take hold within the
                rich soil of Iman and that is watered and nourished continually,
                we can begin understanding and encouraging the practice of Islam
                or submission to the will of Allah."
              </p>
            </div>

            <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Islam - our submission to Allah - is like the trunk of the tree:
              sturdy and reaching up to heights. It represents the outward
              actions and practices that demonstrate our faith.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  The Trunk of the Tree
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Islam - our submission to Allah - is like the trunk of the
                  tree: sturdy and reaching up to heights. It represents the
                  outward actions and practices that demonstrate our faith.
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  Building on Strong Roots
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Just as Muslim children aren't required to pray until age 7,
                  the "rules" of Islam come more easily to those who have
                  prepared their hearts with Iman. This early time is for
                  planting the seed of faith.
                </p>
              </div>
            </div>

            <p className=" leading-relaxed text-gray-700 dark:text-gray-300">
              When our roots of faith are strong, our practice of Islam can grow
              tall and strong. This is why parents spend the first seven years
              teaching their children about Allah, about paradise, about
              miracles and angels - all to prepare them to have a strong,
              balanced character.
            </p>
          </section>

          {/* Ihsan Section */}
          <section id="ihsan" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Ihsan: The Fruit of Faith
            </h2>

            <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-6 my-8">
              <p className=" text-center italic text-gray-700 dark:text-gray-300">
                "Ihsan, which means excellence in belief, is the neglected 1/3
                of our deen... It is the fruit that blossoms from our planted
                trees and shows up when the roots are strong and nourished, free
                from disease and harmful insects."
              </p>
            </div>

            <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Ihsan is our lost treasure that we must unearth and revive. If we
              fail to nourish our Iman by submitting to Allah, we will bear no
              fruit and our soul will die. But look into the Islamic legacy - it
              is rich with ihsan!
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-8">
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Legacy of Excellence
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                All the Islamic achievements in art, science, architecture,
                literature, geography, politics, economics, social movements,
                philosophy, medicine and more came from Muslims' desire to
                attain ihsan.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                When we combine strong roots (Iman) with a sturdy trunk (Islam),
                we can produce beautiful fruit (Ihsan) that benefits the world
                and pleases Allah.
              </p>
            </div>
          </section>

          {/* The Meaning of Ihsan */}
          <section id="ihsan-meaning" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              The Meaning of Ihsan
            </h2>

            <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              "Ihsan...what does it mean? Like so many other Arabic words that I
              have mentioned, it has a vast array of meanings. It cannot be
              summed up prettily in one English word or phrase."
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 my-8">
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
                The Many Faces of Ihsan:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <span className="bg-white dark:bg-gray-800 px-3 py-2 rounded text-center text-gray-700 dark:text-gray-300">
                  Excellence
                </span>
                <span className="bg-white dark:bg-gray-800 px-3 py-2 rounded text-center text-gray-700 dark:text-gray-300">
                  Perfection
                </span>
                <span className="bg-white dark:bg-gray-800 px-3 py-2 rounded text-center text-gray-700 dark:text-gray-300">
                  Beauty
                </span>
                <span className="bg-white dark:bg-gray-800 px-3 py-2 rounded text-center text-gray-700 dark:text-gray-300">
                  Balance
                </span>
                <span className="bg-white dark:bg-gray-800 px-3 py-2 rounded text-center text-gray-700 dark:text-gray-300">
                  Harmony
                </span>
                <span className="bg-white dark:bg-gray-800 px-3 py-2 rounded text-center text-gray-700 dark:text-gray-300">
                  Discipline
                </span>
                <span className="bg-white dark:bg-gray-800 px-3 py-2 rounded text-center text-gray-700 dark:text-gray-300">
                  Good Character
                </span>
                <span className="bg-white dark:bg-gray-800 px-3 py-2 rounded text-center text-gray-700 dark:text-gray-300">
                  Gentleness
                </span>
              </div>
            </div>

            <p className=" leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              Ihsan is a human reflection, a human attempt to achieve a high
              level in the areas covered by the revealed 99 beautiful names of
              Allah.
            </p>

            <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-6 my-8">
              <p className=" text-gray-600 dark:text-gray-400 italic">
                "When a man says I cannot, he has made a suggestion to himself.
                He has weakened his power of accomplishing that which otherwise
                would have been accomplished."
                <span className="block text-sm font-normal mt-1">
                  — Muhammad Ali
                </span>
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 my-8">
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
                The Powerful Question
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                In Surat Ar-Rahman (Quranic chapter "The Merciful"), Allah uses
                the rhetorical question: "Is there any reward for ihsan except
                ihsan?" This profound question invites us to contemplate the
                deep meaning and importance of excellence in our faith.
              </p>
            </div>
          </section>

          {/* Rewards of Ihsan */}
          <section id="ihsan-rewards" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              The Rewards of Ihsan
            </h2>

            <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              The Quranic question "Is there any reward for ihsan except ihsan?"
              has multiple beautiful layers of meaning:
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 my-8">
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Three Levels of Reward:
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className=" font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    1. Sweetness of Faith
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Those who strive for excellence will be rewarded with the
                    sweetness of faith in their hearts. They'll be among the few
                    who have tasted this level of faith.
                  </p>
                </div>

                <div>
                  <h4 className=" font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    2. Success in This World
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Those who attain ihsan will be rewarded with success in this
                    world. The Islamic Golden Age is proof - Muslims attained
                    excellence in worship and activities, and Allah rewarded
                    them with amazing achievements.
                  </p>
                </div>

                <div>
                  <h4 className=" font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    3. Paradise in the Hereafter
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The ultimate reward for excellence is the ultimate
                    excellence - paradise in the hereafter (jannah in
                    al-akhira).
                  </p>
                </div>
              </div>
            </div>

            <p className=" leading-relaxed text-gray-700 dark:text-gray-300">
              Those who realize the value of ihsan, who reach and strive and
              work for excellence, who nourish their roots and groom their trunk
              in order to bear plentiful, amazing fruit will be rewarded with
              Allah's form of ihsan - the sweetness of faith, success in this
              world, and the ultimate success in the hereafter.
            </p>
          </section>

          {/* Ihsan in Daily Life */}
          <section id="daily-life" className="mb-16 scroll-mt-20">
            <h2 className="text-2xl  font-bold mb-6 text-gray-900 dark:text-gray-100">
              Ihsan in Daily Life
            </h2>

            <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              So how does this relate to us right here, right now? Whether
              you're a student, working professional, newly married, or
              fulfilling family responsibilities - ihsan can transform your
              everyday life:
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 my-8">
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Changing Our Perspective
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                When faced with a boring class, a difficult assignment, a huge
                project from your boss, chores at home, or helping family
                members - stop the immediate negative reaction. Instead, see it
                as an opportunity for ihsan, a chance to please Allah.
              </p>
            </div>

            <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-6 my-8">
              <p className=" text-gray-600 dark:text-gray-400 italic">
                "Allah loves when one of you is given a task, that he or she
                does it in the most excellent manner."
                <span className="block text-sm font-normal mt-1">
                  — Sheikh Yusuf al-Qaradawi
                </span>
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 my-8">
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Imagine This:
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    Standing before Allah on the Day of Judgment and having Him
                    tell you all the things you did that He LOVED
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check
                    className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>
                    How the feeling of Allah loving your actions would be
                    infinitely greater than any worldly praise
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg p-6 my-8 text-center">
              <p className=" font-semibold mb-4 text-gray-900 dark:text-gray-100">
                So when you have a test or a paper or chores or any task, do it
                with ihsan!
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Don't just "be," don't just get by, don't just pass.
                <br />
                <span className="font-bold">
                  Be EXCELLENT, strive for PERFECTION, be the BEST!
                </span>
                <br />
                Show the world how Islam inspires you to attain ihsan!
              </p>
            </div>

            <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-6 my-8">
              <p className=" text-gray-600 dark:text-gray-400 italic">
                "We are given just a few moments in this world. Each breath is a
                priceless jewel and when it passes it never returns...make this
                moment, this breath, this heart beat one that resounds with
                ihsan (Excellence)!"
              </p>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};
