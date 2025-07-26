/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  ArrowUp,
  ArrowLeft,
  Menu,
  X,
  Book,
  Clock,
  Hand,
  Heart,
  Eye,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type PrayerSubStep = {
  arabicText: string;
  transliteration: string;
  translation: string;
  description?: string;
  reference?: string;
};

type PrayerStep = {
  title: string;
  arabicText?: string;
  transliteration?: string;
  translation?: string;
  description: string;
  reference?: string;
  substeps?: PrayerSubStep[];
};

type KhushuTip = {
  title: string;
  description: string;
  reference?: string;
};

interface SalahGuideProps {
  isDocument?: boolean;
}

export const SalahGuide = ({ isDocument = false }: SalahGuideProps) => {
  const [activeSection, setActiveSection] = useState("preparation");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contents = useMemo(() => {
    return [
      { id: "preparation", title: "Preparation", icon: Hand },
      { id: "prayer-steps", title: "Prayer Steps", icon: Book },
      { id: "additional-prayers", title: "Additional Prayers", icon: Clock },
      { id: "khushu-tips", title: "Achieving Khushu", icon: Heart },
      { id: "common-mistakes", title: "Common Mistakes", icon: Eye },
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

  const preparationSteps: PrayerStep[] = [
    {
      title: "1. Ensure Ritual Purity (Tahara)",
      description:
        "Perform Wudu (ablution) if you are not in a state of ritual purity. Wudu involves washing specific body parts with water. Ensure your body, clothes, and the place of prayer are clean (Tahir) and free from impurities (Najasah).",
      reference: "Quran 5:6 (on Wudu); Fiqh principles on Taharah.",
    },
    {
      title: "2. Covering the Awrah (Proper Attire)",
      description:
        "Men: Cover the area from the navel to the knees at a minimum. It is preferable to wear clean and modest clothing that also covers the shoulders. Women: Cover the entire body except for the face and hands. Clothing should be loose-fitting and not transparent.",
      reference:
        "Based on Quran 7:31, Quran 24:31; Hadith such as Abu Dawud 641.",
    },
    {
      title: "3. Face the Qiblah (Direction of Prayer)",
      description:
        "Turn to face the direction of the Ka'bah in Makkah. If unsure, make your best estimation.",
      reference: "Quran 2:144, Quran 2:149-150.",
    },
    {
      title: "4. Make the Intention (Niyyah)",
      description:
        'Silently make the intention in your heart for the specific prayer you are about to perform (e.g., "I intend to pray the obligatory Dhuhr prayer for Allah"). The intention does not need to be uttered verbally.',
      reference:
        "Hadith: 'Actions are (judged) by intentions...' (Sahih al-Bukhari 1, Sahih Muslim 1907).",
    },
  ];

  const prayerSteps: PrayerStep[] = [
    {
      title: "1. Takbir al-Ihram (Opening Takbir)",
      description:
        "Begin the prayer by raising both hands, palms facing the Qiblah, to the level of the shoulders or earlobes. While doing so, say 'Allāhu Akbar'. Your gaze should be directed towards the place of prostration. This Takbir signifies the beginning of the prayer, after which worldly actions are prohibited.",
      arabicText: "اللهُ أَكْبَر",
      transliteration: "Allāhu Akbar",
      translation: "Allah is the Greatest",
      reference:
        "Sahih al-Bukhari 735-739, Sahih Muslim 390 (raising hands); Sahih al-Bukhari 6251 (saying Takbir).",
    },
    {
      title: "2. Qiyam - Standing & Opening Supplication (Dua al-Istiftah)",
      description:
        "After the Takbir al-Ihram, place your right hand over your left hand on your chest. Recite an opening supplication. One common Dua al-Istiftah is:",
      arabicText:
        "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلاَ إِلَهَ غَيْرُكَ",
      transliteration:
        "Subḥānaka Allāhumma wa biḥamdika, wa tabāraka ismuka, wa ta'ālā jadduka, wa lā ilāha ghayruka.",
      translation:
        "Glory be to You, O Allah, and all praise is Yours, and blessed is Your name, and exalted is Your majesty, and there is no deity worthy of worship except You.",
      reference:
        "Sunan Abu Dawud 775, Tirmidhi 243. Other Duas are also narrated.",
    },
    {
      title: "3. Ta'awwudh (Seeking Refuge) & Tasmiyah (Saying Bismillah)",
      description: "Still in Qiyam (standing), silently recite:",
      arabicText: "أَعُوذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
      transliteration: "A'ūdhu billāhi min ash-shayṭāni r-rajīm.",
      translation: "I seek refuge in Allah from the accursed Satan.",
      reference: "Based on Quran 16:98. Recited before Al-Fatihah.",
    },
    {
      title: "4. Recitation of Al-Fatihah",
      description:
        "Recite Surah Al-Fatihah (the Opening). This is a pillar of the prayer and must be recited in every Rak'ah.",
      arabicText:
        "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيمِ ﴿١﴾ الْحَمْدُ للّهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمنِ الرَّحِيمِ ﴿٣﴾ مَلِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهدِنَــــا الصِّرَاطَ المُستَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنعَمتَ عَلَيهِمْ غَيرِ المَغضُوبِ عَلَيهِمْ وَلاَ الضَّالِّينَ ﴿٧﴾",
      transliteration:
        "Bismillāhi r-raḥmāni r-raḥīm. Al-ḥamdu lillāhi rabbi l-'ālamīn. Ar-raḥmāni r-raḥīm. Māliki yawmi d-dīn. Iyyāka na'budu wa iyyāka nasta'īn. Ihdinā ṣ-ṣirāṭa l-mustaqīm. Ṣirāṭa lladhīna an'amta 'alayhim ghayri l-maghḍūbi 'alayhim wa lā ḍ-ḍāllīn.",
      translation:
        "In the name of Allah, the Entirely Merciful, the Especially Merciful. [All] praise is [due] to Allah, Lord of the worlds - The Entirely Merciful, the Especially Merciful, Sovereign of the Day of Recompense. It is You we worship and You we ask for help. Guide us to the straight path - The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
      reference: "Quran 1:1-7; Sahih al-Bukhari 756, Sahih Muslim 395.",
    },
    {
      title: "5. Additional Surah or Verses",
      description:
        "After Al-Fatihah, recite another Surah or some verses from the Quran. In the first two Rak'ahs of Fard prayers and in all Rak'ahs of Sunnah/Nafl prayers, this is Sunnah.",
      reference: "Sahih al-Bukhari 774, Sahih Muslim 397.",
    },
    {
      title: "6. Ruku (Bowing)",
      description:
        "Say 'Allāhu Akbar' and bow down, placing your hands on your knees. Keep your back straight and level. In this position, say the Tasbih of Ruku.",
      arabicText: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
      transliteration: "Subḥāna rabbiya l-'aẓīm",
      translation: "Glory be to my Lord, the Most Great",
      reference:
        "Sahih al-Bukhari 794, Sahih Muslim 484 (on the position and Tasbih).",
    },
    {
      title: "7. Standing from Ruku (I'tidal)",
      description:
        "Raise your head from Ruku while saying 'Sami' Allāhu liman ḥamidah' (Allah hears those who praise Him). Once standing upright, say 'Rabbanā wa laka l-ḥamd' (Our Lord, and to You is praise).",
      arabicText: "سَمِعَ اللهُ لِمَن حَمِدَهُ، رَبَّنَا وَلَكَ الحَمد",
      transliteration: "Sami' Allāhu liman ḥamidah, Rabbanā wa laka l-ḥamd",
      translation:
        "Allah hears those who praise Him, Our Lord, and to You is praise",
      reference: "Sahih al-Bukhari 796, Sahih Muslim 392.",
    },
    {
      title: "8. Sujud (Prostration)",
      description:
        "Say 'Allāhu Akbar' and prostrate, placing your forehead, nose, palms, knees, and toes on the ground. In this position, say the Tasbih of Sujud.",
      arabicText: "سُبْحَانَ رَبِّيَ الأَعْلَى",
      transliteration: "Subḥāna rabbiya l-a'lā",
      translation: "Glory be to my Lord, the Most High",
      reference: "Sahih al-Bukhari 812, Sahih Muslim 484.",
    },
    {
      title: "9. Sitting Between the Two Prostrations (Jalsa)",
      description:
        "Sit up from the first prostration saying 'Allāhu Akbar'. Sit calmly and make a brief supplication, then prostrate again.",
      arabicText: "رَبِّ اغْفِرْ لِي",
      transliteration: "Rabbi ghfir lī",
      translation: "My Lord, forgive me",
      reference: "Sunan Abu Dawud 874, Sunan Ibn Majah 898.",
    },
    {
      title: "10. Second Sujud",
      description:
        "Perform the second prostration just like the first, saying the same Tasbih.",
      reference: "Same as the first Sujud.",
    },
    {
      title: "11. Tashahhud (Sitting for Testimony)",
      description:
        "After completing the required Rak'ahs, sit and recite the Tashahhud. If it's a prayer with more than two Rak'ahs, recite the first Tashahhud after the second Rak'ah.",
      arabicText:
        "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
      transliteration:
        "At-taḥiyyātu lillāhi wa ṣ-ṣalawātu wa ṭ-ṭayyibāt. As-salāmu 'alayka ayyuhā n-nabiyyu wa raḥmatu llāhi wa barakātuh. As-salāmu 'alaynā wa 'alā 'ibādi llāhi ṣ-ṣāliḥīn. Ashhadu an lā ilāha illā llāh wa ashhadu anna Muḥammadan 'abduhu wa rasūluh.",
      translation:
        "All compliments, prayers and pure words are for Allah. Peace be upon you, O Prophet, and Allah's mercy and blessings. Peace be upon us and upon the righteous slaves of Allah. I bear witness that there is no deity worthy of worship except Allah, and I bear witness that Muhammad is His slave and messenger.",
      reference: "Sahih al-Bukhari 831, Sahih Muslim 402.",
    },
    {
      title: "12. Salawat (Sending Blessings on the Prophet)",
      description:
        "In the final Tashahhud, after the testimony, send blessings upon the Prophet Muhammad (ﷺ).",
      arabicText:
        "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
      transliteration:
        "Allāhumma ṣalli 'alā Muḥammad wa 'alā āli Muḥammad kamā ṣallayta 'alā Ibrāhīm wa 'alā āli Ibrāhīm innaka ḥamīdun majīd. Allāhumma bārik 'alā Muḥammad wa 'alā āli Muḥammad kamā bārakta 'alā Ibrāhīm wa 'alā āli Ibrāhīm innaka ḥamīdun majīd.",
      translation:
        "O Allah, send prayers upon Muhammad and upon the family of Muhammad as You sent prayers upon Ibrahim and upon the family of Ibrahim, indeed You are Praiseworthy and Glorious. O Allah, send blessings upon Muhammad and upon the family of Muhammad as You sent blessings upon Ibrahim and upon the family of Ibrahim, indeed You are Praiseworthy and Glorious.",
      reference: "Sahih al-Bukhari 3370, Sahih Muslim 406.",
    },
    {
      title: "13. Taslim (Salutation to End Prayer)",
      description:
        "End the prayer by turning your head to the right and then to the left, saying 'As-salāmu 'alaykum wa raḥmatu llāh' each time.",
      arabicText: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
      transliteration: "As-salāmu 'alaykum wa raḥmatu llāh",
      translation: "Peace be upon you and Allah's mercy",
      reference: "Sunan Abu Dawud 996, Sunan Tirmidhi 295.",
    },
  ];

  const khushuTips: KhushuTip[] = [
    {
      title: "Prepare Your Heart Before Prayer",
      description:
        "Take a moment before starting to remember that you are about to stand before Allah. Clear your mind of worldly thoughts and focus on the purpose of prayer.",
      reference: "Inspired by Quran 2:45 on prayer with patience and humility.",
    },
    {
      title: "Understand What You Are Reciting",
      description:
        "Learn the meanings of the Quranic verses and supplications you recite in prayer. Understanding enhances concentration and connection.",
      reference: "Quran 47:24 encourages reflection upon the Quran.",
    },
    {
      title: "Pray in a Clean, Quiet Environment",
      description:
        "Choose a clean, distraction-free space for prayer. Remove visual and auditory distractions that might divert your attention.",
      reference:
        "Islamic principles on creating appropriate prayer environments.",
    },
    {
      title: "Make Sincere Dua",
      description:
        "During Sujud (prostration), make personal supplications to Allah. This is one of the times when duas are most likely to be accepted.",
      reference:
        "Hadith: 'The closest that a person is to his Lord is when he is prostrating...' (Sahih Muslim 482).",
    },
    {
      title: "Reflect on Allah's Greatness",
      description:
        "When saying 'Allahu Akbar', truly contemplate that Allah is greater than anything else in your life. Let this realization humble your heart.",
      reference:
        "Various Quranic verses emphasize Allah's greatness and majesty.",
    },
    {
      title: "Pray As If It's Your Last",
      description:
        "Approach each prayer with the mindset that it might be your final prayer. This urgency can enhance sincerity and focus.",
      reference:
        "Inspired by the hadith on excellence in worship (Ihsan) - Sahih Muslim 8.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Clean Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Book
                className="text-green-600 dark:text-green-400 hidden md:block"
                size={28}
              />
              <h1 className="text-2xl md:text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Complete Guide to Salah
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
            A comprehensive guide to performing the Islamic prayer with proper
            steps and etiquette
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
          {/* Preparation Section */}
          <section id="preparation" className="mb-16 scroll-mt-20">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                  <Hand className="text-blue-500" size={24} />
                </div>
                <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                  Preparation for Prayer
                </h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Before beginning the prayer, it's essential to prepare both
                physically and spiritually.
              </p>
              <div className="space-y-6">
                {preparationSteps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-blue-200 dark:border-blue-800"
                  >
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3 whitespace-pre-line">
                      {step.description}
                    </p>
                    {step.reference && (
                      <p className="text-sm italic text-gray-600 dark:text-gray-400 border-l-2 border-blue-300 dark:border-blue-600 pl-3">
                        Reference: {step.reference}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Prayer Steps Section */}
          <section id="prayer-steps" className="mb-16 scroll-mt-20">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                  <Book className="text-green-500" size={24} />
                </div>
                <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                  Step-by-Step Prayer Guide
                </h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Follow these steps carefully to perform a complete Rak'ah (unit
                of prayer).
              </p>
              <div className="space-y-8">
                {prayerSteps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-green-200 dark:border-green-800"
                  >
                    <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {step.description}
                    </p>

                    {step.arabicText && (
                      <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 mb-4">
                        <p className="text-right text-2xl text-green-800 dark:text-green-200 mb-2 font-arabic">
                          {step.arabicText}
                        </p>
                        <p className="text-green-700 dark:text-green-300 mb-1 italic">
                          {step.transliteration}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          "{step.translation}"
                        </p>
                      </div>
                    )}

                    {step.reference && (
                      <p className="text-sm italic text-gray-600 dark:text-gray-400 border-l-2 border-green-300 dark:border-green-600 pl-3">
                        Reference: {step.reference}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Additional Prayers Section */}
          <section id="additional-prayers" className="mb-16 scroll-mt-20">
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                  <Clock className="text-purple-500" size={24} />
                </div>
                <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                  Additional Prayers & Timing
                </h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-4">
                  The Five Daily Prayers
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: "Fajr", time: "Dawn", rakahs: "2 Rak'ahs" },
                    { name: "Dhuhr", time: "Midday", rakahs: "4 Rak'ahs" },
                    { name: "Asr", time: "Afternoon", rakahs: "4 Rak'ahs" },
                    { name: "Maghrib", time: "Sunset", rakahs: "3 Rak'ahs" },
                    { name: "Isha", time: "Night", rakahs: "4 Rak'ahs" },
                  ].map((prayer, index) => (
                    <div
                      key={index}
                      className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4"
                    >
                      <h4 className="font-semibold text-purple-700 dark:text-purple-300">
                        {prayer.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Time: {prayer.time}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {prayer.rakahs}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Khushu Tips Section */}
          <section id="khushu-tips" className="mb-16 scroll-mt-20">
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                  <Heart className="text-amber-500" size={24} />
                </div>
                <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                  Achieving Khushu (Humility & Focus)
                </h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Khushu is the spiritual heart of prayer. Here are practical tips
                to develop deeper concentration and connection with Allah.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {khushuTips.map((tip, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-amber-200 dark:border-amber-800"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-amber-500 mt-1" size={20} />
                      <div>
                        <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-300 mb-2">
                          {tip.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                          {tip.description}
                        </p>
                        {tip.reference && (
                          <p className="text-sm italic text-gray-600 dark:text-gray-400">
                            {tip.reference}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Common Mistakes Section */}
          <section id="common-mistakes" className="mb-16 scroll-mt-20">
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                  <Eye className="text-red-500" size={24} />
                </div>
                <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                  Common Mistakes to Avoid
                </h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-red-200 dark:border-red-800">
                <div className="space-y-4">
                  {[
                    "Rushing through the prayer without proper pauses",
                    "Not ensuring proper cleanliness before prayer",
                    "Praying while distracted by phone or other devices",
                    "Not learning the correct pronunciation of Arabic recitations",
                    "Skipping or shortening the required Tasbih in Ruku and Sujud",
                    "Not maintaining proper posture during different positions",
                    "Praying without understanding the meaning of what's being recited",
                  ].map((mistake, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {mistake}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>

      {/* Clean Footer */}
      {!isDocument && (
        <footer className="border-t border-gray-200 dark:border-gray-700 py-12 mt-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-xl  font-semibold mb-4 text-gray-900 dark:text-gray-100">
              May Allah Accept Our Prayers
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              This guide is for informational purposes. For detailed Fiqh
              rulings, please consult a knowledgeable scholar. May Allah make us
              among those who establish prayer with excellence and devotion.
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
      )}
    </div>
  );
};
