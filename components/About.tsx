import { MapPin, Languages, GraduationCap, Briefcase } from "lucide-react"

const facts = [
  {
    icon: Briefcase,
    label: "Aktuell",
    value: "Offen für neue Rollen",
  },
  {
    icon: MapPin,
    label: "Standort",
    value: "Essen, NRW",
  },
  {
    icon: Languages,
    label: "Sprachen",
    value: "Deutsch & Englisch",
  },
  {
    icon: GraduationCap,
    label: "Ausbildung",
    value: "Kaufmann + Frontend",
  },
]

export default function About() {
  return (
    <section id="ueber-mich" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">Über mich</p>
            <h2 className="text-4xl font-bold text-zinc-50 mb-6 leading-tight">
              Kaufmännisches Fundament,<br />
              <span className="gradient-text">digitale Umsetzung</span>
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Ich bin Yorrick Dettlaff — Frontend Designer und Entwickler aus Essen.
                Mein Weg begann mit einer Ausbildung zum Kaufmann im Groß- und Außenhandel,
                führte über ein Studium des Wirtschaftsingenieurwesens und mündete schließlich
                in meine Leidenschaft: das Gestalten und Entwickeln digitaler Produkte.
              </p>
              <p>
                Im Traineeship bei My Best Concept GmbH vertiefte ich mein Wissen als
                Frontend-Entwickler und Designer mit Fokus auf WordPress und Shopify.
                Danach übernahm ich bei Developaway Verantwortung als Projektmanager und
                Teamlead — wo technisches Know-how auf strategische Führung trifft.
              </p>
              <p>
                Meine Kombination aus kaufmännischem Denken, technischer Umsetzungsstärke
                und einem Auge für gutes Design macht mich zu einem vielseitigen Partner
                für digitale Projekte jeder Größe.
              </p>
            </div>
          </div>

          {/* Fact cards */}
          <div className="grid grid-cols-2 gap-4">
            {facts.map((fact) => {
              const Icon = fact.icon
              return (
                <div
                  key={fact.label}
                  className="glass glass-hover card-glow rounded-2xl p-6 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center mb-4">
                    <Icon size={18} className="text-white" />
                  </div>
                  <p className="text-zinc-500 text-xs mb-1">{fact.label}</p>
                  <p className="text-zinc-100 font-semibold text-sm">{fact.value}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
