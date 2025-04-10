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
    <section className='relative hero-bg py-20 px-6 sm:px-10 lg:px-20 overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='text-center mb-16'
      >
        <h2 className='text-3xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 font-orbitron'>
          Powered by Visionaries. Backed by Legends.
        </h2>
        <p className='mt-4 text-base text-blue-600 max-w-2xl mx-auto'>
          We are proud to be supported by pioneers and changemakers who believe in innovation and community.
        </p>
      </motion.div>

      <div className='mx-auto max-w-6xl  items-center justify-center'>
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={sponsor.name}
            custom={index}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={logoVariants}
            className='flex items-center justify-center h-28'
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={160}
              height={100}
              className='object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out'
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
