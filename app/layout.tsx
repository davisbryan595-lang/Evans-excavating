import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Evans Excavating Services | Tree Removal & Land Clearing in Arcadia, FL",
  description:
    "Professional tree removal, stump grinding, and land clearing services in Arcadia, FL. 24/7 emergency cleanup. Safe, fast, and affordable rates.",
  keywords: "tree removal, excavating, stump grinding, land clearing, Arcadia FL",
  openGraph: {
    title: "Evans Excavating Services",
    description: "Professional tree removal & excavating services",
    url: "https://evansexcavating.com",
    siteName: "Evans Excavating",
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Evans Excavating Services",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/evans-removebg-preview-7PdxXtOlfN9tLqaBft9ZvLCCZEQmRB.png",
              description: "Professional tree removal and excavating services",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Arcadia",
                addressLocality: "Arcadia",
                addressRegion: "FL",
                postalCode: "34266",
                addressCountry: "US",
              },
              telephone: "863-993-5018",
              email: "Evansexcavatingservices@yahoo.com",
              sameAs: ["https://www.facebook.com/p/Evans-Excavating-Services-INC-61581023758145/"],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
