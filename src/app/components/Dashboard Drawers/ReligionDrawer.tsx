/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
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

interface ReligionDrawerProps {
  state: boolean;
  resolvedTheme?: string;
}
function ReligionDrawer({ state, resolvedTheme }: ReligionDrawerProps) {
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
              Religion <ArrowUpRight />
            </CardTitle>
            <CardDescription>
              With so many religions claiming truth, how can you find the right
              path? We'll examine how Islam's pure monotheism, preserved
              scripture, and logical framework provide clear guidance from
              Allah. Discover why the message of Tawhid (Divine Oneness)
              resonates with your natural intuition and rational mind.
              <br />
              <div className="flex flex-wrap gap-1 mt-1">
                <Badge variant="secondary">Tawhid (Divine Oneness)</Badge>
                <Badge variant="secondary">Divine Revelation</Badge>
              </div>
            </CardDescription>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Religion</SheetTitle>
          <SheetDescription>
            With so many religions claiming truth, how can you find the right
            path? We'll examine how Islam's pure monotheism, preserved
            scripture, and logical framework provide clear guidance from Allah.
            Discover why the message of Tawhid (Divine Oneness) resonates with
            your natural intuition and rational mind.
          </SheetDescription>
        </SheetHeader>

        <p>
          While choosing a religion one must use his rationale and come to a
          proper conclusion
        </p>

        <p className="text-xl font-semibold">Premise</p>
        <ul>
          <li>Universe Exist</li>
          <li>It is made of Parts</li>
          <li>Parts are arranged</li>
          <li>Properties of parts are fine tuned</li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default ReligionDrawer;
