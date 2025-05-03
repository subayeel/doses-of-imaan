/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SpiritualityDrawerProps {
  state: boolean;
  resolvedTheme?: string;
}

function SpiritualityDrawer({ state, resolvedTheme }: SpiritualityDrawerProps) {
  return (
    <Sheet>
      <SheetTrigger>
        <Card
          className="border shadow-md hover:shadow-lg z-10 hover:scale-105 transition-all duration-300 ease-in-out hover:cursor-pointer dark:border-gray-700"
          style={{
            background: state
              ? resolvedTheme === "dark"
                ? "linear-gradient(135deg, #1a2e1a 0%, #0d3320 100%)"
                : "linear-gradient(135deg, #f9ffd9 0%, #e6ffba 100%)"
              : "",
          }}
        >
          <CardContent className="p-5">
            <CardTitle className="mb-3 flex justify-between items-center text-xl font-bold dark:text-gray-100">
              <span className="flex items-center gap-2">
                <Star className="h-5 w-5 text-amber-500" />
                Spirituality
              </span>
              <ArrowUpRight className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
            </CardTitle>
            <CardDescription className="text-base dark:text-gray-300">
              Have you ever gazed at the stars and wondered about the origin of
              our universe? Through pure logic and reasoning, we'll explore how
              the intricate design of our cosmos points to the existence of
              Designer.
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge
                  variant="secondary"
                  className="bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900 dark:text-amber-100 dark:hover:bg-amber-800"
                >
                  Evidence of Creator
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-100 dark:hover:bg-indigo-800"
                >
                  Divine Attributes
                </Badge>
              </div>
            </CardDescription>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto dark:bg-gray-900 dark:border-gray-700">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            Spirituality
          </SheetTitle>
          <SheetDescription className="dark:text-gray-400"></SheetDescription>
        </SheetHeader>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg mb-6">
          <p className="italic text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Definition:</span> Spirituality is
            an individual's search for ultimate or sacred meaning and purpose in
            life, encompassing personal growth, religious experience, belief in
            a supernatural realm, and making sense of one's inner dimension.
          </p>
        </div>

        <div className="space-y-6">
          <section className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg border-l-4 border-amber-500">
            <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">
              It begins with belief in a higher power
            </h3>
            <p className="text-base text-amber-700 dark:text-amber-200">
              Every human has an innate desire to believe in God and recognize
              the signs of creation around us.
            </p>
          </section>

          <a
            className="flex p-3 rounded-md border justify-between items-center border-amber-600 text-amber-700 bg-amber-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-200 dark:border-amber-700 dark:hover:bg-amber-900/50"
            href="/primary/god"
          >
            <span className="font-medium">Explore the existence of God</span>{" "}
            <ArrowRight className="h-5 w-5" />
          </a>

          <section className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-500 dark:border-blue-600">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
              The Universe Exists
            </h3>
            <p className="text-base text-blue-700 dark:text-blue-200">
              The existence of anything proves the existence of its Creator.
            </p>
          </section>

          <section className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg border-l-4 border-purple-500 dark:border-purple-600">
            <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">
              The Infinite Chain Question
            </h3>
            <p className="text-base text-purple-700 dark:text-purple-200">
              A creator of a creator and a creator of that creator... leads to
              an infinite chain. But with infinite regress, the universe
              wouldn't exist, yet it does. Therefore, an eternal entity must
              exist.
            </p>
          </section>

          <a
            className="flex p-3 rounded-md border justify-between items-center border-purple-600 text-purple-700 bg-purple-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-200 dark:border-purple-700 dark:hover:bg-purple-900/50"
            href="/primary/oneness"
          >
            <span className="font-medium">Explore the Oneness of God</span>{" "}
            <ArrowRight className="h-5 w-5" />
          </a>

          <section className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-600">
            <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
              Divine Communication
            </h3>
            <p className="text-base text-indigo-700 dark:text-indigo-200">
              Why would this Creator want to communicate with us at all?
            </p>
          </section>

          <a
            className="flex p-3 rounded-md border justify-between items-center border-violet-600 text-violet-700 bg-violet-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-violet-100 dark:bg-violet-900/30 dark:text-violet-200 dark:border-violet-700 dark:hover:bg-violet-900/50"
            href="/primary/revelation"
          >
            <span className="font-medium">Explore the Need for Revelation</span>{" "}
            <ArrowRight className="h-5 w-5" />
          </a>

          <section className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500 dark:border-green-600">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">
              The Quran: Divine Revelation
            </h3>
            <p className="text-base text-green-700 dark:text-green-200">
              Why the Quran is the Revelation from God
            </p>
          </section>

          <a
            className="flex p-3 rounded-md border justify-between items-center border-green-600 text-green-700 bg-green-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-green-100 dark:bg-green-900/30 dark:text-green-200 dark:border-green-700 dark:hover:bg-green-900/50"
            href="/primary/quran"
          >
            <span className="font-medium">Explore the Quran</span>{" "}
            <ArrowRight className="h-5 w-5" />
          </a>

          <section className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-500 dark:border-blue-600">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Prophet Muhammad: God's Messenger
            </h3>
            <p className="text-base text-blue-700 dark:text-blue-200">
              Why Prophet Muhammad was the true Messenger of God
            </p>
          </section>

          <a
            className="flex p-3 rounded-md border justify-between items-center border-blue-600 text-blue-700 bg-blue-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-blue-100 mb-4 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-700 dark:hover:bg-blue-900/50"
            href="/primary/prophethood"
          >
            <span className="font-medium">Explore the Prophet's Life</span>{" "}
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <SheetFooter className="mt-6 border-t pt-4 text-center text-sm text-gray-500 dark:text-gray-400 dark:border-gray-700">
          Embark on a journey of spiritual discovery guided by reason and faith.
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default SpiritualityDrawer;
