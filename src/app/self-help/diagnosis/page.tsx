"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Book, Braces, Dot, Pill, SparkleIcon, User } from "lucide-react";
import ImaanStrengthening from "./ImaanStrenghtening";
import HinduismDose from "./HinduismDose";
import AtheismDose from "./AtheismDose";
import JudaismDose from "./JudaismDose";
import ChristianityDose from "./ChristianityDose";

export default function Home() {
  const [step, setStep] = useState("personal");
  const [personalInfo, setPersonalInfo] = useState({
    gender: "",
    age: "",
    ethnicity: "",
    religion: "",
  });
  const [beliefInfo, setBeliefInfo] = useState({
    believesInGod: null,
    howMany: null,
    whichReligion: "",
  });
  const [imaanAnswers, setImaanAnswers] = useState<{ [key: string]: string }>(
    {}
  );
  const [results, setResults] = useState<{
    totalPoints: number;
    maxPossible: number;
    percentage: number;
    level: string;
    message: string;
    date: string;
    answers: { [key: string]: string };
  } | null>(null);
  const [previousResults, setPreviousResults] = useState<{
    totalPoints: number;
    maxPossible: number;
    percentage: number;
    level: string;
    message: string;
    date: string;
    answers: { [key: string]: string };
  } | null>(null);

  useEffect(() => {
    // Check if there are previous results in localStorage
    const storedResults = localStorage.getItem("imaanResults");
    if (storedResults) {
      setPreviousResults(JSON.parse(storedResults));
    }
  }, []);

  const handlePersonalInfoChange = (field: string, value: string) => {
    setPersonalInfo({
      ...personalInfo,
      [field]: value,
    });
  };

  const handleBeliefChange = (field: string, value: string | boolean) => {
    setBeliefInfo({
      ...beliefInfo,
      [field]: value,
    });
  };

  const handleImaanAnswerChange = (questionId: string, value: string) => {
    setImaanAnswers({
      ...imaanAnswers,
      [questionId]: value,
    });
  };

  const handleNextStep = () => {
    if (step === "personal") {
      setStep("belief");
    } else if (step === "belief") {
      if (beliefInfo.believesInGod === false) {
        // If doesn't believe in God, suggest PD1
        setStep("atheism");
      } else if (beliefInfo.whichReligion === "hinduism") {
        setStep("hinduism");
      } else if (
        beliefInfo.whichReligion === "atheist" ||
        beliefInfo.whichReligion === "agnostic"
      ) {
        setStep("atheism");
      } else if (beliefInfo.whichReligion === "judaism") {
        setStep("judaism");
      } else if (beliefInfo.whichReligion === "christianity") {
        setStep("christianity");
      } else if (beliefInfo.howMany === "many") {
        // If believes in many gods, suggest PD2
        setStep("suggestPD2");
      } else if (beliefInfo.whichReligion.toLowerCase() === "islam") {
        // If follows Islam, start Imaan diagnosis
        setStep("imaanDiagnosis");
      } else {
        // For other religions, suggest PD1
        setStep("suggestPD1");
      }
    } else if (step === "imaanDiagnosis") {
      // Calculate results
      calculateResults();
      setStep("results");
    }
  };

  const calculateResults = () => {
    const pointValues = {
      A: 5,
      B: 3,
      C: 1,
      D: 0,
    };

    let totalPoints = 0;
    let answeredQuestions = 0;

    Object.values(imaanAnswers).forEach((answer) => {
      totalPoints += pointValues[answer as keyof typeof pointValues];
      answeredQuestions++;
    });

    let level;
    let message;
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

    const resultData = {
      totalPoints,
      maxPossible: answeredQuestions * 5,
      percentage: Math.round((totalPoints / (answeredQuestions * 5)) * 100),
      level,
      message,
      date: new Date().toLocaleString(),
      answers: imaanAnswers,
    };

    setResults(resultData);

    // Store in localStorage
    localStorage.setItem("imaanResults", JSON.stringify(resultData));
  };

  const resetSurvey = () => {
    setPersonalInfo({
      gender: "",
      age: "",
      ethnicity: "",
      religion: "",
    });
    setBeliefInfo({
      believesInGod: null,
      howMany: null,
      whichReligion: "",
    });
    setImaanAnswers({});
    setPreviousResults(results);
    setResults(null);
    setStep("personal");
  };

  // Define the Imaan diagnosis questions
  const imaanQuestions = [
    {
      id: "remorse1",
      category: "Remorse Upon Committing Sin",
      quranReference:
        '"And those who, when they commit an immorality or wrong themselves, remember Allah and seek forgiveness for their sins..." (Quran 3:135)',
      question: "Do you feel guilt or regret after committing a sin?",
      options: [
        { value: "A", label: "Always" },
        { value: "B", label: "Sometimes" },
        { value: "C", label: "Rarely" },
        { value: "D", label: "Never" },
      ],
    },
    {
      id: "remorse2",
      category: "Remorse Upon Committing Sin",
      question:
        "How often do you seek forgiveness from Allah (Astaghfirullah)?",
      options: [
        { value: "A", label: "Daily" },
        { value: "B", label: "Weekly" },
        { value: "C", label: "Occasionally" },
        { value: "D", label: "Rarely/Never" },
      ],
    },
    {
      id: "heart1",
      category: "Stiffness of Heart",
      quranReference:
        '"Has the time not come for those who have believed that their hearts should become humbly submissive at the remembrance of Allah..." (Quran 57:16)',
      question: "When you listen to Quran recitation, do you feel moved?",
      options: [
        { value: "A", label: "Always" },
        { value: "B", label: "Sometimes" },
        { value: "C", label: "Rarely" },
        { value: "D", label: "Never" },
      ],
    },
    {
      id: "heart2",
      category: "Stiffness of Heart",
      question: "Do you prefer listening to music over Islamic content?",
      options: [
        { value: "A", label: "I mostly listen to Islamic content" },
        { value: "B", label: "I listen to both equally" },
        { value: "C", label: "I mostly listen to music" },
        { value: "D", label: "I never listen to Islamic content" },
      ],
    },
    {
      id: "arrogance",
      category: "Arrogance & Humility",
      quranReference:
        '"And do not turn your cheek [in contempt] toward people and do not walk through the earth exultantly. Indeed, Allah does not like the arrogant and boastful." (Quran 31:18)',
      question:
        "Do you feel superior to others due to your wealth, knowledge, or status?",
      options: [
        { value: "A", label: "Never" },
        { value: "B", label: "Occasionally" },
        { value: "C", label: "Often" },
        { value: "D", label: "Always" },
      ],
    },
    {
      id: "charity",
      category: "Charity & Generosity",
      quranReference:
        '"The example of those who spend their wealth in the way of Allah is like a seed of grain that sprouts seven ears; in every ear is a hundred grains..." (Quran 2:261)',
      question: "How often do you give charity (Sadaqah)?",
      options: [
        { value: "A", label: "Very often" },
        { value: "B", label: "Sometimes" },
        { value: "C", label: "Rarely" },
        { value: "D", label: "Never" },
      ],
    },
    {
      id: "jealousy1",
      category: "Jealousy & Contentment",
      quranReference:
        '"Do not wish for what Allah has favored some of you over others..." (Quran 4:32)',
      question: "Do you often compare yourself with others and feel jealous?",
      options: [
        { value: "A", label: "Never" },
        { value: "B", label: "Occasionally" },
        { value: "C", label: "Often" },
        { value: "D", label: "Always" },
      ],
    },
    {
      id: "jealousy2",
      category: "Jealousy & Contentment",
      question: "Do you find yourself complaining about your life?",
      options: [
        { value: "A", label: "Never" },
        { value: "B", label: "Occasionally" },
        { value: "C", label: "Often" },
        { value: "D", label: "Always" },
      ],
    },
    {
      id: "ibadah1",
      category: "Laziness in Ibadah (Worship)",
      quranReference:
        '"Indeed, the prayer is a duty imposed on the believers at the appointed times." (Quran 4:103)',
      question: "How often do you pray your five daily Salah on time?",
      options: [
        { value: "A", label: "Always" },
        { value: "B", label: "Mostly" },
        { value: "C", label: "Occasionally" },
        { value: "D", label: "Rarely/Never" },
      ],
    },
    {
      id: "ibadah2",
      category: "Laziness in Ibadah (Worship)",
      question: "Do you struggle to wake up for Fajr prayer?",
      options: [
        { value: "A", label: "Never" },
        { value: "B", label: "Sometimes" },
        { value: "C", label: "Often" },
        { value: "D", label: "Always" },
      ],
    },
    {
      id: "trials",
      category: "Reaction to Trials & Hardships",
      quranReference:
        '"And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give glad tidings to the patient." (Quran 2:155)',
      question: "When faced with bad news, how do you react?",
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
  ];

  // Group questions by category for display
  const groupedQuestions: {
    [key: string]: {
      category: string;
      quranReference?: string;
      questions: (typeof imaanQuestions)[0][];
    };
  } = imaanQuestions.reduce(
    (
      acc: {
        [key: string]: {
          category: string;
          quranReference?: string;
          questions: (typeof imaanQuestions)[0][];
        };
      },
      question
    ) => {
      if (!acc[question.category]) {
        acc[question.category] = {
          category: question.category,
          quranReference: question.quranReference,
          questions: [],
        };
      }
      acc[question.category].questions.push(question);
      return acc;
    },
    {}
  );

  const getScoreColor = (score: number) => {
    if (score >= 45) {
      return "text-green-500";
    } else if (score >= 30) {
      return "text-amber-400";
    } else if (score >= 20) {
      return "text-amber-700";
    } else {
      return "text-rose-500";
    }
  };
  const getScoreBGColor = (score: number) => {
    if (score >= 45) {
      return "bg-green-50";
    } else if (score >= 30) {
      return "bg-amber-50";
    } else if (score >= 20) {
      return "bg-amber-50";
    } else {
      return "bg-rose-50";
    }
  };

  const recommendDose = () => {
    const totalPoints =
      results?.totalPoints ?? previousResults?.totalPoints ?? 0;

    if (totalPoints >= 45) {
      //congratulate and suggest good Duas to keep you firm in the imaan
      return <ImaanStrengthening />;
    } else if (totalPoints >= 35) {
      return (
        <Card>
          <CardHeader>
            <CardDescription>
              Based on your responses, we suggest you take a dose of Quick
              Recovery of Imaan.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Card
              className="border rounded-md overflow-hidden relative flex items-center gap-4 hover:bg-gray-200 hover:cursor-pointer"
              onClick={() =>
                (window.location.href = "/self-help/quick-recovery")
              }
            >
              <div className="flex items-center justify-center pl-6">
                <SparkleIcon size={40} color="purple" className="m-auto" />
              </div>

              <CardContent className="space-y-2">
                <CardTitle> Self-help: Quick Recovery</CardTitle>
                <CardDescription>
                  Practical, spiritual steps to strengthen your faith and
                  reconnect with Allah during times of weakness
                </CardDescription>
              </CardContent>
              <BorderBeam
                duration={6}
                size={400}
                className="from-transparent via-red-500 to-transparent"
              />
            </Card>
          </CardContent>
        </Card>
      );
    } else if (totalPoints >= 20) {
      //suggest RG1 RG2 RG3 to learn more about Islam
      return (
        <Card>
          <CardHeader>
            <CardDescription>
              Based on your responses, You are dire need of the following
              dosages:.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Card
              className="border rounded-md overflow-hidden relative flex items-center gap-4 hover:bg-gray-200 hover:cursor-pointer"
              onClick={() => (window.location.href = "/religion/imaan")}
            >
              <div className="flex items-center justify-center pl-6">
                <SparkleIcon size={40} color="purple" className="m-auto" />
              </div>

              <CardContent className="space-y-2">
                <CardTitle> Religion Dose: Imaan</CardTitle>
                <CardDescription>
                  Imaan is the second level of the Religion of Allah. It means
                  firm belief and consists of three basic aspects: conviction
                  with the heart, proclamation with the tongue, and action with
                  the limbs.
                </CardDescription>
              </CardContent>
              <BorderBeam
                duration={6}
                size={400}
                className="from-transparent via-red-500 to-transparent"
              />
            </Card>
            <Card
              className="border rounded-md overflow-hidden relative flex items-center gap-4 hover:bg-gray-200 hover:cursor-pointer"
              onClick={() => (window.location.href = "/religion/islam")}
            >
              <div className="flex items-center justify-center pl-6">
                <SparkleIcon size={40} color="purple" className="m-auto" />
              </div>

              <CardContent className="space-y-2">
                <CardTitle> Religion Dose: Islam</CardTitle>
                <CardDescription>
                  Discover the core teachings, history, and beauty of Islam
                  through this comprehensive guide.
                </CardDescription>
              </CardContent>
              <BorderBeam
                duration={6}
                size={400}
                className="from-transparent via-red-500 to-transparent"
              />
            </Card>
            <Card
              className="border rounded-md overflow-hidden relative flex items-center gap-4 hover:bg-gray-200 hover:cursor-pointer"
              onClick={() => (window.location.href = "/religion/islam")}
            >
              <div className="flex items-center justify-center pl-6">
                <SparkleIcon size={40} color="purple" className="m-auto" />
              </div>

              <CardContent className="space-y-2">
                <CardTitle> Religion Dose: Ihsaan</CardTitle>
                <CardDescription>
                  The fruit of our faith - striving for excellence and beauty in
                  everything we do for Allah.
                </CardDescription>
              </CardContent>
              <BorderBeam
                duration={6}
                size={400}
                className="from-transparent via-red-500 to-transparent"
              />
            </Card>
          </CardContent>
        </Card>
      );
    } else {
      //suggest PD1
      return (
        <Card>
          <CardHeader>
            <CardDescription>
              Based on your responses, we suggest you revisit the the concept of
              Spirituality and the need for Religion in One&apos;s life by
              taking these 4 doses:
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Card
              className="border rounded-md overflow-hidden relative flex items-center gap-4 hover:bg-gray-200 hover:cursor-pointer"
              onClick={() => (window.location.href = "/primary/god")}
            >
              <div className="flex items-center justify-center pl-6">
                <Dot size={40} className="m-auto text-primary" />
              </div>

              <CardContent>
                <CardTitle> Primary Dose: Existence of God</CardTitle>
                <CardDescription>
                  Explore the evidence for the Creator through common sense,
                  design, and universal order.
                </CardDescription>
              </CardContent>
              <BorderBeam
                duration={3}
                size={200}
                className="from-transparent via-red-500 to-transparent"
              />
            </Card>
            <Card
              className="border rounded-md overflow-hidden relative flex items-center gap-4 hover:bg-gray-200 hover:cursor-pointer"
              onClick={() => (window.location.href = "/primary/oneness")}
            >
              <div className="flex items-center justify-center pl-6">
                <Braces size={40} className="m-auto text-primary" />
              </div>

              <CardContent>
                <CardTitle> Primary Dose: Oneness of God</CardTitle>
                <CardDescription>
                  Explore why there can only be One Creator and why this Creator
                  must be different from everything in our universe.
                </CardDescription>
              </CardContent>
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-red-500 to-transparent"
              />
            </Card>

            <Card
              className="border rounded-md overflow-hidden relative flex items-center gap-4 hover:bg-gray-200 hover:cursor-pointer"
              onClick={() => (window.location.href = "/primary/revelation")}
            >
              <div className="flex items-center justify-center pl-6">
                <Book size={40} className="m-auto text-primary" />
              </div>

              <CardContent>
                <CardTitle> Primary Dose: Why Revelation</CardTitle>
                <CardDescription>
                  Exploring the necessity of revelation and why the Creator
                  would communicate with us
                </CardDescription>
              </CardContent>
              <BorderBeam
                duration={5}
                size={200}
                className="from-transparent via-red-500 to-transparent"
              />
            </Card>
            <Card
              className="border rounded-md overflow-hidden relative flex items-center gap-4 hover:bg-gray-200 hover:cursor-pointer"
              onClick={() => (window.location.href = "/primary/prophethood")}
            >
              <div className="flex items-center justify-center pl-6">
                <User size={40} className="m-auto text-primary" />
              </div>

              <CardContent>
                <CardTitle> Primary Dose: Why Prophet?</CardTitle>
                <CardDescription>
                  Explore the logical analysis of Prophet Muhammad&apos;s claim
                  to prophethood
                </CardDescription>
              </CardContent>
              <BorderBeam
                duration={4}
                size={350}
                className="from-transparent via-red-500 to-transparent"
              />
            </Card>
          </CardContent>
        </Card>
      );
    }
  };

  const renderDosesOnResults = (stepType: string) => {
    switch (stepType) {
      case "hinduism":
        return <HinduismDose setStep={setStep} resetSurvey={resetSurvey} />;

      case "atheism":
        return <AtheismDose setStep={setStep} resetSurvey={resetSurvey} />;
      case "judaism":
        return <JudaismDose setStep={setStep} resetSurvey={resetSurvey} />;
      case "christianity":
        return <ChristianityDose setStep={setStep} resetSurvey={resetSurvey} />;
      default:
        return <div>No dose found</div>;
    }
  };

  return (
    <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8 text-gre">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-start text-gray-900 dark:text-gray-50 mb-8">
          Spirituality Diagnosis
        </h1>

        {step === "personal" && (
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Please provide some basic information about yourself.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select
                    value={personalInfo.gender}
                    onValueChange={(value) =>
                      handlePersonalInfoChange("gender", value)
                    }
                  >
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Brother</SelectItem>
                      <SelectItem value="female">Sister</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    value={personalInfo.age}
                    onChange={(e) =>
                      handlePersonalInfoChange("age", e.target.value)
                    }
                    placeholder="Enter your age"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="nationality">Nationality</Label>
                <Select
                  value={personalInfo.ethnicity}
                  onValueChange={(value) =>
                    handlePersonalInfoChange("ethnicity", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your ethnicity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="african">African</SelectItem>
                      <SelectItem value="african_american">
                        African American
                      </SelectItem>
                      <SelectItem value="arab">Arab</SelectItem>
                      <SelectItem value="asian">Asian</SelectItem>
                      <SelectItem value="caribbean">Caribbean</SelectItem>
                      <SelectItem value="caucasian">Caucasian</SelectItem>
                      <SelectItem value="east_asian">East Asian</SelectItem>
                      <SelectItem value="hispanic_latino">
                        Hispanic/Latino
                      </SelectItem>
                      <SelectItem value="indigenous_american">
                        Indigenous American
                      </SelectItem>
                      <SelectItem value="indigenous_australian">
                        Indigenous Australian
                      </SelectItem>
                      <SelectItem value="middle_eastern">
                        Middle Eastern
                      </SelectItem>
                      <SelectItem value="north_african">
                        North African
                      </SelectItem>
                      <SelectItem value="pacific_islander">
                        Pacific Islander
                      </SelectItem>
                      <SelectItem value="south_asian">
                        South Asian (India,Pakistan,Bangladesh etc.)
                      </SelectItem>
                      <SelectItem value="southeast_asian">
                        Southeast Asian (China,Japan, Korea etc.)
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              {previousResults && (
                <Button variant="outline" onClick={() => setStep("results")}>
                  View Previous Results
                </Button>
              )}
              <Button
                onClick={handleNextStep}
                disabled={
                  !personalInfo.gender ||
                  !personalInfo.age ||
                  !personalInfo.ethnicity
                }
              >
                Next
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === "belief" && (
          <Card>
            <CardHeader>
              <CardTitle>Belief Information</CardTitle>
              <CardDescription>
                Please answer these questions about your beliefs.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label>Do you believe in God?</Label>
                <RadioGroup
                  value={
                    beliefInfo.believesInGod
                      ? "yes"
                      : beliefInfo.believesInGod === false
                      ? "no"
                      : ""
                  }
                  onValueChange={(value) =>
                    handleBeliefChange("believesInGod", value === "yes")
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="believes-yes" />
                    <Label htmlFor="believes-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="believes-no" />
                    <Label htmlFor="believes-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {beliefInfo.believesInGod && (
                <div className="space-y-3">
                  <Label>How many gods do you believe in?</Label>
                  <RadioGroup
                    value={beliefInfo.howMany || ""}
                    onValueChange={(value) =>
                      handleBeliefChange("howMany", value)
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="one" id="gods-one" />
                      <Label htmlFor="gods-one">One</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="many" id="gods-many" />
                      <Label htmlFor="gods-many">Many</Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              {(beliefInfo.howMany === "one" ||
                beliefInfo.howMany === "many") && (
                <div className="space-y-2">
                  <Label htmlFor="religion">
                    Which religion do you follow?
                  </Label>

                  <Select
                    value={beliefInfo.whichReligion}
                    onValueChange={(value) =>
                      handleBeliefChange("whichReligion", value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your religion" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="agnostic">Agnostic</SelectItem>
                        <SelectItem value="atheist">Atheist</SelectItem>
                        <SelectItem value="buddhism">Buddhism</SelectItem>
                        <SelectItem value="christianity">
                          Christianity
                        </SelectItem>
                        <SelectItem value="hinduism">Hinduism</SelectItem>
                        <SelectItem value="islam">Islam</SelectItem>
                        <SelectItem value="judaism">Judaism</SelectItem>
                        <SelectItem value="sikhism">Sikhism</SelectItem>
                        <SelectItem value="taoism">Taoism</SelectItem>
                        <SelectItem value="jainism">Jainism</SelectItem>
                        <SelectItem value="shinto">Shinto</SelectItem>
                        <SelectItem value="paganism">Paganism</SelectItem>
                        <SelectItem value="spiritual">
                          Spiritual But Not Religious
                        </SelectItem>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setStep("personal")}>
                Back
              </Button>
              <Button
                onClick={handleNextStep}
                disabled={
                  beliefInfo.believesInGod === null ||
                  (beliefInfo.believesInGod && beliefInfo.howMany === null) ||
                  (beliefInfo.howMany === "one" && !beliefInfo.whichReligion)
                }
              >
                Next
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === "suggestPD1" && (
          <Card>
            <CardHeader>
              <CardDescription>
                Based on your responses, we suggest learning more about the
                existence of God.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Card
                className="border rounded-md overflow-hidden relative flex items-center gap-4 hover:bg-gray-200 hover:cursor-pointer"
                onClick={() => (window.location.href = "/primary/god")}
              >
                <div className="flex items-center justify-center pl-6">
                  <Dot size={40} color="purple" className="m-auto" />
                </div>

                <CardContent className="space-y-2">
                  <CardTitle> Primary Dose: Existence of God</CardTitle>
                  <CardDescription>
                    Explore the evidence for the Creator through common sense,
                    design, and universal order.
                  </CardDescription>
                </CardContent>
                <BorderBeam
                  duration={6}
                  size={400}
                  className="from-transparent via-red-500 to-transparent"
                />
              </Card>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setStep("belief")}>
                Back
              </Button>
              <Button onClick={resetSurvey}>Restart Survey</Button>
            </CardFooter>
          </Card>
        )}

        {step === "suggestPD2" && (
          <Card>
            <CardHeader>
              <CardDescription>
                Based on your responses, we suggest learning more about the
                oneness of God, which will use Reason and logic to prove that
                there can be only One true God.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Card
                className="border rounded-md overflow-hidden relative flex items-center gap-4 hover:bg-gray-200 hover:cursor-pointer"
                onClick={() => (window.location.href = "/primary/oneness")}
              >
                <div className="flex items-center justify-center pl-6">
                  <Pill size={40} color="purple" className="m-auto" />
                </div>

                <CardContent>
                  <CardTitle> Primary Dose: Oneness of God</CardTitle>
                  <CardDescription>
                    Explore why there can only be One Creator and why this
                    Creator must be different from everything in our universe.
                  </CardDescription>
                </CardContent>
                <BorderBeam
                  duration={6}
                  size={400}
                  className="from-transparent via-red-500 to-transparent"
                />
              </Card>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setStep("belief")}>
                Back
              </Button>
              <Button onClick={resetSurvey}>Restart Survey</Button>
            </CardFooter>
          </Card>
        )}

        {step === "imaanDiagnosis" && (
          <Card>
            <CardHeader>
              <CardTitle>Imaan Diagnosis</CardTitle>
              <CardDescription>
                Please answer these questions honestly to assess your Imaan
                (faith).
              </CardDescription>
              <div className="mt-2">
                <Progress
                  value={
                    (Object.keys(imaanAnswers).length / imaanQuestions.length) *
                    100
                  }
                />
                <p className="text-sm text-gray-500 mt-1">
                  {Object.keys(imaanAnswers).length} of {imaanQuestions.length}{" "}
                  questions answered
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.values(groupedQuestions).map((group) => (
                <div key={group.category} className="space-y-4">
                  <div className="border-b pb-2">
                    <h3 className="font-medium text-lg">{group.category}</h3>
                    {group.quranReference && (
                      <p className="text-sm text-gray-600 italic mt-1">
                        {group.quranReference}
                      </p>
                    )}
                  </div>

                  {group.questions.map((question) => (
                    <div
                      key={question.id}
                      className="pl-4 border-l-2 border-gray-200 space-y-2"
                    >
                      <p className="font-medium">{question.question}</p>
                      <RadioGroup
                        value={imaanAnswers[question.id] || ""}
                        onValueChange={(value) =>
                          handleImaanAnswerChange(question.id, value)
                        }
                      >
                        {question.options.map((option) => (
                          <div
                            key={option.value}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem
                              value={option.value}
                              id={`${question.id}-${option.value}`}
                            />
                            <Label htmlFor={`${question.id}-${option.value}`}>
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  ))}
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setStep("belief")}>
                Back
              </Button>
              <Button
                onClick={handleNextStep}
                disabled={
                  Object.keys(imaanAnswers).length < imaanQuestions.length
                }
              >
                Submit
              </Button>
            </CardFooter>
          </Card>
        )}
        {step === "hinduism" && renderDosesOnResults("hinduism")}
        {step === "atheism" && renderDosesOnResults("atheism")}
        {step === "judaism" && renderDosesOnResults("judaism")}
        {step === "christianity" && renderDosesOnResults("christianity")}

        {step === "results" && (
          <Card>
            <CardHeader>
              <CardTitle>
                {results ? "Your Imaan Diagnosis Results" : "Previous Results"}
              </CardTitle>
              <CardDescription>
                {results
                  ? "Here are your assessment results"
                  : "Here are your previous assessment results"}
                {(results || previousResults) &&
                  ` from ${(results || previousResults)?.date}`}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {(results || previousResults) && (
                <>
                  <div className="text-center py-4">
                    <div
                      className={`inline-flex items-center justify-center p-4 ${getScoreBGColor(
                        results?.totalPoints ??
                          previousResults?.totalPoints ??
                          0
                      )} rounded-full mb-4 ${getScoreColor(
                        results?.totalPoints ??
                          previousResults?.totalPoints ??
                          0
                      )}`}
                    >
                      <span className="text-4xl font-bold ">
                        {results?.totalPoints || previousResults?.totalPoints}
                      </span>
                      <span className="text-lg ml-1">
                        / {results?.maxPossible || previousResults?.maxPossible}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">
                      {(results || previousResults)?.level}
                    </h3>
                    <p className="text-gray-600">
                      {(results || previousResults)?.message}
                    </p>
                  </div>
                  <div>{recommendDose()}</div>
                </>
              )}
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button onClick={resetSurvey}>Retake Survey</Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
}
