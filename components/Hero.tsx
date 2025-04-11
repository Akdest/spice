'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const changingWords = ["Technology", "Passion", "Intellect", "Dreams", "Daring"]

function useTypewriter(words: string[], typingSpeed = 120, pauseTime = 2000) {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopIndex, setLoopIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentWord = words[loopIndex % words.length]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        setText(currentWord.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
        if (charIndex === 0) {
          setIsDeleting(false)
          setLoopIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, loopIndex, words, typingSpeed, pauseTime])

  return text
}

export default function Hero() {
  const typedText = useTypewriter(changingWords)
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const width = window.innerWidth
      let triggerPoint = 100 // default

      if (width < 640) {
        triggerPoint = window.innerHeight / 5
      } else if (width < 768) {
        triggerPoint = window.innerHeight / 4
      } else if (width < 1024) {
        triggerPoint = window.innerHeight / 6
      } else {
        triggerPoint = window.innerHeight / 6
      }

      setShowNavbar(window.scrollY > triggerPoint)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      id='main'
      className='hero-bg relative h-screen w-full flex flex-col justify-start items-center px-6 sm:px-12 text-center text-gray-900 overflow-hidden'
    >
      {/* Spotlights */}
     
      {showNavbar && (
       <motion.nav
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5, ease: 'easeOut' }}
       className="fixed top-0 pr-12 w-full h-16 bg-white shadow-md z-40 flex items-center justify-end gap-6 md:gap-8 lg:gap-12 text-gray-800 text-base font-semibold"
     >
       <a href="#" className="hover:text-blue-600 transition">Home</a>
       <a href="#about" className="hover:text-blue-600 transition">About</a>
       <a href="#upcoming-events" className="hover:text-blue-600 transition">Events</a>
     </motion.nav>
      )}

      <motion.img
        initial={false}
        animate={
          showNavbar
            ? { top: '1rem', left: '1.5rem', scale: 0.55, x: 0 }
            : { top: '2rem', left: '50%', scale: 1, x: '-50%' }
        }
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='fixed z-50 h-12 sm:h-16 origin-top-left pointer-events-none select-none'
        src='/logo/spice-logo-dark.svg'
        alt='Spice Logo'
      />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className='text-4xl font-orbitron sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-2 mt-28'
      >
        <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          Building the Unseen Through
        </motion.span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 flex justify-center mb-4'
      >
        <motion.span animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          {typedText}
        </motion.span>
        <span className='ml-1 animate-pulse text-blue-600'>|</span>
      </motion.div>

      <div className='relative flex-grow w-full flex flex-col md:flex-row items-end justify-between max-w-7xl gap-6 px-2 sm:px-6 pb-4 md:pb-0'>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className='w-full lg:w-1/4 text-left text-sm sm:text-base md:text-lg text-gray-800 mb-6 md:mb-[50vh] lg:mb-[40vh]'
        >
          <div className='flex items-center gap-2 mb-2'>
            <Sparkles className='w-5 h-5 text-blue-600 animate-spin-slow' />
            <span className='font-semibold text-blue-600'>Explore Events</span>
          </div>
          <motion.p animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }} className='leading-relaxed'>
            Dive into a wave of innovation where creativity meets circuits and code collides with culture.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className='relative w-full lg:w-1/2 h-[30vh] md:h-[80vh] lg:h-[100%] flex items-end justify-center'
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1], y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className='absolute w-full h-[50vh] bg-blue-500 opacity-30 blur-3xl rounded-full z-0 bottom-0'
          />
          <motion.img
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            src='/images/robo.png'
            alt='Robo'
            className='relative z-10 h-full w-auto object-contain pointer-events-none select-none'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className='w-full lg:w-1/4 text-left text-sm sm:text-base md:text-lg text-gray-800 mb-6 md:mb-[35vh] lg:mb-[25vh]'
        >
          <motion.p animate={{ x: [0, -5, 5, 0] }} transition={{ duration: 5, repeat: Infinity }} className='leading-relaxed'>
          A driven tribe from ICE, igniting engineering with bold ideas.
          </motion.p>
          <a
            href='#upcoming-events'
            className='text-blue-600 font-semibold hover:underline mt-2 inline-block'
          >
            Read more →
          </a>
        </motion.div>
      </div>
    </div>
  )
}