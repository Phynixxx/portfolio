import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"
import ScrollHashUpdater from "@/components/ScrollHashUpdater"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <ScrollHashUpdater />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
