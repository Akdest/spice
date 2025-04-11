'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const sponsors = [
  { name: 'KCC', logo: '/sponsors/kcc.jpg' },
]

const logoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

export default function Sponsors() {
  return (
    <section className="relative hero-bg py-12 sm:py-16 lg:py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Blue Glow Behind Robo */}
      <div className="hidden lg:block absolute bottom-0 top-0 left-0 w-1/2 z-0">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[400px] h-[400px] rounded-full bg-blue-500 opacity-40 blur-[120px]"></div>
        </div>

        {/* Robo Image Full Height */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute bottom-0 top-4 left-0 w-full flex justify-center"
        >
          <Image
            src="/images/robo_03.png"
            alt="Robo"
            fill
            className="object-contain object-center h-full w-auto"
          />
        </motion.div>
      </div>

      {/* Grid Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center max-w-7xl mx-auto gap-10">
        {/* Right Column - Heading & Logos */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left lg:col-start-2"
        >
          <h2 className="text-3xl md:text-3xl lg:text-5xl font-extrabold text-gray-900 font-orbitron">
           Support Nodes
          </h2>
          <p className="mt-4 text-base text-blue-600 max-w-2xl mx-auto lg:mx-0">
            We are proud to be supported by pioneers and changemakers who believe in innovation and community.
          </p>

          <div className="mt-10 flex justify-center lg:justify-start">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={logoVariants}
                className="flex items-center justify-center h-24"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={160}
                  height={100}
                  className="object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
