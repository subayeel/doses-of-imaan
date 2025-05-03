// src/utils/quranData.ts

interface Surah {
  number: number;
  name: string; // Surah name
  verses: number; // Number of verses in the Surah
}

// Define the total number of verses (standard count)
export const TOTAL_QURAN_VERSES = 6236; // Using the standard widely accepted count

// List of all Surahs with their verse counts
export const QURAN_SURAHS: Surah[] = [
  { number: 1, name: "Al-Fatiha", verses: 7 },
  { number: 2, name: "Al-Baqarah", verses: 286 },
  { number: 3, name: "Al-Imran", verses: 200 },
  { number: 4, name: "An-Nisa", verses: 176 },
  { number: 5, name: "Al-Ma'idah", verses: 120 },
  { number: 6, name: "Al-An'am", verses: 165 },
  { number: 7, name: "Al-A'raf", verses: 206 },
  { number: 8, name: "Al-Anfal", verses: 75 },
  { number: 9, name: "At-Tawbah", verses: 129 },
  { number: 10, name: "Yunus", verses: 109 },
  { number: 11, name: "Hud", verses: 123 },
  { number: 12, name: "Yusuf", verses: 111 },
  { number: 13, name: "Ar-Ra'd", verses: 43 },
  { number: 14, name: "Ibrahim", verses: 52 },
  { number: 15, name: "Al-Hijr", verses: 99 },
  { number: 16, name: "An-Nahl", verses: 128 },
  { number: 17, name: "Al-Isra", verses: 111 },
  { number: 18, name: "Al-Kahf", verses: 110 },
  { number: 19, name: "Maryam", verses: 98 },
  { number: 20, name: "Taha", verses: 135 },
  { number: 21, name: "Al-Anbiya", verses: 112 },
  { number: 22, name: "Al-Hajj", verses: 78 },
  { number: 23, name: "Al-Mu'minun", verses: 118 },
  { number: 24, name: "An-Nur", verses: 64 },
  { number: 25, name: "Al-Furqan", verses: 77 },
  { number: 26, name: "Ash-Shu'ara", verses: 227 },
  { number: 27, name: "An-Naml", verses: 93 },
  { number: 28, name: "Al-Qasas", verses: 88 },
  { number: 29, name: "Al-Ankabut", verses: 69 },
  { number: 30, name: "Ar-Rum", verses: 60 },
  { number: 31, name: "Luqman", verses: 34 },
  { number: 32, name: "As-Sajdah", verses: 30 },
  { number: 33, name: "Al-Ahzab", verses: 73 },
  { number: 34, name: "Saba", verses: 54 },
  { number: 35, name: "Fatir", verses: 45 },
  { number: 36, name: "Ya-Sin", verses: 83 },
  { number: 37, name: "As-Saffat", verses: 182 },
  { number: 38, name: "Sad", verses: 88 },
  { number: 39, name: "Az-Zumar", verses: 75 },
  { number: 40, name: "Ghafir", verses: 85 },
  { number: 41, name: "Fussilat", verses: 54 },
  { number: 42, name: "Ash-Shuraa", verses: 53 },
  { number: 43, name: "Az-Zukhruf", verses: 89 },
  { number: 44, name: "Ad-Dukhan", verses: 59 },
  { number: 45, name: "Al-Jathiyah", verses: 37 },
  { number: 46, name: "Al-Ahqaf", verses: 35 },
  { number: 47, name: "Muhammad", verses: 38 },
  { number: 48, name: "Al-Fath", verses: 29 },
  { number: 49, name: "Al-Hujurat", verses: 18 },
  { number: 50, name: "Qaf", verses: 45 },
  { number: 51, name: "Adh-Dhariyat", verses: 60 },
  { number: 52, name: "At-Tur", verses: 49 },
  { number: 53, name: "An-Najm", verses: 62 },
  { number: 54, name: "Al-Qamar", verses: 55 },
  { number: 55, name: "Ar-Rahman", verses: 78 },
  { number: 56, name: "Al-Waqi'ah", verses: 96 },
  { number: 57, name: "Al-Hadid", verses: 29 },
  { number: 58, name: "Al-Mujadila", verses: 22 },
  { number: 59, name: "Al-Hashr", verses: 24 },
  { number: 60, name: "Al-Mumtahanah", verses: 13 },
  { number: 61, name: "As-Saff", verses: 14 },
  { number: 62, name: "Al-Jumu'ah", verses: 11 },
  { number: 63, name: "Al-Munafiqun", verses: 11 },
  { number: 64, name: "At-Taghabun", verses: 18 },
  { number: 65, name: "At-Talaq", verses: 12 },
  { number: 66, name: "At-Tahrim", verses: 12 },
  { number: 67, name: "Al-Mulk", verses: 30 },
  { number: 68, name: "Al-Qalam", verses: 52 },
  { number: 69, name: "Al-Haqqah", verses: 52 },
  { number: 70, name: "Al-Ma'arij", verses: 44 },
  { number: 71, name: "Nuh", verses: 28 },
  { number: 72, name: "Al-Jinn", verses: 28 },
  { number: 73, name: "Al-Muzzammil", verses: 20 },
  { number: 74, name: "Al-Muddaththir", verses: 56 },
  { number: 75, name: "Al-Qiyamah", verses: 40 },
  { number: 76, name: "Al-Insan", verses: 31 },
  { number: 77, name: "Al-Mursalat", verses: 50 },
  { number: 78, name: "An-Naba", verses: 40 },
  { number: 79, name: "An-Nazi'at", verses: 46 },
  { number: 80, name: "'Abasa", verses: 42 },
  { number: 81, name: "At-Takwir", verses: 29 },
  { number: 82, name: "Al-Infitar", verses: 19 },
  { number: 83, name: "Al-Mutaffifin", verses: 36 },
  { number: 84, name: "Al-Inshiqaq", verses: 25 },
  { number: 85, name: "Al-Buruj", verses: 22 },
  { number: 86, name: "At-Tariq", verses: 17 },
  { number: 87, name: "Al-A'la", verses: 19 },
  { number: 88, name: "Al-Ghashiyah", verses: 26 },
  { number: 89, name: "Al-Fajr", verses: 30 },
  { number: 90, name: "Al-Balad", verses: 20 },
  { number: 91, name: "Ash-Shams", verses: 15 },
  { number: 92, name: "Al-Layl", verses: 21 },
  { number: 93, name: "Ad-Duha", verses: 11 },
  { number: 94, name: "Ash-Sharh", verses: 8 },
  { number: 95, name: "At-Tin", verses: 8 },
  { number: 96, name: "Al-'Alaq", verses: 19 },
  { number: 97, name: "Al-Qadr", verses: 5 },
  { number: 98, name: "Al-Bayyinah", verses: 8 },
  { number: 99, name: "Az-Zalzalah", verses: 8 },
  { number: 100, name: "Al-'Adiyat", verses: 11 },
  { number: 101, name: "Al-Qari'ah", verses: 11 },
  { number: 102, name: "At-Takathur", verses: 8 },
  { number: 103, name: "Al-'Asr", verses: 3 },
  { number: 104, name: "Al-Humazah", verses: 9 },
  { number: 105, name: "Al-Fil", verses: 5 },
  { number: 106, name: "Quraysh", verses: 4 },
  { number: 107, name: "Al-Ma'un", verses: 7 },
  { number: 108, name: "Al-Kawthar", verses: 3 },
  { number: 109, name: "Al-Kafirun", verses: 6 },
  { number: 110, name: "An-Nasr", verses: 3 },
  { number: 111, name: "Al-Masad", verses: 5 },
  { number: 112, name: "Al-Ikhlas", verses: 4 },
  { number: 113, name: "Al-Falaq", verses: 5 },
  { number: 114, name: "An-Nas", verses: 6 },
];

/**
 * Gets a Surah object by its number.
 * @param surahNumber The number of the Surah (1-114).
 * @returns The Surah object or undefined if not found.
 */
export function getSurahByNumber(surahNumber: number): Surah | undefined {
  return QURAN_SURAHS.find((surah) => surah.number === surahNumber);
}

/**
 * Calculates the total number of verses for a given list of Surah numbers.
 * @param surahNumbers An array of Surah numbers.
 * @returns The total number of verses.
 */
export function getVersesBySurahs(surahNumbers: number[] | undefined): number {
  if (!surahNumbers || surahNumbers.length === 0) {
    return 0;
  }
  return surahNumbers.reduce((total, surahNumber) => {
    const surah = getSurahByNumber(surahNumber);
    return total + (surah ? surah.verses : 0);
  }, 0);
}
