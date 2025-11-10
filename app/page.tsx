"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"
import { AnimatedCounter } from "@/components/animated-counter"
import { ServiceCard } from "@/components/service-card"
import { ChevronLeft, ChevronRight, Zap, Shield, Users, DollarSign, Phone } from "lucide-react"

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const services = [
    {
      icon: <Zap size={24} />,
      title: "Quick & Efficient Tree Removal",
      description:
        "Safe and rapid tree removal services using state-of-the-art equipment and experienced professionals.",
      image: "/tree-removal-equipment.jpg",
    },
    {
      icon: <Shield size={24} />,
      title: "Safe Around Houses & Power Lines",
      description: "Precision work around your property with safety protocols for homes and electrical infrastructure.",
      image: "/safe-tree-cutting.jpg",
    },
    {
      icon: <Users size={24} />,
      title: "Reliable Professional Crew",
      description: "Fully licensed and insured team with 15+ years of combined excavating experience.",
      image: "/professional-crew.jpg",
    },
    {
      icon: <DollarSign size={24} />,
      title: "Affordable Rates",
      description: "Competitive pricing without compromising on quality or safety standards.",
      image: "/budget-friendly.jpg",
    },
  ]

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % services.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoPlay, services.length])

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % services.length)
    setAutoPlay(false)
  }

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + services.length) % services.length)
    setAutoPlay(false)
  }

  return (
    <main className="min-h-screen bg-background">
      <Preloader />
      <Navbar />

      {/* Hero Section with Video Background */}
      <section className="relative w-full h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background video placeholder with gradient overlay */}
        <div className="absolute inset-0 w-full h-full">
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"
            style={{
              backgroundImage:
                "url(/placeholder.svg?height=1080&width=1920&query=excavator tree removal in action slow motion)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-background/70" />

          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 animate-pulse-glow" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-in">
            Safe. <span className="text-primary">Fast.</span> Professional
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/80 mb-8 animate-slide-up">
            Tree Removal & Excavating Services for Arcadia, FL & Beyond
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <a
              href="#services"
              className="px-8 py-3 rounded-lg bg-background/50 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-primary/50"
            >
              View Services
            </a>
            <a
              href="tel:863-993-5018"
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg shadow-primary/50 hover:shadow-lg"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="relative py-12 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-y border-primary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AnimatedCounter end={500} label="Trees Removed" suffix="+" />
            <AnimatedCounter end={100} label="Safety Record" suffix="%" />
            <AnimatedCounter end={24} label="Emergency Support" suffix="/7" />
            <AnimatedCounter end={15} label="Years Experience" suffix="+" />
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="relative py-6 px-4 bg-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3">
            <div className="animate-pulse-glow">
              <Phone className="w-6 h-6" />
            </div>
            <span className="font-bold text-lg">24/7 Emergency Storm Cleanup</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-primary-foreground/30" />
          <a href="tel:863-993-5018" className="hover:underline font-semibold">
            Call 863-993-5018
          </a>
        </div>
      </section>

      {/* Services Carousel */}
      <section id="services" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Comprehensive tree removal and excavating solutions tailored to your needs
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} href="/contact" />
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Carousel */}
          <div className="lg:hidden">
            <div className="relative mb-8">
              <div className="overflow-hidden rounded-xl">
                <ServiceCard {...services[carouselIndex]} href="/contact" />
              </div>

              {/* Carousel Controls */}
              <button
                onClick={prevSlide}
                onMouseEnter={() => setAutoPlay(false)}
                onMouseLeave={() => setAutoPlay(true)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 sm:-translate-x-12 z-10 w-10 h-10 rounded-full bg-primary/90 text-primary-foreground hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextSlide}
                onMouseEnter={() => setAutoPlay(false)}
                onMouseLeave={() => setAutoPlay(true)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 sm:translate-x-12 z-10 w-10 h-10 rounded-full bg-primary/90 text-primary-foreground hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCarouselIndex(index)
                    setAutoPlay(false)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === carouselIndex ? "bg-primary w-8" : "bg-primary/30 w-2 hover:bg-primary/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5 border-t border-primary/30">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Contact us today for a free quote. Our team is ready to serve you.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-bold shadow-lg shadow-primary/50 hover:shadow-lg hover:scale-105"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
