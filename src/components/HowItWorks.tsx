
import { useState, useEffect } from 'react';
import { Mic, Sparkles, Eye } from 'lucide-react';

const steps = [
  {
    icon: Mic,
    title: "Ask Naturally",
    description: "Simply speak to your watch or type a quick message. wristGPT understands natural language and conversational context.",
    color: "bg-navy"
  },
  {
    icon: Sparkles,
    title: "AI Processing",
    description: "Our advanced AI processes your request instantly, drawing from a vast knowledge base and your personal context.",
    color: "bg-teal"
  },
  {
    icon: Eye,
    title: "Glance Response",
    description: "Get concise, meaningful answers optimized for your watch's display—just a glance away.",
    color: "bg-navy"
  }
];

const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('how-it-works');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % steps.length);
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [isVisible]);
  
  return (
    <section id="how-it-works" className="py-24 bg-silver-light">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">How wristGPT Works</h2>
          <p className="body-lg text-silver max-w-2xl mx-auto">
            Experience the seamless integration of AI into your daily life through an intuitive interface designed for your wrist.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex items-start space-x-4 p-6 rounded-xl transition-all duration-500 ${
                  activeIndex === index 
                    ? 'bg-white shadow-lg scale-105' 
                    : 'opacity-70'
                } ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setActiveIndex(index)}
              >
                <div className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                  <step.icon className="text-white" size={24} />
                </div>
                
                <div>
                  <h3 className="heading-sm mb-2">{step.title}</h3>
                  <p className="body-md text-silver">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Watch Demo */}
          <div className={`flex justify-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="relative w-[300px] h-[350px]">
              {/* Watch Outline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-[250px] h-[300px] bg-silver-dark rounded-[45px] p-4">
                <div className="bg-black w-full h-full rounded-[35px] overflow-hidden relative flex items-center justify-center">
                  {/* Watch Screen Content */}
                  <div className="absolute inset-4 bg-navy rounded-[30px] flex items-center justify-center overflow-hidden">
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      {/* Step 1 UI */}
                      <div 
                        className={`absolute inset-0 flex flex-col items-center justify-center p-4 transition-all duration-500 ${
                          activeIndex === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                      >
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
                          <Mic className="text-teal" size={24} />
                        </div>
                        <div className="text-white text-xs text-center font-medium">
                          "What's my next meeting?"
                        </div>
                      </div>
                      
                      {/* Step 2 UI */}
                      <div 
                        className={`absolute inset-0 flex flex-col items-center justify-center p-4 transition-all duration-500 ${
                          activeIndex === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-16 h-16 relative">
                            <div className="absolute inset-0 bg-teal/30 rounded-full animate-ping"></div>
                            <div className="relative w-full h-full rounded-full bg-teal flex items-center justify-center">
                              <Sparkles className="text-white" size={32} />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Step 3 UI */}
                      <div 
                        className={`absolute inset-0 flex flex-col items-center justify-center p-3 transition-all duration-500 ${
                          activeIndex === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                      >
                        <div className="bg-navy-light w-full h-full rounded-lg p-2">
                          <div className="text-white text-xs font-medium mb-1">Marketing Meeting</div>
                          <div className="text-white/80 text-[10px] mb-2">11:30 AM - 12:30 PM</div>
                          <div className="flex items-center text-[10px] text-white/70">
                            <div className="w-3 h-3 bg-teal rounded-full mr-1"></div>
                            <span>Zoom Room 3</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Watch Strap */}
              <div className="absolute top-[300px] left-1/2 transform -translate-x-1/2 w-[100px] h-[50px] bg-silver/30 rounded-b-[20px]"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80px] h-[40px] bg-silver/20 rounded-b-[15px]"></div>
              
              {/* Watch Crown */}
              <div className="absolute top-[130px] left-[10px] w-[10px] h-[40px] bg-silver-dark rounded-l-[5px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
