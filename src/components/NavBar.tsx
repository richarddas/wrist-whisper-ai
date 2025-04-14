
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-frost-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-midnight-iris">
              <span className="text-quantum-teal">wrist</span>GPT
            </a>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="text-midnight-iris hover:text-quantum-teal transition-colors">Features</a>
            <a href="#use-cases" className="text-midnight-iris hover:text-quantum-teal transition-colors">Use Cases</a>
            <a href="#testimonials" className="text-midnight-iris hover:text-quantum-teal transition-colors">Testimonials</a>
            <a href="#faq" className="text-midnight-iris hover:text-quantum-teal transition-colors">FAQ</a>
            <Button className="bg-pulse-coral hover:bg-pulse-coral/90 text-white">
              Download
            </Button>
          </nav>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-midnight-iris"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-frost-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#features" 
              className="block px-3 py-2 text-midnight-iris hover:bg-lavender-mist/20 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#use-cases" 
              className="block px-3 py-2 text-midnight-iris hover:bg-lavender-mist/20 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Use Cases
            </a>
            <a 
              href="#testimonials" 
              className="block px-3 py-2 text-midnight-iris hover:bg-lavender-mist/20 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className="block px-3 py-2 text-midnight-iris hover:bg-lavender-mist/20 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="px-3 py-2">
              <Button className="w-full bg-pulse-coral hover:bg-pulse-coral/90 text-white">
                Download
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
