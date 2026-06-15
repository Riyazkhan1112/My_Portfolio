import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  RiMailLine,
  RiLinkedinBoxLine,
  RiGithubLine,
  RiDownloadLine,
  RiSendPlaneLine,
  RiMapPinLine,
  RiArrowRightUpLine,
} from 'react-icons/ri'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { personalInfo } from '@/data/portfolioData'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const contactLinks = [
  {
    icon: RiMailLine,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    description: 'Best way to reach me',
  },
  {
    icon: RiLinkedinBoxLine,
    label: 'LinkedIn',
    value: 'linkedin.com/in/riyazkhan-pathan',
    href: personalInfo.linkedin,
    description: 'Connect professionally',
  },
  {
    icon: RiGithubLine,
    label: 'GitHub',
    value: 'github.com/riyazkhan-pathan',
    href: personalInfo.github,
    description: 'View my code',
  },
]

export const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Wire to your backend API here
    // Example: await api.post('/contact', form)
    await new Promise((res) => setTimeout(res, 1200))
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  const inputClass =
    'w-full bg-surface border border-white/[0.07] rounded-lg px-4 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 ' +
    'focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all duration-200'

  return (
    <section id="contact" className="py-24 bg-[#0C0C0E]">
      <div className="section-container">
        <SectionHeading
          label="07 / Contact"
          title="Get In Touch"
          subtitle="Open to full-time roles, freelance projects, and interesting conversations."
          align="center"
        />

        <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">
          {/* ── Contact Form ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="card p-6 md:p-8"
          >
            <h3 className="font-display text-lg font-semibold text-zinc-100 mb-1">
              Send a Message
            </h3>
            <p className="text-sm text-zinc-500 mb-6">I'll get back to you within 24 hours.</p>

            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center py-12 gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <RiSendPlaneLine size={20} className="text-accent" />
                </div>
                <p className="font-medium text-zinc-200">Message Sent!</p>
                <p className="text-sm text-zinc-500 text-center">
                  Thanks for reaching out. I'll respond shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-zinc-400">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                      autoComplete="name"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-zinc-400">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={inputClass}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-medium text-zinc-400">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-zinc-400">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the role, project, or just say hi..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <RiSendPlaneLine size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* ── Contact Info ─────────────────────────────────────────── */}
          <div className="flex flex-col gap-4">
            {contactLinks.map((link, idx) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: idx * 0.07 }}
                  className="card-hover p-4 flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 transition-colors">
                    <Icon size={18} className="text-zinc-500 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-zinc-600 mb-0.5">{link.label}</p>
                    <p className="text-sm font-medium text-zinc-300 truncate group-hover:text-white transition-colors">
                      {link.value}
                    </p>
                    <p className="text-xs text-zinc-600">{link.description}</p>
                  </div>
                  <RiArrowRightUpLine
                    size={14}
                    className="text-zinc-700 group-hover:text-zinc-400 transition-colors flex-shrink-0"
                  />
                </motion.a>
              )
            })}

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.28 }}
              className="card p-4 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                <RiMapPinLine size={18} className="text-zinc-500" />
              </div>
              <div>
                <p className="text-xs text-zinc-600 mb-0.5">Location</p>
                <p className="text-sm font-medium text-zinc-300">{personalInfo.location}</p>
                <p className="text-xs text-zinc-600">Open to remote &amp; relocation</p>
              </div>
            </motion.div>

            {/* Resume download */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.35 }}
            >
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-secondary w-full justify-center"
              >
                <RiDownloadLine size={15} />
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
