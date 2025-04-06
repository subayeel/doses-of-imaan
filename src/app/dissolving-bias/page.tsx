/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Check,
  Brain,
  Globe,
  EyeOff,
  Logs,
  ChevronRight,
  ArrowUp,
  Feather,
  ArrowLeft,
  PieChart,
  Lightbulb,
} from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// interface DissolvingBiasesProps {
//   userCountry: string;
//   userReligion: string;
// }

const DissolvingBiases = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const contents = useMemo(() => {
    return [
      {
        id: "introduction",
        title: "Understanding Bias",
        icon: Brain,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
      // {
      //   id: "causes-of-bias",
      //   title: "Causes of Bias",
      //   icon: Layers,
      //   color: "bg-orange-100 dark:bg-orange-900",
      //   iconColor: "text-orange-500",
      // },
      {
        id: "types-of-bias",
        title: "Common Biases",
        icon: PieChart,
        color: "bg-purple-100 dark:bg-purple-900",
        iconColor: "text-purple-500",
      },
      {
        id: "overcoming-bias",
        title: "10 Steps to Overcome Bias",
        icon: Lightbulb,
        color: "bg-green-100 dark:bg-green-900",
        iconColor: "text-green-500",
      },
      {
        id: "bias-against-islam",
        title: "Bias Against Islam",
        icon: Globe,
        color: "bg-red-100 dark:bg-red-900",
        iconColor: "text-red-500",
      },
    ];
  }, []);

  // Set up Intersection Observer to track which section is in view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const currentRefs = sectionRefs.current;

    // Observe all section elements
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element;
        observer.observe(element);
      }
    });

    return () => {
      // Clean up observer
      contents.forEach(({ id }) => {
        const element = currentRefs[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [contents]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-800 dark:from-teal-700 dark:to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <EyeOff className="text-teal-200 hidden md:block" size={32} />
            <h1 className="text-4xl font-bold">Dissolving Biases</h1>
          </div>
          <p className="text-xl max-w-2xl text-teal-100">
            A journey toward understanding and overcoming prejudices that affect
            our perception of a community across different nationalities and
            ethnicities.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              className="bg-white text-teal-700 hover:bg-teal-50"
              onClick={() => scrollToSection("overcoming-bias")}
            >
              Learn the 10 Steps <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="border-white bg-stone-200 text-teal-700 hover:bg-stone-50"
              onClick={() => scrollToSection("introduction")}
            >
              Start with Understanding
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="hidden xl:block col-span-1">
            <div className="sticky top-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contents</CardTitle>
                  <CardDescription>
                    Key concepts in understanding and overcoming bias
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-1">
                    {contents.map(({ id, title, icon: Icon, iconColor }) => (
                      <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className={`flex items-center gap-3 p-3 w-full text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                          activeSection === id
                            ? "bg-gray-100 dark:bg-gray-800 font-medium"
                            : ""
                        }`}
                      >
                        <Icon className={iconColor} size={18} />
                        <span>{title}</span>
                        {activeSection === id && (
                          <ChevronRight className="ml-auto" size={16} />
                        )}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="xl:col-span-3 space-y-12">
            {/* Introduction Section */}
            <section id="introduction" className="scroll-mt-20">
              <Card className="border-l-4 border-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Brain className="text-blue-500" size={24} />
                    </div>
                    <CardTitle>Understanding Bias</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Bias is a tendency to favor or dislike a person, group, or
                    idea in a way that prevents objective consideration of an
                    issue. It operates through cognitive shortcuts that our
                    brains use to process information efficiently, but these
                    shortcuts can lead to unfair judgments and decisions.
                  </p>

                  <p className="text-lg leading-relaxed">
                    All human minds are subject to bias - it's a natural aspect
                    of information processing that helps us navigate a complex
                    world. However, when these mental shortcuts lead to
                    prejudice against entire communities, they become harmful
                    and require conscious effort to address.
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      The Mechanics of Bias:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Cognitive Shortcuts:</strong> Our brains
                          create mental models based on previous experiences,
                          cultural messages, and environmental cues to make
                          quick judgments.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Implicit Processing:</strong> Most biases
                          operate at an unconscious level, influencing our
                          perceptions and decisions outside of our awareness.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-green-500 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Reinforcement Cycles:</strong> Media
                          portrayals, social circles, and selective attention
                          can create feedback loops that strengthen existing
                          biases over time.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-lg leading-relaxed">
                    Self-awareness about these cognitive processes is the first
                    step toward mitigating bias. Research in cognitive
                    psychology shows that simply understanding that biases exist
                    begins the process of reducing their impact on our thinking
                    and decision-making.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Types of Bias Section */}
            <section id="types-of-bias" className="scroll-mt-20">
              <Card className="border-l-4 border-purple-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <PieChart className="text-purple-500" size={24} />
                    </div>
                    <CardTitle>
                      Common Biases Affecting Our Perception
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Cognitive psychology has identified several types of biases
                    that particularly influence how we perceive others. Let's
                    explore two of the most significant ones that affect social
                    perception:
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Confirmation Bias:
                    </h3>
                    <p className="mb-4">
                      This is our tendency to search for, interpret, and
                      remember information that confirms our pre-existing
                      beliefs while giving less attention to information that
                      contradicts them.
                    </p>
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg mb-4">
                      <p>
                        <strong>Example:</strong> If you believe a certain group
                        is prone to violence, you might notice and remember news
                        stories about incidents involving that group while
                        overlooking the countless instances of community
                        service, charitable work, and peaceful engagement by
                        members of the same group.
                      </p>
                    </div>
                    <p>
                      Research shows this bias creates a self-reinforcing cycle
                      that makes it difficult to change opinions even when
                      presented with substantial contradictory evidence. Studies
                      by Lord, Ross, and Lepper demonstrated that people often
                      become more entrenched in their beliefs when confronted
                      with mixed evidence.
                    </p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      The Dunning-Kruger Effect:
                    </h3>
                    <p className="mb-4">
                      This cognitive bias, identified by psychologists David
                      Dunning and Justin Kruger, occurs when people with limited
                      knowledge or competence in a specific area overestimate
                      their knowledge or ability.
                    </p>
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg mb-4">
                      <p>
                        <strong>Example:</strong> Someone who has read a few
                        articles about a different culture might feel confident
                        making sweeping statements about what all members of
                        that culture believe or how they behave, without
                        recognizing the depth, diversity, and complexity within
                        any cultural tradition.
                      </p>
                    </div>
                    <p>
                      This bias leads people to make judgments with great
                      certainty despite having minimal actual knowledge about a
                      subject. Conversely, those with genuine expertise tend to
                      recognize the limitations of their knowledge and express
                      more nuanced views.
                    </p>
                  </div>

                  <p className="text-lg leading-relaxed">
                    Recognizing these biases in ourselves is an important step
                    toward more fair and accurate understanding. The good news
                    is that awareness alone begins to reduce their effect on our
                    thinking, and deliberate cognitive strategies can further
                    mitigate their impact.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Overcoming Bias Section */}
            <section id="overcoming-bias" className="scroll-mt-20">
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Lightbulb className="text-green-500" size={24} />
                    </div>
                    <CardTitle>10 Steps to Overcome Bias</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    Breaking free from cognitive biases takes conscious effort
                    and practice. Based on research in cognitive psychology and
                    behavioral science, here are ten evidence-based steps you
                    can take to overcome biases toward any group:
                  </p>

                  <div className="space-y-6 my-6">
                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">
                        1. Metacognitive Awareness
                      </h3>
                      <p>
                        Recognize that biases exist in everyone. Learn about
                        different types of biases and how they affect your
                        thinking. Research shows that developing awareness of
                        cognitive processes is the first step to changing them.
                      </p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">
                        2. Seek Diverse Perspectives
                      </h3>
                      <p>
                        Actively look for voices from different backgrounds.
                        Read books by authors from varied cultural traditions,
                        follow thought leaders with different perspectives, and
                        engage with viewpoints that challenge your assumptions.
                      </p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">
                        3. Practice Deliberative Thinking
                      </h3>
                      <p>
                        When you find yourself making quick judgments, pause.
                        Studies show that taking time to analyze situations
                        carefully and considering all available information
                        before drawing conclusions significantly reduces bias.
                      </p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">
                        4. Question Default Assumptions
                      </h3>
                      <p>
                        Ask yourself, "What assumptions am I making?" and "What
                        evidence would change my mind?" Research shows that
                        being open to the possibility of being mistaken creates
                        cognitive flexibility that reduces bias.
                      </p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">
                        5. Rely on Statistical Thinking
                      </h3>
                      <p>
                        Look for reliable statistics and peer-reviewed research
                        rather than relying on anecdotes or selective media
                        reporting. Studies show that using representative data
                        helps overcome the availability bias that makes rare but
                        memorable events seem more common.
                      </p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">
                        6. Implement Structured Decision-Making
                      </h3>
                      <p>
                        Use frameworks that force you to consider multiple
                        factors before forming an opinion. For example, when
                        evaluating a news story, consider the source
                        reliability, historical context, alternative
                        perspectives, and what information might be missing from
                        the account.
                      </p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">
                        7. Embrace Cognitive Dissonance
                      </h3>
                      <p>
                        When you encounter information that challenges your
                        existing beliefs, sit with the discomfort rather than
                        dismissing the new information. Psychological research
                        shows that this temporary discomfort is actually the
                        feeling of mental growth and learning.
                      </p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">
                        8. Practice Mindfulness
                      </h3>
                      <p>
                        Develop awareness of your thoughts and feelings when
                        encountering people from different groups or information
                        about them. Research in neuroscience shows that noticing
                        when biases might be influencing your reactions without
                        judgment allows you to consciously choose how to
                        respond.
                      </p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">
                        9. Seek Honest Feedback
                      </h3>
                      <p>
                        Discuss your views with trusted friends who can provide
                        honest feedback, especially those who might have
                        different perspectives. If possible, build relationships
                        with people from different backgrounds who can share
                        their lived experiences.
                      </p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">
                        10. Cultivate Intellectual Humility
                      </h3>
                      <p>
                        Approach topics with humility and a willingness to
                        change your mind. Research by Samuelson and colleagues
                        shows that intellectual humility—recognizing the limits
                        of one's knowledge—correlates with reduced prejudice and
                        more accurate understanding.
                      </p>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed">
                    These steps are not a one-time fix but an ongoing practice.
                    With consistent effort, research suggests you can
                    significantly reduce the influence of biases on your
                    perception of others and move toward a more accurate and
                    fair understanding of the world.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Bias Against Islam Section - Keeping as is */}
            {/* Bias Against Muslims in India Section */}
            <section id="bias-against-islam" className="scroll-mt-20">
              <Card className="border-l-4 border-amber-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                      <Globe className="text-amber-500" size={24} />
                    </div>
                    <CardTitle>Biases Against Muslims in India</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    In the Indian context, biases against Muslims have complex
                    historical, social, and political roots. Understanding these
                    factors is essential for fostering harmony and addressing
                    prejudice.
                  </p>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Historical and Political Factors:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Check className="text-amber-600 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Partition Legacy:</strong> The 1947 Partition
                          created lasting trauma and suspicion, with some
                          incorrectly associating Indian Muslims with Pakistan
                          despite their choice to remain in India.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-amber-600 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Colonial Division:</strong> British "divide
                          and rule" policies deepened religious divisions, with
                          historical narratives often emphasizing conflicts
                          while overlooking centuries of peaceful coexistence.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-amber-600 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Political Polarization:</strong> Some
                          political actors use religious identity to mobilize
                          voter bases, portraying Muslims as "the other" to
                          consolidate support.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Media and Social Factors:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Check className="text-amber-600 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Media Representation:</strong> Sensationalist
                          coverage often disproportionately links Muslims to
                          negative news, reinforcing stereotypes rather than
                          showcasing diversity within the community.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-amber-600 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Misinformation:</strong> Social media has
                          amplified false narratives and stereotypes, with
                          misleading content spreading rapidly and reinforcing
                          existing prejudices.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-amber-600 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Socioeconomic Disparities:</strong> The Sachar
                          Committee Report (2006) documented significant
                          socioeconomic disadvantages faced by Muslims, which
                          can fuel stereotypes and marginalization.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Breaking Through Biases:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <Check className="text-amber-600 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Interfaith Dialogue:</strong> Creating spaces
                          for meaningful interaction between different
                          communities helps replace stereotypes with authentic
                          understanding.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-amber-600 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Media Literacy:</strong> Developing critical
                          thinking skills to evaluate news sources and recognize
                          bias in reporting is essential for combating
                          misinformation.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-amber-600 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Cultural Exchange:</strong> Promoting shared
                          cultural experiences like literature, art, and food
                          can build bridges across perceived divides.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-amber-600 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Education:</strong> Learning about the
                          diversity within Islam and the significant
                          contributions of Muslims to Indian culture, science,
                          and history helps counter one-dimensional stereotypes.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-lg leading-relaxed">
                    Addressing biases requires both individual reflection and
                    collective action. By acknowledging these factors and
                    actively working to counter stereotypes, we can move toward
                    a more inclusive society that recognizes our shared humanity
                    across religious differences.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="rounded-full h-14 w-14 shadow-lg bg-teal-600 hover:bg-teal-700">
              <Logs size={24} />
            </Button>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-64 p-0 mr-6 mb-2">
            <nav className="max-h-80 overflow-y-auto">
              {contents.map(({ id, title, icon: Icon, iconColor }) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                  }}
                  className={`flex items-center gap-3 p-3 w-full text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    activeSection === id
                      ? "bg-gray-100 dark:bg-gray-800 font-medium"
                      : ""
                  }`}
                >
                  <Icon className={iconColor} size={18} />
                  <span>{title}</span>
                  {activeSection === id && (
                    <ChevronRight className="ml-auto" size={16} />
                  )}
                </button>
              ))}
            </nav>
          </PopoverContent>
        </Popover>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Feather className="text-teal-600" size={18} />
            <h3 className="text-lg font-medium">
              Growing Together in Understanding
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            May we all continue to grow in our understanding of each other,
            moving beyond biases to see the humanity we share across all
            backgrounds, religions, and cultures.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => (window.location.href = "/")}
            >
              <ArrowLeft size={14} /> Back to Journey
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Back to Top <ArrowUp size={14} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DissolvingBiases;

//    {/* Causes of Bias Section - Dynamic based on user's location/background */}
//    <section id="causes-of-bias" className="scroll-mt-20">
//    <Card className="border-l-4 border-orange-500">
//      <CardHeader className="pb-2">
//        <div className="flex items-center gap-3">
//          <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
//            <Layers className="text-orange-500" size={24} />
//          </div>
//          <CardTitle>
//            Causes of Bias - The {userCountry} Context
//          </CardTitle>
//        </div>
//      </CardHeader>
//      <CardContent className="pt-4 space-y-4">
//        <p className="text-lg leading-relaxed">
//          Biases have specific historical, cultural, and social roots
//          that vary across different regions and contexts. In{" "}
//          {userCountry}, these factors create unique patterns that
//          influence how people perceive different groups and ideas.
//        </p>

//        <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg my-6">
//          <h3 className="text-xl font-semibold mb-4">
//            Factors Contributing to Bias in {userCountry}:
//          </h3>

//          {/* This section would be populated from a JSON file with country-specific content */}
//          <div className="italic text-gray-600 dark:text-gray-400 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
//            [Dynamic content about specific causes of bias in the
//            user's country will be loaded here from external data]
//          </div>

//          <div className="mt-6">
//            <h4 className="font-medium mb-2">
//              For those coming from a {userReligion} background:
//            </h4>
//            <div className="italic text-gray-600 dark:text-gray-400 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
//              [Dynamic content about how the user's religious
//              background might influence perceptions of Islam will be
//              loaded here]
//            </div>
//          </div>
//        </div>

//        <p className="text-lg leading-relaxed">
//          Understanding these contextual influences helps us recognize
//          that biases aren't simply personal failings but are shaped
//          by broader societal forces. This environmental perspective
//          allows for more effective strategies to address and overcome
//          prejudice.
//        </p>
//      </CardContent>
//    </Card>
//  </section>
