/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Menu, X, Book, Hand, Heart, Eye, Sparkles } from "lucide-react";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

type PrayerSubStep = {
  arabicText: string;
  transliteration: string;
  translation: string;
  description?: string;
  reference?: string;
};

type PrayerStep = {
  title: string;
  description: string;
  reference?: string;
  substeps?: PrayerSubStep[];
  hasVariation?: boolean;
  variations?: {
    shafii: PrayerSubStep;
    hanafi: PrayerSubStep;
  };
};

type AdhkarStep = {
  title: string;
  description?: string;
  arabicText?: string;
  transliteration?: string;
  translation?: string;
  reference: string;
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
  const [madhhab, setMadhhab] = useState("shafii");

  const contents = useMemo(() => {
    return [
      { id: "preparation", title: "Preparation", icon: Hand },
      { id: "prayer-steps", title: "Prayer Steps", icon: Book },
      { id: "post-prayer-adhkar", title: "Post-Prayer Adhkar", icon: Sparkles },
      { id: "khushu-tips", title: "Achieving Khushu", icon: Heart },
      { id: "common-mistakes", title: "Common Mistakes", icon: Eye },
    ];
  }, []);

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

  const prayerSteps = [
    {
      title: "1. Takbir al-Ihram (Opening Takbir)",
      description:
        "Begin the prayer by raising both hands to the shoulders or earlobes and saying 'Allāhu Akbar'. This signifies the start of the prayer.",
      substeps: [
        {
          arabicText: "اللهُ أَكْبَر",
          transliteration: "Allāhu Akbar",
          translation: "Allah is the Greatest",
          reference: "Sahih al-Bukhari 735-739",
        },
      ],
    },
    {
      title: "2. Opening Supplication (Tawjeeh / Sanaa)",
      description:
        "After the opening Takbir, place your right hand over your left on your chest and recite an opening supplication. The following are recited based on the school of thought.",
      hasVariation: true,
      variations: {
        shafii: {
          arabicText:
            "وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَاوَاتِ وَالْأَرْضَ حَنِيفًا مُسْلِمًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ، إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ، لَا شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا مِنَ الْمُسْلِمِينَ.",
          transliteration:
            "Wajjahtu wajhiya lilladhī faṭara s-samāwāti wa-l-arḍa ḥanīfan musliman wa mā ana mina-l-mushrikīn. Inna ṣalātī wa nusukī wa maḥyāya wa mamātī lillāhi rabbi-l-ʿālamīn. Lā sharīka lahū wa bidhālika umirtu wa ana mina-l-muslimīn.",
          translation:
            "I have turned my face towards the One who created the heavens and the earth, as a monotheist, a Muslim, and I am not of the polytheists. Indeed, my prayer, my rites of sacrifice, my living and my dying are for Allah, Lord of the worlds. No partner has He. And this I have been commanded, and I am of the Muslims.",
          reference: "Muslim: 201, Abu Dawood: 760",
        },
        hanafi: {
          arabicText:
            "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ.",
          transliteration:
            "Subḥānaka Allāhumma wa biḥamdika, wa tabāraka ismuka, wa ta'ālā jadduka, wa lā ilāha ghayruk.",
          translation:
            "Glory be to You, O Allah, and all praise is Yours, and blessed is Your name, and exalted is Your majesty, and there is no deity worthy of worship except You.",
          reference: "Abu Dawood: 776",
        },
      },
    },
    {
      title: "3. Recitation of Surah Al-Fatihah",
      description:
        "After seeking refuge with Allah from Satan (Ta'awwudh), recite Surah Al-Fatihah. It is a pillar of the prayer.",
      substeps: [
        {
          arabicText: "بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ",
          transliteration: "Bismi-llāhi r-raḥmāni r-raḥīm",
          translation:
            "In the Name of Allah, the Most Beneficent, the Most Merciful.",
        },
        {
          arabicText: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
          transliteration: "Al-ḥamdu li-llāhi rabbi l-ʿālamīn",
          translation: "All Praise be to Allah, the Lord of the worlds.",
        },
        {
          arabicText: "الرَّحْمَنِ الرَّحِيمِ",
          transliteration: "Ar-raḥmāni r-raḥīm",
          translation: "The Most Beneficent, the Most Merciful.",
        },
        {
          arabicText: "مَالِكِ يَوْمِ الدِّينِ",
          transliteration: "Māliki yawmi d-dīn",
          translation: "Master of the Day of Resurrection.",
        },
        {
          arabicText: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
          transliteration: "Iyyāka naʿbudu wa iyyāka nastaʿīn",
          translation:
            "You (alone) we worship, and you (alone) we ask for help.",
        },
        {
          arabicText: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
          transliteration: "Ihdinā ṣ-ṣirāṭa l-mustaqīm",
          translation: "Guide us to the straight way.",
        },
        {
          arabicText: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ",
          transliteration: "Ṣirāṭa lladhīna anʿamta ʿalayhim",
          translation: "The way of those on whom you have bestowed your grace,",
        },
        {
          arabicText: "غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
          transliteration: "Ghayri l-maghḍūbi ʿalayhim walā ḍ-ḍāllīn",
          translation:
            "Not (the way) of those who earned your anger, nor of those who went astray.",
        },
      ],
    },
    {
      title: "4. Ruku (Bowing)",
      description:
        "Say 'Allāhu Akbar' and bow, keeping your back straight and placing your hands on your knees. Recite the following:",
      substeps: [
        {
          arabicText: "سُبْحَانَ رَبِّيَ الْعَظِيمِ وَبِحَمْدِهِ",
          transliteration: "Subḥāna rabbī l-ʿaẓīmi wa biḥamdihi",
          translation:
            "Glory be to my Lord, the Exalted; and praise be to Him.",
          reference: "Muslim: 320, Abu Dawood: 870",
        },
      ],
    },
    {
      title: "5. Standing from Ruku (I'tidal)",
      description:
        "Rise from bowing while saying 'Sami' Allāhu liman ḥamidah'. Once fully upright, recite one of the following praises:",
      hasVariation: true,
      variations: {
        shafii: {
          arabicText:
            "رَبَّنَا وَلَكَ الْحَمْدُ، حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ",
          transliteration:
            "Rabbanā wa laka-l-ḥamd, ḥamdan kathīran ṭayyiban mubārakan fīh.",
          translation:
            "Our Lord, all praise is yours, (a praise that is) abundant, good and blessed.",
          reference: "Bukhari: 791",
        },
        hanafi: {
          arabicText: "رَبَّنَا وَلَكَ الْحَمْدُ",
          transliteration: "Rabbanā wa laka-l-ḥamd.",
          translation: "Our Lord, and to You is praise.",
          reference: "Bukhari: 803",
        },
      },
    },
    {
      title: "6. Sujud (Prostration)",
      description:
        "Say 'Allāhu Akbar' and prostrate with your forehead, nose, palms, knees, and toes touching the ground. Recite:",
      substeps: [
        {
          arabicText: "سُبْحَانَ رَبِّيَ الْأَعْلَى وَبِحَمْدِهِ",
          transliteration: "Subḥāna rabbī l-aʿlā wa biḥamdihi",
          translation:
            "Glory be to my Lord, the Most High, and all praise be to Him.",
          reference: "Abu Dawood: 870",
        },
      ],
    },
    {
      title: "7. Jalsa (Sitting Between Prostrations)",
      description:
        "Sit up from prostration and make the following supplication:",
      substeps: [
        {
          arabicText:
            "رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْنِي وَارْفَعْنِي وَارْزُقْنِي وَاهْدِنِي وَعَافِنِي",
          transliteration:
            "Rabbi-ghfir lī, wa-rḥamnī, wa-jburnī, wa-rfaʿnī, wa-rzuqnī, wa-hdinī, wa-ʿāfinī.",
          translation:
            "O Lord, forgive me, and have mercy on me; and support me; and elevate me; and provide for me; and guide me; and protect me.",
          reference: "Ahmad: 3514, 1561",
        },
      ],
    },
    {
      title: "8. Tashahhud",
      description:
        "After the second prostration of the second rak'ah (and the final rak'ah), sit for the Tashahhud and recite:",
      substeps: [
        {
          arabicText:
            "التَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلَّهِ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ",
          transliteration:
            "At-taḥiyyātu-l-mubārakātu-ṣ-ṣalawātu-ṭ-ṭayyibātu li-llāh. As-salāmu ʿalayka ayyuhā-n-nabiyyu wa raḥmatu-llāhi wa barakātuh. As-salāmu ʿalaynā wa ʿalā ʿibādi-llāhi ṣ-ṣāliḥīn. Ashhadu an lā ilāha illā-llāh, wa ashhadu anna Muḥammadan rasūlu-llāh.",
          translation:
            "All compliments, blessed words, prayers, and good things are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god but Allah, and I bear witness that Muhammad is the messenger of Allah.",
          reference: "Muslim: 403",
        },
      ],
    },
    {
      title: "9. Salawat (Darood)",
      description:
        "After the Tashahhud in the final sitting, send blessings upon the Prophet (ﷺ):",
      substeps: [
        {
          arabicText:
            "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، وَبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، فِي الْعَالَمِينَ، إِنَّكَ حَمِيدٌ مَجِيدٌ",
          transliteration:
            "Allāhumma ṣalli ʿalā Muḥammadin wa ʿalā āli Muḥammad, kamā ṣallayta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm. Wa bārik ʿalā Muḥammadin wa ʿalā āli Muḥammad, kamā bārakta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm, fī-l-ʿālamīn, innaka ḥamīdun majīd.",
          translation:
            "O Allah, send prayers upon Muhammad and upon the family of Muhammad, as You sent prayers upon Ibrahim and upon the family of Ibrahim. And bless Muhammad and the family of Muhammad, as You blessed Ibrahim and the family of Ibrahim, in the worlds. Indeed, You are Praiseworthy and Glorious.",
          reference: "Muslim: 406, At-Tirmidhi: 3220",
        },
      ],
    },
    {
      title: "10. Supplication Before Taslim",
      description:
        "Before concluding the prayer, it is recommended to seek refuge and make personal supplications. Here are some of the most powerful duas:",
      substeps: [
        {
          arabicText:
            "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ عَذَابِ جَهَنَّمَ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ",
          transliteration:
            "Allāhumma innī aʿūdhu bika min ʿadhābi-l-qabr, wa min ʿadhābi jahannam, wa min fitnati-l-maḥyā wa-l-mamāt, wa min sharri fitnati-l-masīḥi-d-dajjāl.",
          translation:
            "O Allah, I seek refuge with You from the torment of the grave, and from the torment of Hell-fire, and from the trials of life and death, and from the evil of the trial of the Antichrist.",
          reference: "Bukhari: 1377",
        },
        {
          arabicText:
            "اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا، وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ، وَارْحَمْنِي، إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ",
          transliteration:
            "Allāhumma innī ẓalamtu nafsī ẓulman kathīran, wa lā yaghfiru-dh-dhunūba illā ant, fa-ghfir lī maghfiratan min ʿindik, wa-rḥamnī, innaka anta-l-ghafūru-r-raḥīm.",
          translation:
            "O Allah, I have done great injustice to myself and none except You forgives sins, so bestow on me a forgiveness from You, and have mercy on me. For verily, You are the Forgiving One, the Most Merciful.",
          reference: "Bukhari: 834",
        },
      ],
    },
    {
      title: "11. Taslim (Concluding Prayer)",
      description:
        "End the prayer by turning your head first to the right, then to the left, saying each time:",
      substeps: [
        {
          arabicText: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
          transliteration: "As-salāmu 'alaykum wa raḥmatu llāh",
          translation: "Peace be upon you and Allah's mercy",
          reference: "Sunan Abu Dawud 996",
        },
      ],
    },
  ];

  const postPrayerAdhkar: AdhkarStep[] = [
    {
      title: "Initial Supplication",
      arabicText:
        "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
      transliteration:
        "Allāhumma anta-s-salām, wa minka-s-salām, tabārakta yā dhā-l-jalāli wa-l-ikrām.",
      translation:
        "O Allah, You are Peace and from You comes peace. Blessed are You, O Owner of Majesty and Honor.",
      reference: "Muslim: 592",
    },
    {
      title: "Ayat al-Kursi",
      description: "Recite Ayat al-Kursi (Quran 2:255) once.",
      reference: "An-Nasa'i, verified in Sahih al-Jami' 6464",
    },
    {
      title: "Tasbeeh-e-Fathimi",
      description: "Recite the following remembrances:",
      arabicText:
        "سُبْحَانَ اللّٰهِ (33) \n الْحَمْدُ لِلَّهِ (33) \n اللَّهُ أَكْبَرُ (34)",
      transliteration:
        "Subḥānallāh (33 times)\nAlḥamdulillāh (33 times)\nAllāhu Akbar (34 times)",
      translation:
        "Glory be to Allah (33 times)\nPraise be to Allah (33 times)\nAllah is the Greatest (34 times)",
      reference: "Muslim: 596",
    },
    {
      title: "Three Quls",
      description:
        "Recite Surah Al-Ikhlas, Surah Al-Falaq, and Surah An-Nas. Recite them three times each after Fajr and Maghrib prayers.",
      reference: "Ahmad: 5082",
    },
    {
      title: "For Protection",
      description:
        "Recite the following three times, especially after Fajr and Maghrib:",
      arabicText:
        "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
      transliteration:
        "Bismi-llāhi-lladhī lā yaḍurru maʿa-smihi shayʾun fi-l-arḍi wa lā fi-s-samāʾi wa huwa-s-samīʿu-l-ʿalīm.",
      translation:
        "In the name of Allah, with whose name nothing on earth or in the heavens can cause harm, and He is the All-Hearing, the All-Knowing.",
      reference: "Abu Dawood: 5088",
    },
    {
      title: "Seeking Refuge from Hellfire",
      description:
        "Recite the following seven times after Fajr and Maghrib prayers:",
      arabicText: "اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ",
      transliteration: "Allāhumma ajirnī mina-n-nār.",
      translation: "O Allah, protect me from the Fire.",
      reference: "Abu Dawood: 5079",
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
  ];

  const commonMistakes: KhushuTip[] = [
    {
      title: "Rushing Through Prayer",
      description:
        "Praying too quickly without proper pauses and reflection. Take your time with each movement and recitation to maintain khushu.",
      reference: "Hadith emphasizes the importance of tranquility in prayer.",
    },
    {
      title: "Not Making Proper Wudu",
      description:
        "Incomplete or incorrect ablution invalidates the prayer. Ensure all required parts are washed properly and in the correct order.",
      reference:
        "Quran 5:6 and various hadith on the importance of proper wudu.",
    },
    {
      title: "Distractions During Prayer",
      description:
        "Allowing worldly thoughts, phone notifications, or other distractions to interfere with prayer concentration.",
      reference:
        "Islamic teachings emphasize the importance of focused worship.",
    },
    {
      title: "Incorrect Posture",
      description:
        "Not maintaining proper posture during standing, bowing, and prostration. Each position has specific requirements for validity.",
      reference:
        "Various hadith describe the proper way to perform prayer movements.",
    },
    {
      title: "Skipping Essential Parts",
      description:
        "Missing obligatory parts of prayer such as Surah Al-Fatihah, proper takbir, or taslim. Each component is essential for prayer validity.",
      reference:
        "Hadith: 'There is no prayer for the one who does not recite the Opening of the Book.' (Bukhari 756).",
    },
  ];

  const MadhhabToggle = () => (
    <div className="absolute top-4 right-4 flex items-center space-x-2">
      <Label
        htmlFor="madhhab-switch"
        className={`text-sm font-medium ${
          madhhab === "hanafi" ? "text-gray-500" : "text-green-700"
        }`}
      >
        Shafi'i
      </Label>
      <Switch
        id="madhhab-switch"
        checked={madhhab === "hanafi"}
        onCheckedChange={(checked) => setMadhhab(checked ? "hanafi" : "shafii")}
        className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-green-600"
      />
      <Label
        htmlFor="madhhab-switch"
        className={`text-sm font-medium ${
          madhhab === "shafii" ? "text-gray-500" : "text-green-700"
        }`}
      >
        Hanafi
      </Label>
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Book
                className="text-green-600 dark:text-green-400 hidden md:block"
                size={28}
              />
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
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
            steps and etiquette.
          </p>
        </div>
      </header>

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

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <section id="preparation" className="mb-16 scroll-mt-20">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                  <Hand className="text-blue-500" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  Preparation for Prayer
                </h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Before beginning the prayer, ensure you have completed these
                essential preparations.
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
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
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

          <section id="prayer-steps" className="mb-16 scroll-mt-20">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                  <Book className="text-green-500" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  Step-by-Step Prayer Guide
                </h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Follow these steps carefully to perform the prayer. Note the
                variations for different schools of thought where indicated.
              </p>
              <div className="space-y-8">
                {prayerSteps.map((step, index) => {
                  const content = step.hasVariation
                    ? step.variations[madhhab as keyof typeof step.variations]
                    : step.substeps
                    ? step.substeps[0]
                    : null;
                  return (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-green-200 dark:border-green-800 relative"
                    >
                      {step.hasVariation && <MadhhabToggle />}
                      <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-4 pr-32">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {step.description}
                      </p>

                      {step.substeps &&
                        !step.hasVariation &&
                        step.substeps.map((sub, subIndex) => (
                          <div
                            key={subIndex}
                            className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 mb-4 border-l-4 border-green-200 dark:border-green-700"
                          >
                            <p className="text-right text-2xl text-green-800 dark:text-green-200 mb-2 font-arabic">
                              {sub.arabicText}
                            </p>
                            <p className="text-green-700 dark:text-green-300 mb-1 italic">
                              {sub.transliteration}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 mb-3">
                              "{sub.translation}"
                            </p>
                            {"reference" in sub && sub.reference && (
                              <p className="text-sm italic text-gray-600 dark:text-gray-400">
                                Reference: {sub.reference}
                              </p>
                            )}
                          </div>
                        ))}

                      {content && step.hasVariation && (
                        <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 mb-4">
                          <p className="text-right text-2xl text-green-800 dark:text-green-200 mb-2 font-arabic">
                            {content.arabicText}
                          </p>
                          <p className="text-green-700 dark:text-green-300 mb-1 italic">
                            {content.transliteration}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 mb-3">
                            "{content.translation}"
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="post-prayer-adhkar" className="mb-16 scroll-mt-20">
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                  <Sparkles className="text-purple-500" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  Post-Prayer Adhkar
                </h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                After completing the obligatory prayer, it is a Sunnah to engage
                in these remembrances of Allah.
              </p>
              <div className="space-y-6">
                {postPrayerAdhkar.map((step, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-purple-200 dark:border-purple-800"
                  >
                    <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-3">
                      {step.title}
                    </h3>
                    {step.description && (
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {step.description}
                      </p>
                    )}

                    {step.arabicText && (
                      <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4 mb-4">
                        <p className="text-right text-2xl text-purple-800 dark:text-purple-200 mb-2 font-arabic whitespace-pre-wrap">
                          {step.arabicText}
                        </p>
                        <p className="text-purple-700 dark:text-purple-300 mb-1 italic whitespace-pre-wrap">
                          {step.transliteration}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
                          "{step.translation}"
                        </p>
                      </div>
                    )}
                    <p className="text-sm italic text-gray-600 dark:text-gray-400 border-l-2 border-purple-300 dark:border-purple-600 pl-3">
                      Reference: {step.reference}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="khushu-tips" className="mb-16 scroll-mt-20">
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                  <Heart className="text-red-500" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  Achieving Khushu (Humility and Concentration)
                </h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Khushu is the state of humility, concentration, and mindfulness
                during prayer. Here are some tips to help you achieve it.
              </p>
              <div className="space-y-6">
                {khushuTips.map((tip, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-red-200 dark:border-red-800"
                  >
                    <h3 className="text-xl font-semibold text-red-700 dark:text-red-300 mb-3">
                      {tip.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      {tip.description}
                    </p>
                    {tip.reference && (
                      <p className="text-sm italic text-gray-600 dark:text-gray-400 border-l-2 border-red-300 dark:border-red-600 pl-3">
                        Reference: {tip.reference}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="common-mistakes" className="mb-16 scroll-mt-20">
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                  <Eye className="text-orange-500" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  Common Mistakes to Avoid
                </h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Be aware of these common mistakes that can affect the validity
                or quality of your prayer.
              </p>
              <div className="space-y-6">
                {commonMistakes.map((mistake, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-orange-200 dark:border-orange-800"
                  >
                    <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300 mb-3">
                      {mistake.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      {mistake.description}
                    </p>
                    {mistake.reference && (
                      <p className="text-sm italic text-gray-600 dark:text-gray-400 border-l-2 border-orange-300 dark:border-orange-600 pl-3">
                        Reference: {mistake.reference}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>

      {!isDocument && (
        <footer className="border-t border-gray-200 dark:border-gray-700 py-12 mt-16">
          {/* ... Footer remains the same ... */}
        </footer>
      )}
    </div>
  );
};
