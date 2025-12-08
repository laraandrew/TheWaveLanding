'use client'

import { SplashScreen } from '@/components/SplashScreen'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { SectionWrapper } from '@/components/SectionWrapper'
import { CTAButton } from '@/components/CTAButton'
import { FounderCard } from '@/components/FounderCard'
import { TierCard } from '@/components/TierCard'
import { TestimonialCard } from '@/components/TestimonialCard'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  const industries = [
    'Med Spas',
    'Clinics',
    'Salons',
    'HVAC & Home Services',
    'Real Estate Teams',
    'Fitness Clubs',
    'Automotive Shops',
    'Law Firms',
    'Tutoring & Education',
    'Photographers / Event Services',
  ]

  return (
    <main className="bg-black dark:bg-black text-white">
      <SplashScreen />
      <Header />

      <Hero />

      {/* Section 2 - Who We Are */}
      <SectionWrapper id="who-we-are" className="bg-gray-900 dark:bg-gray-900">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Your AI Systems Architect & Automation Partner
            </h2>
            <div className="space-y-4 text-lg text-gray-300">
              <p className="font-semibold text-xl text-[#00FF7F] mb-4">We don't sell "bots."</p>
              <p className="mb-4">We build intelligent operational systems that:</p>
              <ul className="space-y-3 ml-6">
                {[
                  'Modernize workflows',
                  'Eliminate repetitive admin labor',
                  'Capture and convert more leads',
                  'Provide 24/7 customer coverage',
                  'Reduce operational waste',
                  'Increase revenue while you sleep',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-[#00FF7F] mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[400px] lg:h-[500px] rounded-xl overflow-hidden"
          >
            <Image
              src="https://picsum.photos/seed/who-we-are/1200/700"
              alt="AI Systems"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Section 3 - The 4 Core AI Agents */}
      <SectionWrapper id="agents" className="bg-black dark:bg-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            The 4 Core AI Agents Every SMB Needs
          </h2>
          <h3 className="text-2xl lg:text-3xl text-[#00FF7F] mb-4">Your Starter Automation Stack</h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            These four agents replace manual labor, stop revenue leakage, and create always-on coverage for your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Lead Generation Agent',
              description: 'Captures, qualifies, and routes leads instantly.',
              benefit: '→ More revenue, less human follow-up.',
              icon: '🚀',
            },
            {
              title: 'Phone Agent',
              description: 'Answers calls 24/7, books appointments, handles FAQs.',
              benefit: '→ Never miss another opportunity.',
              icon: '📞',
            },
            {
              title: 'Email Agent',
              description: 'Responds instantly, nurtures inquiries, accelerates conversions.',
              benefit: '→ Faster deals, happier customers.',
              icon: '✉️',
            },
            {
              title: 'Scheduling Agent',
              description: 'Books, reschedules, confirms, and sends reminders.',
              benefit: '→ Dramatically reduces admin workload.',
              icon: '📅',
            },
          ].map((agent, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-gray-900 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full h-48">
                <Image
                  src={`https://picsum.photos/seed/agent${idx + 1}/500/350`}
                  alt={agent.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">{agent.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{agent.title}</h3>
                <p className="text-gray-300 mb-3">{agent.description}</p>
                <p className="text-[#00FF7F] font-semibold">{agent.benefit}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Section 4 - Meet the Founders */}
      <SectionWrapper id="founders" className="bg-gray-900 dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Meet the Founders Driving Your Automation Success
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <FounderCard
            name="Andrew Lara"
            title="CTO / Technical Lead"
            image="https://picsum.photos/seed/founderAndrew/400/400"
            bio="Andrew is the engineering backbone of the company — a Computer Science developer specializing in AI agent design, automation architecture, and scalable systems. He builds the phone, email, scheduling, and lead-generation agents, integrating them seamlessly with CRMs, calendars, and communication tools. Andrew owns reliability, security, performance, and the entire technical engine behind our AI operations."
            index={0}
          />
          <FounderCard
            name="Mateo"
            title="CEO / Business Lead"
            image="https://picsum.photos/seed/founderMateo/400/400"
            bio="Mateo leads sales, strategy, client relations, and operational scaling. With a background in business systems optimization, he focuses on understanding client needs, managing onboarding, overseeing finances, and driving revenue growth. Mateo ensures every automation deployment is aligned with business goals, ROI, and long-term operational efficiency."
            index={1}
          />
        </div>
      </SectionWrapper>

      {/* Section 5 - Tiers */}
      <SectionWrapper id="tiers" className="bg-black dark:bg-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Flexible Automation Packages Built Around Your Needs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No pricing is listed here — every quote is customized after reviewing your operational data, workload, and specific automation needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <TierCard
            title="Tier 1 — Automation Starter"
            description="For small service businesses or solo owners."
            features={[
              'Phone agent',
              'Email agent',
              'Scheduling automation',
              'CRM integration',
              '30-day optimization',
            ]}
            index={0}
          />
          <TierCard
            title="Tier 2 — Growth Systems"
            description="For growing teams needing deeper automation."
            features={[
              'Everything in Tier 1',
              'Lead-gen agent',
              'Website chat',
              'SMS follow-ups',
              'Funnel automation',
              'KPI dashboard',
            ]}
            index={1}
          />
          <TierCard
            title="Tier 3 — AI COO"
            description="A fully modernized AI-driven operations layer."
            features={[
              'Multi-agent systems',
              'Sales automations',
              'HR onboarding',
              'Finance reporting',
              'Internal workflow modernization',
            ]}
            index={2}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-64 lg:h-96 rounded-xl overflow-hidden"
        >
          <Image
            src="https://picsum.photos/seed/tiers/1600/600"
            alt="Automation Packages"
            fill
            className="object-cover"
          />
        </motion.div>
      </SectionWrapper>

      {/* Section 6 - Why Businesses Need This Now */}
      <SectionWrapper id="why-now" className="bg-gray-900 dark:bg-gray-900">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Stop Losing Money to Inefficiency
            </h2>
            <div className="space-y-4 mb-8">
              {[
                'Missed calls = lost revenue',
                'Slow follow-up = lost deals',
                'Manual admin = wasted labor hours',
                'Overworked staff = burnout',
                'No 24/7 coverage = competitors win',
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start"
                >
                  <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-lg text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#00FF7F]/20 to-[#3B82F6]/20 rounded-xl p-8 lg:p-12"
          >
            <h3 className="text-3xl font-bold text-white mb-6">AI becomes:</h3>
            <div className="space-y-4">
              {[
                'A profit multiplier',
                'A modern workforce amplifier',
                'A strategic operational upgrade',
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex items-start"
                >
                  <svg className="w-6 h-6 text-[#00FF7F] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span className="text-xl text-white font-semibold">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Section 7 - Industries We Serve */}
      <SectionWrapper id="industries" className="bg-black dark:bg-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Perfect for High-Volume Service Businesses
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-gray-900 dark:bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-800 transition-colors border border-gray-800 hover:border-[#00FF7F]/50"
            >
              <div className="text-3xl mb-3">🏢</div>
              <p className="text-white font-semibold">{industry}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-64 lg:h-96 rounded-xl overflow-hidden"
        >
          <Image
            src="https://picsum.photos/seed/industries/1600/900"
            alt="Industries"
            fill
            className="object-cover"
          />
        </motion.div>
      </SectionWrapper>

      {/* Section 8 - Testimonials */}
      <SectionWrapper id="testimonials" className="bg-gray-900 dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What Business Owners Are Saying
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard
            quote="Within 30 days, our phone agent booked more appointments than our front desk did in two months."
            author="Emily R."
            role="Med Spa Owner"
            index={0}
          />
          <TestimonialCard
            quote="We used to miss 15–20 calls weekly. Now every lead is captured instantly."
            author="Marcus D."
            role="HVAC Company"
            index={1}
          />
          <TestimonialCard
            quote="Our scheduling agent saves us 15 hours per week."
            author="Sarah L."
            role="Salon Owner"
            index={2}
          />
          <TestimonialCard
            quote="A genuine business transformation. We operate smoother, faster, and smarter."
            author="Jason P."
            role="PT Clinic"
            index={3}
          />
        </div>
      </SectionWrapper>

      {/* Section 9 - Our Process */}
      <SectionWrapper id="process" className="bg-black dark:bg-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            How We Transform Your Business in 3 Steps
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              step: '1',
              title: 'Operational Audit',
              description: 'Identify bottlenecks, leakage, inefficiencies.',
            },
            {
              step: '2',
              title: 'AI System Design',
              description: 'Architect the exact agents needed.',
            },
            {
              step: '3',
              title: 'Deployment & Optimization',
              description: 'Integrate, test, refine, monitor.',
            },
          ].map((process, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-gray-900 dark:bg-gray-800 rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-[#00FF7F] rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-6">
                {process.step}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{process.title}</h3>
              <p className="text-gray-300">{process.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <CTAButton href="#contact" variant="primary">
            Start Your Automation Audit
          </CTAButton>
        </div>
      </SectionWrapper>

      {/* Section 10 - Full CTA Section */}
      <SectionWrapper id="contact" className="bg-gradient-to-br from-gray-900 to-black dark:from-gray-900 dark:to-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready To Modernize Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Book your automation audit today and discover how much time and money you can save each month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="#contact" variant="primary">
              Book Your Audit
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
      </SectionWrapper>

      {/* Footer */}
      <footer className="bg-black dark:bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Message */}
            <div>
              <div className="text-2xl font-bold text-white mb-4">AI Automate</div>
              <p className="text-gray-300 leading-relaxed">
                We build intelligent systems that modernize operations, reduce labor costs, capture more leads, and allow your business to operate 24/7 without burnout.
              </p>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00FF7F] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00FF7F] transition-colors"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00FF7F] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
              <div className="space-y-4">
                <a
                  href="tel:+13057534014"
                  className="block text-gray-300 hover:text-[#00FF7F] transition-colors"
                >
                  Phone: (305) 753-4014
                </a>
                <div className="flex space-x-4 mt-6">
                  {/* Social Icons Placeholder */}
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <span className="text-white">📱</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <span className="text-white">📧</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <span className="text-white">🔗</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} AI Automate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

