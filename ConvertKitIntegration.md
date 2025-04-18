# ConvertKit Integration in wristGPT

This document outlines how ConvertKit was integrated into the wristGPT React application while maintaining our custom design.

## Overview

We integrated ConvertKit forms for email collection while preserving our custom UI. This approach allowed us to:

1. Use ConvertKit's subscriber management and email features
2. Maintain our own UI/UX and branding
3. Implement the form in multiple places (Hero, EarlyAccess, Footer) with consistent styling

## Integration Approach

### Challenge

The default ConvertKit approach involves pasting their HTML form and script tags:

```html
<script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
<form action="https://app.kit.com/forms/7936872/subscriptions" class="seva-form formkit-form" method="post" data-uid="21fd4c5ed5">
  <!-- ConvertKit form HTML -->
</form>

<script async data-uid="21fd4c5ed5" src="https://richarddas.kit.com/21fd4c5ed5/index.js"></script>
```

This approach has limitations in a React application:
- Doesn't match our custom UI design
- Auto-injects forms that don't match our styling
- Difficult to integrate with React's state management
- Creates duplicate forms when used in multiple components

### Solution: Custom UI with ConvertKit Backend

We created a hybrid approach where:

1. We maintain our own React UI components
2. On form submission, we programmatically create and submit to ConvertKit's API
3. We prevent ConvertKit's script from auto-injecting unwanted forms

## Implementation

### 1. WaitlistForm Component

The core implementation is in our `WaitlistForm` component:

```tsx
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

// Extend Window interface to include ConvertKit's function
declare global {
  interface Window {
    createKitForm?: any;
  }
}

// Global flag to track if ConvertKit script is already loaded
let ckScriptLoaded = false;

const WaitlistForm = ({ className = '', dark = false }: WaitlistFormProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  // Load ConvertKit script only once globally
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
    
    // Set up monitoring for auto-injected forms
    removeAutoForms();
    const formCheckInterval = setInterval(removeAutoForms, 500);
    
    if (!ckScriptLoaded) {
      // Override ConvertKit's form creation method
      window.createKitForm = () => {}; // Stub function
      
      // Load scripts with custom attributes to prevent auto-initialization
      setTimeout(() => {
        // Load required scripts
        const coreScript = document.createElement('script');
        coreScript.src = 'https://f.convertkit.com/ckjs/ck.5.js';
        coreScript.async = true;
        coreScript.setAttribute('data-no-forms', 'true');
        document.body.appendChild(coreScript);
        
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
  
  // Form submission handler
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
  
  // Custom UI render
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
```

### 2. Footer Integration

We also integrated the same approach in the Footer component:

```tsx
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
    <footer>
      {/* Footer content */}
      <form onSubmit={handleNewsletterSubmit} className="flex">
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <LoadingSpinner /> : 'Subscribe'}
        </button>
      </form>
    </footer>
  );
};
```

## Key Techniques

1. **Script Loading Control**:
   - Using a global flag (`ckScriptLoaded`) to ensure scripts are only loaded once
   - Delayed loading to ensure proper initialization
   - Adding attributes to prevent auto-initialization

2. **Form Submission**:
   - Creating hidden forms with proper ConvertKit attributes
   - Programmatically submitting to ConvertKit's endpoint
   - Removing the form after submission

3. **Auto-form Prevention**:
   - Overriding ConvertKit's form creation function
   - Active monitoring and removal of auto-injected forms
   - Marking our custom forms with attributes to differentiate them

4. **React Integration**:
   - Using React state for form fields and submission status
   - Custom form validation
   - Loading states with spinners
   - Success toasts using the Sonner library

## Configuration

The ConvertKit form is configured with these parameters:

- Form ID: `7936872`
- Form UID: `21fd4c5ed5`
- Endpoint: `https://app.kit.com/forms/7936872/subscriptions`

If you need to change to a different ConvertKit form, you'll need to update these values in both the WaitlistForm component and the Footer component.

## Benefits of This Approach

1. **UI Control**: Complete control over the form's appearance and behavior
2. **Consistent UX**: Users experience the same UI and feedback across the site
3. **Performance**: Minimal impact on page load and rendering performance
4. **Flexibility**: Ability to add the form in multiple locations without duplication issues

## Maintenance Notes

When updating or modifying the integration:

1. Keep the global `ckScriptLoaded` flag to prevent multiple script loads
2. Ensure all forms use the same form ID and UID
3. Always mark custom forms with `data-custom="true"` attribute
4. Maintain the form removal mechanism to prevent ConvertKit's auto-injected forms 