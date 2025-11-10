"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-primary font-bold text-lg mb-4">Evans Excavating</h3>
            <p className="text-foreground/70 text-sm">
              Professional tree removal and excavating services in Arcadia, FL since 2025.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-foreground/70 text-sm">
                <Phone size={16} className="text-primary" />
                <a href="tel:863-993-5018">863-993-5018</a>
              </li>
              <li className="flex items-center gap-2 text-foreground/70 text-sm">
                <Mail size={16} className="text-primary" />
                <a href="mailto:Evansexcavatingservices@yahoo.com">Email Us</a>
              </li>
              <li className="flex items-start gap-2 text-foreground/70 text-sm">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Arcadia, FL</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Follow Us</h4>
            <a
              href="https://www.facebook.com/p/Evans-Excavating-Services-INC-61581023758145/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-foreground/50 text-sm">
            © 2025 Evans Excavating Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
