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

function LawDrawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <Card className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer">
          <CardContent>
            <CardTitle className="mb-2 flex justify-between ">
              Law & Order <ArrowUpRight />
            </CardTitle>

            <CardDescription>
              Islam teaches that following just laws is an extension of
              worshipping Allah. Explore how the Qur'anic principles of justice,
              public welfare (maslaha), and respect for authority create a
              framework for being an exemplary citizen while maintaining your
              primary identity as a servant of Allah. Learn how the early
              Muslims modeled civic responsibility while never compromising
              their faith.
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

export default LawDrawer;
