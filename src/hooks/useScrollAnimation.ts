import { useEffect, useRef } from 'react';

type AnimationType = 'fade-in' | 'slide-up' | 'slide-in-right' | 'scale-in';

interface UseScrollAnimationProps {
  animationType?: AnimationType;
  threshold?: number;
  delay?: number;
}

export const useScrollAnimation = ({
  animationType = 'fade-in',
  threshold = 0.1,
  delay = 0
}: UseScrollAnimationProps = {}) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(`animate-${animationType}`);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px'
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [animationType, threshold, delay]);

  return elementRef;
}; 