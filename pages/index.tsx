'use client'

import { motion } from 'framer-motion'
import AnimatedCursor from 'react-animated-cursor'
import Hero from '@/components/Hero'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ContactUs from '@/components/ContactUs'
import Team from '@/components/Team'
// import OldEvents from '@/components/OldEvents'
import UpcomingEvents from '@/components/UpcomingEvents'
import About from '@/components/About'
import Sponsors from '@/components/Sponsors'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function Home() {
  return (
    <>
      {/* 👾 Custom Animated Cursor */}
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
    'a',
    'button',
    '.link',
    'input',
    '[role="button"]',
    'textarea',
    'select',
    '[contenteditable]',
    '[data-clickable]',
    '[data-cursor]',
    'accordion',
    'accordion-item',
  ]}
/>

      <main className="scroll-smooth hero-bg overflow-hidden">
        <Hero />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <About />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <UpcomingEvents />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Sponsors />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Team />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <CTA />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <ContactUs />
        </motion.div>

        <Footer />
      </main>
    </>
  )
}
