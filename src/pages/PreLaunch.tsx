
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AppleWatchMockup from '@/components/AppleWatchMockup';
import { toast } from "sonner";
import FeaturesSection from '@/components/FeaturesSection';
import UseCasesSection from '@/components/UseCasesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

const PreLaunchPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState<number | null>(null);

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Simulate waitlist position generation (would be replaced with actual backend logic)
    const mockWaitlistPosition = Math.floor(Math.random() * 1000) + 1;
    
    setPosition(mockWaitlistPosition);
    toast.success("You've joined the wristGPT waitlist!");
  };

  const chatScreen = (
    <div className="w-full h-full flex flex-col justify-end p-1 bg-black text-white text-[6px]">
      <div className="mb-1 ml-1">What's my waitlist position?</div>
      <div className="bg-gray-800 rounded p-1 mb-1 mr-1 text-[5px]">
        {position ? `You're #${position} on the waitlist!` : "Join to find out"}
      </div>
      <div className="flex items-center">
        <div className="w-[60px] h-[8px] bg-gray-800 rounded-full flex-grow mr-1"></div>
        <div className="text-quantum-teal animate-pulse-glow">▶</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-frost-white overflow-hidden">
      {/* Hero Section */}
      <div className="container px-4 mx-auto py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-midnight-iris leading-tight">
              AI on your <span className="text-quantum-teal">wrist</span>. 
              <br />Always within reach.
            </h1>
            <p className="text-xl text-steel-slate">
              Be the first to experience ChatGPT, reimagined for your Apple Watch. Join the waitlist and get exclusive early access.
            </p>
            
            <form onSubmit={handleJoinWaitlist} className="space-y-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="w-full md:max-w-md"
              />
              <Button 
                type="submit" 
                className="w-full md:w-auto bg-pulse-coral hover:bg-pulse-coral/90 text-white"
              >
                Join Waitlist
              </Button>
            </form>
            
            {position && (
              <div className="mt-4 text-midnight-iris">
                You're #{position} on the wristGPT waitlist! 
                <p className="text-sm text-steel-slate">
                  Share with friends to move up the line.
                </p>
              </div>
            )}
            
            <div className="text-sm text-steel-slate">
              Compatible with Apple Watch Series 4 and newer
            </div>
          </div>
          
          <div className="flex justify-center animate-float">
            <div className="relative">
              <div className="absolute -z-10 w-64 h-64 bg-quantum-teal/20 rounded-full blur-3xl"></div>
              <AppleWatchMockup screenContent={chatScreen} />
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <FeaturesSection />
      <UseCasesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />

      {/* Pre-Footer Stats */}
      <div className="bg-midnight-iris text-white py-16">
        <div className="container px-4 mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-quantum-teal mb-2">1,000+</div>
              <div className="text-sm md:text-base">Waitlist Signups</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-quantum-teal mb-2">7 Days</div>
              <div className="text-sm md:text-base">Until Launch</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-quantum-teal mb-2">4.9/5</div>
              <div className="text-sm md:text-base">Beta Testing Score</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-quantum-teal mb-2">24/7</div>
              <div className="text-sm md:text-base">AI Assistance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLaunchPage;
