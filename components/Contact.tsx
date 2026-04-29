import { Mail, ExternalLink, ArrowRight } from "lucide-react"

const contactItems = [
  {
    icon: Mail,
    label: "E-Mail",
    value: "yorrickdettlaff@web.de",
    href: "mailto:yorrickdettlaff@web.de",
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "linkedin.com/in/yorrick-dettlaff",
    href: "https://www.linkedin.com/in/yorrick-dettlaff",
  },
]

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">Kontakt</p>
          <h2 className="text-4xl font-bold text-zinc-50 mb-4">
            Lass uns <span className="gradient-text">sprechen</span>
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto">
            Du hast ein Projekt, eine Idee oder möchtest einfach in Kontakt treten?
            Ich freue mich auf deine Nachricht.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {contactItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass glass-hover card-glow rounded-2xl p-6 flex items-center gap-4 group transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <Icon size={20} className="text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-zinc-500 text-xs mb-0.5">{item.label}</p>
                  <p className="text-zinc-200 text-sm font-medium truncate">{item.value}</p>
                </div>
                <ArrowRight size={16} className="text-zinc-600 group-hover:text-violet-400 transition-colors flex-shrink-0" />
              </a>
            )
          })}
        </div>

        <div className="glass rounded-3xl p-8 text-center relative overflow-hidden max-w-2xl mx-auto">
          <div className="absolute inset-0 opacity-5 gradient-bg" />
          <div className="relative z-10">
            <h3 className="text-zinc-50 font-bold text-xl mb-2">Bereit für dein nächstes Projekt?</h3>
            <p className="text-zinc-400 text-sm mb-6">
              Ob Website, Redesign oder digitale Strategie. Ich bin dabei.
            </p>
            <a
              href="mailto:yorrickdettlaff@web.de"
              className="gradient-bg text-white px-8 py-3.5 rounded-2xl font-medium text-sm hover:opacity-90 hover:scale-105 transition-all duration-200 inline-flex items-center gap-2 shadow-lg shadow-violet-500/25"
            >
              <Mail size={16} />
              E-Mail schreiben
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
