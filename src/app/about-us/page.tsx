import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
        <p>
          To serve as a comprehensive and authentic source of Islamic knowledge,
          providing insightful content that enlightens, educates, and inspires
          individuals on their spiritual journey.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p>
          Our platform is dedicated to spreading the message of Islam,
          strengthening the faith of Muslims, and guiding those seeking the
          truth. We strive to present authentic Islamic teachings in a clear and
          accessible manner, making it easier for everyone to understand and
          implement in their lives.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Our Objectives</h2>
        <ul className="list-disc ml-6">
          <li>To spread the message of Islam to all humanity.</li>
          <li>To provide content that nurtures and strengthens faith.</li>
          <li>To offer guidance on spiritual, social, and ethical matters.</li>
          <li>To dispel misconceptions and clarify Islamic teachings.</li>
          <li>
            To inspire people towards a life of righteousness and devotion.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Our Approach</h2>
        <p>
          We adhere to the beliefs of Ahl as-Sunnah wa’l-Jamaa‘ah and follow the
          teachings of the Qur’an and authentic Sunnah. Our content is curated
          with references from esteemed scholars and traditional Islamic
          sources, ensuring credibility and accuracy. We avoid debates,
          controversies, and divisive topics, focusing instead on uplifting and
          beneficial knowledge.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Our Prayer</h2>
        <p>
          May Allah guide us to the straight path, grant us sincerity in our
          efforts, and allow this platform to be a means of benefit for all.
          Ameen.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
