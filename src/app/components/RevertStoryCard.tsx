/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Heart,
  PlayCircle,
  Quote,
  User,
  MapPin,
  Clock,
  HistoryIcon,
  Scroll,
  Lightbulb,
  AlertTriangle,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { RevertStory } from "@/utils/types";

const RevertStoryCard = ({ story }: { story: RevertStory }) => {
  // Get initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  // Get gender-based avatar color
  const getAvatarColor = (gender: string) => {
    return gender === "MALE" ? "bg-blue-600" : "bg-pink-500";
  };

  // Function to render narrative sections
  const renderSection = (
    title: string,
    content?: string,
    icon?: React.ReactNode
  ) => {
    if (!content) return null;

    return (
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300">{content}</p>
      </div>
    );
  };

  return (
    <Card className="w-full  mx-auto overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <Avatar className={`h-12 w-12 ${getAvatarColor(story.gender)}`}>
              <AvatarFallback>{getInitials(story.name)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">{story.name}</CardTitle>
              <CardDescription className="text-sm">
                Born as {story.birthName || "Name not mentioned"} • Age:{" "}
                {story.age}
              </CardDescription>
            </div>
          </div>
          <Badge variant="outline" className="text-sm">
            From {story.previousReligion} to Islam
          </Badge>
        </div>
      </CardHeader>

      <Separator />

      <div className="px-6 pb-4 pt-4">
        {renderSection(
          "Background",
          story.background,
          <User className="h-5 w-5 text-blue-500" />
        )}
        {renderSection(
          "Religious Upbringing",
          story.religiousUpbringing,
          <Scroll className="h-5 w-5 text-purple-500" />
        )}
        {renderSection(
          "Catalyst for Journey",
          story.catalystForJourney,
          <HistoryIcon className="h-5 w-5 text-green-500" />
        )}
        {renderSection(
          "Initial Beliefs",
          story.islamophobia,
          <AlertTriangle className="h-5 w-5 text-red-500" />
        )}
        {renderSection(
          "Materialism & Void",
          story.materialismAndVoid,
          <Heart className="h-5 w-5 text-pink-500" />
        )}
      </div>

      <div className="px-6 pb-4 pt-4">
        {renderSection(
          "Journey",
          story.journey,
          <MapPin className="h-5 w-5 text-red-500" />
        )}
        {renderSection(
          "First Muslim Encounter",
          story.firstMuslimEncounter,
          <User className="h-5 w-5 text-blue-500" />
        )}
        {renderSection(
          "Learning Journey",
          story.learningJourney,
          <BookOpen className="h-5 w-5 text-green-500" />
        )}
        {renderSection(
          "Quran Experience",
          story.quranExperience,
          <Scroll className="h-5 w-5 text-amber-500" />
        )}
        {renderSection(
          "Islam Experience",
          story.islamExperience,
          <Scroll className="h-5 w-5 text-amber-500" />
        )}
        {renderSection(
          "Spiritual Turning Point",
          story.spiritualTurningPoint,
          <Heart className="h-5 w-5 text-pink-500" />
        )}
        {renderSection(
          "Sign From Allah",
          story.signFromAllah,
          <Lightbulb className="h-5 w-5 text-yellow-500" />
        )}
        {renderSection(
          "Mosque Experience",
          story.mosqueTakeover,
          <MapPin className="h-5 w-5 text-purple-500" />
        )}
        {renderSection(
          "Conversion Experience",
          story.conversionExperience,
          <Heart className="h-5 w-5 text-pink-500" />
        )}
        {renderSection(
          "Shahada",
          story.shahada,
          <Quote className="h-5 w-5 text-green-500" />
        )}
        {renderSection(
          "Aftermath",
          story.aftermath,
          <Clock className="h-5 w-5 text-blue-500" />
        )}
        {renderSection(
          "Community Reaction",
          story.reactionOfCommunity,
          <User className="h-5 w-5 text-indigo-500" />
        )}
        {renderSection(
          "Transformation",
          story.transformation,
          <HistoryIcon className="h-5 w-5 text-teal-500" />
        )}
        {renderSection(
          "Reflections",
          story.reflections,
          <Lightbulb className="h-5 w-5 text-amber-500" />
        )}
        {renderSection(
          "Realizations",
          story.realizations,
          <Lightbulb className="h-5 w-5 text-amber-500" />
        )}
        {renderSection(
          "Conversion",
          story.conversion,
          <Heart className="h-5 w-5 text-pink-500" />
        )}
        {renderSection(
          "Challenges",
          story.challenges,
          <AlertTriangle className="h-5 w-5 text-red-500" />
        )}
      </div>

      <div className="px-6 pb-4 pt-4">
        {story.advice ? (
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              <h3 className="text-lg font-semibold">Advice for New Muslims</h3>
            </div>
            <p className="italic text-gray-700 dark:text-gray-300">
              "{story.advice}"
            </p>
          </div>
        ) : (
          <div className="text-center p-6 text-gray-500">
            No specific advice was shared in this story.
          </div>
        )}
      </div>

      <CardFooter className="bg-gray-50 dark:bg-gray-800 flex justify-between items-center p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          From {story.previousReligion} to Islam
        </div>
        <a href={story.videoLink} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="gap-2">
            <PlayCircle className="h-4 w-4" />
            Watch Video
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default RevertStoryCard;
