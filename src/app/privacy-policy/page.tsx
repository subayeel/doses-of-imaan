/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  ArrowUp,
  ArrowLeft,
  Menu,
  X,
  Shield,
  Eye,
  Globe,
  UserCheck,
  FileText,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contents = useMemo(() => {
    return [
      {
        id: "introduction",
        title: "Introduction",
        icon: Shield,
      },
      {
        id: "no-data-collection",
        title: "No Data Collection",
        icon: Eye,
      },
      {
        id: "cookies-tracking",
        title: "Cookies and Tracking",
        icon: UserCheck,
      },
      {
        id: "third-party-links",
        title: "Third-Party Links",
        icon: Globe,
      },
      {
        id: "policy-changes",
        title: "Policy Changes",
        icon: FileText,
      },
      {
        id: "contact",
        title: "Contact Us",
        icon: Mail,
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
            <h1 className="text-2xl md:text-3xl  font-bold text-gray-900 dark:text-gray-100">
              Privacy Policy
            </h1>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2">
            <p className="text-lg text-gray-600 dark:text-gray-400 font-light">
              Your privacy and data protection are important to us
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1 sm:mt-0">
              Effective Date: {new Date().toLocaleDateString()}
            </p>
          </div>
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
              {contents.map(({ id, title, icon: Icon }) => (
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
                  <Icon size={16} />
                  {title}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {/* Introduction Section */}
          <section id="introduction" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                <Shield className="text-blue-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Introduction
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Welcome to our website. We are dedicated to providing articles
              that strengthen the faith of Muslims, invite non-Muslims to Islam,
              and assist individuals on their spiritual journey. Your privacy is
              important to us, and this policy outlines how we handle user data.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Our Commitment to Privacy
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                This privacy policy reflects our commitment to protecting your
                privacy while providing valuable Islamic content. We believe in
                transparency and want you to understand exactly how your
                information is (or isn't) collected and used when you visit our
                site.
              </p>
            </div>
          </section>

          {/* No Data Collection Section */}
          <section id="no-data-collection" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                <Eye className="text-green-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                No Data Collection
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Our website is a free tool that does not collect, store, or
              process any personal information. We do not have a backend or
              database to retain user data.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                What This Means for You:
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>No personal information is collected or stored</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>No user accounts or registration required</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>No behavioral tracking or profiling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Complete anonymity while browsing</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Cookies and Tracking Section */}
          <section id="cookies-tracking" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                <UserCheck className="text-purple-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Cookies and Tracking
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              We do not use cookies or tracking technologies to collect user
              data. Your interactions with our website remain completely
              anonymous.
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Technical Details:
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>No tracking cookies are set by our website</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>No analytics or advertising cookies are used</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>No third-party tracking scripts are embedded</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    Only essential technical cookies may be used for basic
                    functionality
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Third-Party Links Section */}
          <section id="third-party-links" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                <Globe className="text-orange-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Third-Party Links
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Our website may contain links to third-party sites. We are not
              responsible for their privacy policies and encourage users to
              review them separately.
            </p>
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Important Notice:
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                When you click on external links, you will be leaving our
                website and entering sites that have their own privacy policies
                and practices.
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    We cannot control the privacy practices of external sites
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>We encourage you to review their privacy policies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    Links are provided for reference and educational purposes
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Policy Changes Section */}
          <section id="policy-changes" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900">
                <FileText className="text-amber-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Changes to This Policy
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              We may update this policy periodically. Continued use of our
              website constitutes acceptance of any modifications.
            </p>
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Policy Updates:
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    Changes will be posted on this page with updated effective
                    date
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Material changes will be clearly highlighted</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    Your continued use implies acceptance of updated terms
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                <Mail className="text-gray-500" size={24} />
              </div>
              <h2 className="text-3xl  font-bold text-gray-900 dark:text-gray-100">
                Contact Us
              </h2>
            </div>
            <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              If you have any questions regarding this privacy policy, feel free
              to contact us.
            </p>
            <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-6 my-8">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                For any privacy-related questions or concerns, please reach out
                to us at{" "}
                <strong className="text-gray-900 dark:text-gray-100">
                  contact@yourwebsite.com
                </strong>
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-8">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                We are committed to addressing any concerns you may have about
                your privacy and will respond to your inquiries in a timely
                manner. Your trust is important to us as we continue our mission
                to share authentic Islamic knowledge.
              </p>
            </div>
          </section>
        </article>
      </main>

      {/* Clean Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-12 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-xl  font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Your Privacy is Protected
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            We are committed to maintaining your privacy while providing
            valuable Islamic content and knowledge.
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

export default PrivacyPolicy;
