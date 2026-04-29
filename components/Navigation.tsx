"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/components/LanguageProvider"
import type { Locale } from "@/lib/translations"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { locale, setLocale, t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { href: "#ueber-mich", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#karriere", label: t.nav.career },
    { href: "#kontakt", label: t.nav.contact },
  ]

  const LangToggle = ({ className }: { className?: string }) => (
    <div className={`flex items-center rounded-xl overflow-hidden border border-zinc-700/50 ${className ?? ""}`}>
      {(["de", "en"] as Locale[]).map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          aria-label={l === "de" ? "Deutsch" : "English"}
          className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
            locale === l
              ? "gradient-bg text-white"
              : "text-zinc-400 hover:text-zinc-200 bg-transparent"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: "rgba(9, 9, 11, 0.92)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(63, 63, 70, 0.4)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
            }
          : { background: "transparent" }
      }
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-xl tracking-tight">
          <span className="gradient-text">YD</span>
          <span className="text-zinc-300 ml-2 text-sm font-normal hidden sm:inline">Yorrick Dettlaff</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-zinc-400 hover:text-violet-400 text-sm font-medium transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <LangToggle />
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium gradient-bg text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
          >
            {t.nav.contactBtn}
          </a>
        </div>

        <button
          className="md:hidden text-zinc-400 hover:text-zinc-100 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div
          style={{
            background: "rgba(9, 9, 11, 0.95)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderTop: "1px solid rgba(63, 63, 70, 0.4)",
          }}
        >
          <div className="flex flex-col px-6 py-4 gap-4 max-w-6xl mx-auto">
            <ul className="flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-zinc-300 hover:text-violet-400 text-sm font-medium transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-2 border-t border-zinc-800/50 flex items-center justify-between">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium gradient-bg text-white"
                onClick={() => setOpen(false)}
              >
                {t.nav.contactBtn}
              </a>
              <LangToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
