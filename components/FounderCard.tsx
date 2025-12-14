'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface FounderCardProps {
  name: string
  title: string
  image: string
  bio: string
  index: number
}

export function FounderCard({ name, title, image, bio, index }: FounderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-gray-900 dark:bg-gray-800 rounded-xl p-6 lg:p-8 shadow-lg"
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden mb-6 ring-4 ring-[#3772FF]/20">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-[#3772FF] mb-4 font-semibold">{title}</p>
        <p className="text-gray-300 leading-relaxed">{bio}</p>
      </div>
    </motion.div>
  )
}

