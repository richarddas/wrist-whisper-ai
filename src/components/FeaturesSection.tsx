
import React from 'react';
import { MessageSquare, Zap, Mic, Clock, Wifi, Battery } from 'lucide-react';

const features = [
  {
    icon: <MessageSquare className="w-6 h-6 text-quantum-teal" />,
    title: "Natural Conversations",
    description: "Chat with GPT using natural language, just like texting a friend. Ask questions, get summaries, or brainstorm ideas."
  },
  {
    icon: <Zap className="w-6 h-6 text-quantum-teal" />,
    title: "Lightning Fast",
    description: "Optimized for speed on Apple Watch. Get responses in seconds, even with complex questions."
  },
  {
    icon: <Mic className="w-6 h-6 text-quantum-teal" />,
    title: "Voice First",
    description: "Dictate your questions naturally. Perfect for when your hands are busy or you're on the move."
  },
  {
    icon: <Clock className="w-6 h-6 text-quantum-teal" />,
    title: "Quick Answers",
    description: "Get concise, Apple Watch-optimized responses that give you exactly what you need at a glance."
  },
  {
    icon: <Wifi className="w-6 h-6 text-quantum-teal" />,
    title: "Works Offline",
    description: "Basic functionality available even without connection. Full features resume automatically when back online."
  },
  {
    icon: <Battery className="w-6 h-6 text-quantum-teal" />,
    title: "Battery Efficient",
    description: "Designed to minimize battery impact while maximizing utility throughout your day."
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-frost-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-iris mb-6">
            AI Assistant That Moves With You
          </h2>
          <p className="text-lg text-steel-slate">
            wristGPT transforms your Apple Watch into a powerful AI companion, always ready when you need it most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="bg-lavender-mist/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-midnight-iris mb-3">{feature.title}</h3>
              <p className="text-steel-slate">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
