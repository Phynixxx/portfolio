import type { Metadata } from "next"
import Navigation from "@/components/Navigation"
import ImpressumContent from "@/components/ImpressumContent"

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: false },
}

export default function Impressum() {
  return (
    <>
      <Navigation />
      <ImpressumContent />
    </>
  )
}
