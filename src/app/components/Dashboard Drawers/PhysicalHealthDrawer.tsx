import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  HeartPulse,
  Leaf,
  Droplet,
  SunMedium,
  Brain,
  Smile,
  ArrowUpRight,
} from "lucide-react";

interface PhysicalHealthDrawerProps {
  state: boolean;
  resolvedTheme?: string;
}

const PhysicalHealthDrawer = ({
  state,
  resolvedTheme,
}: PhysicalHealthDrawerProps) => {
  const healthTips = [
    {
      icon: <HeartPulse className="text-red-500" />,
      title: "Embrace Movement",
      description:
        "Any movement counts! Dancing, walking, gardening - find joy in staying active.",
      color: "bg-red-50",
    },
    {
      icon: <Leaf className="text-green-500" />,
      title: "Balanced Nutrition",
      description:
        "Fuel your body with colorful veggies, whole grains, and lean proteins.",
      color: "bg-green-50",
    },
    {
      icon: <Droplet className="text-blue-500" />,
      title: "Stay Hydrated",
      description:
        "Drink 8-10 cups daily. Pro tip: Add lemon or mint for extra flavor!",
      color: "bg-blue-50",
    },
    {
      icon: <SunMedium className="text-yellow-500" />,
      title: "Sunshine & Fresh Air",
      description:
        "Just 15 minutes outside can boost your Vitamin D and clear your mind.",
      color: "bg-yellow-50",
    },
    {
      icon: <Brain className="text-purple-500" />,
      title: "Mental Challenges",
      description:
        "Keep your brain sharp with puzzles, reading, or learning a new hobby.",
      color: "bg-purple-50",
    },
    {
      icon: <Smile className="text-pink-500" />,
      title: "Mindfulness",
      description:
        "Be present in the moment. Try guided meditations to get started.",
      color: "bg-pink-50",
    },
  ];

  return (
    <Sheet>
      <SheetTrigger className="w-full">
        <Card
          className="border shadow-lg z-10 hover:scale-105 transition-all duration-300 ease-in-out hover:cursor-pointer md:min-w-[350px] overflow-hidden relative"
          style={{
            background: state
              ? resolvedTheme === "dark"
                ? "linear-gradient(135deg, #3d1a1a 0%, #6b2525 100%)"
                : "linear-gradient(135deg, #fff5f5 0%, #ffd1d1 100%)"
              : "",
            borderRadius: "0.75rem",
          }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-blue-300 opacity-20"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-pink-300 opacity-20"></div>
          <CardHeader>
            <CardTitle className="flex items-center justify-between gap-2">
              <span>
                <HeartPulse className="text-pink-600" />
                Physical Wellbeing Guide
              </span>
              <ArrowUpRight className="h-5 w-5 text-pink-500" />
            </CardTitle>
            <CardDescription>
              Your holistic path to physical and mental health
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Movement</Badge>
              <Badge variant="secondary">Nutrition</Badge>
              <Badge variant="secondary">Mindfulness</Badge>
            </div>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent className="w-[400px] overflow-y-auto">
        <SheetHeader className="mb-4">
          <SheetTitle className="text-2xl">Your Wellness Roadmap 🌟</SheetTitle>
          <SheetDescription>
            Simple, actionable tips to boost your physical and mental health
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-4">
          {healthTips.map((tip, index) => (
            <Card
              key={index}
              className={`${tip.color} hover:shadow-md transition-shadow`}
            >
              <CardContent className="flex items-center gap-4 p-4">
                <div className="text-3xl">{tip.icon}</div>
                <div>
                  <h3 className="font-bold text-lg">{tip.title}</h3>
                  <p className="text-sm text-gray-600">{tip.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          Remember, small steps lead to big changes! 💪❤️
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default PhysicalHealthDrawer;
