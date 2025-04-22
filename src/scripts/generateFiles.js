const fs = require("fs");
const path = require("path");

const solutions = [
  {
    title: "1. Stress & Anxiety",
    quranRef: "13:28",
    quranText: "Verily, in the remembrance of Allah do hearts find rest.",
    hadithRef: "Muslim",
    hadithText:
      "How wonderful is the affair of the believer! All his affairs are good. If something good happens to him, he is grateful, and that is good for him. If something bad happens, he is patient, and that is good for him.",
    implementation: [
      "Salah (prayer), dhikr (remembrance of Allah), and dua (supplication) reduce stress",
      "Tawakkul (trust in Allah) prevents excessive worry",
    ],
    bgColor: "bg-blue-50",
  },
  {
    title: "2. Obesity & Unhealthy Eating",
    quranRef: "7:31",
    quranText:
      "Eat and drink, but be not excessive. Indeed, He likes not those who commit excess.",
    hadithRef: "Tirmidhi",
    hadithText:
      "The son of Adam fills no vessel worse than his stomach. Sufficient for him are a few morsels to keep his back straight. If he must eat more, then a third for food, a third for drink, and a third for air.",
    implementation: [
      "Moderation in eating, avoiding junk food",
      "Encouragement of physical activity",
    ],
    bgColor: "bg-green-50",
  },
  {
    title: "3. Work-Life Balance",
    quranRef: "28:77",
    quranText:
      "And seek the Hereafter by what Allah has given you, without neglecting your share of this world.",
    hadithRef: "Hakim",
    hadithText:
      "Take benefit of five before five: Your youth before old age, your health before sickness, your wealth before poverty, your free time before preoccupation, and your life before death.",
    implementation: [
      "Fixed prayer times structure the day",
      "Prohibition of overworking (rights of workers, rest periods)",
    ],
    bgColor: "bg-yellow-50",
  },
  {
    title: "4. Social Media Addiction",
    quranRef: "17:36",
    quranText:
      "And do not follow what you have no knowledge of. Indeed, the hearing, the sight, and the heart—all of these will be questioned.",
    hadithRef: "Tirmidhi",
    hadithText:
      "Part of a person's good Islam is leaving what does not concern him.",
    implementation: [
      "Time discipline—avoiding useless scrolling",
      "Encouraging real social interactions (visiting family, neighbors)",
    ],
    bgColor: "bg-purple-50",
  },
  {
    title: "5. Intoxication (Drugs/Alcohol)",
    quranRef: "5:90",
    quranText:
      "O you who believe! Intoxicants, gambling, idolatry, and divination are but defilement from the work of Satan, so avoid them so that you may be successful.",
    hadithRef: "Muslim",
    hadithText:
      "Every intoxicant is Khamr (forbidden), and every intoxicant is Haram.",
    implementation: [
      "Complete prohibition of drugs/alcohol",
      "Rehabilitation through faith-based programs",
    ],
    bgColor: "bg-red-50",
  },
  {
    title: "6. Rise in Divorces",
    quranRef: "4:19",
    quranText:
      "And live with them in kindness. For if you dislike them, perhaps you dislike something in which Allah has placed much good.",
    hadithRef: "Tirmidhi",
    hadithText: "The best of you are those who are best to their wives.",
    implementation: [
      "Marriage counseling (Sulh) before divorce",
      "Clear rights & responsibilities for spouses",
    ],
    bgColor: "bg-pink-50",
  },
  {
    title: "7. Fall in Birth Rate",
    quranRef: "18:46",
    quranText: "Wealth and children are the adornment of this worldly life.",
    hadithRef: "Abu Dawud",
    hadithText:
      "Marry the fertile and loving, for I will be proud of your numbers on the Day of Judgment.",
    implementation: [
      "Encouragement of marriage & children",
      "Social support systems (family, community help)",
    ],
    bgColor: "bg-indigo-50",
  },
  {
    title: "8. Decreasing Family Values",
    quranRef: "29:8",
    quranText: "And We have enjoined upon man goodness to parents.",
    hadithRef: "Bukhari",
    hadithText: "He who does not show mercy will not be shown mercy.",
    implementation: [
      "Respect for parents, elders, and relatives",
      "Strong community bonds (Ummah)",
    ],
    bgColor: "bg-orange-50",
  },
  {
    title: "9. Wealth Inequality",
    quranRef: "70:24-25",
    quranText:
      "And in their wealth is a recognized right for the needy and the deprived.",
    hadithRef: "Bukhari",
    hadithText: "The upper hand (giver) is better than the lower hand (taker).",
    implementation: [
      "Zakat (2.5% wealth tax) & Sadaqah (charity)",
      "Prohibition of hoarding wealth",
    ],
    bgColor: "bg-emerald-50",
  },
  {
    title: "10. Loan & Debt Crisis",
    quranRef: "2:275",
    quranText: "Allah has permitted trade and forbidden interest.",
    hadithRef: "Muslim",
    hadithText:
      "The one who eases a debtor's difficulty, Allah will ease his in this world and the next.",
    implementation: [
      "Interest-free (Riba-free) economy",
      "Debt forgiveness & Qard Hasan (benevolent loans)",
    ],
    bgColor: "bg-cyan-50",
  },
  {
    title: "11. Inflation & Economic Crises",
    quranRef: "2:188",
    quranText: "Do not consume one another's wealth unjustly.",
    hadithRef: "Bukhari",
    hadithText:
      "The seller and buyer have the right to keep or return goods as long as they have not parted.",
    implementation: [
      "Anti-monopoly laws (Prohibition of Ihtikar)",
      "Fair pricing & market regulation",
    ],
    bgColor: "bg-blue-50",
  },
  {
    title: "12. Racism & Discrimination",
    quranRef: "49:13",
    quranText:
      "O mankind, We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous.",
    hadithRef: "Ahmad",
    hadithText:
      "There is no superiority of an Arab over a non-Arab, nor a white over a black, except by piety.",
    implementation: [
      "Equality before law & in society",
      "Anti-discrimination in employment, marriage, etc.",
    ],
    bgColor: "bg-teal-50",
  },
  {
    title: "13. Crime & Corruption",
    quranRef: "2:188",
    quranText:
      "Do not consume wealth unjustly, nor bribe officials to devour people's wealth sinfully.",
    hadithRef: "Ibn Majah",
    hadithText:
      "The curse of Allah is upon the one who offers a bribe and the one who takes it.",
    implementation: [
      "Hudud (strict punishments) for theft, fraud, etc.",
      "Transparency & accountability in leadership",
    ],
    bgColor: "bg-amber-50",
  },
  {
    title: "14. Declining Moral Values",
    quranRef: "16:90",
    quranText:
      "Indeed, Allah commands justice, good conduct, and giving to relatives, and forbids immorality, bad conduct, and oppression.",
    hadithRef: "Ahmad",
    hadithText: "I was sent to perfect good character.",
    implementation: [
      "Moral education (Tarbiyah) from childhood",
      "Encouraging modesty, honesty, and kindness",
    ],
    bgColor: "bg-lime-50",
  },
  {
    title: "15. Political Instability & Conflicts",
    quranRef: "49:9",
    quranText:
      "And if two factions of believers fight, make peace between them.",
    hadithRef: "Bayhaqi",
    hadithText: "The leader of a people is their servant.",
    implementation: [
      "Shura (consultation) in governance",
      "Justice-based foreign policy (no aggression)",
    ],
    bgColor: "bg-rose-50",
  },
  {
    title: "16. Mental Health Crisis",
    quranRef: "2:286",
    quranText: "Allah does not burden a soul beyond that it can bear.",
    hadithRef: "Bukhari",
    hadithText:
      "No fatigue, illness, anxiety, sorrow, or harm befalls a believer, even if it were the prick of a thorn, but that Allah expiates some of his sins.",
    implementation: [
      "Spiritual healing (Quran recitation, prayer)",
      "Community support (visiting the sick, counseling)",
    ],
    bgColor: "bg-violet-50",
  },
  {
    title: "17. Climate Change & Environment",
    quranRef: "7:56",
    quranText:
      "Do not cause corruption on the earth after it has been set right.",
    hadithRef: "Ahmad",
    hadithText:
      "If the Hour comes while one of you is holding a sapling, let him plant it.",
    implementation: [
      "Conservation of water, trees, and wildlife",
      "Sustainable urban planning (Islamic cities were eco-friendly)",
    ],
    bgColor: "bg-green-50",
  },
  {
    title: "18. Job Insecurity & Automation",
    quranRef: "65:2-3",
    quranText:
      "And whoever fears Allah, He will make a way out for him and provide for him from where he does not expect.",
    hadithRef: "Bukhari",
    hadithText: "No one eats better food than that earned by his own hands.",
    implementation: [
      "Encouragement of skill development (Ilm)",
      "Microfinance & Islamic cooperative economics",
    ],
    bgColor: "bg-blue-50",
  },
  {
    title: "19. Digital Privacy Concerns",
    quranRef: "49:12",
    quranText: "Do not spy or backbite one another.",
    hadithRef: "Muslim",
    hadithText:
      "Whoever covers the faults of a Muslim, Allah will cover his faults in this life and the Hereafter.",
    implementation: [
      "Prohibition of unauthorized surveillance",
      "Ethical use of technology (avoiding gossip, hacking)",
    ],
    bgColor: "bg-indigo-50",
  },
  {
    title: "20. Pandemic & Health Threats",
    quranRef: "2:195",
    quranText: "Do not throw yourselves into destruction.",
    hadithRef: "Bukhari",
    hadithText:
      "If you hear of an outbreak of plague in a land, do not enter it; if it breaks out in a land where you are, do not leave.",
    implementation: [
      "Quarantine laws (Isolation for public safety)",
      "Cleanliness (Wudu, Sunnah hygiene practices)",
    ],
    bgColor: "bg-red-50",
  },
  {
    title: "21. Housing Affordability Crisis",
    quranRef: "33:6",
    quranText: "And provide them with housing.",
    hadithRef: "Bukhari",
    hadithText:
      "Whoever builds a masjid for Allah, Allah will build for him a house in Paradise.",
    implementation: [
      "Waqf (endowment) properties for affordable housing",
      "Prohibition of real estate monopolies",
    ],
    bgColor: "bg-yellow-50",
  },
  {
    title: "22. Education Inequality",
    quranRef: "96:1",
    quranText: "Read in the name of your Lord who created.",
    hadithRef: "Ibn Majah",
    hadithText: "Seeking knowledge is obligatory upon every Muslim.",
    implementation: [
      "Free education (as in historic Islamic madrasas)",
      "Encouragement of scholarships & literacy programs",
    ],
    bgColor: "bg-cyan-50",
  },
  {
    title: "23. Technological Addiction",
    quranRef: "17:37",
    quranText: "And do not walk arrogantly upon the earth.",
    hadithRef: "Tirmidhi",
    hadithText:
      "The two feet of a servant will not move on the Day of Judgment until he is asked about his time and how he spent it.",
    implementation: [
      "Self-discipline (avoiding excessive entertainment)",
      "Productive use of tech (e.g., Islamic apps, e-learning)",
    ],
    bgColor: "bg-purple-50",
  },
  {
    title: "24. Political Polarization",
    quranRef: "3:103",
    quranText: "Hold firmly to the rope of Allah and do not be divided.",
    hadithRef: "Bukhari",
    hadithText:
      "A believer to another believer is like a building whose different parts strengthen each other.",
    implementation: [
      "Unity based on Islamic brotherhood (Ummah)",
      "Constructive debate (without slander or extremism)",
    ],
    bgColor: "bg-emerald-50",
  },
];

const createFiles = () => {
  solutions.forEach((solution) => {
    const folderName = solution.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    const folderPath = path.join(
      __dirname,
      "../app/self-help/modern-problem",
      folderName
    );

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    const filePath = path.join(folderPath, "page.tsx");
    const componentName = folderName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");

    const content = `import React from "react";

export default function ${componentName}() {
  return <div>${solution.title}</div>;
}
`;

    fs.writeFileSync(filePath, content, "utf8");
  });

  console.log("✅ Pages created!");
};

createFiles();
