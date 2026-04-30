"use client"

import { ArrowDown } from "lucide-react"

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/components/LanguageProvider"

export default function Hero() {
  const [orbPos, setOrbPos] = useState({ x: -999, y: -999 })
  const sectionRef = useRef<HTMLElement>(null)
  const targetRef = useRef({ x: -999, y: -999 })
  const currentRef = useRef({ x: -999, y: -999 })
  const rafRef = useRef<number>(0)
  const { t } = useLanguage()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      targetRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      const cur = currentRef.current
      const tar = targetRef.current
      const nextX = lerp(cur.x, tar.x, 0.07)
      const nextY = lerp(cur.y, tar.y, 0.07)
      currentRef.current = { x: nextX, y: nextY }
      setOrbPos({ x: nextX, y: nextY })
      rafRef.current = requestAnimationFrame(animate)
    }

    const el = sectionRef.current
    el?.addEventListener("mousemove", handleMouseMove)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      el?.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      <div
        className="absolute w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-3xl pointer-events-none"
        style={{
          top: 0,
          left: 0,
          transform: `translate(${orbPos.x - 250}px, ${orbPos.y - 250}px)`,
          willChange: "transform",
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-zinc-400 text-xs font-medium tracking-wider uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            {t.hero.badge}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-50 leading-none mb-4 whitespace-nowrap">
            Yorrick <span className="gradient-text">Dettlaff</span>
          </h1>

          <p className="text-xl sm:text-2xl text-zinc-400 font-light mt-4 mb-6">
            {t.hero.subtitle}
          </p>

          <p className="text-zinc-500 text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
            {t.hero.description1}{" "}
            {t.hero.description2} <span className="whitespace-nowrap">{t.hero.descClean}</span> {t.hero.descMid} <span className="whitespace-nowrap">{t.hero.descUser}</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
            <a
              href="#kontakt"
              className="gradient-bg text-white px-8 py-3.5 rounded-2xl font-medium text-sm hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-violet-500/25"
            >
              {t.hero.ctaContact}
            </a>
            <a
              href="#karriere"
              className="glass glass-hover text-zinc-300 px-8 py-3.5 rounded-2xl font-medium text-sm flex items-center gap-2"
            >
              {t.hero.ctaCareer}
              <ArrowDown size={14} />
            </a>
          </div>

          <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com/in/yorrick-dettlaff"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-violet-400 transition-colors flex items-center gap-2 text-sm"
            >
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
            <span className="w-px h-4 bg-zinc-700" />
            <span className="text-zinc-500 text-sm">{t.hero.location}</span>
          </div>
        </div>

        <div className="flex-shrink-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-3xl gradient-bg p-0.5 animate-pulse-glow">
              <div className="w-full h-full rounded-3xl bg-zinc-900 overflow-hidden">
                <Image
                  src="/images/yorrick-0.jpg"
                  alt="Yorrick Dettlaff"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-zinc-400 text-xs">{t.hero.since}</p>
              <p className="text-zinc-50 font-bold text-lg leading-tight">2019</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#ueber-mich"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600 hover:text-violet-400 transition-colors animate-bounce"
        aria-label="Nach unten scrollen"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
