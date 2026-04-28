"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { href: "#ueber-mich", label: "Über mich" },
  { href: "#skills", label: "Skills" },
  { href: "#karriere", label: "Karriere" },
  { href: "#kontakt", label: "Kontakt" },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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

        <a
          href="#kontakt"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium gradient-bg text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
        >
          Kontakt aufnehmen
        </a>

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
          <ul className="flex flex-col px-6 py-4 gap-4 max-w-6xl mx-auto">
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
        </div>
      )}
    </header>
  )
}
