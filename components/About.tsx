'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

export default function About() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1])

  return (
    <section ref={sectionRef} id="about" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Scale */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/team.jpg"
          alt="SPICE Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Centered Content */}
      <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 1 }}
  className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 sm:px-10 max-w-4xl mx-auto"
>
  <div className="flex items-center justify-center mb-8">
    <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg">
      <WrenchScrewdriverIcon className="h-7 w-7 sm:h-8 sm:w-8" />
    </div>
  </div>

  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-orbitron mb-6 text-blue-100"
  >
   Foundational Blueprint
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.8 }}
    className="text-xl sm:text-2xl leading-relaxed text-blue-100 max-w-3xl"
  >
    At <span className="text-blue-100 font-semibold">SPICE</span>, we believe technology can change
    the world. We&apos;re committed to pushing the boundaries of
    <strong> Instrumentation and Control Engineering</strong>, uniting brilliant minds from
    aerospace, automotive, energy, and beyond.
  </motion.p>
</motion.div>


    
    </section>
  )
}
