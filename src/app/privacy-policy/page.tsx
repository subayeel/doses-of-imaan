import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">Effective Date: {new Date().toLocaleDateString()}</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to our website. We are dedicated to providing articles that
          strengthen the faith of Muslims, invite non-Muslims to Islam, and
          assist individuals on their spiritual journey. Your privacy is
          important to us, and this policy outlines how we handle user data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. No Data Collection</h2>
        <p>
          Our website is a free tool that does not collect, store, or process
          any personal information. We do not have a backend or database to
          retain user data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Cookies and Tracking</h2>
        <p>
          We do not use cookies or tracking technologies to collect user data.
          Your interactions with our website remain completely anonymous.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party sites. We are not
          responsible for their privacy policies and encourage users to review
          them separately.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. Changes to This Policy
        </h2>
        <p>
          We may update this policy periodically. Continued use of our website
          constitutes acceptance of any modifications.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Contact Us</h2>
        <p>
          If you have any questions regarding this privacy policy, feel free to
          contact us at <strong>contact@yourwebsite.com</strong>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
