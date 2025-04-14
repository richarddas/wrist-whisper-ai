
import React from 'react';
import { Button } from "@/components/ui/button";
import AppleWatchMockup from './AppleWatchMockup';

const CTASection: React.FC = () => {
  // Chat sample content for the watch screen
  const chatScreen = (
    <div className="w-full h-full flex flex-col justify-end p-1 bg-black text-white text-[6px]">
      <div className="mb-1 ml-1">Tell me a quick joke</div>
      <div className="bg-gray-800 rounded p-1 mb-1 mr-1 text-[5px]">
        Why don't scientists trust atoms? Because they make up everything!
      </div>
      <div className="flex items-center">
        <div className="w-[60px] h-[8px] bg-gray-800 rounded-full flex-grow mr-1"></div>
        <div className="text-quantum-teal animate-pulse-glow">▶</div>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-midnight-iris to-quantum-teal text-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center text-center md:text-left animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the Future of Wearable AI Today
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Join thousands of Apple Watch users who have transformed how they access information, solve problems, and stay productive on the go.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold">10K+</p>
                  <p className="text-sm">Active Users</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold">4.8</p>
                  <p className="text-sm">App Store Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold">120K+</p>
                  <p className="text-sm">Queries per Day</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Button size="lg" className="bg-pulse-coral hover:bg-pulse-coral/90 text-white border-2 border-white/20">
                Download Now
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative animate-float">
              <div className="absolute -z-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <AppleWatchMockup screenContent={chatScreen} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
