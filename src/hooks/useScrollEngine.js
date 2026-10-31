import { useEffect } from 'react'

const clamp01 = (value) => (value < 0 ? 0 : value > 1 ? 1 : value)
const round = (value) => Math.round(value * 10000) / 10000

/**
 * Scroll-driven animation engine.
 *
 * Every element marked with `data-scroll` receives two unit-less custom
 * properties that CSS can read directly:
 *
 *   --p    0 -> 1 while the element travels through the viewport
 *   --pin  0 -> 1 across the whole scroll range of a pinned (sticky) section
 *
 * The document itself receives `--scroll` (page progress) and `--nav`
 * (0 / 1, used to slide the fixed bar in). Elements marked with
 * `data-reveal` flip to `data-inview="true"` the first time they cross the
 * threshold, which is what the one-shot entrance animations hang off.
 *
 * Everything is written straight to inline styles on a single rAF tick, so
 * React never re-renders while you scroll.
 */
export function useScrollEngine() {
  useEffect(() => {
    const doc = document.documentElement
    let frame = 0
    let revealObserver = null

    const writeScroll = () => {
      frame = 0
      const viewport = window.innerHeight || 1
      const pageRange = doc.scrollHeight - viewport
      const page = pageRange > 0 ? clamp01(window.scrollY / pageRange) : 0
      const nav = window.scrollY > viewport * 0.62 ? 1 : 0

      doc.style.setProperty('--scroll', round(page))
      doc.style.setProperty('--nav', nav)

      const nodes = doc.querySelectorAll('[data-scroll]')
      for (const node of nodes) {
        const rect = node.getBoundingClientRect()
        const travel = clamp01((viewport - rect.top) / (viewport + rect.height))
        const range = rect.height - viewport
        // Sections taller than the viewport map to their own pinned scroll
        // range; shorter blocks fall back to how far they have travelled up.
        const pin =
          range > 1 ? clamp01(-rect.top / range) : clamp01(-rect.top / Math.max(rect.height, 1))

        node.style.setProperty('--p', round(travel))
        node.style.setProperty('--pin', round(pin))
      }
    }

    const request = () => {
      if (frame) return
      frame = window.requestAnimationFrame(writeScroll)
    }

    const observeReveals = () => {
      revealObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            entry.target.setAttribute('data-inview', 'true')
            revealObserver.unobserve(entry.target)
          }
        },
        { threshold: 0.16, rootMargin: '0px 0px -6% 0px' },
      )

      doc.querySelectorAll('[data-reveal]').forEach((node) => {
        if (node.hasAttribute('data-inview')) return
        revealObserver.observe(node)
      })
    }

    writeScroll()
    observeReveals()

    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
      revealObserver?.disconnect()
      doc.style.removeProperty('--scroll')
      doc.style.removeProperty('--nav')
    }
  }, [])
}
