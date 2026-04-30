"use client"

import { Mail, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/LanguageProvider"

function LinkedInIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

export default function Contact() {
  const { t } = useLanguage()

  const contactItems = [
    {
      icon: Mail,
      label: "E-Mail",
      value: "yorrickdettlaff@web.de",
      href: "mailto:yorrickdettlaff@web.de",
    },
    {
      icon: LinkedInIcon,
      label: "LinkedIn",
      value: "linkedin.com/in/yorrick-dettlaff",
      href: "https://www.linkedin.com/in/yorrick-dettlaff",
    },
  ]

  return (
    <section id="kontakt" className="py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">{t.contact.label}</p>
          <h2 className="text-4xl font-bold text-zinc-50 mb-4">
            {t.contact.heading} <span className="gradient-text">{t.contact.headingGradient}</span>
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {contactItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass glass-hover card-glow rounded-2xl p-6 flex items-center gap-4 group transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <Icon size={20} className="text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-zinc-500 text-xs mb-0.5">{item.label}</p>
                  <p className="text-zinc-200 text-sm font-medium truncate">{item.value}</p>
                </div>
                <ArrowRight size={16} className="text-zinc-600 group-hover:text-violet-400 transition-colors flex-shrink-0" />
              </a>
            )
          })}
        </div>

        <div className="glass rounded-3xl p-8 text-center relative overflow-hidden max-w-2xl mx-auto">
          <div className="absolute inset-0 opacity-5 gradient-bg" />
          <div className="relative z-10">
            <h3 className="text-zinc-50 font-bold text-xl mb-2">{t.contact.ctaHeading}</h3>
            <p className="text-zinc-400 text-sm mb-6">
              {t.contact.ctaText}
            </p>
            <a
              href="mailto:yorrickdettlaff@web.de"
              className="gradient-bg text-white px-8 py-3.5 rounded-2xl font-medium text-sm hover:opacity-90 hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 shadow-lg shadow-violet-500/25"
            >
              <Mail size={16} />
              {t.contact.ctaBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
