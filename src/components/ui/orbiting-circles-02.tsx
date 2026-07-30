"use client"

import React from 'react'
import ParticleSphereAnimation from '@/components/ui/orbiting-circles-02-utils/particalsphear'

const orbitPortrait = '/skinny%20enzo.jpg'

const orbits = [
  {
    size: 'w-[27.5rem] h-[27.5rem] md:w-[45rem] md:h-[45rem]',
    duration: 18,
    icons: [
      { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=96&q=80', alt: 'Laptop coding desk', angle: -60 },
      { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=96&q=80', alt: 'Code on screen', angle: 0 },
      { src: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=96&q=80', alt: 'Circuit board closeup', angle: 60 },
    ],
  },
  {
    size: 'w-[37.5rem] h-[37.5rem] md:w-[55rem] md:h-[55rem]',
    duration: 24,
    icons: [
      { src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=96&q=80', alt: 'Cloud network globe', angle: 0 },
      { src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=96&q=80', alt: 'Collaboration team board', angle: -90 },
    ],
  },
  {
    size: 'w-[45rem] h-[45rem] md:w-[66.25rem] md:h-[66.25rem]',
    duration: 30,
    icons: [
      { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=96&q=80', alt: 'Team at laptops', angle: -60 },
      { src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=96&q=80', alt: 'Developer workstation', angle: 0 },
      { src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=96&q=80', alt: 'Data matrix display', angle: 60 },
    ],
  },
]

export default function OrbitingCirclesGlobeDemo() {
  return (
    <div className="relative flex h-full w-full justify-center overflow-visible">
      <style>{`
        @keyframes orbit-cw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) + 360deg)) }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) - 360deg)) }
        }
        @keyframes counter-cw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) - 360deg)) }
        }
        @keyframes counter-ccw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) + 360deg)) }
        }
      `}</style>

      <div className="pointer-events-none absolute top-1/2 left-1/2 z-10 aspect-square w-[18.75rem] -translate-x-1/2 -translate-y-1/2 md:w-[34rem]">
        <ParticleSphereAnimation />
      </div>

      {orbits.map((orbit, index) => {
        const isCW = index % 2 === 0
        const orbitAnim = isCW ? 'orbit-cw' : 'orbit-ccw'
        const counterAnim = isCW ? 'counter-cw' : 'counter-ccw'

        const allIcons = [
          ...orbit.icons,
          ...orbit.icons.map((ic) => ({
            ...ic,
            angle: ic.angle + 180,
            alt: `${ic.alt}-mirror`,
          })),
        ]

        return (
          <div
            key={index}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border ${orbit.size}`}
          >
            {allIcons.map((iconData, iconIndex) => (
              <div
                key={iconIndex}
                className="absolute top-0 left-1/2 -ml-8 flex h-1/2 origin-bottom flex-col items-center justify-start"
                style={
                  {
                    '--start-angle': `${iconData.angle}deg`,
                    animation: `${orbitAnim} ${orbit.duration}s linear infinite`,
                  } as React.CSSProperties
                }
              >
                <div
                  className="relative z-10 -mt-8 rounded-full border border-border bg-background p-3 sm:p-4"
                  style={
                    {
                      '--counter-offset': `${-iconData.angle}deg`,
                      animation: `${counterAnim} ${orbit.duration}s linear infinite`,
                    } as React.CSSProperties
                  }
                >
                  <img
                    src={orbitPortrait}
                    alt="Enzo Bernardo"
                    width={32}
                    height={32}
                    className="h-6 w-6 rounded-full object-cover md:h-8 md:w-8"
                  />
                </div>
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}
