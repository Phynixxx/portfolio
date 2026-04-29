"use client"

import { ArrowLeft, Home } from "lucide-react"
import { useLanguage } from "@/components/LanguageProvider"

export default function NotFoundContent() {
  const { locale } = useLanguage()
  const de = locale === "de"

  return (
    <main className="relative min-h-screen bg-zinc-950 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center animate-fade-up">
        <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-6">
          {de ? "Seite nicht gefunden" : "Page not found"}
        </p>

        <h1 className="text-[10rem] sm:text-[14rem] font-black leading-none gradient-text select-none">
          404
        </h1>

        <div className="glass rounded-3xl px-8 py-6 mt-2 mb-10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 gradient-bg" />
          <div className="relative z-10">
            <p className="text-zinc-50 font-bold text-2xl sm:text-3xl mb-3">
              {de ? "Ups, vertippt?" : "Oops, wrong turn."}
            </p>
            <p className="text-zinc-400 text-base leading-relaxed">
              {de
                ? "Diese Seite gibt es nicht. Vielleicht war es ein Tippfehler, ein alter Link oder einfach nur kosmisches Pech."
                : "This page doesn't exist. Maybe a typo, an old link, or just cosmic bad luck."}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="gradient-bg text-white px-8 py-3.5 rounded-2xl font-medium text-sm hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-violet-500/25 flex items-center gap-2"
          >
            <Home size={16} />
            {de ? "Zurück zur Startseite" : "Back to home"}
          </a>
          <button
            onClick={() => window.history.back()}
            className="glass glass-hover text-zinc-300 px-8 py-3.5 rounded-2xl font-medium text-sm flex items-center gap-2 transition-all duration-200"
          >
            <ArrowLeft size={16} />
            {de ? "Zurück" : "Go back"}
          </button>
        </div>
      </div>
    </main>
  )
}
