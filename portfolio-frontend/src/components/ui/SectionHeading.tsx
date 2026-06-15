import { motion } from 'framer-motion'

interface SectionHeadingProps {
  label: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export const SectionHeading = ({
  label,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) => {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`flex flex-col gap-3 mb-14 ${alignClass}`}
    >
      <span className="section-label">{label}</span>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-50 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-zinc-400 text-base max-w-xl leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}
