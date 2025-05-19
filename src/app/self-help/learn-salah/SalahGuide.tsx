/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Assuming MadhabPrayerGuide is a separate component as in the original
// import MadhabPrayerGuide from "./MadhabNotes";

type PrayerSubStep = {
  arabicText: string;
  transliteration: string;
  translation: string;
  description?: string;
  reference?: string;
};

type PrayerStep = {
  title: string;
  // icon?: string; // Icons removed from title for simplicity, can be re-added with a consistent library
  arabicText?: string;
  transliteration?: string;
  translation?: string;
  description: string; // Made description non-optional as it's key
  reference?: string;
  substeps?: PrayerSubStep[];
};

type KhushuTip = {
  title: string;
  description: string;
  reference?: string;
};

interface SalahGuideProps {
  isDocument?: boolean; // Default to false
}

export const SalahGuide = ({ isDocument = false }: SalahGuideProps) => {
  const preparationSteps: PrayerStep[] = [
    {
      title: "1. Ensure Ritual Purity (Tahara)",
      description:
        "• Perform Wudu (ablution) if you are not in a state of ritual purity. Wudu involves washing specific body parts with water.\n• Ensure your body, clothes, and the place of prayer are clean (Tahir) and free from impurities (Najasah).",
      reference: "Quran 5:6 (on Wudu); Fiqh principles on Taharah.",
    },
    {
      title: "2. Covering the Awrah (Proper Attire)",
      description:
        "• Men: Cover the area from the navel to the knees at a minimum. It is preferable to wear clean and modest clothing that also covers the shoulders.\n• Women: Cover the entire body except for the face and hands. Clothing should be loose-fitting and not transparent.",
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
        "After the Takbir al-Ihram, place your right hand over your left hand on your chest (or below navel/above navel depending on Madhab; chest is a common view). Recite an opening supplication. One common Dua al-Istiftah is:",
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
      substeps: [
        {
          description:
            "Then, silently or audibly (depending on the prayer and Madhab) say:",
          arabicText: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
          transliteration: "Bismillāhi r-raḥmāni r-raḥīm",
          translation:
            "In the name of Allah, the Most Gracious, the Most Merciful.",
          reference:
            "Practice of the Prophet (PBUH) before reciting Al-Fatihah.",
        },
      ],
    },
    {
      title: "4. Recite Surah Al-Fatihah",
      description:
        "Recite Surah Al-Fatihah, the first chapter of the Quran. Its recitation is an essential pillar of the prayer. Pause briefly after each verse.",
      arabicText:
        "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ\nالرَّحْمَنِ الرَّحِيمِ\nمَالِكِ يَوْمِ الدِّينِ\nإِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ\nاهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ\nصِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
      transliteration:
        "Al-ḥamdu lillāhi rabbi l-'ālamīn\nAr-raḥmāni r-raḥīm\nMāliki yawmi d-dīn\nIyyāka na'budu wa-iyyāka nasta'īn\nIhdinā ṣ-ṣirāṭa l-mustaqīm\nṢirāṭa lladhīna an'amta 'alayhim ghayri l-maghḍūbi 'alayhim wa-lā ḍ-ḍāllīn.",
      translation:
        "All praise is due to Allah, Lord of the worlds\nThe Most Gracious, the Most Merciful\nMaster of the Day of Judgment\nYou alone we worship, and You alone we ask for help\nGuide us to the straight path\nThe path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
      reference:
        "Sahih al-Bukhari 756, Sahih Muslim 394 ('No prayer for the one who does not recite Al-Fatihah').",
      substeps: [
        {
          description:
            "After completing Al-Fatihah, say 'Āmīn' (O Allah, accept our prayers). This is said silently in some prayers/Madhabs and audibly in others.",
          arabicText: "آمين",
          transliteration: "Āmīn",
          translation: "O Allah, accept our prayers.",
          reference: "Sahih al-Bukhari 780, Sahih Muslim 410.",
        },
      ],
    },
    {
      title: "5. Recite Another Surah or Verses",
      description:
        "In the first two Rak'ahs (units) of Fard (obligatory) prayers, and in all Rak'ahs of Sunnah and Nafl (voluntary) prayers, it is Sunnah to recite another Surah or some verses from the Quran after Al-Fatihah. For example, Surah Al-Ikhlas:",
      arabicText:
        "قُلْ هُوَ اللَّهُ أَحَدٌ\nاللَّهُ الصَّمَدُ\nلَمْ يَلِدْ وَلَمْ يُولَدْ\nوَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
      transliteration:
        "Qul huwa llāhu aḥad\nAllāhu ṣ-ṣamad\nLam yalid wa-lam yūlad\nWa-lam yakun lahu kufuwan aḥad.",
      translation:
        "Say, 'He is Allah, [who is] One\nAllah, the Eternal Refuge\nHe neither begets nor is born\nNor is there to Him any equivalent.'",
      reference:
        "Sahih al-Bukhari 759, Sahih Muslim 451 (on reciting a Surah after Fatihah in the first two rak'ahs).",
    },
    {
      title: "6. Rukū' (Bowing)",
      description:
        "Say 'Allāhu Akbar' while going into Rukū'. Bend at the waist, keeping your back straight and parallel to the ground (if possible). Place your hands firmly on your knees with fingers spread. Your gaze should be on the place of prostration. In Rukū', recite:",
      arabicText: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
      transliteration: "Subḥāna rabbiya l-'aẓīm",
      translation:
        "Glory be to my Lord, the Most Great (repeat at least three times).",
      reference:
        "Quran 22:77 (general command to bow); Sahih al-Bukhari 793, 828 (description); Abu Dawud 871 (for the tasbeeh).",
    },
    {
      title: "7. I'tidal (Rising from Rukū')",
      description:
        "Rise from Rukū' back to a standing position (Qiyam), saying:",
      arabicText: "سَمِعَ اللهُ لِمَنْ حَمِدَهُ",
      transliteration: "Sami'a llāhu liman ḥamidah",
      translation: "Allah hears those who praise Him.",
      reference: "Sahih al-Bukhari 795.",
      substeps: [
        {
          description: "Once fully upright, say:",
          arabicText:
            "رَبَّنَا وَلَكَ الْحَمْدُ (حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ)",
          transliteration:
            "Rabbanā wa-laka l-ḥamd (ḥamdan kathīran ṭayyiban mubārakan fīh).",
          translation:
            "Our Lord, to You is all praise (praise which is abundant, pure, and blessed).",
          reference:
            "Sahih al-Bukhari 796. The addition in parenthesis is also narrated (e.g., Sahih al-Bukhari 799).",
        },
      ],
    },
    {
      title: "8. Sujūd (Prostration)",
      description:
        'Say "Allāhu Akbar" and go down into Sujūd. Prostrate with seven parts of your body touching the ground: forehead and nose, both palms, both knees, and the balls of both feet (toes pointing towards Qiblah). Keep your forearms away from the ground and your abdomen away from your thighs. In Sujūd, recite:',
      arabicText: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
      transliteration: "Subḥāna rabbiya l-a'lā",
      translation:
        "Glory be to my Lord, the Most High (repeat at least three times).",
      reference:
        "Quran 22:77 (general command to prostrate); Sahih al-Bukhari 812, Sahih Muslim 490 (on seven bones); Abu Dawud 871 (for the tasbeeh).",
    },
    {
      title: "9. Jalsah (Sitting Between Two Prostrations)",
      description:
        'Rise from the first prostration saying "Allāhu Akbar" and sit briefly. Sit on your left foot, with your right foot upright (toes pointing to Qiblah). Place your hands on your thighs or knees. During this sitting, recite:',
      arabicText:
        "رَبِّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَاجْبُرْنِي، وَعَافِنِي، وَارْزُقْنِي، وَارْفَعْنِي",
      transliteration:
        "Rabbi ghfir lī, warḥamnī, wahdinī, wajburnī, wa'āfinī, warzuqnī, warfa'nī.",
      translation:
        "My Lord, forgive me, have mercy on me, guide me, support me, protect me (grant me well-being), provide for me, and elevate me.",
      reference: "Abu Dawud 874, Tirmidhi 284.",
    },
    {
      title: "10. Second Prostration",
      description:
        'Say "Allāhu Akbar" and perform a second Sujūd identical to the first one, reciting "Subḥāna rabbiya l-a\'lā" three times.',
      reference:
        "Based on the practice of the Prophet (PBUH) performing two prostrations per Rak'ah.",
    },
    {
      title: "11. Rising for the Next Rak'ah or Tashahhud",
      description:
        "If it is the end of the first or third Rak'ah, say \"Allāhu Akbar\" and rise to stand for the next Rak'ah. You may briefly sit (Jalsat al-Istiraha - sitting of rest) before standing up straight, though this is a point of some Fiqh discussion. If it is the end of the second Rak'ah or the final Rak'ah, you will proceed to Tashahhud.",
      reference:
        "General practice of Prophet Muhammad (PBUH) for transitioning between Rak'ahs. Jalsat al-Istiraha: Sahih al-Bukhari 823.",
    },
    {
      title: "12. Tashahhud (Testimony of Faith)",
      description:
        "After the second Sujūd of the second Rak'ah (and in the final Rak'ah), remain seated in the Jalsah position (or similar, e.g. Tawarruk in final Tashahhud for some Madhabs). Point the index finger of your right hand towards the Qiblah while reciting the Tashahhud. The Tashahhud of Ibn Mas'ud (RA) is:",
      arabicText:
        "التَّحِيَّاتُ لِلَّهِ، وَالصَّلَوَاتُ، وَالطَّيِّبَاتُ، السَّلاَمُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
      transliteration:
        "At-taḥiyyātu lillāhi, waṣ-ṣalawātu, waṭ-ṭayyibātu, as-salāmu 'alayka ayyuhan-nabiyyu wa raḥmatullāhi wa barakātuhu, as-salāmu 'alaynā wa 'alā 'ibādillāhiṣ-ṣāliḥīn, ashhadu an lā ilāha illallāhu, wa ashhadu anna Muḥammadan 'abduhu wa rasūluhu.",
      translation:
        "All greetings of respect, prayers and good things are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no deity worthy of worship except Allah, and I bear witness that Muhammad is His servant and Messenger.",
      reference: "Sahih al-Bukhari 831, Sahih Muslim 402.",
    },
    {
      title: "13. As-Salawat al-Ibrahimiyyah (Abrahamic Salutations)",
      description:
        "If this is the final Tashahhud (after completing all Rak'ahs), after reciting the Tashahhud above, continue with As-Salawat al-Ibrahimiyyah:",
      arabicText:
        "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ",
      transliteration:
        "Allāhumma ṣalli 'alā Muḥammadin wa 'alā āli Muḥammadin, kamā ṣallayta 'alā Ibrāhīma wa 'alā āli Ibrāhīma, innaka ḥamīdun majīd. Allāhumma bārik 'alā Muḥammadin wa 'alā āli Muḥammadin, kamā bārakta 'alā Ibrāhīma wa 'alā āli Ibrāhīma, innaka ḥamīdun majīd.",
      translation:
        "O Allah, send prayers upon Muhammad and the family of Muhammad, as You sent prayers upon Ibrahim and the family of Ibrahim; You are indeed Worthy of Praise, Full of Glory. O Allah, send blessings upon Muhammad and the family of Muhammad, as You sent blessings upon Ibrahim and the family of Ibrahim; You are indeed Worthy of Praise, Full of Glory.",
      reference: "Sahih al-Bukhari 3370, Sahih Muslim 406.",
    },
    // The specific Du'a from the original prompt will be covered by the new section below.
    {
      title: "14. Tasleem (Concluding the Prayer)",
      description: "To end the prayer, turn your head to the right and say:",
      arabicText: "السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ",
      transliteration: "As-salāmu 'alaykum wa raḥmatullāh",
      translation: "Peace be upon you and the mercy of Allah.",
      reference: "Sahih al-Bukhari 838, Sahih Muslim 582.",
      substeps: [
        {
          description: "Then turn your head to the left and repeat the same:",
          arabicText: "السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ",
          transliteration: "As-salāmu 'alaykum wa raḥmatullāh",
          translation: "Peace be upon you and the mercy of Allah.",
          reference: "Sahih al-Bukhari 838, Sahih Muslim 582.",
        },
      ],
    },
  ];

  const duasBeforeTasleem: PrayerStep[] = [
    {
      title: "Dua 1",
      description:
        "It is recommended to make Du'a after the final Tashahhud and before the Tasleem. Here are some recommended supplications:",
      arabicText:
        "اللّهُـمَّ إِنِّـي أَعـوذُ بِكَ مِـنْ عَذابِ القَـبْر وَمِـنْ عَذابِ جَهَـنَّم وَمِـنْ فِتْـنَةِ المَحْـيا وَالمَمـات وَمِـنْ شَـرِّ فِتْـنَةِ المَسيحِ الدَّجّال",
      transliteration:
        "Allāhumma ‘innī ‘a`ūdhu bika min `adhābi ‘l-qabri. wa min `adhābi jahannam. wa min fitnati ‘l-maḥyā wa ‘l-mamāti. wa min sharri fitnati ‘l-masīḥid-dajjāl.",
      translation:
        "O Allah, I seek refuge in You from the punishment of the grave, and from the punishment of Hell-fire, and from the trials of life and death, and from the evil of the trial of the False Messiah.",
      reference:
        "Al-Bukhari 2/102, Muslim 1/412 (this is Muslim's wording). Hisnul Muslim 55.",
    },
    {
      title: "Dua 2",
      description: "",
      arabicText:
        "اللّهُـمَّ إِنِّـي أَعـوذُ بِكَ مِـنْ عَذابِ القَـبْر وَأَعـوذُ بِكَ مِـنْ فِتْـنَةِ المَسيحِ الدَّجّـال أَعـوذُ بِكَ مِـنْ فِتْـنَةِ المَحْـيا وَالمَمـات . اللّهُـمَّ إِنِّـي أَعـوذُ بِكَ مِنَ المَأْثَـمِ وَالمَغْـرَم",
      transliteration:
        "Allāhumma 'innī ‘a`ūdhu bika min `adhābi ‘l-qabr. wa ‘a`ūdhu bika min fitnati ‘l-masīḥid-dajjāl. wa ‘a`ūdhu bika min fitnati ‘l-maḥyā wa ‘l-mamāt. Allāhumma ‘innī ‘a`ūdhu bika mina ‘l-m’athami wa ‘l-maghram.",
      translation:
        "O Allah, I seek refuge in You from the punishment of the grave, and I seek refuge in You from the trial of the False Messiah, and I seek refuge in You from the trials of life and death. O Allah, I seek refuge in You from sin and from debt.",
      reference: "Al-Bukhari 1/202, Muslim 1/412. Hisnul Muslim 56.",
    },
    {
      title: "Dua 3",
      description: "",
      arabicText:
        "اللّهُـمَّ إِنِّـي ظَلَـمْتُ نَفْسـي ظُلْمـاً كَثـيراً وَلا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْت فَاغْـفِر لي مَغْـفِرَةً مِنْ عِنْـدِك وَارْحَمْـني إِنَّكَ أَنْتَ الغَـفورُ الرَّحـيم",
      transliteration:
        "Allāhumma ‘innī ẓalamtu nafsī ẓulman kathīran. wa lā yaghfiru-dhdhunūba illā 'anta. faghfir lī maghfiratam’min `indika warḥamnīinnaka 'anta ‘l-Ghafūr ur-Rahīm.",
      translation:
        "O Allah, I have greatly wronged myself, and no one forgives sins but You. So, grant me forgiveness and have mercy on me. Surely, you are Forgiving, Merciful.",
      reference: "Al-Bukhari 8/168, Muslim 4/2078. Hisnul Muslim 57.",
    },
    {
      title: "Dua 4",
      description: "",
      arabicText:
        "اللّهُـمَّ اغْـفِرْ لي ما قَدَّمْـتُ وَما أَخَّرْت وَما أَسْـرَرْتُ وَما أَعْلَـنْت وَما أَسْـرَفْت وَما أَنْتَ أَعْـلَمُ بِهِ مِنِّي . أَنْتَ المُقَـدِّمُ وَأَنْتَ المُـؤَخِّـرُ لا إِلهَ إِلاّ أَنْـت",
      transliteration:
        "Allāhummagh’fir lī mā qaddamtu, wa mā ‘akhkhartu. wa mā ‘asrartu, wa mā ‘a`lantu. wa mā ‘asraftu, wa mā 'anta ‘a`lamu bihi minnī.‘anta ‘l-Muqaddimu, wa 'anta ‘l-Mu‘akhkhirulā 'ilāha 'illā 'anta.",
      translation:
        "O Allah, forgive me what I have sent before me and what I have left behind me, what I have concealed and what I have done openly, what I have done in excess, and what You are better aware of than I. You are the One Who sends forth and You are the One Who delays. There is none worthy of worship but You.",
      reference: "Muslim 1/534. Hisnul Muslim 58.",
    },
    {
      title: "Dua 5",
      description: "",
      arabicText:
        "اللّهُـمَّ أَعِـنِّي عَلـى ذِكْـرِكَ وَشُكْـرِك وَحُسْـنِ عِبـادَتِـك",
      transliteration:
        "Allāhumma ‘a`innī `alā dhikrika, wa shukrika. wa ḥusni `ibādatik.",
      translation:
        "O Allah, help me to remember You, to give You thanks, and to perform Your worship in the best manner.",
      reference:
        "Abu Dawud 2/86, An-Nasa'i 3/53. See also Al-Albani Sahih Abu Dawud 1 /284. Hisnul Muslim 59.",
    },
    {
      title: "Dua 6",
      description: "",
      arabicText:
        "اللّهُـمَّ إِنِّـي أَعوذُ بِكَ مِنَ البُخْـل وَأَعوذُ بِكَ مِنَ الجُـبْن وَأَعوذُ بِكَ مِنْ أَنْ أُرَدَّ إِلـى أَرْذَلِ الـعُمُر وَأََعوذُ بِكَ مِنْ فِتْنَـةِ الدُّنْـيا وَعَـذابِ القَـبْر",
      transliteration:
        "Allāhumma 'innī ‘a`udhu bika mina ‘l-bukhl. wa ‘a`udhu bika mina ‘l-jubn. wa ‘a`udhu bika min ‘an ‘uradda ilā ‘ardhali ‘l-`umur. wa ‘a`udhu bika min fitnatid-dunyā wa `adhābi ‘l-qabr.",
      translation:
        "O Allah, I seek Your protection from miserliness, I seek Your protection from cowardice, and I seek Your protection from being returned to feeble old age. I seek Your protection from the trials of this world and from the torment of the grave.",
      reference:
        "Al-Bukhari, cf. Al-Asqalani, Fathul-Bari 6/35. Hisnul Muslim 60.",
    },
    {
      title: "Dua 7",
      description: "",
      arabicText:
        "اللّهُـمَّ إِنِّـي أَسْأَلُـكَ الجَـنَّةَ وأََعوذُ بِـكَ مِـنَ الـنّار",
      transliteration:
        "Allāhumma innī as'aluka ‘l-jannahwa a`ūdhu bika minan-nār.",
      translation:
        "O Allah, I ask You for Paradise, and I seek Your protection from the Fire.",
      reference:
        "Abu Dawud. See also Al-Albani, Sahih Ibn Majah 2/328. Hisnul Muslim 61.",
    },
    {
      title: "Dua 8",
      description: "",
      arabicText:
        "اللّهُـمَّ بِعِلْـمِكَ الغَـيْبِ وَقُـدْرَتِـكَ عَلـى الْخَلقِ أَحْـيِني ما عَلِـمْتَ الحـياةَ خَـيْراً لـي وَتَوَفَّـني إِذا عَلِـمْتَ الوَفـاةَ خَـيْراً لـي اللّهُـمَّ إِنِّـي أَسْـأَلُـكَ خَشْيَتَـكَ في الغَـيْبِ وَالشَّهـادَةِ وَأَسْـأَلُـكَ كَلِمَـةَ الحَـقِّ في الرِّضـا وَالغَضَـب وَأَسْـأَلُـكَ القَصْدَ في الغِنـى وَالفَقْـر أَسْـأَلُـكَ نَعـيماً لا يَنْفَـد وَأَسْـأَلُـكَ قُـرَّةَ عَيْـنٍ لا تَنْـقَطِعْ وَأَسْـأَلُـكَ الرِّضـا بَعْـدَ القَضـاء وَأَسْـأَلُـكَ بًـرْدَ الْعَـيْشِ بَعْـدَ الْمَـوْت وَأَسْـأَلُـكَ لَـذَّةَ النَّظَـرِ إِلـى وَجْـهِكَ وَالشَّـوْقَ إِلـى لِقـائِـك في غَـيرِ ضَـرّاءَ مُضِـرَّة وَلا فِتْـنَةٍ مُضـلَّة اللّهُـمَّ زَيِّـنّا بِزينَـةِ الإيـمان وَاجْـعَلنا هُـداةً مُهْـتَدين",
      transliteration:
        "Allāhumma bi `ilmika ‘l-ghayb, wa qudratika `ala ‘l-khalq. aḥyinī mā `alimta ‘l-ḥayāta khayran lī. wa tawaffanī idhā `alimta ‘l-wafāta khayran lī. Allāhumma innī as'aluka khash’yataka fil-ghaybi wash-shahādah. wa as'aluka kalimata ‘l-ḥaqqi fir-riḍā wa ‘l-ghaḍab. wa as'aluka ‘l-qaṣda fil-ghinā wa ‘l-faqr. wa as'aluka na`īman lā yanfad. wa as'aluka qurrata `aynin lā tanqati`. wa as'alukar-riḍā ba`dal-qaḍā'. wa as'aluka barda ‘l-`ayshi ba`da ‘l-mawt. wa as'aluka ladh-dhatan-naẓari ilā wajhik. wash-shawqa ilā liqā'ik. fī ghayri ḍarrā'a muḍirrah, wa lā fitnatin muḍillah. Allāhumma zayyinnā bi zīnati ‘l-'īmān. waj`alnā hudātan muhtadīn.",
      translation:
        "O Allah, by Your Knowledge of the unseen and by Your Power over creation, let me live if You know that life is good for me, and let me die if You know that death is good for me. O Allah, I ask You to grant me fear of You in private and in public. I ask you for the word of truth in times of contentment and anger. I ask You for moderation in wealth and in poverty. I ask you for blessings never ceasing and the coolness of my eye (i. e. pleasure) that never ends. I ask You for pleasure after Your Judgment and I ask You for a life of coolness after death. I ask You for the delight of gazing upon Your Face, and the joy of meeting You, without any harm and misleading trials befalling me. O Allah, dress us with the beauty of Faith and make us guides who are upon (correct) guidance.",
      reference:
        "An-Nasa'i 3/54, 55, Ahmad 4/364. See also Al-Albani, Sahih An-Nasa'i 1/281. Hisnul Muslim 62.",
    },
    {
      title: "Dua 9",
      description: "",
      arabicText:
        "اللّهُـمَّ إِنِّـي أَسْأَلُـكَ يا اللهُ بِأَنَّـكَ الواحِـدُ الأَحَـد الصَّـمَدُ الَّذـي لَـمْ يَلِـدْ وَلَمْ يولَدْ وَلَمْ يَكـنْ لَهُ كُـفُواً أَحَـد أَنْ تَغْـفِرْ لي ذُنـوبي إِنَّـكَ أَنْـتَ الغَفـورُ الرَّحِّـيم",
      transliteration:
        "Allāhumma innī as'aluka yā Allāhbi'annaka ‘l-Wāḥidu ‘l-Aḥaduṣ-ṣamad. alladhī lam yalid wa lam yūlad. wa lam yakun lahu kufuwan aḥad. an taghfir lī dhunūbī. innaka anta ‘l-Ghafūrur-Raḥīm.",
      translation:
        "O Allah, I ask You. O Allah, You are the One, the Only, Self-Sufficient Master, Who was not begotten and begets not, and none is equal to Him. Forgive me my sins, surely you are Forgiving, Merciful.",
      reference:
        "An-Nasa'i 3/52, Ahmad 4/338. See also Al-Albani, Sahih An-Nasa'i 1/280 and Sifat Salatun-Nabi, pg. 204. Hisnul Muslim 63.",
    },
    {
      title: "Dua 10",
      description: "",
      arabicText:
        "اللّهُـمَّ إِنِّـي أَسْأَلُـكَ بِأَنَّ لَكَ الْحَـمْدُ لا إِلـهَ إِلاّ أَنْـتَ وَحْـدَكَ لا شَـريكَ لَـكَ المَنّـانُ يا بَديـعَ السَّمواتِ وَالأَرْضِ يا ذا الجَلالِ وَالإِكْـرام يا حَـيُّ يا قَـيّومُ إِنِّـي أَسْأَلُـكَ الجَـنَّةَ وَأَعـوذُ بِـكَ مِنَ الـنّار",
      transliteration:
        "Allāhumma innī as'aluka bi'anna laka ‘l-ḥamd. lā ilāha illā ant, waḥdaka lā sharīka lak. al-Mannān, yā Badī`as-samāwāti wa ‘l-arḍyā dha ‘l-Jalāli wa ‘l-'Ikrām, yā ḥayyu yā Qayyūm. innī as'aluka ‘l-jannah, wa a`ūdhu bika minan-nār.",
      translation:
        "O Allah, I ask You, as You are the Owner of praise, there is none worthy of worship but You alone, You have no partner. You are the Giver of all good. O Creator of the heavens and the earth, Owner of majesty and honor. O Living and Everlasting One, I ask you for Paradise, and I seek refuge in You from the fire.",
      reference:
        "Abu Dawud, An-Nasa'i, Ibn Majah, At-Tirmidhi. See also Al-Albani, Sahih Ibn Majah 2/329. Hisnul Muslim 64.",
    },
    {
      title: "Dua 11",
      description: "",
      arabicText:
        "للّهُـمَّ إِنِّـي أَسْأَلُـكَ بِأَنَّـي أَشْـهَدُ أَنَّـكَ أنْـتَ اللهُ لا إِلـهَ إِلاّ أَنْـت الأَحَـدُ الصَّـمَدُ الَّذـي لَـمْ يَلِـدْ وَلَمْ يولَـدْ وَلَمْ يَكـنْ لَهُ كُـفُواً أَحَـد",
      transliteration:
        "Allāhumma innī as'alukabi'annī ash-hadu annaka ant-Allāhlā 'ilāha 'illā ant. Al-Aḥaduṣ-ṣamadalladhī lam yalid wa lam yūladwa lam yakun lahu kufuwan aḥad.",
      translation:
        "O Allah, I ask You, by the fact that I bear witness that You are Allah. There is none worthy of worship but You, the Only God, Independent of creation, Who was not begotten and begets not, and none is equal to Him.",
      reference:
        "Abu Dawud 2/62, Ibn Majah 2/1267, At-Tirmidhi 5/515, Ahmad 5/360. See also Al-Albani, Sahih Ibn Majah 2/329 and Sahih At-Tirmidhi 3/163. Hisnul Muslim 65.",
    },
  ];

  const khushuTips: KhushuTip[] = [
    {
      title: "1. Prepare Mentally and Physically",
      description:
        "Perform Wudu with mindfulness, contemplating its spiritual cleansing. Arrive for prayer a little early if in congregation, or dedicate a calm space at home. Free your mind from worldly distractions before starting.",
      reference: "General Islamic guidance on preparation for worship.",
    },
    {
      title: "2. Understand the Meanings",
      description:
        "Learn the meaning of Surah Al-Fatihah, other surahs you recite, and the various supplications (Du'as) and praises (Tasbeeh) within Salah. Connecting with the meaning enhances focus and emotional connection.",
      reference:
        "Cf. Quran 23:1-2 on believers who are humble in their prayers. Understanding is key to humility.",
    },
    {
      title: "3. Focus on Allah's Presence (Ihsan)",
      description:
        "Strive to pray as if you see Allah, and if you cannot see Him, know that He sees you. This consciousness (Ihsan) is the highest level of worship.",
      reference: "Hadith of Jibril (Sahih al-Bukhari 50, Sahih Muslim 8).",
    },
    {
      title: "4. Minimize Distractions",
      description:
        "Choose a quiet place for prayer. Avoid facing distracting images or objects. Turn off phones or notifications. Inform household members not to interrupt if possible.",
      reference: "Practical advice based on principles of focus in worship.",
    },
    {
      title: "5. Recite Clearly and Melodiously (Within Limits)",
      description:
        "Recite the Quran and Adhkar clearly, at a moderate pace, and with a pleasant tone if possible (without excessive or distracting melodiousness). This helps your own heart to engage.",
      reference:
        "Quran 73:4 '...and recite the Qur'an with measured recitation.'",
    },
    {
      title: "6. Vary Surahs and Du'as",
      description:
        "Memorize and use different shorter Surahs (after Al-Fatihah) and Du'as in various parts of the Salah. This prevents the prayer from becoming monotonous and keeps the mind more engaged.",
      reference: "Sunnah of the Prophet (PBUH) who recited various Surahs.",
    },
    {
      title: "7. Reflect on Death and the Hereafter",
      description:
        "Remember that each prayer could be your last. This thought can instill a sense of urgency and sincerity, improving Khushu'.",
      reference:
        "Advice from scholars, e.g., 'Pray the prayer of one who is bidding farewell.' (Related in Musnad Ahmad, Ibn Majah 4171 - authenticity debated by some, but the meaning is sound).",
    },
    {
      title: "8. Focus Gaze on the Place of Prostration",
      description:
        "During Qiyam (standing), it is Sunnah to look towards the place of Sujūd (prostration). This helps limit visual distractions and aids concentration.",
      reference:
        "Narrations on the Prophet's (PBUH) practice, e.g., Bayhaqi. Discussed in Fiqh books.",
    },
    {
      title: "9. Understand the Physical Postures",
      description:
        "Reflect on the symbolism of each posture: standing in submission, bowing in humility, prostrating in utmost reverence. This adds depth to the physical acts.",
      reference:
        "General understanding from Islamic scholarship on the wisdom behind prayer postures.",
    },
    {
      title: "10. Make Du'a for Khushu'",
      description:
        "Ask Allah to grant you Khushu' in your prayers. One such Du'a is: 'Allāhumma a`innī `alā dhikrika, wa shukrika, wa ḥusni `ibādatik' (O Allah, help me to remember You, to give You thanks, and to perform Your worship in the best manner).",
      reference: "Abu Dawud 2/86, An-Nasa'i 3/53. Hisnul Muslim 59.",
    },
  ];

  const renderStep = (
    step: PrayerStep,
    index: number,
    isPrayerStep: boolean
  ) => (
    <Card key={index} className="mb-4 bg-white shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold text-slate-800">
          {isPrayerStep ? `${index + 1}. ${step.title}` : step.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        {step.description && (
          <p className="text-slate-700 mb-3 whitespace-pre-line text-base">
            {step.description}
          </p>
        )}

        {step.arabicText && (
          <div className="mb-3 mt-2 border-l-4 border-sky-500 pl-3 py-1">
            <h4 className="text-sky-700 font-medium mb-1 flex items-center text-sm">
              <span className="mr-2">🔤</span> Arabic:
            </h4>
            {/* Ensure you have a good Arabic font configured in tailwind.config.js, e.g., font-arabic */}
            <p className="text-xl text-right font-arabic leading-relaxed whitespace-pre-line text-slate-800">
              {step.arabicText}
            </p>
          </div>
        )}

        {step.transliteration && (
          <div className="mb-3 border-l-4 border-purple-500 pl-3 py-1">
            <h4 className="text-purple-700 font-medium mb-1 flex items-center text-sm">
              <span className="mr-2">🔄</span> Transliteration:
            </h4>
            <p className="text-base italic whitespace-pre-line text-slate-600">
              {step.transliteration}
            </p>
          </div>
        )}

        {step.translation && (
          <div className="mb-3 border-l-4 border-emerald-500 pl-3 py-1">
            <h4 className="text-emerald-700 font-medium mb-1 flex items-center text-sm">
              <span className="mr-2">🌍</span> Translation:
            </h4>
            <p className="text-base whitespace-pre-line text-slate-600">
              {step.translation}
            </p>
          </div>
        )}

        {step.reference && (
          <p className="text-xs text-slate-500 mt-2">
            <span className="font-semibold">Reference:</span> {step.reference}
          </p>
        )}

        {step.substeps && step.substeps.length > 0 && (
          <div className="mt-4 pl-4 border-l-2 border-dashed border-slate-300">
            <h4 className="text-slate-700 font-medium mb-2 text-sm">Then:</h4>
            {step.substeps.map((substep, subIndex) => (
              <div
                key={subIndex}
                className="mb-3 pb-2 border-b border-slate-100 last:border-b-0"
              >
                {substep.description && (
                  <p className="text-slate-600 mb-1 text-sm whitespace-pre-line">
                    {substep.description}
                  </p>
                )}
                {substep.arabicText && (
                  <div className="mb-1">
                    <p className="text-lg text-right font-arabic whitespace-pre-line text-slate-700">
                      {substep.arabicText}
                    </p>
                  </div>
                )}
                {substep.transliteration && (
                  <div className="mb-1">
                    <p className="text-sm italic whitespace-pre-line text-slate-500">
                      {substep.transliteration}
                    </p>
                  </div>
                )}
                {substep.translation && (
                  <div>
                    <p className="text-sm whitespace-pre-line text-slate-500">
                      {substep.translation}
                    </p>
                  </div>
                )}
                {substep.reference && (
                  <p className="text-xs text-slate-400 mt-1">
                    <span className="font-semibold">Ref:</span>{" "}
                    {substep.reference}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="bg-slate-50 min-h-screen p-4 md:p-8 selection:bg-sky-100">
      <div className="max-w-4xl mx-auto">
        {" "}
        {/* Increased max-width for better readability on larger screens */}
        <header className=" mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            A Guide to Salah (Prayer)
          </h1>
          <p className="text-lg text-slate-600">
            A step-by-step guide to performing Islamic prayer with explanations,
            Arabic text, transliteration, and translation.
          </p>
        </header>
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-sky-700 mb-6 pb-2 border-b-2 border-sky-200">
            I. Preparation for Prayer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {preparationSteps.map((step, index) => (
              <Card key={index} className="bg-white shadow-sm h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 whitespace-pre-line text-base">
                    {step.description}
                  </p>
                  {step.reference && (
                    <p className="text-xs text-slate-500 mt-3 pt-2 border-t border-slate-100">
                      <span className="font-semibold">Reference:</span>{" "}
                      {step.reference}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-sky-700 mb-6 pb-2 border-b-2 border-sky-200">
            II. How to Perform Salah (The Prayer Steps)
          </h2>
          {prayerSteps.map((step, index) => renderStep(step, index, true))}
        </section>
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-6 pb-2 border-b-2 border-purple-200">
            III. Supplications Before Tasleem (After Final Tashahhud)
          </h2>
          <p className="text-slate-600 mb-6 text-base">
            After reciting the Salawat al-Ibrahimiyyah in the final Tashahhud,
            it is highly recommended to seek refuge in Allah and make other
            supplications before concluding the prayer with Tasleem. Here are
            several authentic Du'as:
          </p>
          {duasBeforeTasleem.map((dua, index) => (
            <Card key={index} className="mb-4 bg-white shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold text-slate-800">
                  {/* Using a generic title if needed, or specific if provided */}
                  Supplication {index + 1}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                {dua.arabicText && (
                  <div className="mb-3 mt-2 border-l-4 border-sky-500 pl-3 py-1">
                    <h4 className="text-sky-700 font-medium mb-1 flex items-center text-sm">
                      <span className="mr-2">🔤</span> Arabic:
                    </h4>
                    <p className="text-xl text-right font-arabic leading-relaxed whitespace-pre-line text-slate-800">
                      {dua.arabicText}
                    </p>
                  </div>
                )}
                {dua.transliteration && (
                  <div className="mb-3 border-l-4 border-purple-500 pl-3 py-1">
                    <h4 className="text-purple-700 font-medium mb-1 flex items-center text-sm">
                      <span className="mr-2">🔄</span> Transliteration:
                    </h4>
                    <p className="text-base italic whitespace-pre-line text-slate-600">
                      {dua.transliteration}
                    </p>
                  </div>
                )}
                {dua.translation && (
                  <div className="mb-3 border-l-4 border-emerald-500 pl-3 py-1">
                    <h4 className="text-emerald-700 font-medium mb-1 flex items-center text-sm">
                      <span className="mr-2">🌍</span> Translation:
                    </h4>
                    <p className="text-base whitespace-pre-line text-slate-600">
                      {dua.translation}
                    </p>
                  </div>
                )}
                {dua.reference && (
                  <p className="text-xs text-slate-500 mt-2">
                    <span className="font-semibold">Reference:</span>{" "}
                    {dua.reference}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </section>
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-700 mb-6 pb-2 border-b-2 border-emerald-200">
            IV. Tips for Enhancing Khushu' (Humility & Concentration) in Salah
          </h2>
          <div className="space-y-6">
            {khushuTips.map((tip, index) => (
              <Card key={index} className="bg-white shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold text-slate-800">
                    {tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 whitespace-pre-line text-base">
                    {tip.description}
                  </p>
                  {tip.reference && (
                    <p className="text-xs text-slate-500 mt-3 pt-2 border-t border-slate-100">
                      <span className="font-semibold">Reference/Note:</span>{" "}
                      {tip.reference}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* MadhabPrayerGuide can be added here if needed
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <MadhabPrayerGuide />
        </motion.div>
        */}
        {!isDocument && (
          <footer className="text-center mt-16 mb-8 text-slate-500 text-sm">
            <p>
              This guide is for informational purposes. For detailed Fiqh
              rulings, please consult a knowledgeable scholar.
            </p>
            <p>
              May Allah accept our prayers. Made with ❤️ to help Muslims pray.
            </p>
          </footer>
        )}
      </div>
    </div>
  );
};

// Reminder: Ensure you have a good Arabic font (e.g., 'font-arabic')
// configured in your tailwind.config.js (plugins section usually).
// For example, in tailwind.config.js:
// theme: {
//   extend: {
//     fontFamily: {
//       'arabic': ['Noto Naskh Arabic', 'serif'], // Add your preferred Arabic font
//     },
//   },
// },

// The MadhabPrayerGuide component would be imported and used if its content is distinct
// and pertains to Madhab-specific details not covered in this general guide.
