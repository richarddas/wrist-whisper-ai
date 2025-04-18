
import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import WaitlistForm from './WaitlistForm';
import Counter from './Counter';

const benefits = [
  "Early access to wristGPT beta features",
  "Exclusive development updates and insights",
  "Personalized onboarding and setup assistance",
  "Founding member status with lifetime benefits",
  "Influence product development with direct feedback",
  "30% discount on premium features for life"
];

const EarlyAccess = () => {
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
    
    const element = document.getElementById('early-access');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
  return (
    <section id="join" className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#051C2C,#0A324F,#08C7BA,#0A324F)] bg-[length:400%_400%] animate-shimmer opacity-40"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="heading-lg mb-4">Join the Waitlist Today</h2>
          <p className="body-lg text-silver-light">
            Be among the first to experience the future of AI assistance. Limited spots available for early adopters.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Benefits */}
          <div className="space-y-6">
            <h3 className="heading-md mb-6">Early Access Benefits</h3>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={`flex items-center space-x-3 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-teal w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center">
                    <Check className="text-white" size={16} />
                  </div>
                  <p className="body-md text-silver-light">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="pt-8 mt-8 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-silver-light mb-2">Limited spots available</p>
                  <div className="flex items-center space-x-2">
                    <Counter end={285} suffix="" className="text-xl font-bold text-white" />
                    <span className="text-teal font-medium">spots left</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-silver-light mb-2">Launch expected</p>
                  <p className="text-xl font-bold text-white">Q3 2025</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Waitlist Form */}
          <div className="bg-navy-light/50 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
            <h3 className="heading-md mb-4 text-center">Reserve Your Spot</h3>
            <p className="body-md text-center text-silver-light mb-8">
              Join thousands of early adopters and be first in line when wristGPT launches.
            </p>
            
            <div className="flex flex-col items-center space-y-6">
              <WaitlistForm dark className="w-full" />
              
              <div className="text-sm text-silver-light text-center">
                By joining, you'll receive product updates and news. You can unsubscribe at any time.
              </div>
              
              <div className="flex items-center space-x-4 justify-center">
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center">
                  <img 
                    src="https://ui-avatars.com/api/?name=Sara+Chen&background=0D8ABC&color=fff&size=24" 
                    alt="User avatar" 
                    className="rounded-full"
                  />
                </div>
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center">
                  <img 
                    src="https://ui-avatars.com/api/?name=John+Doe&background=7A28CB&color=fff&size=24" 
                    alt="User avatar" 
                    className="rounded-full"
                  />
                </div>
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center">
                  <img 
                    src="https://ui-avatars.com/api/?name=Emily+K&background=E64A19&color=fff&size=24" 
                    alt="User avatar" 
                    className="rounded-full"
                  />
                </div>
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center border border-white/10">
                  <span className="text-white text-xs font-medium">+4.8k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;
