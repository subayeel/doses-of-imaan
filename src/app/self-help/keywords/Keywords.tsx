/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChevronDown,
  Book,
  Award,
  Star,
  Check,
  MessagesSquare,
  Pen,
  Wallet,
  Clock,
  Users,
  AlertTriangle,
  BookMarked,
  Sword,
  Heart,
  BookOpen,
  CheckCircle,
  XCircle,
  Circle,
  MinusCircle,
  Search,
  Scroll,
} from "lucide-react";
import {
  AngelType,
  CompanionType,
  DivineBooksType,
  EventType,
  FamilyMemberType,
  JihadType,
  MajorSinType,
} from "@/utils/types";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Component for Asma' al-Qur'an (Names of the Qur'an)
const AsmaAlQuran = () => {
  const names = [
    {
      name: "Al-Qur'ān (القرآن)",
      meaning: "The Recitation",
      description: "That which is recited. Used over 70 times in the Qur'an.",
      reference: "Indeed, it is a Noble Qur'an. — (Surah al-Waqi'ah 56:77)",
      emoji: "📖",
    },
    {
      name: "Al-Kitāb (الكتاب)",
      meaning: "The Book",
      description:
        "The Written Scripture, denoting the preserved form of revelation.",
      reference:
        "This is the Book in which there is no doubt... — (Surah al-Baqarah 2:2)",
      emoji: "📔",
    },
    {
      name: "Al-Furqān (الفرقان)",
      meaning: "The Criterion",
      description:
        "Separator of truth and falsehood, highlighting the Qur'an's role in distinguishing right from wrong.",
      reference:
        "Blessed is He who sent down the Criterion upon His Servant... — (Surah al-Furqan 25:1)",
      emoji: "⚖️",
    },
    {
      name: "Al-Dhikr (الذِّكر)",
      meaning: "The Reminder",
      description:
        "The Universal Reminder and Mention, encouraging reflection and remembrance of Allah.",
      reference:
        "This is nothing but a reminder to the worlds. — (Surah Sad 38:87)",
      emoji: "💭",
    },
  ];

  return (
    <Card className="w-full overflow-hidden bg-gradient-to-br from-green-50 to-teal-100 dark:from-green-900 dark:to-teal-950">
      <CardHeader className="bg-green-600 text-white">
        <CardTitle className="flex items-center gap-2 text-2xl">
          <BookOpen className="h-6 w-6" />
          Asma' al-Qur'an (أسماء القرآن)
        </CardTitle>
        <CardDescription className="text-green-100">
          The Beautiful Names of the Holy Qur'an ✨
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid gap-4 md:grid-cols-2">
          {names.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-green-200 dark:border-green-800 overflow-hidden">
                <CardHeader className="bg-green-100 dark:bg-green-800 pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg text-green-800 dark:text-green-100">
                      {item.name}
                    </CardTitle>
                    <span className="text-3xl">{item.emoji}</span>
                  </div>
                  <CardDescription className="font-medium text-green-600 dark:text-green-300">
                    {item.meaning}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm mb-4">{item.description}</p>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-100 border-green-200 dark:border-green-700"
                  >
                    {item.reference}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="bg-green-50 dark:bg-green-900 px-6 py-4 text-sm text-green-700 dark:text-green-200">
        <p>
          These names highlight the multifaceted nature and divine significance
          of the Qur'an 🌟
        </p>
      </CardFooter>
    </Card>
  );
};

// Component for Durood Sharif (Sending Blessings on the Prophet)
const DuroodSharif = () => {
  const duroodInfo = [
    {
      title: "Quranic Command",
      content:
        "Indeed, Allah and His angels send blessings upon the Prophet. O you who believe, send blessings and peace upon him abundantly.",
      reference: "Surah Al-Ahzab (33:56)",
      arabic:
        "إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا",
      emoji: "📜",
    },
    {
      title: "10 Mercies",
      content:
        "Whoever sends one blessing upon me, Allah will send ten blessings upon him.",
      reference: "Muslim 408",
      emoji: "❤️",
    },
    {
      title: "Nearness on Qiyamah",
      content:
        "Those closest to me on the Day of Judgement will be those who sent the most Durood upon me.",
      reference: "Tirmidhi 484",
      emoji: "🤲",
    },
    {
      title: "Acceptance of Duas",
      content:
        "Every dua is suspended until you send blessings upon the Prophet ﷺ.",
      reference: "Imam Ahmad",
      emoji: "🙏",
    },
  ];

  return (
    <Card className="w-full overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-950">
      <CardHeader className="bg-blue-600 text-white">
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Heart className="h-6 w-6" />
          Durood Sharif (درود شریف)
        </CardTitle>
        <CardDescription className="text-blue-100">
          Sending Blessings on the Prophet Muhammad ﷺ 💫
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Accordion type="single" collapsible className="w-full">
          {duroodInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="border border-blue-200 dark:border-blue-800 rounded-lg mb-4 overflow-hidden"
              >
                <AccordionTrigger className="bg-blue-100 dark:bg-blue-800 px-4 py-2 hover:bg-blue-200 dark:hover:bg-blue-700 text-blue-800 dark:text-blue-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{item.emoji}</span>
                    <span>{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-3 bg-white dark:bg-blue-900">
                  {item.arabic && (
                    <p className="text-right mb-3 text-lg text-blue-800 dark:text-blue-200 font-arabic">
                      {item.arabic}
                    </p>
                  )}
                  <p className="mb-2 text-blue-700 dark:text-blue-200">
                    {item.content}
                  </p>
                  <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100">
                    {item.reference}
                  </Badge>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </CardContent>
      <CardFooter className="bg-blue-50 dark:bg-blue-900 px-6 py-4 text-sm text-blue-700 dark:text-blue-200">
        <p>
          Sending Durood brings countless blessings and is a beautiful way to
          express love for the Prophet ﷺ ✨
        </p>
      </CardFooter>
    </Card>
  );
};

// Component for Adab al-Talib (Etiquettes of Seeking Knowledge)
const AdabAlTalib = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="w-full overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-900 dark:to-indigo-950"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="bg-purple-600 text-white">
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Book className="h-6 w-6" />
          Adab al-Tālib (أدب الطالب)
        </CardTitle>
        <CardDescription className="text-purple-100">
          Etiquettes of Seeking Knowledge in Islam 📚
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.02 : 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-2 border-purple-200 dark:border-purple-700"
        >
          <h3 className="text-xl font-semibold mb-3 text-purple-700 dark:text-purple-300 flex items-center gap-2">
            <span className="text-2xl">🔍</span> Purity of Intention & Sincerity
            (الإخلاص)
          </h3>
          <div className="pl-4 border-l-4 border-purple-300 dark:border-purple-600">
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              The foundation of seeking knowledge is sincerity. The Prophet ﷺ
              said, "Actions are but by intentions..." (Bukhārī 1). A student
              must intend to seek knowledge for the sake of Allah, to remove
              ignorance from themselves and others, and to please Allah—not for
              fame or debate.
            </p>
            <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-md">
              <p className="text-sm italic text-purple-700 dark:text-purple-300 border-l-4 border-purple-400 pl-3">
                "And they were not commanded except to worship Allah, [being]
                sincere to Him in religion…"
                <span className="block mt-1 font-semibold">
                  — Surah Al-Bayyinah 98:5
                </span>
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-100">
              Qur'anic Foundation ✨
            </Badge>
            <Button
              variant="outline"
              className="border-purple-200 text-purple-700 hover:bg-purple-100 dark:border-purple-700 dark:text-purple-300 dark:hover:bg-purple-900"
            >
              Learn More <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Respect for Teachers",
              emoji: "👨‍🏫",
              description: "Honoring those who impart knowledge is essential",
            },
            {
              title: "Consistency",
              emoji: "⏱️",
              description:
                "Regular, dedicated study is better than sporadic effort",
            },
            {
              title: "Humility",
              emoji: "🙏",
              description:
                "Recognizing one's limitations opens the door to learning",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-purple-200 dark:border-purple-700 flex flex-col items-center text-center"
            >
              <span className="text-4xl mb-2">{item.emoji}</span>
              <h4 className="font-medium text-purple-700 dark:text-purple-300 mb-1">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="bg-purple-50 dark:bg-purple-900 px-6 py-4 text-sm text-purple-700 dark:text-purple-200">
        <p>
          Seeking knowledge with proper adab (etiquette) elevates the journey
          and its rewards 💫
        </p>
      </CardFooter>
    </Card>
  );
};

// Component for Ahkam Al-Taharah (Rules of Purity)
const AhkamAlTaharah = () => {
  return (
    <Card className="w-full overflow-hidden bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-cyan-900 dark:to-blue-950">
      <CardHeader className="bg-cyan-600 text-white">
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Award className="h-6 w-6" />
          Ahkam Al-Taharah (أحكام الطهارة)
        </CardTitle>
        <CardDescription className="text-cyan-100">
          Rules of Purity in Islam 💧
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs defaultValue="definition" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="definition">Definition 📝</TabsTrigger>
            <TabsTrigger value="importance">Importance 🌟</TabsTrigger>
            <TabsTrigger value="types">Types 🔄</TabsTrigger>
            <TabsTrigger value="methods">Methods 💦</TabsTrigger>
          </TabsList>

          <TabsContent value="definition" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3 text-cyan-700 dark:text-cyan-300">
                Definition of Taharah (طهارة)
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Taharah means purification — either from ritual impurity
                (Hadath) or physical impurity (Najasah). It is a condition for
                Salah and other acts of worship. 🧼
              </p>
              <div className="flex items-center mt-4 bg-cyan-50 dark:bg-cyan-900 p-3 rounded-md">
                <span className="text-3xl mr-3">🔍</span>
                <p className="text-sm text-cyan-700 dark:text-cyan-200">
                  The word "Taharah" appears in various forms throughout the
                  Qur'an, emphasizing its spiritual and physical importance in
                  Islam.
                </p>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="importance" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3 text-cyan-700 dark:text-cyan-300">
                Importance of Purity in Islam
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-cyan-400 pl-4 py-1">
                  <h4 className="font-medium text-cyan-700 dark:text-cyan-300 mb-1">
                    From Qur'an:
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "Indeed, Allah loves those who constantly repent and those
                    who purify themselves."
                    <span className="block mt-1 text-sm font-semibold">
                      — Surah Al-Baqarah 2:222
                    </span>
                  </p>
                </div>

                <div className="border-l-4 border-cyan-400 pl-4 py-1">
                  <h4 className="font-medium text-cyan-700 dark:text-cyan-300 mb-1">
                    From Hadith:
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "Purity is half of faith."
                    <span className="block mt-1 text-sm font-semibold">
                      — Sahih Muslim
                    </span>
                  </p>
                </div>

                <div className="flex items-center mt-2 bg-cyan-50 dark:bg-cyan-900 p-3 rounded-md">
                  <span className="text-3xl mr-3">💎</span>
                  <p className="text-sm text-cyan-700 dark:text-cyan-200">
                    Purity in Islam encompasses both physical cleanliness and
                    spiritual purity, making it a cornerstone of Islamic
                    practice.
                  </p>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="types" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3 text-cyan-700 dark:text-cyan-300">
                Types of Purity
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-cyan-50 dark:bg-cyan-900 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🌊</span>
                    <h4 className="font-medium text-cyan-700 dark:text-cyan-300">
                      Ritual Purity (from Hadath)
                    </h4>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>Minor impurity is removed by Wudu</li>
                    <li>Major impurity is removed by Ghusl</li>
                  </ul>
                </div>

                <div className="bg-cyan-50 dark:bg-cyan-900 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">✨</span>
                    <h4 className="font-medium text-cyan-700 dark:text-cyan-300">
                      Physical Purity (from Najasah)
                    </h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Removing actual filth from the body, clothes, or place of
                    prayer using water or other methods.
                  </p>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="methods" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3 text-cyan-700 dark:text-cyan-300">
                Methods of Purification
              </h3>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="wudu"
                  className="border border-cyan-200 dark:border-cyan-800 rounded-lg mb-3"
                >
                  <AccordionTrigger className="px-4 hover:bg-cyan-50 dark:hover:bg-cyan-900 text-cyan-700 dark:text-cyan-300">
                    <div className="flex items-center">
                      <span className="text-xl mr-2">💧</span>
                      <span>Wudu (Ablution)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3">
                    <h4 className="font-medium mb-2">Obligatory parts:</h4>
                    <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-4">
                      <li>Washing the face</li>
                      <li>Washing both arms including elbows</li>
                      <li>Wiping a portion of the head</li>
                      <li>Washing both feet including ankles</li>
                      <li>
                        Intention (Niyyah) – required according to majority
                        scholars
                      </li>
                    </ol>
                    <h4 className="font-medium mb-2">
                      Things that break Wudu:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                      <li>Anything coming out of the private parts</li>
                      <li>Deep sleep</li>
                      <li>Loss of consciousness</li>
                      <li>
                        Touching private parts (according to some madhhabs)
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="ghusl"
                  className="border border-cyan-200 dark:border-cyan-800 rounded-lg mb-3"
                >
                  <AccordionTrigger className="px-4 hover:bg-cyan-50 dark:hover:bg-cyan-900 text-cyan-700 dark:text-cyan-300">
                    <div className="flex items-center">
                      <span className="text-xl mr-2">🚿</span>
                      <span>Ghusl (Ritual Bath)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3">
                    <h4 className="font-medium mb-2">Ghusl is required:</h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
                      <li>After sexual intercourse or wet dreams (Janabah)</li>
                      <li>After menstruation (Hayd)</li>
                      <li>After postnatal bleeding (Nifas)</li>
                      <li>
                        (According to many scholars) after reverting to Islam
                      </li>
                    </ul>
                    <h4 className="font-medium mb-2">
                      Essential steps of Ghusl:
                    </h4>
                    <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300">
                      <li>Rinsing the mouth</li>
                      <li>Rinsing the nose</li>
                      <li>Washing the entire body</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="tayammum"
                  className="border border-cyan-200 dark:border-cyan-800 rounded-lg"
                >
                  <AccordionTrigger className="px-4 hover:bg-cyan-50 dark:hover:bg-cyan-900 text-cyan-700 dark:text-cyan-300">
                    <div className="flex items-center">
                      <span className="text-xl mr-2">🏜️</span>
                      <span>Tayammum (Dry Ablution)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3">
                    <p className="mb-3 text-gray-700 dark:text-gray-300">
                      Tayammum is allowed when water is not available or
                      harmful.
                    </p>
                    <h4 className="font-medium mb-2">Steps of Tayammum:</h4>
                    <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-2">
                      <li>Strike clean earth with both hands</li>
                      <li>Wipe the face</li>
                      <li>Wipe both arms</li>
                    </ol>
                    <p className="text-sm text-cyan-700 dark:text-cyan-300 italic">
                      Evidence: Surah Al-Ma'idah (5:6)
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="bg-cyan-50 dark:bg-cyan-900 px-6 py-4 text-sm text-cyan-700 dark:text-cyan-200">
        <p>
          Purity is essential for worship, reflecting both our external
          cleanliness and internal state before Allah ✨
        </p>
      </CardFooter>
    </Card>
  );
};

// Component for Ahkam Al-Nikah (Rules of Marriage)
const AhkamAlNikah = () => {
  return (
    <Card className="w-full overflow-hidden bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-900 dark:to-rose-950">
      <CardHeader className="bg-pink-600 text-white">
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Heart className="h-6 w-6" />
          Ahkam Al-Nikah (أحكام النكاح)
        </CardTitle>
        <CardDescription className="text-pink-100">
          Rules of Marriage in Islam 💞
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md"
          >
            <div className="flex items-center mb-3">
              <span className="text-3xl mr-3">📜</span>
              <h3 className="text-xl font-semibold text-pink-700 dark:text-pink-300">
                Definition & Wisdom
              </h3>
            </div>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                <span className="font-medium text-pink-600 dark:text-pink-300">
                  Definition:
                </span>{" "}
                Nikāḥ is a legal contract (ʿaqd) that establishes marriage
                between a man and woman in Islam.
              </p>
              <p>
                <span className="font-medium text-pink-600 dark:text-pink-300">
                  Objectives:
                </span>{" "}
                Preservation of faith, lineage, chastity, and establishing love
                and mercy.
              </p>
              <div className="bg-pink-50 dark:bg-pink-900 p-3 rounded-md mt-4">
                <p className="text-sm italic text-pink-700 dark:text-pink-200">
                  "And among His signs is that He created for you spouses from
                  among yourselves so that you may find comfort in them. And He
                  has placed between you affection and mercy."
                  <span className="block mt-1 font-semibold">
                    — Surah Ar-Rum 30:21
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md"
          >
            <div className="flex items-center mb-3">
              <span className="text-3xl mr-3">⚖️</span>
              <h3 className="text-xl font-semibold text-pink-700 dark:text-pink-300">
                Ruling (Ḥukm) of Nikāḥ
              </h3>
            </div>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <div className="flex items-center">
                <Badge className="bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-100 mr-2">
                  Farḍ
                </Badge>
                <p>Obligatory when one fears falling into zinā and has means</p>
              </div>
              <div className="flex items-center">
                <Badge className="bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-100 mr-2">
                  Sunnah
                </Badge>
                <p>
                  Recommended for those who desire marriage but have no fear of
                  zinā
                </p>
              </div>
              <div className="flex items-center">
                <Badge className="bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-100 mr-2">
                  Mubāḥ
                </Badge>
                <p>Permissible when no need or desire</p>
              </div>
              <div className="flex items-center">
                <Badge className="bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-100 mr-2">
                  Makrūh
                </Badge>
                <p>Disliked if circumstances make it harmful</p>
              </div>
              <div className="flex items-center">
                <Badge className="bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-100 mr-2">
                  Ḥarām
                </Badge>
                <p>Prohibited if it entails clear harm or injustice</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md"
          >
            <div className="flex items-center mb-3">
              <span className="text-3xl mr-3">🏛️</span>
              <h3 className="text-xl font-semibold text-pink-700 dark:text-pink-300">
                Pillars (Arkān) of the ʿAqd
              </h3>
            </div>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <div className="flex items-start">
                <span className="text-lg mr-2">1️⃣</span>
                <div>
                  <p className="font-medium text-pink-600 dark:text-pink-300">
                    Ijāb (Offer)
                  </p>
                  <p className="text-sm">The formal proposal of marriage</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-lg mr-2">2️⃣</span>
                <div>
                  <p className="font-medium text-pink-600 dark:text-pink-300">
                    Qabūl (Acceptance)
                  </p>
                  <p className="text-sm">The acceptance of the proposal</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-lg mr-2">3️⃣</span>
                <div>
                  <p className="font-medium text-pink-600 dark:text-pink-300">
                    Wālī (Guardian)
                  </p>
                  <p className="text-sm">
                    The guardian of the bride (with variations across different
                    schools of thought)
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-lg mr-2">4️⃣</span>
                <div>
                  <p className="font-medium text-pink-600 dark:text-pink-300">
                    Witnesses
                  </p>
                  <p className="text-sm">
                    Two Muslim witnesses (or one man + two women)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md"
          >
            <div className="flex items-center mb-3">
              <span className="text-3xl mr-3">💎</span>
              <h3 className="text-xl font-semibold text-pink-700 dark:text-pink-300">
                Mahr (Dowry)
              </h3>
            </div>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                <span className="font-medium text-pink-600 dark:text-pink-300">
                  Types:
                </span>{" "}
                Prompt (mu'ajjjal) vs. deferred (mu'akhkhar)
              </p>
              <p>
                <span className="font-medium text-pink-600 dark:text-pink-300">
                  Minimum:
                </span>{" "}
                No fixed amount—must be something of value
              </p>
              <p>
                <span className="font-medium text-pink-600 dark:text-pink-300">
                  Function:
                </span>{" "}
                Symbol of respect and financial security
              </p>
              <div className="bg-pink-50 dark:bg-pink-900 p-3 rounded-md mt-2">
                <p className="text-sm italic text-pink-700 dark:text-pink-200">
                  "And give the women their dowries graciously."
                  <span className="block mt-1 font-semibold">
                    — Surah An-Nisa 4:4
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </CardContent>
      <CardFooter className="bg-pink-50 dark:bg-pink-900 px-6 py-4 text-sm text-pink-700 dark:text-pink-200">
        <p>
          Marriage in Islam is a beautiful bond that brings spiritual,
          emotional, and social benefits to couples 💕
        </p>
      </CardFooter>
    </Card>
  );
};

// Component for Darajat al-Jannah (Levels of Paradise)
const DarajatAlJannah = () => {
  return (
    <Card className="w-full overflow-hidden bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-900 dark:to-green-950">
      <CardHeader className="bg-emerald-600 text-white">
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Star className="h-6 w-6" />
          Darajat al-Jannah (درجات الجنة)
        </CardTitle>
        <CardDescription className="text-emerald-100">
          The Levels of Paradise in Islam 🌈✨
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-3xl h-96 mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-500 to-emerald-100 dark:from-emerald-700 dark:to-emerald-400 rounded-lg shadow-lg overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/api/placeholder/800/600')] opacity-10 bg-center bg-cover rounded-lg"></div>

            {/* Al-Firdaus - Top Level */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center"
            >
              <div className="bg-white dark:bg-gray-800 px-5 py-2 rounded-full shadow-md border-2 border-emerald-300 dark:border-emerald-600">
                <span className="text-xl mr-1">👑</span>
                <span className="font-bold text-emerald-700 dark:text-emerald-300">
                  Al-Firdaus
                </span>
              </div>
              <div className="w-0.5 h-8 bg-emerald-400 mx-auto mt-1"></div>
            </motion.div>

            {/* Other Named Levels */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute top-1/4 left-1/2 transform -translate-x-1/2 flex justify-center space-x-4"
            >
              {[
                { name: "Jannat 'Adn", emoji: "🏡" },
                { name: "Jannat al-Ma'wa", emoji: "🌳" },
                { name: "Dar al-Salam", emoji: "☮️" },
              ].map((level, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-md border border-emerald-300 dark:border-emerald-600 text-emerald-700 dark:text-emerald-300">
                    <span className="text-lg mr-1">{level.emoji}</span>
                    <span className="font-medium text-sm">{level.name}</span>
                  </div>
                  <div className="w-0.5 h-6 bg-emerald-400 mx-auto mt-1"></div>
                </div>
              ))}
            </motion.div>

            {/* 100 Levels Indication */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="absolute top-1/2 left-0 right-0 text-center"
            >
              <div className="bg-white/80 dark:bg-gray-800/80 mx-auto w-max px-4 py-2 rounded-lg shadow-md text-emerald-800 dark:text-emerald-200">
                <span className="text-xl mr-2">💯</span>
                <span className="font-semibold">100 Levels in Total</span>
              </div>
              <p className="text-sm mt-2 text-white">
                Each level's distance is like that between heaven and earth
              </p>
            </motion.div>

            {/* Gates of Jannah */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 px-4"
            >
              <h4 className="font-medium text-white mb-2 absolute -top-6 text-center w-full">
                Eight Gates of Paradise
              </h4>
              {[
                { name: "As-Salaat", emoji: "🙏", for: "Prayer" },
                { name: "Ar-Rayyan", emoji: "🥛", for: "Fasting" },
                { name: "As-Sadaqah", emoji: "💝", for: "Charity" },
                { name: "Al-Jihad", emoji: "⚔️", for: "Striving" },
              ].map((gate, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-md text-center border border-emerald-300 dark:border-emerald-600"
                >
                  <div className="text-emerald-700 dark:text-emerald-300 font-medium text-xs flex items-center">
                    <span className="text-sm mr-1">{gate.emoji}</span>
                    <span>{gate.name}</span>
                  </div>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400">
                    {gate.for}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-emerald-700 dark:text-emerald-300 flex items-center">
            <Star className="h-5 w-5 mr-2" />
            How to Achieve Higher Ranks in Jannah
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              {
                title: "Regular Salah",
                emoji: "🕌",
                desc: "Maintaining the five daily prayers",
              },
              {
                title: "Charity",
                emoji: "🤲",
                desc: "Giving from what Allah has provided",
              },
              {
                title: "Fasting",
                emoji: "🌙",
                desc: "Especially in Ramadan and voluntary fasts",
              },
              {
                title: "Hajj",
                emoji: "🕋",
                desc: "Pilgrimage if financially capable",
              },
              {
                title: "Seeking Knowledge",
                emoji: "📚",
                desc: "Learning and teaching Islamic knowledge",
              },
              {
                title: "Good Character",
                emoji: "❤️",
                desc: "Kindness, honesty, and patience",
              },
            ].map((deed, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-emerald-50 dark:bg-emerald-900 p-3 rounded-md flex items-start"
              >
                <span className="text-2xl mr-2 mt-0.5">{deed.emoji}</span>
                <div>
                  <h4 className="font-medium text-emerald-700 dark:text-emerald-300">
                    {deed.title}
                  </h4>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400">
                    {deed.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-5 bg-emerald-100 dark:bg-emerald-800 p-4 rounded-md">
            <p className="text-sm italic text-emerald-700 dark:text-emerald-200 text-center">
              "Race toward forgiveness from your Lord and a Garden whose width
              is like the width of the heavens and earth."
              <span className="block mt-1 font-semibold">
                — Surah Aal-Imran 3:133
              </span>
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-emerald-50 dark:bg-emerald-900 px-6 py-4 text-sm text-emerald-700 dark:text-emerald-200">
        <p>
          Aim for Al-Firdaus, the highest level of Paradise, through sincere
          faith and righteous actions! 🌟
        </p>
      </CardFooter>
    </Card>
  );
};

const YawmAlQiyamahComponent = () => {
  const beforeJudgmentEvents: EventType[] = [
    {
      id: 1,
      name: "Al-Ba'th",
      arabicName: "البعث",
      description: "Resurrection from the graves",
      sources: ["Qur'an 36:51", "Muslim", "Bukhari"],
    },
    {
      id: 2,
      name: "Al-Hashr",
      arabicName: "الحشر",
      description: "Gathering of all creation on the plain of Mahshar",
      sources: ["Qur'an 18:47", "Muslim"],
    },
    {
      id: 3,
      name: "Tashfi' al-Shams",
      arabicName: "تشفيع الشمس",
      description:
        "Sun brought close, people drenched in sweat depending on their deeds",
      sources: ["Bukhari", "Muslim"],
    },
    {
      id: 4,
      name: "Clothing & Darkness or Light",
      arabicName: "",
      description: "People clothed in darkness or light based on their deeds",
      sources: ["Qur'an 66:8", "Ahmad", "Ibn Majah"],
    },
  ];

  const mainJudgmentEvents: EventType[] = [
    {
      id: 5,
      name: "Al-Hisab",
      arabicName: "الحساب",
      description: "Reckoning of deeds (individual questioning)",
      sources: ["Qur'an 84:7-12", "Muslim"],
    },
    {
      id: 6,
      name: "Al-Mizan",
      arabicName: "الميزان",
      description: "The Balance/Scale to weigh deeds",
      sources: ["Qur'an 21:47", "Tirmidhi"],
    },
    {
      id: 7,
      name: "Al-Sirat",
      arabicName: "الصراط",
      description:
        "Bridge over Hell, thinner than a hair, sharper than a sword",
      sources: ["Muslim", "Ahmad", "Bukhari indirectly through other signs"],
    },
    {
      id: 8,
      name: "Al-Shafa'ah",
      arabicName: "الشفاعة",
      description:
        "Intercession by Prophet Muhammad ﷺ and others, by Allah's permission",
      sources: ["Bukhari", "Muslim"],
    },
    {
      id: 9,
      name: "Hawd al-Kawthar",
      arabicName: "حوض الكوثر",
      description: "Pond of Al-Kawthar for the Prophet's Ummah",
      sources: ["Bukhari", "Muslim", "Tirmidhi"],
    },
    {
      id: 10,
      name: "Kitab al-A'maal",
      arabicName: "كتب الأعمال",
      description:
        "Books of deeds handed to the people. Right hand: success. Left hand/back: failure",
      sources: ["Qur'an 69:19-37"],
    },
    {
      id: 11,
      name: "Testimony of limbs",
      arabicName: "",
      description: "Hands, feet, skin, and even the earth will testify",
      sources: ["Qur'an 24:24", "Qur'an 36:65"],
    },
  ];

  const finalJudgmentEvents: EventType[] = [
    {
      id: 12,
      name: "Passing over the Sirat",
      arabicName: "",
      description: "Successful ones cross, others fall into Jahannam",
      sources: ["Muslim", "Ibn Majah"],
    },
    {
      id: 13,
      name: "Qantara",
      arabicName: "القنطرة",
      description:
        "A place after Sirat where people are purified and settled between each other",
      sources: ["Bukhari: Book of Mazalim"],
    },
    {
      id: 14,
      name: "Entering Paradise or Hell",
      arabicName: "",
      description:
        "Al-Jannah (الجنة) – Paradise, eternal reward. Jahannam (جهنم) – Hellfire, eternal punishment or temporary for some sinners",
      sources: ["Qur'an 3:185", "Qur'an 4:56", "Hadith in Bukhari/Muslim"],
    },
  ];

  const renderEventCard = (event: EventType) => (
    <div key={event.id} className="mb-4">
      <div className="flex items-start gap-2">
        <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
          {event.id}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold flex items-center">
            {event.name}
            {event.arabicName && (
              <span className="mr-2 text-lg text-green-700 font-medium">
                {" "}
                ({event.arabicName})
              </span>
            )}
          </h3>
          <p className="text-gray-700">{event.description}</p>
          <div className="flex flex-wrap gap-1 mt-1">
            {event.sources.map((source, index) => (
              <Badge key={index} variant="outline" className="bg-green-50">
                {source}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Card className="border-green-200 shadow-lg">
      <CardHeader className="bg-green-500 text-white">
        <CardTitle className="text-2xl">
          Yawm Al-Qiyamah (يوم القيامة)
        </CardTitle>
        <CardDescription className="text-green-50 font-medium">
          Major Events of the Day of Judgment
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="before-judgment">
            <AccordionTrigger className="text-xl font-semibold text-green-800">
              Before the Judgment Begins
            </AccordionTrigger>
            <AccordionContent>
              {beforeJudgmentEvents.map(renderEventCard)}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="main-events">
            <AccordionTrigger className="text-xl font-semibold text-green-800">
              Main Events of Judgment
            </AccordionTrigger>
            <AccordionContent>
              {mainJudgmentEvents.map(renderEventCard)}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="final-judgments">
            <AccordionTrigger className="text-xl font-semibold text-green-800">
              Final Judgments
            </AccordionTrigger>
            <AccordionContent>
              {finalJudgmentEvents.map(renderEventCard)}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="bg-green-50 text-sm text-gray-600 italic">
        Based on authentic sources from the Qur'an and Sunnah
      </CardFooter>
    </Card>
  );
};

const AqeedahComponent = () => {
  const tawheedTypes = [
    {
      name: "Rububiyyah (Lordship)",
      description: "Allah alone is the Creator, Sustainer, and Controller.",
    },
    {
      name: "Uluhiyyah (Worship)",
      description: "Worship is only for Allah, with no partners.",
    },
    {
      name: "Asma wa Sifat (Names & Attributes)",
      description:
        "Affirming Allah's names and attributes without distortion, denial, or comparison.",
    },
  ];

  const imanPillars = [
    "Belief in Allah",
    "Belief in Angels",
    "Belief in Books",
    "Belief in Prophets",
    "Belief in the Last Day",
    "Belief in Qadr (Divine Decree)",
  ];

  const deviantSects = [
    "Shia (Rafidah)",
    "Khwarij",
    "Mu'tazilah",
    "Jahmiyyah",
    "Qadianis",
    "Sufis (extremists)",
    "Ash'aris (in attributes)",
  ];

  const sources = [
    "Quran",
    "Sunnah",
    "Hadith",
    "Ijma (Consensus)",
    "Qiyas (Analogy)",
    "Fiqh (Jurisprudence)",
  ];

  return (
    <Card className="border-blue-200 shadow-lg">
      <CardHeader className="bg-blue-600 text-white">
        <CardTitle className="text-2xl">Aqeedah (عقيدة)</CardTitle>
        <CardDescription className="text-blue-50 font-medium">
          Core Beliefs in Islam
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-blue-700 mb-2">Definition</h3>
          <p className="text-gray-700">
            Firm belief in fundamental Islamic tenets derived from Quran,
            Sunnah, Hadith, Muhaddithun, Fiqh, and scholars.
          </p>
        </div>

        <Tabs defaultValue="tawheed" className="w-full">
          <TabsList className="grid grid-cols-4 bg-blue-50">
            <TabsTrigger value="tawheed">Tawheed</TabsTrigger>
            <TabsTrigger value="pillars">Pillars of Iman</TabsTrigger>
            <TabsTrigger value="sources">Sources</TabsTrigger>
            <TabsTrigger value="deviants">Deviant Sects</TabsTrigger>
          </TabsList>

          <TabsContent value="tawheed" className="mt-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Tawheed (Oneness of Allah)
              </h3>
              <div className="space-y-4">
                {tawheedTypes.map((type, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white p-3 rounded-md shadow-sm"
                  >
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700">
                        {type.name}
                      </h4>
                      <p className="text-gray-600">{type.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="pillars" className="mt-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Pillars of Iman (Faith)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {imanPillars.map((pillar, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white p-3 rounded-md shadow-sm"
                  >
                    <Check className="text-blue-600" size={18} />
                    <span className="text-gray-700">{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sources" className="mt-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Sources of Aqeedah
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {sources.map((source, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 rounded-md shadow-sm text-center"
                  >
                    <span className="text-blue-700 font-medium">{source}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="deviants" className="mt-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Deviant Sects
              </h3>
              <p className="text-gray-600 mb-3">
                These groups deviate from authentic teachings:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {deviantSects.map((sect, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 rounded-md shadow-sm border-l-4 border-red-500"
                  >
                    <span className="text-gray-700">{sect}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="bg-blue-50 flex flex-col items-start">
        <h3 className="font-bold text-blue-800 mb-1">Importance:</h3>
        <ul className="text-sm text-gray-600 list-disc list-inside">
          <li>Key to Jannah, protection from Hellfire</li>
          <li>Allah's help & guidance</li>
          <li>Essential foundation of Islam</li>
          <li>Ensures faith remains pure and correct</li>
        </ul>
      </CardFooter>
    </Card>
  );
};

type RulingType = {
  id: number;
  name: string;
  arabicName: string;
  description: string;
  examples: string[];
  additionalInfo?: string;
  color: string;
  icon: React.ReactNode;
};

const AhkamShariaComponent = () => {
  const rulings: RulingType[] = [
    {
      id: 1,
      name: "Obligatory",
      arabicName: "Fard (فرض)",
      description:
        "These are mandatory acts that must be performed, and neglecting them without a valid excuse results in sin.",
      examples: [
        "Salah (prayer)",
        "Zakat (almsgiving)",
        "Sawm (fasting in Ramadan)",
        "Hajj (pilgrimage if capable)",
      ],
      additionalInfo:
        "Types: Fard 'Ayn (فرض عين) – Personal obligation (e.g., daily prayers). Fard Kifayah (فرض كفاية) – Communal obligation (e.g., Janazah prayer).",
      color: "bg-red-50 border-red-500",
      icon: <CheckCircle className="text-red-500 h-6 w-6" />,
    },
    {
      id: 2,
      name: "Recommended",
      arabicName: "Mustahabb (مستحب)",
      description:
        "These are encouraged acts that bring rewards if done but no sin if left out.",
      examples: [
        "Sunnah prayers",
        "Reciting Quran",
        "Giving extra charity (Sadaqah)",
        "Fasting on Mondays and Thursdays",
      ],
      color: "bg-green-50 border-green-500",
      icon: <Circle className="text-green-500 h-6 w-6" />,
    },
    {
      id: 3,
      name: "Permissible",
      arabicName: "Mubah (مباح)",
      description:
        "These are neutral actions; neither rewarded nor sinful unless they lead to something good or bad.",
      examples: [
        "Eating different halal foods",
        "Sleeping",
        "Wearing different types of clothing (as long as they are modest)",
      ],
      color: "bg-blue-50 border-blue-500",
      icon: <Circle className="text-blue-500 h-6 w-6" />,
    },
    {
      id: 4,
      name: "Disliked",
      arabicName: "Makruh (مكروه)",
      description:
        "These are discouraged acts that do not carry a direct sin but are better avoided. If left out for the sake of Allah, one may be rewarded.",
      examples: [
        "Wasting water in wudu",
        "Eating food with a strong smell before congregational prayer",
      ],
      color: "bg-amber-50 border-amber-500",
      icon: <MinusCircle className="text-amber-500 h-6 w-6" />,
    },
    {
      id: 5,
      name: "Forbidden",
      arabicName: "Haram (حرام)",
      description:
        "These are strictly prohibited acts in Islam, and committing them results in sin, while avoiding them brings rewards.",
      examples: [
        "Drinking alcohol",
        "Stealing",
        "Lying",
        "Usury (riba)",
        "Backbiting (ghibah)",
      ],
      color: "bg-purple-50 border-purple-500",
      icon: <XCircle className="text-purple-500 h-6 w-6" />,
    },
  ];

  return (
    <Card className="border-indigo-200 shadow-lg">
      <CardHeader className="bg-indigo-600 text-white">
        <CardTitle className="text-2xl">
          Ahkam al-Shariah (أحكام الشريعة)
        </CardTitle>
        <CardDescription className="text-indigo-100">
          The Five Rulings in Islamic Jurisprudence
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-gray-700 mb-6">
          Islamic jurisprudence (Fiqh) classifies all human actions into five
          legal rulings:
        </p>

        <div className="space-y-6">
          {rulings.map((ruling) => (
            <div
              key={ruling.id}
              className={`border-l-4 ${ruling.color} rounded-md overflow-hidden shadow-sm`}
            >
              <div className="flex items-center p-4 bg-white">
                <div className="mr-4 flex-shrink-0">{ruling.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {ruling.name}{" "}
                    <span className="text-indigo-600">
                      ({ruling.arabicName})
                    </span>
                  </h3>
                  <p className="text-gray-600">{ruling.description}</p>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50">
                <h4 className="font-semibold text-gray-700 mb-2">Examples:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {ruling.examples.map((example, idx) => (
                    <li key={idx}>{example}</li>
                  ))}
                </ul>
                {ruling.additionalInfo && (
                  <div className="mt-3 p-2 bg-indigo-50 rounded-md text-sm">
                    <span className="font-medium">Note:</span>{" "}
                    {ruling.additionalInfo}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const JihadComponent = () => {
  const jihadTypes: JihadType[] = [
    {
      id: 1,
      name: "Struggle Against the Self",
      arabicName: "Jihad al-Nafs",
      description: "Overcoming desires and sins",
      source: "Sahih al-Bukhari, Hadith 1963",
      icon: <Heart className="h-6 w-6" />,
      color: "bg-red-100 text-red-600",
    },
    {
      id: 2,
      name: "Struggle Against Satan",
      arabicName: "Jihad al-Shaytan",
      description: "Resisting doubts and temptations",
      source: "Ibn al-Qayyim, Zaad al-Ma'ad 3/9",
      icon: <AlertTriangle className="h-6 w-6" />,
      color: "bg-amber-100 text-amber-600",
    },
    {
      id: 3,
      name: "Struggle Through Speech",
      arabicName: "Jihad al-Lisan",
      description: "Speaking for truth and justice",
      source: "Sunan Abu Dawood 2504",
      icon: <MessagesSquare className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 4,
      name: "Struggle Through Writing",
      arabicName: "Jihad al-Qalam",
      description: "Defending Islam through knowledge",
      source: "Qur'an 16:125",
      icon: <Pen className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 5,
      name: "Struggle with Wealth",
      arabicName: "Jihad al-Mal",
      description: "Spending in Allah's cause",
      source: "Qur'an 9:20",
      icon: <Wallet className="h-6 w-6" />,
      color: "bg-green-100 text-green-600",
    },
    {
      id: 6,
      name: "Struggle of Patience",
      arabicName: "Jihad as-Sabr",
      description: "Enduring hardships",
      source: "Qur'an 2:153",
      icon: <Clock className="h-6 w-6" />,
      color: "bg-teal-100 text-teal-600",
    },
    {
      id: 7,
      name: "Struggle to Spread Islam",
      arabicName: "Jihad al-Da'wah",
      description: "Inviting people to Islam",
      source: "Qur'an 16:125",
      icon: <Users className="h-6 w-6" />,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      id: 8,
      name: "Military Jihad",
      arabicName: "Jihad al-Sayf",
      description: "Armed struggle with strict conditions",
      source: "Qur'an 2:190",
      icon: <Sword className="h-6 w-6" />,
      color: "bg-slate-100 text-slate-600",
    },
    {
      id: 9,
      name: "Enjoining Good & Forbidding Evil",
      arabicName: "Jihad al-Amr bil Ma'ruf",
      description: "Promoting righteousness",
      source: "Sahih Muslim 49",
      icon: <BookOpen className="h-6 w-6" />,
      color: "bg-rose-100 text-rose-600",
    },
    {
      id: 10,
      name: "Struggle for Knowledge",
      arabicName: "Jihad al-Ilm",
      description: "Seeking and spreading Islamic knowledge",
      source: "Sahih Muslim 2699",
      icon: <BookMarked className="h-6 w-6" />,
      color: "bg-cyan-100 text-cyan-600",
    },
  ];

  return (
    <Card className="border-emerald-200 shadow-lg">
      <CardHeader className="bg-emerald-700 text-white">
        <CardTitle className="text-2xl">Jihad in Islam</CardTitle>
        <CardDescription className="text-emerald-50">
          The different forms of striving in the way of Allah
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jihadTypes.map((jihad) => (
            <div
              key={jihad.id}
              className="border rounded-lg overflow-hidden shadow-sm"
            >
              <div className="flex items-center p-3 bg-emerald-50 border-b">
                <div className={`rounded-full p-2 mr-3 ${jihad.color}`}>
                  {jihad.icon}
                </div>
                <div>
                  <h3 className="font-bold text-emerald-800">
                    {jihad.arabicName}
                  </h3>
                  <p className="text-sm text-gray-600">{jihad.name}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700">{jihad.description}</p>
                <p className="text-xs text-emerald-600 mt-2 font-semibold">
                  Source: {jihad.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const MalaikaComponent = () => {
  const angels: AngelType[] = [
    {
      id: 1,
      name: "Jibrīl",
      arabicName: "جبريل عليه السلام",
      role: "Brings revelations to prophets",
      source: "Quran 2:97-98, 16:102",
      color: "bg-amber-100 text-amber-800",
    },
    {
      id: 2,
      name: "Mīkāʾīl",
      arabicName: "ميكائيل عليه السلام",
      role: "Oversees rain, sustenance, and mercy",
      source: "Quran 2:98",
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: 3,
      name: "Isrāfīl",
      arabicName: "إسرافيل عليه السلام",
      role: "Blows the trumpet on the Day of Judgment",
      source: "Sahih Muslim 2940",
      color: "bg-green-100 text-green-800",
    },
    {
      id: 4,
      name: "Malak al-Mawt",
      arabicName: "ملك الموت",
      role: "Angel of Death, takes souls at appointed times",
      source: "Quran 32:11",
      color: "bg-slate-100 text-slate-800",
    },
    {
      id: 5,
      name: "Munkar & Nakīr",
      arabicName: "منكر ونكير عليهما السلام",
      role: "Question the deceased in the grave",
      source: "Sunan Tirmidhi 1071",
      color: "bg-indigo-100 text-indigo-800",
    },
    {
      id: 6,
      name: "Kirāman Kātibīn",
      arabicName: "كرامًا كاتبين",
      role: "The recording angels who write good and bad deeds",
      source: "Quran 82:10-12",
      color: "bg-purple-100 text-purple-800",
    },
    {
      id: 7,
      name: "Mālik",
      arabicName: "مالك عليه السلام",
      role: "Chief guardian of Hell",
      source: "Quran 43:77",
      color: "bg-red-100 text-red-800",
    },
    {
      id: 8,
      name: "Riḍwān",
      arabicName: "رضوان عليه السلام",
      role: "Chief guardian of Paradise",
      source: "Tafsir Ibn Kathir on Quran 39:73",
      color: "bg-emerald-100 text-emerald-800",
    },
    {
      id: 9,
      name: "Ḥamlat al-ʿArsh",
      arabicName: "حملة العرش",
      role: "Angels carrying the Throne of Allah",
      source: "Quran 69:17, 40:7",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      id: 10,
      name: "Angels of Jihad",
      arabicName: "",
      role: "Assist believers in battle by Allah's command",
      source: "Quran 3:124-125, Sahih Bukhari 3992",
      color: "bg-orange-100 text-orange-800",
    },
  ];

  return (
    <Card className="border-sky-200 shadow-lg">
      <CardHeader className="bg-sky-600 text-white">
        <CardTitle className="text-2xl">Mala'ika (الملائكة)</CardTitle>
        <CardDescription className="text-sky-100">
          The Angels of Islam
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {angels.map((angel) => (
            <div
              key={angel.id}
              className={`${angel.color} p-4 rounded-lg shadow-sm border border-white`}
            >
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg">{angel.name}</h3>
                <Badge variant="outline" className="bg-white">
                  {angel.id}
                </Badge>
              </div>
              {angel.arabicName && (
                <p className="text-sm font-medium mt-1">{angel.arabicName}</p>
              )}
              <p className="mt-2">{angel.role}</p>
              <div className="mt-3 text-xs font-medium opacity-80">
                Source: {angel.source}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const AlKabairComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const majorSins: MajorSinType[] = [
    {
      id: 1,
      name: "Shirk",
      description: "Associating partners with Allah",
      category: "shirk",
    },
    {
      id: 2,
      name: "Murder",
      description: "Killing unjustly",
      category: "moral",
    },
    { id: 3, name: "Sihr", description: "Magic/witchcraft", category: "shirk" },
    {
      id: 4,
      name: "Leaving Salah",
      description: "Not praying",
      category: "worship",
    },
    {
      id: 5,
      name: "Not giving Zakat",
      description: "Refusing charity",
      category: "worship",
    },
    {
      id: 6,
      name: "Not fasting Ramadan",
      description: "Without excuse",
      category: "worship",
    },
    {
      id: 7,
      name: "Skipping Hajj",
      description: "When capable",
      category: "worship",
    },
    {
      id: 8,
      name: "Disrespecting Parents",
      description: "Being undutiful",
      category: "family",
    },
    {
      id: 9,
      name: "Cutting Family Ties",
      description: "Severing kinship",
      category: "family",
    },
    {
      id: 10,
      name: "Zina",
      description: "Adultery/fornication",
      category: "moral",
    },
    {
      id: 11,
      name: "Liwat",
      description: "Homosexual acts",
      category: "moral",
    },
    {
      id: 12,
      name: "Riba",
      description: "Interest/usury",
      category: "financial",
    },
    {
      id: 13,
      name: "Consuming Orphans' Wealth",
      description: "Taking their property",
      category: "financial",
    },
    {
      id: 14,
      name: "Lying About Allah & Prophet ﷺ",
      description: "Fabrication",
      category: "shirk",
    },
    {
      id: 15,
      name: "False Witnessing",
      description: "Giving fake testimony",
      category: "social",
    },
    {
      id: 16,
      name: "Drinking Alcohol",
      description: "Consuming intoxicants",
      category: "moral",
    },
    {
      id: 17,
      name: "Gambling",
      description: "Betting/games of chance",
      category: "moral",
    },
    {
      id: 18,
      name: "Stealing",
      description: "Taking unjustly",
      category: "financial",
    },
    {
      id: 19,
      name: "Bribery",
      description: "Giving/taking bribes",
      category: "financial",
    },
    {
      id: 20,
      name: "Oppression",
      description: "Injustice/tyranny",
      category: "social",
    },
    {
      id: 21,
      name: "Arrogance & Pride",
      description: "Feeling superior",
      category: "moral",
    },
    {
      id: 22,
      name: "Abusing Power",
      description: "Misusing authority",
      category: "social",
    },
    {
      id: 23,
      name: "Cheating in Trade",
      description: "Giving less in measure",
      category: "financial",
    },
    {
      id: 24,
      name: "Fleeing Battlefield",
      description: "Running away in jihad",
      category: "social",
    },
    {
      id: 25,
      name: "Riba-Based Business",
      description: "Engaging in usury",
      category: "financial",
    },
    {
      id: 26,
      name: "Mocking Islam",
      description: "Making fun of religion",
      category: "shirk",
    },
    {
      id: 27,
      name: "Spreading Falsehoods",
      description: "Rumors/lies",
      category: "social",
    },
    {
      id: 28,
      name: "Backbiting & Slander",
      description: "Talking ill of others",
      category: "social",
    },
    {
      id: 29,
      name: "Breaking Promises",
      description: "Not fulfilling commitments",
      category: "moral",
    },
    {
      id: 30,
      name: "Suicide",
      description: "Taking one's own life",
      category: "moral",
    },
  ];

  const categoryColors = {
    shirk: "bg-red-50 border-red-300",
    moral: "bg-purple-50 border-purple-300",
    social: "bg-blue-50 border-blue-300",
    financial: "bg-green-50 border-green-300",
    worship: "bg-amber-50 border-amber-300",
    family: "bg-pink-50 border-pink-300",
  };

  const categoryLabels = {
    shirk: "Shirk & Belief",
    moral: "Moral & Personal",
    social: "Social Relations",
    financial: "Financial Dealings",
    worship: "Acts of Worship",
    family: "Family Relations",
  };

  const filteredSins = majorSins.filter(
    (sin) =>
      sin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sin.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="border-red-200 shadow-lg">
      <CardHeader className="bg-red-600 text-white">
        <CardTitle className="text-2xl">Al-Kabair (Major Sins)</CardTitle>
        <CardDescription className="text-red-100">
          The 30 major sins to avoid in Islam
        </CardDescription>
        <div className="mt-4 relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-red-300" />
          <Input
            type="text"
            placeholder="Search major sins..."
            className="pl-8 bg-white/10 border-red-400 placeholder:text-red-200 text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {filteredSins.map((sin) => (
            <div
              key={sin.id}
              className={`${
                categoryColors[sin.category]
              } border rounded-lg p-3 shadow-sm`}
            >
              <div className="flex items-start gap-2">
                <AlertTriangle
                  className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                    sin.category === "shirk"
                      ? "text-red-500"
                      : "text-yellow-600"
                  }`}
                />
                <div>
                  <h3 className="font-bold text-gray-800">{sin.name}</h3>
                  <p className="text-sm text-gray-600">{sin.description}</p>
                  <span className="inline-block mt-1.5 text-xs font-medium px-2 py-0.5 rounded-full bg-white/60">
                    {categoryLabels[sin.category]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSins.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No sins matching your search.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const AhlulBaytComponent = () => {
  const familyMembers: FamilyMemberType[] = [
    {
      id: 1,
      name: "Prophet Muhammad ﷺ",
      arabicName: "",
      relation: "The Messenger of Allah",
      significance: "The final prophet and messenger of Allah",
    },
    {
      id: 2,
      name: "Ali ibn Abi Talib",
      arabicName: "رضي الله عنه",
      relation: "Cousin and son-in-law of the Prophet ﷺ",
      significance: "Fourth Caliph, husband of Fatimah",
    },
    {
      id: 3,
      name: "Fatimah bint Muhammad",
      arabicName: "رضي الله عنها",
      relation: "Daughter of the Prophet ﷺ",
      significance: "Wife of Ali, mother of Hasan and Husayn",
    },
    {
      id: 4,
      name: "Hasan ibn Ali",
      arabicName: "رضي الله عنه",
      relation: "Grandson of the Prophet ﷺ",
      significance: "Son of Ali and Fatimah, leader of youth of Paradise",
    },
    {
      id: 5,
      name: "Husayn ibn Ali",
      arabicName: "رضي الله عنه",
      relation: "Grandson of the Prophet ﷺ",
      significance: "Son of Ali and Fatimah, leader of youth of Paradise",
    },
    {
      id: 6,
      name: "The Wives of the Prophet ﷺ",
      arabicName: "",
      relation: "Mothers of the Believers",
      significance: "Majority Sunni view includes them in Ahlul Bayt",
    },
    {
      id: 7,
      name: "Descendants of Hasan & Husayn",
      arabicName: "",
      relation: "Progeny of the Prophet ﷺ",
      significance: "Known as Sayyids & Sharifs",
    },
    {
      id: 8,
      name: "Abbas ibn Abdul Muttalib",
      arabicName: "رضي الله عنه",
      relation: "Uncle of the Prophet ﷺ",
      significance: "Close companion and supporter",
    },
    {
      id: 9,
      name: "Jafar ibn Abi Talib",
      arabicName: "رضي الله عنه",
      relation: "Cousin of the Prophet ﷺ",
      significance: "Brother of Ali",
    },
    {
      id: 10,
      name: "Aqil ibn Abi Talib",
      arabicName: "رضي الله عنه",
      relation: "Cousin of the Prophet ﷺ",
      significance: "Brother of Ali",
    },
  ];

  const sources = [
    {
      name: "Quran – Surah Al-Ahzab (33:33)",
      text: "Indeed, Allah intends only to remove from you the impurity, O people of the [Prophet's] household, and to purify you with [extensive] purification. (Sahih International)",
    },
    {
      name: "Hadith – Sahih Muslim (Hadith 2424)",
      text: "The Prophet ﷺ covered Fatimah, Ali, Hasan, and Husayn with his cloak and said: 'O Allah, these are my Ahlul Bayt. Remove impurity from them and purify them completely.'",
    },
    {
      name: "Hadith – Sunan At-Tirmidhi (Hadith 3786)",
      text: "The Prophet ﷺ said regarding Hasan and Husayn: 'Hasan and Husayn are the leaders of the youth of Paradise.'",
    },
  ];

  return (
    <Card className="border-emerald-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <CardTitle className="text-2xl">Ahlul Bayt (أهل البيت)</CardTitle>
        <CardDescription className="text-emerald-50 font-medium">
          The Family of the Prophet Muhammad ﷺ
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {familyMembers.map((member) => (
              <Card key={member.id} className="border-emerald-100 shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <CardTitle className="text-lg text-emerald-700">
                      {member.name}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-emerald-50 text-emerald-700"
                    >
                      {member.id}
                    </Badge>
                  </div>
                  {member.arabicName && (
                    <p className="text-emerald-600 text-sm font-medium">
                      {member.arabicName}
                    </p>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{member.relation}</p>
                  {member.significance && (
                    <p className="text-sm text-gray-600 mt-1 italic">
                      {member.significance}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col bg-emerald-50 px-6 py-4">
        <h3 className="font-bold text-emerald-800 mb-2">
          Sources from Quran and Hadith:
        </h3>
        <div className="space-y-3">
          {sources.map((source, index) => (
            <div key={index} className="bg-white p-3 rounded-md shadow-sm">
              <p className="font-medium text-emerald-700 mb-1">{source.name}</p>
              <p className="text-gray-700 text-sm">{source.text}</p>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

const AsharaMubashsharaComponent = () => {
  const companions: CompanionType[] = [
    {
      id: 1,
      name: "Abu Bakr As-Siddiq",
      arabicName: "أبو بكر الصديق",
      achievement:
        "First Caliph, closest companion, and father-in-law of the Prophet ﷺ",
      color: "bg-blue-100 border-blue-300",
    },
    {
      id: 2,
      name: "Umar ibn Al-Khattab",
      arabicName: "عمر بن الخطاب",
      achievement: "Second Caliph, known for justice and strength in Islam",
      color: "bg-red-100 border-red-300",
    },
    {
      id: 3,
      name: "Uthman ibn Affan",
      arabicName: "عثمان بن عفان",
      achievement:
        "Third Caliph, compiled the Quran, married two daughters of the Prophet ﷺ",
      color: "bg-amber-100 border-amber-300",
    },
    {
      id: 4,
      name: "Ali ibn Abi Talib",
      arabicName: "علي بن أبي طالب",
      achievement: "Fourth Caliph, cousin and son-in-law of the Prophet ﷺ",
      color: "bg-emerald-100 border-emerald-300",
    },
    {
      id: 5,
      name: "Talha ibn Ubaydullah",
      arabicName: "طلحة بن عبيد الله",
      achievement: "Known for bravery in battle, especially at Uhud",
      color: "bg-purple-100 border-purple-300",
    },
    {
      id: 6,
      name: "Zubair ibn Al-Awwam",
      arabicName: "الزبير بن العوام",
      achievement: "Cousin of the Prophet ﷺ, among the first Muslims",
      color: "bg-indigo-100 border-indigo-300",
    },
    {
      id: 7,
      name: "Abdur-Rahman ibn Awf",
      arabicName: "عبد الرحمن بن عوف",
      achievement: "Wealthy merchant who donated greatly to Islam",
      color: "bg-green-100 border-green-300",
    },
    {
      id: 8,
      name: "Sa'd ibn Abi Waqqas",
      arabicName: "سعد بن أبي وقاص",
      achievement: "Great military commander, conquered Persia",
      color: "bg-orange-100 border-orange-300",
    },
    {
      id: 9,
      name: "Sa'id ibn Zayd",
      arabicName: "سعيد بن زيد",
      achievement: "Early convert to Islam, participated in major battles",
      color: "bg-cyan-100 border-cyan-300",
    },
    {
      id: 10,
      name: "Abu Ubaidah ibn Al-Jarrah",
      arabicName: "أبو عبيدة بن الجراح",
      achievement: "Called 'The Trustworthy of the Ummah' by the Prophet ﷺ",
      color: "bg-teal-100 border-teal-300",
    },
  ];

  return (
    <Card className="border-orange-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-orange-500 to-amber-500 text-white">
        <CardTitle className="text-2xl">
          Ashara Mubashshara (العشرة المبشرون بالجنة)
        </CardTitle>
        <CardDescription className="text-orange-50">
          The 10 Companions Promised Paradise by the Prophet Muhammad ﷺ
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {companions.map((companion) => (
            <div
              key={companion.id}
              className={`${companion.color} p-4 rounded-lg shadow-sm border flex`}
            >
              <div className="mr-3 w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 border border-orange-300 text-orange-600 font-bold">
                {companion.id}
              </div>
              <div>
                <h3 className="font-bold text-gray-800">{companion.name}</h3>
                <p className="text-sm text-gray-600 font-medium mb-1">
                  {companion.arabicName}
                </p>
                <p className="text-sm text-gray-700">{companion.achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const KutubSamawiyyahComponent = () => {
  const divineBooks: DivineBooksType[] = [
    {
      id: 1,
      name: "Tawrah",
      arabicName: "التوراة",
      prophet: "Musa",
      arabicProphetName: "عليه السلام",
      color: "bg-blue-600",
      description:
        "The Torah was revealed to Prophet Musa (Moses) and is mentioned in the Quran as guidance for the Children of Israel.",
    },
    {
      id: 2,
      name: "Zabur",
      arabicName: "الزبور",
      prophet: "Dawud",
      arabicProphetName: "عليه السلام",
      color: "bg-green-600",
      description:
        "The Psalms were revealed to Prophet Dawud (David) and contained praises of Allah and wisdom.",
    },
    {
      id: 3,
      name: "Injil",
      arabicName: "الإنجيل",
      prophet: "Isa",
      arabicProphetName: "عليه السلام",
      color: "bg-amber-600",
      description:
        "The Gospel was revealed to Prophet Isa (Jesus) and confirmed the Tawrah while bringing new guidance.",
    },
    {
      id: 4,
      name: "Quran",
      arabicName: "القرآن",
      prophet: "Muhammad",
      arabicProphetName: "ﷺ",
      color: "bg-purple-600",
      description:
        "The final revelation to humanity, preserved perfectly and containing complete guidance for all times.",
    },
  ];

  return (
    <Card className="border-purple-200 shadow-lg">
      <CardHeader className="bg-purple-600 text-white">
        <CardTitle className="text-2xl">
          Kutub al-Samawiyyah (الكتب السماوية)
        </CardTitle>
        <CardDescription className="text-purple-100">
          The Four Holy Books Mentioned in Islam
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {divineBooks.map((book) => (
            <div
              key={book.id}
              className="border rounded-lg overflow-hidden shadow-md"
            >
              <div className={`${book.color} p-4 flex items-center text-white`}>
                <Scroll className="h-8 w-8 mr-3" />
                <div>
                  <h3 className="font-bold text-xl">{book.name}</h3>
                  <p>{book.arabicName}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="font-semibold mb-2">
                  Given to Prophet {book.prophet}{" "}
                  <span className="text-purple-600">
                    {book.arabicProphetName}
                  </span>
                </p>
                <p className="text-sm text-gray-600">{book.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-purple-50 p-4 rounded-lg">
          <h3 className="font-bold text-purple-800 mb-2">
            Significance in Islam
          </h3>
          <p className="text-gray-700">
            Muslims believe in all the divine books sent by Allah. The Quran is
            the final revelation and confirms the truth in previous revelations
            while correcting any alterations made to them over time. While all
            books contained guidance, the Quran remains the only divine book
            preserved in its original form.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export const PillarsOfFaith = () => {
  const pillars = [
    {
      id: 1,
      arabic: "الإيمان بالله",
      transliteration: "Al-Iman Billah",
      english: "Belief in Allah",
      color: "bg-emerald-100 border-emerald-300",
    },
    {
      id: 2,
      arabic: "الإيمان بالملائكة",
      transliteration: "Al-Iman bil Mala'ika",
      english: "Belief in Angels",
      color: "bg-blue-100 border-blue-300",
    },
    {
      id: 3,
      arabic: "الإيمان بالكتب",
      transliteration: "Al-Iman bil Kutub",
      english: "Belief in Divine Books",
      color: "bg-purple-100 border-purple-300",
    },
    {
      id: 4,
      arabic: "الإيمان بالرسل",
      transliteration: "Al-Iman bil Rusul",
      english: "Belief in Prophets",
      color: "bg-yellow-100 border-yellow-300",
    },
    {
      id: 5,
      arabic: "الإيمان باليوم الآخر",
      transliteration: "Al-Iman bil Yawm al-Akhir",
      english: "Belief in the Day of Judgment",
      color: "bg-red-100 border-red-300",
    },
    {
      id: 6,
      arabic: "الإيمان بالقدر",
      transliteration: "Al-Iman bil Qadr",
      english: "Belief in Destiny (Qadr)",
      color: "bg-teal-100 border-teal-300",
    },
  ];

  return (
    <Card className="bg-gradient-to-r from-sky-50 to-indigo-50 border-2 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-sky-200 to-indigo-200 rounded-t-lg">
        <CardTitle className="text-center text-2xl font-bold text-indigo-800">
          Arkan al-Iman (أركان الإيمان)
        </CardTitle>
        <CardDescription className="text-center text-lg font-medium text-indigo-600">
          The Six Pillars of Faith
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`p-4 rounded-lg border-2 ${pillar.color} transition-all hover:shadow-md duration-300 hover:scale-105`}
            >
              <Badge className="mb-2 bg-indigo-600 hover:bg-indigo-700">
                {pillar.id}
              </Badge>
              <h3 className="text-lg font-bold mb-1 text-gray-800">
                {pillar.english}
              </h3>
              <p className="text-sm font-medium text-gray-600">
                {pillar.transliteration}
              </p>
              <p className="text-right text-lg font-bold text-gray-800 mt-2">
                {pillar.arabic}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center bg-gradient-to-r from-sky-100 to-indigo-100 rounded-b-lg py-3">
        <p className="text-center text-indigo-600 font-medium">
          These six beliefs form the foundation of faith in Islam
        </p>
      </CardFooter>
    </Card>
  );
};

export const PillarsOfIslam = () => {
  const pillars = [
    {
      id: 1,
      name: "Shahada",
      arabic: "الشهادة",
      description: "Testimony of Faith",
      quranRef: "Surah Ta-Ha 20:14",
      explanation:
        "Declaration that there is no god but Allah and Muhammad is the messenger of Allah",
      color: "bg-amber-100 border-amber-300",
    },
    {
      id: 2,
      name: "Salah",
      arabic: "الصلاة",
      description: "Establishing Prayer",
      quranRef: "Surah Al-Baqarah 2:43",
      explanation: "Performing the five daily prayers at their appointed times",
      color: "bg-lime-100 border-lime-300",
    },
    {
      id: 3,
      name: "Zakat",
      arabic: "الزكاة",
      description: "Giving Zakat",
      quranRef: "Surah Al-Baqarah 2:110",
      explanation: "Giving a portion of wealth to those in need",
      color: "bg-cyan-100 border-cyan-300",
    },
    {
      id: 4,
      name: "Sawm",
      arabic: "الصوم",
      description: "Fasting in Ramadan",
      quranRef: "Surah Al-Baqarah 2:183",
      explanation:
        "Abstaining from food, drink and other physical needs during daylight hours in Ramadan",
      color: "bg-fuchsia-100 border-fuchsia-300",
    },
    {
      id: 5,
      name: "Hajj",
      arabic: "الحج",
      description: "Performing Hajj",
      quranRef: "Surah Al-Baqarah 2:196",
      explanation:
        "Pilgrimage to Mecca once in a lifetime for those who are able",
      color: "bg-orange-100 border-orange-300",
    },
  ];

  return (
    <Card className="bg-gradient-to-r from-green-50 to-teal-50 border-2 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-green-200 to-teal-200 rounded-t-lg">
        <CardTitle className="text-center text-2xl font-bold text-teal-800">
          Arkan al-Islam (أركان الإسلام)
        </CardTitle>
        <CardDescription className="text-center text-lg font-medium text-teal-600">
          The Five Pillars of Islam
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-center text-gray-700 italic mb-6 px-4 py-2 bg-white/70 rounded-lg border border-teal-200">
          "Islam is built upon five (pillars): the testimony of faith,
          establishing prayer, giving Zakat, fasting in Ramadan, and performing
          Hajj."
          <br />
          <span className="text-sm text-gray-500">
            — Sahih al-Bukhari, Hadith 8; Sahih Muslim, Hadith 16
          </span>
        </p>

        <Tabs defaultValue="cards" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="cards">Visual Cards</TabsTrigger>
            <TabsTrigger value="list">Detailed List</TabsTrigger>
          </TabsList>

          <TabsContent value="cards" className="mt-0">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className={`p-4 rounded-lg border-2 ${pillar.color} transition-all hover:shadow-md duration-300 hover:scale-105`}
                >
                  <Badge className="mb-2 bg-teal-600 hover:bg-teal-700">
                    {pillar.id}
                  </Badge>
                  <h3 className="text-lg font-bold mb-1 text-gray-800">
                    {pillar.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-600">
                    {pillar.description}
                  </p>
                  <p className="text-right text-lg font-bold text-gray-800 mt-2">
                    {pillar.arabic}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="list" className="mt-0">
            <div className="space-y-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className={`p-4 rounded-lg border-2 ${pillar.color}`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-gray-800">
                      {pillar.id}. {pillar.name}{" "}
                      <span className="text-gray-600">({pillar.arabic})</span>
                    </h3>
                    <Badge className="bg-teal-600 hover:bg-teal-700">
                      {pillar.quranRef}
                    </Badge>
                  </div>
                  <p className="text-gray-700">{pillar.explanation}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-center bg-gradient-to-r from-green-100 to-teal-100 rounded-b-lg py-3">
        <p className="text-center text-teal-600 font-medium">
          These five pillars form the foundation of Islamic practice
        </p>
      </CardFooter>
    </Card>
  );
};

export const AttributesOfAllah = () => {
  const quotes = [
    {
      id: 1,
      author: "Imam Malik (رحمه الله)",
      quote:
        "Istiwa' is known, its modality is unknown, believing in it is obligatory, and questioning it is an innovation.",
      source: "Hilyat al-Awliya, 6/325",
    },
    {
      id: 2,
      author: "Allah says",
      quote:
        "There is nothing like Him, and He is the All-Hearing, the All-Seeing.",
      source: "Surah Ash-Shura 42:11",
    },
    {
      id: 3,
      author: "Imam Ahmad (رحمه الله)",
      quote:
        "We affirm what Allah has affirmed for Himself, without comparison or alteration.",
      source: "Ar-Radd 'ala al-Jahmiyyah",
    },
    {
      id: 4,
      author: "Imam Ash-Shafi'i (رحمه الله)",
      quote:
        "I believe in what Allah revealed as He intended, and in what the Prophet conveyed as he intended.",
      source: "Manaqib Ash-Shafi'i, Al-Bayhaqi 1/415",
    },
  ];

  const principles = [
    {
      id: 1,
      title: "Affirm Without Questioning How",
      description:
        "Accept Allah's attributes as they are mentioned in the Quran and authentic Hadith, without questioning 'how' they exist.",
    },
    {
      id: 2,
      title: "Avoid Denial or Distortion",
      description:
        "Never deny or distort the meanings of Allah's attributes from their apparent meaning.",
    },
    {
      id: 3,
      title: "Recognize Divine Uniqueness",
      description:
        "Acknowledge that Allah's nature is beyond human comprehension and unlike His creation.",
    },
    {
      id: 4,
      title: "Avoid Resemblance to Creation",
      description:
        "Never liken Allah's attributes to those of His creation (avoiding tashbih).",
    },
  ];

  return (
    <Card className="bg-gradient-to-r from-violet-50 to-purple-50 border-2 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-violet-200 to-purple-200 rounded-t-lg">
        <CardTitle className="text-center text-2xl font-bold text-purple-800">
          Sifat Allah (صفات الله)
        </CardTitle>
        <CardDescription className="text-center text-lg font-medium text-purple-600">
          Understanding the Attributes of Allah According to Muhaddithun
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Alert className="mb-6 bg-purple-100 border-purple-300 text-purple-800">
          <AlertDescription>
            The Muhaddithun (Hadith scholars) affirm Allah's Sifat (attributes)
            exactly as mentioned in the Qur'an and authentic Hadith, without:
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Tahrif (distortion)</li>
              <li>Ta'til (denial)</li>
              <li>Tashbih (resemblance to creation)</li>
              <li>Takyyif (asking how they are)</li>
            </ul>
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          <div className="bg-white/70 rounded-lg p-4 border border-purple-200">
            <h3 className="text-lg font-bold text-purple-800 mb-3">
              Sayings of the Scholars
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {quotes.map((quote) => (
                <div
                  key={quote.id}
                  className="bg-purple-50 border border-purple-200 p-3 rounded-lg"
                >
                  <p className="text-gray-700 italic mb-2">"{quote.quote}"</p>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-purple-700">
                      {quote.author}
                    </span>
                    <span className="text-gray-500">{quote.source}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/70 rounded-lg p-4 border border-purple-200">
            <h3 className="text-lg font-bold text-purple-800 mb-3">
              The Balanced Approach
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {principles.map((principle) => (
                <AccordionItem
                  key={principle.id}
                  value={`item-${principle.id}`}
                  className="border-purple-200"
                >
                  <AccordionTrigger className="hover:text-purple-700 font-medium">
                    {principle.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {principle.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center bg-gradient-to-r from-violet-100 to-purple-100 rounded-b-lg py-3">
        <p className="text-center text-purple-600 font-medium">
          This approach preserves pure Tawheed while ensuring faithfulness to
          revelation
        </p>
      </CardFooter>
    </Card>
  );
};

export const UlulAzm = () => {
  const prophets = [
    {
      id: 1,
      name: "Prophet Nuh (Noah)",
      arabic: "نوح",
      honorific: "A.S",
      description:
        "Known for his perseverance in calling his people to monotheism for over 950 years, and building the Ark.",
      color: "bg-blue-100 border-blue-300",
      iconColor: "bg-blue-500",
      icon: "N",
    },
    {
      id: 2,
      name: "Prophet Ibrahim (Abraham)",
      arabic: "إبراهيم",
      honorific: "A.S",
      description:
        "Known as the 'Father of Prophets' who was willing to sacrifice his son for Allah and rebuilt the Ka'bah.",
      color: "bg-green-100 border-green-300",
      iconColor: "bg-green-500",
      icon: "I",
    },
    {
      id: 3,
      name: "Prophet Musa (Moses)",
      arabic: "موسى",
      honorific: "A.S",
      description:
        "Spoke directly with Allah and was given the Torah. He led the Children of Israel out of Egypt.",
      color: "bg-amber-100 border-amber-300",
      iconColor: "bg-amber-500",
      icon: "M",
    },
    {
      id: 4,
      name: "Prophet Isa (Jesus)",
      arabic: "عيسى",
      honorific: "A.S",
      description:
        "Born miraculously to Maryam (Mary) and was given the Injeel (Gospel). Performed many miracles.",
      color: "bg-rose-100 border-rose-300",
      iconColor: "bg-rose-500",
      icon: "I",
    },
    {
      id: 5,
      name: "Prophet Muhammad",
      arabic: "محمد",
      honorific: "ﷺ",
      description:
        "The final prophet and messenger, given the Quran and sent as a mercy to all mankind.",
      color: "bg-emerald-100 border-emerald-300",
      iconColor: "bg-emerald-500",
      icon: "M",
    },
  ];

  return (
    <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-amber-200 to-orange-200 rounded-t-lg">
        <CardTitle className="text-center text-2xl font-bold text-amber-800">
          Ulul Azm (أولو العزم)
        </CardTitle>
        <CardDescription className="text-center text-lg font-medium text-amber-600">
          The Five Greatest Prophets in Islam
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-center text-gray-700 mb-6 px-4 py-2 bg-white/70 rounded-lg border border-amber-200">
          Ulul Azm refers to the five greatest prophets in Islam who showed
          exceptional patience, perseverance, and determination in delivering
          Allah's message.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {prophets.map((prophet) => (
            <div
              key={prophet.id}
              className={`p-4 rounded-lg border-2 ${prophet.color} transition-all hover:shadow-md duration-300 hover:scale-105`}
            >
              <div className="flex items-center mb-3">
                <Avatar className="h-10 w-10 mr-2">
                  <AvatarFallback className={`${prophet.iconColor} text-white`}>
                    {prophet.icon}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold text-gray-800 leading-tight">
                    {prophet.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {prophet.arabic} {prophet.honorific}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-700">{prophet.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center bg-gradient-to-r from-amber-100 to-orange-100 rounded-b-lg py-3">
        <p className="text-center text-amber-600 font-medium">
          These prophets faced great challenges but remained steadfast in their
          mission
        </p>
      </CardFooter>
    </Card>
  );
};

export default function IslamicConcepts() {
  return (
    <div className="container mx-auto py-10 px-4 space-y-4">
      <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
        Islamic Concepts Explorer 🕌✨
      </h1>

      <AsmaAlQuran />
      <DuroodSharif />
      <AdabAlTalib />
      <AhkamAlTaharah />
      <AhkamAlNikah />
      <DarajatAlJannah />
      <YawmAlQiyamahComponent />
      <AqeedahComponent />
      <JihadComponent />
      <AhkamShariaComponent />
      <MalaikaComponent />
      <AlKabairComponent />
      <AhlulBaytComponent />
      <AsharaMubashsharaComponent />
      <KutubSamawiyyahComponent />
      <PillarsOfFaith />

      <PillarsOfIslam />

      <AttributesOfAllah />

      <UlulAzm />
    </div>
  );
}
