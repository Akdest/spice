'use client'

import { motion } from 'framer-motion'

const bootLines = [
  'Booting SPICE Core...',
  'Initializing Control Systems...',
  'Routing Signals...',
  'Engaging Sensors...',
  'Wiring Creativity...',
  'Launching Innovation Engine...',
  'SPICE Boot Complete.'
]

export default function Loader() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-blue-50 text-blue-100 font-mono text-sm tracking-wide overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-4 text-blue-500 text-xl font-semibold"
      >
        [SPICE SYSTEM BOOT]
      </motion.div>

      <div className="flex flex-col gap-1">
        {bootLines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.5 }}
            className="text-blue-500"
          >
            {line}
          </motion.p>
        ))}
      </div>

      <div className="mt-6 flex gap-2">
        {[0, 1, 2].map((dot) => (
          <motion.span
            key={dot}
            className="w-3 h-3 bg-blue-500 rounded-full"
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: dot * 0.3,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
    </div>
  )
}

