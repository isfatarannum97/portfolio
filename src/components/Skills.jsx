// components/Skills.jsx
// Skill categories with animated progress bars + tech icon pills

import { useInView } from '../hooks/useInView'

// ── Skill data: grouped by category ──
const SKILL_GROUPS = [
  {
    category: 'Frontend',
    color: '#c84b31',
    skills: [
      { name: 'React / Next.js', pct: 95 },
      { name: 'TypeScript',      pct: 88 },
      { name: 'Tailwind CSS',    pct: 92 },
      { name: 'Framer Motion',   pct: 80 },
    ],
  },
  {
    category: 'Backend',
    color: '#c9a84c',
    skills: [
      { name: 'Node.js / Express', pct: 85 },
      { name: 'Python / FastAPI',  pct: 78 },
      { name: 'PostgreSQL',        pct: 82 },
      { name: 'GraphQL',           pct: 72 },
    ],
  },
  {
    category: 'DevOps & Tools',
    color: '#3b82f6',
    skills: [
      { name: 'Docker / K8s',  pct: 70 },
      { name: 'AWS / Vercel',  pct: 80 },
      { name: 'Git / CI-CD',   pct: 90 },
      { name: 'Figma',         pct: 85 },
    ],
  },
]

// ── Tech pills shown at the bottom ──
const TECH_PILLS = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'FastAPI',
  'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Figma', 'Tailwind',
  'GraphQL', 'Prisma', 'Vitest', 'Storybook',
]

// Single animated bar
function SkillBar({ name, pct, color, visible, delay }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="font-body text-sm font-medium text-ink-700 dark:text-cream-200">
          {name}
        </span>
        <span className="font-mono text-xs text-ink-600/60 dark:text-cream-200/50">
          {pct}%
        </span>
      </div>

      {/* Track */}
      <div className="h-1.5 bg-cream-200 dark:bg-ink-700 rounded-full overflow-hidden">
        {/* Fill — animates width when visible */}
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${pct}%` : '0%',
            backgroundColor: color,
            transitionDelay: delay,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, visible] = useInView()

  return (
    <section id="skills" className="section-padding">
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Section header */}
        <div className={`mb-16 transition-all duration-700
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
            02 — Skills
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-900 dark:text-cream-50">
            What I Work With
          </h2>
        </div>

        {/* Skill groups grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {SKILL_GROUPS.map(({ category, color, skills }, gi) => (
            <div
              key={category}
              className={`p-6 rounded-3xl bg-cream-100 dark:bg-ink-800
                border border-cream-200 dark:border-ink-700
                transition-all duration-700
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${gi * 120}ms` }}
            >
              {/* Category label with accent dot */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
                <h3 className="font-display text-lg font-bold text-ink-900 dark:text-cream-50">
                  {category}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-5">
                {skills.map(({ name, pct }, si) => (
                  <SkillBar
                    key={name}
                    name={name}
                    pct={pct}
                    color={color}
                    visible={visible}
                    delay={`${(gi * 120) + (si * 80)}ms`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech pills cloud */}
        <div className={`transition-all duration-700 delay-300
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-xs text-ink-600/50 dark:text-cream-200/40
            tracking-widest uppercase mb-4 text-center">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {TECH_PILLS.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full font-mono text-xs
                  bg-cream-100 dark:bg-ink-800
                  border border-cream-200 dark:border-ink-700
                  text-ink-600 dark:text-cream-200/70
                  transition-all duration-200 hover:border-accent/50 hover:text-accent
                  cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}