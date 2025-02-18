import React from "react";
import mountain from "../../../public/mountain.png";
import sky from "../../../public/sky.png";
import river from "../../../public/river.png";
import trees from "../../../public/trees.png";
import sunset from "../../../public/sunset.png";
import Image from "next/image";

const Page = () => {
  // Function to randomly decide image position
  const getRandomPosition = () => (Math.random() > 0.5 ? "right" : "left");

  const sections = [
    {
      id: "g",
      title: "God's Existence",
      content: [
        "Design Argument: Like a phone made of oil and sand couldn't form randomly, the universe's complexity points to a designer.",
        "Order in Universe: Fine-tuned conditions for life (Earth's rotation, habitable zone, atmosphere) suggest intelligent design.",
        "Everything has a cause: The universe couldn't come from nothing or create itself, pointing to a Creator.",
      ],
      position: "top-20 left-20",
      image: mountain,
      imagePosition: "right",
    },
    {
      id: "o",
      title: "God's Oneness",
      content: [
        "Creator must be different from creation: If Creator was like creation, it would need a creator too.",
        "Cannot have infinite creators: Like an endless chain of people refusing to lift a table, we need an uncaused cause.",
        "One Unique Creator: The Creator must be self-sufficient, eternal, and uncreated.",
      ],
      position: "top-20 right-20",
      image: sky,
      imagePosition: "left",
    },
    {
      id: "r",
      title: "Revelation (Quran)",
      content: [
        "Perfect Preservation: Unchanged text for 1400+ years, memorized by millions globally.",
        "Linguistic Miracle: Unmatched literary excellence, even by master Arab poets.",
        "Universal Message: Teachings align with rational understanding of Creator.",
        "Scientific Harmony: Natural phenomena descriptions align with modern discoveries.",
      ],
      position: "bottom-20 left-20",
      image: river,
      imagePosition: "right",
    },
    {
      id: "p",
      title: "Prophethood",
      content: [
        "Character Analysis: Known as 'The Truthful' even before prophethood.",
        "No Personal Gain: Faced persecution, lived simply, rejected worldly offers.",
        "Complete System: Brought comprehensive life guidance (social, economic, spiritual).",
        "Fulfilled Prophecies: Accurately predicted future events.",
      ],
      position: "bottom-20 right-20",
      image: trees,
      imagePosition: "left",
    },
  ];

  return (
    <div className="relative w-full h-screen ">
      {/* SVG for arrows */}

      {/* Content cards */}
      {sections.map((section) => (
        <div
          key={section.id}
          className={`flex gap-4 items-center ${
            section.imagePosition === "right" ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="w-96  p-6 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-700">
                {section.title}
              </h2>
            </div>
            <ul className="space-y-2">
              {section.content.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-600 leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[280px] rounded-lg overflow-hidden">
            <Image
              src={section.image}
              alt={section.title}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
