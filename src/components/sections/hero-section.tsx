import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { Button } from '@/components/ui/button';
import { AnimatedText } from '@/components/ui/animated-text';
import { ParticleContainer } from '@/components/ui/particle-container';
import { AnimatedDoor } from '@/components/ui/animated-door';

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const doorContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const heroElement = heroRef.current;
    const heroItems = heroElement.querySelectorAll('.hero-item');
    
    // Animate hero items
    animate(heroItems, {
      opacity: [0, 1],
      translateY: [20, 0],
      delay: stagger(200),
      easing: 'easeOutExpo',
    });
  }, []);

  const handleDoorOpen = () => {
    if (!doorContainerRef.current) return;
    
    const texts = doorContainerRef.current.querySelectorAll('.door-text');
    
    animate(texts, {
      opacity: [0, 1],
      translateY: [10, 0],
      delay: stagger(150, {start: 300}),
      easing: 'easeOutQuad',
    });
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center">
      {/* Particle Background */}
      <ParticleContainer
        id="hero-particles"
        className="absolute inset-0"
        count={80}
      />
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10" ref={heroRef}>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="hero-item opacity-0">
              <span className="inline-block text-sm font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
                Next-Gen Access Control
              </span>
            </div>
            
            {/* Changed animation="none" to animation="fadeIn" which is likely a valid value */}
            <AnimatedText
              text="Secure Access Powered by Blockchain"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 dark:text-white hero-item opacity-0"
              animation="fadeIn"
            />
            
            <div className="hero-item opacity-0">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
                Heimdall replaces traditional keys and cards with blockchain identities for secure, auditable, and seamless access control.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 hero-item opacity-0">
              <Button variant="glow" size="xl" className="font-semibold">
                Get Started
              </Button>
              
              <Button variant="outline" size="xl" className="font-semibold">
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-8 flex items-center space-x-4 hero-item opacity-0">
              <div className="flex -space-x-2">
                {[
                  'https://randomuser.me/api/portraits/women/17.jpg',
                  'https://randomuser.me/api/portraits/men/32.jpg',
                  'https://randomuser.me/api/portraits/women/44.jpg',
                  'https://randomuser.me/api/portraits/men/9.jpg',
                ].map((src, index) => (
                  <div 
                    key={index} 
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden bg-gray-200"
                    style={{
                      backgroundImage: `url(${src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      zIndex: 4 - index,
                    }}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">2,000+</span> organizations secured
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div ref={doorContainerRef} className="relative">
              <AnimatedDoor 
                className="w-full max-w-xs md:max-w-sm"
                onDoorOpen={handleDoorOpen}
                isLocked={false}
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800/60 to-transparent p-6 text-white rounded-lg opacity-0 door-text">
                <h3 className="text-xl font-bold mb-1">Secure Access Granted</h3>
                <p className="text-sm text-white/80">Blockchain identity verified</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 hero-item opacity-0">
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
              title: "Enhanced Security",
              description: "Cryptographic authentication provides military-grade security without physical keys or cards."
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              ),
              title: "Immutable Audit Trails",
              description: "Every access attempt is recorded on the Solana blockchain for complete transparency."
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              title: "Seamless Management",
              description: "Grant or revoke access permissions instantly and remotely through our intuitive dashboard."
            }
          ].map((feature, index) => (
            <div key={index} className="flex items-start p-6 bg-white dark:bg-gray-800 rounded-xl shadow-subtle">
              <div className="mr-4 bg-primary/10 p-3 rounded-lg text-primary">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}