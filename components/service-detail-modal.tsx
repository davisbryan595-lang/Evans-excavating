"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Check } from "lucide-react"
import Image from "next/image"

interface ServiceDetailModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  service: {
    title: string
    description: string
    image: string
    fullDescription: string
    benefits: string[]
    features?: string[]
    icon: React.ReactNode
  } | null
}

export function ServiceDetailModal({ isOpen, onOpenChange, service }: ServiceDetailModalProps) {
  if (!service) return null

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Service Image */}
        <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6 -mx-6 -mt-6">
          <Image src={service.image} alt={service.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Header */}
        <DialogHeader className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
              {service.icon}
            </div>
            <div className="flex-1">
              <DialogTitle className="text-3xl">{service.title}</DialogTitle>
              <DialogDescription className="text-base mt-2">{service.description}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Content */}
        <div className="space-y-6 mt-6">
          {/* Full Description */}
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-semibold text-foreground mb-3 text-lg">About This Service</h3>
            <p className="text-foreground/70 leading-relaxed">{service.fullDescription}</p>
          </div>

          {/* Benefits */}
          {service.benefits && service.benefits.length > 0 && (
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="font-semibold text-foreground mb-4 text-lg">Key Benefits</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-foreground/80 animate-slide-up"
                    style={{ animationDelay: `${0.25 + index * 0.05}s` }}
                  >
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Features */}
          {service.features && service.features.length > 0 && (
            <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <h3 className="font-semibold text-foreground mb-4 text-lg">What's Included</h3>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-foreground/80 animate-slide-up"
                    style={{ animationDelay: `${0.35 + index * 0.05}s` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col gap-3 mt-8 pt-6 border-t border-border animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="tel:863-993-5018"
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 text-center hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50"
            >
              Call Now: (863) 993-5018
            </a>
            <a
              href="#contact"
              onClick={() => onOpenChange(false)}
              className="w-full py-3 rounded-lg border border-primary text-primary font-semibold transition-all duration-300 text-center hover:bg-primary/10"
            >
              Send us a Message
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
