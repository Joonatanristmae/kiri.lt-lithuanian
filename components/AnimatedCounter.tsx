"use client"

import { useEffect, useRef, useState } from "react"

type AnimatedCounterProps = {
  from?: number
  to: number
  durationMs?: number
  className?: string
}

export default function AnimatedCounter({
  from = 0,
  to,
  durationMs = 2000,
  className,
}: AnimatedCounterProps) {
  const [value, setValue] = useState(from)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    let frameId: number

    const step = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / durationMs, 1)

      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      const current = Math.round(from + (to - from) * eased)
      setValue(current)

      if (progress < 1) {
        frameId = requestAnimationFrame(step)
      }
    }

    frameId = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(frameId)
      startTimeRef.current = null
    }
  }, [from, to, durationMs])

  const formatted = new Intl.NumberFormat("lt-LT").format(value)

  return <span className={className}>{formatted}</span>
}

