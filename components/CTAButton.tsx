'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CTAButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  href?: string
  onClick?: () => void
  className?: string
  ariaLabel?: string
}

export function CTAButton({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  ariaLabel,
}: CTAButtonProps) {
  const baseClasses =
    'px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block text-center font-bebas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3772FF]'
  const variantClasses =
    variant === 'primary'
      ? 'bg-[#262E40] text-[#E6E8E6] hover:bg-[#3772FF] hover:text-[#E6E8E6]'
      : 'bg-transparent border-2 border-[#262E40] text-[#262E40] hover:bg-[#3772FF] hover:text-[#1C1C1C]'

  const classes = `${baseClasses} ${variantClasses} ${className}`

  if (href) {
    const isExternal = href.startsWith('http://') || href.startsWith('https://')
    return (
      <motion.a
        href={href}
        aria-label={ariaLabel}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
    >
      {children}
    </motion.button>
  )
}