import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { AnimatedText } from '@/components/ui/animated-text';
import { AnimatedCard } from '@/components/ui/animated-card';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

function Feature({ icon, title, description, delay = 0 }: FeatureProps) {
  const featureRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target, {
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 800,
              delay,
              easing: 'easeOutExpo',
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (featureRef.current) {
      observer.observe(featureRef.current);
    }
    
    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div ref={featureRef} className="opacity-0">
      <AnimatedCard className="h-full flex flex-col items-center text-center p-6">
        <div className="text-5xl text-accent mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </AnimatedCard>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedText
            text="Key Features"
            className="text-4xl md:text-5xl font-bold mb-4 text-primary"
            animation="slideUp"
          />
          <AnimatedText
            text="Advanced security features powered by blockchain technology"
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            animation="fadeIn"
            delay={400}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            title="Blockchain Authentication"
            description="Secure authentication using Solana blockchain, providing tamper-proof access verification and immutable audit trails."
            delay={0}
          />
          
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            }
            title="Mobile Wallet Access"
            description="Use your smartphone's crypto wallet to access doors and facilities without physical keys, cards, or fobs."
            delay={150}
          />
          
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            }
            title="Smart Permissions"
            description="Granular access control with customizable settings for time-based, role-based, and conditional access permissions."
            delay={300}
          />
          
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            }
            title="Token-Gated Access"
            description="Enable access based on NFT or token ownership, perfect for events, exclusive venues, and membership-based facilities."
            delay={450}
          />
          
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            }
            title="Detailed Audit Logs"
            description="Comprehensive audit logs stored on the blockchain for maximum transparency and compliance with security regulations."
            delay={600}
          />
          
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            title="Instant Deployment"
            description="Quick and easy installation with wireless connectivity and battery-powered options for retrofit applications."
            delay={750}
          />
        </div>
        
        <div className="mt-16 flex justify-center">
          <AnimatedCard glowOnHover={true} className="p-8 max-w-3xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 md:mb-0 md:mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">Security You Can Trust</h3>
                <p className="text-gray-600 dark:text-gray-300">Heimdall combines the power of blockchain verification with enterprise-grade hardware to deliver unmatched security for your spaces. Each access attempt is cryptographically verified and permanently recorded.</p>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}