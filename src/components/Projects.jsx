// components/Projects.jsx
// Responsive project cards with tech chips, live + code links

import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'

// ── Project data — swap in your own ──
const PROJECTS = [
  {
    number: '01',
    title: 'Horizon Dashboard',
    description:
      'A real-time analytics platform for SaaS companies. Features customisable widget grids, multi-tenant auth, and WebSocket-powered live charts built with Next.js and Recharts.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Recharts', 'Tailwind'],
    live: 'https://horizon-demo.vercel.app',
    code: 'https://github.com/alexmorgan/horizon',
    accent: '#c84b31',
    featured: true,
  },
  {
    number: '02',
    title: 'Inkflow — Writing App',
    description:
      'A distraction-free writing tool with AI-powered suggestions, Markdown export, and beautiful typography. Built offline-first with IndexedDB sync.',
    tags: ['React', 'Node.js', 'OpenAI API', 'IndexedDB', 'Framer Motion'],
    live: 'https://inkflow.app',
    code: 'https://github.com/alexmorgan/inkflow',
    accent: '#c9a84c',
    featured: false,
  },
  {
    number: '03',
    title: 'Shelf — Book Tracker',
    description:
      'A social reading tracker that pulls data from Google Books. Users log books, write reviews, and see friends\' reading activity in a beautiful feed.',
    tags: ['React Native', 'Expo', 'FastAPI', 'PostgreSQL', 'Redis'],
    live: 'https://shelf-books.app',
    code: 'https://github.com/alexmorgan/shelf',
    accent: '#3b82f6',
    featured: false,
  },
  {
    number: '04',
    title: 'Palette — Color Tools',
    description:
      'An open-source color utility suite: palette generator, contrast checker, gradient builder, and CSS variable exporter. Used by 12k+ designers.',
    tags: ['Vue 3', 'TypeScript', 'Vite', 'CSS Houdini'],
    live: 'https://palette.tools',
    code: 'https://github.com/alexmorgan/palette',
    accent: '#a855f7',
    featured: false,
  },
]

function ProjectCard({ project, index, visible }) {
  return (
    <article
      className={`group relative rounded-3xl overflow-hidden
        bg-cream-100 dark:bg-ink-800
        border border-cream-200 dark:border-ink-700
        transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl
        hover:border-opacity-50
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{
        transitionDelay: `${index * 100}ms`,
        '--accent-color': project.accent,
      }}
    >
      {/* Top accent stripe */}
      <div
        className="h-1 w-full transition-all duration-300
          group-hover:h-1.5"
        style={{ backgroundColor: project.accent }}
      />

      <div className="p-6 md:p-8">
        {/* Number + links row */}
        <div className="flex items-start justify-between mb-4">
          <span className="font-mono text-xs font-medium opacity-30
            text-ink-900 dark:text-cream-50">
            {project.number}
          </span>

          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source code"
                className="w-8 h-8 flex items-center justify-center rounded-full
                  bg-cream-200 dark:bg-ink-700 text-ink-600 dark:text-cream-200
                  hover:text-white transition-colors duration-200"
                style={{ ['--tw-bg-opacity']: 1 }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = project.accent}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = ''}
              >
                <Github size={14} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live site"
                className="w-8 h-8 flex items-center justify-center rounded-full
                  text-white transition-colors duration-200"
                style={{ backgroundColor: project.accent }}
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl md:text-2xl font-bold
          text-ink-900 dark:text-cream-50 mb-3
          group-hover:text-[var(--accent-color)] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-ink-600 dark:text-cream-200/70
          leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full font-mono text-[11px]
                bg-cream-200/70 dark:bg-ink-700/70
                text-ink-600 dark:text-cream-200/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [ref, visible] = useInView()

  return (
    <section id="projects" className="section-padding bg-cream-100 dark:bg-ink-800">
      <div ref={ref} className="max-w-6xl mx-auto">

        {/* Header */}
        <div className={`mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6
          transition-all duration-700
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
              03 — Projects
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-900 dark:text-cream-50">
              Selected Work
            </h2>
          </div>
          <a
            href="https://github.com/alexmorgan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body text-sm font-medium
              text-ink-600 dark:text-cream-200/70 hover:text-accent
              transition-colors duration-200 group"
          >
            View all on GitHub
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}
