/* eslint-disable react/no-unescaped-entities */
import React from "react";

function LearnQuran() {
  return (
    <div className="flex flex-col items-center mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-primary mb-4">
        Learn to Recite Quran
      </h1>

      <div className="bg-white p-4 rounded-lg shadow-sm w-full mb-6">
        <p className="text-gray-700 mb-4">
          Master Quranic recitation in under 60 minutes with this comprehensive
          tutorial. Follow along with expert guidance to improve your tajweed
          and pronunciation.
        </p>

        <div className="relative w-full pt-0 pb-0 overflow-hidden rounded-lg shadow-lg">
          <div className="h-[400px]">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/_ij_J1bgctg"
              title="Learn to recite QURAN in under 60 mins"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="w-full bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-green-700 mb-3">
          Benefits of Learning Quran
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Understand the beautiful message of the Quran</li>
          <li>Improve your connection with Allah</li>
          <li>Learn proper pronunciation and tajweed</li>
          <li>Develop a daily recitation practice</li>
        </ul>
      </div>

      <footer className="mt-8 text-center text-gray-500 text-sm">
        "Indeed, it is We who sent down the Quran and indeed, We will be its
        guardian." [Quran 15:9]
      </footer>
    </div>
  );
}

export default LearnQuran;
