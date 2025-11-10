"use client"

import type { ReactNode } from "react"

interface FloatingElementProps {
  children: ReactNode
  delay?: number
  duration?: number
}

export function FloatingElement({ children, delay = 0, duration = 3 }: FloatingElementProps) {
  return (
    <div
      style={{
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
      className="animate-pulse"
    >
      {children}
    </div>
  )
}
