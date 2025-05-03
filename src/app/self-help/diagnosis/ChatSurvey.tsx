/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import ChatUI from "./ChatUI";
import { ResultsType } from "@/utils/types";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { religion } from "@/data/constant";

interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
  question?: string;
}

interface PersonalInfo {
  gender: string;
  age: string;
  ethnicity: string;
}

interface BeliefInfo {
  believesInGod: boolean | null;
  howMany: string | null;
  whichReligion: string;
}

interface ImaanAnswers {
  [key: string]: string;
}

interface Results {
  totalPoints: number;
  maxPossible: number;
  percentage: number;
  level: string;
  suggestedLinks: ReactNode;
  message: string;
  date: string;
  answers: ImaanAnswers;
}

interface Question {
  content: string;
  options?: { value: string; label: string; god?: string }[];
  category?: string;
  quranReference?: string;
}

interface QuestionSequence {
  [key: string]: {
    next: string | ((responses: any) => string) | null;
    type: string;
    condition?: (responses: any) => boolean;
  };
}

export default function ChatSurvey() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Salaam! 🌟 Welcome to your Spiritual Wellness Check. This is a safe space to reflect on your faith journey. Ready to begin?",
      question: "personal-intro",
    },
  ]);

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    gender: "",
    age: "",
    ethnicity: "",
  });

  const [beliefInfo, setBeliefInfo] = useState<BeliefInfo>({
    believesInGod: null,
    howMany: null,
    whichReligion: "",
  });

  const [imaanAnswers, setImaanAnswers] = useState<ImaanAnswers>({});
  const [results, setResults] = useState<ResultsType | undefined>();
  const [suggestedLinks, setSuggestedLinks] = useState<ReactNode | undefined>();
  const [, setPreviousResults] = useState<ResultsType | undefined>();
  const [currentQuestion, setCurrentQuestion] = useState<string>("gender");
  const [showInput, setShowInput] = useState<boolean>(true);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const questionSequence: QuestionSequence = {
    "personal-intro": { next: "gender", type: "message" },
    gender: { next: "age", type: "select" },
    age: { next: "ethnicity", type: "input" },
    ethnicity: { next: "believesInGod", type: "select" },
    believesInGod: {
      next: "howMany",
      type: "radio",
      condition: (responses) => responses.beliefInfo.believesInGod === true,
    },
    howMany: {
      next: "whichReligion",
      type: "radio",
      condition: (responses) => responses.beliefInfo.howMany !== null,
    },
    whichReligion: {
      next: (responses) => {
        if (responses.beliefInfo.whichReligion === "islam") {
          return "imaanIntro";
        } else if (responses.beliefInfo.whichReligion === "hinduism") {
          const suggestedLinks = (
            <div className="space-y-2">
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex p-3 rounded-md border justify-between items-center border-red-600 text-red-700 bg-red-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-red-100"
                href="/primary/god"
              >
                <span className="font-medium">Consider Primary Dose</span>
                <ArrowRight className="h-5 w-5" />
              </motion.a>

              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex p-3 rounded-md border justify-between items-center border-purple-600 text-purple-700 bg-purple-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-purple-100"
                href="/religion/islam"
              >
                <span className="font-medium">Take Religion Dose</span>
                <ArrowRight className="h-5 w-5" />
              </motion.a>
            </div>
          );
          setSuggestedLinks(suggestedLinks);
          return "hinduismDose";
        } else if (
          responses.beliefInfo.whichReligion === "atheist" ||
          responses.beliefInfo.whichReligion === "agnostic"
        ) {
          const suggestedLinks = (
            <div className="space-y-2">
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex p-3 rounded-md border justify-between items-center border-red-600 text-red-700 bg-red-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-red-100"
                href="/primary/god"
              >
                <span className="font-medium">Take Primary Dose</span>
                <ArrowRight className="h-5 w-5" />
              </motion.a>

              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex p-3 rounded-md border justify-between items-center border-purple-600 text-purple-700 bg-purple-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-purple-100"
                href="/religion/islam"
              >
                <span className="font-medium">Visit Religion Dose</span>
                <ArrowRight className="h-5 w-5" />
              </motion.a>
            </div>
          );
          setSuggestedLinks(suggestedLinks);
          return "atheismDose";
        } else if (responses.beliefInfo.whichReligion === "judaism") {
          const suggestedLinks = (
            <div className="space-y-2">
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex p-3 rounded-md border justify-between items-center border-red-600 text-red-700 bg-red-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-red-100"
                href="/primary/god"
              >
                <span className="font-medium">Take Primary Dose</span>
                <ArrowRight className="h-5 w-5" />
              </motion.a>

              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex p-3 rounded-md border justify-between items-center border-purple-600 text-purple-700 bg-purple-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-purple-100"
                href="/religion/islam"
              >
                <span className="font-medium">Visit Religion Dose</span>
                <ArrowRight className="h-5 w-5" />
              </motion.a>
            </div>
          );
          setSuggestedLinks(suggestedLinks);
          return "judaismDose";
        } else if (responses.beliefInfo.whichReligion === "christianity") {
          const suggestedLinks = (
            <div className="space-y-2">
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex p-3 rounded-md border justify-between items-center border-red-600 text-red-700 bg-red-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-red-100"
                href="/primary/god"
              >
                <span className="font-medium">Take Primary Dose</span>
                <ArrowRight className="h-5 w-5" />
              </motion.a>

              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex p-3 rounded-md border justify-between items-center border-purple-600 text-purple-700 bg-purple-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-purple-100"
                href="/religion/islam"
              >
                <span className="font-medium">Visit Religion Dose</span>
                <ArrowRight className="h-5 w-5" />
              </motion.a>
            </div>
          );
          setSuggestedLinks(suggestedLinks);
          return "christianityDose";
        } else if (responses.beliefInfo.howMany === "many") {
          return "suggestPD2";
        } else {
          return "suggestPD1";
        }
      },
      type: "select",
    },
    imaanIntro: {
      next: "remorse1",
      type: "message",
    },
    remorse1: { next: "remorse2", type: "radio" },
    remorse2: { next: "heart1", type: "radio" },
    heart1: { next: "heart2", type: "radio" },
    heart2: { next: "arrogance", type: "radio" },
    arrogance: { next: "charity", type: "radio" },
    charity: { next: "jealousy1", type: "radio" },
    jealousy1: { next: "jealousy2", type: "radio" },
    jealousy2: { next: "ibadah1", type: "radio" },
    ibadah1: { next: "ibadah2", type: "radio" },
    ibadah2: { next: "trials", type: "radio" },
    trials: { next: "calculateResults", type: "radio" },
    calculateResults: { next: "showResults", type: "function" },
    showResults: { next: null, type: "results" },
    hinduismDose: { next: null, type: "specialDose" },
    atheismDose: { next: null, type: "specialDose" },
    judaismDose: { next: null, type: "specialDose" },
    christianityDose: { next: null, type: "specialDose" },
    suggestPD1: { next: null, type: "specialDose" },
    suggestPD2: { next: null, type: "specialDose" },
  };

  const questions: { [key: string]: Question } = {
    gender: {
      content: "First, may I know how you'd like to be addressed?",
      options: [
        { value: "male", label: "Brother" },
        { value: "female", label: "Sister" },
      ],
    },
    age: {
      content: "Wonderful! And how many trips around the sun have you made? 🌞",
    },
    ethnicity: {
      content: "Where are you connecting from in this vast world? 🌍",
      options: [
        { value: "african", label: "African" },
        { value: "african_american", label: "African American" },
        { value: "arab", label: "Arab" },
        { value: "asian", label: "Asian" },
        { value: "caribbean", label: "Caribbean" },
        { value: "caucasian", label: "Caucasian" },
        { value: "east_asian", label: "East Asian" },
        { value: "hispanic_latino", label: "Hispanic/Latino" },
        { value: "indigenous_american", label: "Indigenous American" },
        { value: "indigenous_australian", label: "Indigenous Australian" },
        { value: "middle_eastern", label: "Middle Eastern" },
        { value: "north_african", label: "North African" },
        { value: "pacific_islander", label: "Pacific Islander" },
        {
          value: "south_asian",
          label: "South Asian (India, Pakistan, Bangladesh etc.)",
        },
        {
          value: "southeast_asian",
          label: "Southeast Asian (China, Japan, Korea etc.)",
        },
        { value: "other", label: "Other" },
      ],
    },
    believesInGod: {
      content: "Do you believe in a higher power or divine being?",
      options: [
        { value: "true", label: "Yes, absolutely" },
        { value: "false", label: "Not really" },
      ],
    },
    howMany: {
      content: "How would you describe this divine presence in your life?",
      options: [
        { value: "one", label: "One Supreme Power" },
        { value: "many", label: "Multiple Supreme Power" },
      ],
    },
    whichReligion: {
      content: "Which spiritual path resonates most with your heart?",
      options: religion.filter((obj) => {
        if (beliefInfo.howMany === "one") {
          return obj.god === "one";
        } else if (beliefInfo.howMany === "many") {
          return obj.god === "many";
        } else {
          return obj;
        }
      }),
    },
    imaanIntro: {
      content:
        "Masha Allah! 🌙 Let's gently explore your spiritual journey together. These questions will help us understand where your heart is at - there are no right or wrong answers, just honest reflection.",
    },
    remorse1: {
      category: "Remorse Upon Committing Sin",
      content: "When you stumble, does your heart feel heavy with regret?",
      quranReference:
        '"And those who, when they commit an immorality or wrong themselves, remember Allah and seek forgiveness for their sins..." (Quran 3:135)',
      options: [
        { value: "A", label: "Always - my conscience won't let me rest" },
        { value: "B", label: "Sometimes - depends on the situation" },
        { value: "C", label: "Rarely - I don't think much about it" },
        { value: "D", label: "Never - I don't feel regret" },
      ],
    },
    remorse2: {
      category: "Remorse Upon Committing Sin",
      content: "How often do you turn to Allah with a humble 'Astaghfirullah'?",
      options: [
        { value: "A", label: "Daily - it's part of my routine" },
        { value: "B", label: "Weekly - when I remember" },
        { value: "C", label: "Occasionally - when I feel really bad" },
        { value: "D", label: "Rarely/Never - I don't think to ask" },
      ],
    },
    heart1: {
      category: "Stiffness of Heart",
      content: "When the Quran is recited, does it stir something within you?",
      quranReference:
        '"Has the time not come for those who have believed that their hearts should become humbly submissive at the remembrance of Allah..." (Quran 57:16)',
      options: [
        { value: "A", label: "Always - tears sometimes come" },
        { value: "B", label: "Sometimes - certain verses touch me" },
        { value: "C", label: "Rarely - I listen but don't feel much" },
        { value: "D", label: "Never - it's just words to me" },
      ],
    },
    heart2: {
      category: "Stiffness of Heart",
      content: "What fills your quiet moments more often?",
      options: [
        { value: "A", label: "Mostly Islamic reminders and Quran" },
        { value: "B", label: "A balance of both" },
        { value: "C", label: "Mostly music and entertainment" },
        { value: "D", label: "Never Islamic content" },
      ],
    },
    arrogance: {
      category: "Arrogance & Humility",
      content: "Do worldly things ever make you feel superior to others?",
      quranReference:
        '"And do not turn your cheek [in contempt] toward people and do not walk through the earth exultantly. Indeed, Allah does not like the arrogant and boastful." (Quran 31:18)',
      options: [
        { value: "A", label: "Never - we're all equal before Allah" },
        { value: "B", label: "Occasionally - I catch myself sometimes" },
        { value: "C", label: "Often - I know I'm better in some ways" },
        { value: "D", label: "Always - I am superior to many" },
      ],
    },
    charity: {
      category: "Charity & Generosity",
      content: "How does giving make you feel?",
      quranReference:
        '"The example of those who spend their wealth in the way of Allah is like a seed of grain that sprouts seven ears; in every ear is a hundred grains..." (Quran 2:261)',
      options: [
        { value: "A", label: "Joyful - I give often and generously" },
        { value: "B", label: "Good - when I remember to share" },
        { value: "C", label: "Hesitant - I give but reluctantly" },
        { value: "D", label: "Nothing - I rarely give" },
      ],
    },
    jealousy1: {
      category: "Jealousy & Contentment",
      content: "When you see others' blessings, what's your first thought?",
      quranReference:
        '"Do not wish for what Allah has favored some of you over others..." (Quran 4:32)',
      options: [
        { value: "A", label: "MashaAllah - I'm happy for them" },
        {
          value: "B",
          label: "Mixed - sometimes I feel happy, sometimes envious",
        },
        { value: "C", label: "Why not me? - I often compare" },
        { value: "D", label: "Resentment - it's not fair" },
      ],
    },
    jealousy2: {
      category: "Jealousy & Contentment",
      content:
        "How often do you find yourself complaining about your situation?",
      options: [
        { value: "A", label: "Never - Alhamdulillah for everything" },
        { value: "B", label: "Occasionally - when things get tough" },
        { value: "C", label: "Often - life feels unfair" },
        { value: "D", label: "Always - nothing goes right for me" },
      ],
    },
    ibadah1: {
      category: "Laziness in Ibadah (Worship)",
      content: "How consistent are you with your five daily prayers?",
      quranReference:
        '"Indeed, the prayer is a duty imposed on the believers at the appointed times." (Quran 4:103)',
      options: [
        { value: "A", label: "Always - never miss them" },
        { value: "B", label: "Mostly - sometimes delay" },
        { value: "C", label: "Occasionally - miss more than I pray" },
        { value: "D", label: "Rarely/Never - hardly pray" },
      ],
    },
    ibadah2: {
      category: "Laziness in Ibadah (Worship)",
      content: "How's your relationship with Fajr prayer?",
      options: [
        { value: "A", label: "Strong - I never miss it" },
        { value: "B", label: "Okay - sometimes I sleep through" },
        { value: "C", label: "Struggling - often miss it" },
        { value: "D", label: "Nonexistent - never wake up for it" },
      ],
    },
    trials: {
      category: "Reaction to Trials & Hardships",
      content: "When hardship comes, where does your heart turn first?",
      quranReference:
        '"And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give glad tidings to the patient." (Quran 2:155)',
      options: [
        {
          value: "A",
          label: "To Allah - alhamdulillah, this is a test",
        },
        { value: "B", label: "I feel upset but try to be patient" },
        { value: "C", label: "I complain - why is this happening to me?" },
        { value: "D", label: "Anger - I blame others or circumstances" },
      ],
    },
    hinduismDose: {
      content:
        "I appreciate you sharing your beliefs with me. 🌸 Based on your spiritual path, I have some resources that might resonate with your journey towards understanding the Divine. Would you like to explore them?",
    },
    atheismDose: {
      content:
        "Thank you for your honesty. 🤔 Many who've walked this path before found certain perspectives helpful in their search for truth. I'd love to share some resources with you - would that be okay?",
    },
    judaismDose: {
      content:
        "I have some resources that might deepen your connection with the Divine while honoring your tradition. Interested to explore?",
    },
    christianityDose: {
      content:
        "I'd love to share some resources that might enrich your understanding while respecting your Christian beliefs. Shall we?",
    },
    suggestPD1: {
      content:
        "Your spiritual curiosity is beautiful! 🌠 Many seekers find our 'Existence of God' module helpful in their journey. It presents rational perspectives you might find interesting.",
    },
    suggestPD2: {
      content:
        "Fascinating perspective! 💫 You might enjoy exploring our 'Oneness of God' module - it offers thoughtful insights about divine unity that could resonate with you.",
    },
  };

  const processMessageQuestion = (questionId: string) => {
    const nextQuestion = questionSequence[questionId].next;

    const nextQuestionId =
      typeof nextQuestion === "function"
        ? nextQuestion({ personalInfo, beliefInfo, imaanAnswers })
        : nextQuestion;

    setCurrentQuestion(nextQuestionId || "default-question");

    addMessage({
      role: "assistant",
      content: nextQuestionId
        ? questions[nextQuestionId]?.content ||
          "Thank you for sharing that with me. 💖"
        : "Thank you for walking this path with me today. 🌸",
      question: nextQuestionId ?? "",
    });

    setShowInput(true);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    const storedResults = localStorage.getItem("imaanResults");
    if (storedResults) {
      setPreviousResults(JSON.parse(storedResults));
    }

    if (currentQuestion === "personal-intro") {
      setShowInput(false);
      setTimeout(() => {
        processMessageQuestion("personal-intro");
      }, 1000);
    }
  }, []);

  useEffect(() => {
    if (
      currentQuestion &&
      questionSequence[currentQuestion]?.type === "message"
    ) {
      setShowInput(false);
      setTimeout(() => {
        processMessageQuestion(currentQuestion);
      }, 1000);
    }
  }, [currentQuestion]);

  const addMessage = (message: Omit<Message, "id">) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      ...message,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleSelect = (value: string, questionId: string) => {
    setIsTyping(true);
    let displayValue = value;
    let nextQuestion: string | null = null;

    if (questionId === "gender") {
      setPersonalInfo((prev) => ({ ...prev, gender: value }));
      const option = questions.gender.options?.find(
        (opt) => opt.value === value
      );
      displayValue = option ? option.label : value;
      nextQuestion = questionSequence.gender.next as string;
    } else if (questionId === "ethnicity") {
      setPersonalInfo((prev) => ({ ...prev, ethnicity: value }));
      const option = questions.ethnicity.options?.find(
        (opt) => opt.value === value
      );
      displayValue = option ? option.label : value;
      nextQuestion = questionSequence.ethnicity.next as string;
    } else if (questionId === "believesInGod") {
      const boolValue = value === "true";
      setBeliefInfo((prev) => ({ ...prev, believesInGod: boolValue }));
      displayValue = boolValue ? "Yes, absolutely" : "Not really";
      nextQuestion = boolValue
        ? (questionSequence.believesInGod.next as string)
        : "atheismDose";

      const suggestedLinks = (
        <div className="space-y-2">
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex p-3 rounded-md border justify-between items-center border-red-600 text-red-700 bg-red-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-red-100"
            href="/primary/god"
          >
            <span className="font-medium">Take Primary Dose</span>
            <ArrowRight className="h-5 w-5" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex p-3 rounded-md border justify-between items-center border-purple-600 text-purple-700 bg-purple-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-purple-100"
            href="/religion/islam"
          >
            <span className="font-medium">Take Religion Dose</span>
            <ArrowRight className="h-5 w-5" />
          </motion.a>
        </div>
      );
      if (!boolValue) {
        setSuggestedLinks(suggestedLinks);
      }
    } else if (questionId === "howMany") {
      setBeliefInfo((prev) => ({ ...prev, howMany: value }));
      displayValue = value === "one" ? "One" : "Many";
      nextQuestion = questionSequence.howMany.next as string;
    } else if (questionId === "whichReligion") {
      setBeliefInfo((prev) => ({ ...prev, whichReligion: value }));
      const option = questions.whichReligion.options?.find(
        (opt) => opt.value === value
      );
      displayValue = option ? option.label : value;

      const nextFn = questionSequence.whichReligion.next;

      nextQuestion =
        typeof nextFn === "function"
          ? nextFn({
              beliefInfo: { ...beliefInfo, whichReligion: value },
            })
          : (nextFn as string);
    } else if (
      questionId.startsWith("remorse") ||
      questionId.startsWith("heart") ||
      questionId === "arrogance" ||
      questionId === "charity" ||
      questionId.startsWith("jealousy") ||
      questionId.startsWith("ibadah") ||
      questionId === "trials"
    ) {
      setImaanAnswers((prev) => ({ ...prev, [questionId]: value }));
      const option = questions[questionId].options?.find(
        (opt) => opt.value === value
      );
      displayValue = option ? option.label : value;
      nextQuestion = questionSequence[questionId].next as string;
    }

    addMessage({
      role: "user",
      content: displayValue,
      question: questionId,
    });

    setShowInput(false);

    setTimeout(() => {
      setIsTyping(false);
      if (nextQuestion === "calculateResults") {
        calculateResults();
        setCurrentQuestion("showResults");

        setTimeout(() => {
          addMessage({
            role: "assistant",
            content: "Your spiritual wellness report is ready! 🌟",
            question: "showResults",
          });
          setShowInput(true);
        }, 1000);
      } else {
        setCurrentQuestion(nextQuestion ?? "");

        addMessage({
          role: "assistant",
          content: nextQuestion
            ? questions[nextQuestion]?.content ||
              "Thank you for sharing that with me. 💖"
            : "Thank you for walking this path with me today. 🌸",
          question: nextQuestion ?? undefined,
        });

        setShowInput(true);
      }
    }, 1000);
  };

  const handleAgeInput = (value: string) => {
    setIsTyping(true);
    setPersonalInfo((prev) => ({ ...prev, age: value }));

    addMessage({
      role: "user",
      content: `${value} years young`,
      question: "age",
    });

    setShowInput(false);

    setTimeout(() => {
      setIsTyping(false);
      const nextQuestion = questionSequence.age.next as string;
      setCurrentQuestion(nextQuestion);

      addMessage({
        role: "assistant",
        content: questions[nextQuestion].content,
        question: nextQuestion,
      });

      setShowInput(true);
    }, 1000);
  };

  const calculateResults = () => {
    const pointValues: { [key: string]: number } = {
      A: 5,
      B: 3,
      C: 1,
      D: 0,
    };

    let totalPoints = 0;
    let answeredQuestions = 0;

    Object.values(imaanAnswers).forEach((answer) => {
      totalPoints += pointValues[answer];
      answeredQuestions++;
    });

    const percentage = Math.round(
      (totalPoints / (answeredQuestions * 5)) * 100
    );
    let level: string;
    let message: string;
    let suggestedLinks: ReactNode;

    if (totalPoints >= 45) {
      level = "Flourishing Faith 🌟";
      message = `MashaAllah! Your spiritual wellness shines brightly at ${percentage}%. This is a beautiful blessing from Allah - cherish it while staying humble. Remember, even the strongest trees need constant care. Keep nurturing your connection through:
      
      • Daily gratitude practices
      • Consistent self-reflection
      • Serving others with your light
      
      Your next step? Deepening this connection even further. The journey has only begun!`;
      suggestedLinks = (
        <div className="space-y-2">
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex p-3 rounded-md border justify-between items-center border-amber-600 text-amber-700 bg-amber-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-amber-100"
            href="/self-help/quick-recovery"
          >
            <span className="font-medium">Advanced Spiritual Practices</span>
            <ArrowRight className="h-5 w-5" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex p-3 rounded-md border justify-between items-center border-green-600 text-green-700 bg-green-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-green-100"
            href="/self-help/learn-quran"
          >
            <span className="font-medium">Quranic Fluency Journey</span>
            <ArrowRight className="h-5 w-5" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex p-3 rounded-md border justify-between items-center border-yellow-600 text-yellow-700 bg-yellow-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-yellow-100"
            href="/self-help/learn-arabic"
          >
            <span className="font-medium">Sacred Language Immersion</span>
            <ArrowRight className="h-5 w-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex p-3 rounded-md border justify-between items-center border-green-600 text-green-700 bg-green-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-green-100"
            href="/self-help/hifz"
          >
            <span className="font-medium">Heart Memorization Program</span>
            <ArrowRight className="h-5 w-5" />
          </motion.a>
        </div>
      );
    } else if (totalPoints >= 30) {
      level = "Growing Faith 🌱";
      message = `Your spiritual wellness is at ${percentage}% - you've planted good seeds! Now it's time to nurture them. Focus on:
      
      • Small, consistent acts of worship
      • Building a daily spiritual routine
      • Finding an accountability partner
      
      Every journey begins with a single step. Which area calls to you first?`;
      suggestedLinks = (
        <div className="space-y-2">
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex p-3 rounded-md border justify-between items-center border-amber-600 text-amber-700 bg-amber-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-amber-100"
            href="/self-help/quick-recovery"
          >
            <span className="font-medium">Faith Growth Starter Kit</span>
            <ArrowRight className="h-5 w-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex p-3 rounded-md border justify-between items-center border-blue-600 text-blue-700 bg-blue-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-blue-100"
            href="/primary/god"
          >
            <span className="font-medium">Core Belief Reinforcement</span>
            <ArrowRight className="h-5 w-5" />
          </motion.a>
        </div>
      );
    } else if (totalPoints >= 20) {
      level = "Seeking Faith 🔍";
      message = `Your spiritual wellness is at ${percentage}% - I hear the longing in your heart. This is your soul's wake-up call! Begin with:
      
      • 5 minutes of daily reflection
      • One small act of kindness each day
      • Reconnecting with basic spiritual practices
      
      The path begins wherever you are. Ready to take that first step?`;
      suggestedLinks = (
        <div className="space-y-2">
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex p-3 rounded-md border justify-between items-center border-green-600 text-green-700 bg-green-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-green-100"
            href="/primary/god"
          >
            <span className="font-medium">Foundational Belief Course</span>
            <ArrowRight className="h-5 w-5" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex p-3 rounded-md border justify-between items-center border-yellow-600 text-yellow-700 bg-yellow-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-yellow-100"
            href="/religion/islam"
          >
            <span className="font-medium">Spiritual Reconnection Guide</span>
            <ArrowRight className="h-5 w-5" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex p-3 rounded-md border justify-between items-center border-amber-600 text-amber-700 bg-amber-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-amber-100"
            href="/self-help/quick-recovery"
          >
            <span className="font-medium">Daily Revival Challenge</span>
            <ArrowRight className="h-5 w-5" />
          </motion.a>
        </div>
      );
    } else {
      level = "Dormant Faith 💤";
      message = `Your spiritual wellness is at ${percentage}% - but don't lose hope! Every soul goes through winters before spring arrives. Start with:
      
      • One sincere dua today
      • Listening to one Quran verse
      • Forgiving yourself and beginning anew
      
      Allah's mercy is greater than any distance. Will you take His hand today?`;
      suggestedLinks = (
        <div className="space-y-2">
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex p-3 rounded-md border justify-between items-center border-red-600 text-red-700 bg-red-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-red-100"
            href="/primary/god"
          >
            <span className="font-medium">Spiritual First Aid Kit</span>
            <ArrowRight className="h-5 w-5" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex p-3 rounded-md border justify-between items-center border-purple-600 text-purple-700 bg-purple-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-purple-100"
            href="/religion/islam"
          >
            <span className="font-medium">Back to Basics Guide</span>
            <ArrowRight className="h-5 w-5" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex p-3 rounded-md border justify-between items-center border-amber-600 text-amber-700 bg-amber-50 shadow hover:shadow-md transition-all hover:cursor-pointer hover:bg-amber-100"
            href="/self-help/quick-recovery"
          >
            <span className="font-medium">30-Day Fresh Start</span>
            <ArrowRight className="h-5 w-5" />
          </motion.a>
        </div>
      );
    }

    const resultData: Results = {
      totalPoints,
      maxPossible: answeredQuestions * 5,
      percentage,
      level,
      message,
      suggestedLinks,
      date: new Date().toLocaleString(),
      answers: imaanAnswers,
    };

    setResults(resultData);
    localStorage.setItem("imaanResults", JSON.stringify(resultData));
  };

  const resetSurvey = () => {
    setPersonalInfo({
      gender: "",
      age: "",
      ethnicity: "",
    });
    setBeliefInfo({
      believesInGod: null,
      howMany: null,
      whichReligion: "",
    });
    setImaanAnswers({});
    setPreviousResults(results);
    setResults(undefined);
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content:
          "Salaam! 🌟 Welcome back for another reflection. Ready to continue your spiritual journey?",
        question: "personal-intro",
      },
    ]);
    setCurrentQuestion("personal-intro");

    setTimeout(() => {
      const nextQuestion = questionSequence["personal-intro"].next as string;
      setCurrentQuestion(nextQuestion);
      setShowInput(true);

      addMessage({
        role: "assistant",
        content: questions[nextQuestion].content,
        question: nextQuestion,
      });
    }, 1000);
  };

  const renderInput = () => {
    if (!showInput) return null;

    const question = questions[currentQuestion];

    if (!question) return null;

    switch (questionSequence[currentQuestion]?.type) {
      case "select":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col space-y-2"
          >
            <Select
              onValueChange={(value) => handleSelect(value, currentQuestion)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={`Select your answer`} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {question.options?.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </motion.div>
        );
      case "radio":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <RadioGroup
              className="grid gap-2 grid-cols-1 sm:grid-cols-2"
              onValueChange={(value) => handleSelect(value, currentQuestion)}
            >
              {question.options?.map((option) => (
                <motion.div
                  key={option.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-2 px-3 py-2 border rounded-md hover:cursor-pointer hover:bg-gray-50">
                    <RadioGroupItem
                      value={option.value}
                      id={`${currentQuestion}-${option.value}`}
                    />
                    <Label htmlFor={`${currentQuestion}-${option.value}`}>
                      {option.label}
                    </Label>
                  </div>
                </motion.div>
              ))}
            </RadioGroup>
          </motion.div>
        );
      case "input":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex space-x-2"
          >
            <Input
              type="number"
              placeholder="Enter your age"
              className="flex-1"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleAgeInput((e.target as HTMLInputElement).value);
                }
              }}
            />
            <Button
              onClick={() => {
                const input = document.querySelector('input[type="number"]');
                if (input) handleAgeInput((input as HTMLInputElement).value);
              }}
            >
              Submit
            </Button>
          </motion.div>
        );
      case "results":
        return (
          results && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col space-y-4"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-100 shadow-sm">
                <div className="flex items-center mb-3">
                  <Sparkles className="h-5 w-5 text-yellow-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {results.level}
                  </h3>
                </div>
                <div className="prose prose-sm text-gray-700 mb-4">
                  {results.message.split("\n").map((paragraph, i) => (
                    <p key={i} className="mb-2">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Your spiritual wellness</span>
                    <span>{results.percentage}%</span>
                  </div>
                  <div className="bg-white rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${results.percentage}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
                    />
                  </div>
                </div>
                <div className="mt-6 space-y-3">{results.suggestedLinks}</div>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={resetSurvey}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  Reflect Again
                </Button>
              </motion.div>
            </motion.div>
          )
        );
      case "specialDose":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex space-x-2 py-2 px-6"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                onClick={resetSurvey}
                className="border-blue-500 text-blue-600 hover:bg-blue-50"
              >
                Restart Journey
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600">
                Explore Resources
              </Button>
            </motion.div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <ChatUI
      messages={messages}
      renderInput={renderInput}
      results={results}
      suggestedLinks={suggestedLinks}
      showInput={showInput}
      isTyping={isTyping}
    />
  );
}
