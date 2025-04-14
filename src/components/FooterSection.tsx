
import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-midnight-iris text-white pt-16 pb-8">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <a href="#" className="text-2xl font-bold mb-4 inline-block">
              <span className="text-quantum-teal">wrist</span>GPT
            </a>
            <p className="text-gray-300 mt-4 max-w-xs">
              The smartest AI assistant for your Apple Watch. Get answers and assistance wherever you go.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-quantum-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-quantum-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-quantum-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-quantum-teal transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-quantum-teal transition-colors">Features</a></li>
              <li><a href="#use-cases" className="text-gray-300 hover:text-quantum-teal transition-colors">Use Cases</a></li>
              <li><a href="#" className="text-gray-300 hover:text-quantum-teal transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-quantum-teal transition-colors">Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-quantum-teal transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-quantum-teal transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-quantum-teal transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-quantum-teal transition-colors">API Documentation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-quantum-teal transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-quantum-teal transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-quantum-teal transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-quantum-teal transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} wristGPT. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-quantum-teal text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-quantum-teal text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-quantum-teal text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
