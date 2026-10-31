import { useCallback, useEffect, useRef, useState } from 'react'

export const FLIGHT_DURATION = 1350
const HANDOFF_DURATION = 190

/**
 * Controls the cover -> site sequence.
 * The wordmark stays a single element during the flight; only once it has
 * landed do we reveal the in-flow header title underneath it.
 */
export function useOpeningSequence({ flightRef, sourceRef, targetRef }) {
  const [phase, setPhase] = useState('cover')
  const phaseRef = useRef('cover')
  const handoffTimer = useRef()

  useEffect(() => {
    return () => window.clearTimeout(handoffTimer.current)
  }, [])

  useEffect(() => {
    const finishFlight = () => {
      if (phaseRef.current !== 'opening') return
      flightRef.current?.getAnimations().forEach((animation) => animation.finish())
    }

    window.addEventListener('resize', finishFlight)
    return () => window.removeEventListener('resize', finishFlight)
  }, [flightRef])

  const finish = useCallback(() => {
    phaseRef.current = 'open'
    setPhase('open')
  }, [])

  const handoff = useCallback(() => {
    phaseRef.current = 'settling'
    setPhase('settling')

    handoffTimer.current = window.setTimeout(finish, HANDOFF_DURATION)
  }, [finish])

  const open = useCallback(async () => {
    if (phaseRef.current !== 'cover') return

    phaseRef.current = 'opening'
    setPhase('opening')

    try {
      await document.fonts.ready
    } catch {
      // Font loading API is not available: measuring with the fallback is fine.
    }

    const source = sourceRef.current
    const target = targetRef.current
    const flight = flightRef.current

    if (!source || !target || !flight) {
      finish()
      return
    }

    const from = source.getBoundingClientRect()
    const to = target.getBoundingClientRect()

    if (!from.width || !to.width) {
      finish()
      return
    }

    const dx = to.left + to.width / 2 - (from.left + from.width / 2)
    const dy = to.top + to.height / 2 - (from.top + from.height / 2)
    const scale = to.width / from.width

    if (typeof flight.animate !== 'function') {
      finish()
      return
    }

    const animation = flight.animate(
      [
        { transform: 'translate3d(0, 0, 0) scale(1)' },
        {
          transform: `translate3d(${dx}px, ${dy}px, 0) scale(${scale})`,
        },
      ],
      {
        duration: FLIGHT_DURATION,
        easing: 'cubic-bezier(0.65, 0, 0.2, 1)',
        fill: 'both',
      },
    )

    try {
      await animation.finished
    } catch {
      return
    }

    if (phaseRef.current === 'opening') handoff()
  }, [finish, flightRef, handoff, sourceRef, targetRef])

  return { phase, open }
}
