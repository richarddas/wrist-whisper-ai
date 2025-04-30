import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create a hidden form with ConvertKit's required attributes
    const hiddenForm = document.createElement('form');
    hiddenForm.action = "https://app.kit.com/forms/7936872/subscriptions";
    hiddenForm.method = "post";
    hiddenForm.setAttribute('data-sv-form', '7936872');
    hiddenForm.setAttribute('data-uid', '21fd4c5ed5');
    hiddenForm.setAttribute('data-custom', 'true');
    hiddenForm.style.display = 'none';

    // Add email input
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email_address';
    emailInput.value = email;
    hiddenForm.appendChild(emailInput);

    // Add to document and submit
    document.body.appendChild(hiddenForm);
    hiddenForm.submit();

    // Show success message and reset form
    setTimeout(() => {
      toast.success('Thanks for subscribing to our newsletter!');
      setEmail('');
      setIsSubmitting(false);
      document.body.removeChild(hiddenForm);
    }, 1000);
  };

  return (
    <footer className="bg-silver-dark text-white py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold flex items-center">
                <span className="bg-teal text-white w-8 h-8 rounded-full flex items-center justify-center mr-2">
                  w
                </span>
                wristGPT
              </h3>
              <p className="mt-4 text-silver-light">
                AI assistance at a glance. Seamlessly integrated into your Apple Watch experience.
              </p>
            </div>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-silver-light hover:text-teal transition-colors w-10 h-10 border border-silver-light hover:border-teal rounded-full flex items-center justify-center">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-silver-light hover:text-teal transition-colors w-10 h-10 border border-silver-light hover:border-teal rounded-full flex items-center justify-center">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-silver-light hover:text-teal transition-colors w-10 h-10 border border-silver-light hover:border-teal rounded-full flex items-center justify-center">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-silver-light hover:text-teal transition-colors w-10 h-10 border border-silver-light hover:border-teal rounded-full flex items-center justify-center">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-silver-light hover:text-teal transition-colors w-10 h-10 border border-silver-light hover:border-teal rounded-full flex items-center justify-center">
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-silver-light hover:text-teal transition-colors">About Us</a></li>
              <li><a href="#" className="text-silver-light hover:text-teal transition-colors">Careers</a></li>
              <li><a href="#" className="text-silver-light hover:text-teal transition-colors">Blog</a></li>
              <li><a href="#" className="text-silver-light hover:text-teal transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-silver-light hover:text-teal transition-colors">FAQ</a></li>
              <li><a href="/privacy" className="text-silver-light hover:text-teal transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-silver-light hover:text-teal transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-silver-light hover:text-teal transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-silver-light text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} wristGPT. All rights reserved.
          </p>

          <div className="w-full md:w-auto">
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="px-4 py-2 rounded-full sm:rounded-l-full sm:rounded-r-none bg-white/10 border border-white/20 sm:border-r-0 text-white text-sm focus:outline-none focus:ring-1 focus:ring-teal w-full sm:w-auto sm:min-w-[250px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="bg-teal hover:bg-teal-light text-white px-4 py-2 rounded-full sm:rounded-l-none sm:rounded-r-full transition-colors flex items-center justify-center w-full sm:w-auto sm:min-w-[110px]"
                disabled={isSubmitting}
                aria-label="Subscribe to newsletter"
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
