"use client"

import { useLanguage } from "@/components/LanguageProvider"

export default function ImpressumContent() {
  const { locale } = useLanguage()
  const de = locale === "de"

  return (
    <main className="min-h-screen bg-zinc-950 pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            {de ? "Rechtliches" : "Legal"}
          </p>
          <h1 className="text-4xl font-bold text-zinc-50">
            {de ? "Impressum" : "Legal Notice"}
          </h1>
        </div>

        <div className="space-y-10 text-zinc-400 leading-relaxed">
          <section>
            <h2 className="text-zinc-100 font-semibold text-lg mb-3">
              {de ? "Angaben gemäß § 5 TMG" : "Information according to § 5 TMG"}
            </h2>
            <p className="text-zinc-300 font-medium">Yorrick Dettlaff</p>
            <p className="mt-2 text-sm">
              {de ? "Freiberuflicher Frontend Designer und Developer" : "Freelance Frontend Designer and Developer"}
            </p>
          </section>

          <section>
            <h2 className="text-zinc-100 font-semibold text-lg mb-3">
              {de ? "Kontakt" : "Contact"}
            </h2>
            <p className="text-sm">
              E-Mail:{" "}
              <a href="mailto:yorrickdettlaff@web.de" className="text-violet-400 hover:text-violet-300 transition-colors">
                yorrickdettlaff@web.de
              </a>
            </p>
            <p className="text-sm mt-1">
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/yorrick-dettlaff"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-300 transition-colors"
              >
                linkedin.com/in/yorrick-dettlaff
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-zinc-100 font-semibold text-lg mb-3">
              {de
                ? "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV"
                : "Responsible for content according to § 55 para. 2 RStV"}
            </h2>
            <p className="text-sm">Yorrick Dettlaff</p>
          </section>

          <section>
            <h2 className="text-zinc-100 font-semibold text-lg mb-3">
              {de ? "Haftung für Inhalte" : "Liability for Content"}
            </h2>
            <p className="text-sm">
              {de
                ? "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen."
                : "As a service provider, we are responsible for our own content on these pages in accordance with general law (§ 7 para. 1 TMG). However, pursuant to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances indicating illegal activity."}
            </p>
            <p className="text-sm mt-3">
              {de
                ? "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen."
                : "Obligations to remove or block the use of information under general law remain unaffected. Liability in this regard is only possible from the moment we become aware of a specific legal violation. Upon becoming aware of such violations, we will remove this content immediately."}
            </p>
          </section>

          <section>
            <h2 className="text-zinc-100 font-semibold text-lg mb-3">
              {de ? "Haftung für Links" : "Liability for Links"}
            </h2>
            <p className="text-sm">
              {de
                ? "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar."
                : "Our website contains links to external third-party websites over whose content we have no control. Therefore, we cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content. The linked pages were checked for possible legal violations at the time of linking. No illegal content was apparent at the time of linking."}
            </p>
          </section>

          <section>
            <h2 className="text-zinc-100 font-semibold text-lg mb-3">
              {de ? "Urheberrecht" : "Copyright"}
            </h2>
            <p className="text-sm">
              {de
                ? "Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet."
                : "The content and works created by the site operator on these pages are subject to German copyright law. Reproduction, editing, distribution, and any kind of use beyond the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use."}
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800/50">
          <a href="/" className="text-violet-400 hover:text-violet-300 text-sm transition-colors">
            {de ? "← Zurück zur Startseite" : "← Back to home"}
          </a>
        </div>
      </div>
    </main>
  )
}
