import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { random, getRandomThemeColor } from '@/lib/utils';

interface ParticleProps {
  id: string;
  className?: string;
  count?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  speed?: number;
  minOpacity?: number;
  maxOpacity?: number;
  children?: React.ReactNode;
}

export function ParticleContainer({
  id,
  className = '',
  count = 30,
  colors,
  minSize = 2,
  maxSize = 8,
  speed = 5000,
  minOpacity = 0.2,
  maxOpacity = 0.8,
  children,
}: ParticleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationsRef = useRef<any[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing particles
    const existingParticles = container.getElementsByClassName('particle');
    while (existingParticles.length > 0) {
      existingParticles[0].remove();
    }

    // Create new particles
    const themeColors = colors || [
      '#1A2980', // primary
      '#26D0CE', // secondary
      '#FF8C42', // accent
    ];

    const particles: HTMLDivElement[] = [];
    animationsRef.current = []; // Reset animations array

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle absolute rounded-full pointer-events-none';
      
      // Random size between minSize and maxSize
      const size = random(minSize, maxSize);
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random color from theme colors
      particle.style.backgroundColor = themeColors[Math.floor(Math.random() * themeColors.length)];
      
      // Set initial position
      const posX = random(0, container.offsetWidth);
      const posY = random(0, container.offsetHeight);
      particle.style.transform = `translate(${posX}px, ${posY}px)`;
      
      // Random opacity
      particle.style.opacity = random(minOpacity, maxOpacity).toString();
      
      container.appendChild(particle);
      particles.push(particle);
    }

    // Store container dimensions for animation
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Animate particles
    particles.forEach((particle) => {
      const createAnimation = () => {
        // Safely capture values to use in animation functions
        const width = containerWidth;
        const height = containerHeight;
        const minOp = minOpacity;
        const maxOp = maxOpacity;
        const spd = speed;

        const animation = animate(particle, {
          translateX: () => random(0, width),
          translateY: () => random(0, height),
          opacity: () => random(minOp, maxOp),
          scale: () => random(0.5, 1.5),
          duration: () => random(spd * 0.7, spd * 1.3),
          easing: 'easeInOutQuad',
          complete: createAnimation
        });
        
        // Store animation reference for cleanup
        animationsRef.current.push(animation);
        return animation;
      };
      
      createAnimation();
    });

    return () => {
      // Cleanup animation - alternative to anime.remove
      // Remove the particles from DOM
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
      
      // Clear animations array
      animationsRef.current = [];
    };
  }, [count, colors, minSize, maxSize, speed, minOpacity, maxOpacity]);

  return (
    <div 
      id={id} 
      ref={containerRef} 
      className={`relative overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}