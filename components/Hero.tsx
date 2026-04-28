"use client"

import { ArrowDown, ExternalLink } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
    const el = sectionRef.current
    el?.addEventListener("mousemove", handleMouseMove)
    return () => el?.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Mouse-following orb */}
      <div
        className="absolute w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-3xl pointer-events-none"
        style={{
          left: mousePos.x - 250,
          top: mousePos.y - 250,
          transition: "left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), top 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />

      {/* Static ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-600/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-zinc-400 text-xs font-medium tracking-wider uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            Verfügbar für neue Projekte
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-50 leading-none mb-4">
            Yorrick
            <br />
            <span className="gradient-text">Dettlaff</span>
          </h1>

          <p className="text-xl sm:text-2xl text-zinc-400 font-light mt-4 mb-6">
            Frontend Designer &amp; Developer
          </p>

          <p className="text-zinc-500 text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
            Ich gestalte und entwickle moderne Websites und digitale Erlebnisse.
            Fokus auf sauberes Design, Performance und nutzerzentriertes Denken.
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
            <a
              href="#kontakt"
              className="gradient-bg text-white px-8 py-3.5 rounded-2xl font-medium text-sm hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-violet-500/25"
            >
              Kontakt aufnehmen
            </a>
            <a
              href="#karriere"
              className="glass glass-hover text-zinc-300 px-8 py-3.5 rounded-2xl font-medium text-sm flex items-center gap-2"
            >
              Mein Werdegang
              <ArrowDown size={14} />
            </a>
          </div>

          <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com/in/yorrickdettlaff"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-violet-400 transition-colors flex items-center gap-2 text-sm"
            >
              <ExternalLink size={16} />
              LinkedIn
            </a>
            <span className="w-px h-4 bg-zinc-700" />
            <span className="text-zinc-500 text-sm">Essen, Deutschland</span>
          </div>
        </div>

        {/* Avatar */}
        <div className="flex-shrink-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl gradient-bg p-0.5 animate-pulse-glow">
              <div className="w-full h-full rounded-3xl bg-zinc-900 flex items-center justify-center overflow-hidden">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-24 h-24 rounded-2xl gradient-bg flex items-center justify-center text-white text-4xl font-bold">
                    YD
                  </div>
                  <p className="text-zinc-500 text-xs">Foto folgt</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-zinc-400 text-xs">Erfahrung seit</p>
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
