import { motion } from 'motion/react'
import type { ReactNode } from 'react'

interface HoverCardProps {
  children: ReactNode
  className?: string
  scale?: number
}

export function HoverCard({ children, className = '', scale = 1.03 }: HoverCardProps) {
  return (
    <motion.div
      whileHover={{
        scale,
        y: -5,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
