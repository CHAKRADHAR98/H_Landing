import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { AnimatedText } from '@/components/ui/animated-text';
import { Button } from '@/components/ui/button';
import { ParticleContainer } from '@/components/ui/particle-container';

export function CTASection() {
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const ctaElement = ctaRef.current;
          if (!ctaElement) return;
          
          // Animate CTA elements
          const ctaItems = ctaElement.querySelectorAll('.cta-item');
          
          animate(ctaItems, {
            opacity: [0, 1],
            translateY: [20, 0],
            delay: stagger(150),
            easing: 'easeOutExpo',
          });
        }
      },
      { threshold: 0.2 }
    );
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
      <ParticleContainer 
        id="cta-particles"
        className="absolute inset-0"
        count={50}
        colors={['#FFFFFF', '#26D0CE', '#FF8C42']}
        minOpacity={0.1}
        maxOpacity={0.3}
        minSize={2}
        maxSize={6}
        speed={8000}
      />
      
      <div className="container mx-auto px-4 relative z-10" ref={ctaRef}>
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText
            text="Ready to Revolutionize Your Access Control?"
            className="text-4xl md:text-5xl font-bold mb-6 text-white cta-item"
            animation="slideUp"
          />
          
          <div className="cta-item opacity-0">
            <p className="text-xl mb-8 text-white/90">
              Join the growing number of businesses and organizations securing their spaces with Heimdall's blockchain-powered access control system.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 cta-item opacity-0">
            <Button variant="glow" size="xl" className="font-semibold">
              Get Started Today
            </Button>
            
            <Button variant="outline" size="xl" className="font-semibold bg-white/10 text-white border-white/20 hover:bg-white/20">
              Schedule a Demo
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 cta-item opacity-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Quick Setup</h3>
              <p className="text-white/80">Get up and running in less than a day with our streamlined installation process.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Guaranteed Security</h3>
              <p className="text-white/80">Our blockchain-based system provides unmatched security with immutable access records.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">24/7 Support</h3>
              <p className="text-white/80">Our dedicated team is always available to help with any questions or issues.</p>
            </div>
          </div>
          
          <div className="mt-16 text-sm text-white/60 cta-item opacity-0">
            <p>Already trusted by companies like SpaceX, Tesla, and Google for their access control needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}