/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
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
          <SheetDescription>This action cannot be undone.</SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <Button>Submit</Button>
          <SheetClose>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default SpiritualityDrawer;
