'use client'

import { Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function ContactUs() {
  return (
    <section id="contact" className="relative bg-white py-20 hero-bg sm:py-28 overflow-hidden">
      {/* Background blur elements */}
      <motion.div
        className="absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-blue-100 opacity-20 rounded-full blur-3xl z-0"
        animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 bg-blue-50 opacity-20 rounded-full blur-2xl z-0"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl font-orbitron">
          Comm Link
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Have questions, suggestions, or collaboration ideas? Reach out to us anytime.
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 text-center">
          {/* Email */}
          <motion.div
            custom={0}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="mb-4 flex justify-center">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-700" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Email</h3>
            <p className="text-gray-600 mt-1">spice@nitj.ac.in</p>
          </motion.div>

          {/* Phone */}
          <motion.div
            custom={1}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="mb-4 flex justify-center">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                <Phone className="w-6 h-6 text-blue-700" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Phone</h3>
            <p className="text-gray-600 mt-1">
              +91 6283850822 <br />
              Rashim
            </p>
          </motion.div>

          {/* Office */}
          <motion.div
            custom={2}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="mb-4 flex justify-center">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-blue-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 12.414M3 21h18M3 3l18 18"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Office</h3>
            <p className="text-gray-600 mt-1 text-sm">
              Department of Instrumentation and Control Engineering, <br />
              NIT Jalandhar, Punjab - 144008
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
