import React, { useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';

interface AnimatedDoorProps {
  className?: string;
  onDoorOpen?: () => void;
  isLocked?: boolean;
  style?: React.CSSProperties;
}

export function AnimatedDoor({
  className = '',
  onDoorOpen,
  isLocked = true,
  style,
}: AnimatedDoorProps) {
  const doorRef = useRef<SVGSVGElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hasQrScanned, setHasQrScanned] = useState(false);
  
  const handleDoorClick = () => {
    if (isLocked && !hasQrScanned) return;
    
    const doorElement = doorRef.current;
    if (!doorElement) return;
    
    if (!isOpen) {
      // Animate door opening
      animate(doorElement.querySelector('#door'), {
        translateX: '70%',
        rotateY: '-30deg',
        duration: 1000,
        easing: 'easeOutQuad',
        complete: () => {
          setIsOpen(true);
          if (onDoorOpen) onDoorOpen();
        }
      });
    } else {
      // Animate door closing
      animate(doorElement.querySelector('#door'), {
        translateX: '0%',
        rotateY: '0deg',
        duration: 1000,
        easing: 'easeOutQuad',
        complete: () => setIsOpen(false)
      });
    }
  };
  
  const handleQrClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLocked) {
      setHasQrScanned(true);
      
      // Animate QR code scan effect
      animate(doorRef.current?.querySelector('#qr-code'), {
        opacity: [1, 0.5, 1],
        scale: [1, 1.2, 1],
        duration: 800,
        easing: 'easeInOutQuad'
      });
      
      // Animate lock unlocking
      animate(doorRef.current?.querySelector('#lock'), {
        fill: ['#FF5555', '#55FF55'],
        scale: [1, 1.2, 1],
        duration: 800,
        easing: 'easeInOutQuad'
      });
    }
  };
  
  return (
    <svg
      ref={doorRef}
      viewBox="0 0 200 300"
      className={`cursor-pointer ${className}`}
      onClick={handleDoorClick}
      style={style}
    >
      {/* Door frame */}
      <rect x="10" y="10" width="180" height="280" rx="2" fill="#8B4513" />
      <rect x="20" y="20" width="160" height="260" rx="2" fill="#A0522D" />
      
      {/* Door */}
      <g id="door" style={{ transformOrigin: '20px 150px' }}>
        <rect x="30" y="30" width="140" height="240" rx="2" fill="#D2691E" />
        <rect x="40" y="40" width="120" height="220" rx="2" fill="#CD853F" />
        
        {/* Door handle */}
        <circle id="lock" cx="150" cy="150" r="8" fill={hasQrScanned ? "#55FF55" : "#FF5555"} />
        <rect x="155" y="150" width="10" height="4" fill="#C0C0C0" transform="rotate(90, 150, 150)" />
        
        {/* QR code */}
        <g id="qr-code" onClick={handleQrClick}>
          <rect x="80" y="100" width="40" height="40" fill="white" />
          <rect x="85" y="105" width="30" height="30" fill="black" />
          <rect x="90" y="110" width="20" height="20" fill="white" />
          <rect x="95" y="115" width="10" height="10" fill="black" />
          {isLocked && !hasQrScanned && (
            <rect className="qr-scan" x="80" y="100" width="40" height="40" fill="transparent" />
          )}
        </g>
      </g>
    </svg>
  );
}