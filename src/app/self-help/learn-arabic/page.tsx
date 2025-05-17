/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import {
  Book,
  PlayCircle,
  Calendar,
  GraduationCap,
  Route,
  Link,
} from "lucide-react";
import Image from "next/image";

interface ResourceLink {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  note?: string;
}

interface RoadmapStage {
  level: string;
  title: string;
  description: string;
  focus: string[];
}

export default function ArabicLearningResources() {
  const [activeTab, setActiveTab] = useState<"resources" | "roadmap">(
    "resources"
  );

  const resources: ResourceLink[] = [
    {
      title: "Arabic 101 eBook",
      description: "Comprehensive guide to Arabic basics",
      url: "https://store.arabic101.org/product/85ebook/",
      icon: <Book className="w-6 h-6" />,
      note: "Consider selecting the free option only if you truly cannot afford to pay",
    },
    {
      title: "Understand 50% of Quran",
      description: "Video playlist covering essential Quranic vocabulary",
      url: "https://youtube.com/playlist?list=PL6TlMIZ5ylgrYBl5c2LGoc1iwTPyYMMYH&si=cYwzsczbBv1_S_fy",
      icon: <PlayCircle className="w-6 h-6" />,
    },
    {
      title: "Quranic Arabic in 21 Days",
      description: "Accelerated course for Quranic Arabic foundations",
      url: "https://youtu.be/f3oi5zfaGSM?si=Qzl6vGcensNgPRzM",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: "Madinah Arabic Free Course",
      description: "Structured lessons from beginner to advanced",
      url: "https://www.madinaharabic.com/arabic-language-course/lessons/",
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ];

  const roadmap: RoadmapStage[] = [
    {
      level: "Beginner (Level 1)",
      title: "Foundation",
      description:
        "Master basic verb conjugation, types of words, and sentence structure",
      focus: [
        "Past, present, command verb forms",
        "Basic sentence structure",
        "Essential dialogue",
        "Story of Ibrahim",
      ],
    },
    {
      level: "Beginner (Level 2)",
      title: "Basic Construction",
      description: "Learn nouns, derivatives, syntax, and introductory texts",
      focus: [
        "Noun patterns",
        "Verb patterns I-IX",
        "Story of Yusuf",
        "Clips of the practice of Sunnah",
      ],
    },
    {
      level: "Intermediate (Level 3)",
      title: "Applied Grammar",
      description:
        "Study advanced morphology, grammar, and begin Quran analysis",
      focus: [
        "Advanced study of verb patterns",
        "Selections from Juz 'Amma",
        "Shu'arā' [1-37]",
        "Intermediate connectors",
      ],
    },
    {
      level: "Intermediate (Level 4)",
      title: "Complex Structures",
      description:
        "Focus on irregular verbs, advanced grammar, and expanded Quranic analysis",
      focus: [
        "Irregular verb patterns",
        "Advanced grammar topics",
        "Shu'arā' [83-159]",
        "Series on life of Khadijah",
      ],
    },
    {
      level: "Advanced (Level 5)",
      title: "Rhetorical Expression",
      description:
        "Study figurative speech, linguistic pragmatics, and classical texts",
      focus: [
        "Figurative speech and imagery",
        "Sūrat al-Kahf",
        "Prophetic biography",
        "Law",
      ],
    },
    {
      level: "Advanced (Level 6)",
      title: "Mastery",
      description:
        "Achieve mastery of rhetorical embellishments and complex Quranic analysis",
      focus: [
        "Balāgha: rhetorical topics",
        "Sciences of the Qur'ān",
        "Sūrat Yāsīn",
        "Special elective classes",
      ],
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 w-full items-start">
      <div className="max-w-md mx-auto overflow-hidden">
        <div className="p-6">
          <h1 className="text-4xl font-bold text-emerald-700 mb-4">
            Learn Quranic Arabic
          </h1>

          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`flex-1 py-2 text-center ${
                activeTab === "resources"
                  ? "text-emerald-600 border-b-2 border-emerald-600 font-medium"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("resources")}
            >
              Resources
            </button>
            <button
              className={`flex-1 py-2 text-center ${
                activeTab === "roadmap"
                  ? "text-emerald-600 border-b-2 border-emerald-600 font-medium"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("roadmap")}
            >
              Roadmap
            </button>
          </div>

          {/* Resources Tab */}
          {activeTab === "resources" && (
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">
                Select from these valuable resources to begin or continue your
                Arabic learning journey:
              </p>

              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border border-gray-200 rounded-lg hover:bg-emerald-50 transition-colors duration-200"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-emerald-600 mr-3">
                      {resource.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {resource.description}
                      </p>
                      {resource.note && (
                        <p className="text-xs text-amber-600 mt-1 italic">
                          {resource.note}
                        </p>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Roadmap Tab */}
          {activeTab === "roadmap" && (
            <div className="space-y-6">
              <p className="text-gray-600 mb-4">
                Follow this structured roadmap based on the Fawakih Institute's
                curriculum:
              </p>

              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-emerald-200"></div>

                {roadmap.map((stage, index) => (
                  <div key={index} className="relative mb-8">
                    <div className="flex items-start">
                      <div className="absolute left-0 mt-1">
                        <div className="bg-emerald-500 h-6 w-6 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="ml-10">
                        <h3 className="font-bold text-emerald-700">
                          {stage.level}
                        </h3>
                        <h4 className="font-medium text-gray-900">
                          {stage.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {stage.description}
                        </p>
                        <ul className="list-disc list-inside text-xs text-gray-600 pl-2">
                          {stage.focus.map((item, i) => (
                            <li key={i} className="mb-1">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <a href="https://fawakih.org/arabic" target="_blank">
                  <div className="inline-flex items-center text-emerald-600 text-sm">
                    <Route className="w-4 h-4 mr-1" />
                    Based on Fawakih Institute's Quranic Arabic Curriculum
                    <Link className=" ml-2 hover:cursor-pointer" size={14} />
                  </div>
                </a>
              </div>
            </div>
          )}

          <div className="mt-6 text-center text-xs text-gray-500">
            <p>
              Start your journey to understanding the Quran in its original
              language
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full min-h-screen">
        <Image
          src="/learn-arabic.png"
          width={300}
          height={300}
          alt="Learn Arabic"
          className="m-auto"
        />
      </div>
    </div>
  );
}
