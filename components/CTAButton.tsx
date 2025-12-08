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
  const baseClasses = 'px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block text-center'
  const variantClasses = variant === 'primary' 
    ? 'bg-[#3B82F6] text-white hover:bg-blue-600' 
    : 'bg-transparent border-2 border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-black'

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

