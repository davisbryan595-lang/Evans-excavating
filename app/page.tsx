"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"
import { AnimatedCounter } from "@/components/animated-counter"
import { ServiceCard } from "@/components/service-card"
import { ContactForm } from "@/components/contact-form"
import { ServiceDetailModal } from "@/components/service-detail-modal"
import { ChevronLeft, ChevronRight, Zap, Shield, Users, DollarSign, Phone, X, Check, MapPin, Mail, Clock } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)

  const services = [
    {
      icon: <Zap size={24} />,
      title: "Quick & Efficient Tree Removal",
      description:
        "Safe and rapid tree removal services using state-of-the-art equipment and experienced professionals.",
      image: "https://images.pexels.com/photos/6218318/pexels-photo-6218318.jpeg",
      fullDescription:
        "Our professional tree removal service uses the latest equipment and proven techniques to safely remove trees of any size. Whether you need to remove a single tree or clear an entire lot, we handle every project with precision and care. We work with residential and commercial properties, and our crew is trained to handle complex removals around structures and utilities.",
      benefits: [
        "Same-day service available",
        "Fully insured and licensed",
        "Professional waste disposal",
        "Tree preservation consultation available",
        "Free estimates on all projects",
        "Emergency storm damage response",
      ],
      features: [
        "Professional arborists on staff",
        "State-of-the-art equipment",
        "Debris removal and cleanup included",
        "Stump grinding available",
        "Environmentally responsible practices",
        "Certified safe around utilities",
      ],
    },
    {
      icon: <Shield size={24} />,
      title: "Safe Around Houses & Power Lines",
      description: "Precision work around your property with safety protocols for homes and electrical infrastructure.",
      image: "https://images.pexels.com/photos/13790935/pexels-photo-13790935.jpeg",
      fullDescription:
        "Working around structures and power lines requires expertise and precision. Our crew is specially trained in advanced rigging techniques and safety procedures to protect your property, your family, and critical infrastructure. We coordinate with utility companies when necessary and use specialized equipment designed for precision removal in tight spaces.",
      benefits: [
        "GPS-guided equipment",
        "Live power line coordination",
        "Property protection planning",
        "Insurance claim assistance",
        "Certified for utility work",
        "Specialized rigging equipment",
      ],
      features: [
        "Advanced rigging systems",
        "Precision cutting techniques",
        "Property damage prevention",
        "Insurance documentation",
        "Utility company coordination",
        "Emergency response capabilities",
      ],
    },
    {
      icon: <Users size={24} />,
      title: "Reliable Professional Crew",
      description: "Fully licensed and insured team with 15+ years of combined excavating experience.",
      image: "https://images.pexels.com/photos/8961068/pexels-photo-8961068.jpeg",
      fullDescription:
        "Our team consists of certified professionals with extensive experience in tree removal and excavation. Every crew member undergoes regular safety training and maintains industry certifications. We pride ourselves on professionalism, punctuality, and delivering exceptional customer service on every project.",
      benefits: [
        "15+ years combined experience",
        "Certified professionals",
        "Background checked staff",
        "Exceptional customer reviews",
        "Continuous training program",
        "Professional liability insurance",
      ],
      features: [
        "Certified arborists",
        "OSHA-trained crew members",
        "Background-verified staff",
        "Professional uniforms and vehicles",
        "Real-time project updates",
        "Dedicated customer service",
      ],
    },
    {
      icon: <DollarSign size={24} />,
      title: "Affordable Rates",
      description: "Competitive pricing without compromising on quality or safety standards.",
      image: "https://images.pexels.com/photos/33321431/pexels-photo-33321431.jpeg",
      fullDescription:
        "We believe in transparent pricing and fair rates for all our services. We provide free on-site estimates with no hidden charges or surprise fees. Our pricing is competitive while maintaining the highest standards of safety and quality.",
      benefits: [
        "Free estimates",
        "Competitive pricing",
        "Flexible payment options",
        "Satisfaction guarantee",
        "Transparent billing",
        "Price matching available",
      ],
      features: [
        "No hidden charges",
        "Detailed written estimates",
        "Payment plans available",
        "Senior and military discounts",
        "Early booking discounts",
        "Seasonal specials",
      ],
    },
  ]

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/188679/pexels-photo-188679.jpeg",
      alt: "Excavator and truck in operation",
      category: "Equipment",
      title: "Heavy Equipment Operations",
    },
    {
      src: "https://images.pexels.com/photos/6218318/pexels-photo-6218318.jpeg",
      alt: "Professional arborist cutting tree with chainsaw",
      category: "Services",
      title: "Expert Tree Cutting",
    },
    {
      src: "https://images.pexels.com/photos/10349589/pexels-photo-10349589.jpeg",
      alt: "Professional construction team workers",
      category: "Team",
      title: "Skilled Professional Team",
    },
    {
      src: "https://images.pexels.com/photos/33321431/pexels-photo-33321431.jpeg",
      alt: "Wheel loader moving materials",
      category: "Equipment",
      title: "Advanced Machinery",
    },
    {
      src: "https://images.pexels.com/photos/27001161/pexels-photo-27001161.jpeg",
      alt: "Workers clearing construction debris",
      category: "Services",
      title: "Site Clearance & Cleanup",
    },
    {
      src: "https://images.pexels.com/photos/8961068/pexels-photo-8961068.jpeg",
      alt: "Construction workers in safety gear",
      category: "Team",
      title: "Safety-Focused Professionals",
    },
    {
      src: "https://images.pexels.com/photos/1188554/pexels-photo-1188554.jpeg",
      alt: "Aerial view of construction site",
      category: "Projects",
      title: "Large Scale Projects",
    },
    {
      src: "https://images.pexels.com/photos/6474294/pexels-photo-6474294.jpeg",
      alt: "Construction worker at site",
      category: "Services",
      title: "Professional Expertise",
    },
  ]

  const pricingPlans = [
    {
      name: "Small Tree Removal",
      price: "$299",
      description: "Up to 30ft trees",
      features: [
        "Single tree removal",
        "Basic debris removal",
        "Same-day service",
        "Free consultation",
      ],
      highlighted: false,
    },
    {
      name: "Standard Package",
      price: "$599",
      description: "Up to 60ft trees",
      features: [
        "1-3 tree removal",
        "Complete debris cleanup",
        "Stump grinding included",
        "Site restoration",
        "24/7 emergency support",
      ],
      highlighted: true,
    },
    {
      name: "Premium Service",
      price: "$999",
      description: "Large scale projects",
      features: [
        "Multiple tree removal",
        "Full land clearing",
        "Professional disposal",
        "Complete site restoration",
        "Dedicated project manager",
        "Insurance coordination",
      ],
      highlighted: false,
    },
    {
      name: "Emergency Response",
      price: "Call",
      description: "24/7 storm cleanup",
      features: [
        "Rapid response",
        "Storm damage cleanup",
        "Insurance claim help",
        "24/7 availability",
        "Priority scheduling",
      ],
      highlighted: false,
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

  const openServiceModal = (service: (typeof services)[0]) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <Preloader />
      <Navbar />

      {/* Hero Section with HD Image Background */}
      <section id="home" className="relative w-full h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background HD Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.pexels.com/photos/188679/pexels-photo-188679.jpeg"
            alt="Professional excavating equipment at work"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/70" />

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
              className="px-8 py-3 rounded-lg bg-background/50 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-primary/50 hover:scale-105"
            >
              View Services
            </a>
            <a
              href="tel:863-993-5018"
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg shadow-primary/50 hover:shadow-lg hover:scale-105"
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
                <ServiceCard {...service} onClick={() => openServiceModal(service)} />
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Carousel */}
          <div className="lg:hidden">
            <div className="relative mb-8">
              <div className="overflow-hidden rounded-xl">
                <ServiceCard {...services[carouselIndex]} onClick={() => openServiceModal(services[carouselIndex])} />
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

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Project <span className="text-primary">Gallery</span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              See our professional work in action - quality equipment, skilled team, and exceptional results
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image.src)}
                className="group relative h-72 rounded-lg overflow-hidden cursor-pointer border border-border hover:border-primary transition-all duration-300 animate-fade-in hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
                style={{ animationDelay: `${(index % 4) * 0.1}s` }}
              >
                {/* Image */}
                <Image
                  src={image.src}
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
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center animate-pulse">
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
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full h-[70vh] rounded-lg overflow-hidden">
            <Image src={selectedImage} alt="Gallery image" fill className="object-contain" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-all duration-300 hover:scale-110"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Transparent <span className="text-primary">Pricing</span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Competitive rates with no hidden fees. Get started with a free consultation
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-xl p-8 border transition-all duration-300 animate-fade-in hover:scale-105 hover:shadow-xl ${
                  plan.highlighted
                    ? "border-primary bg-primary/5 shadow-lg shadow-primary/30 lg:scale-105"
                    : "border-border bg-card hover:border-primary"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Highlight Badge */}
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-foreground/60 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-primary">{plan.price}</div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-foreground/80 animate-slide-up"
                      style={{ animationDelay: `${index * 0.1 + featureIndex * 0.05}s` }}
                    >
                      <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="tel:863-993-5018"
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50"
                      : "bg-background border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {plan.price === "Call" ? "Call for Quote" : "Get Started"}
                </a>
              </div>
            ))}
          </div>

          {/* Pricing Note */}
          <div className="max-w-3xl mx-auto bg-primary/10 border border-primary/30 rounded-lg p-6 text-center animate-fade-in">
            <p className="text-foreground/80">
              <span className="font-semibold text-primary">Free Consultation:</span> All prices are estimates. We provide
              free on-site assessments to give you an accurate quote based on your specific needs.
            </p>
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
            href="tel:863-993-5018"
            className="inline-block px-10 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-bold shadow-lg shadow-primary/50 hover:shadow-lg hover:scale-105"
          >
            Call Now: 863-993-5018
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Have questions or ready to schedule your service? Contact us today. We're here to help!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">Call Us</h3>
                    <p className="text-foreground/70 mb-1">Main Line</p>
                    <a href="tel:863-993-5018" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                      (863) 993-5018
                    </a>
                    <p className="text-foreground/70 text-sm mt-2">Available 24/7 for emergencies</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">Email Us</h3>
                    <a href="mailto:Evansexcavatingservices@yahoo.com" className="text-primary hover:text-primary/80 transition-colors break-all">
                      Evansexcavatingservices@yahoo.com
                    </a>
                    <p className="text-foreground/70 text-sm mt-2">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">Location</h3>
                    <p className="text-foreground/70">
                      Arcadia, FL 34266
                      <br />
                      <span className="text-sm">Serving all of Central Florida</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">Hours</h3>
                    <div className="text-foreground/70 text-sm space-y-1">
                      <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 5:00 PM</p>
                      <p>Sunday: 24/7 Emergency Service</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-primary/5 border border-primary/30 rounded-xl p-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <p className="text-foreground/70">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2000+</div>
                <p className="text-foreground/70">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-foreground/70">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
