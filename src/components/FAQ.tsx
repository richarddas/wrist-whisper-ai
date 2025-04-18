
import { useState } from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: "How does wristGPT work with my Apple Watch?",
    answer: "wristGPT integrates directly with your Apple Watch, utilizing watchOS capabilities to provide AI assistance without requiring your phone. It works with voice commands, text input, and contextual information to deliver intelligent responses right on your wrist."
  },
  {
    question: "What makes wristGPT different from using Siri?",
    answer: "Unlike Siri, wristGPT leverages advanced AI models to understand complex queries, learn from your preferences, and provide more comprehensive and personalized responses. It's designed specifically for the watch form factor and can maintain conversational context over time."
  },
  {
    question: "Do I need a cellular Apple Watch to use wristGPT?",
    answer: "wristGPT works with both cellular and WiFi-only Apple Watch models. With a cellular model, you'll have access to AI assistance anywhere. On WiFi-only models, features work when connected to WiFi or when paired with your iPhone nearby."
  },
  {
    question: "Will wristGPT drain my Apple Watch battery?",
    answer: "wristGPT is optimized for battery efficiency on the Apple Watch. While using AI features will consume some power, we've designed the application to minimize battery impact through efficient processing and smart caching of information."
  },
  {
    question: "When will wristGPT be available to the public?",
    answer: "We're targeting a public launch in Q3 2025. Early access will be available to waitlist members on a rolling basis starting Q1 2025. Join the waitlist to secure your place in line."
  },
  {
    question: "How much will wristGPT cost?",
    answer: "wristGPT will offer both free and premium tiers. Core functionality will be available at no cost, while advanced features will be part of our subscription plan. Early adopters on our waitlist will receive special pricing and benefits."
  }
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState<string>("");

  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
          <p className="body-lg text-silver max-w-2xl mx-auto">
            Everything you need to know about wristGPT and how it transforms your Apple Watch experience.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border-b border-silver/20 py-2">
                <AccordionTrigger className="text-lg font-medium hover:text-teal text-navy">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-silver text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
