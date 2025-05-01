import { useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <div className="bg-navy py-16">
          <div className="section-container">
            <h1 className="text-4xl font-bold text-white text-center">
              Privacy Policy
            </h1>
            <p className="text-silver-light text-center mt-4">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>

        <div className="section-container py-16">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <section className="mb-10">
              <p className="text-gray-700 mb-4">
                Cleverbit AI Ltd ("we", "our", or "us") develops and publishes
                mobile applications including WatchGPT, designed to provide
                useful, AI-powered experiences. We are committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                and safeguard your data when you use our apps or visit our
                website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">
                1. Information We Do Not Collect
              </h2>
              <p className="text-gray-700">
                We do not collect, store, or share any personally identifiable
                information (PII) from users of our apps, including WatchGPT. We
                do not use third-party analytics, advertising SDKs, or tracking
                tools in WatchGPT.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">
                2. App Functionality
              </h2>
              <p className="text-gray-700 mb-4">
                WatchGPT processes user input via on-device or cloud-based AI
                services (such as OpenAI). User prompts may be sent to these
                services for generating responses. We do not store or retain any
                user queries or responses.
              </p>
              <p className="text-gray-700">
                Please note that the AI services used in WatchGPT may process
                data to provide responses. These services operate under their
                own privacy policies (e.g., OpenAI Privacy Policy).
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">
                3. Data Retention
              </h2>
              <p className="text-gray-700">
                We do not retain any data entered into WatchGPT. All
                conversations are ephemeral and remain on your device unless you
                explicitly save or share them.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">
                4. Your Consent
              </h2>
              <p className="text-gray-700">
                By using our apps, including WatchGPT, you consent to the
                processing of your input by the AI services used within the app
                to deliver its core functionality.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">
                5. Children's Privacy
              </h2>
              <p className="text-gray-700">
                Our apps are not intended for children under the age of 13. We
                do not knowingly collect any personal information from children.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">
                6. Changes to This Policy
              </h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated effective date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">
                7. Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy or our apps,
                please contact us.
              </p>
              <p className="text-gray-700">Cleverbit AI Ltd</p>
            </section>
          </div>

          <div className="mt-16 text-center">
            <a
              href="/"
              className="inline-flex items-center text-teal hover:text-teal-dark transition-colors"
            >
              <span className="mr-2">Return to Home</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
