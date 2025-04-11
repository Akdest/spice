'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  leads,
  currentFamily,
  alumniFamily,
} from './data/teamdata'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

const fadeIn = (delay = 0.2) => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
})

const TeamCard = ({ person }: { person: { name: string; role: string; year: string; imageUrl: string } }) => (
  <motion.div
    variants={fadeIn()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="flex flex-col items-center text-center w-full"
  >
    <div className="relative w-full h-80 max-w-sm">
      <Image
        src={person.imageUrl}
        alt={person.name}
        fill
        className="object-cover rounded-xl shadow-lg"
      />
    </div>
    <motion.h3
      variants={fadeIn(0.3)}
      className="mt-4 text-xl font-bold text-gray-900"
    >
      {person.name}
    </motion.h3>
    <motion.p
      variants={fadeIn(0.5)}
      className="text-md text-gray-600"
    >
      {person.role} / {person.year}
    </motion.p>
  </motion.div>
)

const TeamSection = ({ title, people, cols = 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' }: {
  title: string,
  people: { name: string; role: string; year: string; imageUrl: string }[],
  cols?: string
}) => (
  <section
    id="team"
    className="relative w-full px-6 py-12 hero-bg text-gray-900"
  >
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      className="text-center mb-20"
    >
      <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl font-orbitron">
        {title}
      </h2>
    </motion.div>

    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={sectionVariants}
      className={`grid gap-12 px-4 ${cols}`}
    >
      {people.map((person, index) => (
        <TeamCard key={index} person={person} />
      ))}
    </motion.div>
  </section>
)

const AccordionSection = ({ title, people, cols = 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' }: {
  title: string,
  people: { name: string; role: string; year: string; imageUrl: string }[],
  cols?: string
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="text-gray-900 px-6 py-12 hero-bg">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="text-center mb-10 select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-orbitron">
          {title} {isOpen ? '▲' : '▼'}
        </h2>
      </motion.div>

      {isOpen && (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={sectionVariants}
          className={`grid gap-12 px-4 ${cols}`}
        >
          {people.map((person, index) => (
            <TeamCard key={index} person={person} />
          ))}
        </motion.div>
      )}
    </section>
  )
}

export default function Team() {
  return (
    <div className="py-12 sm:py-1">
      <div>
        <TeamSection
          title="Alpha Core Controllers"
          people={leads}
          cols="sm:grid-cols-1 md:grid-cols-2"
        />

        {/* Accordion version for small screens only */}
        <div className="block lg:hidden">
          <AccordionSection
            title="Operative Modules"
            people={currentFamily}
            cols="grid-cols-1"
          />
        </div>

        {/* Normal grid version for md and above */}
        <div className="hidden lg:block">
          <TeamSection
            title="Operative Modules"
            people={currentFamily}
            cols="md:grid-cols-2 lg:grid-cols-4"
          />
        </div>

        <AccordionSection
          title="Legacy Units"
          people={alumniFamily}
          cols="sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        />
      </div>
    </div>
  )
}