import type React from 'react'

interface SectionTitleProps {
  title: string
  subtitle?: React.ReactNode
  centered?: boolean
  light?: boolean
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`max-w-4xl ${centered ? 'mx-auto text-center' : ''} mb-16`}>
      <h2
        className={`text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight ${light ? 'text-white' : ''}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-xl md:text-2xl leading-relaxed ${centered ? 'mx-auto max-w-3xl' : ''} ${light ? 'text-white/90' : 'text-muted-foreground'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
