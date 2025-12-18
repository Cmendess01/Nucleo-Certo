'use client'

import { useRef, useEffect, ReactNode } from 'react';

interface DraggableCarouselProps {
  children: ReactNode;
  autoScroll?: boolean;
  speed?: number;
}

export function DraggableCarousel({ 
  children, 
  autoScroll = true, 
  speed = 1 
}: DraggableCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoScroll || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    let animationId: number;
    
    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += speed;
        
        // Reset quando chegar no final
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [autoScroll, speed]);

  return (
    <div 
      ref={scrollRef}
      className="relative overflow-hidden"
      style={{ 
        scrollBehavior: 'auto',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      {children}
    </div>
  );
}