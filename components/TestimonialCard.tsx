'use client'

import { motion } from 'framer-motion'

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  index: number
}

export function TestimonialCard({ quote, author, role, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-gray-900 dark:bg-gray-800 rounded-xl p-6 lg:p-8 shadow-lg border border-gray-800"
    >
      <svg className="w-10 h-10 text-[#00FF7F] mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-gray-200 text-lg mb-6 leading-relaxed italic">"{quote}"</p>
      <div className="border-t border-gray-700 pt-4">
        <p className="text-white font-semibold">{author}</p>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </motion.div>
  )
}

