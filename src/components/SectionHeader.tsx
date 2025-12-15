interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({ title, subtitle, align = 'center', className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-12 lg:mb-16 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="mb-4">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
