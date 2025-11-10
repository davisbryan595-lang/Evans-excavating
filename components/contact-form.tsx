"use client"

import { useState } from "react"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Using Formspree for email handling (free service, no backend needed)
      // Form automatically sends to Evansexcavatingservices@yahoo.com
      const response = await fetch("https://formspree.io/f/mvgepoza", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setSubmitMessage("Thank you! Your message has been sent successfully. We'll get back to you soon.")
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })

        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle")
        }, 5000)
      } else {
        setSubmitStatus("error")
        setSubmitMessage("Failed to send message. Please try again or call us directly.")
      }
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage("An error occurred. Please try again or contact us by phone.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      {/* Name Field */}
      <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all duration-300 text-foreground"
          placeholder="John Doe"
        />
      </div>

      {/* Email Field */}
      <div className="animate-fade-in" style={{ animationDelay: "0.15s" }}>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all duration-300 text-foreground"
          placeholder="john@example.com"
        />
      </div>

      {/* Phone Field */}
      <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all duration-300 text-foreground"
          placeholder="(863) 993-5018"
        />
      </div>

      {/* Subject Field */}
      <div className="animate-fade-in" style={{ animationDelay: "0.25s" }}>
        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
          Service Interest *
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all duration-300 text-foreground"
        >
          <option value="">Select a service...</option>
          <option value="tree-removal">Tree Removal</option>
          <option value="stump-grinding">Stump Grinding</option>
          <option value="emergency">Emergency Cleanup</option>
          <option value="land-clearing">Land Clearing</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message Field */}
      <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all duration-300 text-foreground resize-none"
          placeholder="Tell us about your project and how we can help..."
        />
      </div>

      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/30 animate-slide-up">
          <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
          <p className="text-green-400">{submitMessage}</p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30 animate-slide-up">
          <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
          <p className="text-red-400">{submitMessage}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed animate-fade-in"
        style={{ animationDelay: "0.35s" }}
      >
        <Send size={20} />
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      <p className="text-sm text-foreground/60 text-center">
        * Required fields. We'll respond within 24 hours.
      </p>
    </form>
  )
}
