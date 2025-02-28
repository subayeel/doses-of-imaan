/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  BookOpen,
  Moon,
  MessageCircle,
  Repeat,
  BookMarked,
  ShieldCheck,
  Users,
  Heart,
  DollarSign,
  UserCheck,
  ChevronRight,
  ArrowUp,
  Feather,
  HeartHandshake,
  Zap,
  Check,
  Layers,
  SparkleIcon,
  Cloud,
  Sparkle,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ImmanRecoveryRemedies = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "intro",
        title: "Remedies to Recover Imaan",
        icon: Heart,
        color: "bg-emerald-100 dark:bg-emerald-900",
        iconColor: "text-emerald-500",
      },
      {
        id: "salah",
        title: "1. Perform Your Salah",
        icon: Sparkle,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      {
        id: "religious-company",
        title: "2. Religious Company",
        icon: Users,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "repentance",
        title: "3. Practice Repentance",
        icon: Repeat,
        color: "bg-indigo-100 dark:bg-indigo-900",
        iconColor: "text-indigo-500",
      },
      {
        id: "fasting",
        title: "4. Fast & Be Grateful",
        icon: Moon,
        color: "bg-amber-100 dark:bg-amber-900",
        iconColor: "text-amber-500",
      },
      {
        id: "death-awareness",
        title: "5. Remember Death",
        icon: Cloud,
        color: "bg-gray-100 dark:bg-gray-900",
        iconColor: "text-gray-500",
      },
      {
        id: "quran-recitation",
        title: "6. Quran Recitation",
        icon: BookOpen,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "dhikr",
        title: "7. Perform Dhikr",
        icon: MessageCircle,
        color: "bg-rose-100 dark:bg-rose-900",
        iconColor: "text-rose-500",
      },
      {
        id: "knowledge",
        title: "8. Attain Knowledge",
        icon: BookMarked,
        color: "bg-cyan-100 dark:bg-cyan-900",
        iconColor: "text-cyan-500",
      },
      {
        id: "sabr",
        title: "9. Practice Sabr",
        icon: ShieldCheck,
        color: "bg-yellow-100 dark:bg-yellow-900",
        iconColor: "text-yellow-500",
      },
      {
        id: "sadqah",
        title: "10. Give Sadqah",
        icon: DollarSign,
        color: "bg-pink-100 dark:bg-pink-900",
        iconColor: "text-pink-500",
      },
      {
        id: "visit-sick",
        title: "11. Visit the Sick",
        icon: UserCheck,
        color: "bg-orange-100 dark:bg-orange-900",
        iconColor: "text-orange-500",
      },
    ];
  }, []);

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const currentRefs = sectionRefs.current;

    // Observe all section elements
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element;
        observer.observe(element);
      }
    });

    return () => {
      // Clean up observer
      contents.forEach(({ id }) => {
        const element = currentRefs[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [contents]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-blue-800 dark:from-emerald-700 dark:to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="text-emerald-200" size={32} />
            <h1 className="text-4xl font-bold">
              Remedies to Recover Your Imaan
            </h1>
          </div>
          <p className="text-xl max-w-2xl text-emerald-100">
            Practical, spiritual steps to strengthen your faith and reconnect
            with Allah during times of weakness
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-white text-emerald-700 hover:bg-emerald-50"
              onClick={() => scrollToSection("salah")}
            >
              Start Your Journey <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-emerald-800/50"
              onClick={() => scrollToSection("intro")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="hidden lg:block col-span-1">
            <div className="sticky top-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Path to Recovery</CardTitle>
                  <CardDescription>
                    Explore these spiritual remedies
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-1">
                    {contents.map(({ id, title, icon: Icon, iconColor }) => (
                      <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className={`flex items-center gap-3 p-3 w-full text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                          activeSection === id
                            ? "bg-gray-100 dark:bg-gray-800 font-medium"
                            : ""
                        }`}
                      >
                        <Icon className={iconColor} size={18} />
                        <span>{title}</span>
                        {activeSection === id && (
                          <ChevronRight className="ml-auto" size={16} />
                        )}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Introduction */}
            <section id="intro" className="scroll-mt-20">
              <Card className={`border-l-4 border-emerald-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900">
                      <Heart className="text-emerald-500" size={24} />
                    </div>
                    <CardTitle>Journey to Recovering Imaan</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Faith, like any relationship, has its ups and downs. Periods
                    of weak Imaan are natural, but Allah has blessed us with
                    practical ways to strengthen our connection with Him.
                  </p>
                  <div className="bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Quranic Guidance:</h3>
                    <p className="italic">
                      "Verily, in the remembrance of Allah do hearts find rest."
                      (Quran 13:28)
                    </p>
                  </div>
                  <p>
                    The following remedies are rooted in Quranic wisdom and
                    prophetic tradition. Each one addresses a different aspect
                    of your spiritual well-being, working together to rebuild
                    and strengthen your Imaan when it feels weak.
                  </p>
                  <p>
                    Remember, recovering your Imaan is a journey, not a
                    destination. Be patient with yourself and take small,
                    consistent steps. Even the Prophet Muhammad (peace be upon
                    him) experienced fluctuations in his spiritual state and
                    would supplicate:
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                    <p className="italic text-center">
                      "O Turner of hearts, make my heart firm upon Your
                      religion."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 1. Perform Salah */}
            <section id="salah" className="scroll-mt-20">
              <Card className={`border-l-4 border-blue-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Sparkle className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>
                      1. Do Not Forget to Perform Your Salah
                    </CardTitle>
                  </div>
                  <Badge variant="outline" className="w-fit mt-2">
                    Foundation of Faith
                  </Badge>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Prayer is the cornerstone of faith and the most direct
                    connection between you and Allah. Even when Imaan feels
                    weak, maintaining your prayers is essential.
                  </p>

                  <Tabs defaultValue="quran">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="quran">Quranic Guidance</TabsTrigger>
                      <TabsTrigger value="hadith">Prophetic Wisdom</TabsTrigger>
                      <TabsTrigger value="practice">
                        Practical Steps
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="quran"
                      className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">From the Quran:</h3>
                      <p className="italic mb-2">
                        "And seek help through patience and prayer, and indeed,
                        it is difficult except for the humbly submissive [to
                        Allah]." (Quran 2:45)
                      </p>
                      <p className="italic">
                        "Indeed, prayer prohibits immorality and wrongdoing, and
                        the remembrance of Allah is greater." (Quran 29:45)
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="hadith"
                      className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">Hadith:</h3>
                      <p className="italic mb-2">
                        The Prophet Muhammad ﷺ said: "The first matter that the
                        slave will be brought to account for on the Day of
                        Judgment is the prayer. If it is sound, then the rest of
                        his deeds will be sound. And if it is bad, then the rest
                        of his deeds will be bad." (Recorded by Al-Tabarani)
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="practice"
                      className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">Practical Steps:</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Set alarms 5-10 minutes before each prayer time</li>
                        <li>
                          Create a dedicated, clean prayer space in your home
                        </li>
                        <li>
                          Focus on quality over quantity - pray with presence of
                          mind
                        </li>
                        <li>
                          If you miss a prayer, make it up as soon as you
                          remember
                        </li>
                        <li>
                          Try to pray at least some prayers in congregation at
                          the masjid
                        </li>
                      </ul>
                    </TabsContent>
                  </Tabs>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Dua Before Prayer:</h3>
                    <p className="italic text-center mb-2 text-sm">
                      اللهم اجعلني من التوابين واجعلني من المتطهرين
                    </p>
                    <p className="text-center text-sm">
                      "Allahumma-j&apos;alni minat-tawwabina waj&apos;alni
                      minal-mutatahhirin"
                    </p>
                    <p className="text-center text-sm italic mt-1">
                      "O Allah, make me among those who return to You in
                      repentance and make me among those who purify themselves."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 2. Religious Company */}
            <section id="religious-company" className="scroll-mt-20">
              <Card className={`border-l-4 border-purple-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Users className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>
                      2. Speak with Someone Religious and Knowledgeable
                    </CardTitle>
                  </div>
                  <Badge variant="outline" className="w-fit mt-2">
                    Spiritual Companionship
                  </Badge>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The company we keep profoundly influences our faith.
                    Surrounding yourself with righteous companions can reignite
                    your spiritual flame and provide guidance during difficult
                    times.
                  </p>

                  <Tabs defaultValue="quran">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="quran">Quranic Guidance</TabsTrigger>
                      <TabsTrigger value="hadith">Prophetic Wisdom</TabsTrigger>
                      <TabsTrigger value="practice">
                        Practical Steps
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="quran"
                      className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">From the Quran:</h3>
                      <p className="italic mb-2">
                        "And keep yourself patient [by being] with those who
                        call upon their Lord in the morning and the evening,
                        seeking His countenance." (Quran 18:28)
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="hadith"
                      className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">Hadith:</h3>
                      <p className="italic mb-2">
                        The Prophet Muhammad ﷺ said: "A person is upon the
                        religion of his close friend, so let each of you look at
                        whom he befriends." (Abu Dawud and Tirmidhi)
                      </p>
                      <p className="italic">
                        The Prophet ﷺ also said: "The example of a good
                        companion and a bad companion is like that of the seller
                        of musk and the blower of the blacksmith&apos;s bellows.
                        The seller of musk will either give you some perfume, or
                        you will buy some from him, or at least you will come
                        away having experienced its good smell. But the blower
                        of the blacksmith&apos;s bellows will either burn your
                        clothes, or at least you will come away having
                        experienced its bad smell." (Bukhari and Muslim)
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="practice"
                      className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">Practical Steps:</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Attend halaqas (religious gatherings) at your local
                          masjid
                        </li>
                        <li>
                          Join Islamic study circles or online communities
                        </li>
                        <li>
                          Schedule regular meetings with a trusted scholar or
                          imam
                        </li>
                        <li>
                          Reach out to friends who inspire you spiritually
                        </li>
                        <li>
                          Limit time with people who negatively impact your
                          faith
                        </li>
                      </ul>
                    </TabsContent>
                  </Tabs>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">
                      Dua for Righteous Companionship:
                    </h3>
                    <p className="italic text-center mb-2 text-sm">
                      اللهم ارزقني الصحبة الصالحة التي تعينني على طاعتك وتبعدني
                      عن معصيتك
                    </p>
                    <p className="text-center text-sm">
                      "Allahumma-rzuqni as-suhbata as-salihata allati
                      tu&apos;inuni &apos;ala ta&apos;atika wa tub&apos;iduni
                      &apos;an ma&apos;siyatik"
                    </p>
                    <p className="text-center text-sm italic mt-1">
                      "O Allah, grant me righteous companionship that helps me
                      in Your obedience and keeps me away from disobeying You."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 3. Practice Repentance */}
            <section id="repentance" className="scroll-mt-20">
              <Card className={`border-l-4 border-indigo-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Repeat className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>3. Practice Repentance</CardTitle>
                  </div>
                  <Badge variant="outline" className="w-fit mt-2">
                    Spiritual Renewal
                  </Badge>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Sincere repentance (Tawbah) cleanses the heart and removes
                    the barriers between you and Allah. It is a powerful way to
                    renew your faith and start fresh.
                  </p>

                  <Tabs defaultValue="quran">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="quran">Quranic Guidance</TabsTrigger>
                      <TabsTrigger value="hadith">Prophetic Wisdom</TabsTrigger>
                      <TabsTrigger value="practice">
                        Practical Steps
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="quran"
                      className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">From the Quran:</h3>
                      <p className="italic mb-2">
                        "And turn to Allah in repentance, all of you, O
                        believers, that you might succeed." (Quran 24:31)
                      </p>
                      <p className="italic">
                        "Indeed, Allah loves those who are constantly repentant
                        and loves those who purify themselves." (Quran 2:222)
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="hadith"
                      className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">Hadith:</h3>
                      <p className="italic mb-2">
                        The Prophet Muhammad ﷺ said: "All children of Adam are
                        sinners, and the best of sinners are those who repent."
                        (Tirmidhi and Ibn Majah)
                      </p>
                      <p className="italic">
                        The Prophet ﷺ also said: "Allah, the Exalted, stretches
                        out His Hand during the night so that those who
                        committed sins during the day may repent, and He
                        stretches out His Hand during the day so that those who
                        committed sins during the night may repent. He continues
                        to do so until the sun rises from the West." (Muslim)
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="practice"
                      className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">
                        Steps of True Repentance:
                      </h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Recognize and acknowledge your mistake</li>
                        <li>Feel sincere remorse and regret</li>
                        <li>Make a firm intention not to repeat the sin</li>
                        <li>
                          If the sin involved another person&apos;s rights, make
                          amends
                        </li>
                        <li>Perform good deeds to replace the bad ones</li>
                      </ul>
                    </TabsContent>
                  </Tabs>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Dua for Repentance:</h3>
                    <p className="italic text-center mb-2 text-sm">
                      اللهم أنت ربي لا إله إلا أنت خلقتني وأنا عبدك وأنا على
                      عهدك ووعدك ما استطعت أعوذ بك من شر ما صنعت أبوء لك بنعمتك
                      علي وأبوء بذنبي فاغفر لي فإنه لا يغفر الذنوب إلا أنت
                    </p>
                    <p className="text-center text-sm">
                      "Allahumma anta Rabbi, la ilaha illa anta, khalaqtani wa
                      ana &apos;abduka, wa ana &apos;ala &apos;ahdika wa
                      wa&apos;dika ma-stata&apos;tu, a&apos;udhu bika min sharri
                      ma sana&apos;tu, abu&apos;u laka bi ni&apos;matika
                      &apos;alayya, wa abu&apos;u bidhanbi, faghfir li, fa
                      innahu la yaghfiru-dh-dhunuba illa anta"
                    </p>
                    <p className="text-center text-sm italic mt-1">
                      "O Allah, You are my Lord, there is none worthy of worship
                      except You. You created me and I am Your servant, and I
                      abide by Your covenant and promise as best I can. I seek
                      refuge in You from the evil of what I have done. I
                      acknowledge Your blessing upon me, and I acknowledge my
                      sin, so forgive me, for none forgives sins except You."
                    </p>
                    <p className="text-center text-xs mt-2">
                      (This is Sayyid al-Istighfar - the Master of Seeking
                      Forgiveness)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 4. Fast for a day */}
            <section id="fasting" className="scroll-mt-20">
              <Card className={`border-l-4 border-amber-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <Moon className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>
                      4. Fast for a Day and Focus on Gratitude
                    </CardTitle>
                  </div>
                  <Badge variant="outline" className="w-fit mt-2">
                    Spiritual Discipline
                  </Badge>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Fasting purifies both body and soul, helping to regain
                    spiritual focus and discipline. When combined with
                    gratitude, it becomes a powerful remedy for spiritual
                    weakness.
                  </p>

                  <Tabs defaultValue="quran">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="quran">Quranic Guidance</TabsTrigger>
                      <TabsTrigger value="hadith">Prophetic Wisdom</TabsTrigger>
                      <TabsTrigger value="practice">
                        Practical Steps
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="quran"
                      className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">From the Quran:</h3>
                      <p className="italic mb-2">
                        "O you who have believed, decreed upon you is fasting as
                        it was decreed upon those before you that you may become
                        righteous." (Quran 2:183)
                      </p>
                      <p className="italic">
                        "And if you are grateful, I will surely increase you [in
                        favor]." (Quran 14:7)
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="hadith"
                      className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">Hadith:</h3>
                      <p className="italic mb-2">
                        The Prophet Muhammad ﷺ said: "Fasting is a shield."
                        (Bukhari and Muslim)
                      </p>
                      <p className="italic">
                        He ﷺ also said: "Whoever fasts during Ramadan out of
                        sincere faith and hoping to attain Allah&apos;s rewards,
                        then all his past sins will be forgiven." (Bukhari)
                      </p>
                      <p className="italic mt-2">
                        Regarding gratitude, the Prophet ﷺ said: "How wonderful
                        is the case of a believer; there is good for him in
                        everything and this applies only to a believer. If
                        prosperity attends him, he expresses gratitude to Allah
                        and that is good for him; and if adversity befalls him,
                        he endures it patiently and that is better for him."
                        (Muslim)
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="practice"
                      className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">Practical Steps:</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Fast Mondays and Thursdays (following the Sunnah)
                        </li>
                        <li>
                          While fasting, increase your worship and Quran
                          recitation
                        </li>
                        <li>
                          Keep a gratitude journal listing Allah&apos;s
                          blessings
                        </li>
                        <li>
                          Reflect on those with less than you during your fast
                        </li>
                        <li>
                          Break your fast with a simple meal and gratitude
                        </li>
                      </ul>
                    </TabsContent>
                  </Tabs>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">
                      Dua Before Breaking Fast:
                    </h3>
                    <p className="italic text-center mb-2 text-sm">
                      اللهم إني لك صمت وبك آمنت وعلى رزقك أفطرت
                    </p>
                    <p className="text-center text-sm">
                      "Allahumma inni laka sumtu, wa bika amantu, wa &apos;ala
                      rizqika aftartu"
                    </p>
                    <p className="text-center text-sm italic mt-1">
                      "O Allah, I fasted for You, I believed in You, and I break
                      my fast with Your provision."
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg mt-4">
                    <h3 className="font-medium mb-2">Gratitude Practice:</h3>
                    <p className="italic mb-2">
                      Say "Alhamdulillah" (All praise is due to Allah)
                      frequently throughout the day
                    </p>
                    <p>
                      At the end of each day, reflect on at least three specific
                      blessings Allah has given you, even during difficult
                      times.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 5. Remember Death */}
            <section id="death-awareness" className="scroll-mt-20">
              <Card className={`border-l-4 border-gray-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900">
                      <Cloud className="text-gray-500" size={24} />
                    </div>
                    <CardTitle>5. Focus on the Thought of Death</CardTitle>
                  </div>
                  <Badge variant="outline" className="w-fit mt-2">
                    Reality Check
                  </Badge>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Remembering death puts our worldly concerns in perspective
                    and reminds us of our ultimate purpose. It&apos;s not meant
                    to be morbid, but rather a powerful reality check that can
                    reinvigorate faith.
                  </p>

                  <Tabs defaultValue="quran">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="quran">Quranic Guidance</TabsTrigger>
                      <TabsTrigger value="hadith">Prophetic Wisdom</TabsTrigger>
                      <TabsTrigger value="practice">
                        Practical Steps
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="quran"
                      className="bg-gray-50 dark:bg-gray-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">From the Quran:</h3>
                      <p className="italic mb-2">
                        "Every soul will taste death, and you will only be given
                        your [full] compensation on the Day of Resurrection."
                        (Quran 3:185)
                      </p>
                      <p className="italic">
                        "And the intoxication of death will bring the truth;
                        that is what you were trying to avoid." (Quran 50:19)
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="hadith"
                      className="bg-gray-50 dark:bg-gray-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">Hadith:</h3>
                      <p className="italic mb-2">
                        The Prophet Muhammad ﷺ said: "Remember frequently the
                        destroyer of pleasures [i.e., death]." (Tirmidhi, Ibn
                        Majah)
                      </p>
                      <p className="italic">
                        He ﷺ also said: "Be in this world as if you were a
                        stranger or a traveler." (Bukhari)
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="practice"
                      className="bg-gray-50 dark:bg-gray-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">Practical Steps:</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Occasionally visit graveyards to reflect (following
                          the Sunnah)
                        </li>
                        <li>
                          Ask yourself daily: "If I died today, would I be ready
                          to meet Allah?"
                        </li>
                        <li>Make a habit of settling disputes quickly</li>
                        <li>Write a will and keep your affairs in order</li>
                        <li>
                          Plan your day with the awareness that it could be your
                          last
                        </li>
                      </ul>
                    </TabsContent>
                  </Tabs>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">
                      Dua When Visiting Graves:
                    </h3>
                    <p className="italic text-center mb-2 text-sm">
                      السلام عليكم دار قوم مؤمنين وإنا إن شاء الله بكم لاحقون
                      نسأل الله لنا ولكم العافية
                    </p>
                    <p className="text-center text-sm">
                      &quot;Assalamu &apos;alaykum dara qawmin mu&apos;minin, wa
                      inna in sha Allah bikum lahiqun. Nas&apos;alullaha lana wa
                      lakumul &apos;afiyah"
                    </p>
                    <p className="text-center text-sm italic mt-1">
                      "Peace be upon you, abode of the believing people. We
                      will, if Allah wills, be joining you. We ask Allah for
                      well-being for us and you."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 6. Quran Recitation */}
            <section id="quran-recitation" className="scroll-mt-20">
              <Card className={`border-l-4 border-green-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <BookOpen className="text-green-500" size={24} />
                    </div>
                    <CardTitle>
                      6. Conduct or Listen to Quran Recitation
                    </CardTitle>
                  </div>
                  <Badge variant="outline" className="w-fit mt-2">
                    Divine Guidance
                  </Badge>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    The Quran is a healing for the hearts and a source of
                    guidance. Regular recitation or listening to it can
                    strengthen your connection with Allah and provide clarity in
                    times of confusion.
                  </p>

                  <Tabs defaultValue="quran">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="quran">Quranic Guidance</TabsTrigger>
                      <TabsTrigger value="hadith">Prophetic Wisdom</TabsTrigger>
                      <TabsTrigger value="practice">
                        Practical Steps
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="quran"
                      className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">From the Quran:</h3>
                      <p className="italic mb-2">
                        "And We send down of the Quran that which is healing and
                        mercy for the believers." (Quran 17:82)
                      </p>
                      <p className="italic">
                        "Indeed, those who recite the Book of Allah and
                        establish prayer and spend [in His cause] out of what We
                        have provided them, secretly and publicly, [can] expect
                        a profit that will never perish." (Quran 35:29)
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="hadith"
                      className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">Hadith:</h3>
                      <p className="italic mb-2">
                        The Prophet Muhammad ﷺ said: "The best among you are
                        those who learn the Quran and teach it." (Bukhari)
                      </p>
                      <p className="italic">
                        He ﷺ also said: "Whoever recites a letter from the Book
                        of Allah will receive a good deed, and a good deed is
                        multiplied by ten. I do not say that Alif-Lam-Mim is one
                        letter, but Alif is a letter, Lam is a letter, and Mim
                        is a letter." (Tirmidhi)
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="practice"
                      className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">Practical Steps:</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          Start with a small, consistent daily portion (even
                          just a page)
                        </li>
                        <li>
                          Listen to beautiful recitation during commutes or
                          chores
                        </li>
                        <li>
                          Join a Quran study circle to understand the meanings
                        </li>
                        <li>Set a goal to memorize short surahs or verses</li>
                        <li>
                          Reflect deeply on the meaning of what you recite
                        </li>
                      </ul>
                    </TabsContent>
                  </Tabs>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">
                      Dua Before Reciting Quran:
                    </h3>
                    <p className="italic text-center mb-2 text-sm">
                      اللهم افتح علي حكمتك وانشر علي رحمتك وذكرني ما نسيت يا ذا
                      الجلال والإكرام
                    </p>
                    <p className="text-center text-sm">
                      "Allahumma-ftah &apos;alayya hikmatak wanshur &apos;alayya
                      rahmatak wa dhakkirni ma nasitu ya dhal jalali wal ikram"
                    </p>
                    <p className="text-center text-sm italic mt-1">
                      "O Allah, open for me Your wisdom, and bestow Your mercy
                      upon me, and remind me of what I have forgotten, O
                      Possessor of Glory and Honor."
                    </p>
                  </div>

                  <div className="bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">
                      Recommended Surahs for Spiritual Upliftment:
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Surah Al-Fatiha (The Opening) - for guidance</li>
                      <li>Surah Yasin - the heart of the Quran</li>
                      <li>
                        Surah Ar-Rahman (The Most Merciful) - to remember
                        Allah&apos;s blessings
                      </li>
                      <li>
                        Surah Al-Ikhlas (Sincerity) - for strengthening Tawhid
                        (Oneness of Allah)
                      </li>
                      <li>
                        Ayatul Kursi (2:255) - for protection and strength
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 7. Perform Dhikr */}
            <section id="dhikr" className="scroll-mt-20">
              <Card className={`border-l-4 border-rose-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-rose-100 dark:bg-rose-900">
                      <MessageCircle className="text-rose-500" size={24} />
                    </div>
                    <CardTitle>7. Perform Dhikr</CardTitle>
                  </div>
                  <Badge variant="outline" className="w-fit mt-2">
                    Remembrance of Allah
                  </Badge>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Dhikr (remembrance of Allah) is a simple yet profound
                    practice that can transform your spiritual state. Regular
                    remembrance polishes the heart and maintains your connection
                    with Allah throughout the day.
                  </p>

                  <Tabs defaultValue="quran">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="quran">Quranic Guidance</TabsTrigger>
                      <TabsTrigger value="hadith">Prophetic Wisdom</TabsTrigger>
                      <TabsTrigger value="practice">
                        Practical Steps
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="quran"
                      className="bg-rose-50 dark:bg-rose-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">From the Quran:</h3>
                      <p className="italic mb-2">
                        "Unquestionably, by the remembrance of Allah hearts are
                        assured." (Quran 13:28)
                      </p>
                      <p className="italic">
                        "Those who believe and whose hearts find rest in the
                        remembrance of Allah, Verily, in the remembrance of
                        Allah do hearts find rest." (Quran 13:28)
                      </p>
                      <p className="italic mt-2">
                        "O you who have believed, remember Allah with much
                        remembrance." (Quran 33:41)
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="hadith"
                      className="bg-rose-50 dark:bg-rose-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">Hadith:</h3>
                      <p className="italic mb-2">
                        The Prophet Muhammad ﷺ said: "The comparison of the one
                        who remembers Allah and the one who does not remember
                        Allah is like that of the living and the dead."
                        (Bukhari)
                      </p>
                      <p className="italic">
                        He ﷺ also said: "Shall I tell you about the best of
                        deeds, the most pure in the sight of your Lord, about
                        the one that is of the highest order and is far better
                        for you than spending gold and silver, even better for
                        you than meeting your enemies in the battlefield where
                        you strike at their necks and they at yours?" The
                        companions replied, "Yes, O Messenger of Allah!" He
                        said, "It is the remembrance of Allah." (Tirmidhi)
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="practice"
                      className="bg-rose-50 dark:bg-rose-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">Recommended Dhikr:</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Subhan Allah (Glory be to Allah) - 33 times</li>
                        <li>
                          Alhamdulillah (All praise is due to Allah) - 33 times
                        </li>
                        <li>Allahu Akbar (Allah is the Greatest) - 33 times</li>
                        <li>
                          La ilaha illa Allah (There is no god but Allah) - 100
                          times
                        </li>
                        <li>
                          Astaghfirullah (I seek forgiveness from Allah) - 100
                          times
                        </li>
                      </ul>
                    </TabsContent>
                  </Tabs>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">
                      Morning & Evening Dhikr:
                    </h3>
                    <p className="italic text-center mb-2 text-sm">
                      لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو
                      على كل شيء قدير
                    </p>
                    <p className="text-center text-sm">
                      "La ilaha illa Allah wahdahu la sharika lah, lahul mulku
                      wa lahul hamd, wa huwa &apos;ala kulli shay&apos;in qadir"
                    </p>
                    <p className="text-center text-sm italic mt-1">
                      "There is no god but Allah, alone with no partner. To Him
                      belongs the dominion, to Him belongs all praise, and He
                      has power over all things."
                    </p>
                    <p className="text-center text-xs mt-2">
                      (Recite 100 times daily for immense rewards)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 8. Attain Knowledge */}
            <section id="knowledge" className="scroll-mt-20">
              <Card className={`border-l-4 border-cyan-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900">
                      <BookMarked className="text-cyan-500" size={24} />
                    </div>
                    <CardTitle>8. Attain Knowledge</CardTitle>
                  </div>
                  <Badge variant="outline" className="w-fit mt-2">
                    Spiritual Enlightenment
                  </Badge>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Seeking Islamic knowledge illuminates the path of faith.
                    Understanding why we believe what we believe strengthens our
                    commitment and provides clarity during times of doubt.
                  </p>

                  <Tabs defaultValue="quran">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="quran">Quranic Guidance</TabsTrigger>
                      <TabsTrigger value="hadith">Prophetic Wisdom</TabsTrigger>
                      <TabsTrigger value="practice">
                        Practical Steps
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="quran"
                      className="bg-cyan-50 dark:bg-cyan-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">From the Quran:</h3>
                      <p className="italic mb-2">
                        "Say, &apos;Are those who know equal to those who do not
                        know?&apos; Only they will remember [who are] people of
                        understanding." (Quran 39:9)
                      </p>
                      <p className="italic">
                        "Allah will raise those who have believed among you and
                        those who were given knowledge, by degrees." (Quran
                        58:11)
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="hadith"
                      className="bg-cyan-50 dark:bg-cyan-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">Hadith:</h3>
                      <p className="italic mb-2">
                        The Prophet Muhammad ﷺ said: "Whoever follows a path in
                        pursuit of knowledge, Allah makes easy for him a path to
                        Paradise." (Muslim)
                      </p>
                      <p className="italic">
                        He ﷺ also said: "Seeking knowledge is obligatory upon
                        every Muslim." (Ibn Majah)
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="practice"
                      className="bg-cyan-50 dark:bg-cyan-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">Practical Steps:</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Set aside time each day for Islamic study</li>
                        <li>
                          Join online courses or local classes at your masjid
                        </li>
                        <li>Start with basics: Tawhid, Seerah, and Fiqh</li>
                        <li>Listen to reliable scholars&apos; lectures</li>
                        <li>Read books by reputable scholars</li>
                        <li>Teach what you learn to others</li>
                      </ul>
                    </TabsContent>
                  </Tabs>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">
                      Dua for Seeking Knowledge:
                    </h3>
                    <p className="italic text-center mb-2 text-sm">
                      رَبِّ زِدْنِي عِلْمًا
                    </p>
                    <p className="text-center text-sm">
                      "Rabbi zidni &apos;ilma"
                    </p>
                    <p className="text-center text-sm italic mt-1">
                      "My Lord, increase me in knowledge." (Quran 20:114)
                    </p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">
                      Recommended Knowledge Topics for Beginners:
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>The pillars of Imaan and Islam</li>
                      <li>The biography of Prophet Muhammad ﷺ (Seerah)</li>
                      <li>Tafsir (explanation) of short surahs</li>
                      <li>
                        Basic Islamic rulings (Fiqh) related to daily life
                      </li>
                      <li>Stories of the prophets and companions</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 9. Practice Sabr */}
            <section id="sabr" className="scroll-mt-20">
              <Card className={`border-l-4 border-yellow-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                      <ShieldCheck className="text-yellow-500" size={24} />
                    </div>
                    <CardTitle>9. Practice Sabr</CardTitle>
                  </div>
                  <Badge variant="outline" className="w-fit mt-2">
                    Patient Perseverance
                  </Badge>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Sabr (patience) during spiritual difficulties is itself an
                    act of worship. Perseverance through periods of weak faith
                    demonstrates trust in Allah and leads to stronger Imaan.
                  </p>

                  <Tabs defaultValue="quran">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="quran">Quranic Guidance</TabsTrigger>
                      <TabsTrigger value="hadith">Prophetic Wisdom</TabsTrigger>
                      <TabsTrigger value="practice">
                        Practical Steps
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="quran"
                      className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">From the Quran:</h3>
                      <p className="italic mb-2">
                        "O you who have believed, seek help through patience and
                        prayer. Indeed, Allah is with the patient." (Quran
                        2:153)
                      </p>
                      <p className="italic">
                        "Indeed, the patient will be given their reward without
                        account [i.e., without measure]." (Quran 39:10)
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="hadith"
                      className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">Hadith:</h3>
                      <p className="italic mb-2">
                        The Prophet Muhammad ﷺ said: "How wonderful is the
                        affair of the believer, for his affairs are all good,
                        and this applies to no one but the believer. If
                        something good happens to him, he is thankful for it and
                        that is good for him. If something bad happens to him,
                        he bears it with patience and that is good for him."
                        (Muslim)
                      </p>
                      <p className="italic">
                        He ﷺ also said: "Whoever practices abstinence in this
                        world, Allah will teach him wisdom; and whoever
                        practices Sabr, Allah will give him strength."
                        (Tabarani)
                      </p>
                    </TabsContent>
                    <TabsContent
                      value="practice"
                      className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mt-2"
                    >
                      <h3 className="font-medium mb-2">
                        Types of Sabr to Practice:
                      </h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <strong>Sabr in worship</strong> - Being consistent in
                          prayers and other acts of worship even when not
                          feeling spiritually motivated
                        </li>
                        <li>
                          <strong>Sabr against sin</strong> - Resisting
                          temptations and desires that lead away from Allah
                        </li>
                        <li>
                          <strong>Sabr during trials</strong> - Maintaining
                          faith and good character during difficulties
                        </li>
                        <li>
                          <strong>Sabr in da&apos;wah</strong> - Being patient
                          when inviting others to good
                        </li>
                        <li>
                          <strong>Sabr with people</strong> - Being patient with
                          family members, friends, and colleagues
                        </li>
                      </ul>
                    </TabsContent>
                  </Tabs>

                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Dua for Patience:</h3>
                    <p className="italic text-center mb-2 text-sm">
                      رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا
                      وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ
                    </p>
                    <p className="text-center text-sm">
                      "Rabbana afrigh &apos;alayna sabran wa thabbit aqdamana
                      wansurna &apos;alal-qawmil-kafirin"
                    </p>
                    <p className="text-center text-sm italic mt-1">
                      "Our Lord, pour upon us patience and plant firmly our feet
                      and give us victory over the disbelieving people." (Quran
                      2:250)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
            {/* Section 10: Sadqah */}
            <section id="sadqah" className="scroll-mt-20">
              <Card className={`border-l-4 border-emerald-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900">
                      <HeartHandshake className="text-emerald-500" size={24} />
                    </div>
                    <CardTitle>10. Sadqah (Charity)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Giving in charity not only helps those in need but also
                    purifies our wealth and increases our faith. The Prophet
                    Muhammad ﷺ emphasized the spiritual benefits of charity
                    throughout his teachings.
                  </p>

                  <div className="bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Quranic Verse:</h3>
                    <p className="italic border-l-4 border-emerald-500 pl-4">
                      "The example of those who spend their wealth in the way of
                      Allah is like a seed [of grain] which grows seven spikes;
                      in each spike is a hundred grains. And Allah multiplies
                      [His reward] for whom He wills. And Allah is
                      all-Encompassing and Knowing."{" "}
                      <span className="font-medium">
                        (Surah Al-Baqarah 2:261)
                      </span>
                    </p>
                  </div>

                  <div className="bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Hadith:</h3>
                    <p className="italic border-l-4 border-emerald-500 pl-4">
                      The Prophet Muhammad ﷺ said: "The believer&apos;s shade on
                      the Day of Resurrection will be his charity."{" "}
                      <span className="font-medium">(Tirmidhi)</span>
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                      <h3 className="text-emerald-600 dark:text-emerald-400 font-medium mb-2 flex items-center gap-2">
                        <Check size={16} className="text-emerald-500" />{" "}
                        Practical Steps
                      </h3>
                      <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                        <li>Start with even a small amount regularly</li>
                        <li>Donate to causes that touch your heart</li>
                        <li>Give anonymously when possible</li>
                        <li>Help family members and neighbors</li>
                        <li>Donate useful items you no longer need</li>
                      </ul>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                      <h3 className="text-emerald-600 dark:text-emerald-400 font-medium mb-2 flex items-center gap-2">
                        <MessageCircle size={16} className="text-emerald-500" />{" "}
                        Dua Before Giving Charity
                      </h3>
                      <p className="italic text-gray-700 dark:text-gray-300 border-l-4 border-emerald-500 pl-4">
                        "Allahumma ij&apos;al haa thuhran wa wiqaayatan wa
                        namaaa&apos;an"
                      </p>
                      <p className="mt-2 text-gray-700 dark:text-gray-300">
                        "O Allah, make this charity a source of protection,
                        purification, and growth."
                      </p>
                    </div>
                  </div>

                  <div className="bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Zap size={16} className="text-emerald-500" /> Spiritual
                      Benefits
                    </h3>
                    <p>
                      Charity strengthens your connection with Allah, purifies
                      your heart, creates empathy for others, increases your
                      rizq (provision), and serves as a shield against
                      hardships. Make charity a regular practice even in small
                      amounts to maintain the flow of baraka (blessings) in your
                      life.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 11: Visiting the Sick */}
            <section id="visitSick" className="scroll-mt-20">
              <Card className={`border-l-4 border-indigo-500`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                      <Users className="text-indigo-500" size={24} />
                    </div>
                    <CardTitle>11. Visit Sick People</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>
                    Visiting the sick is a beautiful act of worship that carries
                    tremendous rewards while reminding us of Allah&apos;s
                    blessings of health and well-being. It&apos;s a practice
                    encouraged by our beloved Prophet ﷺ and a means of
                    strengthening community bonds.
                  </p>

                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Hadith:</h3>
                    <p className="italic border-l-4 border-indigo-500 pl-4">
                      The Prophet Muhammad ﷺ said: "Whoever visits a sick person
                      remains in Khurfah until he returns." He was asked, "O
                      Messenger of Allah, what is Khurfah?" He replied,
                      "Harvesting the fruits of Paradise."{" "}
                      <span className="font-medium">(Muslim)</span>
                    </p>
                  </div>

                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Hadith:</h3>
                    <p className="italic border-l-4 border-indigo-500 pl-4">
                      The Prophet Muhammad ﷺ said: "A Muslim visiting his sick
                      Muslim brother will continue to be in the harvest of
                      Paradise until he returns."{" "}
                      <span className="font-medium">(Muslim)</span>
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                      <h3 className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 flex items-center gap-2">
                        <Check size={16} className="text-indigo-500" />{" "}
                        Etiquette of Visiting
                      </h3>
                      <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                        <li>Choose an appropriate time</li>
                        <li>Keep the visit brief unless requested otherwise</li>
                        <li>Bring small gifts if possible</li>
                        <li>Offer help with practical needs</li>
                        <li>Sit close to the sick person and show attention</li>
                        <li>Be positive but realistic</li>
                      </ul>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                      <h3 className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 flex items-center gap-2">
                        <MessageCircle size={16} className="text-indigo-500" />{" "}
                        Dua for the Sick
                      </h3>
                      <p className="italic text-gray-700 dark:text-gray-300 border-l-4 border-indigo-500 pl-4">
                        "Allahumma rabban-naas, adhhibil-ba&apos;s, washfi
                        antash-shaafi, laa shifaa&apos;a illa shifaa&apos;uka,
                        shifaa&apos;an laa yughaadiru saqaman"
                      </p>
                      <p className="mt-2 text-gray-700 dark:text-gray-300">
                        "O Allah, Lord of mankind, remove the harm and heal him,
                        for You are the Healer, and there is no healing except
                        Your healing, a healing that leaves no disease behind."
                      </p>
                    </div>
                  </div>

                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Zap size={16} className="text-indigo-500" /> Spiritual
                      Benefits
                    </h3>
                    <p>
                      Visiting the sick helps us practice empathy, reminds us of
                      our own mortality and blessings, gives us an opportunity
                      to serve others, strengthens community bonds, and softens
                      our hearts. Make it a regular practice to visit those who
                      are ill, even if just for a few minutes, and you&apos;ll
                      find your imaan growing stronger with each visit.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (only showing this part as requested) */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="rounded-full h-14 w-14 shadow-lg bg-teal-600 hover:bg-teal-700">
              <Layers size={24} />
            </Button>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-64 p-0 mr-6 mb-2">
            <nav className="max-h-80 overflow-y-auto">
              {contents.map(({ id, title, icon: Icon, iconColor }) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                  }}
                  className={`flex items-center gap-3 p-3 w-full text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    activeSection === id
                      ? "bg-gray-100 dark:bg-gray-800 font-medium"
                      : ""
                  }`}
                >
                  <Icon className={iconColor} size={18} />
                  <span>{title}</span>
                  {activeSection === id && (
                    <ChevronRight className="ml-auto" size={16} />
                  )}
                </button>
              ))}
            </nav>
          </PopoverContent>
        </Popover>
      </div>

      {/* Footer with Supplication */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Feather className="text-teal-600" size={18} />
            <h3 className="text-lg font-medium">Journey to Renewing Faith</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            May Allah strengthen our imaan, purify our hearts, and guide us to
            the straight path. May these remedies be a means of drawing closer
            to Him and finding peace in this life and the next.
          </p>
          <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded-lg max-w-lg mx-auto mt-6">
            <h4 className="font-medium mb-2 flex items-center justify-center gap-2">
              <SparkleIcon size={16} className="text-teal-500" /> Supplication
            </h4>
            <p className="italic text-gray-700 dark:text-gray-300">
              "Allahumma inni as&apos;aluka imaanan la yartaddu, wa
              na&apos;eeman la yanfadu, wa murافaqata nabiyyina Muhammadin
              sallallahu &apos;alaihi wa sallama fi a&apos;la al-jannati
              al-khuld."
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              "O Allah, I ask You for faith that does not waver, blessings that
              do not diminish, and the companionship of our Prophet Muhammad ﷺ
              in the highest level of eternal Paradise."
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-300 font-medium">
              Ameen
            </p>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Back to Top <ArrowUp size={14} className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default ImmanRecoveryRemedies;
