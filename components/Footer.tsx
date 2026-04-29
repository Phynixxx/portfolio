"use client"

import { useLanguage } from "@/components/LanguageProvider"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-3 text-center">
        <p className="text-zinc-600 text-sm">
          &copy; {new Date().getFullYear()} Yorrick Dettlaff. {t.footer.rights}
        </p>
        <div className="flex items-center gap-4 text-zinc-700 text-xs">
          <a href="/impressum" className="hover:text-violet-400 transition-colors">{t.footer.impressum}</a>
          <span>·</span>
          <a href="/datenschutz" className="hover:text-violet-400 transition-colors">{t.footer.datenschutz}</a>
        </div>
      </div>
    </footer>
  )
}
