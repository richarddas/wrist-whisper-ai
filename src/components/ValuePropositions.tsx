import { useState, useRef, useEffect } from 'react';
import { Briefcase, Heart, BookOpen, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ValueProp {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
  color: string;
}

const valueProps: ValueProp[] = [
  {
    title: "Professional Focus",
    description: "Stay present in meetings while accessing critical information hands-free.",
    icon: Briefcase,
    image: "/images/zbra-marketing-N4AK7Vy1McM-unsplash.jpg",
    color: "from-navy/80 to-navy-light/80"
  },
  {
    title: "Fitness Companion",
    description: "Get workout guidance, track progress, and stay motivated without breaking your flow.",
    icon: Heart,
    image: "/images/jonathan-borba-H6wTktsFxik-unsplash.jpg",
    color: "from-teal-dark/80 to-teal/80"
  },
  {
    title: "Learning Accelerator",
    description: "Access information and learning resources with a quick glance at your wrist.",
    icon: BookOpen,
    image: "/images/thought-catalog-505eectW54k-unsplash.jpg",
    color: "from-navy/80 to-navy-light/80"
  },
  {
    title: "Family Connection",
    description: "Stay present with loved ones while still accessing important information.",
    icon: Users,
    image: "/images/madalyn-cox-p-xTbAOvsnk-unsplash.jpg",
    color: "from-teal-dark/80 to-teal/80"
  }
];

const ValuePropositions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
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
    
    const element = document.getElementById('value-props');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
  return (
    <section id="value-props" className="py-24 bg-white">
      <div className="mb-16 text-center max-w-3xl mx-auto px-4">
        <h2 className="heading-lg mb-4">Transform Your Daily Interactions</h2>
        <p className="body-lg text-silver">
          wristGPT seamlessly integrates into every aspect of your life, enhancing your experience without taking you out of the moment.
        </p>
      </div>
      
      <div className="relative">
        <Carousel 
          opts={{
            loop: true,
            startIndex: activeIndex
          }}
          onSelect={(api) => {
            setActiveIndex(api.selectedScrollSnap());
          }}
          className="w-full"
        >
          <CarouselContent>
            {valueProps.map((prop, index) => (
              <CarouselItem key={index} className="w-full">
                <div className="relative h-[400px] md:h-[500px]">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={prop.image} 
                      alt={prop.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${prop.color}`}></div>
                  </div>
                  
                  <div className="relative z-10 h-full flex items-center">
                    <div className="section-container">
                      <div className="max-w-lg">
                        <div className="bg-white/10 backdrop-blur-md p-1 rounded-full inline-flex items-center mb-6">
                          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mr-2">
                            <prop.icon className="text-navy" size={20} />
                          </div>
                          <span className="text-white font-medium px-3">
                            {prop.title}
                          </span>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          {prop.title}
                        </h3>
                        
                        <p className="text-white/90 text-lg mb-8">
                          {prop.description}
                        </p>
                        
                        <a href="#join" className="btn-primary">
                          Join Waitlist
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
            {valueProps.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const carousel = document.querySelector('[role="region"][aria-roledescription="carousel"]');
                  if (carousel) {
                    const api = (carousel as any)._emblaApi;
                    if (api) api.scrollTo(index);
                  }
                  setActiveIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-white scale-125' : 'bg-white/50'
                }`}
                aria-label={`View value proposition ${index + 1}`}
              />
            ))}
          </div>
          
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 border-none text-white"/>
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 border-none text-white"/>
        </Carousel>
      </div>
    </section>
  );
};

export default ValuePropositions;
