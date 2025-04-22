import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

// Hook for creating a staggered text animation
export function useTextAnimation(
  selector: string,
  options = {
    duration: 800,
    delay: (el: any, i: number) => 50 * i,
    easing: 'easeOutExpo',
  }
) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    // Split text into spans
    elements.forEach((el) => {
      if (el instanceof HTMLElement) {
        const text = el.textContent;
        el.textContent = '';
        if (text) {
          text.split('').forEach((char) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char; // Use non-breaking space for spaces
            span.style.display = 'inline-block';
            span.style.opacity = '0';
            el.appendChild(span);
          });
        }
      }
    });

    // Animate each character - use a simple chain of animations instead of timeline
    animate(`${selector} span`, {
      opacity: [0, 1],
      translateY: [20, 0],
      translateX: [0, 0],
      translateZ: 0,
      rotateZ: [20, 0],
      duration: options.duration,
      delay: options.delay,
      easing: options.easing,
    });
  }, [selector, options]);
}

// Hook for scroll-triggered animations
export function useScrollAnimation(
  selector: string,
  animation: object,
  threshold = 0.2
) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target, {
              ...animation,
              easing: 'easeOutExpo',
              duration: 800,
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selector, animation, threshold]);
}

// Hook for creating a floating particle effect
export function useParticleEffect(containerId: string, particleCount = 20) {
  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Clear existing particles
    container.innerHTML = '';

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      container.appendChild(particle);

      // Set initial random position - using Math.random instead of anime.random
      const randomX = Math.random() * container.offsetWidth;
      const randomY = Math.random() * container.offsetHeight;
      const randomScale = 0.2 + Math.random() * 0.8; // 0.2 to 1
      const randomOpacity = 0.2 + Math.random() * 0.6; // 0.2 to 0.8
      
      particle.style.transform = `translate(${randomX}px, ${randomY}px)`;
      particle.style.scale = randomScale.toString();
      particle.style.opacity = randomOpacity.toString();

      // Animate each particle
      animate(particle, {
        translateX: () => Math.random() * container.offsetWidth,
        translateY: () => Math.random() * container.offsetHeight,
        scale: () => 0.2 + Math.random() * 0.8,
        opacity: () => 0.2 + Math.random() * 0.6,
        duration: () => 3000 + Math.random() * 5000, // 3000 to 8000
        easing: 'easeInOutQuad',
        loop: true,
        direction: 'alternate',
      });
    }
  }, [containerId, particleCount]);
}

// Hook for parallax effect
export function useParallaxEffect(speed = 0.5) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offset = scrollPosition * speed;
      element.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
}

// Hook for morphing SVG paths
export function useSvgMorph(
  selector: string,
  paths: string[],
  duration = 1000,
  loop = true
) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    elements.forEach((el) => {
      if (el instanceof SVGPathElement) {
        animate(el, {
          d: paths,
          easing: 'easeInOutQuad',
          duration: duration,
          loop: loop,
          direction: 'alternate',
        });
      }
    });
  }, [selector, paths, duration, loop]);
}

// Hook for cursor-following animation
export function useCursorFollow(speed = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    const updatePosition = () => {
      const distX = mouseX - currentX;
      const distY = mouseY - currentY;
      
      currentX += distX * speed;
      currentY += distY * speed;
      
      element.style.transform = `translate(${currentX}px, ${currentY}px)`;
      requestAnimationFrame(updatePosition);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    updatePosition();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [speed]);
  
  return ref;
}