import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  animation?: 'fadeIn' | 'slideUp' | 'typewriter' | 'security';
  once?: boolean;
}

export function AnimatedText({
  text,
  className = '',
  delay = 0,
  duration = 800,
  staggerDelay = 30,
  animation = 'fadeIn',
  once = true,
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Split text into characters
    container.innerHTML = '';
    
    // Handle different animation types
    if (animation === 'typewriter') {
      // For typewriter, we don't split into spans
      const textEl = document.createElement('span');
      textEl.textContent = text;
      textEl.style.opacity = '0';
      container.appendChild(textEl);
      
      animate(textEl, {
        opacity: 1,
        duration: 0,
        delay: delay
      });
      
      // Create typewriter effect
      let i = 0;
      const typeTimer = setInterval(() => {
        if (i <= text.length) {
          textEl.textContent = text.substring(0, i);
          i++;
        } else {
          clearInterval(typeTimer);
        }
      }, staggerDelay);
      
      return () => clearInterval(typeTimer);
    } else {
      // For other animations, split into spans
      const characters = text.split('');
      
      characters.forEach(char => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char; // Use non-breaking space for spaces
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        
        // For security scan effect, add special styling
        if (animation === 'security') {
          span.style.color = '#26D0CE'; // Start with blue-green
        }
        
        container.appendChild(span);
      });
      
      // Create animation timeline
      const spans = container.querySelectorAll('span');
      
      let animationSettings = {};
      
switch (animation) {
  case 'slideUp':
    animationSettings = {
      translateY: [20, 0],
      opacity: [0, 1],
    };
    break;
  case 'security':
    animationSettings = {
      opacity: [0, 1],
      color: ['#26D0CE', '#FFFFFF'],
      delay: (el: Element, i: number) => delay + (i * staggerDelay),
    };
    break;
  default: // fadeIn
    animationSettings = {
      opacity: [0, 1],
    };
}
      
      // Set up observer for triggering animation
      if (once) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                animate(spans, {
                    ...animationSettings,
                    duration: duration,
                    delay: stagger(staggerDelay, {from: 'first', start: delay}),
                    easing: 'easeOutExpo',
                  });
                
                observer.unobserve(container);
              }
            });
          },
          { threshold: 0.1 }
        );
        
        observer.observe(container);
        
        return () => {
          observer.unobserve(container);
        };
      } else {
        // If not once, just run the animation
        animate(spans, {
            ...animationSettings,
            duration: duration,
            delay: stagger(staggerDelay, { start: delay }),
            easing: 'easeOutExpo'
          });
      }
    }
  }, [text, animation, delay, duration, staggerDelay, once]);

  return (
    <div
      ref={containerRef}
      className={`inline-block ${className}`}
      aria-label={text}
    />
  );
}