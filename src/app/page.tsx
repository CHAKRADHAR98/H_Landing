'use client';

import React, { useEffect, useState } from 'react';
import { HeroSection } from '@/components/sections/hero-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { AdminDashboardSection } from '@/components/sections/admin-dashboard-section';
import { UseCasesSection } from '@/components/sections/use-cases-section';
import { CTASection } from '@/components/sections/cta-section';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time for animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-primary flex flex-col items-center justify-center">
        <div className="text-6xl font-bold text-white mb-8">HEIMDALL</div>
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white rounded-full animate-pulse"
            style={{ 
              animation: 'loading 2s ease-in-out infinite',
              width: '100%',
            }}
          ></div>
        </div>
        <style jsx global>{`
          @keyframes loading {
            0% {
              transform: translateX(-100%);
            }
            50% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}</style>
      </div>
    );
  }
  
  return (
    <main>
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <AdminDashboardSection />
      <UseCasesSection />
      <CTASection />
      <Footer />
    </main>
  );
}