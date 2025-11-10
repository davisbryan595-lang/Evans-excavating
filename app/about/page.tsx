"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Award, Shield, MapPin } from "lucide-react"
import Image from "next/image"

export default function About() {
  const teamMembers = [
    {
      name: "John Evans",
      role: "Founder & Lead Arborist",
      image: "/professional-crew.jpg",
      bio: "With 15+ years in the industry",
    },
    {
      name: "Mike Torres",
      role: "Operations Manager",
      image: "/tree-removal-equipment.jpg",
      bio: "Expert equipment operator",
    },
    {
      name: "Sarah Chen",
      role: "Safety Coordinator",
      image: "/safe-tree-cutting.jpg",
      bio: "Certified safety professional",
    },
  ]

  const equipment = [
    {
      name: "Industrial Excavators",
      image: "/tree-removal-equipment.jpg",
      desc: "Heavy-duty equipment for large-scale projects",
    },
    {
      name: "Stump Grinders",
      image: "/tree-removal-equipment.jpg",
      desc: "Complete stump removal below ground level",
    },
    {
      name: "Chippers & Mulchers",
      image: "/safe-tree-cutting.jpg",
      desc: "Professional waste processing equipment",
    },
    {
      name: "Safety Gear",
      image: "/professional-crew.jpg",
      desc: "Industry-standard protective equipment",
    },
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
              backgroundImage: "url(/placeholder.svg?height=400&width=1920&query=excavating company team professional)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>

        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-2 animate-fade-in">
            About <span className="text-primary">Evans Excavating</span>
          </h1>
          <p className="text-lg text-foreground/80 animate-slide-up">
            Family-Owned. Locally Trusted. Professionally Certified.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-4xl font-bold text-foreground mb-6 animate-fade-in">Our Story</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6 animate-slide-up">
              Evans Excavating Services was founded with a simple mission: to provide safe, professional, and affordable
              tree removal and excavating services to the Arcadia community and beyond. What started as a small
              operation has grown into a trusted name in the industry.
            </p>
            <p
              className="text-lg text-foreground/70 leading-relaxed mb-6 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Every project we undertake reflects our commitment to excellence, safety, and customer satisfaction. We
              invest in the latest equipment and continuous training to ensure our team delivers the highest standards
              of service.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: <Award size={32} />,
                title: "Fully Licensed & Insured",
                desc: "Industry-certified professionals with comprehensive coverage",
              },
              {
                icon: <Shield size={32} />,
                title: "Safety First",
                desc: "Advanced safety protocols protecting property and personnel",
              },
              {
                icon: <MapPin size={32} />,
                title: "Local Experts",
                desc: "Deep knowledge of Arcadia and surrounding areas",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4 text-primary">{item.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-primary/5 border-y border-primary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center animate-fade-in">
            Meet the <span className="text-primary">Team</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-foreground/70">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center animate-fade-in">
            Our <span className="text-primary">Equipment</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {equipment.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden border border-border group-hover:border-primary transition-colors duration-300">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.name}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-primary/5 border-t border-primary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8 animate-fade-in">
            Serving <span className="text-primary">Arcadia, FL & Beyond</span>
          </h2>
          <div className="relative w-full h-96 rounded-xl overflow-hidden border border-border animate-fade-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3547.3934419149893!2d-81.87841!3d27.224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db48a8a8a8a8ab%3A0x0!2sArcadia%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
