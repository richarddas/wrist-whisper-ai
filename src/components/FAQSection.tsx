
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does wristGPT affect my Apple Watch battery life?",
    answer: "wristGPT is designed to be battery-efficient. The app optimizes queries and uses Apple's latest APIs to minimize power consumption. In our testing, normal usage adds minimal impact to your daily battery use - typically less than 5% for a day with moderate usage."
  },
  {
    question: "Do I need my iPhone nearby to use wristGPT?",
    answer: "No, wristGPT works independently on your Apple Watch, even when your iPhone is not nearby. As long as your watch has a WiFi or cellular connection, you'll have full functionality. We also offer a limited offline mode for basic queries."
  },
  {
    question: "Is my data secure when using wristGPT?",
    answer: "Absolutely. wristGPT prioritizes your privacy and security. All conversations are encrypted end-to-end, and we don't store your queries or responses on our servers longer than necessary to provide the service. You can also delete your conversation history at any time directly from the app."
  },
  {
    question: "Which Apple Watch models are supported?",
    answer: "wristGPT is compatible with Apple Watch Series 4 and newer, running watchOS 8 or higher. For optimal performance, we recommend Series 6 or newer models."
  },
  {
    question: "Does wristGPT require a subscription?",
    answer: "wristGPT offers both free and premium tiers. The free version gives you access to essential features with some usage limits. Our premium subscription unlocks unlimited queries, priority response times, and advanced features like custom instructions and offline mode. Subscription options are available monthly or annually with a 20% discount for annual plans."
  },
  {
    question: "How accurate are the responses compared to using ChatGPT on other devices?",
    answer: "wristGPT uses the same underlying models as ChatGPT, so the core intelligence is identical. However, we optimize responses for the Apple Watch interface, making them more concise and glanceable. For complex research or creative writing tasks that require longer outputs, we recommend using ChatGPT on larger devices."
  }
];

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-iris mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-steel-slate">
            Everything you need to know about wristGPT
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-medium text-midnight-iris py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-steel-slate pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-steel-slate">
            Still have questions? We're here to help.
          </p>
          <a 
            href="mailto:support@wristgpt.app" 
            className="inline-block mt-2 text-quantum-teal font-medium hover:underline"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
