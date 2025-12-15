import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export function Card({ children, className = '', hover = false, padding = 'md' }: CardProps) {
  const paddingSizes = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`
        bg-white rounded-xl border border-gray-200 shadow-lg
        ${hover ? 'transition-all duration-300 hover:shadow-xl hover:border-[#c6952f]/20 hover:-translate-y-1' : ''}
        ${paddingSizes[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
