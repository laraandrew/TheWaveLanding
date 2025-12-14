'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TierCardProps {
  title: string
  description: string
  features: string[]
  index: number
}

export function TierCard({ title, description, features, index }: TierCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-gray-900 dark:bg-gray-800 rounded-xl p-8 lg:p-10 shadow-lg border border-gray-800 hover:border-[#3772FF]/50 transition-colors"
    >
      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-gray-300">
            <svg className="w-5 h-5 text-[#3772FF] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

