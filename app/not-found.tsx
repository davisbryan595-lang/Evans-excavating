"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Home, ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-4 pt-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number */}
          <div className="mb-8 animate-fade-in">
            <div className="text-9xl font-bold text-primary/30 mb-2">404</div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <h1 className="text-5xl font-bold text-foreground mb-4">Page Not Found</h1>
            <p className="text-lg text-foreground/70 mb-8">
              Oops! The page you're looking for doesn't exist. Let's get you back on track.
            </p>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg shadow-primary/50 hover:shadow-lg hover:scale-105"
              >
                <Home size={20} />
                Back to Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-all duration-300 font-semibold"
              >
                Contact Us
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Decoration */}
          <div className="mt-16 flex justify-center gap-2 opacity-30">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-primary animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
