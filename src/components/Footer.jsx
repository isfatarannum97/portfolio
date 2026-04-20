// components/Footer.jsx
// Simple footer with social links and copyright

import { Github, Linkedin, Twitter, Heart } from 'lucide-react'

const SOCIALS = [
  { href: 'https://github.com/alexmorgan',   icon: <Github size={18} />,   label: 'GitHub' },
  { href: 'https://linkedin.com/in/alexmorgan', icon: <Linkedin size={18} />, label: 'LinkedIn' },
  { href: 'https://twitter.com/alexmorgan',  icon: <Twitter size={18} />,  label: 'Twitter' },
]

const FOOTER_LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'About',   href: '#about' },
  { label: 'Projects',href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-ink-900 dark:bg-black text-cream-200/60 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">

          {/* Logo */}
          <span className="font-display text-2xl font-bold text-cream-50">
            AM<span className="text-accent">.</span>
          </span>

          {/* Footer nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {FOOTER_LINKS.map(({ label, href }) => (
              <button
                key={label}
                onClick={() => scrollTo(href)}
                className="font-body text-sm hover:text-accent transition-colors duration-200"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex gap-3">
            {SOCIALS.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-full
                  border border-cream-200/10
                  text-cream-200/50 hover:text-accent hover:border-accent/30
                  transition-all duration-200 hover:-translate-y-0.5"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream-200/10 pt-8 flex flex-col md:flex-row
          items-center justify-between gap-4 text-center">
          <p className="font-body text-xs">
            © {new Date().getFullYear()} Alex Morgan. All rights reserved.
          </p>
          <p className="font-body text-xs flex items-center gap-1.5">
            Built with React & Tailwind
            <Heart size={11} className="text-accent fill-accent" />
          </p>
        </div>
      </div>
    </footer>
  )
}
