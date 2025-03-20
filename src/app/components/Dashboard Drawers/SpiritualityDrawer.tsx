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
import { ArrowUpRight } from "lucide-react";
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
          className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer"
          style={{
            background: state
              ? resolvedTheme === "dark"
                ? "#1a2e1a"
                : "#f9ffd9"
              : "",
          }}
        >
          <CardContent>
            <CardTitle className="mb-2 flex justify-between">
              Spirituality <ArrowUpRight />
            </CardTitle>
            <CardDescription>
              Have you ever gazed at the stars and wondered who created all
              this? Using pure logic and reasoning, we'll explore how the
              intricate design of our universe points to the existence of Allah.
              No blind faith required—just your intellect and an open heart to
              discover the Creator's unmistakable signs.
              <br />
              <div className="flex flex-wrap gap-1 mt-1">
                <Badge variant="secondary">Evidence of Creator</Badge>
                <Badge variant="secondary">Divine Attributes</Badge>
              </div>
            </CardDescription>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Spirituality</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <p className="italic text-gray-600">
          Definition: Spirituality, in general, is an individual's search for
          ultimate or sacred meaning and purpose in life, encompassing personal
          growth, religious experience, belief in a supernatural realm, and
          making sense of one's inner dimension
        </p>

        <p className="text-xl my-2 text-center">
          It begins with belief in a higher power
        </p>

        <p className="text-xl my-2 text-center">
          Every Human has innate desire to believe in God
        </p>

        <p className="text-xl my-2 text-center">Universe Exists</p>

        <p className="text-xl my-2 text-center">
          Existence of anything proves the Existence of its Creator
        </p>

        <p className="text-xl my-2 text-center">
          creator of a creator and creator of that creator...Infinite Chain?🤔
        </p>

        <p className="text-xl my-2 text-center">
          With infinite regress, Universe wouldn't exist, but it does exist.
        </p>

        <p className="text-xl my-2 text-center">
          Hence, Entity which is eternal must exist.
        </p>

        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default SpiritualityDrawer;
