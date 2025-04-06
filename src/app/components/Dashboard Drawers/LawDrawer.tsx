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
  Book,
  Users,
  CheckCircle,
  GitCompare,
} from "lucide-react";

function LawDrawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <Card className="border shadow-none z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer bg-gradient-to-r from-emerald-50 to-teal-50">
          <CardContent>
            <CardTitle className="mb-2 flex justify-between text-emerald-700">
              Law & Order <ArrowUpRight />
            </CardTitle>

            <CardDescription>
              Islam teaches that following just laws is an extension of
              worshipping Allah. Explore how the Qur'anic principles of justice,
              public welfare (maslaha), and respect for authority create a
              framework for being an exemplary citizen while maintaining your
              primary identity as a servant of Allah. Learn how the early
              Muslims modeled civic responsibility while never compromising
              their faith.
            </CardDescription>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent className="bg-gradient-to-b from-white to-emerald-50 overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl text-emerald-700">
            Law & Order
          </SheetTitle>
          <SheetDescription className="text-gray-600">
            Explore the foundations of Islamic Law (Shariah)
          </SheetDescription>
        </SheetHeader>

        {/* Introduction */}
        <section className="my-6">
          <h1 className="text-xl font-bold text-emerald-700 mb-2">
            What is Shariah?
          </h1>
          <p className="text-sm text-gray-700 bg-white p-4 rounded-lg shadow-sm">
            Meaning of the word "Shariah" is "a way". In Islamic terminology,
            Shariah meaning refers to a "Legal System", or "The Law of Islam".
            It refers to the matters of religion that Allah has legislated for
            humans. Allah has sent messengers to people, who guide them to the
            Right Path. A path that leads them to happiness in this world and
            hereafter. All messengers taught the same message "Worship Only One
            God". However, the specific prescriptions of these divine laws
            varied according to the needs of "People" and "Time" through sources
            of Muslim Law or Islamic Law.
          </p>
        </section>

        <section className="my-6">
          <h1 className="text-xl font-bold text-emerald-700 mb-2">
            Domain of Muslims:
          </h1>
          <p className="text-sm text-gray-700 bg-white p-4 rounded-lg shadow-sm">
            The word "Muslim" means "One who submits to Allah". Islam expects a
            Muslim to follow its laws, in every aspect of life. Islamic Shariah
            is not limited, and no aspect of human life is outside its domain.
            Whether it is: Personal and familial, Religious and social, moral
            and political, or even related to business and economics.
          </p>
        </section>

        <section className="my-6">
          <h1 className="text-xl font-bold text-emerald-700 mb-2">
            Shariah in the Light of the Quran:
          </h1>
          <p className="text-sm text-gray-700 bg-white p-4 rounded-lg shadow-sm">
            The Holy Prophet Muhammad (Peace be upon him) was His last
            messenger, and his Shariah represents the ultimate manifestation of
            divine mercy. In the Holy Quran, Allah says:
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 my-4 italic bg-emerald-50 p-3 rounded-r-lg">
            "Today, I have perfected your way of life for you, and completed My
            favour upon you, and have chosen Islam as your way of life."
            <br />
            <span className="text-xs font-bold text-emerald-700">
              Quran 5:3
            </span>
          </blockquote>
        </section>

        <section className="my-6">
          <h1 className="text-xl font-bold text-emerald-700 mb-2">
            The Encompassing Scope of Muslim Law and Life
          </h1>
          <p className="text-sm text-gray-700 bg-white p-4 rounded-lg shadow-sm">
            The word "Muslim" means "One who submits to Allah". Islam expects a
            Muslim to follow its laws, in every aspect of life. The Muslim Law
            is not limited, and no aspect of human life is outside its domain.
            Whether it is: Personal and familial, Religious and social, moral
            and political, or even related to business and economics.
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 my-4 italic bg-emerald-50 p-3 rounded-r-lg">
            "It is not fitting for a Believer, man or woman, when a matter has
            been decided by Allah and His Messenger, to have any option about
            their decision. If anyone disobeys Allah and His Messenger, he is
            indeed on a clearly wrong Path."
            <br />
            <span className="text-xs font-bold text-emerald-700">
              Quran 33:36
            </span>
          </blockquote>
        </section>

        <section className="my-6">
          <h1 className="text-xl font-bold text-emerald-700 mb-2">
            Sources of Muslim Law (Shariah)
          </h1>
          <p className="text-sm text-gray-700 bg-white p-4 rounded-lg shadow-sm mb-4">
            Shariah laws are abstracted from the following four resources:
          </p>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-600">
              <div className="flex items-center mb-2">
                <Book className="text-emerald-600 mr-2" size={20} />
                <h2 className="text-lg font-bold text-emerald-700">
                  QURAN: First Source
                </h2>
              </div>
              <p className="text-sm text-gray-700">
                Quran is the sacred book of Muslims and is the primary source of
                the Muslim laws. Allah dictated the Quran through Angle Jibrael,
                the Angel, to Prophet Muhammad (Peace be upon him). The Quran is
                a complete code of conduct itself, and it covers all the areas
                of human life. It tells us what Allah wants us to do, from birth
                to death.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-600">
              <div className="flex items-center mb-2">
                <Users className="text-teal-600 mr-2" size={20} />
                <h2 className="text-lg font-bold text-teal-700">
                  SUNNAH: Second Source
                </h2>
              </div>
              <p className="text-sm text-gray-700">
                The word Sunnah means "a system", "a path", or "an example". In
                Islam, it refers to the practices of the Prophet Muhammad (Peace
                be upon him), and his life examples. Sunnah are the things that
                Prophet Muhammad (Peace be upon him) said, did, or agreed to.
                Sunnah clarifies details of what is stated generally in the
                Quran.
              </p>
              <div className="mt-2 bg-teal-50 p-2 rounded-lg">
                <p className="text-xs font-bold text-teal-700">
                  What is Hadith?
                </p>
                <p className="text-xs text-gray-600">
                  These are the "Sayings, actions, and the actions done with the
                  approval of Prophet Muhammad (Peace Be Upon Him)". They
                  include issues concerning personal conduct, community, family
                  relations, and political matters.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-cyan-600">
              <div className="flex items-center mb-2">
                <CheckCircle className="text-cyan-600 mr-2" size={20} />
                <h2 className="text-lg font-bold text-cyan-700">
                  IJMA: Third Source
                </h2>
              </div>
              <p className="text-sm text-gray-700">
                It may be defined as: "Consensus of opinion of the companions of
                the Holy Prophet Muhammad (Peace be upon him) or Muslim jurists
                of the first three centuries of the Hijra". Ijma is simply an
                agreed-upon decision. It is used in an Islamic society to
                overcome a problem that could not be found in Quran or Sunnah.
              </p>
              <blockquote className="text-xs italic mt-2 bg-cyan-50 p-2 rounded-lg">
                "If anything comes to you for decision, according to the book of
                Allah, if anything comes to you, which is not in the book of
                Allah, then look to the Sunnah of the Prophet (Peace be upon
                him). If anything comes to you, which is not in the Sunnah of
                Prophet Muhammad (Peace be upon him), then look to what people
                unanimously agrees upon."
                <br />
                <span className="font-bold text-cyan-700">Hadith</span>
              </blockquote>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
              <div className="flex items-center mb-2">
                <GitCompare className="text-blue-600 mr-2" size={20} />
                <h2 className="text-lg font-bold text-blue-700">
                  QIYAS: Fourth Source
                </h2>
              </div>
              <p className="text-sm text-gray-700">
                Qiyas means, "Judging by comparing with something". It may be
                defined as "The analogy from the Quran, the Sunnah, and Ijma".
                Qiyas can be carried out only in a Sharia-governed state when a
                solution to a problem cannot be found in the Quran, Sunnah, and
                Ijma.
              </p>
              <blockquote className="text-xs italic mt-2 bg-blue-50 p-2 rounded-lg">
                "Judge upon the book of Allah, upon the Sunnah of the Prophet,
                and if you do not find it in that, then use your personal
                opinion."
                <br />
                <span className="font-bold text-blue-700">Hadith</span>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="my-6">
          <h1 className="text-xl font-bold text-emerald-700 mb-2">
            Why Shariah Laws are Important?
          </h1>
          <p className="text-sm text-gray-700 bg-white p-4 rounded-lg shadow-sm">
            Muslims believe that the purpose of their creation is nothing but
            servitude, which is being a servant to the creator of mankind. They
            also believe that without the guidance of Allah, no one will meet
            this purpose. Therefore fulfillment of the servitude mission under
            the Shariah-compliant laws is following the guidance of Allah.
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 my-4 italic bg-emerald-50 p-3 rounded-r-lg">
            "Shariah is a path set by Allah for those who accept Him, in order
            to attain success both in the worldly life, and in the hereafter."
          </blockquote>
        </section>

        <SheetFooter className="mt-6">
          <SheetClose>
            <Button
              variant="outline"
              className="border-emerald-600 text-emerald-700 hover:bg-emerald-50"
            >
              Close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default LawDrawer;
