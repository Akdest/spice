'use client'

import { motion } from 'framer-motion'

import Hero from '@/components/Hero'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ContactUs from '@/components/ContactUs'
import Team from '@/components/Team'
// import OldEvents from '@/components/OldEvents'
import UpcomingEvents from '@/components/UpcomingEvents'
import About from '@/components/About'
import Sponsors from '@/components/Sponsors'
import CustomCursor from '@/components/Customcursor'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function Home() {
  return (
    <>
      {/* 👾 Custom Animated Cursor */}
      <CustomCursor/>

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
