import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

// Extend Window interface to include ConvertKit's function
declare global {
  interface Window {
    createKitForm?: any;
  }
}

interface WaitlistFormProps {
  className?: string;
  dark?: boolean;
}

// Global flag to track if ConvertKit script is already loaded
let ckScriptLoaded = false;

const WaitlistForm = ({ className = '', dark = false }: WaitlistFormProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Load ConvertKit script only once globally and handle form removal
  useEffect(() => {
    // Function to remove any automatically inserted ConvertKit forms
    const removeAutoForms = () => {
      const autoForms = document.querySelectorAll('.formkit-form[data-uid="21fd4c5ed5"]:not([data-custom="true"])');
      autoForms.forEach(form => {
        if (form.parentNode) {
          form.parentNode.removeChild(form);
        }
      });
    };

    // Initially remove any forms and set up periodic check
    removeAutoForms();
    const formCheckInterval = setInterval(removeAutoForms, 500);

    if (!ckScriptLoaded) {
      // Override ConvertKit's form creation method
      window.createKitForm = () => {}; // Stub function

      // Load scripts with custom attributes to prevent auto-initialization
      setTimeout(() => {
        // Core script - load with modified behavior
        const coreScript = document.createElement('script');
        coreScript.src = 'https://f.convertkit.com/ckjs/ck.5.js';
        coreScript.async = true;
        coreScript.setAttribute('data-no-forms', 'true');
        document.body.appendChild(coreScript);

        // Form script - load but prevent auto-initialization
        const script = document.createElement('script');
        script.src = 'https://richarddas.kit.com/21fd4c5ed5/index.js';
        script.async = true;
        script.setAttribute('data-uid', '21fd4c5ed5');
        script.setAttribute('data-no-autoinit', 'true');
        script.setAttribute('data-disable-forms', 'true');
        document.body.appendChild(script);
      }, 100);

      ckScriptLoaded = true;
    }

    return () => {
      clearInterval(formCheckInterval);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create a hidden form with ConvertKit's required attributes
    const hiddenForm = document.createElement('form');
    hiddenForm.action = "https://app.kit.com/forms/7936872/subscriptions";
    hiddenForm.method = "post";
    hiddenForm.setAttribute('data-sv-form', '7936872');
    hiddenForm.setAttribute('data-uid', '21fd4c5ed5');
    hiddenForm.setAttribute('data-custom', 'true'); // Mark as our custom form
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
      toast.success('You have been added to the waitlist!');
      setEmail('');
      setIsSubmitting(false);
      document.body.removeChild(hiddenForm);
    }, 1000);
  };

  // Use separate variables for className and style to avoid any potential syntax issues
  const formClassName = `${className} w-full max-w-md mx-auto`;

  // Mobile-first design with elegant transitions
  const containerBg = dark ? 'bg-navy-light/30 backdrop-blur-md border border-white/10' : 'bg-silver-light border border-silver/20';
  const inputBg = dark ? 'bg-transparent' : 'bg-white';
  const textColor = dark ? 'text-white' : 'text-silver-dark';
  const placeholderColor = dark ? 'placeholder:text-white/50' : 'placeholder:text-silver/70';
  const focusRing = dark ? 'focus:ring-teal/40' : 'focus:ring-teal/20';

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={formClassName} data-custom="true">
      {/* Mobile design: Clean, focused input with prominent CTA */}
      <div className="sm:hidden">
        <div className={`relative mb-3 ${containerBg} rounded-2xl p-1 shadow-lg overflow-hidden`}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className={`w-full px-4 py-3.5 ${inputBg} ${textColor} ${placeholderColor} rounded-xl text-base outline-none transition-all ${focusRing} focus:ring-2`}
            aria-label="Email address"
          />

          {/* Subtle glow effect on focus */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 opacity-0 focus-within:opacity-100 bg-gradient-to-r from-teal/0 via-teal/10 to-teal/0"></div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-teal hover:bg-teal-light active:bg-teal-dark text-white font-medium py-3.5 px-6 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 text-base relative overflow-hidden"
          aria-label="Join waitlist"
        >
          {/* Button background animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal to-teal-light opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

          {/* Button content */}
          <div className="relative flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <span className="whitespace-nowrap">Joining</span>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </>
            ) : (
              <>
                <span className="whitespace-nowrap">Join Waitlist</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </>
            )}
          </div>
        </button>
      </div>

      {/* Desktop design: Horizontal layout with combined input and button */}
      <div className={`hidden sm:block ${containerBg} rounded-full p-1.5 shadow-lg`}>
        <div className="flex items-center gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className={`flex-1 px-5 py-3 ${inputBg} ${textColor} ${placeholderColor} rounded-full text-base outline-none transition-all ${focusRing} focus:ring-1`}
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-teal hover:bg-teal-light text-white font-medium px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 min-w-[140px] text-base shadow-md"
            aria-label="Join waitlist"
          >
            <span className="whitespace-nowrap">{isSubmitting ? 'Joining...' : 'Join Waitlist'}</span>
            {!isSubmitting && <ArrowRight size={16} />}
            {isSubmitting && (
              <svg className="animate-spin h-5 w-5 text-white ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default WaitlistForm;
