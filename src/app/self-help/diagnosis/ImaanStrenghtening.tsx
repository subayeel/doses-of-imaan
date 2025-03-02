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

import { Sparkle } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";

const ImaanStrengthening = () => {
  return (
    <div className="container mx-auto max-w-6xl space-y-4 ">
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
        <p className="text-amber-800 font-medium">
          <span className="font-bold">Reminder:</span> The Prophet ﷺ said: "He
          who has in his heart the weight of a mustard seed of pride shall not
          enter Paradise."
          <span className="block mt-2 text-sm">[Sahih Muslim]</span>
        </p>
      </div>

      {/* Strengthening of Imaan Dua */}
      <Card>
        <CardHeader>
          <CardTitle>Du'a for Imaan to be firm in our hearts</CardTitle>
          <CardDescription>From Surah Al-Imran, Verse 8</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-xl font-arabic text-right leading-loose">
              رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ
              لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ
            </p>
            <div className="space-y-2">
              <p className="font-medium">Pronunciation:</p>
              <p className="italic">
                Rabbana la tuzigh quloobana ba'da iz ha-day-tana wa hab lana
                mil-la-dunka rahmah innaka antal Wahhab
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-medium">Meaning:</p>
              <p>
                "Our Lord, let not our hearts deviate after You have guided us
                and grant us from Yourself mercy. Indeed, You are the Bestower."
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Protection from Shaytann*/}
      <Card>
        <CardHeader>
          <CardTitle>Seeking Refuge from Shaytaan</CardTitle>
          <CardDescription>From the Sunnah of the Prophet ﷺ</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-xl font-arabic text-right leading-loose">
              رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَعُوذُ بِكَ
              رَبِّ أَنْ يَحْضُرُونِ
            </p>
            <div className="space-y-2">
              <p className="font-medium">Pronunciation:</p>
              <p className="italic">
                Rabbi a’oozu bika min hamazaatish Shayaateen Wa a’oozu bika
                Rabbi ai-yahduroon
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-medium">Meaning:</p>
              <p>
                “My Lord, I seek refuge in You from the incitements of the
                devils, And I seek refuge in You, my Lord, lest they be present
                with me.”
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-extralight">Reference:</p>
              <p>Surah Muminun 97-98</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <p className="text-sm text-gray-600">
            The Prophet ﷺ recommended saying this before reciting Quran and when
            feeling whispers of Shaytaan.
          </p>
        </CardFooter>
      </Card>

      {/* QR1 */}
      <Card className="relative overflow-hidden">
        <CardHeader>
          <CardTitle>Feeling Weak?</CardTitle>
          <CardDescription>
            If you ever feel that your Imaan is getting week please take dose of
            Quick-Recovery
          </CardDescription>
        </CardHeader>
        <div className="px-6 pb-6">
          <Card
            className="border rounded-md overflow-hidden relative flex items-center gap-4 hover:bg-gray-200 hover:cursor-pointer"
            onClick={() => (window.location.href = "/self-help/quick-recovery")}
          >
            <div className="flex items-center justify-center pl-6">
              <Sparkle size={40} color="purple" className="m-auto" />
            </div>

            <CardContent className="space-y-2">
              <CardTitle> Self-help: Quick Recovery</CardTitle>
              <CardDescription>
                Practical, spiritual steps to strengthen your faith and
                reconnect with Allah during times of weakness
              </CardDescription>
            </CardContent>
            <BorderBeam
              duration={6}
              size={400}
              className="from-transparent via-red-500 to-transparent"
            />
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default ImaanStrengthening;
