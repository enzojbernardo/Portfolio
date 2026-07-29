import { useEffect, useRef } from 'react'

type Dot = {
  x: number
  y: number
  z: number
  r: number
}

const DOT_COUNT = 130

function createSphereDots(count: number): Dot[] {
  return Array.from({ length: count }, () => {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    return {
      x: Math.sin(phi) * Math.cos(theta),
      y: Math.sin(phi) * Math.sin(theta),
      z: Math.cos(phi),
      r: 1 + Math.random() * 1.4,
    }
  })
}

export default function ParticleSphereAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      return
    }

    const dots = createSphereDots(DOT_COUNT)
    let rafId = 0
    let rotation = 0

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = Math.max(1, Math.floor(rect.width * dpr))
      canvas.height = Math.max(1, Math.floor(rect.height * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    setSize()
    const resizeObserver = new ResizeObserver(setSize)
    resizeObserver.observe(canvas)

    const draw = () => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      const cx = width / 2
      const cy = height / 2
      const radius = Math.min(width, height) * 0.38

      ctx.clearRect(0, 0, width, height)

      const depthSorted = dots
        .map((dot) => {
          const x1 = dot.x * Math.cos(rotation) + dot.z * Math.sin(rotation)
          const z1 = -dot.x * Math.sin(rotation) + dot.z * Math.cos(rotation)
          const y1 = dot.y
          return { x: x1, y: y1, z: z1, r: dot.r }
        })
        .sort((a, b) => a.z - b.z)

      for (const dot of depthSorted) {
        const perspective = 1.9 / (2.2 - dot.z)
        const px = cx + dot.x * radius * perspective
        const py = cy + dot.y * radius * perspective
        const pr = dot.r * perspective
        const alpha = 0.25 + ((dot.z + 1) / 2) * 0.75

        ctx.beginPath()
        ctx.fillStyle = `rgba(58, 91, 160, ${alpha.toFixed(3)})`
        ctx.arc(px, py, pr, 0, Math.PI * 2)
        ctx.fill()
      }

      rotation += 0.006
      rafId = window.requestAnimationFrame(draw)
    }

    rafId = window.requestAnimationFrame(draw)

    return () => {
      window.cancelAnimationFrame(rafId)
      resizeObserver.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
}
