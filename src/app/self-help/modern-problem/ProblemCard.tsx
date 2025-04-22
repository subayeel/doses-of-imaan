/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Book, Award, ArrowRight } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface IslamicSolutionCardProps {
  title: string;
  quranRef: string;
  quranText: string;
  hadithRef: string;
  hadithText: string;
  implementation: string[];
  bgColor?: string;
}

export default function IslamicSolutionCard({
  title,
  quranRef,
  quranText,
  hadithRef,
  hadithText,
  implementation,
  bgColor = "bg-green-100",
}: IslamicSolutionCardProps) {
  const getLink = () => {
    const folderName = title
      .toLowerCase()
      .replace(/[^a-z]+/g, "-")
      .replace(/^-|-$/g, "");

    return "modern-problem/" + folderName;
  };
  return (
    <Card
      className={`${bgColor} shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200`}
    >
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-gray-800">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 w-full">
        <Alert className="bg-blue-100 border-blue-300">
          <BookOpen className="h-5 w-5 text-blue-700" />
          <AlertTitle className="font-semibold text-blue-800">Quran</AlertTitle>
          <AlertDescription className="italic text-blue-700">
            "{quranText}" <span className="font-semibold">({quranRef})</span>
          </AlertDescription>
        </Alert>

        <Alert className="bg-amber-100 border-amber-300">
          <Book className="h-5 w-5 text-amber-700" />
          <AlertTitle className="font-semibold text-amber-800">
            Hadith
          </AlertTitle>
          <AlertDescription className="italic text-amber-700">
            "{hadithText}" <span className="font-semibold">({hadithRef})</span>
          </AlertDescription>
        </Alert>

        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-start gap-3">
            <Award className="h-5 w-5 text-green-700 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">
                Implementation:
              </h4>
              <ul className="text-gray-700 space-y-1 list-disc pl-5">
                {implementation.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Link className="flex w-full" href={getLink()}>
          <Button variant="outline" className="ml-auto">
            View More <ArrowRight />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
