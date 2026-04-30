"use client"

import { useLanguage } from "@/components/LanguageProvider"

export default function DatenschutzContent() {
  const { locale } = useLanguage()
  const de = locale === "de"

  const rights = de
    ? [
        "Recht auf Auskunft (Art. 15 DSGVO)",
        "Recht auf Berichtigung (Art. 16 DSGVO)",
        "Recht auf Löschung (Art. 17 DSGVO)",
        "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
        "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
        "Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
      ]
    : [
        "Right of access (Art. 15 GDPR)",
        "Right to rectification (Art. 16 GDPR)",
        "Right to erasure (Art. 17 GDPR)",
        "Right to restriction of processing (Art. 18 GDPR)",
        "Right to data portability (Art. 20 GDPR)",
        "Right to object to processing (Art. 21 GDPR)",
      ]

  return (
    <main className="min-h-screen bg-zinc-950 pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            {de ? "Rechtliches" : "Legal"}
          </p>
          <h1 className="text-4xl font-bold text-zinc-50">
            {de ? "Datenschutzerklärung" : "Privacy Policy"}
          </h1>
        </div>

        <div className="max-w-3xl space-y-10 text-zinc-400 leading-relaxed">
          <section>
            <h2 className="text-zinc-100 font-semibold text-lg mb-3">
              {de ? "1. Datenschutz auf einen Blick" : "1. Privacy at a Glance"}
            </h2>
            <h3 className="text-zinc-200 font-medium mb-2">
              {de ? "Allgemeine Hinweise" : "General Information"}
            </h3>
            <p className="text-sm">
              {de
                ? "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung."
                : "The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data by which you can be personally identified. For detailed information on the subject of data protection, please refer to our privacy policy listed below."}
            </p>

            <h3 className="text-zinc-200 font-medium mt-4 mb-2">
              {de ? "Datenerfassung auf dieser Website" : "Data Collection on This Website"}
            </h3>
            <p className="text-sm">
              {de
                ? "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt Kontakt in dieser Datenschutzerklärung entnehmen."
                : "Data processing on this website is carried out by the website operator. Their contact details can be found in the Contact section of this privacy policy."}
            </p>
            <p className="text-sm mt-3">
              {de
                ? "Diese Website erhebt keine personenbezogenen Daten über Tracking oder Analytics Tools. Es werden keine Cookies gesetzt. Beim Besuch dieser Website werden lediglich technisch notwendige Daten durch den Hosting Anbieter (Vercel) verarbeitet."
                : "This website does not collect personal data via tracking or analytics tools. No cookies are set. When visiting this website, only technically necessary data is processed by the hosting provider (Vercel)."}
            </p>
          </section>

          <section>
            <h2 className="text-zinc-100 font-semibold text-lg mb-3">
              {de ? "2. Verantwortlicher" : "2. Controller"}
            </h2>
            <p className="text-sm">
              {de
                ? "Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU Datenschutzgrundverordnung (DSGVO), ist:"
                : "The controller within the meaning of data protection laws, in particular the EU General Data Protection Regulation (GDPR), is:"}
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
            <h2 className="text-zinc-100 font-semibold text-lg mb-3">
              {de ? "3. Hosting" : "3. Hosting"}
            </h2>
            <p className="text-sm">
              {de
                ? "Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 700, San Francisco, CA 94104, USA gehostet. Vercel verarbeitet beim Abruf dieser Website technisch notwendige Daten (z. B. IP-Adresse, Browsertyp, Zugriffszeit). Diese Daten werden von Vercel gemäß deren Datenschutzrichtlinien verarbeitet."
                : "This website is hosted by Vercel Inc., 340 Pine Street, Suite 700, San Francisco, CA 94104, USA. When accessing this website, Vercel processes technically necessary data (e.g. IP address, browser type, access time). This data is processed by Vercel in accordance with their privacy policy."}{" "}
              {de ? "Weitere Informationen finden Sie unter:" : "For more information, see:"}{" "}
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
            <h2 className="text-zinc-100 font-semibold text-lg mb-3">
              {de ? "4. Ihre Rechte" : "4. Your Rights"}
            </h2>
            <p className="text-sm">
              {de
                ? "Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:"
                : "You have the following rights with respect to your personal data:"}
            </p>
            <ul className="text-sm mt-3 space-y-2 list-none">
              {rights.map((right) => (
                <li key={right} className="flex items-start gap-2">
                  <span className="text-violet-500 mt-0.5">›</span>
                  {right}
                </li>
              ))}
            </ul>
            <p className="text-sm mt-4">
              {de
                ? "Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte per E-Mail an:"
                : "To exercise your rights, please contact us by email at:"}{" "}
              <a href="mailto:yorrickdettlaff@web.de" className="text-violet-400 hover:text-violet-300 transition-colors">
                yorrickdettlaff@web.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-zinc-100 font-semibold text-lg mb-3">
              {de ? "5. Kontaktaufnahme" : "5. Contact"}
            </h2>
            <p className="text-sm">
              {de
                ? "Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen mitgeteilten Daten von uns gespeichert, um Ihre Anfrage zu bearbeiten. Die Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben."
                : "If you contact us by email, the data you provide will be stored by us in order to process your request. The data will be used exclusively to process your request and will not be passed on to third parties."}
            </p>
            <p className="text-sm mt-3">
              {de
                ? "Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen)."
                : "The legal basis for processing is Art. 6 para. 1 lit. f GDPR (legitimate interest in responding to inquiries)."}
            </p>
          </section>

          <section>
            <h2 className="text-zinc-100 font-semibold text-lg mb-3">
              {de ? "6. Externe Links" : "6. External Links"}
            </h2>
            <p className="text-sm">
              {de
                ? "Diese Website enthält Links zu externen Diensten (z. B. LinkedIn). Beim Aufruf dieser Links gelten die jeweiligen Datenschutzbestimmungen der Anbieter. Wir haben keinen Einfluss auf die Datenverarbeitung durch externe Anbieter."
                : "This website contains links to external services (e.g. LinkedIn). When accessing these links, the respective privacy policies of the providers apply. We have no influence over data processing by external providers."}
            </p>
          </section>

          <section>
            <h2 className="text-zinc-100 font-semibold text-lg mb-3">
              {de ? "7. Beschwerderecht" : "7. Right to Lodge a Complaint"}
            </h2>
            <p className="text-sm">
              {de
                ? "Sie haben das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren. In Nordrhein Westfalen ist dies die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein Westfalen (LDI NRW)."
                : "You have the right to lodge a complaint with the competent data protection supervisory authority. In North Rhine-Westphalia, this is the State Commissioner for Data Protection and Freedom of Information North Rhine-Westphalia (LDI NRW)."}
            </p>
          </section>

          <section>
            <h2 className="text-zinc-100 font-semibold text-lg mb-3">
              {de ? "8. Aktualität dieser Erklärung" : "8. Currency of This Policy"}
            </h2>
            <p className="text-sm">
              {de
                ? "Stand: April 2026. Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie stets den aktuellen rechtlichen Anforderungen zu entsprechen."
                : "As of: April 2026. We reserve the right to update this privacy policy as needed to ensure it always complies with current legal requirements."}
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800/50 max-w-3xl">
          <a href="/" className="text-violet-400 hover:text-violet-300 text-sm transition-colors">
            {de ? "← Zurück zur Startseite" : "← Back to home"}
          </a>
        </div>
      </div>
    </main>
  )
}
