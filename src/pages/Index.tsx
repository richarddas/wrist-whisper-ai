
import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import ValuePropositions from '@/components/ValuePropositions';
import HowItWorks from '@/components/HowItWorks';
import EarlyAccess from '@/components/EarlyAccess';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Scroll to top on load and ensure everything is rendered
  useEffect(() => {
    window.scrollTo(0, 0);
    // Delay setting loaded to ensure all components have time to initialize
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Hero />
      <main className={isLoaded ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}>
        <ProblemSolution />
        <ValuePropositions />
        <HowItWorks />
        <EarlyAccess />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
