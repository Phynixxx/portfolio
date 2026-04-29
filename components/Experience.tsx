"use client"

import { Briefcase, GraduationCap } from "lucide-react"
import { useLanguage } from "@/components/LanguageProvider"

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="karriere" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">{t.experience.label}</p>
          <h2 className="text-4xl font-bold text-zinc-50 mb-4">
            {t.experience.heading} <span className="gradient-text">{t.experience.headingGradient}</span>
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto">
            {t.experience.description}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-zinc-700 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {t.experience.items.map((item, i) => {
              const Icon = item.type === "work" ? Briefcase : GraduationCap
              return (
                <div key={i} className="relative flex gap-6 group">
                  <div className="hidden sm:flex flex-shrink-0 w-10 h-10 rounded-xl gradient-bg items-center justify-center z-10 group-hover:scale-110 transition-transform duration-200">
                    <Icon size={16} className="text-white" />
                  </div>

                  <div className="flex-1 glass glass-hover card-glow rounded-2xl p-6 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-zinc-100 font-semibold text-base">{item.title}</h3>
                        <p className="text-violet-400 text-sm font-medium">
                          {item.company}
                          <span className="text-zinc-500 font-normal"> · {item.location}</span>
                        </p>
                      </div>
                      <span className="text-xs text-zinc-500 bg-zinc-800/60 px-3 py-1 rounded-full whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">{item.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
