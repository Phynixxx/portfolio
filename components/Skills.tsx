"use client"

import { Code2, Layout, ShoppingBag, Settings, BarChart3, Users, Layers, Zap } from "lucide-react"
import { useLanguage } from "@/components/LanguageProvider"

const icons = [Layout, Code2, ShoppingBag, BarChart3, Users, Layers, Zap]

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">{t.skills.label}</p>
          <h2 className="text-4xl font-bold text-zinc-50 mb-4">
            {t.skills.heading} <span className="gradient-text">{t.skills.headingGradient}</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            {t.skills.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {t.skills.items.map((skill, i) => {
            const Icon = icons[i]
            return (
              <div
                key={skill.title}
                className="glass glass-hover card-glow rounded-2xl p-6 transition-all duration-300 group w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-zinc-100 font-semibold text-sm mb-2">{skill.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed mb-4 flex-1">{skill.description}</p>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-zinc-600 text-xs">{t.skills.levelLabel}</span>
                    <span className="text-violet-400 text-xs font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full gradient-bg rounded-full" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-zinc-800/80 text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
