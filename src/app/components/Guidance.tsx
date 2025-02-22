"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function IslamicGuidance() {
  const [activeTab, setActiveTab] = useState("primary");

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <Tabs
        defaultValue="primary"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2 mb-3 h-12">
          <TabsTrigger value="primary" className="text-lg">
            Primary Foundations
          </TabsTrigger>
          <TabsTrigger value="religious" className="text-lg">
            Religious Practice
          </TabsTrigger>
        </TabsList>

        <TabsContent value="primary" className="mt-0">
          <Card className="shadow-none border">
            <CardHeader>
              <CardTitle className="text-xl text-emerald-700">
                Primary Foundations of Faith
              </CardTitle>
              <CardDescription>
                Core concepts establishing the foundation of Islamic belief
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="god">
                  <AccordionTrigger className="text-lg font-medium">
                    God
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pl-6 space-y-3">
                      <li className="text-slate-700">
                        <span className="font-medium">Existence of God:</span>{" "}
                        The Islamic understanding of God&apos;s existence
                        through rational and spiritual proofs
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">
                          Creation of Universe:
                        </span>{" "}
                        How the universe&apos;s origin points to divine design
                        and purpose
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">
                          Complexity of Universe:
                        </span>{" "}
                        The intricate balance and design in creation as evidence
                        of divine intelligence
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="oneness">
                  <AccordionTrigger className="text-lg font-medium">
                    Oneness of God (Tawhid)
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pl-6 space-y-3">
                      <li className="text-slate-700">
                        <span className="font-medium">Infinite Regress:</span>{" "}
                        Philosophical proof for the necessity of One Ultimate
                        Creator
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">Signs in Nature:</span>{" "}
                        Observable harmony in creation pointing to a single
                        Designer
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="revelation">
                  <AccordionTrigger className="text-lg font-medium">
                    Revelation
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pl-6 space-y-3">
                      <li className="text-slate-700">
                        <span className="font-medium">Its Necessity:</span> Why
                        divine guidance is needed for humanity
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">Preservation:</span> How
                        revelation has been preserved throughout history
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">Miracles:</span>{" "}
                        Supernatural events supporting divine revelation
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">Its Impact:</span> The
                        transformative effects of revelation on individuals and
                        societies
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="prophet">
                  <AccordionTrigger className="text-lg font-medium">
                    Prophet
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pl-6 space-y-3">
                      <li className="text-slate-700">
                        <span className="font-medium">
                          Necessity for Guidance:
                        </span>{" "}
                        Why prophets are essential for divine guidance to reach
                        humanity
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">
                          Miracles by Prophet:
                        </span>{" "}
                        Signs and wonders performed to validate prophetic
                        mission
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">Seerah:</span> The
                        exemplary life and character of Prophet Muhammad (peace
                        be upon him)
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="religious" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-emerald-700">
                Religious Practice & Spirituality
              </CardTitle>
              <CardDescription>
                Practical application of faith in daily life and spiritual
                development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="core-concepts">
                  <AccordionTrigger className="text-lg font-medium">
                    Core Concepts
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pl-6 space-y-3">
                      <li className="text-slate-700">
                        <span className="font-medium">Who is Allah:</span>{" "}
                        Exploring the attributes and names of Allah
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">Tawheed:</span> The
                        practical understanding of God&apos;s oneness in worship
                        and daily life
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">Religions:</span>{" "}
                        Understanding Islam&apos;s relationship to other faiths
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">Quran:</span> The central
                        scripture of Islam - its revelation, compilation and
                        guidance
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">Prophet:</span> The role
                        of Prophet Muhammad (peace be upon him) as the final
                        messenger
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="degrees">
                  <AccordionTrigger className="text-lg font-medium">
                    Degrees of Religion
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pl-6 space-y-3">
                      <li className="text-slate-700">
                        <span className="font-medium">Islam:</span> Outward
                        submission through practice and ritual
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">Imaan:</span> Inner faith
                        and conviction in the heart
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">Ihsaan:</span> Excellence
                        in worship with complete mindfulness of Allah
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pillars">
                  <AccordionTrigger className="text-lg font-medium">
                    Pillars & Foundations
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">
                          Five Pillars of Islam:
                        </h4>
                        <ul className="pl-6 space-y-1">
                          <li className="text-slate-700">
                            Shahada (Declaration of Faith)
                          </li>
                          <li className="text-slate-700">Salah (Prayer)</li>
                          <li className="text-slate-700">
                            Zakat (Obligatory Charity)
                          </li>
                          <li className="text-slate-700">Sawm (Fasting)</li>
                          <li className="text-slate-700">Hajj (Pilgrimage)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">
                          Six Pillars of Iman:
                        </h4>
                        <ul className="pl-6 space-y-1">
                          <li className="text-slate-700">Belief in Allah</li>
                          <li className="text-slate-700">
                            Belief in His Angels
                          </li>
                          <li className="text-slate-700">
                            Belief in His Books
                          </li>
                          <li className="text-slate-700">
                            Belief in His Messengers
                          </li>
                          <li className="text-slate-700">
                            Belief in the Day of Judgment
                          </li>
                          <li className="text-slate-700">
                            Belief in Divine Decree
                          </li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="spiritual">
                  <AccordionTrigger className="text-lg font-medium">
                    Spiritual Mountain
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pl-6 space-y-3">
                      <li className="text-slate-700">
                        <span className="font-medium">Quran:</span> Study and
                        recitation of the divine revelation
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">Tafsīr:</span>{" "}
                        Interpretation and explanation of Quranic verses
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">Tajwīd:</span> Proper
                        pronunciation and recitation of the Quran
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">Ḥadith:</span> Study of
                        the Prophet&apos;s sayings and traditions
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">Sīrah:</span> Biography
                        and life events of Prophet Muhammad
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">Aqīdah:</span> Islamic
                        creed and doctrines of faith
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">Sharīʿah:</span> Divine
                        law guiding human conduct
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">Fiqh:</span> Islamic
                        jurisprudence and practical application of Shariah
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">Nafs:</span> Purification
                        of the soul and spiritual development
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="actions">
                  <AccordionTrigger className="text-lg font-medium">
                    Categories of Actions
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pl-6 space-y-3">
                      <li className="text-slate-700">
                        <span className="font-medium">
                          Obligatory (Farḍ/Wājib):
                        </span>{" "}
                        Actions required of every Muslim
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">
                          Recommended (Mustaḥabb/Mandūb):
                        </span>{" "}
                        Encouraged but not mandatory actions
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">
                          Permissible (Ḥalāl/Mubāḥ):
                        </span>{" "}
                        Neutral actions with no religious consequence
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">
                          Discouraged (Makrūh):
                        </span>{" "}
                        Actions better to avoid but not sinful
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">Forbidden (Ḥarām):</span>{" "}
                        Prohibited actions in Islam
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="spiritual-practices">
                  <AccordionTrigger className="text-lg font-medium">
                    Spiritual Practices
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pl-6 space-y-3">
                      <li className="text-slate-700">
                        <span className="font-medium">Dhikr and Dua:</span>{" "}
                        Remembrance of Allah and supplication to soften the
                        heart
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">
                          Mercy & Forgiveness:
                        </span>{" "}
                        Understanding Allah&apos;s infinite mercy and love for
                        His servants
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">
                          Seeking Forgiveness:
                        </span>{" "}
                        The importance of Istighfar (asking Allah for
                        forgiveness)
                      </li>
                      <li className="text-slate-700">
                        <span className="font-medium">Gratitude to Allah:</span>{" "}
                        Developing shukr (thankfulness) for all blessings
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default IslamicGuidance;
