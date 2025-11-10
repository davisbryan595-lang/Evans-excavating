"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react"
import Image from "next/image"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "tree-removal",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", service: "tree-removal", message: "" })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "863-993-5018",
      href: "tel:863-993-5018",
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "Evansexcavatingservices@yahoo.com",
      href: "mailto:Evansexcavatingservices@yahoo.com",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Arcadia, FL",
      href: "#",
    },
    {
      icon: <Clock size={24} />,
      label: "Hours",
      value: "Mon-Sat 7AM-6PM | 24/7 Emergency",
      href: "#",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-80 flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(/placeholder.svg?height=320&width=1920&query=professional team ready to help)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>

        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-2 animate-fade-in">
            Get Your <span className="text-primary">Free Quote</span>
          </h1>
          <p className="text-lg text-foreground/80 animate-slide-up">
            Contact us today for professional tree removal and excavating services
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 px-4 -mt-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-3 group-hover:animate-glow">{info.icon}</div>
                <p className="text-foreground/70 text-sm mb-1">{info.label}</p>
                <p className="text-foreground font-semibold text-sm">{info.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-8">Contact Us</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="group">
                  <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:border-primary focus:outline-none transition-colors duration-300 focus:shadow-lg focus:shadow-primary/20"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:border-primary focus:outline-none transition-colors duration-300 focus:shadow-lg focus:shadow-primary/20"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:border-primary focus:outline-none transition-colors duration-300 focus:shadow-lg focus:shadow-primary/20"
                    placeholder="(863) 993-5018"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Service Required</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:border-primary focus:outline-none transition-colors duration-300 focus:shadow-lg focus:shadow-primary/20"
                  >
                    <option value="tree-removal">Tree Removal</option>
                    <option value="stump-grinding">Stump Grinding</option>
                    <option value="land-clearing">Land Clearing</option>
                    <option value="emergency">Emergency Cleanup</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/50 focus:border-primary focus:outline-none transition-colors duration-300 focus:shadow-lg focus:shadow-primary/20 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-bold shadow-lg shadow-primary/50 hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  {submitted ? "Quote Request Sent!" : "Get Free Quote"}
                </button>

                {submitted && (
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary text-primary text-sm animate-fade-in">
                    Thank you! We'll contact you shortly with your free quote.
                  </div>
                )}
              </form>
            </div>

            {/* Image & Info */}
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative h-96 rounded-xl overflow-hidden mb-8 border border-border group">
                <Image
                  src="/professional-crew.jpg"
                  alt="Our Team"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Evans?</h3>
                <ul className="space-y-4 text-foreground/70">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Fully licensed and insured professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>24/7 emergency response available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Free estimates with no hidden charges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Satisfaction guarantee on all projects</span>
                  </li>
                </ul>

                {/* Social Link */}
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-foreground/70 mb-4">Follow us on social media:</p>
                  <a
                    href="https://www.facebook.com/p/Evans-Excavating-Services-INC-61581023758145/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Facebook size={18} />
                    Follow on Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
