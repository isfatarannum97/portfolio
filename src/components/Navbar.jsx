// components/Navbar.jsx
// Sticky top nav with logo, smooth-scroll links, dark mode toggle, mobile menu

import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

// Nav links — href targets matching section IDs
const NAV_LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar({ dark, setDark }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeSection, setActive] = useState('home')

  // ── Detect scroll to add backdrop ──
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Intersection Observer to highlight active section ──
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => sections.forEach(s => observer.unobserve(s))
  }, [])

  const handleLink = (href) => {
    setMenuOpen(false)
    // Smooth scroll to section
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-cream-50/80 dark:bg-ink-900/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleLink('#home')}
          className="font-display text-xl font-bold tracking-tight text-ink-900 dark:text-cream-50"
        >
          AM<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <button
                onClick={() => handleLink(href)}
                className={`font-body text-sm font-medium transition-colors duration-200
                  ${activeSection === href.slice(1)
                    ? 'text-accent'
                    : 'text-ink-600 dark:text-cream-200 hover:text-accent dark:hover:text-accent'
                  }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Dark mode + mobile hamburger */}
        <div className="flex items-center gap-3">
          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(d => !d)}
            aria-label="Toggle dark mode"
            className="w-9 h-9 flex items-center justify-center rounded-full
              border border-ink-700/10 dark:border-cream-200/10
              text-ink-700 dark:text-cream-200
              hover:bg-ink-700/5 dark:hover:bg-cream-200/5
              transition-colors duration-200"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full
              border border-ink-700/10 dark:border-cream-200/10
              text-ink-700 dark:text-cream-200
              hover:bg-ink-700/5 dark:hover:bg-cream-200/5
              transition-colors duration-200"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream-50/95 dark:bg-ink-900/95 backdrop-blur-md border-t border-ink-700/10 dark:border-cream-200/10">
          <ul className="flex flex-col py-4">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <button
                  onClick={() => handleLink(href)}
                  className={`w-full text-left px-6 py-3 font-body text-sm font-medium transition-colors
                    ${activeSection === href.slice(1)
                      ? 'text-accent'
                      : 'text-ink-700 dark:text-cream-200 hover:text-accent'
                    }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
