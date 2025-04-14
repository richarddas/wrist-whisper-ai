
import React from 'react';
import { Button } from "@/components/ui/button";
import AppleWatchMockup from './AppleWatchMockup';

const HeroSection: React.FC = () => {
  // Chat sample content for the watch screen
  const chatScreen = (
    <div className="w-full h-full flex flex-col justify-end p-1 bg-black text-white text-[6px]">
      <div className="mb-1 ml-1">What's the weather in SF?</div>
      <div className="bg-gray-800 rounded p-1 mb-1 mr-1 text-[5px]">
        Currently 68°F and sunny in San Francisco with light winds. Perfect day to be outside!
      </div>
      <div className="flex items-center">
        <div className="w-[60px] h-[8px] bg-gray-800 rounded-full flex-grow mr-1"></div>
        <div className="text-quantum-teal animate-pulse-glow">▶</div>
      </div>
    </div>
  );

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center text-center md:text-left space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-midnight-iris leading-tight">
              <span className="text-quantum-teal">AI</span> on your wrist.
              <br />
              <span className="relative">
                Always within reach.
                <svg className="absolute w-full -bottom-3 left-0 hidden md:block" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0,5 C50,0 150,0 200,5" stroke="#05B2DC" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-steel-slate">
              Experience ChatGPT directly from your Apple Watch. Get instant answers, assistance, and insights—no phone required.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Button className="bg-pulse-coral hover:bg-pulse-coral/90 text-white text-lg px-8 py-6">
                Download Now
              </Button>
              <Button variant="outline" className="border-quantum-teal text-quantum-teal hover:bg-quantum-teal/10 text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
            <div className="text-sm text-steel-slate pt-2">
              Compatible with Apple Watch Series 4 and newer
            </div>
          </div>
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative animate-float">
              <div className="absolute -left-16 -top-16 w-48 h-48 bg-quantum-teal/20 rounded-full blur-3xl"></div>
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-pulse-coral/20 rounded-full blur-3xl"></div>
              <AppleWatchMockup screenContent={chatScreen} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
