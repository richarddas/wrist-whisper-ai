
import { useEffect, useState } from 'react';
import Counter from './Counter';
import WaitlistForm from './WaitlistForm';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 to-navy/90 mix-blend-multiply"></div>
        <img 
          src="/lovable-uploads/31016bf6-58ee-4088-b50f-8c99c2549edc.png" 
          alt="Person with smartwatch by a lake in a mountainous landscape" 
          className="object-cover w-full h-full"
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 w-full section-container flex flex-col justify-center items-center text-center">
        <div className={`max-w-3xl mx-auto space-y-8 ${loaded ? 'animate-fade-in' : 'opacity-0'}`}>
          <div>
            <h1 className="heading-xl text-white mb-6">
              <span className="block mb-2">wristGPT</span>
              <span className="block bg-clip-text text-transparent bg-teal-gradient">
                  The best ai is, the one you have with you 
              </span>
            </h1>
            <p className="body-lg text-silver max-w-2xl mx-auto typing-demo">
              Your intelligent assistant on your wrist. No phone needed.
            </p>
          </div>
          
          <div className={`space-y-6 max-w-md mx-auto ${loaded ? 'animate-fade-in-delayed' : 'opacity-0'}`}>
            <WaitlistForm dark />
            
            <div className="flex items-center justify-center space-x-2 text-silver">
              <span>Join</span>
              <Counter end={4832} prefix="" suffix="+" className="text-white font-bold" />
              <span>early adopters on the waitlist</span>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white h-8 w-8 opacity-80" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
