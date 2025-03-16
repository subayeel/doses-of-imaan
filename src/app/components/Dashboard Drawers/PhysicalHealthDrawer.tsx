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

interface PhysicalHealthDrawerProps {
  state: boolean;
  resolvedTheme?: string;
}
function PhysicalHealthDrawer({
  state,
  resolvedTheme,
}: PhysicalHealthDrawerProps) {
  return (
    <Sheet>
      <SheetTrigger>
        <Card
          className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer"
          style={{
            background: state
              ? resolvedTheme === "dark"
                ? "#2e1a29"
                : "#f7d5e8"
              : "",
          }}
        >
          <CardContent>
            <CardTitle className="mb-2 flex justify-between">
              Physical Health <ArrowUpRight />
            </CardTitle>
            <CardDescription>
              Islam's holistic approach to physical wellbeing preceded modern
              medicine by centuries. Explore how the Prophet Muhammad's (peace
              be upon him) teachings on diet, hygiene, fasting, and moderation
              create a divinely-guided blueprint for physical health that honors
              your body as an amanah (trust) from Allah.
            </CardDescription>
            <div className="flex flex-wrap gap-1 mt-2">
              <Badge variant="secondary">Exercise</Badge>
              <Badge variant="secondary">Nutrition</Badge>
              <Badge variant="secondary">Sleep</Badge>
              <Badge variant="secondary">Manage stress</Badge>
            </div>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Diseases of the Heart</SheetTitle>
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

export default PhysicalHealthDrawer;
