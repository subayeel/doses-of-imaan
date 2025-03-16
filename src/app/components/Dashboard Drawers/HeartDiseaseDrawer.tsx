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

interface HeartDiseaseDrawerProps {
  state: boolean;
  resolvedTheme?: string;
}
function HeartDiseaseDrawer({ state, resolvedTheme }: HeartDiseaseDrawerProps) {
  return (
    <Sheet>
      <SheetTrigger>
        <Card
          className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer md:min-w-[350px]"
          style={{
            background: state
              ? resolvedTheme === "dark"
                ? "#3d1a1a"
                : "#ffd1d1"
              : "",
          }}
        >
          <CardContent>
            <CardTitle className="mb-2 flex justify-between">
              Diseases of the Heart <ArrowUpRight />
            </CardTitle>
            <CardDescription className="flex flex-wrap gap-1">
              <Badge variant="secondary">Desires and Greed</Badge>
              <Badge variant="secondary">
                Negative Verbal and Physical Behaviors
              </Badge>
              <Badge variant="secondary">Negative Emotions</Badge>
              <Badge variant="secondary">Negative Character</Badge>
              <Badge variant="secondary">Negative Spirituality</Badge>
            </CardDescription>
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

export default HeartDiseaseDrawer;
