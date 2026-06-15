import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { RiCheckLine } from 'react-icons/ri'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { personalInfo, certifications, education } from '@/data/portfolioData'

const coreExpertise = [
  'Scalable Microservices Architecture',
  'REST API Design & Development',
  'SQL Server & PostgreSQL Optimization',
  'AWS Cloud Deployment & Operations',
  'Event-Driven & Async Systems',
  'AI/LLM API Integration',
]

const statCards = [
  { value: 2, suffix: '.5+', label: 'Years of Experience', sub: 'Professional Engineering' },
  { value: 10, suffix: '+', label: 'Projects Delivered', sub: 'End-to-End Ownership' },
  { value: 50, suffix: '+', label: 'APIs Built', sub: 'REST & Microservices' },
  { value: 25, suffix: '+', label: 'Technologies', sub: 'Across Stack' },
]

export const About = () => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 bg-[#0C0C0E]">
      <div className="section-container">
        <SectionHeading
          label="01 / About"
          title="About Me"
          subtitle="A brief on who I am and what drives me to build better systems."
        />

        <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start" ref={ref}>
          {/* ── Left: Bio ─────────────────────────────────────────────── */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <p className="text-zinc-300 text-base leading-[1.8]">
                {personalInfo.summary}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="flex flex-col gap-3"
            >
              <h3 className="text-sm font-semibold text-zinc-200">Core Expertise</h3>
              <ul className="grid sm:grid-cols-2 gap-2">
                {coreExpertise.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                    <RiCheckLine
                      size={16}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Education & Cert */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              className="flex flex-col gap-3 pt-2"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Education card */}
                <div className="card flex-1 p-4">
                  <p className="text-[10px] section-label mb-2">Education</p>
                  <p className="text-sm font-semibold text-zinc-200 leading-snug">
                    {education.degree}
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">{education.institution}</p>
                  <p className="text-xs text-zinc-600 mt-0.5">{education.duration}</p>
                </div>

                {/* Cert card */}
                {certifications.map((cert) => (
                  <div key={cert.name} className="card flex-1 p-4">
                    <p className="text-[10px] section-label mb-2">Certification</p>
                    <div className="flex items-start gap-2">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded"
                        style={{ color: cert.color, background: `${cert.color}15` }}
                      >
                        {cert.badge}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-zinc-200 leading-snug">
                          {cert.name}
                        </p>
                        <p className="text-xs text-zinc-500 mt-0.5">{cert.validity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: Stats grid ─────────────────────────────────────── */}
          <div className="grid grid-cols-2 gap-4">
            {statCards.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 + i * 0.07 }}
                className="card p-5 flex flex-col gap-1"
              >
                <div className="font-display text-3xl font-bold text-zinc-50">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={0}
                  />
                </div>
                <p className="text-sm font-medium text-zinc-300">{stat.label}</p>
                <p className="text-xs text-zinc-600">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
