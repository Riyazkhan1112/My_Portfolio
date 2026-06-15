import { motion } from 'framer-motion'
import { RiDownloadLine, RiArrowRightLine, RiGithubLine, RiLinkedinBoxLine, RiMailLine } from 'react-icons/ri'
import { useTypewriter } from '@/hooks/useTypewriter'
import { personalInfo } from '@/data/portfolioData'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
})

const scrollToContact = () => {
  const el = document.getElementById('contact')
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export const Hero = () => {
  const typewriterText = useTypewriter(personalInfo.roles, 70, 38, 1800)

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#09090B]"
    >
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 bg-dot-grid bg-dot-grid opacity-100 pointer-events-none" />

      {/* Very faint gradient orb — top right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(0,212,255,0.04) 0%, transparent 65%)',
        }}
      />
      {/* Secondary orb — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(124,58,237,0.04) 0%, transparent 65%)',
        }}
      />

      <div className="section-container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-center">
          {/* ── Left column ─────────────────────────────────────────── */}
          <div className="flex flex-col gap-6">
            {/* Availability badge */}
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/[0.04] text-xs font-medium text-accent/80">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Open to new opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div {...fadeUp(0.08)} className="flex flex-col gap-1">
              <p className="text-zinc-500 text-sm font-medium">Hello, I'm</p>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-zinc-50 tracking-tight leading-[1.05]">
                Riyazkhan
                <br />
                <span className="text-zinc-300">Pathan</span>
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div {...fadeUp(0.15)} className="h-8 flex items-center">
              <span className="font-mono text-lg font-medium text-primary">
                {typewriterText}
                <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-cursor-blink align-middle" />
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              {...fadeUp(0.22)}
              className="text-zinc-400 text-base leading-relaxed max-w-lg"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3 pt-1">
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-primary"
              >
                <RiDownloadLine size={16} />
                Download Resume
              </a>
              <button onClick={scrollToContact} className="btn-secondary">
                Contact Me
                <RiArrowRightLine size={15} />
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              {...fadeUp(0.38)}
              className="flex items-center gap-1 pt-2"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-500 hover:text-zinc-200 hover:bg-white/[0.04] rounded-md transition-all"
                aria-label="GitHub"
              >
                <RiGithubLine size={19} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-500 hover:text-zinc-200 hover:bg-white/[0.04] rounded-md transition-all"
                aria-label="LinkedIn"
              >
                <RiLinkedinBoxLine size={19} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 text-zinc-500 hover:text-zinc-200 hover:bg-white/[0.04] rounded-md transition-all"
                aria-label="Email"
              >
                <RiMailLine size={19} />
              </a>
              <div className="h-4 w-px bg-white/[0.08] mx-2" />
              <span className="text-xs text-zinc-600 font-mono">{personalInfo.location}</span>
            </motion.div>
          </div>

          {/* ── Right column: Profile Image ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative hidden lg:flex justify-center"
          >
            {/* Outer decorative ring */}
            <div className="absolute inset-[-12px] rounded-full border border-white/[0.04]" />
            <div className="absolute inset-[-24px] rounded-full border border-white/[0.02]" />

            {/* Image container */}
            <div className="relative w-72 h-72">
              <div className="w-full h-full rounded-full overflow-hidden border border-white/[0.08] bg-surface shadow-2xl">
                {/* Placeholder — replace with real photo */}
                <div className="w-full h-full bg-gradient-to-br from-secondary/10 via-surface-200 to-primary/10 flex flex-col items-center justify-center gap-3">
                  {/* Person silhouette */}
                  <svg
                    viewBox="0 0 120 140"
                    className="w-40 h-40 opacity-20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="60" cy="45" r="28" fill="#fafafa" />
                    <ellipse cx="60" cy="115" rx="50" ry="35" fill="#fafafa" />
                  </svg>
                  <span className="font-display text-2xl font-bold text-white/20 -mt-6">RP</span>
                </div>
              </div>

              {/* Currently at badge */}
              <div className="absolute -bottom-4 -right-4 bg-surface border border-white/[0.08] rounded-xl px-3 py-2 shadow-xl">
                <p className="text-[10px] text-zinc-500 font-medium mb-0.5">Currently at</p>
                <p className="text-xs font-semibold text-zinc-200">Centralogic</p>
              </div>

              {/* AWS badge */}
              <div className="absolute -top-3 -left-3 bg-surface border border-white/[0.08] rounded-xl px-3 py-2 shadow-xl flex items-center gap-2">
                <span className="text-[10px] font-bold text-[#FF9900]">AWS</span>
                <p className="text-[10px] text-zinc-500">Certified</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats bar ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {[
            { value: '2.5+', label: 'Years Experience' },
            { value: '10+', label: 'Projects Delivered' },
            { value: '50+', label: 'APIs Built' },
            { value: '25+', label: 'Technologies' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-display text-2xl font-bold text-zinc-50">{stat.value}</span>
              <span className="text-xs text-zinc-500">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
