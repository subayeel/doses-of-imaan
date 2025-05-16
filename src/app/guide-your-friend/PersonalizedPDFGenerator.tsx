// src/app/guide-your-friend/PersonalizedPDFGenerator.tsx
"use client";

import React, { useEffect, useState } from "react";
import { PDFDocument } from "./PDFDocument"; // Assuming same path

// Import relevant content components
// Make sure these paths are correct relative to this file
import { UnderstandingIslam } from "@/app/religion/islam/UnderstandingIslam";
import { SweetnessOfIman } from "@/app/religion/imaan/SweetnessOfIman";
import { ThreeDimensionsOfFaith } from "@/app/religion/ihsaan/ThreeDimensionsOfFaith";
import { ImmanRecoveryRemedies } from "@/app/self-help/quick-recovery/ImmanRecoveryRemedies";
import { SalahGuide } from "@/app/self-help/learn-salah/SalahGuide";
import { GodExistence } from "@/app/primary/god/GodExistence";
import { GodsOneness } from "@/app/primary/oneness/GodsOneness";
import { NeedForRevelation } from "@/app/primary/revelation/NeedForRevelation";
import { WhyTheQuran } from "@/app/primary/quran/WhyTheQuran";
import { ProphetMuhammad } from "@/app/primary/prophethood/ProphetMuhammad";
import { ProofsForGod } from "@/app/primary/god/philosophy/ProofsForGod";

// Import revert stories collection component
import RevertStoriesCollection from "@/app/components/RevertCollection"; // Assuming this component exists

// Import specific revert stories data (assuming this is in a separate data file)
import {
  SIKHISM_TO_ISLAM,
  PSYCHOLOGY_TO_ISLAM,
  MULTIPLE_FAITH_TO_ISLAM,
  HINDU_TO_ISLAM,
  HINDU_TO_ISLAM_FEMALE,
  HINDU_BRAHMIN_TO_ISLAM,
  CHRISTIANITY_TO_ISLAM,
  FEMALE_CHRISTIANITY_TO_ISLAM,
  CHRISTIANITY_TO_ATHEISM_TO_ISLAM,
  JEWISH_TO_ISLAM,
  // Add other story imports if needed
} from "@/data/revertStories"; // Assuming your stories data is here

import { RevertStory } from "@/utils/types"; // Assuming RevertStory type is exported here

// Define survey response type
interface SurveyResponse {
  name: string;
  religion: string;
  gender: string;
  location: string;
  ageGroup: string;
}

interface PersonalizedPDFGeneratorProps {
  surveyResponse: SurveyResponse;
  onPDFGenerated?: (pdfUrl: string | null) => void; // Notify parent when content is ready
  url: string;
}

const PersonalizedPDFGenerator: React.FC<PersonalizedPDFGeneratorProps> = ({
  surveyResponse,
  onPDFGenerated,
  url,
}) => {
  const [pdfContent, setPdfContent] = useState<React.ReactNode[]>([]);
  const [pdfTitle, setPdfTitle] = useState<string>("");
  const [isContentReady, setIsContentReady] = useState<boolean>(false);

  // Function to get relevant revert stories based on user's background
  const getRelevantRevertStories = (
    religion: string,
    gender: string
  ): RevertStory[] => {
    const lowerReligion = religion.toLowerCase();
    const lowerGender = gender.toLowerCase();

    let relevantStoriesMap: { [key: string]: RevertStory } = {}; // Use a map to avoid duplicate stories

    // Filter stories based on religion and gender
    if (lowerReligion.includes("hindu")) {
      if (lowerGender === "female" && HINDU_TO_ISLAM_FEMALE) {
        relevantStoriesMap = { ...relevantStoriesMap, HINDU_TO_ISLAM_FEMALE };
      } else {
        if (HINDU_TO_ISLAM)
          relevantStoriesMap = { ...relevantStoriesMap, HINDU_TO_ISLAM };
        if (HINDU_BRAHMIN_TO_ISLAM)
          relevantStoriesMap = {
            ...relevantStoriesMap,
            HINDU_BRAHMIN_TO_ISLAM,
          };
      }
    } else if (lowerReligion.includes("christian")) {
      if (lowerGender === "female" && FEMALE_CHRISTIANITY_TO_ISLAM) {
        relevantStoriesMap = {
          ...relevantStoriesMap,
          FEMALE_CHRISTIANITY_TO_ISLAM,
        };
      } else {
        if (CHRISTIANITY_TO_ISLAM)
          relevantStoriesMap = { ...relevantStoriesMap, CHRISTIANITY_TO_ISLAM };
        if (CHRISTIANITY_TO_ATHEISM_TO_ISLAM)
          relevantStoriesMap = {
            ...relevantStoriesMap,
            CHRISTIANITY_TO_ATHEISM_TO_ISLAM,
          };
      }
    } else if (lowerReligion.includes("sikh") && SIKHISM_TO_ISLAM) {
      relevantStoriesMap = { ...relevantStoriesMap, SIKHISM_TO_ISLAM };
    } else if (
      (lowerReligion.includes("jewish") || lowerReligion.includes("judaism")) &&
      JEWISH_TO_ISLAM
    ) {
      relevantStoriesMap = { ...relevantStoriesMap, JEWISH_TO_ISLAM };
    } else if (
      lowerReligion.includes("atheist") ||
      lowerReligion.includes("agnostic")
    ) {
      if (CHRISTIANITY_TO_ATHEISM_TO_ISLAM)
        relevantStoriesMap = {
          ...relevantStoriesMap,
          CHRISTIANITY_TO_ATHEISM_TO_ISLAM,
        };
      if (PSYCHOLOGY_TO_ISLAM)
        relevantStoriesMap = { ...relevantStoriesMap, PSYCHOLOGY_TO_ISLAM };
    }

    // If specific stories are few or none, add some general ones
    // Check actual count of stories added, not just map keys if some imports were null/undefined
    if (
      Object.keys(relevantStoriesMap).length < 2 &&
      !lowerReligion.includes("islam")
    ) {
      if (MULTIPLE_FAITH_TO_ISLAM)
        relevantStoriesMap = { ...relevantStoriesMap, MULTIPLE_FAITH_TO_ISLAM };
      if (lowerGender === "female") {
        // Ensure at least one female story if applicable and few stories found
        if (
          !relevantStoriesMap.FEMALE_CHRISTIANITY_TO_ISLAM &&
          HINDU_TO_ISLAM_FEMALE
        ) {
          relevantStoriesMap = {
            ...relevantStoriesMap,
            HINDU_TO_ISLAM_FEMALE, // Prefer Hindu female story if available
          };
        } else if (
          !relevantStoriesMap.FEMALE_CHRISTIANITY_TO_ISLAM &&
          FEMALE_CHRISTIANITY_TO_ISLAM
        ) {
          relevantStoriesMap = {
            ...relevantStoriesMap,
            FEMALE_CHRISTIANITY_TO_ISLAM,
          }; // Otherwise add Christian female story
        }
      }
    }

    // Convert map back to an array of stories
    return Object.values(relevantStoriesMap);
  };

  // TODO: function to get the solution to relevant modern problem and how Islam Solves the problem as per the gender selected
  const getProblemSolutionContent = (
    gender: string
  ): React.ReactNode | null => {
    // Placeholder: Implement logic here to return relevant components
    // based on gender and potentially other factors (like age group).
    // For example:
    if (gender === "Female") {
      // return <EmpowermentOfWomenInIslam key="women-in-islam" isDocument={true} />;
    } else {
      // return <ResponsibilityOfMenInIslam key="men-in-islam" isDocument={true} />;
    }
    return null; // Return null or empty array if no specific content
  };

  useEffect(() => {
    // This effect runs when surveyResponse changes (i.e., after form submit)
    // Content generation should happen quickly here.
    // The *visual* loading will be during the *PDF generation* on button click.
    const { name, religion, gender, location, ageGroup } = surveyResponse;
    const content: React.ReactNode[] = [];

    // Personalized title
    const personalizedTitle = `Personalized Guide for ${name}`;
    setPdfTitle(personalizedTitle);

    // Add introduction
    content.push(
      <div key="introduction" className="mb-8 print-only mx-4">
        {" "}
        {/* Use print-only class for print media */}
        <h1 className="text-3xl font-bold mb-4 text-primary mt-4 dark:text-gray-50">
          {personalizedTitle}
        </h1>
        <p className="text-lg text-gray-600">
          Dear Reader, this guide has been specially curated for {name} based on
          their background and interests, shared by a caring friend. We hope it
          offers valuable insights and guidance on their spiritual path.
        </p>
      </div>
    );

    // Check if the friend is Muslim or not
    const isMuslim =
      religion.toLowerCase() === "islam" || religion.toLowerCase() === "muslim";

    if (isMuslim) {
      // Content for Muslims - to improve Imaan
      content.push(
        <div key="muslim-content" className="space-y-12">
          {/* Group Muslim content */}
          <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-primary">
            Deepening Faith
          </h2>
          {/* Add key and isDocument prop to your imported components */}
          <UnderstandingIslam key="understanding-islam" isDocument={true} />
          <SweetnessOfIman key="sweetness-of-iman" isDocument={true} />
          <ThreeDimensionsOfFaith key="dimensions-of-faith" isDocument={true} />
          <ImmanRecoveryRemedies key="imman-recovery" isDocument={true} />
          <SalahGuide key="salah-guide" isDocument={true} />
        </div>
      );
    } else {
      // Content for non-Muslims - GORAP approach (God, Oneness, Revelation, Authenticity, Prophethood)
      content.push(
        <div key="non-muslim-content" className="space-y-12">
          {/* Add key and isDocument prop to your imported components */}
          <GodExistence key="god-existence" isDocument={true} />
          <ProofsForGod key="proofs-for-god" isDocument={true} />
          <GodsOneness key="gods-oneness" isDocument={true} />
          <NeedForRevelation key="need-for-revelation" isDocument={true} />
          <WhyTheQuran key="why-quran" isDocument={true} />
          <ProphetMuhammad key="prophet-muhammad" isDocument={true} />
          {/* Add relevant revert stories based on the person's background */}
          {/* Ensure RevertStoriesCollection can accept an array directly */}
          <div key="revert-stories" className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-center mb-4">
              Inspiring Journeys
            </h2>
            <RevertStoriesCollection
              stories={getRelevantRevertStories(religion, gender)} // Pass the array of story data
              isDocument={true}
            />
          </div>
        </div>
      );
    }

    // Add content related to modern problems/solutions based on gender/age (TODO implementation)
    const problemSolutionContent = getProblemSolutionContent(gender);
    if (problemSolutionContent) {
      content.push(
        <div key="problem-solution" className="mt-8 mb-8 space-y-6">
          <h2 className="text-2xl font-bold text-center mb-4">
            Navigating Modern Challenges
          </h2>
          {/* problemSolutionContent could be a single node or an array */}
          {Array.isArray(problemSolutionContent)
            ? problemSolutionContent
            : [problemSolutionContent]}
        </div>
      );
    }

    // Add location-specific content if needed (placeholder for future expansion)
    if (location) {
      content.push(
        <div key="local-resources" className="mt-8 mb-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Connecting Locally</h2>
          <p>
            For more information and to connect with the Muslim community in{" "}
            <span className="font-semibold">{location}</span>, we encourage
            exploring local Islamic centers or mosques.
          </p>
        </div>
      );
    }

    // Add age-appropriate content (placeholder for future expansion)
    if (ageGroup && !isMuslim) {
      // Only add age-specific intro for non-Muslim content
      content.push(
        <div key="age-specific" className="mb-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Guidance for This Life Stage
          </h2>
          <p>
            This guide includes perspectives relevant to individuals in the{" "}
            <span className="font-semibold">{ageGroup}</span> age group.
          </p>
        </div>
      );
    }

    setPdfContent(content);
    setIsContentReady(true); // Mark content as ready to render
    // Signal to the parent that content is ready for display (and potential PDF capture)
    // This happens very quickly after the state is set.
    if (onPDFGenerated) {
      onPDFGenerated("content-rendered"); // Use a sentinel string or null
    }
  }, [surveyResponse, onPDFGenerated]); // Depend on surveyResponse to regenerate content

  if (!isContentReady) {
    // This might flash briefly, but the content should be ready almost instantly
    // after the effect runs without the artificial delay.
    // A simple fallback while content React nodes are being assembled.
    return <div className="text-center p-8">Preparing content preview...</div>;
  }

  return (
    // PDFDocument wraps the generated content and provides the download button
    // isLoading prop here refers to the PDF generation process itself, not content preparation
    <PDFDocument
      title={pdfTitle}
      fileName={`${surveyResponse.name.replace(
        /\s+/g,
        "-"
      )}-spiritual-guide.pdf`}
      url={url}
    >
      {/* Render the dynamically generated content */}
      <div className="border rounded-lg shadow-lg">{pdfContent}</div>
    </PDFDocument>
  );
};

export default PersonalizedPDFGenerator;
