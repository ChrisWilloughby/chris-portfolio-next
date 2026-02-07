"use client";

import { useEffect, useRef, useState } from 'react';

interface SectionObserverProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right';
  delay?: number;
}

export function SectionObserver({ 
  children, 
  className = '', 
  animation = 'fade-in',
  delay = 0 
}: SectionObserverProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const animationClasses = isVisible 
    ? `observe-animate is-visible ${animation}` 
    : `observe-animate ${animation}`;

  return (
    <div 
      ref={ref}
      className={`${animationClasses} ${className}`}
      style={{ 
        transitionDelay: delay > 0 ? `${delay}ms` : undefined 
      }}
    >
      {children}
    </div>
  );
}
