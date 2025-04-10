'use client'

import { useState, useEffect } from 'react'
import AnimatedCursor from 'react-animated-cursor'

export default function Cursor() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024) // lg and above
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  if (!isDesktop) return null

  return (
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
  )
}
