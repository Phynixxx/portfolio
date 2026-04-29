import type { Metadata } from "next"
import Navigation from "@/components/Navigation"
import DatenschutzContent from "@/components/DatenschutzContent"

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: false },
}

export default function Datenschutz() {
  return (
    <>
      <Navigation />
      <DatenschutzContent />
    </>
  )
}
