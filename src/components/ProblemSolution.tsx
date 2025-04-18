
import { useState, useEffect } from 'react';
import { Smartphone, Watch } from 'lucide-react';
import Counter from './Counter';

const ProblemSolution = () => {
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
    
    const element = document.getElementById('problem-solution');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
  return (
    <section id="problem-solution" className="bg-silver-light py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem Side */}
          <div className={`bg-white p-8 rounded-2xl shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[-20px]'}`}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mr-4">
                <Smartphone className="text-white" size={24} />
              </div>
              <h3 className="heading-md text-navy">The Problem</h3>
            </div>
            
            <p className="body-md mb-8">
              The average person checks their phone <span className="text-navy font-bold">96 times per day</span>, 
              interrupting workflow, conversations, and focus. Our devices 
              demand our attention and pull us away from what matters.
            </p>
            
            <div className="bg-silver-light p-6 rounded-xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-navy mb-2">
                  {isVisible && <Counter end={96} duration={3000} />}
                </div>
                <p className="text-silver">Daily phone checks</p>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <div 
                    key={i} 
                    className={`h-8 bg-navy/20 rounded-md transition-all ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} 
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Solution Side */}
          <div className={`bg-navy p-8 rounded-2xl shadow-lg text-white transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[20px]'}`}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center mr-4">
                <Watch className="text-white" size={24} />
              </div>
              <h3 className="heading-md text-white">The Solution</h3>
            </div>
            
            <p className="body-md mb-8">
              wristGPT delivers AI assistance right on your wrist, 
              <span className="text-teal font-bold"> reducing screen time by 64%</span>. 
              Stay present while getting the information you need with just a glance.
            </p>
            
            <div className="bg-navy-light p-6 rounded-xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal mb-2">
                  {isVisible && <Counter end={64} suffix="%" duration={3000} />}
                </div>
                <p className="text-silver">Less screen time</p>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <div 
                    key={i} 
                    className={`h-8 rounded-md transition-all ${isVisible ? 'animate-fade-in' : 'opacity-0'} ${i <= 3 ? 'bg-teal/50' : 'bg-navy-light/50 border border-white/10'}`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
