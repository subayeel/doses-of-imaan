/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  ArrowUp,
  ArrowLeft,
  Menu,
  X,
  AlertTriangle,
  BookOpen,
  Shield,
  Users,
  ScrollText,
  Scale,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CommonBidahsList from "./CommonBidahsList";

interface QuoteProps {
  text: string;
  source?: string;
  isHadith?: boolean;
}

const QuoteBlock: React.FC<QuoteProps> = ({ text, source, isHadith }) => {
  return (
    <blockquote
      className={`my-6 border-l-4 p-6 rounded-r-lg ${
        isHadith
          ? "border-green-500 bg-green-50 dark:bg-green-900/20"
          : "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
      }`}
    >
      <p
        className={`italic text-lg leading-relaxed ${
          isHadith
            ? "text-green-700 dark:text-green-300"
            : "text-blue-700 dark:text-blue-300"
        }`}
      >
        "{text}"
      </p>
      {source && (
        <cite className="mt-3 block text-sm text-gray-600 dark:text-gray-400 not-italic">
          — {source}
        </cite>
      )}
    </blockquote>
  );
};

const BidahExplainedPage = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contents = useMemo(() => {
    return [
      {
        id: "introduction",
        title: "What is Bid'ah?",
        icon: AlertTriangle,
      },
      {
        id: "gravity",
        title: "The Gravity of Innovation",
        icon: Scale,
      },
      {
        id: "correct-worship",
        title: "Correct Way to Worship",
        icon: Shield,
      },
      {
        id: "golden-rules",
        title: "Golden Rules in Islamic Law",
        icon: BookOpen,
      },
      {
        id: "constitutes-innovation",
        title: "What Constitutes Innovation?",
        icon: ScrollText,
      },
      {
        id: "warnings",
        title: "Prophetic Warnings",
        icon: XCircle,
      },
      {
        id: "why-started",
        title: "Why is Bid'ah Started?",
        icon: Users,
      },
      {
        id: "consequences",
        title: "Consequences of Bid'ah",
        icon: AlertTriangle,
      },
      {
        id: "common-excuses",
        title: "Common Excuses",
        icon: XCircle,
      },
      {
        id: "test",
        title: "Test for Bid'ah",
        icon: CheckCircle,
      },
      {
        id: "incident",
        title: "Historical Incident",
        icon: ScrollText,
      },
    ];
  }, []);

  // Set up Intersection Observer
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

    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      contents.forEach(({ id }) => {
        const element = document.getElementById(id);
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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Clean Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertTriangle
                className="text-red-600 dark:text-red-400 hidden md:block"
                size={28}
              />
              <h1 className="text-2xl md:text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Understanding Bid'ah (Innovation in Religion)
              </h1>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 font-light">
            Its meaning, dangers, and consequences in Islam
          </p>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black/20"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl p-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Contents</h2>
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <nav className="space-y-3 max-h-80 overflow-y-auto">
              {contents.map(({ id, title, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-md transition-colors ${
                    activeSection === id
                      ? "bg-gray-100 dark:bg-gray-800 font-medium"
                      : "hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  <Icon size={16} />
                  <span className="text-sm">{title}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {/* Common Bidahs List */}
          <CommonBidahsList />

          {/* What is Bid'ah Section */}
          <section id="introduction" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                <AlertTriangle className="text-red-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                What is Bid'ah?
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Bid'ah literally means an innovation. In worldly matters,
              innovation is generally permissible and often encouraged. However,
              in the Islamic context, Bid'ah specifically refers to{" "}
              <strong className="text-red-600 dark:text-red-400">
                innovating in the religion of Allah
              </strong>
              . This is a very special and dangerous kind of deed because the
              person performing it may think they are doing a good,
              reward-worthy action, whereas they might be earning sins.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Approximately 1400 years ago, Allah sent His final messenger,
              Prophet Muhammad (Peace be upon him), with the final Sharia (law).
              He ordained that only the things prescribed by Him through His
              Prophet are to be followed. Allah stated in the Quran:
            </p>
            <QuoteBlock
              text="This day I have perfected for you your religion and completed My favor upon you and have approved for you Islam as religion."
              source="Quran 5:3"
            />
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              When something is perfect, adding to or deleting from it will only
              cause it to lose its perfection. The demise of earlier nations
              often began with this problem of innovating in their religion,
              where religious scriptures were altered for worldly benefits,
              leading to the loss of the true message.
            </p>
          </section>

          {/* Gravity Section */}
          <section id="gravity" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                <Scale className="text-orange-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                The Gravity of Innovating in Religion
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              The Prophet (PBUH) emphasized the severity of altering religious
              matters. 'Adi Ibn Hatim (ra) narrated that he came to the Prophet
              (PBUH) wearing a gold cross. The Prophet (PBUH) said: "O 'Adi!
              Throw away this idol from yourself." Then the Prophet recited:
            </p>
            <QuoteBlock
              text="They (Jews and Christians) took their rabbis and their monks to be their lords besides Allah."
              source="Quran 9:31"
            />
            <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
              The Prophet (PBUH) then explained:
            </p>
            <QuoteBlock
              text="It was not that they worshipped these people, but rather whatever they made permissible for them, they believed it to be permissible and whatever they forbade, they believed to be unlawful."
              source="Tirmidhi"
              isHadith
            />
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 my-8">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                This Hadith highlights that allowing anyone other than Allah to
                legislate in matters of Halal (permissible) and Haram
                (forbidden) is a form of worshipping that entity. Only Allah has
                the right to decree these, not even the Prophets, whose rulings
                were divine inspiration:
              </p>
            </div>
            <QuoteBlock
              text="Nor does he (the Prophet Muhammad PBUH) speak of his own desire. It is only an inspiration that is inspired."
              source="Quran, Surah An-Najm 53:3-4"
            />
          </section>

          {/* Correct Worship Section */}
          <section id="correct-worship" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                <Shield className="text-green-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                The Correct Way to Worship Allah
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Since Allah created us, He alone has the right to be worshipped,
              and He has the right to be worshipped in a manner that pleases
              Him. We know which forms of worship Allah loves through what He
              explained to His Prophet (PBUH) and what the Prophet performed or
              ordered.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 my-8">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                One cannot invent forms of worship, like kissing rats because
                they are His creation, and claim it pleases Allah. Worship must
                be based on what Allah has ordained.
              </p>
            </div>
          </section>

          {/* Golden Rules Section */}
          <section id="golden-rules" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                <BookOpen className="text-blue-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                The Golden Rules in Islamic Law
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Two fundamental rules in Islamic law help distinguish permissible
              actions from Bid'ah:
            </p>
            <div className="space-y-8 my-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    1
                  </span>
                  Worship Rules
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  <strong className="text-blue-600 dark:text-blue-400">
                    All forms of worship are prohibited except that which have
                    been ordained by Allah through the Quran or the Sunnah.
                  </strong>{" "}
                  This means one cannot invent new ways of worshipping Allah.
                  For instance, prostrating to a statue or praying four Raka'at
                  for Maghrib prayer is not allowed as there is no validation in
                  authentic sources. Innovation (Bid'ah) in worship is not
                  allowed.
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    2
                  </span>
                  Worldly Rules
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  <strong className="text-blue-600 dark:text-blue-400">
                    All forms of worldly deeds are allowed except those that
                    have been prohibited by Allah through the Quran or Sunnah.
                  </strong>{" "}
                  This means one can engage in various non-religious acts unless
                  specifically forbidden (e.g., trading in alcohol, eating pork,
                  men wearing silk). Innovation in worldly matters (like using
                  planes or cell phones) is generally allowed as these fall
                  under 'worldly matters'.
                </p>
              </div>
            </div>
            <QuoteBlock
              text="…the best speech is the Book of Allah, and the best guidance is the guidance of Muhammad, and the worst of matters are the newly invented matters and every bid'ah is a misguidance and every misguidance is in the hell fire…"
              isHadith
            />
          </section>

          {/* What Constitutes Innovation Section */}
          <section id="constitutes-innovation" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                <ScrollText className="text-purple-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                What Constitutes Innovation in Religion?
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Innovation in religion occurs when someone introduces an action,
              claiming it is good and part of Islam, without any validation from
              Allah through the Quran or the Prophet's Sunnah. An example often
              cited is the celebration of the Prophet's (PBUH) birthday. While
              proponents claim it's a reward-worthy act of love, it is
              considered an innovation because it was not ordained in the Quran,
              nor practiced or instructed by the Prophet (PBUH) or his
              companions.
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 my-8">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Regardless of the intention, if a form of 'worship' or
                'religious good deed' isn't validated by the primary sources,
                it's considered Bid'ah. The Prophet (PBUH) conveyed the complete
                message and did not hide any good deeds from his Ummah.
              </p>
            </div>
          </section>

          {/* Prophetic Warnings Section */}
          <section id="warnings" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                <XCircle className="text-red-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Prophetic Warnings and Quranic Guidance on Bid'ah
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              The Prophet (PBUH) extensively warned against Bid'ah:
            </p>
            <QuoteBlock
              text="Whoever innovates or accommodates an innovator then upon him is the curse of Allah, His Angels and the whole of mankind."
              source="Sahih Bukhari 12/41, Sahih Muslim 1370"
              isHadith
            />
            <QuoteBlock
              text="He who innovates something in this matter of ours [i.e., Islam] that is not of it will have it rejected [by Allah]."
              source="Sahih Bukhari, Sahih Muslim"
              isHadith
            />
            <QuoteBlock
              text="I counsel you to have taqwa (fear) of Allah, and to listen and obey [your leader], even if a slave were to become your ameer. Verily he among you who lives long will see great controversy, so you must keep to my Sunnah and to the Sunnah of the Khulafa ar-Rashideen (the rightly guided caliphs), those who guide to the right way. Cling to it stubbornly [literally: with your molar teeth]. Beware of newly invented matters [in the religion], for verily every bidah (innovation) is misguidance."
              source="Narrated by Abu Najeeh al-’Irbaad ibn Saariyah (ra) - Abu Dawud and at-Tirmidhi"
              isHadith
            />
            <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
              The Quran emphasizes adherence to the Sunnah:
            </p>
            <QuoteBlock
              text="…and whatsoever the messenger gives you, take it, and whatsoever he forbids you, abstain from it."
              source="Quran 59:7"
            />
            <QuoteBlock
              text="Indeed in the messenger of Allah you have a good example to follow for him who hopes in Allah and the last day and remembers Allah much."
              source="Quran 33:21"
            />
          </section>

          {/* Why is Bid'ah Started? Section */}
          <section id="why-started" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                <Users className="text-yellow-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Why is Bid'ah Started?
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              <ul className="list-disc list-inside space-y-3">
                <li>
                  <strong>Good intentions with lack of knowledge:</strong> Many
                  Bid'ah are started with a sincere desire to please Allah but
                  by individuals with limited understanding of Islamic Sharia.
                  They may not consider their actions Bid'ah.
                  <QuoteBlock
                    text="Say (O Muhammad PBUH): Shall We tell you the greatest losers in respect of (their) deeds? Those whose efforts have been wasted in this life while they thought that they were acquiring good by their deeds! They are those who deny the Ayat (proofs, evidences, verses, lessons, signs, revelations, etc.) of their Lord and the Meeting with Him (in the Hereafter). So their works are in vain, and on the Day of Resurrection, We shall not give them any weight."
                    source="Quran, Surah Al-Kahf 18:103-105"
                  />
                  The true test of love for Allah is following the Prophet
                  (PBUH):
                  <QuoteBlock
                    text="Say (O Muhammad PBUH to mankind), ‘If you (really) love Allah then follow me (i.e. accept Islamic Monotheism, follow the Quran and the Sunnah), Allah will love you and forgive you of your sins. And Allah is Oft-Forgiving, Most Merciful.’"
                    source="Quran, Surah Aal-Imran 3:31 (paraphrased from article)"
                  />
                </li>
                <li>
                  <strong>To create problems or for worldly benefit:</strong>{" "}
                  Some may introduce Bid'ah knowingly for personal gain, like
                  promoting grave worship for attention and financial support.
                </li>
                <li>
                  <strong>Unintentional deviation:</strong> A minor deviation
                  from the Sunnah can widen over time, becoming a significant
                  Bid'ah. The Prophet (PBUH) illustrated this:
                  <QuoteBlock
                    text="Allah’s Messenger (PBUH) drew a straight line and said, 'This is Allah's Path.' Then he drew several lines on its right and left and said, 'These are other paths, and at the head of each path is a devil inviting people to it.' Then he recited: 'And verily, this is My Straight Path, so follow it, and follow not (other) paths, for they will separate you away from His Path.'"
                    source="Narrated by Abdullah bin Mas‘ud (Ahmad, Nasa’i, and Darimi - paraphrased from article)"
                    isHadith
                  />
                  A similar narration by Jabir (Ibn Majah) describes the Prophet
                  (PBUH) drawing a straight line as Allah's way and other lines
                  as not His.
                </li>
              </ul>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Those who initiate Bid'ah often claim it's a "good and
                beneficial matter," but what is good or bad is determined by
                Allah, as He is the Most Knowledgeable and religion belongs to
                Him.
              </p>
            </p>
          </section>

          {/* Consequences of Bid'ah Section */}
          <section id="consequences" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900">
                <AlertTriangle className="text-pink-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Consequences of Bid'ah
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Engaging in Bid'ah implies that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                One claims to be more knowledgeable than Allah and His Messenger
                by "discovering" a new good action that Sharia supposedly
                missed.
              </li>
              <li>
                One suggests the Prophet (PBUH) hid something beneficial from
                the Ummah, contradicting his trustworthiness.
              </li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Allah warns against attributing false sayings to the Prophet
              (PBUH):
            </p>
            <QuoteBlock
              text="And if he (Muhammad PBUH) had forged a false saying concerning Us (Allah), We surely should have seized him by his right hand (or with power and might), And then surely should have cut off his life artery (Aorta), And none of you could withhold Us from (punishing) him."
              source="Quran 69:44-47"
            />
          </section>

          {/* Common Excuses for Bid'ah Section */}
          <section id="common-excuses" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                <XCircle className="text-gray-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Common Excuses for Bid'ah
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              <ul className="space-y-4">
                <li>
                  <strong>"It is not a Bid'ah":</strong> Often due to
                  misunderstanding, thinking Bid'ah is only "bad" practices or
                  what other sects do, not realizing that "good" practices
                  self-added to religion are also Bid'ah.
                </li>
                <li>
                  <strong>"It is a good practice (Bid'ah Hasanah)":</strong>{" "}
                  There is no such thing as "good Bid'ah" in the Sharia sense.
                  The Prophet (PBUH) said,{" "}
                  <strong className="text-red-500">
                    "Kullu bid'atin dalalah" (every innovation is misguidance)
                  </strong>
                  . The reference to 'Umar ibn al-Khattab (RA) calling the
                  organized Tarawih prayer a "good innovation" is often
                  misunderstood. 'Umar (RA) revived a Sunnah that the Prophet
                  (PBUH) had practiced but left for fear it would become
                  obligatory. 'Umar used "Bid'ah" in its linguistic sense
                  (something new in its organized form) not as a new act of
                  worship unrooted in the Sunnah. (Incident referenced from
                  Sahih Bukhari)
                </li>
                <li>
                  <strong>"There is no harm in it":</strong> This is based on
                  ignorance. All religious innovations are misguidance, and
                  misguidance leads to the Hellfire.
                </li>
                <li>
                  <strong>"We found our fathers doing this":</strong> Ancestral
                  practice is not a justification if it contradicts the Quran
                  and Sunnah.
                  <QuoteBlock
                    text="And when it is said to them, 'Follow what Allah has revealed,' they say, 'Rather, we will follow that upon which we found our fathers.' Even if their fathers understood nothing, nor were they guided?"
                    source="Quran 2:170 (Similar sentiment to Quran 18:55 mentioned in article)"
                  />
                </li>
                <li>
                  <strong>"Everyone does it":</strong> Majority practice does
                  not validate an action. Guidance is from Allah and His
                  Messenger, not popular trends.
                </li>
                <li>
                  <strong>"Misquoted/fabricated Hadith":</strong> One must
                  verify the authenticity of Hadith and rely on the
                  understanding of early scholars (Salaf).
                </li>
                <li>
                  <strong>"I am not a scholar; I follow my teacher":</strong>{" "}
                  This implies contentment with ignorance. Diligence in
                  understanding religion is as crucial as in worldly affairs.
                </li>
              </ul>
            </p>
          </section>

          {/* Test for Bid'ah Section */}
          <section id="test" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                <CheckCircle className="text-teal-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Test for Bid'ah
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              To determine if an action is Bid'ah, consider the following:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Check for proof in the Quran and its sciences (like Tafsir). If
                in doubt, rely on the interpretations of the Salaf (righteous
                predecessors).
              </li>
              <li>
                Check the authentic Sunnah: Did the Prophet (PBUH) command it,
                perform it himself, or mention a reward for it? If yes, it's not
                Bid'ah.
              </li>
              <li>
                Examine the practice of the Rightly Guided Caliphs, as the
                Prophet (PBUH) instructed adherence to their Sunnah as well.
              </li>
            </ol>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Be cautious of interpretations from scholars known to be involved
              in Bid'ah, as they might misguide.
            </p>
          </section>

          {/* Historical Incident Section */}
          <section id="incident" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                <ScrollText className="text-indigo-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                An Incident with 'Abdullah Ibn Mas'ood (RA)
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              'Amr Ibn Salamah narrated:
            </p>
            <div className="p-4 border border-gray-300 rounded-md bg-gray-100 dark:bg-gray-800">
              <p>
                "We used to sit at the door of ’Abdullaah Ibn Mas’ood before the
                Morning Prayer, so that when he came out, we would be able to
                walk with him to the mosque. So Aboo Moosaa al-Ash’aree came to
                us and asked if Aboo ’Abdur-Rahmaan (Ibn Mas’ood) had come out.
                We said, ‘No.’ So he sat with us."
              </p>
              <p>
                "When Ibn Mas’ood came out, we all stood up. Aboo Moosaa said,
                ‘O Abaa ’Abdur-Rahmaan, I saw something in the mosque that I
                disliked, though I saw nothing but good, praise be to Allah.’
                Ibn Mas’ood asked what it was."
              </p>
              <p>
                Aboo Moosaa replied, ‘If you live, you will see it. I saw people
                in the mosque sitting in circles, waiting for prayer. In every
                circle, there was a man, and they had pebbles in their hands. He
                would say: ‘Say Allaahu Akbar one hundred times,’ and they would
                say it one hundred times. He would say: ‘Say al-hamdulillaah one
                hundred times,’ and they would say it one hundred times. And he
                would say: ‘Say subhaanallaah one hundred times,’ and they would
                say it one hundred times.’"
              </p>
              <p>
                Ibn Mas’ood asked, ‘What did you say to them?’ Aboo Moosaa said,
                ‘I said nothing, I waited for your command.’
              </p>
              <p>
                Ibn Mas’ood said, ‘Would that you had ordered them to count up
                their evil deeds, and assured them that nothing from their good
                deeds would be lost!’ Then he went, and we went with him, until
                he came upon these circles."
              </p>
              <p>
                He stood over them and said,{" "}
                <strong className="text-red-600">
                  ‘What is this that I see you doing?!’
                </strong>{" "}
                They replied, ‘O Abaa ’Abdur-Rahmaan, these are pebbles upon
                which we count the takbeer, tahleel, and tasbeeh.’
              </p>
              <p>
                He said,{" "}
                <strong className="text-red-600">
                  ‘Then count up your evil deeds, and I assure you that nothing
                  from your good deeds will be lost (if you do them correctly)!
                  Woe to you O Ummah of Muhammad! How quickly you rush to
                  destruction! These are the Companions of your Prophet (PBUH)
                  who are abundant. And these are his clothes that have not yet
                  decayed, and his bowl that is still unbroken. By Him in Whose
                  Hand my soul is, either you are upon a religion better guided
                  than the religion of Muhammad (PBUH), or you are opening the
                  door to misguidance.’
                </strong>
              </p>
              <p>
                They said, ‘By Allaah O Abaa ’Abdur-Rahmaan, we did not intend
                anything except good.’
              </p>
              <p>
                He replied,{" "}
                <strong className="text-red-600">
                  ‘And how many people intend good yet do not achieve it? Verily
                  the Messenger (PBUH) informed us: “Verily there will be a
                  people reciting the Quran, yet it will not pass beyond their
                  throats.” By Allaah I do not know, perhaps most of them are
                  from amongst you.’
                </strong>{" "}
                Then he left them."
              </p>
              <p>
                ’Amr Ibn Salamah added: "We saw the great majority of these
                people fight against us on the day of an-Nahrawaan along with
                the Khawaarij." ["Muqadma Sunan Darmi"]
              </p>
            </div>
          </section>
        </article>
      </main>

      {/* Clean Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-12 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-xl  font-semibold mb-4 text-gray-900 dark:text-gray-100">
            May Allah Guide Us to the Straight Path
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            If there is any mistake, then it is from me and the Shaytaan, and if
            there is any good then it is from Allah. Please point out any
            mistakes so they may be corrected accordingly. Jazakallahu Khairun.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="outline"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <ArrowUp size={16} className="mr-2" /> Back to Top
            </Button>
            <Button
              onClick={() => (window.location.href = "/")}
              className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              <ArrowLeft size={16} className="mr-2" /> Back to Home
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BidahExplainedPage;
