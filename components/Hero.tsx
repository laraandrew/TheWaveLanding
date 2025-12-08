'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CTAButton } from './CTAButton'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 lg:pt-24 bg-black dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Modernize Your Business With AI Agents That Work{' '}
              <span className="text-[#00FF7F]">24/7</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              We help small and medium-sized businesses eliminate bottlenecks, reduce labor costs, capture more leads, and automate operations with intelligent AI systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <CTAButton href="#contact" variant="primary">
                Book Your Automation Audit
              </CTAButton>
              <motion.a
                href="tel:+13057534014"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg font-semibold text-lg border-2 border-[#00FF7F] text-[#00FF7F] hover:bg-[#00FF7F] hover:text-black transition-colors inline-block text-center"
              >
                Call Us: (305) 753-4014
              </motion.a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://picsum.photos/seed/hero/1600/900"
              alt="AI Automation"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

