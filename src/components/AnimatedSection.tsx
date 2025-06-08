import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-in' | 'slide-up' | 'slide-in-right' | 'scale-in';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  animationType = 'fade-in' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-100px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000';
    const animationClasses = {
      'fade-in': 'opacity-0 translate-y-4',
      'slide-up': 'opacity-0 translate-y-12',
      'slide-in-right': 'opacity-0 translate-x-12',
      'scale-in': 'opacity-0 scale-95'
    };

    return `${baseClasses} ${isVisible ? 'opacity-100 translate-y-0 translate-x-0 scale-100' : animationClasses[animationType]}`;
  };

  return (
    <div ref={ref} className={`${className} ${getAnimationClasses()}`}>
      {children}
    </div>
  );
};

export default AnimatedSection; 