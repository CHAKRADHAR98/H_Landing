'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { animate, stagger } from 'animejs';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial animation for header elements
    animate('.header-item', {
        opacity: [0, 1],
        translateY: [-10, 0],
        delay: stagger(100, {start: 300}),
        easing: 'easeOutQuad',
      });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    
    if (!isMobileMenuOpen) {
      // Animate menu opening
      animate('.mobile-menu-item', {
        opacity: [0, 1],
        translateX: [20, 0],
        delay: stagger(100),
        easing: 'easeOutQuad'
      });
    }
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="header-item flex items-center">
          <span className={`text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>HEIMDALL</span>
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="#how-it-works" 
            className={`header-item ${isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white/90 hover:text-white'} transition-colors`}
          >
            How It Works
          </Link>
          <Link 
            href="#features" 
            className={`header-item ${isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white/90 hover:text-white'} transition-colors`}
          >
            Features
          </Link>
          <Link 
            href="#admin-dashboard" 
            className={`header-item ${isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white/90 hover:text-white'} transition-colors`}
          >
            Admin Panel
          </Link>
          <Link 
            href="#use-cases" 
            className={`header-item ${isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white/90 hover:text-white'} transition-colors`}
          >
            Use Cases
          </Link>
          <Button 
            size="sm" 
            className={`header-item ${isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'} hover:bg-opacity-90`}
            onClick={() => {
              document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Request Demo
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden header-item"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="#how-it-works" 
              className="mobile-menu-item text-gray-800 dark:text-white hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              href="#features" 
              className="mobile-menu-item text-gray-800 dark:text-white hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#admin-dashboard" 
              className="mobile-menu-item text-gray-800 dark:text-white hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Admin Panel
            </Link>
            <Link 
              href="#use-cases" 
              className="mobile-menu-item text-gray-800 dark:text-white hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Use Cases
            </Link>
            <Button 
              size="sm" 
              className="mobile-menu-item bg-primary text-white hover:bg-primary/90 w-full"
              onClick={() => {
                document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
            >
              Request Demo
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}