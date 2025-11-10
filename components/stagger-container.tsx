"use client"

import type { ReactNode } from "react"

interface StaggerContainerProps {
  children: ReactNode
  className?: string
}

export function StaggerContainer({ children, className = "" }: StaggerContainerProps) {
  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridAutoFlow: "row",
      }}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              style={{
                animation: `slide-up 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}
