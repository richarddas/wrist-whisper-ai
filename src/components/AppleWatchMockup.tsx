
import React from 'react';

interface AppleWatchMockupProps {
  screenContent: React.ReactNode;
  className?: string;
}

const AppleWatchMockup: React.FC<AppleWatchMockupProps> = ({ screenContent, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Watch body */}
      <div className="relative w-[220px] h-[260px] bg-steel-slate rounded-[44px] shadow-xl">
        {/* Watch crown */}
        <div className="absolute right-0 top-1/3 w-[10px] h-[24px] bg-gray-400 rounded-l-md"></div>
        
        {/* Watch side button */}
        <div className="absolute right-0 top-1/2 w-[8px] h-[18px] bg-gray-400 rounded-l-md"></div>
        
        {/* Watch screen */}
        <div className="absolute top-[20px] left-[20px] right-[20px] bottom-[20px] bg-midnight-iris rounded-[34px] overflow-hidden flex items-center justify-center">
          <div className="w-[140px] h-[170px] rounded-[28px] bg-black overflow-hidden">
            {screenContent}
          </div>
        </div>
      </div>
      
      {/* Watch band */}
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[40px] h-[80px] bg-steel-slate rounded-b-full"></div>
    </div>
  );
};

export default AppleWatchMockup;
