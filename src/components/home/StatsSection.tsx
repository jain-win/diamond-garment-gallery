
import { useEffect, useState, useRef } from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const StatCard = ({ icon, value, label, suffix = "", delay = 0 }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (statRef.current) {
      observer.observe(statRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const end = value;
    const duration = 2000;
    const startTimestamp = performance.now();
    
    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    const timeout = setTimeout(() => {
      window.requestAnimationFrame(step);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);
  
  return (
    <div 
      ref={statRef}
      className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-brand text-3xl mb-4">
        {icon}
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-1">
        {count}{suffix}
      </h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-softgray py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-2">Our Achievements</h2>
        <p className="section-subtitle text-center mx-auto">Years of experience in delivering quality uniforms to various industries</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <StatCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            value={15}
            label="Years of Experience"
            delay={0}
          />
          
          <StatCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            }
            value={25000}
            label="Uniforms Delivered"
            suffix="+"
            delay={200}
          />
          
          <StatCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            value={1200}
            label="Happy Clients"
            suffix="+"
            delay={400}
          />
          
          <StatCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            }
            value={6}
            label="Industries Served"
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
