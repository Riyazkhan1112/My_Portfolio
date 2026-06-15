import { motion } from 'framer-motion'
import { RiCheckLine, RiArrowRightUpLine } from 'react-icons/ri'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { featuredProject } from '@/data/portfolioData'

export const FeaturedProject = () => {
  return (
    <section id="projects" className="py-24 bg-[#09090B]">
      <div className="section-container">
        <SectionHeading
          label="04 / Featured Project"
          title="Flagship Work"
          subtitle="A deep dive into the most impactful system I've architected and delivered."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="rounded-2xl border border-white/[0.07] overflow-hidden"
        >
          {/* ── Project header ──────────────────────────────────────── */}
          <div
            className="relative px-8 py-10 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.04) 0%, rgba(124,58,237,0.04) 100%)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {/* Background glow */}
            <div
              className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 90% 10%, rgba(0,212,255,0.06) 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="tech-tag text-[10px] px-2 py-0.5">{featuredProject.category}</span>
                    <span className="text-xs text-zinc-600">·</span>
                    <span className="text-xs text-zinc-500">{featuredProject.duration}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-zinc-50 tracking-tight leading-tight">
                    {featuredProject.title}
                  </h3>
                  <p className="text-sm text-zinc-500 mt-1">{featuredProject.company}</p>
                </div>
              </div>

              <p className="text-zinc-300 text-base leading-relaxed max-w-3xl">
                {featuredProject.overview}
              </p>
            </div>
          </div>

          {/* ── Metrics row ─────────────────────────────────────────── */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/[0.06] bg-white/[0.01]">
            {featuredProject.metrics.map((metric) => (
              <div key={metric.label} className="px-6 py-5 flex flex-col gap-1">
                <span className="font-display text-2xl font-bold text-primary">{metric.value}</span>
                <span className="text-xs text-zinc-500">{metric.label}</span>
              </div>
            ))}
          </div>

          {/* ── Problem / Solution ──────────────────────────────────── */}
          <div
            className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="px-8 py-7">
              <h4 className="text-xs font-mono font-semibold text-zinc-600 uppercase tracking-widest mb-3">
                The Problem
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed">{featuredProject.problem}</p>
            </div>
            <div className="px-8 py-7">
              <h4 className="text-xs font-mono font-semibold text-zinc-600 uppercase tracking-widest mb-3">
                The Solution
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed">{featuredProject.solution}</p>
            </div>
          </div>

          {/* ── Tech stack ──────────────────────────────────────────── */}
          <div
            className="px-8 py-6 flex flex-wrap items-center gap-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-wider mr-2">
              Stack
            </span>
            {featuredProject.techStack.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>

          {/* ── My Contributions + Architecture ─────────────────────── */}
          <div
            className="grid md:grid-cols-[1fr_280px] divide-y md:divide-y-0 md:divide-x divide-white/[0.06]"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            {/* Contributions */}
            <div className="px-8 py-7">
              <h4 className="text-xs font-mono font-semibold text-zinc-600 uppercase tracking-widest mb-4">
                My Contributions
              </h4>
              <ul className="flex flex-col gap-2.5">
                {featuredProject.contributions.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-400">
                    <RiCheckLine
                      size={15}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture */}
            <div className="px-8 py-7">
              <h4 className="text-xs font-mono font-semibold text-zinc-600 uppercase tracking-widest mb-4">
                Architecture Patterns
              </h4>
              <div className="flex flex-col gap-2">
                {featuredProject.architecture.map((arch) => (
                  <div key={arch} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary/60" />
                    <span className="text-sm text-zinc-400">{arch}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <p className="text-xs text-zinc-600 mb-3">Want to know more?</p>
                <a
                  href="mailto:pathanriyaz1112@gmail.com"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Let's talk
                  <RiArrowRightUpLine size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
