import { motion } from 'framer-motion'
import { RiMapPinLine, RiBriefcaseLine } from 'react-icons/ri'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { experience } from '@/data/portfolioData'

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#09090B]">
      <div className="section-container">
        <SectionHeading
          label="02 / Experience"
          title="Work Experience"
          subtitle="Where I've worked and what I've shipped."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/[0.06] hidden md:block" />

          <div className="flex flex-col gap-10">
            {experience.map((exp, expIdx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: expIdx * 0.1 }}
                className="md:pl-8 relative"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-[-4.5px] top-6 w-2.5 h-2.5 rounded-full bg-primary/40 border-2 border-primary ring-4 ring-[#09090B]" />

                {/* Company header card */}
                <div className="card p-5 mb-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <RiBriefcaseLine size={14} className="text-zinc-500" />
                        <span className="text-xs text-zinc-500 font-medium">{exp.duration}</span>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-medium text-accent/80">
                            <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-lg font-semibold text-zinc-100">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="text-base font-medium text-primary">{exp.company}</span>
                        <span className="text-xs text-zinc-600">{exp.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-600">
                      <RiMapPinLine size={13} />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 mt-3 leading-relaxed">{exp.overview}</p>

                  {/* Core tech stack */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div className="flex flex-col gap-3 md:pl-4">
                  {exp.projects.map((project, pIdx) => (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 + pIdx * 0.08 }}
                      className="relative pl-4 border-l border-white/[0.06]"
                    >
                      {/* Project header */}
                      <div className="mb-3">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary/60 flex-shrink-0" />
                          <h4 className="text-sm font-semibold text-zinc-200">{project.name}</h4>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t) => (
                            <span key={t} className="tech-tag text-[10px] px-2 py-0.5">{t}</span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="flex flex-col gap-2">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2.5 text-sm text-zinc-400 leading-relaxed"
                          >
                            <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2.5 flex-shrink-0" />
                            <span
                              dangerouslySetInnerHTML={{
                                __html: highlight.replace(
                                  /(\d+%|\d+\+)/g,
                                  '<strong class="text-zinc-200">$1</strong>',
                                ),
                              }}
                            />
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
