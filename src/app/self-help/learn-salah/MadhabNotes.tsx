"use client";
import { madhabNotes } from "@/data/constant";
import { useState } from "react";

export default function MadhabPrayerGuide() {
  const [activeMadhab, setActiveMadhab] = useState<
    "hanafi" | "maliki" | "shafii" | "hanbali"
  >("shafii");

  type Madhab = {
    name: string;
    color: string;
  };

  const madhabs: Record<string, Madhab> = {
    hanafi: { name: "Hanafi", color: "bg-emerald-500" },
    maliki: { name: "Maliki", color: "bg-blue-500" },
    shafii: { name: "Shafi'i", color: "bg-purple-500" },
    hanbali: { name: "Hanbali", color: "bg-amber-500" },
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Salah Prayer Guide by Madhab
        </h1>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="grid grid-cols-4 border-b">
            {Object.entries(madhabs).map(([key, { name, color }]) => (
              <button
                key={key}
                className={`py-4 text-center font-medium transition-colors ${
                  activeMadhab === key
                    ? `${color} text-white`
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() =>
                  setActiveMadhab(
                    key as "hanafi" | "maliki" | "shafii" | "hanbali"
                  )
                }
              >
                {name}
              </button>
            ))}
          </div>

          <div className="p-6">
            <div className="flex items-center mb-6">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${madhabs[activeMadhab].color}`}
              >
                <span className="text-white text-xl font-bold">
                  {madhabs[activeMadhab].name.charAt(0)}
                </span>
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-gray-800">
                {madhabs[activeMadhab].name} Madhab
              </h2>
            </div>

            <ul className="space-y-4">
              {madhabNotes[activeMadhab].map((note, index) => (
                <li
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 flex items-start"
                >
                  <span className="text-lg mr-2">{note.substring(0, 1)}</span>
                  <span className="text-gray-800">{note.substring(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-3">
            About the Madhabs
          </h3>
          <p className="text-gray-600 mb-4">
            The four madhabs (schools of thought) in Sunni Islam offer slightly
            different interpretations of how to perform salah (prayer) based on
            their understanding of the Sunnah and scholarly tradition.
          </p>
          <p className="text-gray-600">
            Each madhab is valid to follow, and differences in practice reflect
            the richness of Islamic scholarship rather than contradictions in
            the religion itself.
          </p>
        </div>
      </div>
    </div>
  );
}
