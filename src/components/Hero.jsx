// components/Hero.jsx
// Full-viewport intro: name, title, bio blurb, CTA buttons

import { ArrowDown, Download, Github, Linkedin, Twitter } from 'lucide-react'

// ── Decorative animated ring ──
function Ring({ size, delay, opacity }) {
  return (
    <div
      style={{ width: size, height: size, animationDelay: delay, opacity }}
      className="absolute rounded-full border border-accent/30 animate-ping"
    />
  )
}

export default function Hero() {
  const scrollToAbout = () =>
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center
        overflow-hidden pt-16"
    >
      {/* ── Background decoration ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Warm gradient blob */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px]
          rounded-full bg-gradient-to-br from-accent/10 via-gold/10 to-transparent
          blur-3xl" />
        {/* Cool gradient blob */}
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px]
          rounded-full bg-gradient-to-tr from-blue-400/5 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12
        items-center py-20 px-6 md:px-10 lg:px-16">

        {/* ── Left: Text content ── */}
        <div className="space-y-6">
          {/* Eyebrow */}
          <p className="font-mono text-sm text-accent tracking-widest uppercase
            opacity-0 animate-fade-up animate-delay-100"
            style={{ animationFillMode: 'forwards' }}>
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="font-display text-5xl md:text-7xl font-black leading-none
            text-ink-900 dark:text-cream-50
            opacity-0 animate-fade-up animate-delay-200"
            style={{ animationFillMode: 'forwards' }}>
            Alex<br />
            <span className="text-gradient">Morgan</span>
          </h1>

          {/* Role */}
          <p className="font-body text-lg md:text-xl font-light
            text-ink-600 dark:text-cream-200
            opacity-0 animate-fade-up animate-delay-300"
            style={{ animationFillMode: 'forwards' }}>
            Full Stack Developer & UI Designer
          </p>

          {/* Bio snippet */}
          <p className="font-body text-base text-ink-600 dark:text-cream-200/70
            max-w-md leading-relaxed
            opacity-0 animate-fade-up animate-delay-400"
            style={{ animationFillMode: 'forwards' }}>
            I craft performant, beautiful digital experiences — from elegant
            interfaces to robust back-end systems. Passionate about clean code
            and thoughtful design.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4
            opacity-0 animate-fade-up animate-delay-500"
            style={{ animationFillMode: 'forwards' }}>
            {/* Primary CTA */}
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-accent text-white font-body font-medium text-sm
                rounded-full transition-all duration-300
                hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25
                hover:-translate-y-0.5 active:translate-y-0"
            >
              View My Work
            </button>

            {/* Resume download */}
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-ink-700/20 dark:border-cream-200/20
                text-ink-700 dark:text-cream-200 font-body font-medium text-sm
                rounded-full flex items-center gap-2
                transition-all duration-300 hover:border-accent hover:text-accent
                hover:-translate-y-0.5"
            >
              <Download size={15} />
              Resume
            </a>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 pt-2
            opacity-0 animate-fade-up animate-delay-500"
            style={{ animationFillMode: 'forwards' }}>
            {[
              { href: 'https://github.com', icon: <Github size={18} />, label: 'GitHub' },
              { href: 'https://linkedin.com', icon: <Linkedin size={18} />, label: 'LinkedIn' },
              { href: 'https://twitter.com', icon: <Twitter size={18} />, label: 'Twitter' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-full
                  border border-ink-700/15 dark:border-cream-200/15
                  text-ink-600 dark:text-cream-200/70
                  transition-all duration-200 hover:border-accent hover:text-accent
                  hover:-translate-y-0.5"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Right: Profile image + decorative rings ── */}
        <div className="flex items-center justify-center
          opacity-0 animate-fade-in animate-delay-400"
          style={{ animationFillMode: 'forwards' }}>
          <div className="relative">
            {/* Animated pulse rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Ring size="340px" delay="0s"   opacity={0.15} />
              <Ring size="280px" delay="1s"   opacity={0.2}  />
              <Ring size="220px" delay="2s"   opacity={0.25} />
            </div>

            {/* Profile image container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full
              bg-gradient-to-br from-accent/20 via-gold/10 to-cream-200
              dark:from-accent/30 dark:via-gold/20 dark:to-ink-700
              flex items-center justify-center
              border-4 border-cream-50 dark:border-ink-800
              shadow-2xl">
              {/* Placeholder avatar — replace src with a real photo */}
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden bg-cream-200 dark:bg-ink-700">
                <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="bg" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#c84b31" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#c9a84c" stopOpacity="0.15"/>
                    </radialGradient>
                  </defs>
                  <rect width="200" height="200" fill="url(#bg)"/>
                  {/* Body */}
                  <ellipse cx="100" cy="190" rx="55" ry="40" fill="#c84b31" opacity="0.4"/>
                  {/* Head */}
                  <circle cx="100" cy="90" r="42" fill="#e8c9a0"/>
                  {/* Hair */}
                  <ellipse cx="100" cy="62" rx="42" ry="22" fill="#2d1810"/>
                  {/* Eyes */}
                  <circle cx="86" cy="88" r="5" fill="#2d1810"/>
                  <circle cx="114" cy="88" r="5" fill="#2d1810"/>
                  <circle cx="87" cy="87" r="1.5" fill="white"/>
                  <circle cx="115" cy="87" r="1.5" fill="white"/>
                  {/* Smile */}
                  <path d="M88 102 Q100 114 112 102" stroke="#a0694a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  {/* Shirt collar */}
                  <path d="M68 148 L100 135 L132 148 L140 165 L60 165 Z" fill="#c84b31" opacity="0.7"/>
                </svg>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-2 -right-2
              bg-cream-50 dark:bg-ink-800
              border border-cream-200 dark:border-ink-700
              rounded-2xl px-4 py-2 shadow-lg
              flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-body text-xs font-medium text-ink-700 dark:text-cream-200">
                Available for work
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        aria-label="Scroll down"
        className="absolute bottom-10 left-1/2 -translate-x-1/2
          flex flex-col items-center gap-1 text-ink-600/50 dark:text-cream-200/30
          transition-colors duration-200 hover:text-accent
          animate-bounce"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} />
      </button>
    </section>
  )
}