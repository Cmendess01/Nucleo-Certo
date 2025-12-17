'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'

interface BlurFadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  amount?: number
  blur?: number
  className?: string
}

export function BlurFadeIn({
  children,
  delay = 0,
  duration = 1.2,
  amount = 0.3,
  blur = 30,
  className = '',
}: BlurFadeInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: `blur(${blur}px)`,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
      }}
      viewport={{ once: true, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
