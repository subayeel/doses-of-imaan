"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ChatUI from "./ChatUI";

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
  message: string;
  date: string;
  answers: ImaanAnswers;
}

interface Question {
  content: string;
  options?: { value: string; label: string }[];
  category?: string;
  quranReference?: string;
}

interface QuestionSequence {
  [key: string]: {
    next: string | ((responses: any) => string);
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
        "Welcome to the Spirituality Diagnosis survey. Let's start with some personal information.",
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
  const [results, setResults] = useState<Results | null>(null);
  const [previousResults, setPreviousResults] = useState<Results | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<string>("gender");
  const [showInput, setShowInput] = useState<boolean>(true);

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
        console.log("responses", responses);
        if (responses.beliefInfo.whichReligion === "islam") {
          return "imaanIntro";
        } else if (responses.beliefInfo.whichReligion === "hinduism") {
          return "hinduismDose";
        } else if (
          responses.beliefInfo.whichReligion === "atheist" ||
          responses.beliefInfo.whichReligion === "agnostic"
        ) {
          return "atheismDose";
        } else if (responses.beliefInfo.whichReligion === "judaism") {
          return "judaismDose";
        } else if (responses.beliefInfo.whichReligion === "christianity") {
          return "christianityDose";
        } else if (responses.beliefInfo.howMany === "many") {
          return "suggestPD2";
        } else {
          return "suggestPD1";
        }
      },
      type: "select",
    },
    imaanIntro: { next: "remorse1", type: "message" },
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
      content: "What is your gender?",
      options: [
        { value: "male", label: "Brother" },
        { value: "female", label: "Sister" },
      ],
    },
    age: {
      content: "What is your age?",
    },
    ethnicity: {
      content: "What is your nationality?",
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
      content: "Do you believe in God?",
      options: [
        { value: "true", label: "Yes" },
        { value: "false", label: "No" },
      ],
    },
    howMany: {
      content: "How many gods do you believe in?",
      options: [
        { value: "one", label: "One" },
        { value: "many", label: "Many" },
      ],
    },
    whichReligion: {
      content: "Which religion do you follow?",
      options: [
        { value: "agnostic", label: "Agnostic" },
        { value: "atheist", label: "Atheist" },
        { value: "buddhism", label: "Buddhism" },
        { value: "christianity", label: "Christianity" },
        { value: "hinduism", label: "Hinduism" },
        { value: "islam", label: "Islam" },
        { value: "judaism", label: "Judaism" },
        { value: "sikhism", label: "Sikhism" },
        { value: "taoism", label: "Taoism" },
        { value: "jainism", label: "Jainism" },
        { value: "shinto", label: "Shinto" },
        { value: "paganism", label: "Paganism" },
        { value: "spiritual", label: "Spiritual But Not Religious" },
        { value: "none", label: "None" },
        { value: "other", label: "Other" },
      ],
    },
    imaanIntro: {
      content:
        "Thank you for your responses. Now let's assess your Imaan (faith) with a few questions about different aspects of your spiritual life.",
    },
    remorse1: {
      category: "Remorse Upon Committing Sin",
      content: "Do you feel guilt or regret after committing a sin?",
      quranReference:
        '"And those who, when they commit an immorality or wrong themselves, remember Allah and seek forgiveness for their sins..." (Quran 3:135)',
      options: [
        { value: "A", label: "Always" },
        { value: "B", label: "Sometimes" },
        { value: "C", label: "Rarely" },
        { value: "D", label: "Never" },
      ],
    },
    remorse2: {
      category: "Remorse Upon Committing Sin",
      content: "How often do you seek forgiveness from Allah (Astaghfirullah)?",
      options: [
        { value: "A", label: "Daily" },
        { value: "B", label: "Weekly" },
        { value: "C", label: "Occasionally" },
        { value: "D", label: "Rarely/Never" },
      ],
    },
    heart1: {
      category: "Stiffness of Heart",
      content: "When you listen to Quran recitation, do you feel moved?",
      quranReference:
        '"Has the time not come for those who have believed that their hearts should become humbly submissive at the remembrance of Allah..." (Quran 57:16)',
      options: [
        { value: "A", label: "Always" },
        { value: "B", label: "Sometimes" },
        { value: "C", label: "Rarely" },
        { value: "D", label: "Never" },
      ],
    },
    heart2: {
      category: "Stiffness of Heart",
      content: "Do you prefer listening to music over Islamic content?",
      options: [
        { value: "A", label: "I mostly listen to Islamic content" },
        { value: "B", label: "I listen to both equally" },
        { value: "C", label: "I mostly listen to music" },
        { value: "D", label: "I never listen to Islamic content" },
      ],
    },
    arrogance: {
      category: "Arrogance & Humility",
      content:
        "Do you feel superior to others due to your wealth, knowledge, or status?",
      quranReference:
        '"And do not turn your cheek [in contempt] toward people and do not walk through the earth exultantly. Indeed, Allah does not like the arrogant and boastful." (Quran 31:18)',
      options: [
        { value: "A", label: "Never" },
        { value: "B", label: "Occasionally" },
        { value: "C", label: "Often" },
        { value: "D", label: "Always" },
      ],
    },
    charity: {
      category: "Charity & Generosity",
      content: "How often do you give charity (Sadaqah)?",
      quranReference:
        '"The example of those who spend their wealth in the way of Allah is like a seed of grain that sprouts seven ears; in every ear is a hundred grains..." (Quran 2:261)',
      options: [
        { value: "A", label: "Very often" },
        { value: "B", label: "Sometimes" },
        { value: "C", label: "Rarely" },
        { value: "D", label: "Never" },
      ],
    },
    jealousy1: {
      category: "Jealousy & Contentment",
      content: "Do you often compare yourself with others and feel jealous?",
      quranReference:
        '"Do not wish for what Allah has favored some of you over others..." (Quran 4:32)',
      options: [
        { value: "A", label: "Never" },
        { value: "B", label: "Occasionally" },
        { value: "C", label: "Often" },
        { value: "D", label: "Always" },
      ],
    },
    jealousy2: {
      category: "Jealousy & Contentment",
      content: "Do you find yourself complaining about your life?",
      options: [
        { value: "A", label: "Never" },
        { value: "B", label: "Occasionally" },
        { value: "C", label: "Often" },
        { value: "D", label: "Always" },
      ],
    },
    ibadah1: {
      category: "Laziness in Ibadah (Worship)",
      content: "How often do you pray your five daily Salah on time?",
      quranReference:
        '"Indeed, the prayer is a duty imposed on the believers at the appointed times." (Quran 4:103)',
      options: [
        { value: "A", label: "Always" },
        { value: "B", label: "Mostly" },
        { value: "C", label: "Occasionally" },
        { value: "D", label: "Rarely/Never" },
      ],
    },
    ibadah2: {
      category: "Laziness in Ibadah (Worship)",
      content: "Do you struggle to wake up for Fajr prayer?",
      options: [
        { value: "A", label: "Never" },
        { value: "B", label: "Sometimes" },
        { value: "C", label: "Often" },
        { value: "D", label: "Always" },
      ],
    },
    trials: {
      category: "Reaction to Trials & Hardships",
      content: "When faced with bad news, how do you react?",
      quranReference:
        '"And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give glad tidings to the patient." (Quran 2:155)',
      options: [
        {
          value: "A",
          label: "I immediately turn to Allah and say Alhamdulillah",
        },
        { value: "B", label: "I feel upset but try to be patient" },
        { value: "C", label: "I complain and feel frustrated" },
        { value: "D", label: "I react with anger and blame others" },
      ],
    },
    hinduismDose: {
      content:
        "Based on your beliefs in Hinduism, we have some specific resources that might interest you. Would you like to explore them?",
    },
    atheismDose: {
      content:
        "Based on your atheist/agnostic views, we have resources about the existence of God from a rational perspective. Would you like to explore them?",
    },
    judaismDose: {
      content:
        "Based on your belief in Judaism, we have some specific resources that might interest you. Would you like to explore them?",
    },
    christianityDose: {
      content:
        "Based on your Christian beliefs, we have some specific resources that might interest you. Would you like to explore them?",
    },
    suggestPD1: {
      content:
        "Based on your responses, we suggest learning more about the existence of God through our Primary Dose: Existence of God module.",
    },
    suggestPD2: {
      content:
        "Based on your responses, we suggest learning more about the oneness of God through our Primary Dose: Oneness of God module.",
    },
  };

  // Add this function to handle message-type questions
  const processMessageQuestion = (questionId: string) => {
    const nextQuestion = questionSequence[questionId].next;

    // If the next question is a function, call it to get the next question ID
    const nextQuestionId =
      typeof nextQuestion === "function"
        ? nextQuestion({ personalInfo, beliefInfo, imaanAnswers })
        : nextQuestion;

    setCurrentQuestion(nextQuestionId);

    // Add assistant message for the next question
    addMessage({
      role: "assistant",
      content:
        questions[nextQuestionId]?.content || "Thank you for your response.",
      question: nextQuestionId,
    });

    setShowInput(true);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Update the useEffect that handles the initial question
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

  // Add this new useEffect to handle message-type questions
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
    let displayValue = value;
    let nextQuestion: string | null = null;
    console.log("questionId", questionId);
    // Handle personal info questions
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
      displayValue = boolValue ? "Yes" : "No";
      nextQuestion = boolValue
        ? (questionSequence.believesInGod.next as string)
        : "atheismDose";
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
      console.log("value", value);
      const nextFn = questionSequence.whichReligion.next;

      console.log("nextFn", nextFn);
      nextQuestion =
        typeof nextFn === "function"
          ? nextFn({
              beliefInfo: { ...beliefInfo, whichReligion: value },
            })
          : (nextFn as string);
    } else if (
      // Handle Imaan questions
      questionId.startsWith("remorse") ||
      questionId.startsWith("heart") ||
      questionId === "arrogance" ||
      questionId === "charity" ||
      questionId.startsWith("jealousy") ||
      questionId.startsWith("ibadah") ||
      questionId === "trials"
    ) {
      console.log("questionId", questionId);
      setImaanAnswers((prev) => ({ ...prev, [questionId]: value }));
      const option = questions[questionId].options?.find(
        (opt) => opt.value === value
      );
      displayValue = option ? option.label : value;
      nextQuestion = questionSequence[questionId].next as string;
    }

    // Add user response to chat
    addMessage({
      role: "user",
      content: displayValue,
      question: questionId,
    });

    // Hide input temporarily
    setShowInput(false);

    // Process next question with a slight delay to simulate conversation
    setTimeout(() => {
      if (nextQuestion === "calculateResults") {
        calculateResults();
        setCurrentQuestion("showResults");

        // Add results message after a slight delay
        setTimeout(() => {
          addMessage({
            role: "assistant",
            content: "Here are your Imaan Diagnosis results:",
            question: "showResults",
          });
          setShowInput(true);
        }, 1000);
      } else {
        setCurrentQuestion(nextQuestion);

        // Add assistant message for the next question
        addMessage({
          role: "assistant",
          content:
            questions[nextQuestion]?.content || "Thank you for your response.",
          question: nextQuestion,
        });

        // Show input for next question
        setShowInput(true);
      }
    }, 1000);
  };

  const handleAgeInput = (value: string) => {
    setPersonalInfo((prev) => ({ ...prev, age: value }));

    addMessage({
      role: "user",
      content: `${value} years old`,
      question: "age",
    });

    setShowInput(false);

    setTimeout(() => {
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

    let level: string;
    let message: string;
    if (totalPoints >= 45) {
      level = "Strong Imaan";
      message =
        "MashaAllah, your Imaan is strong—Allahumma Barik! This is a beautiful blessing from Allah, and with it comes the test of staying humble. Shaytaan may try to whisper arrogance into your heart, but always remind yourself that this level of Imaan is purely a gift from Allah, and it can be taken away at any moment. Keep making du'a for steadfastness, sincerity, and protection from Shaytaan. May Allah keep you firm and increase you in goodness. You're doing great—just stay consistent and trust in Allah's mercy! 🤍";
    } else if (totalPoints >= 30) {
      level = "Moderate Imaan";
      message =
        "You have faith, but there are areas to improve. Keep making dua and increasing acts of worship.";
    } else if (totalPoints >= 20) {
      level = "Weak Imaan";
      message =
        "There are signs of heedlessness. You need to work on increasing your connection with Allah.";
    } else {
      level = "Low Imaan";
      message =
        "This is a warning sign. Reflect on your life and seek to return to Allah before it's too late.";
    }

    const resultData: Results = {
      totalPoints,
      maxPossible: answeredQuestions * 5,
      percentage: Math.round((totalPoints / (answeredQuestions * 5)) * 100),
      level,
      message,
      date: new Date().toLocaleString(),
      answers: imaanAnswers,
    };

    setResults(resultData);
    localStorage.setItem("imaanResults", JSON.stringify(resultData));
  };

  const handleSpecialDose = (dose: string) => {
    console.log(`Navigating to ${dose} dose page`);
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
    setResults(null);
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content:
          "Welcome to the Spirituality Diagnosis survey. Let's start with some personal information.",
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
          <div className="flex flex-col space-y-2">
            <Select
              onValueChange={(value) => handleSelect(value, currentQuestion)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={`Select ${currentQuestion}`} />
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
          </div>
        );
      case "radio":
        return (
          <RadioGroup
            className="flex gap-4"
            onValueChange={(value) => handleSelect(value, currentQuestion)}
          >
            {question.options?.map((option) => (
              <div
                key={option.value}
                className="flex items-center space-x-2 px-3 py-2 border rounded-md hover:cursor-pointer hover:bg-gray-200"
              >
                <RadioGroupItem
                  value={option.value}
                  id={`${currentQuestion}-${option.value}`}
                />
                <Label htmlFor={`${currentQuestion}-${option.value}`}>
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );
      case "input":
        return (
          <div className="flex space-x-2">
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
          </div>
        );
      case "results":
        return (
          results && (
            <div className="flex flex-col space-y-4">
              <div className="bg-slate-100 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">{results.level}</h3>
                <p className="text-sm">{results.message}</p>
                <div className="mt-2">
                  <span className="font-bold">{results.totalPoints}</span> /{" "}
                  {results.maxPossible} points ({results.percentage}%)
                </div>
              </div>
              <Button onClick={resetSurvey}>Retake Survey</Button>
            </div>
          )
        );
      case "specialDose":
        return (
          <div className="flex space-x-2">
            <Button onClick={() => handleSpecialDose(currentQuestion)}>
              Explore Resources
            </Button>
            <Button variant="outline" onClick={resetSurvey}>
              Restart Survey
            </Button>
          </div>
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
      showInput={showInput}
    />
  );
}
