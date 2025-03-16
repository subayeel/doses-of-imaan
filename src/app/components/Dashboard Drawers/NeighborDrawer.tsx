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

function NeighborDrawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <Card className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer">
          <CardContent>
            <CardTitle className="mb-2 flex justify-between ">
              Neighbors <ArrowUpRight />
            </CardTitle>

            <CardDescription>
              Did you know the Prophet Muhammad (peace be upon him) emphasized
              neighbors' rights so strongly that early Muslims thought they
              might inherit from their neighbors? Explore how Islam elevates
              neighborly relations beyond mere courtesy to a spiritual
              obligation. Learn practical ways to revive this forgotten Sunnah
              and earn Allah's pleasure through kindness that transcends
              differences.
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

export default NeighborDrawer;
