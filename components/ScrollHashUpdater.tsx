"use client"

import { useEffect } from "react"

const SECTION_IDS = ["ueber-mich", "skills", "karriere", "kontakt"]

export default function ScrollHashUpdater() {
  useEffect(() => {
    window.scrollTo(0, 0)
    history.replaceState(null, "", window.location.pathname)

    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const handleScroll = () => {
      const mid = window.scrollY + window.innerHeight / 2

      if (window.scrollY < window.innerHeight * 0.4) {
        history.replaceState(null, "", window.location.pathname)
        return
      }

      let current = ""
      for (const section of sections) {
        if (section.offsetTop <= mid) {
          current = section.id
        }
      }

      const next = current ? `#${current}` : window.location.pathname
      if (window.location.hash !== (current ? `#${current}` : "")) {
        history.replaceState(null, "", next)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return null
}
