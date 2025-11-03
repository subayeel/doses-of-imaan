/* eslint-disable react/no-unescaped-entities */
import { ThreeDimensionsOfFaith } from "@/app/religion/ihsaan/ThreeDimensionsOfFaith";
import { SweetnessOfIman } from "@/app/religion/imaan/SweetnessOfIman";
import { UnderstandingIslam } from "@/app/religion/islam/UnderstandingIslam";
import { Button } from "@/components/ui/button";
import { ChevronRight, Link as LinkIcon, Target } from "lucide-react";
import Link from "next/link";

function ReligiousJourney() {
  return (
    <main className="mx-4">
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Religious Journey
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Religion</span>
              <span>•</span>
              <time dateTime="PT15M">15 min read</time>
            </div>
          </div>
        </div>
      </header>
      {/* Requirements Section */}
      <section
        className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 my-4 mx-4"
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
              <h4 className="font-medium text-amber-800 dark:text-amber-200 flex items-center gap-2">
                <Link
                  href="/journey/spiritual"
                  className="flex gap-1 items-center"
                >
                  Spiritual Journey{" "}
                  <LinkIcon className="text-primary" size={12} />
                </Link>
              </h4>
              <p className="text-sm text-amber-600 dark:text-amber-400">
                Complete Spiritual Journey to understand why Islam is the answer
                to Objective morality.
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
        </div>
      </section>
      {/* Objective Section */}
      <section
        className="bg-teal-50 dark:bg-primary/20 border border-teal-200 dark:border-teal-800 rounded-lg p-6 mb-8 mx-4"
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
                Understanding Islam
              </h4>
              <p className="text-sm text-teal-600 dark:text-teal-400">
                Discover the core teachings, history, and beauty of Islam
                through this comprehensive guide.
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
                The Sweetness of Imaan
              </h4>
              <p className="text-sm text-teal-600 dark:text-teal-400">
                Discovering the profound joy and fulfillment that comes from
                true faith
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
                Ihsaan: The Three Dimensions of Faith
              </h4>
              <p className="text-sm text-teal-600 dark:text-teal-400">
                Discover the beautiful harmony of Iman (Faith), Islam
                (Submission), and Ihsan (Excellence)
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <UnderstandingIslam />
      </section>
      <section>
        <SweetnessOfIman />
      </section>
      <section>
        <ThreeDimensionsOfFaith />
      </section>

      <section
        aria-labelledby="conclusion"
        className="bg-teal-50 dark:bg-primary/20 border-2 border-primary dark:border-teal-800 rounded-lg p-6 mb-8 space-y-4 w-full"
      >
        <h2 className="text-2xl font-bold text-primary mb-4">Conclusion</h2>

        <p className="mb-4">
          You have clear understanding about Islam, Imaan and Ihsaan. And now it
          is time to understand how put that knowledge to use.
        </p>

        <p className="mb-4">Begin the Journey of Tazkiya: </p>
        <Link href="/journey/tazkiya" className="flex justify-center">
          <Button className="bg-primary">
            Journey of Tazkiya <ChevronRight />
          </Button>
        </Link>
      </section>
    </main>
  );
}

export default ReligiousJourney;
