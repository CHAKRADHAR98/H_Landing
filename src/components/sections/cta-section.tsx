import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { AnimatedText } from '@/components/ui/animated-text';
import { Button } from '@/components/ui/button';
import { ParticleContainer } from '@/components/ui/particle-container';

export function CTASection() {
  const formRef = useRef<HTMLFormElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          anime({
            targets: formRef.current,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
            easing: 'easeOutExpo',
          });
          
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (formRef.current) {
      observer.observe(formRef.current);
    }
    
    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);
  
  return (
    <section id="cta" className="relative py-24">
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      <ParticleContainer 
        id="cta-particles" 
        className="absolute inset-0 z-0" 
        count={30}
      />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <AnimatedText
            text="Ready to Transform Access Control?"
            className="text-4xl md:text-5xl font-bold mb-6"
            animation="slideUp"
          />
          
          <AnimatedText
            text="Join the Heimdall revolution and experience the future of secure, blockchain-powered access management."
            className="text-xl mb-10"
            animation="fadeIn"
            delay={400}
          />
          
          <form 
            ref={formRef} 
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-xl opacity-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Request Early Access</h3>
              <p className="text-white/80">Be among the first to implement Heimdall in your organization.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-1">
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="organization" className="block text-sm font-medium text-white/90 mb-1">
                Organization
              </label>
              <input 
                type="text" 
                id="organization" 
                className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Company Name"
              />
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-1">
                How would you use Heimdall?
              </label>
              <textarea 
                id="message" 
                rows={3}
                className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Tell us about your access control needs..."
              ></textarea>
            </div>
            
            <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90">
              Submit Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}