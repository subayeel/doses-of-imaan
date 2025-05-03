/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

function SpouseDrawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <Card className="border border-pink-100   z-10 hover:scale-105 transition-all ease-in-out hover:cursor-pointer bg-gray-50 dark:bg-gray-600">
          <CardContent>
            <CardTitle className="mb-2 flex justify-between ">
              Spouse <ArrowUpRight />
            </CardTitle>
            <CardDescription>
              Islamic marriage is a sacred bond of love, mercy, and mutual
              respect. Discover the beautiful balance of rights and
              responsibilities between husband and wife as guided by the Qur'an
              and Sunnah.
            </CardDescription>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">
            Rights of Spouses in Islam
          </SheetTitle>
          <SheetDescription>
            A peaceful, loving home begins with mutual understanding of each
            other's rights and responsibilities.
          </SheetDescription>
        </SheetHeader>

        <ScrollArea className="h-[80vh] pr-2 mt-2 space-y-6 text-sm leading-6 text-gray-700">
          <div>
            <h3 className="text-lg font-semibold text-rose-600 mb-2">
              🌸 Importance of Rights in Marriage
            </h3>
            <p>
              Marriage in Islam isn't just a social contract—it's a sacred bond
              where both husband and wife are garments for one another, offering
              protection, comfort, and dignity. Knowing each other's rights
              helps strengthen love, prevents harm, and ensures fairness and
              harmony in family life.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-pink-600 mb-2">
              👩‍🦰 Rights of the Wife over the Husband
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Financial Support (Nafaqah):</strong> The husband must
                provide for her food, clothing, shelter, and basic needs with
                kindness.
              </li>
              <li>
                <strong>Respect & Good Treatment:</strong> She should be treated
                with love and mercy. The Prophet ﷺ was the best to his wives.
              </li>
              <li>
                <strong>Fairness:</strong> In case of multiple wives, Islam
                commands just and equal treatment.
              </li>
              <li>
                <strong>Emotional Care:</strong> A wife deserves attention,
                kindness, and time from her husband.
              </li>
              <li>
                <strong>Freedom to Practice Religion:</strong> Her connection
                with Allah must be respected and supported.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              👨‍🦱 Rights of the Husband over the Wife
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Obedience in Good:</strong> A wife should respect and
                obey her husband in matters that are pleasing to Allah.
              </li>
              <li>
                <strong>Protecting His Honor:</strong> Guarding his home,
                dignity, and secrets, especially in his absence.
              </li>
              <li>
                <strong>Love & Cooperation:</strong> Nurturing love and teamwork
                in building a peaceful home.
              </li>
              <li>
                <strong>Raising Children Together:</strong> Islam sees children
                as an amanah (trust) from Allah, to be nurtured together with
                care and faith.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-emerald-600 mb-2">
              🤝 A Relationship Built on Mercy
            </h3>
            <p>
              "And among His signs is that He created for you from yourselves
              mates that you may find tranquility in them; and He placed between
              you affection and mercy." — <em>Qur'an 30:21</em>
            </p>
            <p className="mt-2">
              Islam reminds us that marriage is not about power or control. It's
              about love, support, and a shared journey toward Jannah. Each
              right comes with responsibility, and when both spouses seek to
              please Allah, their marriage becomes a form of worship. 🌟
            </p>
          </div>
        </ScrollArea>

        <SheetFooter className="mt-4 text-center text-xs text-gray-500">
          © Our Dawah — Spreading love and light through knowledge 💞
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default SpouseDrawer;
