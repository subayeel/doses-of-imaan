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
  CardHeader,
} from "@/components/ui/card";
import {
  ArrowUpRight,
  Home,
  Book,
  MessageCircle,
  CheckCircle,
  Users,
} from "lucide-react";

function NeighborDrawer() {
  const quranVerses = [
    {
      verse: "The Believers are but a single Brotherhood.",
      surah: "Surah Al-Hujurat, 49:10",
      color: "bg-emerald-100 border-emerald-300",
    },
    {
      verse:
        "Worship Allah and associate nothing with Him, and to parents do good, and to relatives, orphans, the needy, the near neighbor, the neighbor farther away, the companion at your side, the traveler, and those whom your right hands possess.",
      surah: "Surah An-Nisa, 4:36",
      color: "bg-cyan-100 border-cyan-300",
    },
    {
      verse:
        "O mankind! We created you from a single (pair) of a male and a female, and made you into nations and tribes, that ye may know each other. Verily the most honored of you in the sight of Allah is the most righteous of you.",
      surah: "Surah Al-Hujurat, 49:13",
      color: "bg-violet-100 border-violet-300",
    },
  ];

  const hadiths = [
    {
      text: "Whoever believes in Allah and the Day of Judgment should either speak good words or keep silent; whoever believes in Allah and the Day of Judgment should treat his neighbor with kindness; and whoever believes in Allah and the Day of Judgment should show hospitality to his guest.",
      source: "Prophet Muhammad ﷺ as narrated by Abu Hurairah (Sahih Muslim)",
      color: "bg-amber-100 border-amber-300",
    },
    {
      text: "Gabriel impressed upon me kind treatment towards the neighbor so much that I thought he would confer upon him the right of inheritance.",
      source: "Prophet Muhammad ﷺ as narrated by Aishah (Sahih Al-Bukhari)",
      color: "bg-rose-100 border-rose-300",
    },
    {
      text: "He will not enter Paradise, a person whose neighbor is not secure from his ill conduct.",
      source: "Prophet Muhammad ﷺ as narrated by Abu Hurairah (Sahih Muslim)",
      color: "bg-orange-100 border-orange-300",
    },
    {
      text: "She will enter the Hell-fire.",
      source:
        "Prophet Muhammad's ﷺ remark about a woman who prayed at night and fasted but showed ill conduct to neighbors",
      color: "bg-red-100 border-red-300",
    },
    {
      text: "By Allah, he does not believe! By Allah, he does not believe! By Allah, he does not believe! It was said, 'Who is that, O Messenger of Allah?' He said, 'The one whose neighbor does not feel safe from his evil.'",
      source:
        "Prophet Muhammad ﷺ as narrated by Abu Hurairah (Sahih Al-Bukhari)",
      color: "bg-blue-100 border-blue-300",
    },
    {
      text: "The best of companions with Allah is the one who is best to his companions, and the best of neighbors with Allah is the one who is best to his neighbors.",
      source: "Prophet Muhammad ﷺ as narrated by Abdullah ibn Umar (Tirmidhi)",
      color: "bg-teal-100 border-teal-300",
    },
    {
      text: "Jibreel kept recommending treating neighbors with kindness until I thought he would assign a share of inheritance to them.",
      source:
        "Prophet Muhammad ﷺ as narrated by Ibn Umar (Sahih Al-Bukhari and Muslim)",
      color: "bg-indigo-100 border-indigo-300",
    },
  ];

  const duties = [
    {
      text: "To greet him/her when you meet him/her.",
      color: "bg-green-50",
    },
    {
      text: "To ask about him/her.",
      color: "bg-blue-50",
    },
    {
      text: "To visit him/her when they are sick.",
      color: "bg-purple-50",
    },
    {
      text: "To console him/her when he/she is afflicted with calamity.",
      color: "bg-red-50",
    },
    {
      text: "To condole him/her when any of his/her relatives passes away.",
      color: "bg-orange-50",
    },
    {
      text: "To congratulate him/her on happy occasions.",
      color: "bg-yellow-50",
    },
    {
      text: "To share his/her joys and pains.",
      color: "bg-emerald-50",
    },
    {
      text: "To forgive him/her when he/she does wrong to you.",
      color: "bg-teal-50",
    },
    {
      text: "To keep away from infringing on his/her privacy.",
      color: "bg-cyan-50",
    },
    {
      text: "To guide him/her to what he/she is ignorant about.",
      color: "bg-indigo-50",
    },
    {
      text: "To lower your gaze from his/her female household.",
      color: "bg-violet-50",
    },
    {
      text: "Not to bother him/her in any way; for example by putting dirty stuff in front of his/her home.",
      color: "bg-fuchsia-50",
    },
  ];

  return (
    <Sheet>
      <SheetTrigger>
        <Card className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer bg-gray-50 dark:bg-gray-600">
          <CardContent className="pt-6">
            <CardTitle className="mb-2 flex justify-between items-center ">
              Neighbors <ArrowUpRight />
            </CardTitle>

            <CardDescription className="text-gray-700">
              Did you know the Prophet Muhammad (peace be upon him) emphasized
              neighbors' rights so strongly that early Muslims thought they
              might inherit from their neighbors? Explore how Islam elevates
              neighborly relations beyond mere courtesy to a spiritual
              obligation. Learn practical ways to revive this forgotten Sunnah
              and earn Allah's pleasure through kindness that transcends
              differences.
            </CardDescription>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto bg-gradient-to-b from-green-50 to-teal-50 border-l-teal-200 w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-2xl text-teal-800 flex items-center gap-2">
            <Home className="text-emerald-600" /> The Rights of Neighbors in
            Islam
          </SheetTitle>
          <SheetDescription className="text-gray-700">
            Discover how Islam elevates the relationship with neighbors and
            learn about your responsibilities toward them.
          </SheetDescription>
        </SheetHeader>

        <div className="py-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium text-teal-800 mb-3 flex items-center gap-2">
              <Book className="text-emerald-600" /> Quranic Guidance on
              Neighborly Relations
            </h3>
            <div className="space-y-3">
              {quranVerses.map((verse, index) => (
                <Card key={index} className={`${verse.color} border shadow-sm`}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700">
                      {verse.surah}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="italic text-gray-800">{verse.verse}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-teal-800 mb-3 flex items-center gap-2">
              <MessageCircle className="text-emerald-600" /> Prophetic Teachings
              on Neighbors
            </h3>
            <div className="space-y-3">
              {hadiths.map((hadith, index) => (
                <Card
                  key={index}
                  className={`${hadith.color} border shadow-sm`}
                >
                  <CardContent className="pt-4">
                    <p className="italic text-gray-800 mb-2">{hadith.text}</p>
                    <p className="text-sm text-gray-700 font-medium">
                      — {hadith.source}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-teal-800 mb-3 flex items-center gap-2">
              <CheckCircle className="text-emerald-600" /> Your Duties Toward
              Neighbors
            </h3>
            <Card className="bg-gradient-to-r from-green-50 to-teal-50 border-teal-200 border shadow-sm">
              <CardContent className="pt-4">
                <div className="grid grid-cols-1 gap-2">
                  {duties.map((duty, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border ${duty.color} border-teal-200 shadow-sm`}
                    >
                      <p className="text-gray-800 flex items-start">
                        <span className="text-emerald-600 mr-2 mt-1">•</span>
                        <span>{duty.text}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-lg font-medium text-teal-800 mb-3 flex items-center gap-2">
              <Users className="text-emerald-600" /> The Importance of
              Neighborliness
            </h3>
            <Card className="bg-teal-100 border-teal-300 border shadow-sm">
              <CardContent className="pt-4">
                <p className="text-gray-800 mb-3">
                  Dear friend in Islam, The wisdom behind Islam's emphasis on
                  good neighborly relations is profound:
                </p>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2 mt-1">•</span>
                    <span>
                      Our neighbors are often the first to help in times of need
                      and emergency
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2 mt-1">•</span>
                    <span>
                      Strong neighborly bonds create safer, more supportive
                      communities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2 mt-1">•</span>
                    <span>
                      Treating neighbors well is a form of worship that pleases
                      Allah
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2 mt-1">•</span>
                    <span>
                      Good neighborly relations can be a means of dawah
                      (invitation to Islam)
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-emerald-100 border-emerald-300 border shadow-sm mt-3">
              <CardContent className="pt-4">
                <p className="text-gray-800">
                  Remember, living in isolation is not the Islamic way. Our
                  beautiful faith encourages unity, brotherhood, and strong
                  social ties. By keeping good relations with your neighbors,
                  you're not only fulfilling a religious obligation but also
                  creating a support network that will be there for you when you
                  need it most.
                </p>
                <p className="text-gray-800 mt-3">
                  Start today by reaching out to a neighbor with a simple
                  greeting, a small gift, or an offer of help. These small acts
                  can transform communities and bring us all closer to the
                  beautiful teachings of our faith.
                </p>
                <p className="text-gray-800 mt-3 font-medium">
                  "By so doing, Muslims will become stronger and united and thus
                  be able to confront difficulties and calamities."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <SheetFooter className="mt-6">
          <SheetClose>
            <Button className="bg-teal-600 hover:bg-teal-700">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default NeighborDrawer;
