import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { AnimatedText } from '@/components/ui/animated-text';
import { AnimatedCard } from '@/components/ui/animated-card';
import { useScrollAnimation } from '@/hooks/useAnimations';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function Step({ number, title, description, icon }: StepProps) {
  const stepRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: entry.target,
              opacity: [0, 1],
              translateY: [50, 0],
              duration: 800,
              easing: 'easeOutExpo',
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (stepRef.current) {
      observer.observe(stepRef.current);
    }
    
    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={stepRef} 
      className="opacity-0"
    >
      <AnimatedCard
        className="p-6 flex flex-col items-center text-center"
        glowOnHover={true}
        floatOnHover={true}
      >
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
          <div className="bg-white dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center relative z-10 border border-secondary">
            <div className="text-primary text-2xl font-bold">{number}</div>
          </div>
        </div>
        
        <div className="mt-2 mb-4 text-6xl text-gray-400">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </AnimatedCard>
    </div>
  );
}

export function HowItWorksSection() {
  // Animation for the connecting lines
  useEffect(() => {
    const lineAnimation = anime({
      targets: '.connection-line',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: (el, i) => i * 250,
      autoplay: false
    });
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          lineAnimation.play();
        }
      },
      { threshold: 0.3 }
    );
    
    const sectionEl = document.getElementById('how-it-works');
    if (sectionEl) {
      observer.observe(sectionEl);
    }
    
    return () => {
      if (sectionEl) {
        observer.unobserve(sectionEl);
      }
    };
  }, []);
  
  return (
    <section id="how-it-works" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedText
            text="How It Works"
            className="text-4xl md:text-5xl font-bold mb-4 text-primary"
            animation="slideUp"
          />
          <AnimatedText
            text="Heimdall makes access control simple and secure with blockchain technology"
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            animation="fadeIn"
            delay={400}
          />
        </div>
        
        <div className="relative">
          {/* Connection lines */}
          <svg className="absolute top-1/2 left-0 w-full h-10 -translate-y-1/2 hidden md:block" viewBox="0 0 1000 100">
            <line 
              className="connection-line" 
              x1="250" y1="50" x2="500" y2="50" 
              stroke="#1A2980" 
              strokeWidth="4" 
              strokeDasharray="10 5"
            />
            <line 
              className="connection-line" 
              x1="500" y1="50" x2="750" y2="50" 
              stroke="#1A2980" 
              strokeWidth="4" 
              strokeDasharray="10 5"
            />
          </svg>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <Step
              number={1}
              title="Scan"
              description="Approach the door and scan the QR code displayed on the lock with your mobile wallet app."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              }
            />
            
            <Step
              number={2}
              title="Sign"
              description="Authenticate by signing a secure message with your Solana wallet, verifying your identity on the blockchain."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                </svg>
              }
            />
            
            <Step
              number={3}
              title="Enter"
              description="Once verified, the door unlocks automatically, granting you secure access based on your wallet permissions."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
              }
            />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <AnimatedText
            text="All transactions are recorded on the Solana blockchain, creating an immutable audit trail."
            className="text-lg text-gray-600 dark:text-gray-300 italic max-w-3xl mx-auto"
            animation="fadeIn"
            delay={1000}
          />
        </div>
      </div>
    </section>
  );
}