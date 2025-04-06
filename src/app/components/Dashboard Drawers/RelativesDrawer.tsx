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
  BookOpen,
  Users,
  Heart,
  MessageSquareQuote,
} from "lucide-react";

function RelativesDrawer() {
  const quranVerses = [
    {
      verse:
        "Give the relative his right, and the needy and the wayfarer. And do not squander recklessly.",
      surah: "Surah Al-Isrâ', 17:26",
      color: "bg-blue-100 border-blue-300",
    },
    {
      verse:
        "Worship Allah, and do not associate with Him anything, and be good to parents and to kinsmen and orphans and the needy and the close neighbor and the distant neighbor and the companion at your side and the wayfarer and to those (slaves who are) owned by you. Surely, Allah does not like those who are arrogant, proud,",
      surah: "Surah An-Nisâ, 4:36",
      color: "bg-green-100 border-green-300",
    },
    {
      verse:
        "So, (O hypocrites,) do you not apprehend that, in case you turn away (from Jihād ), you will spread disorder in the land and will sever your ties of kinship? Those are the ones whom Allah has cursed; so He has made them deaf, and made their eyes blind.",
      surah: "Surah Muhammad, 47:22-23",
      color: "bg-purple-100 border-purple-300",
    },
  ];

  const hadiths = [
    {
      text: "Allah created the creations, and when He finished, the bonds of kinship raised up and said, 'It is the place (the Paradise) of those who seek refuge with You against the breaking of the bonds (of kinship).' He said, 'Yes, would you like that I maintain the bonds with the one who maintains it with You and that I break with the one who broke with You?' The bonds of kinship said, 'Indeed!' Allah said, 'Then I grant it to you.'",
      source: "Sahih Al-Bukhari and Muslim",
      color: "bg-amber-100 border-amber-300",
    },
    {
      text: "Whoever believes in Allah and the Last Day, let him maintain the bonds of kinship.",
      source: "Prophet Muhammad ﷺ",
      color: "bg-rose-100 border-rose-300",
    },
    {
      text: "The one who maintains the ties of kinship is not the one who reciprocates. The one who maintains the ties of kinship is the one who, when his relatives cut him off, maintains the ties of kinship.",
      source:
        "Prophet Muhammad ﷺ as reported by Abdullah ibn Amr ibn al-'Âs (R.A) in Sahih Al-Bukhari",
      color: "bg-teal-100 border-teal-300",
    },
    {
      text: "If you are as you say, it is as if you are feeding them hot ashes, and you will be with a supporter against them from Allah as long as you continue to do so.",
      source:
        "Prophet Muhammad ﷺ's reply to a man who maintained ties despite mistreatment",
      color: "bg-indigo-100 border-indigo-300",
    },
  ];

  return (
    <Sheet>
      <SheetTrigger>
        <Card className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer bg-gradient-to-br from-purple-50 to-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <CardTitle className="mb-2 flex justify-between items-center text-blue-800">
              Relatives <ArrowUpRight className="text-purple-600" />
            </CardTitle>

            <CardDescription className="text-gray-700">
              The concept of silat al-rahim (maintaining family ties) is so
              significant in Islam that Allah links it to His mercy. Discover
              how nurturing extended family relationships, even with
              differences, becomes an act of worship that brings baraka (divine
              blessing) into your life and lengthens your provision, as the
              Prophet Muhammad (peace be upon him) taught.
            </CardDescription>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto bg-gradient-to-b from-blue-50 to-purple-50 border-l-blue-200">
        <SheetHeader>
          <SheetTitle className="text-2xl text-blue-800 flex items-center gap-2">
            <Users className="text-purple-600" /> The Rights of Relatives in
            Islam
          </SheetTitle>
          <SheetDescription className="text-gray-700">
            Learn about the importance of maintaining family ties and the
            Islamic guidance on treating relatives.
          </SheetDescription>
        </SheetHeader>

        <div className="py-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium text-blue-800 mb-3 flex items-center gap-2">
              <BookOpen className="text-purple-600" /> Quranic Verses on Family
              Bonds
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
            <h3 className="text-lg font-medium text-blue-800 mb-3 flex items-center gap-2">
              <MessageSquareQuote className="text-purple-600" /> Hadiths on
              Family Relations
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
            <h3 className="text-lg font-medium text-blue-800 mb-3 flex items-center gap-2">
              <Heart className="text-purple-600" /> The True Meaning of
              Maintaining Kinship
            </h3>
            <Card className="bg-blue-100 border-blue-300 border shadow-sm">
              <CardContent className="pt-4">
                <p className="text-gray-800">
                  Maintaining the ties of kinship isn't just about reciprocating
                  kindness. It's about keeping those bonds strong even when
                  others may cut them off. The true maintainer of family ties is
                  the one who continues to show love and kindness regardless of
                  how they're treated in return.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-100 border-purple-300 border shadow-sm mt-3">
              <CardContent className="pt-4">
                <p className="text-gray-800">
                  When you maintain family ties for the sake of Allah, you bring
                  families closer, provide affection, sympathy, and mutual
                  assistance during difficulties. These beautiful blessings are
                  reversed when people move away from each other and when bonds
                  are broken.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <SheetFooter className="mt-6">
          <SheetClose>
            <Button className="bg-blue-600 hover:bg-blue-700">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default RelativesDrawer;
