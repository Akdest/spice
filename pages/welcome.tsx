'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import AnimatedCursor from 'react-animated-cursor'

import Loader from '@/components/Loader'
import Preloader from '@/components/Preloader'

const floatingWords = [
  'Sense', 'Program', 'Innovate', 'Control', 'Empower',
  'Signal', 'Plan', 'Integrate', 'Enhance', 'Structure',
  'Prototype', 'Instrument', 'Evolve', 'Stimulate', 'Execute'
]

const getRandomPosition = () => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`
})

export default function Welcome() {
  const router = useRouter()
  const [hasTapped, setHasTapped] = useState(false)
  const [isLoadingWelcome, setIsLoadingWelcome] = useState(true)
  const [showPreloader, setShowPreloader] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoadingWelcome(false), 1800)
    return () => clearTimeout(timeout)
  }, [])

  const handleEnter = () => {
    if (!hasTapped) {
      setHasTapped(true)
      setShowPreloader(true)
      setTimeout(() => {
        router.push('/')
      }, 2000) // preloader duration before routing
    }
  }

  // Show initial loader while Welcome page is mounting
  if (isLoadingWelcome) return <Loader />

  // Show Preloader after click before redirect
  if (showPreloader) return <Preloader />

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={32}
        color="61, 90, 254"
        outerAlpha={0.3}
        innerScale={1.3}
        outerScale={3.8}
        trailingSpeed={6}
        showSystemCursor={false}
        outerStyle={{
          border: '2px solid rgba(0,170,255,0.6)',
          borderRadius: '50%',
          backgroundColor: 'transparent',
          boxShadow: '0 0 8px rgba(0,170,255,0.3)',
          transition: 'all 0.25s ease-out',
        }}
        innerStyle={{
          backgroundColor: 'rgb(0,170,255)',
          borderRadius: '50%',
          transition: 'transform 0.15s ease-out',
        }}
        clickables={[
          'a', 'button', '.link', 'input', '[role="button"]', 'textarea', 'select',
          '[contenteditable]', '[data-clickable]', '[data-cursor]', 'accordion', 'accordion-item'
        ]}
      />

      <section
        onClick={handleEnter}
        className="w-screen h-screen flex items-center justify-center bg-blue-100 hero-bg overflow-hidden relative select-none"
      >
        {/* Main Logo Section */}
        <AnimatePresence>
          {!hasTapped && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, y: -50 }}
              transition={{ duration: 0.8 }}
              className="text-center text-gray-900 z-10"
            >
              <motion.div
                animate={{ scale: [1, 1.01, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeInOut',
                  delay: 0.2,
                }}
                className="mt-8 flex flex-col items-center justify-center"
              >
                <Image
                  src="/logo/spice-logo-dark.svg"
                  alt="SPICE Logo"
                  width={350}
                  height={350}
                  className="drop-shadow-lg"
                />
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="italic text-blue-700 mt-4 text-md md:text-xl"
                >
                  "Not Just Built Different, Wired That Way!!"
                </motion.p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: 3, duration: 1 }}
                className="mt-8 text-md sm:text-lg text-gray-700"
              >
                Tap anywhere to continue
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Words */}
        <AnimatePresence>
          {!hasTapped && floatingWords.map((word, index) => {
            const { top, left } = getRandomPosition()
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ y: [0, -20, 0], opacity: 0.3 }}
                exit={{ opacity: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut'
                }}
                className="absolute text-blue-600 font-bold text-lg md:text-xl pointer-events-none"
                style={{ top, left }}
              >
                {word}
              </motion.div>
            )
          })}
        </AnimatePresence>

        {/* Animated Glow */}
        <motion.div
          className="absolute w-[50rem] h-[50rem] bg-blue-600 rounded-full blur-[150px] opacity-30"
          animate={{ scale: [0.9, 1.1, 0.9] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        />
      </section>
    </>
  )
}
