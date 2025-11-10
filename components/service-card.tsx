"use client"

import type { ReactNode } from "react"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  href?: string
  image?: string
  onClick?: () => void
}

export function ServiceCard({ icon, title, description, href = "/contact", image, onClick }: ServiceCardProps) {
  return (
    <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur hover:border-primary transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 animate-fade-in">
      {/* Background image if provided */}
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      {/* Content */}
      <div className="relative p-8 h-full flex flex-col justify-between">
        {/* Icon */}
        <div className="mb-4 text-primary w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 group-hover:animate-glow">
          {icon}
        </div>

        {/* Text */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-foreground/70 text-sm leading-relaxed mb-6">{description}</p>
        </div>

        {/* Button */}
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-primary hover:text-primary font-semibold group-hover:gap-3 transition-all duration-300"
        >
          Learn More
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
