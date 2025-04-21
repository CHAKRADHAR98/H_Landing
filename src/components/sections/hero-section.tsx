import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { AnimatedText } from '@/components/ui/animated-text';
import { Button } from '@/components/ui/button';
import { ParticleContainer } from '@/components/ui/particle-container';
import { AnimatedDoor } from '@/components/ui/animated-door';

export function HeroSection() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const particleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const particleContainer = particleRef.current;
    if (!particleContainer) return;
    
    // Create authentication flow animation
    // Inside the useEffect in HeroSection component

    anime({
        targets: particleContainer.querySelectorAll('.particle'),
        translateX: (el: HTMLElement) => {
          const phone = phoneRef.current;
          if (!phone) return 0;
          
          // Get phone position
          const phoneRect = phone.getBoundingClientRect();
          const particleContainerRect = particleContainer.getBoundingClientRect();
          
          // Calculate phone center position relative to particle container
          const phoneCenterX = (phoneRect.left - particleContainerRect.left) + phoneRect.width / 2;
          
          // Return a path from current position to phone
          // Use getBoundingClientRect to get current position instead of style
          const elRect = el.getBoundingClientRect();
          const currentX = elRect.left - particleContainerRect.left + (elRect.width / 2);
          
          return [phoneCenterX, currentX];
        },
        translateY: (el: HTMLElement) => {
          const phone = phoneRef.current;
          if (!phone) return 0;
          
          // Get phone position
          const phoneRect = phone.getBoundingClientRect();
          const particleContainerRect = particleContainer.getBoundingClientRect();
          
          // Calculate phone center position relative to particle container
          const phoneCenterY = (phoneRect.top - particleContainerRect.top) + phoneRect.height / 2;
          
          // Return a path from current position to phone
          // Use getBoundingClientRect to get current position instead of style
          const elRect = el.getBoundingClientRect();
          const currentY = elRect.top - particleContainerRect.top + (elRect.height / 2);
          
          return [phoneCenterY, currentY];
        },
        delay: anime.stagger(100),
        duration: 3000,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine'
      });
  }, []);
  
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Particle effect */}
      <ParticleContainer 
        id="hero-particles" 
        className="absolute inset-0 z-0" 
        count={50}
        minOpacity={0.2}
        maxOpacity={0.6}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center">
        <div className="text-center mb-12">
          <AnimatedText
            text="HEIMDALL"
            className="text-6xl md:text-8xl font-bold text-white mb-4"
            animation="security"
            duration={1200}
          />
          
          <AnimatedText
            text="Secure Access Through Blockchain"
            className="text-xl md:text-2xl text-white/90 mb-8"
            animation="slideUp"
            delay={800}
          />
          
          <AnimatedText
            text="Unlock doors with your Solana wallet. No keys, no cards, just your crypto identity."
            className="max-w-2xl mx-auto text-white/80"
            animation="fadeIn"
            delay={1200}
          />
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-8">
          {/* 3D Door */}
          <AnimatedDoor 
            className="w-56 h-80 shadow-xl"
          />
          
          {/* Phone with QR */}
          <div 
            ref={phoneRef}
            className="relative bg-gray-900 w-64 h-96 rounded-3xl p-3 shadow-xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-6 bg-black rounded-t-3xl flex justify-center items-center">
              <div className="w-20 h-1.5 bg-gray-700 rounded-full"></div>
            </div>
            <div className="bg-white h-full w-full rounded-2xl flex flex-col items-center justify-center p-4">
              <div className="text-center mb-4">
                <p className="text-primary font-bold text-lg">Heimdall Access</p>
                <p className="text-gray-600 text-sm">Scan QR to authenticate</p>
              </div>
              
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <div className="w-40 h-40 bg-black p-3 rounded">
                  <div className="w-full h-full bg-white p-1">
                    <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-0.5">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div 
                          key={i} 
                          className={`${Math.random() > 0.6 ? 'bg-black' : 'bg-white'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <Button variant="glow" size="lg" className="mt-4">
                Sign Message
              </Button>
            </div>
          </div>
        </div>
        
        {/* Animated authentication flow particles */}
        <div 
          ref={particleRef}
          className="absolute inset-0 pointer-events-none z-0"
        ></div>
        
        <div className="mt-16">
          <Button size="xl" className="bg-white text-primary hover:bg-white/90">
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <p className="text-white/70 mb-2 text-sm">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
}