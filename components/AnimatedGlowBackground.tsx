'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function InfiniteSonarRipple() {
  const [ripples, setRipples] = useState<number[]>([])

  useEffect(() => {
    let count = 0
    const interval = setInterval(() => {
      setRipples((prev) => [...prev, count])
      count++
    }, 1400) // Delay between ripples
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 overflow-hidden">
      {ripples.map((id) => (
        <motion.div
          key={id}
          className="absolute rounded-full border border-blue-400"
          initial={{ scale: 0.4, opacity: 0.4 }}
          animate={{ scale: 2 + id * 2, opacity: 0 }}
          transition={{
            duration: 6,
            ease: 'easeInOut',
          }}
          style={{
            width: 80,
            height: 80,
          }}
        />
      ))}

    
    </div>
  )
}
