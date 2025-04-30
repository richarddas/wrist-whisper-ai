
import { useEffect, useState } from 'react';
import Counter from './Counter';
import WaitlistForm from './WaitlistForm';
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const isMobile = useIsMobile();

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
          className="object-cover w-full h-full object-center"
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full section-container flex flex-col justify-center items-center text-center">
        <div className={`max-w-3xl mx-auto space-y-6 md:space-y-8 ${loaded ? 'animate-fade-in' : 'opacity-0'}`}>
          <div>
            <h1 className="heading-xl text-white mb-4 md:mb-6 px-1">
              <span className="block mb-1 md:mb-2">wristGPT</span>
              <span className="block bg-clip-text text-transparent bg-teal-gradient text-[80%] sm:text-[85%] leading-tight">
                The best ai is, the one you have with&nbsp;you
              </span>
            </h1>
            <p className="body-lg text-silver max-w-xs sm:max-w-sm md:max-w-2xl mx-auto typing-demo">
              Your assistant on your wrist.
            </p>
          </div>

          <div className={`relative z-10 space-y-4 sm:space-y-5 md:space-y-6 max-w-[92%] sm:max-w-md mx-auto ${loaded ? 'animate-fade-in-delayed' : 'opacity-0'}`}>
            {/* Subtle highlight effect behind the form */}
            <div className="absolute -inset-4 bg-gradient-radial from-teal/10 to-transparent rounded-full blur-xl opacity-70 -z-10"></div>

            <WaitlistForm dark />

            <div className="flex flex-wrap items-center justify-center gap-1 text-silver/90 text-xs sm:text-sm md:text-base">
              <span>Join</span>
              <Counter end={4832} prefix="" suffix="+" className="text-white font-bold" />
              <span>early adopters</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white h-6 w-6 md:h-8 md:w-8 opacity-80" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
