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
import {
  ArrowUpRight,
  Heart,
  AlertCircle,
  BookOpen,
  Brain,
  Shield,
  Sun,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface HeartDiseaseDrawerProps {
  state: boolean;
  resolvedTheme?: string;
}

function HeartDiseaseDrawer({ state, resolvedTheme }: HeartDiseaseDrawerProps) {
  const diseaseCategories = [
    {
      title: "Desires and Greed",
      icon: <AlertCircle className="h-5 w-5 text-red-500" />,
      color: "bg-red-100 border-red-400",
      textColor: "text-red-800",
      badgeColor: "bg-red-100 text-red-800",
      examples: [
        "Uncontrolled physical desires (excessive eating, sexual urges)",
        "Desire to accumulate worldly wealth",
        "Greed and avarice",
        "Fear of poverty",
        "Fear of death",
      ],
    },
    {
      title: "Negative Verbal and Physical Behaviors",
      icon: <BookOpen className="h-5 w-5 text-orange-500" />,
      color: "bg-orange-100 border-orange-400",
      textColor: "text-orange-800",
      badgeColor: "bg-orange-100 text-orange-800",
      examples: [
        "Lying and deceit",
        "Gossiping and slandering",
        "Cursing and blaming others",
        "Mocking (bullying)",
        "Boasting and revealing secrets",
        "Making false promises",
        "Negative thoughts toward others",
        "Suspicion and unfounded jealousy",
      ],
    },
    {
      title: "Negative Emotions",
      icon: <Brain className="h-5 w-5 text-purple-500" />,
      color: "bg-purple-100 border-purple-400",
      textColor: "text-purple-800",
      badgeColor: "bg-purple-100 text-purple-800",
      examples: [
        "Anger and resentment",
        "Hatred and hostility",
        "Fear and anxiety",
        "Worry and disappointment",
        "Envy and heartbreak",
        "Deep regret",
      ],
    },
    {
      title: "Negative Character Traits",
      icon: <Shield className="h-5 w-5 text-blue-500" />,
      color: "bg-blue-100 border-blue-400",
      textColor: "text-blue-800",
      badgeColor: "bg-blue-100 text-blue-800",
      examples: [
        "Arrogance and excessive pride",
        "Showing off and desiring praise",
        "Feelings of superiority",
        "Seeking reputation",
        "Egotism",
      ],
    },
    {
      title: "Negative Spirituality",
      icon: <Sun className="h-5 w-5 text-amber-500" />,
      color: "bg-amber-100 border-amber-400",
      textColor: "text-amber-800",
      badgeColor: "bg-amber-100 text-amber-800",
      examples: [
        "Hypocrisy",
        "Rejecting fate (qadar)",
        "Excessive attachment to worldly matters",
        "High ego",
        "Associating partners with God (shirk)",
      ],
    },
  ];

  return (
    <Sheet>
      <SheetTrigger>
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
          <div className="absolute -top-8 -right-6 w-24 h-24 rounded-full bg-red-300 opacity-20"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-pink-300 opacity-20"></div>

          <CardContent className="p-5 relative">
            <CardTitle className="mb-3 flex justify-between items-center text-xl font-bold text-red-700">
              <span className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                Diseases of the Heart
              </span>
              <ArrowUpRight className="h-5 w-5 text-red-500" />
            </CardTitle>
            <CardDescription className="text-base text-gray-700 mb-4">
              Explore the psychological framework of spiritual and moral
              ailments from an Islamic perspective, and their impact on our
              wellbeing and relationships.
            </CardDescription>
            <div className="flex flex-wrap min-w-[400px] gap-2">
              {diseaseCategories.map((category) => (
                <Badge
                  key={category.title}
                  variant="secondary"
                  className={`${category.badgeColor} hover:${category.badgeColor} font-medium`}
                >
                  {category.title}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader className="mb-6 border-b pb-4">
          <SheetTitle className="flex items-center gap-2 text-2xl font-bold text-red-700">
            <Heart className="text-red-500 fill-red-500" /> Diseases of the
            Heart
          </SheetTitle>
          <SheetDescription className="text-base">
            A psychological framework from the Islamic perspective on spiritual
            ailments
          </SheetDescription>
        </SheetHeader>

        <div className="py-4 space-y-8">
          <div className="bg-gradient-to-r from-red-50 to-pink-50 p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-red-700">
              What are Diseases of the Heart?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The concept of "diseases of the heart" is rooted in Islamic
              tradition, specifically mentioned in the Quran (Surah Al-Baqarah,
              verse 10). The heart in this context is not the physical organ,
              but the spiritual heart (qalb) - considered the center of
              consciousness, intention, and moral compass.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              These spiritual ailments affect our behavior, emotions, and
              relationships, creating barriers between ourselves and true inner
              peace. By recognizing and addressing these conditions, we can
              develop greater self-awareness and spiritual well-being.
            </p>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">
              Why This Understanding Matters
            </h3>
            <p className="text-gray-700 leading-relaxed">
              This framework supports the Sustainable Development Goals (SDG 3:
              Good Health and Wellbeing) by promoting mental health through an
              Islamic psychological perspective. Understanding these concepts
              can help improve overall psychological wellbeing, emotional
              regulation, and interpersonal relationships.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              Modern psychology increasingly recognizes the importance of
              spiritual health as a component of overall wellbeing, making these
              ancient insights relevant to contemporary therapeutic approaches.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">
              The Five Categories of Heart Diseases
            </h3>

            {diseaseCategories.map((category, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-l-4 ${category.color} shadow-sm hover:shadow-md transition-shadow`}
              >
                <h4
                  className={`font-semibold text-lg mb-2 flex items-center gap-2 ${category.textColor}`}
                >
                  {category.icon}
                  {category.title}
                </h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  {category.examples.map((example, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-purple-50 p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-purple-700">
              Connection to Modern Mental Health
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded-md shadow-sm">
                <p className="text-gray-700">
                  <span className="font-semibold text-purple-800">
                    Symptom Relationship:
                  </span>{" "}
                  Many diseases of the heart manifest as symptoms in various
                  mental health disorders. For example, anger appears in
                  conditions like Intermittent Explosive Disorder and Borderline
                  Personality Disorder. Excessive fear and anxiety directly
                  correspond to anxiety disorders classified in modern
                  psychology.
                </p>
              </div>

              <div className="bg-white p-3 rounded-md shadow-sm">
                <p className="text-gray-700">
                  <span className="font-semibold text-purple-800">
                    Universal Nature:
                  </span>{" "}
                  These traits are found in people across all walks of life,
                  including those in positions of power or influence. No one is
                  immune to these spiritual challenges, which is why
                  self-awareness and continuous self-improvement are emphasized
                  in Islamic spiritual practice.
                </p>
              </div>

              <div className="bg-white p-3 rounded-md shadow-sm">
                <p className="text-gray-700">
                  <span className="font-semibold text-purple-800">
                    Holistic Treatment Approach:
                  </span>{" "}
                  Islamic psychology offers a complementary approach to modern
                  mental health treatment, addressing the spiritual dimension
                  alongside biological and psychological factors.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-gray-700">
              Research Background
            </h3>
            <p className="text-gray-700 leading-relaxed">
              This framework was presented at the Islamic Psychology Summit
              (October 27-28, 2024) organized by the Faculty of Psychology,
              Universitas Gadjah Mada (UGM), in collaboration with the
              International Association of Muslim Psychologists (IAMP) and the
              International Institute of Islamic Thought (IIIT).
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              It represents a growing field of research that bridges traditional
              Islamic knowledge with contemporary psychological understanding,
              creating culturally responsive approaches to mental health and
              wellbeing.
            </p>
          </div>
        </div>

        <SheetFooter className="border-t mt-6 pt-4 flex justify-between">
          <p className="text-sm text-gray-500 italic">
            "Truly, in the remembrance of Allah do hearts find rest." (Quran
            13:28)
          </p>
          <SheetClose asChild>
            <Button
              variant="outline"
              className="border-red-200 text-red-700 hover:bg-red-50"
            >
              Close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default HeartDiseaseDrawer;
