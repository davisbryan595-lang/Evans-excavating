"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"
import { AnimatedCounter } from "@/components/animated-counter"
import { Zap, Shield, Users, DollarSign, Trash2, AlertCircle } from "lucide-react"
import Image from "next/image"

export default function Services() {
  const [selectedService, setSelectedService] = useState(0)

  const detailedServices = [
    {
      id: "tree-removal",
      icon: <Zap size={32} />,
      title: "Quick & Efficient Tree Removal",
      shortDesc: "Safe and rapid tree removal services using state-of-the-art equipment.",
      fullDesc:
        "Our expert team uses advanced techniques and equipment to safely remove trees of any size. Whether you need to remove a single tree or clear an entire lot, we handle it with precision and care.",
      benefits: [
        "Same-day service available",
        "Fully insured and licensed",
        "Professional waste disposal",
        "Tree preservation consultation available",
      ],
      image: "/tree-removal-equipment.jpg",
    },
    {
      id: "safe-removal",
      icon: <Shield size={32} />,
      title: "Safe Around Houses & Power Lines",
      shortDesc: "Precision work around your property with safety protocols.",
      fullDesc:
        "Working around structures and power lines requires expertise. Our crew is trained in advanced rigging techniques and safety procedures to protect your property and the surrounding infrastructure.",
      benefits: [
        "GPS-guided equipment",
        "Live power line coordination",
        "Property protection planning",
        "Insurance claim assistance",
      ],
      image: "/safe-tree-cutting.jpg",
    },
    {
      id: "crew",
      icon: <Users size={32} />,
      title: "Reliable Professional Crew",
      shortDesc: "Fully licensed and insured team with 15+ years experience.",
      fullDesc:
        "Our crew consists of certified arborists and equipment operators with years of combined experience. We pride ourselves on professionalism, punctuality, and customer satisfaction.",
      benefits: [
        "15+ years combined experience",
        "Certified professionals",
        "Background checked staff",
        "Exceptional customer reviews",
      ],
      image: "/professional-crew.jpg",
    },
    {
      id: "rates",
      icon: <DollarSign size={32} />,
      title: "Affordable Rates",
      shortDesc: "Competitive pricing without compromising quality.",
      fullDesc:
        "We believe in transparent pricing and fair rates. Get a free quote today with no hidden charges or surprise fees.",
      benefits: ["Free estimates", "Competitive pricing", "Flexible payment options", "Satisfaction guarantee"],
      image: "/budget-friendly.jpg",
    },
    {
      id: "stump-grinding",
      icon: <Trash2 size={32} />,
      title: "Stump Grinding & Removal",
      shortDesc: "Complete stump removal below ground level.",
      fullDesc:
        "Don't let tree stumps take up valuable space. Our stump grinding equipment removes stumps completely, allowing you to reclaim your yard.",
      benefits: [
        "Complete stump removal",
        "Mulch available upon request",
        "No regrowth guarantee",
        "Yard restoration included",
      ],
      image: "/tree-removal-equipment.jpg",
    },
    {
      id: "emergency",
      icon: <AlertCircle size={32} />,
      title: "Emergency Storm Cleanup",
      shortDesc: "24/7 rapid response to storm damage.",
      fullDesc:
        "When storms strike, we're ready. Available 24/7 for emergency tree removal, debris cleanup, and damage assessment following severe weather.",
      benefits: ["24/7 availability", "Rapid response time", "Insurance documentation", "Emergency debris removal"],
      image: "/safe-tree-cutting.jpg",
    },
  ]

  const allServices = [
    { icon: <Zap size={24} />, title: "Tree Removal", description: "Professional tree removal services" },
    { icon: <Shield size={24} />, title: "Safe Removal", description: "Around structures and power lines" },
    { icon: <Trash2 size={24} />, title: "Stump Grinding", description: "Complete stump removal" },
    { icon: <AlertCircle size={24} />, title: "Emergency Cleanup", description: "24/7 storm damage response" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-96 flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(/placeholder.svg?height=400&width=1920&query=professional excavator removing trees)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>

        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Expert <span className="text-primary">Excavating & Land</span> Services
          </h1>
          <p className="text-lg text-foreground/80 animate-slide-up">
            Comprehensive solutions for all your tree removal and excavation needs
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-b border-primary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedCounter end={15} label="Years of Experience" suffix="+" />
            <AnimatedCounter end={2000} label="Projects Completed" suffix="+" />
            <AnimatedCounter end={100} label="Customer Satisfaction" suffix="%" />
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Service List */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-foreground mb-6 animate-fade-in">Our Services</h2>
              <div className="space-y-3">
                {detailedServices.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(index)}
                    className={`w-full p-4 rounded-lg text-left transition-all duration-300 animate-fade-in ${
                      selectedService === index
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                        : "bg-card border border-border hover:border-primary"
                    }`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">{service.icon}</div>
                      <div>
                        <p className="font-semibold">{service.title}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Service Details */}
            <div className="lg:col-span-2 animate-fade-in">
              <div className="bg-card border border-border rounded-xl p-8 overflow-hidden">
                {/* Service Image */}
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden border border-primary/30">
                  <Image
                    src={detailedServices[selectedService].image || "/placeholder.svg"}
                    alt={detailedServices[selectedService].title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Service Content */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">{detailedServices[selectedService].icon}</div>
                  <h3 className="text-2xl font-bold text-foreground">{detailedServices[selectedService].title}</h3>
                </div>

                <p className="text-foreground/70 mb-6 leading-relaxed">{detailedServices[selectedService].fullDesc}</p>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="font-semibold text-foreground mb-4">Key Benefits:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {detailedServices[selectedService].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-foreground/70">
                        <span className="text-primary mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href="/contact"
                  className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-primary/50"
                >
                  Request Quote for This Service
                </a>
              </div>
            </div>
          </div>

          {/* All Services Grid */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in">Quick Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allServices.map((service, index) => (
                <ServiceCard key={index} {...service} href="/contact" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5 border-t border-primary/30">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Need a Service Not Listed?</h2>
          <p className="text-foreground/70 mb-8">Contact us for custom solutions tailored to your specific needs</p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-bold shadow-lg shadow-primary/50 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
