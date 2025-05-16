/* eslint-disable react/no-unescaped-entities */
// src/app/guide-your-friend/IslamicContentSurvey.tsx
"use client";

import React, { useState, useEffect, useCallback, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // Import navigation hooks
import PersonalizedPDFGenerator from "./PersonalizedPDFGenerator"; // Assuming same path
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CardContent, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react"; // Icons for loading, share, copy
import { toast } from "@/hooks/use-toast"; // Assuming you have shadcn toast setup
import { ageGroupOptions, religion } from "@/data/constant";
import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";

interface SurveyFormState {
  name: string;
  religion: string;
  gender: string;
  location: string;
  ageGroup: string;
}

// Helper function to encode survey data for URL
const encodeSurveyData = (data: SurveyFormState): string => {
  try {
    const jsonString = JSON.stringify(data);
    const base64String = btoa(jsonString); // Base64 encode
    return encodeURIComponent(base64String); // URI encode special characters
  } catch (error) {
    console.error("Error encoding survey data:", error);
    return ""; // Return empty string on error
  }
};

// Helper function to decode survey data from URL
const decodeSurveyData = (encodedData: string): SurveyFormState | null => {
  try {
    const uriDecoded = decodeURIComponent(encodedData);
    const base64Decoded = atob(uriDecoded); // Base64 decode
    const data = JSON.parse(base64Decoded);
    // Basic validation to ensure structure
    if (
      data &&
      typeof data.name === "string" &&
      typeof data.religion === "string" &&
      typeof data.gender === "string" &&
      typeof data.location === "string" &&
      typeof data.ageGroup === "string"
    ) {
      return data as SurveyFormState;
    }
    return null; // Return null if validation fails
  } catch (error) {
    console.error("Error decoding survey data:", error);
    return null; // Return null on error
  }
};

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br p-6">
    <div className="text-center">
      <Loader2 className="mx-auto h-12 w-12 text-teal-400 animate-spin" />
      <p className="mt-4 text-xl">Loading personalized journey...</p>
    </div>
  </div>
);

// Main survey component wrapped with Suspense
const IslamicContentSurveyContent: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // Hook to access query params

  const [formData, setFormData] = useState<SurveyFormState>({
    name: "",
    religion: "",
    gender: "",
    location: "",
    ageGroup: "",
  });

  const [isShareLinkView, setIsShareLinkView] = useState(false);
  const [isLoadingInitialData, setIsLoadingInitialData] = useState(true); // State for initial load/decode
  const [shareUrl, setShareUrl] = useState(""); // State to hold the generated share URL

  // Effect to check URL for data on component mount
  useEffect(() => {
    const encodedData = searchParams.get("data");

    if (encodedData) {
      const decodedData = decodeSurveyData(encodedData);
      if (decodedData) {
        setFormData(decodedData); // Populate form data from URL
        setIsShareLinkView(true); // Switch to share link view
        // Construct the full share URL (client-side)
        const origin = window.location.origin;
        const pathname = window.location.pathname;
        setShareUrl(`${origin}${pathname}?data=${encodedData}`);
      } else {
        // Invalid data in URL, redirect to clean form
        console.error("Invalid survey data in URL. Redirecting.");
        router.replace(window.location.pathname); // Remove query params
      }
    }
    setIsLoadingInitialData(false); // Loading complete whether data was found or not
  }, [searchParams, router]); // Depend on searchParams and router

  const handleInputChange = useCallback(
    (name: keyof SurveyFormState, value: string) => {
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  ); // useCallback to memoize

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedData = encodeSurveyData(formData);
    if (encodedData) {
      // Navigate to the same page with data encoded in query param
      router.push(`${window.location.pathname}?data=${encodedData}`);
      // The useEffect will detect the new param and switch to share view
    } else {
      // Handle encoding error, maybe show a toast
      toast({
        title: "Error",
        description: "Could not generate share link. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Render loading state while checking URL
  if (isLoadingInitialData) {
    return <LoadingFallback />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br overflow-hidden relative">
      {/* Futuristic Background Elements */}
      {/* <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-500 rounded-full mix-blend-screen filter blur-xl animate-pulse animation-delay-2000"></div>
      </div> */}

      <div className="p-0 w-full max-w-5xl backdrop-filter backdrop-blur-sm rounded-lg relative z-10 animate-fadeIn">
        <CardContent className="!p-0">
          <CardTitle className="text-3xl font-bold text-center text-primary mt-4">
            {isShareLinkView ? "Your Friend's Personalized Guide" : ""}
          </CardTitle>
          {!isShareLinkView ? (
            // --- Form State ---
            <div className="grid grid-cols-1 md:grid-cols-2">
              <form onSubmit={handleSubmit} className="space-y-6 p-8">
                <CardTitle className="text-4xl tracking-wide leading-0 font-bold text-primary mt-4">
                  Help a Friend on <br></br>Their Spiritual Journey
                </CardTitle>
                <p className="mb-8  text-gray-600">
                  Complete this short survey to generate a personalized
                  spiritual guide tailored for someone you care about and get a
                  shareable link.
                </p>
                <div className="space-y-2">
                  <Label htmlFor="name">Friend's Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    placeholder="John Doe"
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="religion">
                    Friend's Current Religious Affiliation
                  </Label>
                  <Select
                    value={formData.religion}
                    onValueChange={(value) =>
                      handleInputChange("religion", value)
                    }
                    required
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select religion" />
                    </SelectTrigger>
                    <SelectContent>
                      {religion.map((rel) => (
                        <SelectItem key={rel.value} value={rel.value}>
                          {rel.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Friend's Gender</Label>
                  <RadioGroup
                    value={formData.gender}
                    onValueChange={(value) =>
                      handleInputChange("gender", value)
                    }
                    className="flex space-x-4"
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Male" id="gender-male" />
                      <Label htmlFor="gender-male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Female" id="gender-female" />
                      <Label htmlFor="gender-female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Other" id="gender-other" />
                      <Label htmlFor="gender-other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">
                    Friend's Location (City/Country)
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="India"
                    value={formData.location}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ageGroup">Friend's Age Group</Label>
                  <Select
                    value={formData.ageGroup}
                    onValueChange={(value) =>
                      handleInputChange("ageGroup", value)
                    }
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select age group" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 text-white border-gray-700">
                      {ageGroupOptions.map((age) => (
                        <SelectItem key={age.value} value={age.value}>
                          {age.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="mt-8 flex justify-end w-full">
                  <Button type="submit" className="w-full bg-primary">
                    Generate Shareable Guide Link
                  </Button>
                </div>
              </form>

              <div className="w-ful h-full hidden md:flex">
                <Image
                  src={"/help-friend.png"}
                  alt="helping asset"
                  height={400}
                  width={400}
                  objectFit="contain"
                  className="pointer-events-auto m-auto"
                />
              </div>
            </div>
          ) : (
            // --- Share Link & Content Preview State ---
            <div className="animate-fadeIn">
              {/* PersonalizedPDFGenerator renders the content and the PDFDocument wrapper */}
              <PersonalizedPDFGenerator
                surveyResponse={formData}
                url={shareUrl}
              />

              <div className="my-8 text-center flex justify-center w-full">
                <Button
                  onClick={() => {
                    // Redirect back to the clean form URL
                    router.push(window.location.pathname);
                    setIsShareLinkView(false); // Reset state
                    setFormData({
                      // Optionally reset form data
                      name: "",
                      religion: "",
                      gender: "",
                      location: "",
                      ageGroup: "",
                    });
                    setShareUrl("");
                  }}
                  variant="default"
                  className="bg-primary"
                >
                  Create Another Guide
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </div>

      {/* Ensure ToastProvider is somewhere in your app, e.g., layout.tsx */}
      <Toaster />
    </div>
  );
};

// Export a wrapper component that uses Suspense
const IslamicContentSurvey: React.FC = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <IslamicContentSurveyContent />
    </Suspense>
  );
};

export default IslamicContentSurvey;
