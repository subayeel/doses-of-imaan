/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
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
import { ArrowUpRight, Users } from "lucide-react";

function FriendsDrawer() {
  const quotes = [
    {
      text: "A man is upon the religion of his best friend, so let one of you look at whom he befriends.",
      source: "Sunan al-Tirmidhi",
    },
    {
      text: "Verily, the parable of good and bad company is that of a seller of musk and a blacksmith. The seller of musk will give you perfume, you will buy some, or you will notice a pleasant smell. As for the blacksmith, he will burn your clothes, or you will notice a bad smell.",
      source: "Sahih Bukhari and Muslim",
    },
    {
      text: "Verily, Allah will say on the Day of Resurrection: 'Where are those who love each other for the sake of My majesty? Today, I will shelter them in My shade on a day when there is no shade but Mine.'",
      source: "Sahih Muslim",
    },
    {
      text: "The parable of the believers in their affection, mercy, and compassion for each other is that of a body. When any limb aches, the whole body reacts with sleeplessness and fever.",
      source: "Sahih Bukhari and Muslim",
    },
    {
      text: "A man visited a brother of his in another town, and Allah sent an angel to wait for him on the road. When he came to him, he said: 'Where are you headed?' He said: 'I am headed to a brother of mine in this town.' He said: 'Have you done him any favor for which you hope to be recompensed?' He said: 'No, but I love him for the sake of Allah, may He be glorified and exalted.' He said: 'I am a messenger from Allah to you, to tell you that Allah loves you as you love him for His sake.'",
      source: "Sahih Muslim",
    },
  ];

  const verses = [
    {
      text: "The believing men and believing women are allies of one another. They enjoin what is right and forbid what is wrong and establish prayer and give charity and obey Allah and His Messenger. Allah will have mercy upon them, for Allah is Almighty and Wise.",
      source: "Surah At-Tawbah, 9:71",
    },
    {
      text: "O mankind, indeed, We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous of you. Indeed, Allah is Knowing and Aware.",
      source: "Surah Al-Hujarat, 49:13",
    },
  ];

  return (
    <Sheet>
      <SheetTrigger className="w-full">
        <Card className="border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-sm hover:shadow-md z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer bg-gray-50 dark:bg-gray-600">
          <CardContent className="p-6">
            <CardTitle className="mb-4 flex justify-between items-center ">
              <div className="flex items-center gap-2">
                <Users size={24} />
                Friends in Islam
              </div>
              <ArrowUpRight />
            </CardTitle>

            <CardDescription className="text-gray-700 text-base">
              "A man is upon the religion of his best friend, so let one of you
              look at whom he befriends."
              <p className="mt-2">
                This profound hadith reveals how our friendships shape our
                spiritual journey. Discover Allah's guidance on nurturing
                friendships that strengthen your faith.
              </p>
            </CardDescription>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto w-full sm:max-w-lg">
        <SheetHeader className="pb-4 border-b border-blue-100">
          <SheetTitle className="text-2xl text-blue-700 flex items-center gap-2">
            <Users className="text-blue-600" />
            Friends in Islam
          </SheetTitle>
          <SheetDescription className="text-gray-700">
            Guidance from the Quran and Sunnah about choosing good friends
          </SheetDescription>
        </SheetHeader>

        <div className="py-6">
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <p className="text-gray-700 mb-2">
              In Islam, choosing good friends is highly emphasized, because the
              company we keep can have a significant impact on our behavior,
              actions, and beliefs.
            </p>
            <p className="text-gray-700">
              Like flowers, friends come in all colors, shapes, and sizes. Some
              look and smell good, some are visibly appealing, and others have
              thorns. When picking a bouquet to beautify your home, you choose
              the best - likewise, we should pick the very best types of friends
              who will benefit us and remind us of Allah.
            </p>
          </div>

          <p className="text-lg mb-2 mt-4 font-semibold">Hadith</p>
          <div className="space-y-4">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 border-l-4 border-blue-500 shadow-sm"
              >
                <p className="text-gray-700 mb-2">"{quote.text}"</p>
                <p className="text-sm text-blue-600 font-medium">
                  {quote.source}
                </p>
              </div>
            ))}
          </div>

          <p className="text-lg mb-2 mt-4 font-semibold text-green-600">
            Quranic Verses related to Friends
          </p>
          <div className="space-y-4">
            {verses.map((verse, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 border-l-4 border-green-500 shadow-sm"
              >
                <p className="text-gray-700 mb-2">"{verse.text}"</p>
                <p className="text-sm text-green-600 font-medium">
                  {verse.source}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-blue-700 mt-4">
              Ways to Encourage Children to Choose Good Friends:
            </h3>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-blue-700">
                    Teach Islamic Values
                  </h4>
                  <p className="text-gray-700">
                    Faith-based knowledge begins at home. Teach your children
                    about the importance of having good character, honesty,
                    trustworthiness, and compassion through modeling appropriate
                    behavior and discussing Islamic teachings.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-blue-700">
                    Encourage Positive Behavior
                  </h4>
                  <p className="text-gray-700">
                    Encourage your children to engage in positive activities
                    such as volunteering, helping others, and participating in
                    Islamic events. This allows them to meet like-minded
                    individuals and build empathy.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-blue-700">
                    Monitor Your Child's Friends
                  </h4>
                  <p className="text-gray-700">
                    Get to know your children's friends and their families to
                    ensure they are associating with good company and to
                    identify any negative influences.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  4
                </div>
                <div>
                  <h4 className="font-medium text-blue-700">
                    Encourage Socialization
                  </h4>
                  <p className="text-gray-700">
                    Invite their friends over, attend Islamic events together,
                    and engage in activities that promote good character.
                    Socialization provides opportunities to increase in good
                    deeds.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  5
                </div>
                <div>
                  <h4 className="font-medium text-blue-700">
                    Foster Open Communication
                  </h4>
                  <p className="text-gray-700">
                    Create an environment where your children feel comfortable
                    discussing their social lives with you. Show affection,
                    patience, and compassion to keep lines of communication
                    open.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  6
                </div>
                <div>
                  <h4 className="font-medium text-blue-700">
                    Welcome Friends of All Backgrounds
                  </h4>
                  <p className="text-gray-700">
                    Expose your children to people of all backgrounds while
                    maintaining Islamic values. Every non-Muslim is a potential
                    Muslim or ally, and we should learn to see them just as we
                    see ourselves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-blue-100">
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-gray-700 italic">
              As Muslims, we have a responsibility to choose our friends wisely
              and to be good friends ourselves. By following valuable lessons in
              the Quran and Sunnah about seeking positive and supportive
              friendships, we can build meaningful relationships that enrich our
              lives and help us become better Muslims.
            </p>
          </div>
          <div className="mt-4 flex justify-end">
            <SheetClose asChild>
              <Button
                variant="outline"
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                Close
              </Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default FriendsDrawer;
