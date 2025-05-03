import type { HifzPlanData } from "@/utils/types";

const BASE_URL = "/hifz-planner"; // Relative path within the app

/**
 * Generates a shareable URL containing the encoded plan input data.
 */
export function generateShareURL(data: HifzPlanData): string {
  try {
    // Include only necessary input data, not generated plan
    const dataToEncode: Partial<HifzPlanData> = {
      memoryRating: data.memoryRating,
      userCategory: data.userCategory,
      schedule: data.schedule,
      memorizedSurahs: data.memorizedSurahs,
    };
    const jsonString = JSON.stringify(dataToEncode);
    // Using Base64 for potentially shorter URLs than encodeURIComponent for large JSON
    const encodedData = btoa(jsonString); // Base64 encode
    const url = `${window.location.origin}${BASE_URL}?data=${encodedData}`;
    return url;
  } catch (error) {
    console.error("Error generating share URL:", error);
    return `${window.location.origin}${BASE_URL}`; // Fallback URL
  }
}

/**
 * Parses the encoded data from a URL query parameter.
 */
export function parseShareData(encodedData: string): HifzPlanData | null {
  try {
    const jsonString = atob(encodedData); // Base64 decode
    const parsedData = JSON.parse(jsonString);

    // Basic validation: Check if essential keys exist
    if (
      parsedData &&
      typeof parsedData.memoryRating === "number" &&
      typeof parsedData.userCategory === "string" &&
      typeof parsedData.schedule === "object" &&
      parsedData.schedule !== null
    ) {
      // Further validation based on userCategory could be added here
      return parsedData as HifzPlanData;
    } else {
      console.warn("Parsed share data is missing required fields.");
      return null;
    }
  } catch (error) {
    console.error("Error parsing share data:", error);
    return null;
  }
}
