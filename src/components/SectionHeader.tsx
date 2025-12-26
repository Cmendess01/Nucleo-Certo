import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, badge, className = '' }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {badge && (
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#C7A25B]/10 mb-4">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#0D1B2A]">{badge}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#0D1B2A] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}