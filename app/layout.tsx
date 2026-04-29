import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { JsonLd } from "@/components/seo/JsonLd"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const DOMAIN = "https://yorrick-dettlaff.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: "Yorrick Dettlaff – Frontend Designer & Developer",
    template: "%s | Yorrick Dettlaff",
  },
  description:
    "Frontend Designer und Developer aus Essen. Spezialisiert auf moderne Websites, WordPress, Shopify und digitale Erlebnisse mit Fokus auf sauberes Design und Performance.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: DOMAIN,
    siteName: "Yorrick Dettlaff",
    title: "Yorrick Dettlaff – Frontend Designer & Developer",
    description:
      "Frontend Designer und Developer aus Essen. WordPress, Shopify, HTML/CSS/JS und Projektmanagement.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Yorrick Dettlaff Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yorrick Dettlaff – Frontend Designer & Developer",
    description: "Frontend Designer und Developer aus Essen.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "Frontend Designer",
    "Frontend Developer",
    "WordPress Entwickler",
    "Shopify Developer",
    "Webentwicklung Essen",
    "UI UX Designer",
    "Yorrick Dettlaff",
    "Portfolio",
  ],
  authors: [{ name: "Yorrick Dettlaff", url: DOMAIN }],
  creator: "Yorrick Dettlaff",
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yorrick Dettlaff",
  url: DOMAIN,
  email: "yorrickdettlaff@web.de",
  jobTitle: "Frontend Designer & Developer",
  description:
    "Frontend Designer und Developer mit Erfahrung in WordPress, Shopify, HTML/CSS/JS und IT-Projektmanagement.",
  sameAs: ["https://www.linkedin.com/in/yorrick-dettlaff"],
  knowsLanguage: ["de", "en"],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Yorrick Dettlaff Portfolio",
  url: DOMAIN,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-zinc-950 text-zinc-50 font-sans antialiased">
        <JsonLd data={personSchema} />
        <JsonLd data={websiteSchema} />
        {children}
      </body>
    </html>
  )
}
