/* eslint-disable react/no-unescaped-entities */
import { GodExistence } from "@/app/primary/god/GodExistence";
import { ProofsForGod } from "@/app/primary/god/philosophy/ProofsForGod";
import { GodsOneness } from "@/app/primary/oneness/GodsOneness";
import { ProphetMuhammad } from "@/app/primary/prophethood/ProphetMuhammad";
import { WhyTheQuran } from "@/app/primary/quran/WhyTheQuran";
import { NeedForRevelation } from "@/app/primary/revelation/NeedForRevelation";
import { Button } from "@/components/ui/button";
import { ChevronRight, Link as LinkIcon, Target } from "lucide-react";
import Link from "next/link";

function SpiritualJourney() {
  return (
    <>
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Spiritual Journey
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Philosophy & Religion</span>
              <span>•</span>
              <time dateTime="PT15M">20 min read</time>
            </div>
          </div>
        </div>
      </header>
      <article className="max-w-4xl m-auto py-4 px-3">
        {/* Requirements Section */}
        <section
          className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-4"
          aria-labelledby="requirements"
        >
          <h3
            id="requirements"
            className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-4 flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
            Before You Begin This Journey
          </h3>
          <p className="text-amber-700 dark:text-amber-300 mb-4">
            To fully engage with this exploration and derive maximum benefit,
            please ensure you meet the following requirements:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold">
                  1
                </span>
              </div>
              <div>
                <h4 className="font-medium text-amber-800 dark:text-amber-200">
                  20 Minutes of Undivided Attention
                </h4>
                <p className="text-sm text-amber-600 dark:text-amber-400">
                  Find a quiet space free from distractions
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold">
                  2
                </span>
              </div>
              <div>
                <h4 className="font-medium text-amber-800 dark:text-amber-200 flex items-center gap-2">
                  Global Journey{" "}
                  <Link href="/journey/global">
                    {" "}
                    <LinkIcon color="blue" size={16} />
                  </Link>
                </h4>
                <p className="text-sm text-amber-600 dark:text-amber-400">
                  Complete Global Journey to realize the need of objective
                  morality.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold">
                  3
                </span>
              </div>
              <div>
                <h4 className="font-medium text-amber-800 dark:text-amber-200">
                  Understanding of English
                </h4>
                <p className="text-sm text-amber-600 dark:text-amber-400">
                  Proficient reading comprehension
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold">
                  4
                </span>
              </div>
              <div>
                <h4 className="font-medium text-amber-800 dark:text-amber-200">
                  Open Mind Without Biases
                </h4>
                <p className="text-sm text-amber-600 dark:text-amber-400">
                  Willingness to consider new perspectives
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Objective Section */}
        <section
          className="bg-teal-50 dark:bg-primary/20 border border-teal-200 dark:border-teal-800 rounded-lg p-6 mb-8"
          aria-labelledby="objectives"
        >
          <h3 className="text-primary text-lg flex gap-1 items-center font-bold mb-4">
            <span>
              <Target className="text-teal-600" size={16} />
            </span>
            Objective of this Journey
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-white dark:bg-teal-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
                  1
                </span>
              </div>
              <div>
                <h4 className="font-medium text-teal-800 dark:text-teal-200">
                  Understanding God's Existence Through Reason
                </h4>
                <p className="text-sm text-teal-600 dark:text-teal-400">
                  Exploring the evidence for the Creator through common sense,
                  design, and universal order
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-white dark:bg-teal-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
                  2
                </span>
              </div>
              <div>
                <h4 className="font-medium text-teal-800 dark:text-teal-200">
                  Proofs for God's Existence (Philosophical Perspective)
                </h4>
                <p className="text-sm text-teal-600 dark:text-teal-400">
                  Logical proofs for the existence of God and why there must be
                  one unique, necessary, and independent creator
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-white dark:bg-teal-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
                  3
                </span>
              </div>
              <div>
                <h4 className="font-medium text-teal-800 dark:text-teal-200">
                  Understanding God's Oneness
                </h4>
                <p className="text-sm text-teal-600 dark:text-teal-400">
                  Explore why there can only be One Creator and why this Creator
                  must be different from everything in our universe.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-white dark:bg-teal-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
                  4
                </span>
              </div>
              <div>
                <h4 className="font-medium text-teal-800 dark:text-teal-200">
                  Was Muhammad ﷺ a Messenger of God?
                </h4>
                <p className="text-sm text-teal-600 dark:text-teal-400">
                  Explore the logical analysis of Prophet Muhammad's claim to
                  prophethood
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-white dark:bg-teal-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
                  5
                </span>
              </div>
              <div>
                <h4 className="font-medium text-teal-800 dark:text-teal-200">
                  Why We Need Divine Guidance
                </h4>
                <p className="text-sm text-teal-600 dark:text-teal-400">
                  Exploring the necessity of revelation and why the Creator
                  would communicate with us
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-white dark:bg-teal-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
                  6
                </span>
              </div>
              <div>
                <h4 className="font-medium text-teal-800 dark:text-teal-200">
                  Why the Quran is Divine Revelation
                </h4>
                <p className="text-sm text-teal-600 dark:text-teal-400">
                  Discover the compelling evidence for the divine origin of the
                  Quran
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="border-b">
          <GodExistence isDocument={true} />
        </section>
        <section className="border-b">
          <ProofsForGod isDocument={true} />
        </section>
        <section className="border-b">
          <GodsOneness isDocument={true} />
        </section>
        <section className="border-b">
          <ProphetMuhammad isDocument={true} />
        </section>
        <section className="border-b">
          <NeedForRevelation isDocument={true} />
        </section>
        <section className="border-b">
          <WhyTheQuran isDocument={true} />
        </section>

        {/* Conclusion */}
        <section
          aria-labelledby="conclusion"
          className="bg-teal-50 dark:bg-primary/20 border-2 border-primary dark:border-teal-800 rounded-lg p-6 mb-8 space-y-4"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Conclusion</h2>

          <p className="mb-4">
            In our previous Journey, Global Journey, we concluded the need for{" "}
            <strong>Objective Morality</strong>.
          </p>

          <p className="mb-4">
            Once again, We took Top-Down approach to find the objective morality
            without any biases. This is the sequence:
          </p>
          <ul className="!pl-8 list-decimal mb-4">
            <li>
              Understanding the strong anchors which keeps us tied to the
              reality (Global Journey)
            </li>
            <li>The Need for Objective Morality (Global Journey)</li>
            <li>Understanding the concept of God</li>
            <li>Proving the Existence of God</li>
            <li>Proving the oneness of God</li>

            <li>
              Finding Islam to be the religion which is in line with the
              definition of God,Oneness of God and is compliant with{" "}
              <strong>The Anchors of Reality</strong> .
            </li>
          </ul>

          <p className="mb-4">
            By now, you must have conviction that Islam is the religion which
            provides Objective Morality on every level of{" "}
            <strong>The Line of Existence</strong>.
          </p>

          <p className="mb-4">
            Take the Religious Journey and deep dive into Religion of Islam:
          </p>

          <Link
            href="/journey/religious"
            className="flex justify-center w-full"
          >
            <Button className="bg-primary">
              Start Religious Journey <ChevronRight />
            </Button>
          </Link>
        </section>
      </article>
    </>
  );
}

export default SpiritualJourney;
