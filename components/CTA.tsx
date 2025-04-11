'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

const quotes = [
  "Celebrating creativity and connection.",
  "Where vision meets reality.",
]

const galleryImages = [
  '/images/events/05_new.jpg',
  '/images/events/02_new.jpg',
  '/images/events/04_new.jpg',
  '/images/events/01_new.jpg',
  '/images/events/03_new.jpg',
  '/images/events/06_new.jpg',
]

export default function CTA() {
  return (
    <section className="relative overflow-hidden hero-bg text-center text-neutral-900 py-16">
      {/* Animated BG Blur Circle */}
      <motion.div
        className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-blue-200 opacity-20 rounded-full blur-3xl z-0"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-4xl font-orbitron sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-10"
      >
       Snapshots
      </motion.h1>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-m-1 flex flex-wrap md:-m-2">
          {/* Column 1 */}
          <div className="flex w-full md:w-1/2 flex-wrap">
            {galleryImages.slice(0, 2).map((src, i) => (
              <motion.div
                custom={i}
                key={src}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-1/2 p-1 md:p-2"
              >
                <Image
                  alt={`gallery-${i}`}
                  src={src}
                  width={800}
                  height={800}
                  className="h-full w-full rounded-lg object-cover object-center shadow-md transform transition duration-500 hover:scale-105"
                />
              </motion.div>
            ))}

            {/* Quote 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="w-full hidden md:block text-center py-6"
            >
              <p className="text-2xl italic text-blue-700">{quotes[0]}</p>
            </motion.div>

            <motion.div
              custom={2}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full p-1 md:p-2"
            >
              <Image
                alt="gallery-3"
                src={galleryImages[2]}
                width={1200}
                height={800}
                className="h-full w-full rounded-lg object-cover object-center shadow-md transform transition duration-500 hover:scale-105"
              />
            </motion.div>
          </div>

          {/* Column 2 */}
          <div className="flex w-full md:w-1/2 flex-wrap">
            <motion.div
              custom={3}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full p-1 md:p-2"
            >
              <Image
                alt="gallery-4"
                src={galleryImages[3]}
                width={1200}
                height={800}
                className="h-full w-full rounded-lg object-cover object-center shadow-md transform transition duration-500 hover:scale-105"
              />
            </motion.div>
            {galleryImages.slice(4).map((src, i) => (
              <motion.div
                key={src}
                custom={i + 4}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-1/2 p-1 md:p-2"
              >
                <Image
                  alt={`gallery-${i + 4}`}
                  src={src}
                  width={800}
                  height={800}
                  className="h-full w-full rounded-lg object-cover object-center shadow-md transform transition duration-500 hover:scale-105"
                />
              </motion.div>
            ))}

            {/* Quote 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="w-full hidden md:block text-center py-6"
            >
              <p className="text-2xl italic text-blue-700">{quotes[1]}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
