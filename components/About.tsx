"use client"

import { Languages, GraduationCap, Briefcase, Star } from "lucide-react"
import { useLanguage } from "@/components/LanguageProvider"

const icons = [Briefcase, Star, Languages, GraduationCap]

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="ueber-mich" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">{t.about.label}</p>
            <h2 className="text-4xl font-bold text-zinc-50 mb-6 leading-tight">
              {t.about.heading}
              <br />
              <span className="gradient-text">{t.about.headingGradient}</span>
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              {t.about.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {t.about.facts.map((fact, i) => {
              const Icon = icons[i]
              return (
                <div
                  key={fact.label}
                  className="glass glass-hover card-glow rounded-2xl p-6 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center mb-4">
                    <Icon size={18} className="text-white" />
                  </div>
                  <p className="text-zinc-500 text-xs mb-1">{fact.label}</p>
                  <p className="text-zinc-100 font-semibold text-sm">{fact.value}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
