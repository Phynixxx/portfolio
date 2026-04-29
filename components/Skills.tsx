import { Code2, Layout, ShoppingBag, Settings, BarChart3, Users, Layers, Zap } from "lucide-react"

const skills = [
  {
    icon: Layout,
    title: "Frontend Design",
    description: "UI/UX Gestaltung mit Fokus auf moderne, nutzerzentrierte Interfaces und klare visuelle Hierarchie.",
    tags: ["Figma", "Shopify", "Responsive"],
    level: 80,
  },
  {
    icon: Code2,
    title: "Webentwicklung",
    description: "Saubere, performante Implementierung von Websites und Web Applikationen nach aktuellen Standards.",
    tags: ["HTML", "CSS", "JavaScript"],
    level: 85,
  },
  {
    icon: ShoppingBag,
    title: "WordPress und Shopify",
    description: "Entwicklung und Anpassung von WordPress Themes und Shopify Stores. Von Setup bis Go Live.",
    tags: ["Themes", "Plugins", "Elementor", "E-Commerce"],
    level: 88,
  },
  {
    icon: BarChart3,
    title: "Multimedia Marketing",
    description: "Digitale Marketingstrategien, Content Erstellung und datengetriebene Kampagnenplanung.",
    tags: ["SEO", "Content", "Analytics"],
    level: 65,
  },
  {
    icon: Users,
    title: "Projektmanagement",
    description: "Planung, Koordination und Steuerung digitaler Projekte als Teamlead und Projektmanager.",
    tags: ["Scrum", "Asana", "Awork"],
    level: 70,
  },
  {
    icon: Layers,
    title: "UI Komponenten",
    description: "Aufbau wiederverwendbarer Komponentenbibliotheken für konsistente Design Systeme.",
    tags: ["Komponentendesign", "Styleguide"],
    level: 82,
  },
  {
    icon: Zap,
    title: "Tooling und Workflow",
    description: "Effiziente Entwicklungsworkflows mit modernen Tools für Zusammenarbeit und Deployment.",
    tags: ["Git", "VS Code", "Cursor", "CI/CD"],
    level: 78,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">Kompetenzen</p>
          <h2 className="text-4xl font-bold text-zinc-50 mb-4">
            Was ich <span className="gradient-text">mitbringe</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Eine Kombination aus technischen Fähigkeiten, gestalterischem Gespür
            und strategischem Denken.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.title}
                className="glass glass-hover card-glow rounded-2xl p-6 transition-all duration-300 group w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]"
              >
                <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-zinc-100 font-semibold text-sm mb-2">{skill.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed mb-4">{skill.description}</p>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-zinc-600 text-xs">Level</span>
                    <span className="text-violet-400 text-xs font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full gradient-bg rounded-full" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-zinc-800/80 text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
