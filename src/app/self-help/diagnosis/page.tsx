import ChatSurvey from "./ChatSurvey";

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-gray-700 bg-gray-200">
      <ChatSurvey />
      {/* <div className="max-w-3xl mx-auto">
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
      </div> */}
    </div>
  );
}
