
import { useState, useEffect, useRef } from 'react';

interface CounterProps {
  start?: number;
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const Counter = ({ 
  start = 0, 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '', 
  className = 'text-2xl font-bold'
}: CounterProps) => {
  const [count, setCount] = useState(start);
  const countRef = useRef<number>(start);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  
  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      
      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);
      
      // Use easeOutQuart for a nice easing effect
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const currentCount = Math.floor(start + (end - start) * easeOutQuart);
      
      countRef.current = currentCount;
      setCount(currentCount);
      
      if (percentage < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    
    rafRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [start, end, duration]);
  
  return (
    <span className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default Counter;
