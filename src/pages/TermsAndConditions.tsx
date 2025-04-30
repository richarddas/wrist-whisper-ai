import { useEffect } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const TermsAndConditions = () => {
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
            <h1 className="text-4xl font-bold text-white text-center">Terms and Conditions</h1>
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
                You can contact us by email at support@wristgpt.app.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">2. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing or using wristGPT, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this service.
              </p>
              <p className="text-gray-700">
                The materials contained in wristGPT are protected by applicable copyright and trademark law.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">3. Use License</h2>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily download one copy of the materials on wristGPT for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose or for any public display;</li>
                <li>Attempt to reverse engineer any software contained on wristGPT;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              <p className="text-gray-700">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by wristGPT at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">4. Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                The materials on wristGPT are provided on an 'as is' basis. wristGPT makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="text-gray-700">
                Further, wristGPT does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">5. Limitations</h2>
              <p className="text-gray-700">
                In no event shall wristGPT or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on wristGPT, even if wristGPT or a wristGPT authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">6. Accuracy of Materials</h2>
              <p className="text-gray-700">
                The materials appearing on wristGPT could include technical, typographical, or photographic errors. wristGPT does not warrant that any of the materials on its website are accurate, complete, or current. wristGPT may make changes to the materials contained on its website at any time without notice. However, wristGPT does not make any commitment to update the materials.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">7. Links</h2>
              <p className="text-gray-700">
                wristGPT has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by wristGPT of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">8. Modifications</h2>
              <p className="text-gray-700">
                wristGPT may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">9. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of England and Wales. You and we both agree to submit to the non-exclusive jurisdiction of the English courts.
              </p>
              <p className="text-gray-700">
                If you are a consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident. Nothing in these terms and conditions, including this governing law provision, affects your rights as a consumer to rely on such mandatory provisions of local law.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">10. Consumer Rights</h2>
              <p className="text-gray-700 mb-4">
                If you are a consumer, you have certain rights under UK consumer protection laws. These include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>The right to clear information about the products and services before you buy</li>
                <li>The right to a 14-day cooling-off period for many online purchases</li>
                <li>The right to have digital content that is fit for purpose, as described, and of satisfactory quality</li>
                <li>The right to have services performed with reasonable care and skill and within a reasonable time</li>
              </ul>
              <p className="text-gray-700">
                Nothing in these terms and conditions will affect these statutory rights.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-navy mb-4">11. User Data and Privacy</h2>
              <p className="text-gray-700 mb-4">
                Your use of wristGPT is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information.
              </p>
              <p className="text-gray-700">
                By using wristGPT, you consent to the collection and use of information as detailed in our Privacy Policy. We are committed to protecting your privacy and will only use your personal information in accordance with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">12. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms and Conditions, please contact us at support@wristgpt.app.
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

export default TermsAndConditions;
