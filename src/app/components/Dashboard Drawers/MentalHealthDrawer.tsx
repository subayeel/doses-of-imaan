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

interface MentalHealthDrawerProps {
  state: boolean;
  resolvedTheme?: string;
}
function MentalHealthDrawer({ state, resolvedTheme }: MentalHealthDrawerProps) {
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
              Mental Health <ArrowUpRight />
            </CardTitle>

            <CardDescription>
              True peace of mind comes through connecting with Allah. Explore
              how Islamic practices like prayer, dhikr (remembrance), and
              mindfulness create mental tranquility beyond what modern
              psychology alone can offer. When your thoughts align with your
              Creator's guidance, anxiety diminishes and clarity emerges.
            </CardDescription>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Mental health</SheetTitle>
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

export default MentalHealthDrawer;
