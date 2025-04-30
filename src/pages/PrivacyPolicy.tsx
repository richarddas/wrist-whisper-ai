import { useEffect } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const PrivacyPolicy = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <div className="bg-navy py-16">
          <div className="section-container">
            <h1 className="text-4xl font-bold text-white text-center">Privacy Policy</h1>
            <p className="text-silver-light text-center mt-4">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>
        </div>

        <div className="section-container py-16">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">1. Company Information</h2>
              <p className="text-gray-700 mb-4">
                wristGPT is operated by Cleverbit AI ("we", "our", or "us"), a company registered in England and Wales under company number 15290449, with our registered office at 85 Great Portland Street, First Floor, London, England, W1W 7LT.
              </p>
              <p className="text-gray-700">
                For all data protection matters, you can contact us at privacy@wristgpt.app.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">2. Introduction</h2>
              <p className="text-gray-700 mb-4">
                At wristGPT, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and use our application, and tell you about your privacy rights and how the law protects you.
              </p>
              <p className="text-gray-700 mb-4">
                This privacy policy complies with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
              <p className="text-gray-700">
                This privacy policy applies to all users of wristGPT and visitors to our website. Please read it carefully to understand our practices regarding your personal data.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">3. Data We Collect</h2>
              <p className="text-gray-700 mb-4">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our website and application.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website and application.</li>
                <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
              </ul>
              <p className="text-gray-700">
                We also collect, use and share Aggregated Data such as statistical or demographic data for any purpose. Aggregated Data could be derived from your personal data but is not considered personal data in law as this data will not directly or indirectly reveal your identity.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">4. How We Collect Your Data</h2>
              <p className="text-gray-700 mb-4">
                We use different methods to collect data from and about you including through:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Direct interactions.</strong> You may give us your Identity and Contact Data by filling in forms or by corresponding with us by post, phone, email or otherwise.</li>
                <li><strong>Automated technologies or interactions.</strong> As you interact with our website and application, we will automatically collect Technical Data about your equipment, browsing actions and patterns.</li>
                <li><strong>Third parties or publicly available sources.</strong> We may receive personal data about you from various third parties and public sources as set out below:
                  <ul className="list-circle pl-6 mt-2">
                    <li>Technical Data from analytics providers such as Google;</li>
                    <li>Contact, Financial and Transaction Data from providers of technical, payment and delivery services.</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">5. How We Use Your Data</h2>
              <p className="text-gray-700 mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
              <p className="text-gray-700">
                Generally, we do not rely on consent as a legal basis for processing your personal data although we will get your consent before sending third party direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">6. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
              </p>
              <p className="text-gray-700">
                We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">7. Data Retention</h2>
              <p className="text-gray-700">
                We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">8. Your Legal Rights</h2>
              <p className="text-gray-700 mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data. These include the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
              <p className="text-gray-700">
                If you wish to exercise any of the rights set out above, please contact us.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">9. Third-Party Links</h2>
              <p className="text-gray-700">
                Our website and application may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">10. International Transfers</h2>
              <p className="text-gray-700 mb-4">
                We may transfer your personal data outside the UK. Whenever we transfer your personal data out of the UK, we ensure a similar degree of protection is afforded to it by implementing at least one of the following safeguards:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>We will only transfer your personal data to countries that have been deemed to provide an adequate level of protection for personal data by the UK government.</li>
                <li>Where we use certain service providers, we may use specific contracts approved by the UK government which give personal data the same protection it has in the UK.</li>
              </ul>
              <p className="text-gray-700">
                Please contact us if you want further information on the specific mechanism used by us when transferring your personal data out of the UK.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">11. Cookies</h2>
              <p className="text-gray-700 mb-4">
                You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
              </p>
              <p className="text-gray-700">
                Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">12. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@wristgpt.app.
              </p>
              <p className="text-gray-700">
                You can also reach us by mail at: Cleverbit AI, 85 Great Portland Street, First Floor, London, England, W1W 7LT.
              </p>
            </section>
          </div>

          <div className="mt-16 text-center">
            <a href="/" className="inline-flex items-center text-teal hover:text-teal-dark transition-colors">
              <span className="mr-2">Return to Home</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
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
