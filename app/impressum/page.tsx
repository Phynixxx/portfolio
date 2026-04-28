import type { Metadata } from "next"
import Navigation from "@/components/Navigation"

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: false },
}

export default function Impressum() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-zinc-950 pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Rechtliches</p>
            <h1 className="text-4xl font-bold text-zinc-50">Impressum</h1>
          </div>

          <div className="space-y-10 text-zinc-400 leading-relaxed">
            <section>
              <h2 className="text-zinc-100 font-semibold text-lg mb-3">Angaben gemäß § 5 TMG</h2>
              <p className="text-zinc-300 font-medium">Yorrick Dettlaff</p>
              <p className="mt-2 text-sm">
                Freiberuflicher Frontend Designer und Developer
              </p>
            </section>

            <section>
              <h2 className="text-zinc-100 font-semibold text-lg mb-3">Kontakt</h2>
              <p className="text-sm">
                E-Mail:{" "}
                <a href="mailto:yorrickdettlaff@web.de" className="text-violet-400 hover:text-violet-300 transition-colors">
                  yorrickdettlaff@web.de
                </a>
              </p>
              <p className="text-sm mt-1">
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/yorrickdettlaff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-300 transition-colors"
                >
                  linkedin.com/in/yorrickdettlaff
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-zinc-100 font-semibold text-lg mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p className="text-sm">Yorrick Dettlaff</p>
            </section>

            <section>
              <h2 className="text-zinc-100 font-semibold text-lg mb-3">Haftung für Inhalte</h2>
              <p className="text-sm">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-sm mt-3">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
                der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-zinc-100 font-semibold text-lg mb-3">Haftung für Links</h2>
              <p className="text-sm">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
                haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
                der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
            </section>

            <section>
              <h2 className="text-zinc-100 font-semibold text-lg mb-3">Urheberrecht</h2>
              <p className="text-sm">
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
                Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht
                kommerziellen Gebrauch gestattet.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-zinc-800/50">
            <a href="/" className="text-violet-400 hover:text-violet-300 text-sm transition-colors">
              ← Zurück zur Startseite
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
