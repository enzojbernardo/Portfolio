'use client'

import { animate, motion, useMotionValue } from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'

export const items = [
  {
    id: 1,
    url: '/ASH.webp',
    title: 'American Specialty Health',
    blip: 'Content Management Intern (Summer 2026)',
  },
  {
    id: 2,
    url: '/Crossroads.png',
    title: 'CrossRoads Tutoring',
    blip: 'Academic Mentor (2025-2026)',
  },
]

export default function FramerCarousel() {
  const [index, setIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const swipeDeltaRef = useRef(0)

  const x = useMotionValue(0)

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1
      const targetX = -index * containerWidth

      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      })
    }
  }, [index, x])

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const absX = Math.abs(event.deltaX)
    const absY = Math.abs(event.deltaY)
    const isHorizontalIntent = absX > absY * 0.8 && absX > 2

    if (!isHorizontalIntent) {
      return
    }

    event.preventDefault()
    event.stopPropagation()

    swipeDeltaRef.current += event.deltaX

    if (Math.abs(swipeDeltaRef.current) < 52) {
      return
    }

    const direction = swipeDeltaRef.current > 0 ? 1 : -1
    swipeDeltaRef.current = 0

    setIndex((current) => {
      if (direction > 0) {
        return Math.min(items.length - 1, current + 1)
      }
      return Math.max(0, current - 1)
    })
  }

  return (
    <div className='w-full p-0'>
      <div className='flex flex-col gap-3'>
        <div
          className='relative overflow-hidden overscroll-x-contain rounded-2xl border border-black/5 bg-white/70 touch-pan-y'
          ref={containerRef}
          onWheelCapture={handleWheel}
          role='region'
          aria-label='Work photo carousel. Swipe with two fingers on your trackpad to change slides.'
        >
          <motion.div className='flex' style={{ x }}>
            {items.map((item) => (
              <div key={item.id} className='relative h-[clamp(240px,46vw,420px)] w-full shrink-0'>
                <img
                  src={item.url}
                  alt={item.title}
                  className='pointer-events-none h-full w-full select-none object-contain p-2 md:p-3'
                  draggable={false}
                />
                <div className='pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/32 to-transparent px-4 pb-4 pt-10'>
                  <p className='text-xl font-semibold tracking-[0.01em] text-white md:text-3xl'>
                    {item.title}
                  </p>
                  <p className='mt-1 text-sm text-white/90 md:text-base'>{item.blip}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <div className='absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2'>
            {items.map((item, itemIndex) => (
              <button
                key={item.id ?? item.url ?? `dot-${itemIndex}`}
                onClick={() => setIndex(itemIndex)}
                className={`cursor-pointer h-2 rounded-full transition-all ${
                  itemIndex === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
                }`}
                aria-label={`Go to slide ${itemIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}