"use client"

import { useEffect, useState } from "react"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center animate-fade-in">
      <div className="flex flex-col items-center gap-6">
        {/* Spinning gear/saw blade icon */}
        <div className="relative w-20 h-20">
          <svg
            className="w-full h-full animate-spin-slow"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="40" stroke="#9B7E51" strokeWidth="2" />
            {/* Gear teeth */}
            {[...Array(12)].map((_, i) => {
              const angle = (i / 12) * Math.PI * 2
              const x1 = 50 + Math.cos(angle) * 38
              const y1 = 50 + Math.sin(angle) * 38
              const x2 = 50 + Math.cos(angle) * 48
              const y2 = 50 + Math.sin(angle) * 48
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#9B7E51" strokeWidth="3" />
            })}
            {/* Center circle */}
            <circle cx="50" cy="50" r="12" fill="#9B7E51" />
          </svg>
        </div>

        {/* Loading text */}
        <div className="text-center">
          <p className="text-primary font-semibold animate-pulse">Powering Up Heavy Duty...</p>
        </div>
      </div>
    </div>
  )
}
