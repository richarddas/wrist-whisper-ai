
import WaitlistForm from './WaitlistForm';

const FinalCTA = () => {
  return (
    <section className="relative bg-navy py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(5,28,44,1),_rgba(8,199,186,0.3))]"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg text-white mb-6">
            Experience the Future of <span className="text-teal">Wrist-Based AI</span>
          </h2>
          
          <p className="body-lg text-silver-light mb-12 max-w-2xl mx-auto">
            Join thousands of early adopters shaping the future of AI interaction. 
            Reserve your spot on the waitlist today.
          </p>
          
          <div className="flex flex-col items-center">
            <WaitlistForm dark className="mb-8" />
            
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="bg-navy-light/50 backdrop-blur px-5 py-4 rounded-lg flex items-center">
                <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="text-white text-lg font-semibold">Privacy First</h4>
                  <p className="text-silver-light text-sm">Your data stays private and secure</p>
                </div>
              </div>
              
              <div className="bg-navy-light/50 backdrop-blur px-5 py-4 rounded-lg flex items-center">
                <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="text-white text-lg font-semibold">Cancel Anytime</h4>
                  <p className="text-silver-light text-sm">No commitment required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
