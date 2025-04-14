
import React from 'react';
import AppleWatchMockup from './AppleWatchMockup';

const useCases = [
  {
    title: "On-the-Go Research",
    description: "Need to quickly check a fact during a conversation? Just ask your watch and get immediate answers without reaching for your phone.",
    screenContent: (
      <div className="w-full h-full flex flex-col justify-end p-1 bg-black text-white text-[6px]">
        <div className="mb-1 ml-1">Who won the 2022 World Cup?</div>
        <div className="bg-gray-800 rounded p-1 mb-1 mr-1 text-[5px]">
          Argentina won the 2022 World Cup, defeating France in the final on penalties after a 3-3 draw.
        </div>
      </div>
    )
  },
  {
    title: "Hands-Free Assistant",
    description: "Cooking, working out, or carrying groceries? Get valuable information without having to stop what you're doing.",
    screenContent: (
      <div className="w-full h-full flex flex-col justify-end p-1 bg-black text-white text-[6px]">
        <div className="mb-1 ml-1">How many cups in 500ml?</div>
        <div className="bg-gray-800 rounded p-1 mb-1 mr-1 text-[5px]">
          500ml equals about 2.11 US cups or 2 cups + 2 tablespoons.
        </div>
      </div>
    )
  },
  {
    title: "Meeting Prep",
    description: "Quickly brief yourself before walking into a meeting with key points and context about the topics to be discussed.",
    screenContent: (
      <div className="w-full h-full flex flex-col justify-end p-1 bg-black text-white text-[6px]">
        <div className="mb-1 ml-1">Summarize Q1 report key points</div>
        <div className="bg-gray-800 rounded p-1 mb-1 mr-1 text-[5px]">
          Q1: Revenue up 12%, new client acquisitions exceeded target by 15%, product launch delayed to Q2, marketing costs under budget.
        </div>
      </div>
    )
  }
];

const UseCasesSection: React.FC = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-iris mb-6">
            Everyday AI, Right On Your Wrist
          </h2>
          <p className="text-lg text-steel-slate">
            See how wristGPT integrates seamlessly into your daily life
          </p>
        </div>

        <div className="space-y-24">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`text-center ${index % 2 === 1 ? 'md:text-right' : 'md:text-left'} animate-fade-in`} style={{ animationDelay: "0.2s" }}>
                <h3 className="text-2xl md:text-3xl font-bold text-midnight-iris mb-4">{useCase.title}</h3>
                <p className="text-lg text-steel-slate">{useCase.description}</p>
              </div>
              <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="relative animate-float">
                  <div className="absolute -z-10 w-48 h-48 bg-quantum-teal/10 rounded-full blur-3xl"></div>
                  <AppleWatchMockup screenContent={useCase.screenContent} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
