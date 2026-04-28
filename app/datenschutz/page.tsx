import type { Metadata } from "next"
import Navigation from "@/components/Navigation"

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: false },
}

export default function Datenschutz() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-zinc-950 pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Rechtliches</p>
            <h1 className="text-4xl font-bold text-zinc-50">Datenschutzerklärung</h1>
          </div>

          <div className="space-y-10 text-zinc-400 leading-relaxed">
            <section>
              <h2 className="text-zinc-100 font-semibold text-lg mb-3">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-zinc-200 font-medium mb-2">Allgemeine Hinweise</h3>
              <p className="text-sm">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind
                alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen
                zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="text-zinc-200 font-medium mt-4 mb-2">Datenerfassung auf dieser Website</h3>
              <p className="text-sm">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                können Sie dem Abschnitt Kontakt in dieser Datenschutzerklärung entnehmen.
              </p>
              <p className="text-sm mt-3">
                Diese Website erhebt keine personenbezogenen Daten über Tracking oder Analytics Tools.
                Es werden keine Cookies gesetzt. Beim Besuch dieser Website werden lediglich technisch
                notwendige Daten durch den Hosting Anbieter (Vercel) verarbeitet.
              </p>
            </section>

            <section>
              <h2 className="text-zinc-100 font-semibold text-lg mb-3">2. Verantwortlicher</h2>
              <p className="text-sm">
                Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU Datenschutzgrundverordnung (DSGVO), ist:
              </p>
              <p className="text-sm mt-3 text-zinc-300 font-medium">Yorrick Dettlaff</p>
              <p className="text-sm mt-1">
                E-Mail:{" "}
                <a href="mailto:yorrickdettlaff@web.de" className="text-violet-400 hover:text-violet-300 transition-colors">
                  yorrickdettlaff@web.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-zinc-100 font-semibold text-lg mb-3">3. Hosting</h2>
              <p className="text-sm">
                Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 700, San Francisco, CA 94104, USA gehostet.
                Vercel verarbeitet beim Abruf dieser Website technisch notwendige Daten (z. B. IP-Adresse, Browsertyp,
                Zugriffszeit). Diese Daten werden von Vercel gemäß deren Datenschutzrichtlinien verarbeitet.
                Weitere Informationen finden Sie unter:{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-300 transition-colors"
                >
                  vercel.com/legal/privacy-policy
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-zinc-100 font-semibold text-lg mb-3">4. Ihre Rechte</h2>
              <p className="text-sm">
                Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
              </p>
              <ul className="text-sm mt-3 space-y-2 list-none">
                {[
                  "Recht auf Auskunft (Art. 15 DSGVO)",
                  "Recht auf Berichtigung (Art. 16 DSGVO)",
                  "Recht auf Löschung (Art. 17 DSGVO)",
                  "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                  "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
                  "Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
                ].map((right) => (
                  <li key={right} className="flex items-start gap-2">
                    <span className="text-violet-500 mt-0.5">›</span>
                    {right}
                  </li>
                ))}
              </ul>
              <p className="text-sm mt-4">
                Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte per E-Mail an:{" "}
                <a href="mailto:yorrickdettlaff@web.de" className="text-violet-400 hover:text-violet-300 transition-colors">
                  yorrickdettlaff@web.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-zinc-100 font-semibold text-lg mb-3">5. Kontaktaufnahme</h2>
              <p className="text-sm">
                Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen mitgeteilten Daten von uns gespeichert,
                um Ihre Anfrage zu bearbeiten. Die Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage
                verwendet und nicht an Dritte weitergegeben.
              </p>
              <p className="text-sm mt-3">
                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
                an der Beantwortung von Anfragen).
              </p>
            </section>

            <section>
              <h2 className="text-zinc-100 font-semibold text-lg mb-3">6. Externe Links</h2>
              <p className="text-sm">
                Diese Website enthält Links zu externen Diensten (z. B. LinkedIn). Beim Aufruf dieser Links
                gelten die jeweiligen Datenschutzbestimmungen der Anbieter. Wir haben keinen Einfluss auf
                die Datenverarbeitung durch externe Anbieter.
              </p>
            </section>

            <section>
              <h2 className="text-zinc-100 font-semibold text-lg mb-3">7. Beschwerderecht</h2>
              <p className="text-sm">
                Sie haben das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren.
                In Nordrhein Westfalen ist dies die Landesbeauftragte für Datenschutz und Informationsfreiheit
                Nordrhein Westfalen (LDI NRW).
              </p>
            </section>

            <section>
              <h2 className="text-zinc-100 font-semibold text-lg mb-3">8. Aktualität dieser Erklärung</h2>
              <p className="text-sm">
                Stand: April 2026. Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen,
                um sie stets den aktuellen rechtlichen Anforderungen zu entsprechen.
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
