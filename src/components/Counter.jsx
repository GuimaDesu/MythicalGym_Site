import { useEffect, useRef, useState } from 'react'

/**
 * Contador que anima quando entra no ecrã. Usa rAF com easing cúbico.
 */
export default function Counter({ value, suffix = '', duration = 1500 }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    let frame = 0
    let startedAt = 0

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        observer.disconnect()

        const tick = (now) => {
          if (!startedAt) startedAt = now
          const progress = Math.min(1, (now - startedAt) / duration)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(Math.round(value * eased))
          if (progress < 1) frame = window.requestAnimationFrame(tick)
        }

        frame = window.requestAnimationFrame(tick)
      },
      { threshold: 0.35 },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [duration, value])

  return (
    <span ref={ref}>
      {display.toLocaleString('pt-PT')}
      {suffix}
    </span>
  )
}
