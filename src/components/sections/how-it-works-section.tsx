import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { AnimatedText } from '@/components/ui/animated-text';
import { AnimatedCard } from '@/components/ui/animated-card';

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  
  // Helper function to replace anime.setDashoffset
  const setDashoffset = (el: SVGPathElement): number => {
    const pathLength = el.getTotalLength ? el.getTotalLength() : 0;
    return pathLength;
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const section = sectionRef.current;
          if (!section) return;
          
          // Animate steps
          const steps = section.querySelectorAll('.step-item');
          animate(steps, {
            opacity: [0, 1],
            translateY: [20, 0],
            delay: stagger(300),
            easing: 'easeOutExpo',
          });
          
          // Animate connection lines
          const lines = section.querySelectorAll('.connection-line');
          lines.forEach(line => {
            const pathLength = (line as SVGPathElement).getTotalLength?.() || 1000;
            
            animate(line, {
              strokeDashoffset: [pathLength, 0],
              easing: 'easeInOutSine',
              duration: 1500,
              delay: 300,
            });
          });
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const steps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Scan Your Wallet",
      description: "Use your crypto wallet app to scan the Heimdall QR code at the entry point.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Verify Blockchain Identity",
      description: "Your wallet digitally signs the request, proving your identity on the blockchain.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Check Access Permissions",
      description: "The system checks your wallet against the access control list stored on Solana.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      ),
      title: "Door Unlocks Automatically",
      description: "Upon verification, the door unlocks and your access is logged on the blockchain.",
    }
  ];
  
  return (
    <section id="how-it-works" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="text-center mb-16">
          <AnimatedText
            text="How It Works"
            className="text-4xl md:text-5xl font-bold mb-4 text-primary"
            animation="slideUp"
          />
          <AnimatedText
            text="Simple, secure, and seamless access control"
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            animation="fadeIn"
            delay={400}
          />
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection lines */}
            <svg className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 0 }}>
              <path
                d="M100,60 C150,60 150,180 200,180 C250,180 250,300 300,300 C350,300 350,420 400,420"
                className="connection-line"
                stroke="#1A2980"
                strokeWidth="3"
                strokeDasharray="5,5"
                fill="none"
                style={{ strokeDashoffset: '1000' }}
              />
            </svg>
            
            {/* Steps */}
            <div className="space-y-24">
              {steps.map((step, index) => (
                <div key={index} className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} step-item opacity-0`}>
                  <AnimatedCard className={`max-w-lg ${index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'} p-6`}>
                    <div className="flex items-start">
                      <div className="shrink-0 mr-4">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                          {step.icon}
                        </div>
                        <div className="flex justify-center mt-2">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                            {index + 1}
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                      </div>
                    </div>
                  </AnimatedCard>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <AnimatedCard className="inline-block max-w-2xl p-6">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-4 md:mb-0 md:mr-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Lightning-Fast Verification</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    The entire process takes less than a second, providing a seamless experience while maintaining the highest level of security.
                  </p>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
}