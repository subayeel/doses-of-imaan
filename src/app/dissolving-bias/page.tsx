/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  Check,
  Brain,
  Globe,
  EyeOff,
  ChevronRight,
  ArrowUp,
  ArrowLeft,
  PieChart,
  Lightbulb,
  Menu,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const DissolvingBiases = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contents = useMemo(() => {
    return [
      {
        id: "introduction",
        title: "Understanding Bias",
        icon: Brain,
        color: "bg-blue-100 dark:bg-blue-900",
        iconColor: "text-blue-500",
      },
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

    // Observe all section elements
    contents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      contents.forEach(({ id }) => {
        const element = document.getElementById(id);
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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Clean Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <EyeOff
                className="text-teal-600 dark:text-teal-400 hidden md:block"
                size={28}
              />
              <h1 className="text-2xl md:text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Dissolving Biases
              </h1>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 font-light">
            A journey toward understanding and overcoming prejudices that affect
            our perception of communities across different backgrounds
          </p>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black/20"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl p-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Contents</h2>
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <nav className="space-y-3">
              {contents.map(({ id, title, icon: Icon, iconColor }) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-md transition-colors ${
                    activeSection === id
                      ? "bg-gray-100 dark:bg-gray-800 font-medium"
                      : "hover:bg-gray-50 dark:hover:bg-gray-800"
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
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {/* Quick Actions */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              className="bg-teal-600 dark:bg-teal-700 text-white hover:bg-teal-700 dark:hover:bg-teal-800"
              onClick={() => scrollToSection("overcoming-bias")}
            >
              Learn the 10 Steps <ChevronRight size={16} />
            </Button>
            <Button
              variant="outline"
              className="border-teal-600 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/20"
              onClick={() => scrollToSection("introduction")}
            >
              Start with Understanding
            </Button>
          </div>

          {/* Introduction Section */}
          <section id="introduction" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                <Brain className="text-blue-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Understanding Bias
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Bias is a tendency to favor or dislike a person, group, or idea in
              a way that prevents objective consideration of an issue. It
              operates through cognitive shortcuts that our brains use to
              process information efficiently, but these shortcuts can lead to
              unfair judgments and decisions.
            </p>

            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              All human minds are subject to bias - it's a natural aspect of
              information processing that helps us navigate a complex world.
              However, when these mental shortcuts lead to prejudice against
              entire communities, they become harmful and require conscious
              effort to address.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                The Mechanics of Bias:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <Check className="text-green-500 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Cognitive Shortcuts:</strong> Our brains create
                    mental models based on previous experiences, cultural
                    messages, and environmental cues to make quick judgments.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green-500 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Implicit Processing:</strong> Most biases operate at
                    an unconscious level, influencing our perceptions and
                    decisions outside of our awareness.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green-500 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Reinforcement Cycles:</strong> Media portrayals,
                    social circles, and selective attention can create feedback
                    loops that strengthen existing biases over time.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Self-awareness about these cognitive processes is the first step
              toward mitigating bias. Research in cognitive psychology shows
              that simply understanding that biases exist begins the process of
              reducing their impact on our thinking and decision-making.
            </p>
          </section>

          {/* Types of Bias Section */}
          <section id="types-of-bias" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                <PieChart className="text-purple-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Common Biases Affecting Our Perception
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Cognitive psychology has identified several types of biases that
              particularly influence how we perceive others. Let's explore two
              of the most significant ones that affect social perception:
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Confirmation Bias:
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                This is our tendency to search for, interpret, and remember
                information that confirms our pre-existing beliefs while giving
                less attention to information that contradicts them.
              </p>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg mb-4">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Example:</strong> If you believe a certain group is
                  prone to violence, you might notice and remember news stories
                  about incidents involving that group while overlooking the
                  countless instances of community service, charitable work, and
                  peaceful engagement by members of the same group.
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Research shows this bias creates a self-reinforcing cycle that
                makes it difficult to change opinions even when presented with
                substantial contradictory evidence. Studies by Lord, Ross, and
                Lepper demonstrated that people often become more entrenched in
                their beliefs when confronted with mixed evidence.
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                The Dunning-Kruger Effect:
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                This cognitive bias, identified by psychologists David Dunning
                and Justin Kruger, occurs when people with limited knowledge or
                competence in a specific area overestimate their knowledge or
                ability.
              </p>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg mb-4">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Example:</strong> Someone who has read a few articles
                  about a different culture might feel confident making sweeping
                  statements about what all members of that culture believe or
                  how they behave, without recognizing the depth, diversity, and
                  complexity within any cultural tradition.
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                This bias leads people to make judgments with great certainty
                despite having minimal actual knowledge about a subject.
                Conversely, those with genuine expertise tend to recognize the
                limitations of their knowledge and express more nuanced views.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Recognizing these biases in ourselves is an important step toward
              more fair and accurate understanding. The good news is that
              awareness alone begins to reduce their effect on our thinking, and
              deliberate cognitive strategies can further mitigate their impact.
            </p>
          </section>

          {/* Overcoming Bias Section */}
          <section id="overcoming-bias" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                <Lightbulb className="text-green-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                10 Steps to Overcome Bias
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Breaking free from cognitive biases takes conscious effort and
              practice. Based on research in cognitive psychology and behavioral
              science, here are ten evidence-based steps you can take to
              overcome biases toward any group:
            </p>

            <div className="space-y-6 my-8">
              {[
                {
                  title: "1. Metacognitive Awareness",
                  content:
                    "Recognize that biases exist in everyone. Learn about different types of biases and how they affect your thinking. Research shows that developing awareness of cognitive processes is the first step to changing them.",
                },
                {
                  title: "2. Seek Diverse Perspectives",
                  content:
                    "Actively look for voices from different backgrounds. Read books by authors from varied cultural traditions, follow thought leaders with different perspectives, and engage with viewpoints that challenge your assumptions.",
                },
                {
                  title: "3. Practice Deliberative Thinking",
                  content:
                    "When you find yourself making quick judgments, pause. Studies show that taking time to analyze situations carefully and considering all available information before drawing conclusions significantly reduces bias.",
                },
                {
                  title: "4. Question Default Assumptions",
                  content:
                    "Ask yourself, 'What assumptions am I making?' and 'What evidence would change my mind?' Research shows that being open to the possibility of being mistaken creates cognitive flexibility that reduces bias.",
                },
                {
                  title: "5. Rely on Statistical Thinking",
                  content:
                    "Look for reliable statistics and peer-reviewed research rather than relying on anecdotes or selective media reporting. Studies show that using representative data helps overcome the availability bias that makes rare but memorable events seem more common.",
                },
                {
                  title: "6. Implement Structured Decision-Making",
                  content:
                    "Use frameworks that force you to consider multiple factors before forming an opinion. For example, when evaluating a news story, consider the source reliability, historical context, alternative perspectives, and what information might be missing from the account.",
                },
                {
                  title: "7. Embrace Cognitive Dissonance",
                  content:
                    "When you encounter information that challenges your existing beliefs, sit with the discomfort rather than dismissing the new information. Psychological research shows that this temporary discomfort is actually the feeling of mental growth and learning.",
                },
                {
                  title: "8. Practice Mindfulness",
                  content:
                    "Develop awareness of your thoughts and feelings when encountering people from different groups or information about them. Research in neuroscience shows that noticing when biases might be influencing your reactions without judgment allows you to consciously choose how to respond.",
                },
                {
                  title: "9. Seek Honest Feedback",
                  content:
                    "Discuss your views with trusted friends who can provide honest feedback, especially those who might have different perspectives. If possible, build relationships with people from different backgrounds who can share their lived experiences.",
                },
                {
                  title: "10. Cultivate Intellectual Humility",
                  content:
                    "Approach topics with humility and a willingness to change your mind. Research by Samuelson and colleagues shows that intellectual humility—recognizing the limits of one's knowledge—correlates with reduced prejudice and more accurate understanding.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {step.content}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              These steps are not a one-time fix but an ongoing practice. With
              consistent effort, research suggests you can significantly reduce
              the influence of biases on your perception of others and move
              toward a more accurate and fair understanding of the world.
            </p>
          </section>

          {/* Bias Against Islam Section */}
          <section id="bias-against-islam" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                <Globe className="text-amber-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Biases Against Muslims in India
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              In the Indian context, biases against Muslims have complex
              historical, social, and political roots. Understanding these
              factors is essential for fostering harmony and addressing
              prejudice.
            </p>

            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Historical and Political Factors:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Partition Legacy:</strong> The 1947 Partition
                    created lasting trauma and suspicion, with some incorrectly
                    associating Indian Muslims with Pakistan despite their
                    choice to remain in India.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Colonial Division:</strong> British "divide and
                    rule" policies deepened religious divisions, with historical
                    narratives often emphasizing conflicts while overlooking
                    centuries of peaceful coexistence.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Political Polarization:</strong> Some political
                    actors use religious identity to mobilize voter bases,
                    portraying Muslims as "the other" to consolidate support.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Media and Social Factors:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Media Representation:</strong> Sensationalist
                    coverage often disproportionately links Muslims to negative
                    news, reinforcing stereotypes rather than showcasing
                    diversity within the community.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Misinformation:</strong> Social media has amplified
                    false narratives and stereotypes, with misleading content
                    spreading rapidly and reinforcing existing prejudices.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Socioeconomic Disparities:</strong> The Sachar
                    Committee Report (2006) documented significant socioeconomic
                    disadvantages faced by Muslims, which can fuel stereotypes
                    and marginalization.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Breaking Through Biases:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Interfaith Dialogue:</strong> Creating spaces for
                    meaningful interaction between different communities helps
                    replace stereotypes with authentic understanding.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Media Literacy:</strong> Developing critical
                    thinking skills to evaluate news sources and recognize bias
                    in reporting is essential for combating misinformation.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Cultural Exchange:</strong> Promoting shared
                    cultural experiences like literature, art, and food can
                    build bridges across perceived divides.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Education:</strong> Learning about the diversity
                    within Islam and the significant contributions of Muslims to
                    Indian culture, science, and history helps counter
                    one-dimensional stereotypes.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Addressing biases requires both individual reflection and
              collective action. By acknowledging these factors and actively
              working to counter stereotypes, we can move toward a more
              inclusive society that recognizes our shared humanity across
              religious differences.
            </p>
          </section>
        </article>
      </main>

      {/* Clean Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-12 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-xl  font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Growing Together in Understanding
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            May we all continue to grow in our understanding of each other,
            moving beyond biases to see the humanity we share across all
            backgrounds, religions, and cultures.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="outline"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <ArrowUp size={16} className="mr-2" /> Back to Top
            </Button>
            <Button
              onClick={() => (window.location.href = "/")}
              className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              <ArrowLeft size={16} className="mr-2" /> Back to Home
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DissolvingBiases;
