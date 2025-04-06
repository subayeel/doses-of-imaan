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
  User,
  Baby,
  Book,
  Gift,
  Home,
} from "lucide-react";

function ChildrenDrawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <Card className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer bg-gradient-to-br from-blue-50 to-purple-50">
          <CardContent>
            <CardTitle className="mb-2 flex justify-between items-center text-indigo-700">
              Your Children <ArrowUpRight />
            </CardTitle>

            <CardDescription className="text-purple-700">
              Learn about children's rights in Islam
            </CardDescription>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto bg-gradient-to-br from-blue-50 to-purple-50 border-l-4 border-indigo-400">
        <SheetHeader>
          <SheetTitle className="text-2xl text-indigo-700 flex items-center gap-2">
            <Heart className="text-pink-500" size={24} /> Rights of Children in
            Islam
          </SheetTitle>
          <SheetDescription className="text-purple-700">
            Allah has given children rights over their parents just as parents
            have rights over their children.
          </SheetDescription>
        </SheetHeader>

        <div className="py-6 space-y-6">
          {/* Before Birth */}
          <Card className="bg-gradient-to-r from-pink-50 to-red-50 border-l-4 border-pink-400">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <User className="text-pink-500 mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-pink-700 mb-2">
                    Rights Before Birth
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Choosing a righteous wife to be a good mother is one of the
                    first rights a child has, even before birth.
                  </p>
                  <blockquote className="border-l-2 border-pink-300 pl-4 italic text-gray-600 text-sm">
                    "A woman may be married for four reasons: her wealth, her
                    lineage, her beauty and her religious commitment. Marry the
                    one who is religiously committed, may your hands be rubbed
                    with dust."
                    <br />
                    <span className="text-xs">
                      Narrated by al-Bukhari, 4802; Muslim, 1466
                    </span>
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* After Birth */}
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-400">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Baby className="text-blue-500 mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-blue-700 mb-2">
                    Rights After Birth
                  </h3>
                  <ul className="list-disc ml-5 space-y-3 text-gray-700">
                    <li>Tahnik: Sweetening the child's mouth when born</li>
                    <li>Good name: Such as 'Abd-Allah or 'Abd al-Rahman</li>
                    <li>Shaving the head on the seventh day</li>
                    <li>
                      'Aqiqah: Sacrificial animal (two sheep for a boy, one for
                      a girl)
                    </li>
                    <li>Circumcision for boys</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Book className="text-green-500 mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-green-700 mb-2">
                    Education & Upbringing
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Parents are responsible for teaching their children the
                    duties of Islam and other virtues.
                  </p>
                  <ul className="list-disc ml-5 space-y-2 text-gray-700">
                    <li>Teach correct 'aqidah (creed) free from shirk</li>
                    <li>Teach acts of worship, especially prayer</li>
                    <li>Train them in good manners and characteristics</li>
                    <li>
                      Teach them to fast and perform other religious duties
                    </li>
                  </ul>
                  <blockquote className="border-l-2 border-green-300 pl-4 italic text-gray-600 text-sm mt-3">
                    "Teach the child to pray when he is seven years old, and
                    smack him (lightly) if he does not pray when he is ten."
                    <br />
                    <span className="text-xs">
                      Narrated by al-Tirmidhi, 407; Abu Dawud, 494
                    </span>
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Financial Rights */}
          <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-400">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Gift className="text-amber-500 mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-amber-700 mb-2">
                    Financial Support & Fair Treatment
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Providing for your children financially is obligatory and
                    treating them equally is essential.
                  </p>
                  <blockquote className="border-l-2 border-amber-300 pl-4 italic text-gray-600 text-sm">
                    "It is sufficient sin for a man if he neglects those on whom
                    he is obliged to spend."
                  </blockquote>
                  <p className="mt-3 text-gray-700">
                    Children must be treated fairly without preference to boys
                    over girls or vice versa. The Prophet ﷺ said: "Fear Allah
                    and treat your children fairly."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Taking Care of Girls */}
          <Card className="bg-gradient-to-r from-purple-50 to-fuchsia-50 border-l-4 border-purple-400">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Home className="text-purple-500 mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-purple-700 mb-2">
                    Special Care for Daughters
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Raising daughters well is particularly emphasized as a
                    protection from the Hellfire.
                  </p>
                  <blockquote className="border-l-2 border-purple-300 pl-4 italic text-gray-600 text-sm">
                    "Whoever is in charge of any of these girls and treats them
                    well, they will be a shield for him against the Fire."
                    <br />
                    <span>Narrated by al-Bukhari, 5649; Muslim, 2629</span>
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <SheetFooter className="flex-col sm:flex-row gap-2">
          <SheetClose>
            <Button
              variant="outline"
              className="border-indigo-200 text-indigo-700"
            >
              Close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default ChildrenDrawer;
