// components/About.jsx
// Bio text, education timeline, and a few quick stat cards

import { useInView } from '../hooks/useInView'
import { GraduationCap, Briefcase, Award } from 'lucide-react'

// Education / experience timeline items
const TIMELINE = [
  {
    icon: <GraduationCap size={16} />,
    year: '2020 – 2024',
    title: 'B.Sc. Computer Science',
    place: 'Stanford University',
    desc: 'Graduated with honors. Focused on HCI, distributed systems, and software engineering.',
  },
  {
    icon: <Briefcase size={16} />,
    year: '2023 – Present',
    title: 'Frontend Engineer',
    place: 'TechNova Inc.',
    desc: 'Building design-system components and data dashboards serving 200k+ users.',
  },
  {
    icon: <Award size={16} />,
    year: '2022',
    title: 'Google Summer of Code',
    place: 'Open Source Org',
    desc: 'Contributed 4,000+ lines to a popular React animation library.',
  },
]

// Quick stat cards shown in a row
const STATS = [
  { value: '4+',   label: 'Years Experience' },
  { value: '30+',  label: 'Projects Shipped' },
  { value: '12k+', label: 'GitHub Stars' },
  { value: '5',    label: 'Open Source Libs' },
]

export default function About() {
  const [ref, visible] = useInView()

  return (
    <section id="about" className="section-padding bg-cream-100 dark:bg-ink-800">
      <div
        ref={ref}
        className="max-w-6xl mx-auto"
      >
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
            01 — About
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-900 dark:text-cream-50">
            The Story So Far
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* ── Left: Bio ── */}
          <div className={`space-y-6 transition-all duration-700 delay-100
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="font-body text-base leading-relaxed text-ink-600 dark:text-cream-200/80">
              I'm a full-stack developer and UI designer based in San Francisco.
              I love the intersection of engineering and design — where performance
              meets aesthetics. My work spans everything from pixel-perfect
              interfaces to cloud-deployed APIs.
            </p>
            <p className="font-body text-base leading-relaxed text-ink-600 dark:text-cream-200/80">
              When I'm not coding I'm usually hiking, shooting film photography,
              or experimenting with generative art. I believe great software should
              feel inevitable — like it couldn't have been built any other way.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="p-4 rounded-2xl bg-cream-50 dark:bg-ink-900
                    border border-cream-200 dark:border-ink-700
                    transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30"
                >
                  <p className="font-display text-3xl font-bold text-accent">{value}</p>
                  <p className="font-body text-xs text-ink-600 dark:text-cream-200/60 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Timeline ── */}
          <div className={`space-y-6 transition-all duration-700 delay-200
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {TIMELINE.map(({ icon, year, title, place, desc }, i) => (
              <div key={title} className="flex gap-4">
                {/* Connector line */}
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center
                    justify-center text-accent flex-shrink-0">
                    {icon}
                  </div>
                  {i < TIMELINE.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-accent/20 to-transparent mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <p className="font-mono text-xs text-accent/80 mb-1">{year}</p>
                  <h3 className="font-display text-lg font-bold text-ink-900 dark:text-cream-50">
                    {title}
                  </h3>
                  <p className="font-body text-sm font-medium text-gold mb-2">{place}</p>
                  <p className="font-body text-sm text-ink-600 dark:text-cream-200/70 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
