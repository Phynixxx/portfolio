"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { translations, type Locale } from "@/lib/translations"

type T = typeof translations.de

type LanguageContextType = {
  locale: Locale
  setLocale: (l: Locale) => void
  t: T
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "de",
  setLocale: () => {},
  t: translations.de,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("de")

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null
    if (saved === "de" || saved === "en") setLocaleState(saved)
  }, [])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    localStorage.setItem("locale", l)
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] as T }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
