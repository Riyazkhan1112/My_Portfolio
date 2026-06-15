import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI', href: '#ai' },
  { label: 'Contact', href: '#contact' },
]

const scrollToSection = (href: string) => {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    const offset = 72
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)

      // Track active section
      const sections = navLinks.map((l) => l.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#09090B]/90 backdrop-blur-md border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <nav className="section-container flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Go to top"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <span className="text-primary font-display font-bold text-sm">RP</span>
            </div>
            <span className="font-display font-semibold text-zinc-200 text-sm hidden sm:block group-hover:text-white transition-colors">
              Riyazkhan Pathan
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`px-3 py-1.5 rounded-md text-sm transition-all duration-200 focus:outline-none
                      ${isActive
                        ? 'text-primary bg-primary/5'
                        : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04]'
                      }`}
                  >
                    {link.label}
                  </button>
                </li>
              )
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:pathanriyaz1112@gmail.com"
              className="btn-secondary text-xs px-4 py-2"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <RiCloseLine size={20} /> : <RiMenu3Line size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#09090B]/95 backdrop-blur-md border-b border-white/[0.06] md:hidden"
          >
            <ul className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      scrollToSection(link.href)
                      setMobileOpen(false)
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-md text-sm text-zinc-300 hover:text-white hover:bg-white/[0.04] transition-all"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2 border-t border-white/[0.06] mt-2">
                <a
                  href="mailto:pathanriyaz1112@gmail.com"
                  className="btn-primary w-full justify-center text-xs"
                  onClick={() => setMobileOpen(false)}
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
