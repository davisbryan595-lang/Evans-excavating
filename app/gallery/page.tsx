"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { X } from "lucide-react"
import Image from "next/image"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "/tree-removal-equipment.jpg",
      alt: "Professional tree removal equipment",
      category: "Equipment",
      title: "Heavy Duty Excavator",
    },
    {
      src: "/safe-tree-cutting.jpg",
      alt: "Safe tree cutting near house",
      category: "Services",
      title: "Precision Safe Removal",
    },
    {
      src: "/professional-crew.jpg",
      alt: "Professional crew at work",
      category: "Team",
      title: "Expert Team in Action",
    },
    {
      src: "/budget-friendly.jpg",
      alt: "Affordable tree removal services",
      category: "Services",
      title: "Value for Money Service",
    },
    {
      src: "/tree-removal-equipment.jpg",
      alt: "Advanced tree removal equipment",
      category: "Equipment",
      title: "State of the Art Equipment",
    },
    {
      src: "/safe-tree-cutting.jpg",
      alt: "Safe stump removal process",
      category: "Services",
      title: "Complete Stump Removal",
    },
    {
      src: "/professional-crew.jpg",
      alt: "Team preparing for project",
      category: "Team",
      title: "Before Project Briefing",
    },
    {
      src: "/budget-friendly.jpg",
      alt: "Cleaned site after removal",
      category: "Services",
      title: "Site Restoration",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-80 flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background" />
        </div>

        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-2 animate-fade-in">
            Project <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-lg text-foreground/80 animate-slide-up">
            See our work in action - Professional tree removal and excavating projects
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image.src)}
                className="group relative h-64 rounded-lg overflow-hidden cursor-pointer border border-border hover:border-primary transition-all duration-300 animate-fade-in hover:shadow-lg hover:shadow-primary/20"
                style={{ animationDelay: `${(index % 8) * 0.1}s` }}
              >
                {/* Image */}
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="w-full p-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-white/70">{image.category}</p>
                  </div>
                </div>

                {/* Hover Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <span className="text-2xl">+</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full h-[70vh] rounded-lg overflow-hidden">
            <Image src={selectedImage || "/placeholder.svg"} alt="Gallery" fill className="object-contain" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 px-4 bg-primary/5 border-t border-primary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "2000+", label: "Projects Completed" },
              { number: "500+", label: "Trees Removed" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-6">Impressed by Our Work?</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Let us handle your next project with the same professionalism and care.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-bold shadow-lg shadow-primary/50 hover:scale-105"
          >
            Request a Quote Today
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
