"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
  end: number
  label: string
  duration?: number
  suffix?: string
}

export function AnimatedCounter({ end, label, duration = 2, suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let current = 0
          const increment = end / (duration * 60)

          const timer = setInterval(() => {
            current += increment
            if (current >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, 1000 / 60)

          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [end, duration])

  return (
    <div
      ref={elementRef}
      className="text-center p-6 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-primary transition-colors duration-300 animate-fade-in"
    >
      <div className="text-4xl font-bold text-primary mb-2 animate-glow">
        {count}
        {suffix}
      </div>
      <p className="text-foreground/70 text-sm">{label}</p>
    </div>
  )
}
