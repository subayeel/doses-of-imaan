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
          className="border shadow-md hover:shadow-lg z-10 hover:scale-105 transition-all duration-300 ease-in-out hover:cursor-pointer"
          style={{
            background: state
              ? resolvedTheme === "dark"
                ? "linear-gradient(135deg, #1a2e1a 0%, #0d3320 100%)"
                : "linear-gradient(135deg, #f9ffd9 0%, #e6ffba 100%)"
              : "",
          }}
        >
          <CardContent className="p-5">
            <CardTitle className="mb-3 flex justify-between items-center text-xl font-bold">
              <span className="flex items-center gap-2">
                <Star className="h-5 w-5 text-amber-500" />
                Spirituality
              </span>
              <ArrowUpRight className="h-5 w-5 text-indigo-500" />
            </CardTitle>
            <CardDescription className="text-base">
              Have you ever gazed at the stars and wondered about the origin of
              our universe? Through pure logic and reasoning, we'll explore how
              the intricate design of our cosmos points to the existence of
              Designer. No blind faith required—just your intellect and an open
              heart to discover the Creator's unmistakable signs.
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge
                  variant="secondary"
                  className="bg-amber-100 text-amber-800 hover:bg-amber-200"
                >
                  Evidence of Creator
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200"
                >
                  Divine Attributes
                </Badge>
              </div>
            </CardDescription>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-bold text-indigo-600">
            Spirituality
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <div className="p-4 bg-gray-50 rounded-lg mb-6">
          <p className="italic text-gray-700">
            <span className="font-semibold">Definition:</span> Spirituality is
            an individual's search for ultimate or sacred meaning and purpose in
            life, encompassing personal growth, religious experience, belief in
            a supernatural realm, and making sense of one's inner dimension.
          </p>
        </div>

        <div className="space-y-6">
          <section className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">
              It begins with belief in a higher power
            </h3>
            <p className="text-base text-amber-700">
              Every human has an innate desire to believe in God and recognize
              the signs of creation around us.
            </p>
          </section>

          <a
            className="flex p-3 rounded-md border justify-between items-center border-amber-600 text-amber-700 bg-amber-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-amber-100"
            href="/primary/god"
          >
            <span className="font-medium">Explore the existence of God</span>{" "}
            <ArrowRight className="h-5 w-5" />
          </a>

          <section className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              The Universe Exists
            </h3>
            <p className="text-base text-blue-700">
              The existence of anything proves the existence of its Creator.
            </p>
          </section>

          <section className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-purple-800 mb-2">
              The Infinite Chain Question
            </h3>
            <p className="text-base text-purple-700">
              A creator of a creator and a creator of that creator... leads to
              an infinite chain. But with infinite regress, the universe
              wouldn't exist, yet it does. Therefore, an eternal entity must
              exist.
            </p>
          </section>

          <a
            className="flex p-3 rounded-md border justify-between items-center border-purple-600 text-purple-700 bg-purple-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-purple-100"
            href="/primary/oneness"
          >
            <span className="font-medium">Explore the Oneness of God</span>{" "}
            <ArrowRight className="h-5 w-5" />
          </a>

          <section className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
            <h3 className="text-lg font-semibold text-indigo-800 mb-2">
              Divine Communication
            </h3>
            <p className="text-base text-indigo-700">
              Why would this Creator want to communicate with us at all?
            </p>
          </section>

          <a
            className="flex p-3 rounded-md border justify-between items-center border-violet-600 text-violet-700 bg-violet-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-violet-100"
            href="/primary/revelation"
          >
            <span className="font-medium">Explore the Need for Revelation</span>{" "}
            <ArrowRight className="h-5 w-5" />
          </a>

          <section className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              The Quran: Divine Revelation
            </h3>
            <p className="text-base text-green-700">
              Why the Quran is the Revelation from God
            </p>
          </section>

          <a
            className="flex p-3 rounded-md border justify-between items-center border-green-600 text-green-700 bg-green-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-green-100"
            href="/primary/quran"
          >
            <span className="font-medium">Explore the Quran</span>{" "}
            <ArrowRight className="h-5 w-5" />
          </a>

          <section className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              Prophet Muhammad: God's Messenger
            </h3>
            <p className="text-base text-blue-700">
              Why Prophet Muhammad was the true Messenger of God
            </p>
          </section>

          <a
            className="flex p-3 rounded-md border justify-between items-center border-blue-600 text-blue-700 bg-blue-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-blue-100 mb-4"
            href="/primary/prophethood"
          >
            <span className="font-medium">Explore the Prophet's Life</span>{" "}
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <SheetFooter className="mt-6 border-t pt-4 text-center text-sm text-gray-500">
          Embark on a journey of spiritual discovery guided by reason and faith.
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default SpiritualityDrawer;
