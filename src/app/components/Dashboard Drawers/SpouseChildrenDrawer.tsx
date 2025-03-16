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

function SpouseChildrenDrawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <Card className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer">
          <CardContent>
            <CardTitle className="mb-2 flex justify-between">
              Spouse & Children <ArrowUpRight />
            </CardTitle>

            <CardDescription>
              Islamic marriage is a profound spiritual bond described in the
              Qur'an as a source of tranquility and mercy. Explore how Allah's
              guidance transforms marriage into an act of worship and
              child-raising into a sacred trust. Learn practical wisdom from the
              Prophet's example of nurturing a family centered on remembrance of
              Allah and mutual compassion.
            </CardDescription>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Family</SheetTitle>
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

export default SpouseChildrenDrawer;
