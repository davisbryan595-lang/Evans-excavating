"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface AnimatedBannerProps {
  text: string
  icon?: React.ReactNode
}

export function AnimatedBanner({ text, icon }: AnimatedBannerProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`inline-block px-6 py-3 rounded-full bg-primary/10 border border-primary text-primary font-semibold transition-all duration-500 ${
        isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <div className="flex items-center gap-2">
        {icon && icon}
        {text}
      </div>
    </div>
  )
}
