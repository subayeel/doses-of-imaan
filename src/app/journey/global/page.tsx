/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { ChevronDown, ChevronRight, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GlobalJourney() {
  return (
    <main className="min-h-screen bg-background" role="main">
      {/* Article Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Journey of Observation
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Philosophy & Religion</span>
              <span>•</span>
              <time dateTime="PT15M">15 min read</time>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-4 md:py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:font-bold prose-p:leading-relaxed prose-p:text-foreground/90">
            {/* Requirements Section */}
            <section
              className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-4"
              aria-labelledby="requirements"
            >
              <h3
                id="requirements"
                className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-4 flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                Before You Begin This Journey
              </h3>
              <p className="text-amber-700 dark:text-amber-300 mb-4">
                To fully engage with this exploration and derive maximum
                benefit, please ensure you meet the following requirements:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold">
                      1
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-800 dark:text-amber-200">
                      15 Minutes of Undivided Attention
                    </h4>
                    <p className="text-sm text-amber-600 dark:text-amber-400">
                      Find a quiet space free from distractions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold">
                      2
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-800 dark:text-amber-200">
                      Ambivert Personality
                    </h4>
                    <p className="text-sm text-amber-600 dark:text-amber-400">
                      Balance between introversion and extroversion
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold">
                      3
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-800 dark:text-amber-200">
                      Understanding of English
                    </h4>
                    <p className="text-sm text-amber-600 dark:text-amber-400">
                      Proficient reading comprehension
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold">
                      4
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-800 dark:text-amber-200">
                      Open Mind Without Biases
                    </h4>
                    <p className="text-sm text-amber-600 dark:text-amber-400">
                      Willingness to consider new perspectives
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* Objective Section */}
            <section
              className="bg-teal-50 dark:bg-primary/20 border border-teal-200 dark:border-teal-800 rounded-lg p-6 mb-8"
              aria-labelledby="objectives"
            >
              <h3 className="text-primary text-lg flex gap-1 items-center font-bold mb-4">
                <span>
                  <Target className="text-teal-600" size={16} />
                </span>
                Objective of this Journey
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white dark:bg-teal-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
                      1
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-teal-800 dark:text-teal-200">
                      Understanding the strong anchors which keeps us tied to
                      the reality
                    </h4>
                    <p className="text-sm text-teal-600 dark:text-teal-400">
                      Our Birth, Our Death, Our Dispositions, Our Existence and
                      reality of Time
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white dark:bg-teal-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
                      2
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-teal-800 dark:text-teal-200">
                      Understanding current worldly affairs with anchors in mind
                    </h4>
                    <p className="text-sm text-teal-600 dark:text-teal-400">
                      The current State of Affairs, rising of "New World Order"
                      and its roots
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white dark:bg-teal-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">
                      3
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-teal-800 dark:text-teal-200">
                      The Need for Objective Morality
                    </h4>
                    <p className="text-sm text-teal-600 dark:text-teal-400">
                      Searching for a system to end the{" "}
                      <strong>The Loop of Suffering</strong>
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* Anchor */}
            <section>
              <h1 className="text-3xl font-bold mt-12 mb-6">
                Module 1: The need for Anchor points
              </h1>

              <p className="mb-8">
                In this journey, we are going for observation on every level.
                And, of course, for every observation to take place, we need a
                point of reference. In this journey, these points of reference
                should be objective so that a human from every corner of the
                world can resonate with it.
              </p>
              <p>
                And those anchors which will always keep your mindset grounded
                to reality are following:
              </p>
              <ul className="list-decimal ml-8">
                <li>
                  <strong>Birth:</strong> You had a beginning in this world just
                  like everything in this world had a beginning.
                </li>
                <li>
                  <strong>Death:</strong> You have limited time here and death
                  cannot be avoided.
                </li>
                <li>
                  <strong>Human Innate Disposition:</strong> Certain
                  dispositions are present in every human beings like
                </li>
                <li>
                  <strong>Existence:</strong> You exist in this world, others
                  also exist, this is not an illusion. Your intentions, actions,
                  and goals have consequences.
                </li>
                <li>
                  <strong>Time:</strong> Time flows in one direction and it does
                  not stop and it cannot be reversed.
                </li>
              </ul>

              <aside
                className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg"
                role="note"
              >
                <p className="font-semibold mb-2">Just Imagine</p>
                <p className="mb-4">
                  You are sailing on a boat and your vision is limited due to
                  foggy weather, and thus the length of journey is unknown.
                </p>
                <p className="">
                  The state of desperation during the sail increases every
                  second with the limited supply of food, increasing thirst, and
                  the fear of storms, which compels you to find the right
                  direction to navigate.
                </p>
              </aside>

              <p className="leading-relaxed mb-6">
                The objective from here onwards will be finding navigation in
                this life. A sailor will use stars at night to navigate and the
                Sun's movement during the day, but the question is{" "}
                <strong>
                  what are we going to look towards to find meaning, structure,
                  and purpose in our life?
                </strong>
              </p>

              <p className="leading-relaxed mb-6">
                Before we begin our observations, let's take a deep dive into
                each anchor we listed, so that our hearts and minds are in sync.
              </p>

              <p className="leading-relaxed mb-6">
                Let's dive into the other 3 anchors: understanding and
                validating their authenticity to such a degree that our minds
                understand the concept and our hearts accept it without a shred
                of doubt.
              </p>
            </section>
            {/* Human Innate Dispositions */}
            <section aria-labelledby="human-innate-dispositions">
              <h2
                className="text-xl font-bold mt-12 mb-6"
                id="human-innate-dispositions"
              >
                1.1 Human Innate Dispositions
              </h2>
              <p className="text-muted-foreground mb-8">
                There are around 8 billion people in the world, including you.
                Everyone has their own goals and objectives in life, but these
                are often shaped by where they live and whom they interact with.
                However, there are certain things that are common to all of us.
              </p>

              <p className="mb-8">
                For example, a mother's love for her child, the attraction
                toward the opposite gender, the longing for a clean environment,
                and the desire for peace and stability in both personal and
                professional life, these are universal feelings.
              </p>

              <h3 className="text-xl font-bold mt-12 mb-6">
                1.1.1 Maslow's Hierarchy of Needs
              </h3>
              <p className="mb-6">
                I would like to refer to the research of Maslow's hierarchy of
                needs when it comes down to the needs of a human on a personal
                level.
              </p>

              <div className="bg-muted/30 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">The Five Levels:</h3>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                      1
                    </span>
                    <div>
                      <strong>Physiological Needs:</strong> These are the
                      fundamental biological requirements for survival, such as
                      air, water, food, warmth, and sleep.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                      2
                    </span>
                    <div>
                      <strong>Safety Needs:</strong> Once physiological needs
                      are met, people are driven to seek security and stability.
                      This includes needs like personal security, freedom from
                      fear, financial security, and health and wellbeing.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                      3
                    </span>
                    <div>
                      <strong>Love and Belonging Needs:</strong> After
                      physiological and safety needs, the desire for social
                      connection emerges. This level includes needs like
                      friendship, intimacy, family bonds, and a sense of
                      belonging to a group.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                      4
                    </span>
                    <div>
                      <strong>Esteem Needs:</strong> These needs involve the
                      desire for self-esteem and respect from others. This
                      encompasses self-respect, achievement, recognition,
                      status, and prestige.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                      5
                    </span>
                    <div>
                      <strong>Self-Actualization Needs:</strong> This is the
                      highest level of the hierarchy, representing the desire to
                      fulfill one's full potential and become the best version
                      of oneself. It involves personal growth, seeking
                      knowledge, creativity, and experiencing peak moments of
                      joy and wonder.
                    </div>
                  </li>
                </ol>
              </div>

              <p className="mb-8">
                <strong>Maslow's hierarchy of needs</strong> is a framework for
                understanding the motivations and behaviors of all humans
                irrespective of their location or mentality.
              </p>

              <p className="mb-8">
                There are many such innate dispositions that are common among
                all humans. These innate feelings and the motivator forms a
                pattern which is seen in every community irrespective of their
                background.
                <br />
                <span className="text-xs">
                  Reference:{" "}
                  <a href="https://www.sciencedaily.com/releases/2011/07/110714103828.htm">
                    The Cognition, Religion and Theology Project
                  </a>
                </span>
              </p>

              <p className="mb-8">
                <strong>Cognitive dissonance</strong> plays a major role here:
                the discomfort felt when beliefs, identity, or group loyalty
                conflict with evidence or lived experience, pushing individuals
                and communities to rationalize existing norms and resist change.
                <br />
                <span className="text-xs">
                  Reference:{" "}
                  <a href="https://en.wikipedia.org/wiki/Cognitive_dissonance">
                    Cognitive Dissonance
                  </a>
                </span>
              </p>

              <p className="mb-8">
                <strong>Time</strong> solidifies these beliefs which were built
                on baseless foundations and it continues for generations. A
                child follows the path of the parent, and the biases instilled
                in the child's mind become so deeply rooted that it becomes
                almost impossible for them to question their inherited way of
                life.
              </p>
              <p className="mb-8">
                This,false beliefs, gives rise to different communities,
                languages, philosophies, religions, castes, and so on. Each
                group believes they are on the right path.
              </p>

              <p className="mb-8">
                The consequence of this is subjective morality, which history
                has repeatedly shown cannot truly coexist. Time and again, one
                group declares war on another because they disagree on moral
                grounds. Each person believes their version of morality is true,
                often worsening the situation. And,{" "}
                <strong>The Loop of Suffering</strong> continues.
              </p>

              <aside
                className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg"
                role="note"
              >
                <p className="text-lg font-semibold mb-2">
                  One thing is certain:
                </p>
                <p className="mb-4">
                  No matter how many times humanity is reset by an apocalypse,
                  we are always bound to end up in the same place due to our
                  innate dispositions.
                </p>

                <p>
                  <strong> What breaks this loop?</strong>
                  <br />A system that eliminates <b>subjective morality</b>,
                  leaves no room for <b>Cognitive Dissonance</b>, and governs
                  the <b>Line of Existence</b> at the level where there is
                  chaos.
                </p>
              </aside>

              <h2
                id="the-central-question"
                className="text-xl font-bold mt-12 mb-6"
              >
                1.1.2 The Central Question
              </h2>
              <p className="mb-4">
                On Human level this is the central question:
              </p>
              <ul className="mb-6 list-decimal pl-6 space-y-2">
                <li>What breaks this loop?</li>
                <li>
                  What is that one thing that fulfills the innate disposition of
                  humans?
                </li>
                <li>What promises a stable system at every level?</li>
                <li>
                  What allows multiple systems to coexist despite the historical
                  divisions in society?
                </li>
                <li>
                  What can solve modern problems like obesity, poverty,
                  organized crime, general crime, drugs, public obscenity, and
                  the degeneration of the entertainment industry?
                </li>
                <li>
                  What can offer sustainable economic development without
                  infringing on personal freedom?
                </li>
                <li>
                  What can ensure a proper division of duties between the
                  government and the citizen?
                </li>
              </ul>

              <div className="max-w-4xl mx-auto">
                <h2 className="text-xl font-bold mb-8 text-foreground">
                  1.1.3 Exploring Constitutional Solutions
                </h2>

                <div className="space-y-8">
                  {/* Question 1 */}
                  <div className="bg-card border-l-4 border-blue-500 pl-6 py-4">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">
                      Are we going to draft a new constitution which governs the
                      whole world? Is this not the New World Order, which the
                      underground societies are working towards?
                    </h3>
                    <div className="text-muted-foreground leading-relaxed">
                      <p>
                        But as per the Community scenario, the people with
                        authority will have biases and the designing of the
                        constitution is again going to feed the Loop of
                        Suffering which we are trying to break. The subjective
                        morality again will play a huge role in determining the
                        policies of humans and ultimately the constitution will
                        end up just like other constitutions of any country in
                        2025.
                      </p>
                    </div>
                  </div>

                  {/* Question 2 */}
                  <div className="bg-card border-l-4 border-green-500 pl-6 py-4">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">
                      Can we implement the trial and error method and keep
                      improving the constitution with time?
                    </h3>
                    <div className="text-muted-foreground leading-relaxed">
                      <p>
                        This makes the constitution volatile and easily
                        corruptible to the whims and desires of the people.
                      </p>
                    </div>
                  </div>

                  {/* Question 3 */}
                  <div className="bg-card border-l-4 border-purple-500 pl-6 py-4">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">
                      Can we go with the majority of people?
                    </h3>
                    <div className="text-muted-foreground leading-relaxed">
                      <p>
                        No, the majority is not always right and people's
                        perspective can be easily hijacked via the Media and
                        Entertainment industry by the elites.
                      </p>
                    </div>
                  </div>

                  {/* Question 4 */}
                  <div className="bg-card border-l-4 border-orange-500 pl-6 py-4">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">
                      If any one individual cannot be trusted for this task and
                      the majority is also not a viable option, then what
                      sources of Ethics and Morality do we have?
                    </h3>
                    <div className="text-muted-foreground leading-relaxed">
                      <p>
                        If you observe the current constitution and the rulings
                        in 2025, they are majorly influenced by one or the other
                        religions. Unfortunately, in the realm of Ethics,
                        Science and Mathematics cannot craft an ethical
                        framework. The principles of ethics and morality were
                        mainly derived from religion and supported by human
                        innate disposition which craves peace and stability.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Conclusion */}
                <div className="mt-12 bg-muted/50 rounded-lg">
                  <h2 className="text-xl font-bold mb-6 text-foreground">
                    1.1.4 Conclusion: Human Innate Dispositions
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The fundamental challenge in creating a universal
                      constitutional framework lies in recognizing that human
                      beings possess innate dispositions that transcend
                      cultural, religious, and political boundaries. These
                      dispositions are not learned behaviors but rather inherent
                      characteristics that define our humanity.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The human innate disposition craves{" "}
                      <strong>peace and stability</strong> above all else. This
                      universal longing manifests itself in our desire for:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
                      <li>Harmony in relationships and communities</li>
                      <li>Predictable and just social structures</li>
                      <li>Freedom from fear and uncertainty</li>
                      <li>Meaningful purpose and direction</li>
                      <li>Connection with something greater than ourselves</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      Any constitutional framework that fails to acknowledge and
                      address these fundamental human needs will inevitably lead
                      back to the Loop of Suffering. The solution must emerge
                      from understanding these innate dispositions rather than
                      imposing external moral frameworks that conflict with our
                      essential nature.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* Existence */}
            <section aria-labelledby="the-line-of-existence">
              <h2
                id="the-line-of-existence"
                className="text-2xl font-bold mt-12 mb-6"
              >
                1.2 Existence
              </h2>

              <p className="mb-8">
                Let's make this simple:{" "}
                <strong>you are real, and your actions matter.</strong> Claims
                like "we're in the Matrix" or "it's all a simulation" are
                interesting thought experiments, but they are irrelevant to your
                daily life because the world you experience is{" "}
                <strong>real enough to count</strong>.
              </p>

              <h3 className="text-xl font-semibold mb-4">
                1.2.1 The Scientific Test of Existence
              </h3>

              <p className="mb-6">
                The core of science is testing reality. If we truly lived in a
                simulation, a few things would likely be true:
              </p>

              <div className="mb-6 space-y-4">
                <div>
                  <p className="mb-2">
                    <strong>1. Glitches:</strong> A computer system, no matter
                    how powerful, has limits. We might see{" "}
                    <strong>"rounding errors"</strong> in physics—like space
                    being made of tiny, detectable pixels instead of being
                    smooth and continuous.
                  </p>
                </div>
                <div>
                  <p>
                    <strong>2. Lazy Rendering:</strong> To save power, the
                    simulation might only load details when you look at them
                    (like a video game only fully rendering the room you're
                    standing in).
                  </p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mb-3">The Evidence:</h4>

              <div className="mb-6 space-y-3">
                <p>
                  <strong>• No Glitches Found:</strong> Scientists constantly
                  smash atoms together and look deep into space. Every test we
                  run confirms that our universe's laws are{" "}
                  <strong>perfectly consistent</strong> and{" "}
                  <strong>continuous</strong>. We find no "pixels," no rounding
                  errors, and no breaks in the code.
                </p>

                <p>
                  <strong>• The Laws Are Solid:</strong> The rules of gravity,
                  electromagnetism, and atomic structure work the same way
                  everywhere, all the time. This{" "}
                  <strong>robust consistency</strong> is the signature of a{" "}
                  <strong>base reality</strong>, not a constantly managed,
                  resource-limited simulation.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-4 mb-6">
                <p className="font-semibold text-blue-800 dark:text-blue-200">
                  <strong>Conclusion:</strong> Based on all the evidence we can
                  gather, the simplest and most logical conclusion is that{" "}
                  <strong>we exist in a true, physical reality</strong>—the Null
                  Hypothesis.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-4">
                1.2.2 Why the Matrix Doesn't Matter
              </h3>

              <p className="mb-4">Here's the practical truth:</p>

              <p className="mb-6">
                Even if our universe <em>was</em> the most perfect simulation
                ever created,{" "}
                <strong>it makes no difference to your life</strong>.
              </p>

              <div className="mb-6 space-y-3">
                <p>
                  <strong>• The Rules are Real:</strong> The pain you feel is
                  real. The love you share is real. Gravity is real. The fact
                  that the physical rules of this world are{" "}
                  <strong>consistent and inescapable</strong> means you must
                  treat them as absolute truth.
                </p>

                <p>
                  <strong>• Consequences are Real:</strong> Your goals,
                  intentions, and actions have real, measurable consequences{" "}
                  <strong>within this reality</strong>. Escaping reality by
                  claiming it's "just a simulation" doesn't stop your car from
                  hitting a wall or prevent your words from hurting a friend.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-4 mb-8">
                <p className=" text-green-800 dark:text-green-200">
                  <strong>
                    Your existence is defined by the consequences of your
                    choices.
                  </strong>{" "}
                  Since the rules of this reality hold true regardless of its
                  origin, the most productive and meaningful approach is to
                  accept it as the <strong>"Line of Existence"</strong> that
                  governs everything you are and everything you do.
                </p>
              </div>

              <p className="mb-6">
                For easier and quicker understanding, let's print{" "}
                <strong>The line of Existence</strong> that summarizes the
                structure of our existence:
              </p>

              <div className="bg-muted/30 rounded-lg p-6 mb-8">
                <div className="text-center space-y-2 font-mono text-sm">
                  <div>Atom (Neutrinos – Protons – Electrons)</div>
                  <ChevronDown className="mx-auto h-4 w-4" />
                  <div>Compound</div>
                  <ChevronDown className="mx-auto h-4 w-4" />
                  <div>DNA</div>
                  <ChevronDown className="mx-auto h-4 w-4" />
                  <div>Cell</div>
                  <ChevronDown className="mx-auto h-4 w-4" />
                  <div>Tissue</div>
                  <ChevronDown className="mx-auto h-4 w-4" />
                  <div>Organ</div>
                  <ChevronDown className="mx-auto h-4 w-4" />
                  <div>Organ System</div>
                  <ChevronDown className="mx-auto h-4 w-4" />
                  <div>Human</div>
                  <ChevronDown className="mx-auto h-4 w-4" />
                  <div>Family</div>
                  <ChevronDown className="mx-auto h-4 w-4" />
                  <div>Community</div>
                  <ChevronDown className="mx-auto h-4 w-4" />
                  <div>Street</div>
                  <ChevronDown className="mx-auto h-4 w-4" />
                  <div>Locality</div>
                  <ChevronDown className="mx-auto h-4 w-4" />
                  <div>State</div>
                  <ChevronDown className="mx-auto h-4 w-4" />
                  <div>Country</div>
                  <ChevronDown className="mx-auto h-4 w-4" />
                  <div>Earth (Planet)</div>
                  <ChevronDown className="mx-auto h-4 w-4" />
                  <div>Star System</div>
                  <ChevronDown className="mx-auto h-4 w-4" />
                  <div>Galaxies</div>
                  <ChevronDown className="mx-auto h-4 w-4" />
                  <div>Universe</div>
                </div>
              </div>

              <p className="mb-8">
                This is the Line of Existence. If you are a person of knowledge,
                you will be able to understand exactly where there is chaos and
                where there is order.
              </p>

              <p className="mb-8">
                On the Existence Line, the components above Human and after
                Country, we see order, constants, and systems that work
                perfectly together. The stability and constants found in those
                parts of the Existence Line are perfect and precise.
              </p>

              <p className="text-2xl my-8 font-semibold">
                It is common sense to conclude the existence of a designer after
                seeing a perfect design.
              </p>

              <p className="mb-8">
                But why is this notion important for our discussion, where we
                are trying to figure out a stable system? It is important
                because, if you observe the Existence Line once more, the place
                where there is chaos needs a proper system. So, if such a
                designer does exist, then it must have provided the ideal system
                which gives answer to 'The central questions' we asked earlier.
              </p>
            </section>
            {/* Time */}
            <section aria-labelledby="time">
              <h2
                id="the-concept-of-god"
                className="text-2xl font-bold mt-12 mb-6"
              >
                1.3 Time
              </h2>

              <p className="mb-4">
                Time is one of the most profound anchors of existence. Though
                modern science has revealed the relativistic nature of time,
                showing that it bends and shifts under the laws of physics, this
                should not diminish its significance in human life.
                <br />
                <span className="text-xs">
                  Reference:{" "}
                  <a href="https://www.thoughtco.com/what-is-time-4156799">
                    What Is Time? A Simple Explanation
                  </a>
                </span>
              </p>

              <h3 className="text-xl font-bold mb-2">1.3.1 Concepts of Time</h3>

              <p className="mb-4">
                Let's clarify some concepts of time to avoid any confusion about
                the direction of time:
                <ul className="list-disc ml-8">
                  <li>
                    {" "}
                    <strong>What is time, exactly:</strong> Physicists define
                    time as the progression of events from the past to the
                    present into the future. Basically, if a system is
                    unchanging, it is timeless. Time can be considered to be the
                    fourth dimension of reality, used to describe events in
                    three-dimensional space. It is not something we can see,
                    touch, or taste, but we can measure its passage.
                  </li>
                  <li>
                    {" "}
                    <strong>Time Dilation:</strong> A concept where the time
                    between events becomes longer (dilated) the closer one
                    travels to the speed of light. Moving clocks run more slowly
                    than stationary clocks, with the effect becoming more
                    pronounced as the moving clock approaches light speed.
                  </li>

                  <li>
                    <strong>Arrow of Time:</strong> Physics equations work
                    equally well whether time is moving forward into the future
                    (positive time) or backward into the past (negative time).
                    However, time in the natural world has one direction, called
                    the arrow of time.
                  </li>
                </ul>
              </p>

              <h3 className="text-xl font-bold mb-2">
                1.3.2 Your relationship with Time
              </h3>
              <p className="mb-4">
                It's been 13.5 billion years since <strong>The Big Bang</strong>
                . The process of life began around 4.3 billion years ago, but
                the human race (Homo Sapiens) is estimated to have been here for
                the last 300,000 years. As per the condition of the sun, after 1
                billion years, it would become a gas giant, making the earth
                uninhabitable.
              </p>

              <p className="mb-4">
                The above-mentioned facts might not matter to you as a human
                being, but the following facts are definitely important to
                consider:
                <ul className="list-decimal ml-8">
                  <li>The average life span of a human being is 60.</li>
                  <li>
                    Your time began on this earth with the first heartbeat, when
                    you were inside your mother's womb.
                  </li>
                  <li>
                    Your heart never rests; it beats around ~100,000 times in a
                    single day. Each heartbeat of yours is a sign that the end
                    is nearing.
                  </li>
                  <li>
                    Not a single human being denies Death, it is when your
                    journey ends but the Time goes on.
                  </li>
                  <li>
                    The Arrow of Time is real and you cannot escape the passage
                    of time.
                  </li>
                </ul>
              </p>
            </section>
            {/* Linking the Anchors with Observation */}
            <aside
              className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg"
              role="note"
            >
              <p className="font-semibold mb-2">
                Task : Pause & Ponder on The 5 Anchors of Reality
              </p>
              <p>
                Pause your reading for sometime and think about each of the 5
                anchors we discussed. How it forms the basis of your existence.
              </p>
            </aside>
            {/* Module 1: Conclusion */}
            <section>
              <h2 className="text-xl font-bold mt-12 mb-6">1.4 Conclusion</h2>
              <p className="mb-4">
                Let me summarize each of the anchors and what it posited upon
                deep research briefly:
                <ul className="list-decimal ml-8 mt-4">
                  <li>
                    <strong>Birth</strong>: Like yourself, everything had a
                    beginning in this Universe, and even the Universe itself had
                    a beginning.
                  </li>
                  <li>
                    <strong>Death</strong>: Everything has an expiry date; you
                    will also soon face this extinction.
                  </li>
                  <li>
                    <strong>Human Innate Dispositions</strong>: There are some
                    common needs among all human beings; any rulings or laws
                    against these dispositions simply cannot work. The need for
                    Objective Morality is felt very deeply.
                  </li>
                  <li>
                    <strong>Existence</strong>: On observing 'The Line of
                    Existence', the complexity at each level and the order in
                    the Universe, the similitude of design from a micro to macro
                    level strongly hints at the existence of a single designer.
                  </li>
                  <li>
                    <strong>Time</strong>: The limited nature of time, reminds
                    everyone about the expiry date and produces{" "}
                    <strong>Cognitive Dissonance</strong> in mind to find
                    meaningful purpose and direction in this life.
                  </li>
                </ul>
              </p>

              <p className="mb-4">
                If the <strong>5 Anchors of Reality</strong> are not yet
                self-evident to you, pause here. Everything that follows builds
                upon them, not as opinions but as unavoidable facts of your own
                reality.
              </p>

              <p className="mb-4">
                Life across species is rich with emotion and instinct, yet only
                humans have the ability to comprehend these 5 anchors of
                Reality. Animals may love, protect, and grieve, but they do not
                weigh time, consequence, and the arc of their own lives as we
                do. But why?
              </p>

              <p className="mb-4">
                The capacity to observe, infer, and reason toward coherence and
                the ability to differentiate between right and wrong is what
                separates us from other species.
              </p>

              <p className="mb-4 text-lg font-bold">
                {" "}
                These anchors are proof of your higher intelligence, and they
                will withstand scrutiny and illuminate the path of our
                observation.
              </p>

              <p className="mb-4">
                Next, we will start our observation using a Top-Down Approach,
                starting with the observation of the current state of the world.
              </p>
            </section>
            <p className="text-center text-3xl">. . . </p>
            {/* Module 2: Observation Begins */}
            <section>
              <h2 className="text-3xl font-bold mt-12 mb-6">
                Module 2: Observation Begins
              </h2>

              <p className="mb-4">
                We will observe the world keeping{" "}
                <strong>The anchors of Reality</strong> in mind. We have
                following levels to cover:
                <ul className="list-decimal ml-8">
                  <li>
                    <strong>Level One</strong>: The current State of Affairs
                  </li>
                  <li>
                    <strong>Level Two</strong>: The New World rises
                  </li>
                  <li>
                    <strong>Level Three</strong>: The root of the "order"
                  </li>
                </ul>
              </p>
            </section>
            <section aria-labelledby="the-current-state-of-affairs">
              <h2
                id="the-current-state-of-affairs"
                className="text-2xl font-bold mt-12 mb-6"
              >
                2.1 The Current State of Affairs
              </h2>
              <p className="mb-8">
                We are witnessing the cracks of the "New World Order" in 2025.
                It is failing at the most fundamental level: meeting the basic
                physiological needs of human beings. Inflation is pushing
                millions into poverty.
              </p>

              <p className="mb-8">
                An interest-based economy traps the poor in perpetual debt while
                making the wealthy even richer. The judicial system bends toward
                those with money and power. Women are objectified in marketing
                and entertainment, reduced to tools for profit. Family
                structures are collapsing, children are being exploited, and
                violence is rising.
              </p>

              <p className="mb-8">
                Every move by governments feels like a calculated step toward
                World War III. Politicians play an endless game of musical
                chairs in the name of democracy, but the seats are controlled by
                hidden hands. Mainstream media, owned by elites, spins
                narratives to fit their agendas, turning lies into truths and
                truths into lies.
              </p>

              <p className="mb-8">
                Intoxicants spread unchecked among the youth. Birth rates are
                falling at alarming rates. Nature is being stripped and
                destroyed in the name of "development."
              </p>

              <aside
                className="bg-destructive/10 border-l-4 border-destructive p-6 my-8 rounded-r-lg"
                role="note"
                aria-label="Alert"
              >
                <p className="mb-2">
                  These are only a fraction of the problems, yet they are enough
                  for any rational human — or even an AGI — to see: the collapse
                  of this "New World Order" is happening before our eyes. Time
                  is running out.
                </p>
                <p>
                  If this system is not replaced soon, it will drag the entire
                  world down with it.
                </p>
              </aside>

              <p className="mb-8">
                The so-called leaders—presidents, prime ministers, ministers—
                are pawns in a much larger game. Many of them may not even
                understand who the real players are. But one truth is certain:
                illusions don't last forever. When they fall, the truth will
                come out, revealing who were the architects of chaos and who
                were the peacemakers.
              </p>

              <p className="mb-8">
                Now, the choice is yours: turn away and ignore the collapsing
                roof over your head, or step forward to repair it.
              </p>

              <p className="mb-8">
                But here lies the challenge: How can a single citizen fight a
                system that has been carefully and strategically built since the
                17th century?
              </p>

              <p className="mb-8">
                To answer this, we must go back and examine how the New World
                Order took root, piece by piece, between the 17th and 21st
                centuries.
              </p>
            </section>
            <section aria-labelledby="the-rise-of-the-new-world-order">
              <h2
                id="the-rise-of-the-new-world-order"
                className="text-xl font-bold mt-12 mb-6"
              >
                2.2 New World Order rises
              </h2>
              <p className="mb-8">
                Looking back over the last two millennia, humanity has witnessed
                staggering developments: technology, governance systems,
                medicine, political structures, industrial growth, and a deeper
                understanding of the natural world through biology, chemistry,
                physics, and mathematics.
              </p>

              <p className="mb-8">
                Knowledge became the catalyst for technological leaps and better
                living standards. But these gains came at a heavy cost: two
                catastrophic World Wars (1914–1945). These wars, while
                destructive, also accelerated advancements in medicine,
                engineering, and communication.
              </p>

              <p className="mb-8">
                In their aftermath, the post-war international order emerged,
                building institutions like the United Nations, WHO, and IMF,
                bodies intended to stabilize global relations, though not
                without bias or hidden agendas.
              </p>

              <p className="mb-8">
                The advent of nuclear weapons reshaped geopolitics. Fear of
                mutual annihilation forced superpowers to negotiate rather than
                escalate, preventing another world war. Large-scale violence
                declined, but small-scale conflicts never vanished.
              </p>

              <p className="mb-8">
                The discovery of antibiotics dramatically improved public
                health. Meanwhile, the discovery of crude oil, though sparking
                resource-driven wars, especially in the Middle East, fueled the
                internal combustion engine, revolutionizing transportation and
                industry.
              </p>

              <p className="mb-8">
                The industrial age transformed work life, drawing masses into
                factories. Later, the advent of the Internet shattered
                communication barriers and democratized access to information.
              </p>

              <p className="mb-8">
                These factors undeniably improved life: better health, political
                stability, organized governance, and technological abundance.
                Yet, success came with its own trap: the population boom. Longer
                lifespans and fewer conflicts swelled human numbers, demanding
                new food systems. The Green Revolution answered with high-yield
                crops, synthetic fertilizers, and mechanization.
              </p>

              <p className="mb-6">
                But beneath these visible changes, hidden structural shifts were
                being engineered, often unnoticed amidst the noise of wars and
                innovation:
              </p>

              <div className="bg-muted/30 rounded-lg mb-8">
                <ul className="space-y-3 list-disc list-outside">
                  <li>Discovery of oil in the Middle East</li>
                  <li>
                    Strategic splitting of countries to seed future conflicts
                  </li>
                  <li>Fall of the Ottoman Empire</li>
                  <li>
                    Shift from the gold standard to a dollar-based economy
                    (birth of inflation as a permanent reality)
                  </li>
                  <li>
                    Debt traps, nations borrowing heavily from private and
                    institutional banks
                  </li>
                  <li>Advent of nuclear weapons (US military hegemony)</li>
                  <li>
                    Establishment of biased global organizations (WHO, UN, etc.)
                  </li>
                  <li>
                    French Revolution, planting radical nationalism, separation
                    of church and state, liberalism, and radical feminism to
                    expand the workforce
                  </li>
                  <li>
                    Transition from nuclear family to joint family structures
                  </li>
                  <li>
                    Destabilization of the Middle East to control oil flows,
                    often via puppet governments or "liberation" campaigns and
                    reputation threats
                  </li>
                  <li>
                    Mass social engineering of women and girls through media and
                    entertainment to expand the industrial workforce
                  </li>
                </ul>
              </div>

              <p className="mb-8">
                These were not isolated events. Together, they shaped a global
                order designed to centralize control, limit alternatives, and
                mold public thought—a challenge any new framework must face
                head-on if it is to take root in our era.
              </p>
            </section>
            <aside
              className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg"
              role="note"
            >
              <p className="font-semibold mb-2">
                Tool Used for Research:
                <Link
                  href="https://project-vision-bay.vercel.app/"
                  className="text-primary hover:underline"
                >
                  Project Vision
                </Link>
              </p>
              <p className="mb-4">
                <strong>Conclusion:</strong> After an in-depth study of the
                current state of affairs, we conclude that the current system is
                especially design to keep you in the state of ignorance and
                exploit you with their own agenda.
              </p>

              <p className="mb-4">
                The above tool (Project Vision) provides clarity on how the New
                World Order has infiltrated every level of human life from the
                personal to the international.
              </p>
            </aside>
            <section aria-labelledby="current-state-of-affairs">
              <h2
                id="the-rise-of-the-new-world-order"
                className="text-xl font-bold mt-12 mb-6"
              >
                2.3 The Roots of the "Order"
              </h2>
              <p className="mb-8">
                This integration is carefully designed to prevent rebellion.
                Rebellion and revolt are inevitable whenever a system collides
                with the natural disposition of human beings.
              </p>

              <p className="mb-8">
                The entertainment industry plays a major role in keeping the
                masses distracted.
              </p>

              <p className="mb-8">
                Families have been broken at the nuclear level to prevent unity
                and the accumulation of power within communities.
              </p>

              <p className="mb-8">
                Drugs, cigarettes, intoxicants, and prostitution are spread
                widely to keep the youth distracted.
              </p>

              <p className="mb-8">
                The dollar-based economy has created a new reality called
                inflation, which reshapes global power dynamics, concentrates
                wealth in the United States, and helps it maintain hegemony.
              </p>

              <p className="mb-8">
                Governments are kept in check through loans from international
                banks and sanctions by the USA.
              </p>

              <p className="mb-8">Children are kept occupied with games.</p>

              <p className="mb-8">
                Teenagers are exploited through romance, gaming, intoxicants,
                entertainment shows, cigarettes, and material desires. They are
                then trapped with student loans.
              </p>

              <p className="mb-8">
                Young adults in their twenties are brainwashed, pushed into
                pointless politics, gender confusion, and endless debates, while
                their energy is drained by nine-to-five jobs as they pay off
                student loans.
              </p>

              <p className="mb-8">
                Adults in their thirties remain occupied with politics,
                mortgages, fragile marriages, anxiety over their children's
                future, and the noise of governments playing a game of musical
                chairs. They dream of retirement while being consumed by worry.
              </p>

              <p className="mb-8">
                After forty, health problems begin, energy declines, and the
                ability to do anything meaningful in life fades.
              </p>

              <section aria-labelledby="family">
                <h3 id="family" className="text-xl font-bold mt-12 mb-2">
                  2.3.1 Family
                </h3>

                <p className="mb-4">
                  The family system has collapsed. The framework of marriage is
                  disintegrating, and household power dynamics are chaotic under
                  the narrative that men and women are the same.
                </p>

                <p className="mb-8">
                  The breakdown of natural gender roles contradicts human
                  nature, weakens marriages, and neglects the well-being of
                  children.
                </p>
              </section>

              <section aria-labelledby="community">
                <h3 id="community" className="text-xl font-bold mt-12 mb-2">
                  2.3.2 Community
                </h3>

                <p className="mb-8">
                  Communities should be built on unity among families and
                  neighbors. Instead, people are isolated, trapped in their own
                  problems, lacking brotherhood and common goals. Bias, crime,
                  polarized media and mistrust have destroyed social bonds.
                </p>

                <p>Key issues include:</p>

                <div className="bg-muted/30 rounded-lg p-6 mb-8">
                  <ol className="space-y-3 list-decimal list-outside">
                    <li>
                      Housing stress and rising homelessness caused by inflation
                      after abandoning the gold-based currency
                    </li>
                    <li>
                      Loneliness and isolation caused by the illusion of love in
                      movies, leading to shallow relationships, emotional
                      baggage, delayed marriages, and unrealistic expectations
                    </li>
                    <li>
                      Misinformation, polarization, and eroded trust driven by
                      corrupt leaders to keep people numb, combined with poor
                      education and the collapse of objective morality
                    </li>
                    <li>
                      Substance abuse and poor health access caused by weak
                      government regulation, lack of family support, and the
                      open availability of addictive substances such as vaping,
                      hookah, and cigarettes that escalate to stronger drugs
                    </li>
                    <li>Increased promiscuity</li>
                    <li>Failed marriages</li>
                    <li>Children born outside of marriage</li>
                    <li>Usury</li>
                    <li>Economic inequality</li>
                    <li>Rising abortions</li>
                    <li>Exploitation of women</li>
                  </ol>
                </div>
              </section>

              <section aria-labelledby="country">
                <h3 id="country" className="text-xl font-bold mt-12 mb-2">
                  2.3.3 Country
                </h3>

                <p className="mb-8">
                  There are nearly 198 countries, most of whose borders were
                  drawn by the British Empire to sow future conflict. In 2025,
                  the consequences of this divide-and-rule policy are clearer
                  than ever.
                </p>

                <p className="mb-8">
                  But the question remains: If rulers know that these borders
                  are artificial, why do they not erase them, unite with
                  neighboring nations, and eliminate animosity?
                </p>

                <p className="mb-8">
                  The answer is complex. History shows us that those who tried
                  to unite nations and erase artificial lines were swiftly
                  destroyed by forces we now recognize.
                </p>

                <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-muted/30 rounded-r-lg">
                  <p className="text-2xl font-semibold text-foreground mb-4">
                    "The fear of the large elephant keeps countries divided.
                    Wars rage on, nations collapse, yet two groups benefit the
                    most: arms dealers and the banks."
                  </p>
                </blockquote>

                <div className="bg-muted/30 rounded-lg p-6 mb-8">
                  <ol className="list-decimal list-outside">
                    <li>The arms dealers who profit from selling defense</li>
                    <li>The banks that fund both sides of the war</li>
                  </ol>
                </div>

                <p className="mb-8">
                  Banks trap nations in massive loans through compound interest.
                  Countries lose sovereignty and dare not rebel, as no one else
                  will unite with them.
                </p>

                <p className="mb-8">
                  Globalization further cements borders, making survival
                  impossible outside the banking system built on usury. Trade
                  and stability depend on strong borders. Meanwhile, nations
                  experiment with democracy, monarchy, and communism, but all
                  are deteriorating.
                </p>

                <p className="mb-8">
                  After the world wars, international organizations were formed
                  to prevent further atrocities, yet they failed. The only true
                  deterrent to war became nuclear weapons.
                </p>

                <blockquote className="border-l-4 border-destructive pl-6 py-4 my-8 bg-destructive/10 rounded-r-lg">
                  <p className="text-2xl font-semibold text-foreground mb-4">
                    "Compound interest has enslaved entire nations. The world is
                    being pushed towards a tyrannical One World Order, and the
                    transition will be chaotic. Civil wars will erupt. With
                    current geopolitics, the Great Chaos is imminent."
                  </p>
                </blockquote>

                <p className="mb-8">Coming events cast their shadows before.</p>

                <p className="mb-8">
                  In 2025, those shadows are dark and visible at every level.
                </p>
              </section>

              <p className="mb-4">
                Now, we have an understanding of the cracks in the current
                system, how it came into place, and what its roots are.
              </p>
            </section>
            {/* Module 3:The Need for Objective Morality */}
            <section>
              <h2
                id="the-rise-of-the-new-world-order"
                className="text-3xl font-bold mt-12 mb-6"
              >
                Module 3: The Need for Objective Morality
              </h2>

              <p className="mb-4">
                As per the anchors we established earlier, the fundamental thing
                that is preventing the system from working is the differences in
                morality, and it has been causing a lot of chaos at multiple
                stages in <strong>The Line of Existence</strong>.
              </p>

              <p className="mb-4">
                Looking closely at the anchors: the human innate disposition and
                the complexity of "The Line of Existence" are hinting towards a
                designer of the system.
              </p>

              <p className="mb-4">
                And if we are exploring the best source of morality for entire
                mankind, then who is better than the Creator of the Universe
                itself (if He exists)? Lets dive deep into{" "}
                <strong>The Concept of God</strong> and{" "}
                <strong>Reality of religions</strong>.
              </p>

              <p className="mb-4">
                The advantage we have today to make this link between the
                current system and philosophical concepts like God/religion is
                the recorded history of mankind for the last 2 millennia.
              </p>

              <p className="mb-4">
                In history, theism and atheism both have had the chance to prove
                themselves. But we must differentiate between rulers using the{" "}
                <a
                  className="font-bold underline text-primary"
                  href="https://freedomofmind.com/cult-mind-control/bite-model-pdf-download/"
                >
                  BITE Model
                </a>{" "}
                to influence people (i.e using religion as a tool to control
                people) and rulers who were devout theists.
              </p>

              <p className="mb-4">
                Theists justify wars by raising questions about the morality of
                the enemy, and atheists justify wars to implement their own
                morality, which is based on their own ideas (Subjective
                Morality).
              </p>
              <p className="mb-4">
                We are left with 2 options: rely on the principles of any single
                religion in history, or try to come up with our own system. The
                second option is what has led to the creation of{" "}
                <strong>The Loop of Suffering</strong>. So we need to look into
                history for any example of a ruling system based on objective
                morality that was not extremely hostile towards communities with
                different moralities.
              </p>
            </section>
            <section aria-labelledby="the-concept-of-god">
              <h2
                id="the-concept-of-god"
                className="text-2xl font-bold mt-12 mb-6"
              >
                3.1 The Concept of God
              </h2>
              <p className="mb-6">
                The idea of there being a Creator/Designer/God or Supreme Being
                is not a new one. Let's frame some basic questions from a
                layman's perspective.
              </p>

              <div className="bg-muted/30 rounded-lg mb-8">
                <ul className="space-y-2 list-decimal">
                  <li>What do you mean by God?</li>
                  <li>How did the concept of God come into existence?</li>
                  <li>Do we need God to explain our existence? Why God?</li>
                  <li>Can there be more than one God?</li>
                  <li>
                    Do logic, reasoning, mathematics, and science align with the
                    concept of God, or are we going for a "God of the gaps"?
                  </li>
                  <li>Where is God?</li>
                  <li>
                    Doesn't the existence of evil negate the existence of an
                    all-perfect God?
                  </li>
                  <li>What is the purpose of all this?</li>
                </ul>
              </div>

              <aside
                className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg"
                role="note"
              >
                <p className="font-semibold mb-2">
                  Tool:{" "}
                  <Link
                    href="/journey/spiritual"
                    className="text-primary hover:underline"
                  >
                    Spiritual Journey
                  </Link>
                </p>

                <div className="bg-muted/30 rounded-lg mb-8">
                  <ul className="space-y-2 mt-4 list-decimal">
                    <li>
                      All-powerful, all-knowledgeable, ever-existing,
                      independent, and outside of space-time.
                    </li>
                    <li>Design requires a designer.</li>
                    <li>
                      Yes, we need God because infinite regression does not lead
                      to any creation.
                    </li>
                    <li>
                      There is one God. Multiple gods would lead to chaos, but
                      we see stability. And logically, there cannot be two
                      equally powerful entities.
                    </li>
                    <li>
                      Yes, we are not appealing to a "God of the gaps." In fact,
                      each law and each constant we find in any field of study
                      implies the existence of a designer behind it.
                    </li>
                    <li>
                      No idea. One thing is certain: since space-time is the
                      creation of God, He is outside of it, just like a software
                      developer doesn't live inside the software.
                    </li>
                    <li>
                      To understand the existence of free will to do good and
                      bad, the concept of good and bad, the concept of day and
                      night, and many similar signs, we need to understand the
                      purpose of creation. This requires further study of the
                      current world and a search for that purpose. And, that is
                      our next step so strap in we are going for hunting the
                      best religion.
                    </li>
                  </ul>
                </div>
              </aside>
            </section>
            <section aria-labelledby="religions">
              <h2 id="religions" className="text-xl font-bold mt-12 mb-6">
                3.2 The need for Comparative study of Religions
              </h2>

              <p className="mb-4">
                We have one more challenge called{" "}
                <strong>Cognitive Bias</strong>. The rigid separation of
                religion and state adds layers of complexity, and the modern
                trend of portraying religion as nothing more than "backward
                thinking" has created a hostile climate. These Cognitive Biases
                don't just discourage open dialogue, they actively choke the
                oxygen needed for unbiased, honest research.
              </p>

              <p className="mb-4">
                First, we will explore religions broadly, then compare them, and
                finally, take a deep dive into the one that offers the most
                relevant and sustainable framework for the world of 2025.
              </p>

              <p className="mb-4">
                But even if we discover the "right" religion or philosophy, our
                work doesn't end there. We will have to scour history for
                examples of systems that were successfully woven into everyday
                life.systems that genuinely solved the issues of chaos and are
                in line with <strong>The Anchors of Reality</strong>.
              </p>
              <p className="mb-4">
                And this will not be easy because the current global framework,
                often referred to as the "New World Order," has been masterful
                at burying or erasing any competing alternative before it has
                the chance to take root. This is not just research; it's a
                battle for truth under layers of suppression.
              </p>

              <h2
                id="historical-context"
                className="text-xl font-bold mt-12 mb-6"
              >
                3.3 Reality of Religions
              </h2>
              <p className="mb-6">
                After looking into human history, we find that our recorded data
                begins around 3500 BC. Yet, we must remember that Homo sapiens
                have walked this planet for 200,000–300,000 years, according to
                fossil evidence. For that vast prehistoric span, we have no
                written records, no clear window into how our ancestors lived,
                thought, and organized themselves.
              </p>

              <p className="mb-6">
                From 3500 BC to 2025 AD, a wide variety of religions emerged:
              </p>

              <div className="bg-muted/30 rounded-lg mb-8">
                <ul className="space-y-4 list-decimal">
                  <li>
                    <strong>Prehistoric Religions</strong>
                    <ul className="mt-2 space-y-1 list-decimal">
                      <li>Ancient Egyptian Polytheism</li>
                      <li>Ancient Mesopotamian Polytheism</li>
                      <li>Indo-European Polytheism</li>
                      <li>Indus Valley Civilization Religion</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Canaanite Religion</strong>
                  </li>
                  <li>
                    <strong>Vedic Religion</strong>
                    <ul className="mt-2 space-y-1 list-decimal">
                      <li>Brahminism → Hinduism</li>
                      <li>Shramana Movements → Buddhism, Jainism</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Abrahamic Religions</strong>
                    <ul className="mt-2 space-y-1 list-decimal">
                      <li>Judaism</li>
                      <li>Christianity</li>
                      <li>Islam</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </section>
            <section aria-labelledby="comparison-parameters">
              <h2
                id="comparison-parameters"
                className="text-xl font-bold mt-12 mb-6"
              >
                3.4 Comparison Parameters
              </h2>
              <p className="mb-6">
                To navigate this complexity, we must establish clear, unbiased
                comparison parameters:
              </p>

              <div className="bg-muted/30 rounded-lg mb-8">
                <ul className="space-y-3 list-decimal">
                  <li>
                    <strong>Belief in God</strong>
                    <ul className="mt-1 space-y-1 list-decimal">
                      <li>Count (number of deities)</li>
                      <li>
                        Disparity between the actual definition of God and the
                        religion's definition
                      </li>
                      <li>Claimed attributes vs. actual attributes</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Scripture</strong>
                    <ul className="ml-6 mt-1 space-y-1 list-decimal">
                      <li>Count</li>
                      <li>Authenticity</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Denominations</strong>
                  </li>
                  <li>
                    <strong>Timeline of the religion</strong>
                  </li>
                  <li>
                    <strong>
                      Disparity between religious claims and actual history
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Disparity between human innate needs and the ways
                      prescribed by the religion
                    </strong>
                  </li>
                  <li>
                    <strong>Ethical & social teachings</strong>
                  </li>
                  <li>
                    <strong>Rituals</strong>
                  </li>
                  <li>
                    <strong>Social institutions</strong>
                  </li>
                  <li>
                    <strong>Inner experiences</strong>
                  </li>
                  <li>
                    <strong>Sentiments</strong>
                  </li>
                  <li>
                    <strong>Growth of religion</strong>
                    <ul className="ml-6 mt-1 space-y-1 list-decimal">
                      <li>Birth rate</li>
                      <li>Conversion rate</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <p className="mb-8">
                Filtering out the religions is much easier now, as we have
                clarity through logical reasoning on the Definition of God,
                Oneness of God, and clear understanding of Human Innate
                Disposition and the Line of Existence. But , this journey ends
                here.
              </p>
            </section>

            {/* <aside
              className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg"
              role="note"
            >
              <p className="font-semibold mb-2">
                Tool:{" "}
                <Link
                  href="/comparative-studies/comparative-religion-study"
                  className="text-primary hover:underline"
                >
                   Religion
                </Link>
              </p>
              <p>
                <strong>Conclusion:</strong> After an in-depth study using the
                above parameters, it is crystal clear which religion fulfills
                all the criteria, is in line with the definition of God, and is
                compliant with <strong>The Anchors of Reality</strong>.
              </p>
            </aside> */}
            <section
              aria-labelledby="conclusion"
              className="bg-teal-50 dark:bg-primary/20 border-2 border-primary dark:border-teal-800 rounded-lg p-6 mb-8"
            >
              <h2
                id="conclusion"
                className="text-3xl text-primary font-bold mb-4"
              >
                Conclusion
              </h2>
              Now, we have clarity on following points:
              <ul className="list-decimal mb-4 ml-8">
                <li>The anchors of reality.</li>
                <li>The current system, its setup, its origin and downfall.</li>
                <li>The need for Objective morality.</li>
                <li>The problem of Cognitive Dissonance.</li>
              </ul>
              <p className="mb-8">
                In some time, Your mind will finally be at peace, but this
                journey has more observation of the world then the
                self-introspection you need. By now, some of the{" "}
                <strong>Cognitive Dissonance</strong> within you must have been
                dissolved, But not all, your heart is still not at ease
                regarding following points:
                <ul className="list-decimal ml-8">
                  <li>The Existence of God and oneness of God.</li>
                  <li>
                    The corelation between religion and Objective Morality.
                  </li>
                  <li>How any of this affects your perception?</li>
                </ul>
              </p>
              <p className="mb-4">
                So, begin your Spiritual journey to dissolve the remaining
                Cognitive Dissonance:
              </p>
              <Link
                href="/journey/spiritual"
                className="flex justify-center my-4"
              >
                <Button className="bg-primary">
                  {" "}
                  Spiritual Journey <ChevronRight />
                </Button>
              </Link>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}

// <section aria-labelledby="what-must-be-done">
// <h3
//   id="what-must-be-done"
//   className="text-2xl font-bold mt-12 mb-6"
// >
//   What Must Be Done
// </h3>

// <p className="mb-8">
//   Challenging the elites of this New World Order may not be
//   within our power. But we must be aware of the dangers ahead
//   and refuse to fuel their fire.
// </p>

// <p>So, what should we do?</p>

// <div className="bg-muted/30 rounded-lg p-6">
//   <ul className="space-y-3 list-decimal list-outside">
//     <li>Work on yourself</li>
//     <li>Be the best version of yourself</li>
//     <li>Stay away from the distractions of the elites</li>
//     <li>Spread awareness about this imminent danger</li>
//     <li>Avoid EMIs and loans</li>
//     <li>Understand that the elites' power lies in usury</li>
//     <li>Discover your true purpose in life</li>
//     <li>Understand the reality of existence</li>
//     <li>Remember your beginning as a weak child</li>
//     <li>
//       Remember that you will return to weakness and perish
//     </li>
//     <li>Accept human weakness</li>
//     <li>Recognize the dangers of unchecked animal desire</li>
//     <li>Embrace principles, discipline and morality</li>
//     <li>
//       Learn the difference between subjective and objective
//       morality
//     </li>
//     <li>Study objective morality</li>
//     <li>
//       Read basic philosophy and understand the Necessary
//       Existence
//     </li>
//     <li>Do comparative religious studies</li>
//     <li>
//       Understand the difference between monotheism and
//       polytheism
//     </li>
//     <li>Find the true monotheistic religion</li>
//     <li>Bind yourself to objective morality</li>
//     <li>Research Islam</li>
//     <li>Learn about Imaan which means faith</li>
//     <li>
//       Strive for Ihsaan which means excellence in every action
//     </li>
//     <li>Raise your family within the framework of Islam</li>
//     <li>Instill love and fear of God in your heart</li>
//     <li>
//       Replace the love of worldly things with the love of God
//     </li>
//     <li>Stay firm on the path of Islam</li>
//     <li>Live in this world like a traveler</li>
//     <li>Adopt minimalism without extremes</li>
//     <li>Balance Deen and Duniya</li>
//     <li>Engage in Dawah which means calling others to truth</li>
//     <li>Prepare for death</li>
//   </ul>
// </div>

// <div className="bg-muted/30 rounded-lg p-6">
//   <ol className="space-y-3 list-decimal list-outside">
//     <li>Stay humble and truthful to avoid enemies</li>
//     <li>
//       Launch Dawah projects that continue after you are gone
//     </li>
//     <li>Build charity foundations</li>
//     <li>Construct a mosque</li>
//     <li>Dig wells</li>
//     <li>Guide your children to the straight path</li>
//     <li>Write Islamic books</li>
//     <li>Teach children</li>
//     <li>Publish articles</li>
//     <li>Produce educational content</li>
//   </ol>
// </div>
// </section>
