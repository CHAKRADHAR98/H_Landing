import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  floatOnHover?: boolean;
  tiltOnHover?: boolean;
  tiltMax?: number;
  riseAmount?: number;
  glowColor?: string;
  shadowColor?: string;
}

export function AnimatedCard({
  children,
  className = '',
  glowOnHover = true,
  floatOnHover = true,
  tiltOnHover = true,
  tiltMax = 10,
  riseAmount = 10,
  glowColor = 'rgba(38, 208, 206, 0.5)',
  shadowColor = 'rgba(0, 0, 0, 0.2)',
}: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltOnHover || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    
    // Calculate percentage distance from center (-1 to 1)
    const percentX = (e.clientX - cardCenterX) / (rect.width / 2);
    const percentY = (e.clientY - cardCenterY) / (rect.height / 2);
    
    // Calculate tilt angle
    const tiltX = percentY * -tiltMax; // Inverse Y for natural tilt
    const tiltY = percentX * tiltMax;
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) ${
        isHovering && floatOnHover ? `translateY(-${riseAmount}px)` : ''
      }`,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    
    if (floatOnHover && !tiltOnHover) {
      setTiltStyle({
        transform: `translateY(-${riseAmount}px)`,
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTiltStyle({});
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        'transition-all duration-300 ease-out bg-white dark:bg-gray-800 rounded-lg overflow-hidden',
        className,
        {
          'shadow-lg': !isHovering,
          [`shadow-xl ${
            glowOnHover ? `shadow-${glowColor}` : `shadow-${shadowColor}`
          }`]: isHovering,
        }
      )}
      style={tiltStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}