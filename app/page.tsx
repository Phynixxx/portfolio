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
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-3 text-center">
          <p className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} Yorrick Dettlaff. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4 text-zinc-700 text-xs">
            <a href="/impressum" className="hover:text-violet-400 transition-colors">Impressum</a>
            <span>·</span>
            <a href="/datenschutz" className="hover:text-violet-400 transition-colors">Datenschutz</a>
          </div>
        </div>
      </footer>
    </>
  )
}
