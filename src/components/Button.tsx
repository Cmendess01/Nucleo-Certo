'use client'

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-[#c6952f] focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-[#c6952f] text-white hover:bg-[#9f7625] shadow-md hover:shadow-lg',
    secondary: 'border-2 border-[#c6952f] text-[#c6952f] hover:bg-[#c6952f] hover:text-white',
    ghost: 'text-[#4a5568] hover:text-[#c6952f] hover:bg-[#f4f6f8]',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
