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
  const inputContainerClassName = `flex flex-col sm:flex-row gap-3 p-1.5 ${
    dark ? 'bg-navy-light/40 backdrop-blur-md border border-white/20' : 'bg-silver-light border border-silver/20'
  } rounded-full shadow-lg`;
  const inputClassName = `flex-1 px-4 py-3 rounded-full outline-none transition-all duration-300 ${
    dark 
      ? 'bg-transparent text-white placeholder:text-white/60 focus:ring-1 focus:ring-teal/50' 
      : 'bg-white text-silver-dark placeholder:text-silver/80 focus:ring-1 focus:ring-teal/30'
  }`;
  
  return (
    <form ref={formRef} onSubmit={handleSubmit} className={formClassName} data-custom="true">
      <div className={inputContainerClassName}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className={inputClassName}
        />
        <button 
          type="submit" 
          disabled={isSubmitting} 
          className="btn-primary min-w-[140px] sm:min-w-[160px] rounded-full flex items-center justify-center gap-2 py-3 transition-all duration-300 transform hover:scale-105"
        >
          <span>Join Waitlist</span>
          {!isSubmitting && <ArrowRight size={16} />}
          {isSubmitting && (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
        </button>
      </div>
    </form>
  );
};

export default WaitlistForm;
