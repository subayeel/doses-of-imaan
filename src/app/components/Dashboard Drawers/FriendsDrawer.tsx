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

function FriendsDrawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <Card className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer">
          <CardContent>
            <CardTitle className="mb-2 flex justify-between">
              Friends <ArrowUpRight />
            </CardTitle>

            <CardDescription>
              "A person follows the religion of his close friend, so let each of
              you look at whom he befriends." This profound hadith reveals how
              friendships shape our spiritual journey. Discover Allah's guidance
              on nurturing friendships that strengthen your faith, encourage
              righteousness, and help you remember your Creator. Learn to
              balance genuine care with boundaries that protect your worship.
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

export default FriendsDrawer;
