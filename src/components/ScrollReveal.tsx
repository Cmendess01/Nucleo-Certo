import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeIn' | 'slideInLeft' | 'slideInRight';
  delay?: number;
  className?: string;
}

export function ScrollReveal({ 
  children, 
  animation = 'fadeInUp',
  delay = 0,
  className = '' 
}: ScrollRevealProps) {
  const { elementRef, isVisible } = useScrollAnimation();

  const animationClass = animation === 'fadeInUp' ? 'scroll-animate' :
                        animation === 'fadeIn' ? 'scroll-animate-fade' :
                        animation === 'slideInLeft' ? 'scroll-animate-left' :
                        'scroll-animate-right';

  const delayClass = delay > 0 ? `delay-${delay}` : '';

  return (
    <div
      ref={elementRef}
      className={`${animationClass} ${isVisible ? 'visible' : ''} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
