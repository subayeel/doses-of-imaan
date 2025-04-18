/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MadhabPrayerGuide from "./MadhabNotes";

type PrayerStep = {
  title: string;
  icon: string;
  arabicText?: string;
  transliteration?: string;
  translation?: string;
  description?: string;
  substeps?: {
    arabicText: string;
    transliteration: string;
    translation: string;
    description?: string;
  }[];
};

const SalahGuide: React.FC = () => {
  const preparationSteps: PrayerStep[] = [
    {
      title: "Ensure Ritual Purity (Tahara)",
      icon: "💧",
      description:
        "• Perform wudu (ablution) if you don't have it\n• Ensure your body, clothes, and prayer area are clean and free from impurities",
    },
    {
      title: "Covering the Awrah",
      icon: "👔",
      description:
        "• Men: Cover from navel to knees at minimum (preferably shoulders to ankles)\n• Women: Cover entire body except face and hands",
    },
    {
      title: "Face the Qiblah",
      icon: "🕋",
      description: "Face the direction of the Ka'bah in Makkah",
    },
    {
      title: "Make the Intention (Niyyah)",
      icon: "🤲",
      description:
        'Silently intend in your heart which prayer you\'re performing (e.g., "I intend to pray the obligatory Dhuhr prayer for Allah")',
    },
  ];

  const prayerSteps: PrayerStep[] = [
    {
      title: "Takbir al-Ihram (Opening Takbir)",
      icon: "🙌",
      description:
        "Raise hands to ear level with palms facing the qiblah and say:",
      arabicText: "اللهُ أَكْبَر",
      transliteration: "Allāhu Akbar",
      translation: "Allah is the Greatest",
    },
    {
      title: "Opening Supplication (Dua al-Istiftah)",
      icon: "📿",
      description: "Place right hand over left hand on chest and recite:",
      arabicText:
        "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلاَ إِلَهَ غَيْرُكَ",
      transliteration:
        "Subḥānaka Allāhumma wa biḥamdika, wa tabāraka ismuka, wa ta'ālā jadduka, wa lā ilāha ghayruka",
      translation:
        "Glory be to You, O Allah, and all praise is Yours, and blessed is Your name, and exalted is Your majesty, and there is no deity worthy of worship except You",
    },
    {
      title: "Ta'awwudh (Seeking Refuge)",
      icon: "🛡️",
      arabicText: "أَعُوذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
      transliteration: "A'ūdhu billāhi min ash-shayṭāni r-rajīm",
      translation: "I seek refuge in Allah from the accursed Satan",
    },
    {
      title: "Recite Surah Al-Fatihah",
      icon: "📖",
      description: "The first chapter of the Quran:",
      arabicText:
        "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\nالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ\nالرَّحْمَنِ الرَّحِيمِ\nمَالِكِ يَوْمِ الدِّينِ\nإِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ\nاهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ\nصِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
      transliteration:
        "Bismillāhi r-raḥmāni r-raḥīm\nAl-ḥamdu lillāhi rabbi l-'ālamīn\nAr-raḥmāni r-raḥīm\nMāliki yawmi d-dīn\nIyyāka na'budu wa-iyyāka nasta'īn\nIhdinā ṣ-ṣirāṭa l-mustaqīm\nṢirāṭa lladhīna an'amta 'alayhim ghayri l-maghḍūbi 'alayhim wa-lā ḍ-ḍāllīn",
      translation:
        "In the name of Allah, the Most Gracious, the Most Merciful\nAll praise is due to Allah, Lord of the worlds\nThe Most Gracious, the Most Merciful\nMaster of the Day of Judgment\nYou alone we worship, and You alone we ask for help\nGuide us to the straight path\nThe path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray",
      substeps: [
        {
          arabicText: "آمين",
          transliteration: "Āmīn",
          translation: "O Allah, accept our prayers",
        },
      ],
    },
    {
      title: "Recite Another Surah",
      icon: "📜",
      description:
        "In the first two Rak'ahs, recite another surah after Al-Fatihah. For example, Surah Al-Ikhlas:",
      arabicText:
        "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\nقُلْ هُوَ اللَّهُ أَحَدٌ\nاللَّهُ الصَّمَدُ\nلَمْ يَلِدْ وَلَمْ يُولَدْ\nوَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
      transliteration:
        "Bismillāhi r-raḥmāni r-raḥīm\nQul huwa llāhu aḥad\nAllāhu ṣ-ṣamad\nLam yalid wa-lam yūlad\nWa-lam yakun lahu kufuwan aḥad",
      translation:
        "In the name of Allah, the Most Gracious, the Most Merciful\nSay, 'He is Allah, [who is] One\nAllah, the Eternal Refuge\nHe neither begets nor is born\nNor is there to Him any equivalent'",
    },
    {
      title: "Rukū' (Bowing)",
      icon: "🙇",
      description:
        "Say \"Allāhu Akbar\" while going into rukū'. Then in rukū', place hands on knees and recite:",
      arabicText: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
      transliteration: "Subḥāna rabbiya l-'aẓīm",
      translation: "Glory be to my Lord, the Most Great (repeat three times)",
    },
    {
      title: "Rising from Rukū'",
      icon: "🧍",
      description: "Rise from rukū' saying:",
      arabicText: "سَمِعَ اللهُ لِمَنْ حَمِدَهُ",
      transliteration: "Sami'a llāhu liman ḥamidah",
      translation: "Allah hears those who praise Him",
      substeps: [
        {
          arabicText: "رَبَّنَا وَلَكَ الْحَمْدُ",
          transliteration: "Rabbanā wa-laka l-ḥamd",
          translation: "Our Lord, to You is all praise",
        },
      ],
    },
    {
      title: "Sujūd (Prostration)",
      icon: "🧎",
      description:
        'Say "Allāhu Akbar" while going into sujūd. Then while in prostration, recite:',
      arabicText: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
      transliteration: "Subḥāna rabbiya l-a'lā",
      translation: "Glory be to my Lord, the Most High (repeat three times)",
    },
    {
      title: "Sitting Between Two Prostrations (Jalsah)",
      icon: "🪑",
      description:
        'Rise from prostration saying "Allāhu Akbar" and sit. Then recite:',
      arabicText:
        "رَبِّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَاجْبُرْنِي، وَعَافِنِي، وَارْزُقْنِي، وَارْفَعْنِي",
      transliteration:
        "Rabbi ghfir lī, warḥamnī, wahdinī, wajburnī, wa'āfinī, warzuqnī, warfa'nī",
      translation:
        "My Lord, forgive me, have mercy on me, guide me, support me, protect me, provide for me, and elevate me",
    },
    {
      title: "Second Prostration",
      icon: "🧎‍♂️",
      description:
        'Say "Allāhu Akbar" and prostrate again, reciting the same as in the first prostration.',
    },
    {
      title: "Standing for the Second Rak'ah",
      icon: "🚶",
      description:
        'Rise from prostration saying "Allāhu Akbar" and stand for the second rak\'ah.',
    },
    {
      title: "Tashahhud (Testimony of Faith)",
      icon: "☝️",
      description:
        "After the second prostration of the second rak'ah, remain seated and recite:",
      arabicText:
        "التَّحِيَّاتُ لِلَّهِ، وَالصَّلَوَاتُ، وَالطَّيِّبَاتُ، السَّلاَمُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
      transliteration:
        "At-taḥiyyātu lillāhi, waṣ-ṣalawātu, waṭ-ṭayyibātu, as-salāmu 'alayka ayyuhan-nabiyyu wa raḥmatullāhi wa barakātuhu, as-salāmu 'alaynā wa 'alā 'ibādillāhiṣ-ṣāliḥīn, ashhadu an lā ilāha illallāhu, wa ashhadu anna Muḥammadan 'abduhu wa rasūluhu",
      translation:
        "All greetings of respect, prayers and good things are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no deity worthy of worship except Allah, and I bear witness that Muhammad is His servant and Messenger",
    },
    {
      title: "Final Tashahhud",
      icon: "🤲",
      description:
        "After completing all rak'ahs, sit for the final tashahhud. Recite the tashahhud as above, then add:",
      arabicText:
        "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ",
      transliteration:
        "Allāhumma ṣalli 'alā Muḥammadin wa 'alā āli Muḥammadin, kamā ṣallayta 'alā Ibrāhīma wa 'alā āli Ibrāhīma, innaka ḥamīdun majīd. Allāhumma bārik 'alā Muḥammadin wa 'alā āli Muḥammadin, kamā bārakta 'alā Ibrāhīma wa 'alā āli Ibrāhīma, innaka ḥamīdun majīd",
      translation:
        "O Allah, send prayers upon Muhammad and the family of Muhammad, as You sent prayers upon Ibrahim and the family of Ibrahim; You are indeed Worthy of Praise, Full of Glory. O Allah, send blessings upon Muhammad and the family of Muhammad, as You sent blessings upon Ibrahim and the family of Ibrahim; You are indeed Worthy of Praise, Full of Glory",
    },
    {
      title: "Supplication Before Tasleem",
      icon: "🌟",
      description:
        "It is recommended in the Shafi'i madhab to make du'a before the tasleem:",
      arabicText:
        "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ",
      transliteration:
        "Allāhumma innī a'ūdhu bika min 'adhābi jahannam, wa a'ūdhu bika min 'adhābi l-qabr, wa a'ūdhu bika min fitnati l-maḥyā wa l-mamāt, wa a'ūdhu bika min fitnati l-masīḥi d-dajjāl",
      translation:
        "O Allah, I seek refuge in You from the punishment of Hellfire, and I seek refuge in You from the punishment of the grave, and I seek refuge in You from the trials of life and death, and I seek refuge in You from the trial of the false messiah (Dajjal)",
    },
    {
      title: "Tasleem (End of Prayer)",
      icon: "👋",
      description: "Turn your head to the right and say:",
      arabicText: "السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ",
      transliteration: "As-salāmu 'alaykum wa raḥmatullāh",
      translation: "Peace be upon you and the mercy of Allah",
      substeps: [
        {
          arabicText: "السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ",
          transliteration: "As-salāmu 'alaykum wa raḥmatullāh",
          translation:
            "Peace be upon you and the mercy of Allah (Turn head to the left and repeat)",
        },
      ],
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-4 md:p-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <header className="text-center mb-8">
          <motion.h1
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive Guide to Salah 🕌
          </motion.h1>

          <motion.div
            className="mt-4 flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Badge
              variant="outline"
              className="bg-blue-100 text-blue-700 border-blue-300 px-3 py-1 text-sm"
            >
              Step by Step 📝
            </Badge>
            <Badge
              variant="outline"
              className="bg-green-100 text-green-700 border-green-300 px-3 py-1 text-sm"
            >
              Arabic Text 🔤
            </Badge>
            <Badge
              variant="outline"
              className="bg-purple-100 text-purple-700 border-purple-300 px-3 py-1 text-sm"
            >
              Transliteration 🔄
            </Badge>
            <Badge
              variant="outline"
              className="bg-amber-100 text-amber-700 border-amber-300 px-3 py-1 text-sm"
            >
              Translation 🌍
            </Badge>
          </motion.div>
        </header>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {preparationSteps.map((step, index) => (
            <motion.div key={index} variants={fadeInUp} className="h-full">
              <Card className="h-full bg-white/80 backdrop-blur-sm border-none  transition-shadow duration-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center">
                    <span className="text-2xl mr-2">{step.icon}</span>{" "}
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 whitespace-pre-line">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mt-4"
        >
          {prayerSteps.map((step, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="bg-white/80 backdrop-blur-md border-none transition-shadow rounded-lg mb-4  overflow-hidden max-w-3xl mx-auto">
                <div className="px-4 py-3 hover:bg-indigo-50/50 group">
                  <div className="flex items-center text-left">
                    <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </span>
                    <span className="text-lg font-medium">
                      {index + 1}. {step.title}
                    </span>
                  </div>
                </div>
                <div className="px-4 pb-4 pt-1">
                  {step.description && (
                    <p className="text-gray-700 mb-4">{step.description}</p>
                  )}

                  {step.arabicText && (
                    <div className="mb-4 border-l-4 border-blue-400 pl-3">
                      <h4 className="text-blue-600 font-medium mb-1 flex items-center">
                        <span className="mr-2">🔤</span> Arabic:
                      </h4>
                      <p className="text-xl text-right font-arabic whitespace-pre-line">
                        {step.arabicText}
                      </p>
                    </div>
                  )}

                  {step.transliteration && (
                    <div className="mb-4 border-l-4 border-purple-400 pl-3">
                      <h4 className="text-purple-600 font-medium mb-1 flex items-center">
                        <span className="mr-2">🔄</span> Transliteration:
                      </h4>
                      <p className="text-lg italic whitespace-pre-line">
                        {step.transliteration}
                      </p>
                    </div>
                  )}

                  {step.translation && (
                    <div className="mb-4 border-l-4 border-green-400 pl-3">
                      <h4 className="text-green-600 font-medium mb-1 flex items-center">
                        <span className="mr-2">🌍</span> Translation:
                      </h4>
                      <p className="text-base whitespace-pre-line">
                        {step.translation}
                      </p>
                    </div>
                  )}

                  {step.substeps && step.substeps.length > 0 && (
                    <div className="mt-4 pl-4 border-l-2 border-dashed border-gray-300">
                      <h4 className="text-gray-700 font-medium mb-2 flex items-center">
                        <span className="mr-2">➡️</span> Then:
                      </h4>
                      {step.substeps.map((substep, subIndex) => (
                        <div key={subIndex} className="mb-4">
                          {substep.arabicText && (
                            <div className="mb-2">
                              <p className="text-lg text-right font-arabic">
                                {substep.arabicText}
                              </p>
                            </div>
                          )}
                          {substep.transliteration && (
                            <div className="mb-2">
                              <p className="text-base italic">
                                {substep.transliteration}
                              </p>
                            </div>
                          )}
                          {substep.translation && (
                            <div>
                              <p className="text-sm">{substep.translation}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <MadhabPrayerGuide />
        </motion.div>

        <motion.footer
          className="text-center mt-12 text-gray-600 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p>
            Made with ❤️ to help Muslims pray according to the Shafi'i madhab
          </p>
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default SalahGuide;
