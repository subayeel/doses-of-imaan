/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  Heart,
  Map,
  Star,
  Sun,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ReligionDrawerProps {
  state: boolean;
  resolvedTheme?: string;
}

function ReligionDrawer({ state, resolvedTheme }: ReligionDrawerProps) {
  return (
    <Sheet>
      <SheetTrigger>
        <Card
          className="border shadow-lg hover:shadow-xl z-10 hover:scale-105 transition-all duration-300 ease-in-out hover:cursor-pointer overflow-hidden relative"
          style={{
            background: state
              ? resolvedTheme === "dark"
                ? "linear-gradient(135deg, #1a2e1a 0%, #0d3320 100%)"
                : "linear-gradient(135deg, #f0f9ff 0%, #d5e8fa 100%)"
              : "",
            borderRadius: "0.75rem",
          }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-500 opacity-10 rounded-full -ml-12 -mb-12"></div>

          <CardContent className="p-5 relative z-10">
            <CardTitle className="mb-3 flex justify-between items-center text-xl font-bold text-indigo-700">
              <span className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-indigo-600" />
                Religion
              </span>
              <ArrowUpRight className="h-5 w-5 text-indigo-600" />
            </CardTitle>
            <CardDescription className="text-base text-gray-700">
              With so many religions claiming truth, how can you find the right
              path? We'll examine how Islam's pure monotheism, preserved
              scripture, and logical framework provide clear guidance. Discover
              why the message of Tawhid (Divine Oneness) resonates with both
              your natural intuition and rational mind.
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge
                  variant="secondary"
                  className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 font-medium"
                >
                  Tawhid (Divine Oneness)
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800 hover:bg-blue-200 font-medium"
                >
                  Divine Revelation
                </Badge>
              </div>
            </CardDescription>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent className="overflow-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-bold text-indigo-700">
            Religion
          </SheetTitle>
          <SheetDescription className="text-base text-gray-600">
            Exploring the path to truth through rational inquiry and spiritual
            reflection.
          </SheetDescription>
        </SheetHeader>

        <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg text-gray-800 font-sans mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center text-indigo-700 flex items-center justify-center gap-2">
            <Sun className="h-6 w-6 text-amber-500" />
            The Journey of Life and the Evidence for Islam
          </h1>

          <div className="space-y-5">
            {/* Section 1: The Boat Analogy */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-3 text-blue-700 flex items-center gap-2">
                <Map className="h-5 w-5" />
                The Boat Analogy: Understanding Our Existence
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Imagine waking up on a moving boat without any memory of how you
                arrived. Naturally, you would ask:{" "}
                <i>
                  How did I get here? What am I doing here? Where am I going?
                </i>{" "}
                Life presents us with similar fundamental questions.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                This analogy illustrates our existential position. We find
                ourselves conscious in a universe that's in constant motion,
                with precise laws governing everything from quantum particles to
                celestial bodies. Just as a boat requires a creator and
                navigator, our universe logically points to an intelligent
                designer who initiated this journey with purpose.
              </p>
            </div>

            {/* Section 2: The First Cause */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-3 text-indigo-700 flex items-center gap-2">
                <Star className="h-5 w-5" />
                The Necessity of a First Cause
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Modern cosmology confirms that our universe had a beginning—the
                Big Bang. This scientific fact aligns with the philosophical
                principle that an infinite regression of causes is impossible.
                Every dependent thing requires an explanation outside itself.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                This leads to the logical necessity of an independent, eternal
                First Cause that possesses the following attributes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2 ml-4">
                <li>Self-existence (not dependent on anything else)</li>
                <li>Eternity (no beginning or end)</li>
                <li>Power to create from nothing</li>
                <li>Intelligence to design complex systems</li>
                <li>Will to choose to create</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">
                These attributes align perfectly with the Islamic concept of
                Allah—the necessary being upon whom all contingent existence
                depends.
              </p>
            </div>

            {/* Section 3: The Purpose of Life */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-3 text-green-700 flex items-center gap-2">
                <Heart className="h-5 w-5" />
                The Purpose of Human Existence
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Unlike other creations that follow natural laws instinctively,
                humans possess consciousness and free will. This unique capacity
                for choice suggests a special purpose.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                Islamic theology provides a coherent answer: we exist to
                recognize our Creator through rational inquiry, submit to Him
                willingly, and live according to His guidance. This relationship
                fulfills our deepest yearning for meaning and establishes moral
                accountability.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                The Quran states: "I did not create jinn and humans except to
                worship Me." (51:56) This worship encompasses every aspect of
                life lived with conscious awareness of the divine.
              </p>
            </div>

            {/* Section 4: Evidence for Islam */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-3 text-amber-700 flex items-center gap-2">
                <ExternalLink className="h-5 w-5" />
                Compelling Evidence for Islamic Truth Claims
              </h2>
              <div className="space-y-3">
                <div className="bg-amber-50 p-3 rounded-md">
                  <h3 className="font-medium text-amber-800">
                    Textual Preservation
                  </h3>
                  <p className="text-gray-700">
                    The Quran has been preserved in its original form for over
                    1400 years, with manuscripts dating to the earliest Islamic
                    period matching today's text. This extraordinary
                    preservation fulfills the Quranic promise: "Indeed, it is We
                    who sent down the message, and indeed, We will be its
                    guardian." (15:9)
                  </p>
                </div>

                <div className="bg-blue-50 p-3 rounded-md">
                  <h3 className="font-medium text-blue-800">
                    Linguistic Miracle
                  </h3>
                  <p className="text-gray-700">
                    The Quran's linguistic features have never been successfully
                    imitated despite an open challenge. Its unique composition
                    has consistently astounded experts of Arabic literature,
                    demonstrating a level of eloquence beyond human capability.
                  </p>
                </div>

                <div className="bg-green-50 p-3 rounded-md">
                  <h3 className="font-medium text-green-800">
                    Scientific Compatibility
                  </h3>
                  <p className="text-gray-700">
                    The Quran contains descriptions of natural phenomena that
                    align with modern scientific discoveries—from the expanding
                    universe to embryonic development stages—details that were
                    unknowable in the 7th century and only confirmed centuries
                    later.
                  </p>
                </div>

                <div className="bg-purple-50 p-3 rounded-md">
                  <h3 className="font-medium text-purple-800">
                    Prophecies Fulfilled
                  </h3>
                  <p className="text-gray-700">
                    Numerous prophetic statements in Islamic sources have been
                    fulfilled, including the Byzantine victory over Persia after
                    initial defeat, the preservation of Pharaoh's body as a
                    sign, and specific details about future societal
                    developments.
                  </p>
                </div>

                <div className="bg-indigo-50 p-3 rounded-md">
                  <h3 className="font-medium text-indigo-800">
                    Theological Coherence
                  </h3>
                  <p className="text-gray-700">
                    Islam presents a logically consistent theological framework
                    that resolves paradoxes found in other traditions. Its pure
                    monotheism, balanced view of human nature, and concept of
                    divine justice satisfy both intellectual and spiritual
                    needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: Conclusion */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-violet-500 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-3 text-violet-700">
                Conclusion
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Islam offers a comprehensive worldview that addresses the
                fundamental questions of existence with intellectual integrity
                and spiritual depth. Its central message of Tawhid (Divine
                Oneness) provides a coherent foundation for understanding our
                purpose and relationship with the Creator.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                The evidence supporting Islam's truth claims—from textual
                preservation to scientific compatibility—invites sincere
                investigation rather than blind faith. This rational approach to
                belief aligns with the Quranic encouragement to reflect, ponder,
                and use our intellect to recognize divine signs.
              </p>
            </div>

            {/* Section 6: Islamic Principles */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-3 text-teal-700">
                Key Islamic Principles
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Islam teaches that true faith must be embraced willingly: "There
                is no compulsion in religion" (Quran 2:256). It emphasizes the
                balance between divine mercy and justice, personal
                responsibility and community welfare, and spiritual devotion and
                worldly engagement.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                The Five Pillars of Islam—declaration of faith, prayer, charity,
                fasting, and pilgrimage—provide a practical framework for living
                out these principles in daily life, cultivating both individual
                spiritual growth and social harmony.
              </p>
            </div>
          </div>
        </div>

        <SheetFooter className="text-center text-sm text-gray-500 border-t pt-4">
          "Indeed, the religion in the sight of Allah is Islam." (Quran 3:19)
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default ReligionDrawer;
