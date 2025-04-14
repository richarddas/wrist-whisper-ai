
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex T.",
    role: "Product Manager",
    stars: 5,
    quote: "wristGPT has been a game-changer for me in meetings. I can quickly fact-check or get context without anyone noticing I'm using my watch."
  },
  {
    name: "Jordan K.",
    role: "Fitness Trainer",
    stars: 5,
    quote: "I use this daily with clients to look up exercise modifications or nutrition facts on the spot. It's like having an assistant right on my wrist!"
  },
  {
    name: "Taylor M.",
    role: "Content Creator",
    stars: 4,
    quote: "Being able to ask GPT questions while I'm out shooting content has saved me so much time. No more pulling out my phone and breaking my flow."
  },
  {
    name: "Morgan P.",
    role: "Busy Parent",
    stars: 5,
    quote: "As a parent, my hands are always full. wristGPT lets me get information or help my kids with homework questions without having to put everything down."
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-frost-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-iris mb-6">
            What Our Users Are Saying
          </h2>
          <p className="text-lg text-steel-slate">
            Join thousands of Apple Watch users who have transformed how they access information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < testimonial.stars ? 'text-amber-glow fill-amber-glow' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              </div>
              <p className="text-steel-slate mb-4 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="bg-lavender-mist w-10 h-10 rounded-full flex items-center justify-center text-midnight-iris font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-midnight-iris">{testimonial.name}</p>
                  <p className="text-sm text-steel-slate">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-quantum-teal/10 rounded-xl p-8 text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <p className="text-xl md:text-2xl font-medium text-midnight-iris mb-4">
            Join over 10,000 Apple Watch users already using wristGPT
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-6">
            <div className="bg-white py-2 px-4 rounded-full shadow-sm">
              <p className="font-semibold text-quantum-teal">⭐ 4.8/5 App Store Rating</p>
            </div>
            <div className="bg-white py-2 px-4 rounded-full shadow-sm">
              <p className="font-semibold text-quantum-teal">🏆 Featured by Apple</p>
            </div>
            <div className="bg-white py-2 px-4 rounded-full shadow-sm">
              <p className="font-semibold text-quantum-teal">🚀 #1 in Productivity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
