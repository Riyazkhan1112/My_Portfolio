import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { aiJourney } from '@/data/portfolioData'

const statusConfig: Record<string, { color: string; bg: string }> = {
  Production: { color: '#00FFB2', bg: 'rgba(0, 255, 178, 0.08)' },
  Completed: { color: '#00D4FF', bg: 'rgba(0, 212, 255, 0.08)' },
  Active: { color: '#00D4FF', bg: 'rgba(0, 212, 255, 0.08)' },
  Exploring: { color: '#7C3AED', bg: 'rgba(124, 58, 237, 0.1)' },
  Learning: { color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.08)' },
  'Daily Use': { color: '#00FFB2', bg: 'rgba(0, 255, 178, 0.08)' },
}

const learningRoadmap = [
  { label: 'Agentic AI Systems', note: 'Multi-agent frameworks & orchestration' },
  { label: 'LLM Fine-tuning', note: 'Custom model training pipelines' },
  { label: 'Vector Databases', note: 'Pinecone, Weaviate, pgvector' },
  { label: 'AI Infrastructure', note: 'Serving, monitoring, cost optimization' },
]

export const AIJourney = () => {
  return (
    <section id="ai" className="py-24 bg-[#09090B]">
      <div className="section-container">
        <SectionHeading
          label="06 / AI & Innovation"
          title="AI Journey"
          subtitle="Experiments, integrations, and learnings at the intersection of software engineering and artificial intelligence."
        />

        {/* Intro statement */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="card p-6 mb-8 border-l-2 border-primary/40"
          style={{ background: 'rgba(0,212,255,0.03)' }}
        >
          <p className="text-zinc-300 text-sm leading-relaxed">
            AI is not just a tool I use — it's a domain I actively explore and integrate into engineering workflows.
            From production OpenAI integrations to building MCP servers and RAG pipelines, I'm committed to staying
            at the frontier of AI-augmented backend systems.
          </p>
        </motion.div>

        {/* AI Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {aiJourney.map((item, idx) => {
            const status = statusConfig[item.status] || statusConfig.Active
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: idx * 0.06 }}
                className="card p-5 flex flex-col gap-4 hover:border-white/[0.10] transition-colors"
              >
                {/* Title + status */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-zinc-100 leading-snug">{item.title}</h3>
                  <span
                    className="flex-shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full"
                    style={{ color: status.color, background: status.bg }}
                  >
                    {item.status}
                  </span>
                </div>

                <p className="text-xs text-zinc-500 leading-relaxed flex-1">{item.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tech-tag text-[10px] px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Learning Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 }}
          className="card p-6"
        >
          <h3 className="text-xs font-mono font-semibold text-zinc-600 uppercase tracking-widest mb-5">
            Current Learning Roadmap
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {learningRoadmap.map((item, i) => (
              <div key={item.label} className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-bold text-primary/70">{i + 1}</span>
                  </div>
                  <span className="text-sm font-medium text-zinc-200">{item.label}</span>
                </div>
                <p className="text-xs text-zinc-600 pl-7">{item.note}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
