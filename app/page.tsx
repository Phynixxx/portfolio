import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-zinc-800/50 bg-zinc-950 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Yorrick Dettlaff · Alle Rechte vorbehalten
          </p>
          <p className="text-zinc-700 text-xs">
            Gebaut mit Next.js &amp; Tailwind CSS
          </p>
        </div>
      </footer>
    </>
  )
}
