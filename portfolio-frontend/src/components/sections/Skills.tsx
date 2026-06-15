import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { skillCategories } from '@/data/portfolioData'

// Category accent colors
const categoryColors: Record<string, string> = {
  Backend: '#00D4FF',
  Databases: '#7C3AED',
  Cloud: '#FF9900',
  DevOps: '#00FFB2',
  'AI & LLMs': '#EC4899',
  Languages: '#F59E0B',
  Tools: '#6B7280',
}

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filtered = activeCategory
    ? skillCategories.filter((c) => c.name === activeCategory)
    : skillCategories

  return (
    <section id="skills" className="py-24 bg-[#0C0C0E]">
      <div className="section-container">
        <SectionHeading
          label="03 / Skills"
          title="Technical Skills"
          subtitle="Technologies and tools I use to build production-grade systems."
        />

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="flex flex-wrap gap-2 mb-10"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
              activeCategory === null
                ? 'bg-white/[0.08] text-zinc-100 border border-white/[0.12]'
                : 'text-zinc-500 hover:text-zinc-300 border border-transparent hover:border-white/[0.06]'
            }`}
          >
            All
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name === activeCategory ? null : cat.name)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                activeCategory === cat.name
                  ? 'border text-zinc-100'
                  : 'text-zinc-500 hover:text-zinc-300 border border-transparent hover:border-white/[0.06]'
              }`}
              style={
                activeCategory === cat.name
                  ? {
                      borderColor: `${categoryColors[cat.name]}40`,
                      background: `${categoryColors[cat.name]}0A`,
                      color: categoryColors[cat.name],
                    }
                  : {}
              }
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Skill categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((category, idx) => {
            const accentColor = categoryColors[category.name] || '#00D4FF'
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: idx * 0.04 }}
                layout
                className="card p-5 flex flex-col gap-4"
              >
                {/* Category header */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  />
                  <h3
                    className="text-xs font-semibold tracking-wide uppercase"
                    style={{ color: accentColor }}
                  >
                    {category.name}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium
                                 bg-white/[0.03] text-zinc-300 border border-white/[0.06]
                                 hover:text-zinc-100 hover:border-white/[0.12] transition-colors duration-150 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Concepts row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 }}
          className="mt-6 card p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-zinc-500" />
            <h3 className="text-xs font-semibold tracking-wide uppercase text-zinc-500">
              Concepts & Methodologies
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Distributed Systems',
              'System Design',
              'LLD / HLD',
              'API Design',
              'Event-Driven Architecture',
              'WebSockets',
              'Agile / Scrum',
              'Message Queues',
              'Observability',
              'Performance Optimization',
            ].map((concept) => (
              <span
                key={concept}
                className="tech-tag"
              >
                {concept}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
