import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  decimals?: number
  className?: string
  duration?: number
}

export const AnimatedCounter = ({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
  duration = 2200,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration, bounce: 0 })
  const display = useTransform(spring, (val) => `${prefix}${val.toFixed(decimals)}${suffix}`)

  useEffect(() => {
    if (inView) motionValue.set(value)
  }, [inView, value, motionValue])

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  )
}
