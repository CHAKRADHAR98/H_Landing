import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { AnimatedText } from '@/components/ui/animated-text';
import { AnimatedCard } from '@/components/ui/animated-card';
import Image from 'next/image';

export function UseCasesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const section = sectionRef.current;
          if (!section) return;
          
          // Animate use case items
          const useCaseItems = section.querySelectorAll('.use-case-item');
          
          animate(useCaseItems, {
            opacity: [0, 1],
            translateY: [30, 0],
            delay: stagger(150),
            easing: 'easeOutExpo',
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
  
  const useCases = [
    {
      title: "Corporate Offices",
      description: "Secure building access for employees and visitors while maintaining detailed audit logs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Residential Buildings",
      description: "Eliminate key management issues for apartment complexes and gated communities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: "Data Centers",
      description: "Enhance security with immutable access logs for regulatory compliance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      title: "Healthcare Facilities",
      description: "Control access to restricted areas while maintaining HIPAA compliance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Educational Institutions",
      description: "Secure campus buildings with customizable access for students, faculty, and staff.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
    },
    {
      title: "Hospitality & Events",
      description: "Provide seamless access for guests with time-limited digital credentials.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      ),
    },
  ];
  
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="text-center mb-16">
          <AnimatedText
            text="Use Cases"
            className="text-4xl md:text-5xl font-bold mb-4 text-primary"
            animation="slideUp"
          />
          <AnimatedText
            text="Heimdall works anywhere security matters"
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            animation="fadeIn"
            delay={400}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="use-case-item opacity-0">
              <AnimatedCard className="h-full p-6 flex flex-col">
                <div className="bg-primary/10 rounded-lg p-4 inline-block text-primary mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{useCase.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{useCase.description}</p>
                <button className="text-primary font-semibold mt-auto flex items-center hover:underline">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </AnimatedCard>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <AnimatedCard className="p-8 bg-gradient-to-r from-primary to-secondary text-white rounded-xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold mb-4">Ready for Any Access Control Challenge</h3>
                <p className="mb-6">
                  Heimdall's flexible architecture makes it adaptable to any environment where secure access control is needed. Our system scales from single doors to enterprise-wide deployments.
                </p>
                <div className="flex space-x-2">
                  <span className="bg-white/20 rounded-full px-3 py-1 text-sm">Enterprise</span>
                  <span className="bg-white/20 rounded-full px-3 py-1 text-sm">Residential</span>
                  <span className="bg-white/20 rounded-full px-3 py-1 text-sm">Government</span>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl">
                  {/* Placeholder for an image - in a real app, use next/image */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-8 h-8">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}