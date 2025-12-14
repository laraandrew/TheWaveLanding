'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CTAButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  href?: string
  onClick?: () => void
  className?: string
}

export function CTAButton({ 
  children, 
  variant = 'primary', 
  href, 
  onClick,
  className = '' 
}: CTAButtonProps) {
  const baseClasses = 'px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block text-center font-bebas'
  const variantClasses = variant === 'primary'
    ? 'bg-[#262E40] text-[#E6E8E6] hover:bg-[#3772FF] hover:text-[#E6E8E6]'
    : 'bg-transparent border-2 border-[#262E40] text-[#262E40] hover:bg-[#3772FF] hover:text-[#1C1C1C]'

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return <a href={href}>{buttonContent}</a>
  }

  return <button onClick={onClick}>{buttonContent}</button>
}

