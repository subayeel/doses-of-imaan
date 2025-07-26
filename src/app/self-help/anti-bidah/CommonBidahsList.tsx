/* eslint-disable react/no-unescaped-entities */
import React from "react";

interface BidahListItem {
  id: number;
  description: string;
  explanation?: string;
  reference?: string;
}

const commonBidahs: BidahListItem[] = [
  {
    id: 1,
    description: "Saying Iqamah in the left ear of a new born.",
    explanation: "The sunnah is to say the azaan in the right ear alone.",
  },
  {
    id: 2,
    description: "Celebrating Shabe-ba'rat (15th of Shaban).",
  },
  {
    id: 3,
    description: "Celebrating the night of ascension (mi'raj) (27th of Rajab).",
  },
  {
    id: 4,
    description: "Celebrating Mawlid (Birthday of the Prophet PBUH).",
  },
  {
    id: 5,
    description:
      "Mourning on the 3rd, 10th, 40th and on the yearly death anniversary of the deceased.",
  },
  {
    id: 6,
    description:
      "Doing tasbeeh (Subhan Allah), tahleel (la ilaha illal la) and tamheed (Alhamduliah) on stone, pebbles or the likes and doing so in a group.",
  },
  {
    id: 7,
    description:
      "Reciting quran for the sake of benefiting the deceased with the reward of what is recited.",
    explanation:
      "This includes reciting quran as group by hiring people or inviting relatives, blowing over the food after recitation, and sharing that food with people on the death anniversary of a person.",
  },
  {
    id: 8,
    description: "Making group dua right after the funeral prayer.",
  },
  {
    id: 9,
    description: "Praying four rakat before the fard of jummah prayers.",
  },
  {
    id: 10,
    description: "Making group dua at the end of each salah.",
    explanation:
      "We cannot find any reference where after each salah the Prophet would make a dua and the sahaba will repeat ameen after him. Post salah zikr and Individual duas are found in the authentic narrations.",
  },
  {
    id: 11,
    description:
      "Making group chanting of kalmiatu ikhlas at the end of each salah.",
    explanation:
      "Sunnah is to say Allahu Akbar, Astagfirullah x 3, and other masnoon duas, including kalima on personal basis.",
  },
  {
    id: 12,
    description:
      "Doing a total of three khutbahs for Jumma. One in urdu and two in Arabic.",
  },
  {
    id: 13,
    description: "Celebrating Urs (yearly festival) of saints.",
  },
  {
    id: 14,
    description: "Sacrificing animals in the name of saints.",
  },
  {
    id: 15,
    description:
      "Praying or supplicating to the dead, the saints, or anyone else besides Allah.",
    explanation: "This includes slogans like Ya Ali, Ya Hussain and the likes.",
  },
  {
    id: 16,
    description:
      "Making up for missed salahs that were missed during the state of being a child or a non-muslim.",
  },
  {
    id: 17,
    description:
      "Believing in or using lucky charms, amulets, and soothsayers (najomis).",
  },
  {
    id: 18,
    description: "Saying out loud the intention for prayer.",
  },
  {
    id: 19,
    description:
      "Making monuments on graves. Making solid graves (through brick and stones).",
  },
  {
    id: 20,
    description:
      "Mourning the first ten days of Muharam by not having marriage ceremonies or by mourning the martyrs of Karbala.",
  },
  {
    id: 21,
    description: "Doing a khutbah before eid prayers.",
  },
  {
    id: 22,
    description: "Praying eid prayers in a manner not found in the ahadith.",
  },
  {
    id: 23,
    description: "Believing that Allah is everywhere.",
    explanation:
      "Numerous verses from the Quran and narrations from hadith clearly mention that Allah is above His throne. e-g, Surah Taha, Verse 5.",
  },
  {
    id: 24,
    description:
      "Believing that Allah is without image and is formless and/or disbelieving in His attributes.",
    explanation:
      "We find certain physical attributes of Allah in Quran and Sunnah. Those physical attributes are not like anything we can compare to and are such that they suite Him accordingly. For example, we know from Quran & Sunnah that Allah has hands, eyes, shin but all of these cannot be compared to anything else that has been created.",
  },
  {
    id: 25,
    description:
      "Believing in the sufi methodology of tarikat, abdaals, and such.",
    explanation:
      "These believes have no basis in sharia. Search for 'abdal' on wikipedia for a general understanding of this concept.",
  },
  {
    id: 26,
    description:
      "Shaking hands with the one on the left and right after finishing every salah.",
  },
  {
    id: 27,
    description: "Kissing thumbs upon hearing the name of the Prophet (PBUH).",
  },
  {
    id: 28,
    description: "Visiting shrines of the saints.",
  },
  {
    id: 29,
    description:
      "Sending salam on the Prophet (PBUH) out loud and as a group after every salah, especially after salatul jummah like done by the Barelvi community.",
  },
  {
    id: 30,
    description:
      "Wiping the hands on the back of the neck while doing ablution (wudu).",
    explanation: "This practice cannot be found in the authentic ahadith.",
  },
  {
    id: 31,
    description:
      "Looking up and pointing towards the sky while reciting the shahada (testimony of faith) after completion of wudu.",
    explanation: "Only reciting the shahada is from the sunnah.",
  },
  {
    id: 32,
    description: "Praying salatul tasbeeh.",
    explanation: "No authentic hadith talks about this kind of prayer.",
  },
  {
    id: 33,
    description: "Praying nawafil on eid day before eid prayers.",
  },
  {
    id: 34,
    description:
      "Believing that there are Prophets or messengers after Muhammad (PBUH).",
  },
  {
    id: 35,
    description:
      "Believing that saints, prophets, or other people share characteristics of Allah or have special independent powers from Allah.",
    explanation:
      "Such as believing that saints can give life, or that they hold keys to the material treasures of heaven and earth. This includes believing that the Prophet (PBUH) had complete and absolute Knowledge of the unseen.",
  },
  {
    id: 36,
    description:
      "Belief that the Prophet was created from the Noor (light) of Allah.",
  },
  {
    id: 37,
    description:
      "Believing that the whole world and everything in it was created for Prophet Muhammad (PBUH).",
    reference: "Refer to Quran 51:56♦",
  },
  {
    id: 38,
    description:
      "Believing that those who achieve the high level of righteousness through piety (like saints) no longer need to follow the guidelines of the sharia.",
  },
  {
    id: 39,
    description: "Exaggeration in praising of the good people.",
  },
  {
    id: 40,
    description:
      "Reciting Naats (Nasheeds/Praises) of the Prophet (PBUH) by using musical instruments or techniques which resemble songs and music.",
    explanation:
      "This includes the field of Qawali as found abundantly in Indo-Pakistan region.",
  },
  {
    id: 41,
    description:
      "Learning religion for the sole purpose of earning this world.",
  },
  {
    id: 42,
    description: "The concept of taqleed.",
    explanation:
      "Choosing an imam and sticking with his rulings alone in all the matters of the deen.",
  },
  {
    id: 43,
    description:
      "Separating religious matters from worldly matters like the Christian did with segregation of state and church.",
  },
  {
    id: 44,
    description:
      "Indulging in magic, soothsayers, palmists, astrologists and numerologists, whether you believe them or not.",
  },
  {
    id: 45,
    description:
      "Sending blessings on the Prophet (PBUH) out loud before making each azan.",
  },
  {
    id: 46,
    description:
      "Asking some one else to do istikahra for oneself. Paying some one to do Istikhara.",
  },
  {
    id: 47,
    description:
      "Washing the limbs more than three times during wudu (ablution).",
  },
  {
    id: 48,
    description:
      "Believing that only a black sheep can be given as sadaqa (charity).",
  },
  {
    id: 49,
    description:
      "Believing that black color is associated with mourning, bad news, and sadness.",
  },
  {
    id: 50,
    description:
      "Believing that the Prophet (PBUH) is everywhere and/or that he attends certain gatherings of 'remembrance'.",
  },
  {
    id: 51,
    description:
      "Believing that talking during making wudu (ablution) or smiling/laughing while with wudu invalidates the ablution.",
  },
  {
    id: 52,
    description: "Believing in the altered concept of tawassul.",
    explanation:
      "For example, making dua to Allah that he grants you something by the name of His Prophet (PBUH).",
  },
];

const CommonBidahsList: React.FC = () => {
  return (
    <div className="my-12 p-8 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10 border-l-4 border-red-500 dark:border-red-400 rounded-lg shadow-md">
      <div className="flex items-start gap-4 mb-6">
        <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
          <svg
            className="w-6 h-6 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl  font-bold text-red-700 dark:text-red-300 mb-2">
            Examples of Commonly Practiced Bid'ah (Innovations)
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            The following list includes examples of actions and beliefs that are
            considered Bid'ah (reprehensible innovations) in Islam, as they lack
            a basis in the Quran and the authentic Sunnah of the Prophet
            Muhammad (Peace Be Upon Him).
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Important Note:
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          It is crucial for us Muslims to adhere strictly to the teachings
          validated by the primary sources of Islamic law - the Quran and
          Sunnah. These examples serve as guidance to help identify practices
          that may contradict authentic Islamic teachings.
        </p>
      </div>

      <div className="grid gap-4 mb-8">
        {commonBidahs.map((bidah) => (
          <div
            key={bidah.id}
            className="p-5 bg-white dark:bg-gray-800 rounded-lg border border-red-200 dark:border-red-800 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                {bidah.id}
              </span>
              <div className="flex-1">
                <p className="text-red-800 dark:text-red-200 font-medium leading-relaxed">
                  {bidah.description}
                </p>
                {bidah.explanation && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 italic border-l-2 border-gray-300 dark:border-gray-600 pl-4">
                    Explanation: {bidah.explanation}
                  </p>
                )}
                {bidah.reference && (
                  <p className="text-sm text-blue-600 dark:text-blue-400 mt-2 font-medium">
                    {bidah.reference}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-300 dark:border-amber-700 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
              Important Disclaimer:
            </h4>
            <p className="text-amber-800 dark:text-amber-200 leading-relaxed">
              <strong>This list is not exhaustive.</strong> The principle is
              that any act of worship or religious belief not sanctioned by the
              Quran or authentic Sunnah is to be avoided. Muslims should strive
              to learn their religion from authentic sources and consult with
              knowledgeable scholars who adhere to the Quran and Sunnah.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonBidahsList;
