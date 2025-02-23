"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Info } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";

function IslamicGuidance() {
  const [theme] = useState("light");

  return (
    <div className="grid md:grid-cols-2 w-full gap-4">
      {/* Core Concepts */}
      <MagicCard
        className="relative overflow-hidden shadow-none border flex flex-col w-full"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <div className="flex justify-between p-6 w-full">
          <p className="text-3xl">Core Concepts</p>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Copy />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Info />
            </Button>
          </div>
        </div>
        <CardContent>
          <ul className="text-sm text-gray-600 dark:text-gray-400  space-y-4">
            <li>
              <strong className="text-xl">Who is Allah:</strong>
              <br />
              Exploring the attributes and names of Allah
            </li>
            <li>
              <strong className="text-xl">Tawheed:</strong>
              <br />
              The practical understanding of God&apos;s oneness in worship and
              daily life
            </li>
            <li>
              <strong className="text-xl">Religions:</strong>
              <br />
              Understanding Islam&apos;s relationship to other faiths
            </li>
            <li>
              <strong className="text-xl">Quran:</strong>
              <br />
              The central scripture of Islam - its revelation, compilation and
              guidance
            </li>
            <li>
              <strong className="text-xl">Prophet:</strong>
              <br />
              The role of Prophet Muhammad (peace be upon him) as the final
              messenger
            </li>
          </ul>
        </CardContent>
      </MagicCard>

      {/* Degrees of Religion */}
      <MagicCard
        className="relative overflow-hidden shadow-none border flex flex-col w-full"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <div className="flex justify-between p-6 w-full">
          <p className="text-3xl">Degrees of Religion</p>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Copy />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Info />
            </Button>
          </div>
        </div>
        <CardContent>
          <ul className="text-sm text-gray-600 dark:text-gray-400  space-y-4">
            <li>
              <strong className="text-xl">Islam:</strong>
              <br />
              Outward submission through practice and ritual
            </li>
            <li>
              <strong className="text-xl">Imaan:</strong>
              <br />
              Inner faith and conviction in the heart
            </li>
            <li>
              <strong className="text-xl">Ihsaan:</strong>
              <br />
              Excellence in worship with complete mindfulness of Allah
            </li>
          </ul>
        </CardContent>
      </MagicCard>

      {/* Pillars & Foundations */}
      <MagicCard
        className="relative overflow-hidden shadow-none border flex flex-col w-full"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <div className="flex justify-between p-6 w-full">
          <p className="text-3xl">Pillars & Foundations</p>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Copy />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Info />
            </Button>
          </div>
        </div>
        <CardContent>
          <ul className="text-sm text-gray-600 dark:text-gray-400  space-y-4">
            <li>
              <strong className="text-xl">Five Pillars of Islam:</strong>
              <br />
              Shahada (Declaration of Faith)
              <br />
              Salah (Prayer)
              <br />
              Zakat (Obligatory Charity)
              <br />
              Sawm (Fasting)
              <br />
              Hajj (Pilgrimage)
            </li>
            <li>
              <strong className="text-xl">Six Pillars of Iman:</strong>
              <br />
              Belief in Allah
              <br />
              Belief in His Angels
              <br />
              Belief in His Books
              <br />
              Belief in His Messengers
              <br />
              Belief in the Day of Judgment
              <br />
              Belief in Divine Decree
            </li>
          </ul>
        </CardContent>
      </MagicCard>

      {/* Spiritual Mountain */}
      <MagicCard
        className="relative overflow-hidden shadow-none border flex flex-col w-full"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <div className="flex justify-between p-6 w-full">
          <p className="text-3xl">Spiritual Mountain</p>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Copy />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Info />
            </Button>
          </div>
        </div>
        <CardContent>
          <ul className="text-sm text-gray-600 dark:text-gray-400  space-y-4">
            <li>
              <strong className="text-xl">Quran:</strong>
              <br />
              Study and recitation of the divine revelation
            </li>
            <li>
              <strong className="text-xl">Tafsīr:</strong>
              <br />
              Interpretation and explanation of Quranic verses
            </li>
            <li>
              <strong className="text-xl">Tajwīd:</strong>
              <br />
              Proper pronunciation and recitation of the Quran
            </li>
            <li>
              <strong className="text-xl">Ḥadith:</strong>
              <br />
              Study of the Prophet&apos;s sayings and traditions
            </li>
            <li>
              <strong className="text-xl">Sīrah:</strong>
              <br />
              Biography and life events of Prophet Muhammad
            </li>
            <li>
              <strong className="text-xl">Aqīdah:</strong>
              <br />
              Islamic creed and doctrines of faith
            </li>
            <li>
              <strong className="text-xl">Sharīʿah:</strong>
              <br />
              Divine law guiding human conduct
            </li>
            <li>
              <strong className="text-xl">Fiqh:</strong>
              <br />
              Islamic jurisprudence and practical application of Shariah
            </li>
            <li>
              <strong className="text-xl">Nafs:</strong>
              <br />
              Purification of the soul and spiritual development
            </li>
          </ul>
        </CardContent>
      </MagicCard>

      {/* Categories of Actions */}
      <MagicCard
        className="relative overflow-hidden shadow-none border flex flex-col w-full"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <div className="flex justify-between p-6 w-full">
          <p className="text-3xl">Categories of Actions</p>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Copy />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Info />
            </Button>
          </div>
        </div>
        <CardContent>
          <ul className="text-sm text-gray-600 dark:text-gray-400  space-y-4">
            <li>
              <strong className="text-xl">Obligatory (Farḍ/Wājib):</strong>
              <br />
              Actions required of every Muslim
            </li>
            <li>
              <strong className="text-xl">
                Recommended (Mustaḥabb/Mandūb):
              </strong>
              <br />
              Encouraged but not mandatory actions
            </li>
            <li>
              <strong className="text-xl">Permissible (Ḥalāl/Mubāḥ):</strong>
              <br />
              Neutral actions with no religious consequence
            </li>
            <li>
              <strong className="text-xl">Discouraged (Makrūh):</strong>
              <br />
              Actions better to avoid but not sinful
            </li>
            <li>
              <strong className="text-xl">Forbidden (Ḥarām):</strong>
              <br />
              Prohibited actions in Islam
            </li>
          </ul>
        </CardContent>
      </MagicCard>

      {/* Spiritual Practices */}
      <MagicCard
        className="relative overflow-hidden shadow-none border flex flex-col w-full"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <div className="flex justify-between p-6 w-full">
          <p className="text-3xl">Spiritual Practices</p>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Copy />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Info />
            </Button>
          </div>
        </div>
        <CardContent>
          <ul className="text-sm text-gray-600 dark:text-gray-400  space-y-4">
            <li>
              <strong className="text-xl">Dhikr and Dua:</strong>
              <br />
              Remembrance of Allah and supplication to soften the heart
            </li>
            <li>
              <strong className="text-xl">Mercy & Forgiveness:</strong>
              <br />
              Understanding Allah&apos;s infinite mercy and love for His
              servants
            </li>
            <li>
              <strong className="text-xl">Seeking Forgiveness:</strong>
              <br />
              The importance of Istighfar (asking Allah for forgiveness)
            </li>
            <li>
              <strong className="text-xl">Gratitude to Allah:</strong>
              <br />
              Developing shukr (thankfulness) for all blessings
            </li>
          </ul>
        </CardContent>
      </MagicCard>
    </div>
  );
}

export default IslamicGuidance;
