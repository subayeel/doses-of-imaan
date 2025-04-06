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
  Star,
  Users,
  Gift,
  Sparkle,
  Home,
} from "lucide-react";

function ParentsDrawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <Card className="border border-purple-100  z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer bg-gradient-to-br from-purple-50 to-blue-50 hover:shadow-purple-200/50">
          <CardContent>
            <CardTitle className="mb-2 flex justify-between text-purple-800">
              Parents <ArrowUpRight className="text-pink-500" />
            </CardTitle>

            <CardDescription className="text-blue-900/80">
              Allah elevates honoring parents just below worship of Him alone.
              Discover the profound spiritual rewards of treating parents with
              excellence (ihsan), even when challenging. The Prophet Muhammad
              (peace be upon him) taught that Paradise lies at the feet of
              mothers—learn practical ways to earn Allah's pleasure through
              fulfilling these sacred relationships.
            </CardDescription>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-center mb-4">
            The Sacred Position of Parents in Islam
          </SheetTitle>
          <SheetDescription className="text-center text-lg mb-6">
            Islam places parents among the highest ranks of those deserving our
            respect, love, and care
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 py-4">
          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold flex items-center gap-2">
              <Users className="h-5 w-5" /> Our Duty
            </h3>
            <p className="italic mt-2">
              "And worship Allah and do not set up any partners with Him. And
              treat the parents with moral excellence."
            </p>
            <p className="text-sm text-slate-600 mt-1">Surah An-Nisa 4:36</p>
            <p className="mt-3">
              Allah mentions kindness to parents immediately after the command
              to worship Him alone, showing the extraordinary importance of
              honoring our parents in Islam.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-green-500">
            <h3 className="font-bold flex items-center gap-2">
              <Sparkle className="h-5 w-5" /> Their Right to Demand
            </h3>
            <p className="italic mt-2">
              "Messenger of Allah (peace be upon him) what rights can parents
              demand from their children?" He replied, "They are your Paradise
              and your Hell."
            </p>
            <p className="text-sm text-slate-600 mt-1">
              Al-Tirmidhi – Hadith 1277
            </p>
            <p className="mt-3">
              This powerful hadith reminds us that our treatment of parents can
              lead us either to Paradise or Hell—they are a direct pathway to
              Allah's pleasure or displeasure.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-bold flex items-center gap-2">
              <Heart className="h-5 w-5" /> Look at Your Parents with Mercy
            </h3>
            <p className="italic mt-2">
              "Every righteous child who casts a look of mercy and affection
              upon his parents shall be granted, for every look of his, rewards
              equivalent to that of an accepted Hajj."
            </p>
            <p className="text-sm text-slate-600 mt-1">
              Biharul Anwar, Volume 74, Page 73
            </p>
            <p className="mt-3">
              Even a simple loving glance toward your parents carries immense
              rewards in Islam. This teaches us to be mindful of even the
              smallest interactions with our parents.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-amber-500">
            <h3 className="font-bold flex items-center gap-2">
              <Star className="h-5 w-5" /> Obey Your Parents
            </h3>
            <p className="italic mt-2">
              "One, who follows the orders of Allah with regards to obeying
              parents, shall have two doors of Paradise opened up for him. And
              if there happens to be only one parent, one door of Paradise shall
              open up for him."
            </p>
            <p className="text-sm text-slate-600 mt-1">
              Kanzul `Ummal, Volume 16, Page 67
            </p>
            <p className="mt-3">
              Obedience to parents is rewarded with easier entry to Paradise.
              This demonstrates the high spiritual value Islam places on
              honoring parents' wishes.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-red-500">
            <h3 className="font-bold flex items-center gap-2">
              <Gift className="h-5 w-5" /> Repayment
            </h3>
            <p className="italic mt-2">
              "One who performs Hajj on behalf of his parents and repays their
              debts shall be raised by Allah on the Day of Judgment amongst the
              righteous ones."
            </p>
            <p className="text-sm text-slate-600 mt-1">
              Kanzul `Ummal, Volume 16, Page 468
            </p>
            <p className="mt-3">
              Islam encourages us to continue honoring our parents even after
              their death by fulfilling their obligations and performing good
              deeds on their behalf.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-indigo-500">
            <h3 className="font-bold flex items-center gap-2">
              <Home className="h-5 w-5" /> Respect for All
            </h3>
            <p className="italic mt-2">
              "Allah's Messenger, who amongst the people is most deserving of my
              good treatment? He said: Your mother, again your mother, again
              your mother, then your father, then your nearest relatives
              according to the order (of nearness)"
            </p>
            <p className="text-sm text-slate-600 mt-1">
              Sahih Muslim Book 32, Number 6180
            </p>
            <p className="mt-3">
              This famous hadith emphasizes the special position of mothers, who
              are mentioned three times before fathers. This recognizes the
              unique sacrifices and care that mothers provide.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-teal-500">
            <h3 className="font-bold flex items-center gap-2">
              <Sparkle className="h-5 w-5" /> Make Dua for Your Parents
            </h3>
            <p className="italic mt-2">
              "And lower to them the wing of humility out of mercy and say, 'My
              Lord, have mercy upon them as they brought me up [when I was]
              small.'"
            </p>
            <p className="text-sm text-slate-600 mt-1">Surah Al-Isra 24</p>
            <p className="mt-3">
              Allah teaches us the exact words to use when praying for our
              parents, reminding us of the care they showed us when we were
              helpless children.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border mt-6">
            <h3 className="font-bold text-lg mb-3">
              Practical Ways to Honor Your Parents
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="bg-green-100 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span>
                  Speak to them with gentleness and respect, never raising your
                  voice
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-green-100 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span>Fulfill their needs before they ask</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-green-100 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span>
                  Seek their advice and include them in your decisions
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-green-100 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span>
                  Make regular dua for them, especially after their passing
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-green-100 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span>Maintain ties with their friends and loved ones</span>
              </li>
            </ul>
          </div>
        </div>

        <SheetFooter className="flex-col space-y-2 sm:space-y-0 mt-6">
          <SheetClose asChild>
            <Button className="w-full">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default ParentsDrawer;
