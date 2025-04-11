'use client'

import { motion } from 'framer-motion'

const post = {
  title: 'Blind Robo',
  href: 'https://forms.gle/C2upoErkEZfNWegaA',
  date: 'April 13, 2025',
  imageUrl: '/images/events/blind_robo.png',
}

export default function UpcomingEvents() {
  return (
    <section
      id="upcoming-events"
      className="relative w-full px-6 sm:px-12 py-24 hero-bg text-gray-900"
    >
      {/* Faculty Advisor Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center md:items-center gap-14 mb-28"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[360px] flex-shrink-0"
        >
          <img
            src="/images/afzal_sir.png"
            alt="Faculty Advisor"
            className="w-full h-auto rounded-[1.5rem] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex-1 text-gray-800"
        >
          <h3 className="text-4xl font-extrabold text-blue-700 mb-6">
          Prime Directive Overseer
          </h3>
          <p className="text-xl leading-relaxed mb-4">
            &quot;We have come a long way in the last few years, but there&apos;s still a long
            road ahead—new heights to conquer, new responsibilities to bear. This institute has
            sown the seeds of innovation in Instrumentation and Control. With the launch of events
            through this dedicated club, we aim to grow at an exponential pace.
            <br />
            <span className="italic text-gray-900">
              &apos;Facts do not matter, Perception is Everything.&apos;
            </span>
            &quot;
          </p>
          <p className="text-right font-semibold text-blue-800 text-lg mt-4">
            — Dr. Afzal Sikander
          </p>
        </motion.div>
      </motion.div>

      {/* Header */}
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="text-center mb-20"
>
  {/* Top badge */}
  <p className="inline-block px-5 py-2 bg-blue-600 text-white rounded-full text-base font-semibold tracking-wide animate-pulse">
    UTKANSH Special Events
  </p>

  {/* Gap between badge and header */}
  <div className="mt-6">
    {/* Header with scroll-reveal underline */}
    <h1 className="text-4xl font-orbitron sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-2 text-gray-900 relative inline-block">
      <span className="relative inline-block">
      Launchpad Event
        
      </span>
    </h1>

    {/* Subtext */}
    <p className="text-gray-700 mt-4 text-xl">
      Join us for the most exciting challenge of the season!
    </p>
  </div>
</motion.div>

      {/* Event Info Section */}
      <motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9 }}
  viewport={{ once: true, amount: 0.3 }}
  className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-start"
>
  {/* Image with bluish glow */}
  <div className="relative w-full md:w-1/2 md:h-1/2 md:mx-auto lg:w-[420px]">
    <div className="absolute inset-0 rounded-2xl blur-2xl bg-blue-400 opacity-30 scale-105 z-0" />
    <motion.img
      src={post.imageUrl}
      alt={post.title}
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-full object-cover rounded-2xl z-10"
    />
  </div>

  {/* Text Content */}
  <div className="flex-1 text-left">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-base text-blue-600 mb-2"
    >
      {post.date}
    </motion.p>

    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      viewport={{ once: true }}
      className="text-3xl sm:text-4xl font-bold mb-5 text-gray-900"
    >
      {post.title}
    </motion.h3>

    {/* Event Description */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="text-lg text-gray-800 mb-6 leading-relaxed space-y-4"
    >
      <p>
        SPICE Society, in collaboration with
        <a
          href="https://www.utkansh.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 font-semibold underline underline-offset-4 ml-1"
        >
          UTKANSH
        </a>{' '}
        2025, presents <strong>&quot;Blind Robo&quot;</strong> — a high-octane
        robotics competition where intuition meets innovation. In this thrilling obstacle-based
        challenge, teams will guide their bots using only commands, with no direct visibility.
        It&apos;s not just a test of tech, but a battle of strategy and instinct!
      </p>
      <p>
        With prizes worth ₹5500, the event is open to all robotics enthusiasts. It&apos;ll be
        held on <strong>13th April 2025 at 11:00 AM</strong> in the <strong>Center of LT</strong>.
        Teams of 1 to 5 members can register for just ₹100 using the link below. Let the bots roll! 💡🚀
      </p>
    </motion.div>

    {/* Register Button */}
    <motion.a
      href={post.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover="hover"
      initial="rest"
      animate="rest"
      viewport={{ once: true }}
      className="inline-block relative text-blue-700 font-semibold hover:text-blue-900 transition-colors duration-300 text-lg"
    >
      Register Here →
      <motion.span
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="absolute left-0 -bottom-0.5 h-[2px] w-full origin-left bg-blue-700 rounded"
        style={{ display: 'block' }}
      />
    </motion.a>
  </div>
</motion.div>

    </section>
  )
}
