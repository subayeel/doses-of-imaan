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

interface MentalClarityDrawerProps {
  state: boolean;
  resolvedTheme?: string;
}
function MentalClarityDrawer({
  state,
  resolvedTheme,
}: MentalClarityDrawerProps) {
  return (
    <Sheet>
      <SheetTrigger>
        <Card
          className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer"
          style={{
            background: state
              ? resolvedTheme === "dark"
                ? "#1a2742"
                : "#dce3f9"
              : "",
          }}
        >
          <CardContent>
            <CardTitle className="mb-2 flex justify-between">
              Mental Clarity <ArrowUpRight />
            </CardTitle>
            <CardDescription>
              In a world of endless distractions, the Qur'an offers a framework
              for crystal-clear thinking. Discover how regular contemplation of
              Allah's signs, structured daily prayers, and Qur'anic wisdom train
              your mind to focus on what truly matters, helping you make
              decisions aligned with your purpose of worshipping the Creator.
            </CardDescription>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Mental Clarity</SheetTitle>
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

export default MentalClarityDrawer;
