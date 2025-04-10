'use client'

import { motion } from 'framer-motion'

export default function Preloader() {
  return (
    <div className="w-screen h-screen bg-blue-50 text-blue-500 flex flex-col items-center justify-center font-mono overflow-hidden">
      {/* Title */}
      <motion.h1
        className="text-xl md:text-3xl tracking-widest text-blue-500"
        animate={{ opacity: [0.3, 1, 0.6, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        Booting Systems...
      </motion.h1>

      {/* Pulsing Node Grid */}
      <div className="grid grid-cols-5 gap-4 mt-10">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-4 h-4 bg-blue-500 rounded-full shadow-md"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              delay: (i % 5) * 0.2 + Math.floor(i / 5) * 0.1,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Status Text */}
      <p className="mt-10 text-xs md:text-sm text-blue-500 italic animate-pulse">
        Initializing feedback loops and signal paths...
      </p>
    </div>
  )
}
