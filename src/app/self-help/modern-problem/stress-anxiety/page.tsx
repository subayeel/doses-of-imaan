/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Book, Award, Heart, Star, Clock } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function StressAndAnxietySolution() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-2">
          Stress & Anxiety
        </h1>
        <p className="text-center text-blue-600 mb-8">
          Islamic Framework for Inner Peace
        </p>

        <Card className="bg-white shadow-xl border-2 border-blue-200 overflow-hidden">
          <div className="bg-blue-600 h-3"></div>
          <CardHeader className="bg-blue-500 text-white">
            <CardTitle className="text-2xl font-bold">
              The Islamic Approach
            </CardTitle>
            <CardDescription className="text-blue-100">
              Divine guidance for mental wellbeing
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Alert className="bg-blue-100 border-blue-300">
                <BookOpen className="h-5 w-5 text-blue-700" />
                <AlertTitle className="font-semibold text-blue-800">
                  Quranic Guidance
                </AlertTitle>
                <AlertDescription className="italic text-blue-700">
                  "Verily, in the remembrance of Allah do hearts find rest."{" "}
                  <span className="font-semibold">(13:28)</span>
                </AlertDescription>
              </Alert>

              <Alert className="bg-amber-100 border-amber-300">
                <Book className="h-5 w-5 text-amber-700" />
                <AlertTitle className="font-semibold text-amber-800">
                  Prophetic Wisdom
                </AlertTitle>
                <AlertDescription className="italic text-amber-700">
                  "How wonderful is the affair of the believer! All his affairs
                  are good. If something good happens to him, he is grateful,
                  and that is good for him. If something bad happens, he is
                  patient, and that is good for him."{" "}
                  <span className="font-semibold">(Muslim)</span>
                </AlertDescription>
              </Alert>
            </div>

            <Tabs defaultValue="explanation" className="w-full">
              <TabsList className="grid grid-cols-3 mb-2">
                <TabsTrigger value="explanation">Explanation</TabsTrigger>
                <TabsTrigger value="implementation">Implementation</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
              </TabsList>

              <TabsContent
                value="explanation"
                className="bg-gray-50 p-4 rounded-md"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Islamic Framework
                </h3>
                <p className="text-gray-700">
                  Islam tackles stress and anxiety through a comprehensive
                  approach that addresses both spiritual and practical aspects.
                  At its core, Islam teaches that remembrance of Allah (dhikr)
                  calms the heart and provides perspective. The Quran emphasizes
                  trust in Allah's plan (tawakkul), while acknowledging that
                  tests are part of life. The Prophet Muhammad ﷺ taught
                  practical methods of managing emotional distress through
                  prayer, supplication, and maintaining a positive outlook
                  regardless of circumstances.
                </p>
              </TabsContent>

              <TabsContent value="implementation" className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-white rounded shadow-sm border border-gray-200">
                  <Clock className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Regular Prayer (Salah)
                    </h4>
                    <p className="text-gray-600 text-sm">
                      The five daily prayers provide structure and designated
                      times to disconnect from worldly stress and reconnect with
                      Allah.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded shadow-sm border border-gray-200">
                  <Heart className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Remembrance (Dhikr)
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Regular remembrance of Allah through phrases like
                      "SubhanAllah" (Glory be to Allah) and "Alhamdulillah" (All
                      praise is due to Allah) brings tranquility.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded shadow-sm border border-gray-200">
                  <Star className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Trust in Divine Decree (Tawakkul)
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Knowing that everything happens by Allah's will and wisdom
                      reduces worry about outcomes beyond our control.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent
                value="benefits"
                className="bg-green-50 p-4 rounded-md"
              >
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 mt-1">•</div>
                    <div>
                      Provides a spiritual anchor during difficult times
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 mt-1">•</div>
                    <div>
                      Creates mental resilience through perspective and
                      gratitude
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 mt-1">•</div>
                    <div>
                      Offers community support through congregational worship
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 mt-1">•</div>
                    <div>
                      Establishes healthy emotional regulation through patience
                      (sabr)
                    </div>
                  </li>
                </ul>
              </TabsContent>
            </Tabs>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                <Award className="h-5 w-5" /> Resolution in Islamic Framework
              </h3>
              <p className="text-blue-700">
                Islam resolves stress and anxiety by providing both spiritual
                anchors and practical tools. Rather than merely managing
                symptoms, the Islamic approach addresses the root causes by
                realigning one's relationship with the Creator and reframing
                life's challenges as meaningful tests. Through consistent
                prayer, remembrance, and trust in Allah's plan, Muslims develop
                psychological resilience and spiritual peace that transcends
                temporary difficulties.
              </p>
            </div>
          </CardContent>

          <CardFooter className="bg-gray-50 border-t border-gray-200 p-4">
            <p className="text-sm text-gray-600 italic">
              "No person suffers any anxiety or grief, and says: 'O Allah, I am
              Your slave, son of Your slave, son of Your female slave, my
              forelock is in Your hand, Your command over me is forever executed
              and Your decree over me is just...' but Allah will remove his
              sorrow and grief, and give him joy instead."{" "}
              <span className="font-semibold">(Ahmad)</span>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
