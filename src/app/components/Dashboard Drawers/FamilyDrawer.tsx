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

function ParentsDrawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <Card className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer">
          <CardContent>
            <CardTitle className="mb-2 flex justify-between ">
              Parents <ArrowUpRight />
            </CardTitle>

            <CardDescription>
              Allah elevates honoring parents just below worship of Him alone.
              Discover the profound spiritual rewards of treating parents with
              excellence (ihsan), even when challenging. The Prophet Muhammad
              (peace be upon him) taught that Paradise lies at the feet of
              mothers—learn practical ways to earn Allah's pleasure through
              fulfilling these sacred relationships.
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

export default ParentsDrawer;
