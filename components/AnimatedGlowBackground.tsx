'use client'

import { motion } from 'framer-motion'

export default function StaticBackgroundRobo() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-0 overflow-hidden pointer-events-none select-none">
      {/* Blue Glow Behind Image */}
      <div className="absolute w-[90vw] h-[90vh] bg-blue-400 opacity-20 blur-[120px] rounded-full z-0" />

      {/* Robo Image */}
      <motion.img
        src="/images/robo_04.png"
        alt="Background Robo"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 0.1 }}
        className="w-[80vw] h-[100vh] object-contain object-center z-10 pointer-events-none select-none"
      />
    </div>
  )
}
