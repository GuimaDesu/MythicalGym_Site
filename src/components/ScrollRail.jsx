import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../content.js'
import styles from './ScrollRail.module.css'

/**
 * Trilho de progresso à direita.
 *
 * Os pontos acendem à medida que o `--scroll` (escrito pelo scroll engine)
 * ultrapassa o início de cada secção, e o "scrubber" desliza pela faixa —
 * é o indicador contínuo de que a página é uma única animação.
 */
export default function ScrollRail() {
  const [active, setActive] = useState(-1)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let frame = 0

    const thresholds = () => {
      const range = document.documentElement.scrollHeight - window.innerHeight
      NAV_LINKS.forEach((link, index) => {
        const section = document.querySelector(link.href)
        const node = document.getElementById(`rail-tick-${index}`)
        if (!node) return
        const ratio = section && range > 0 ? section.offsetTop / range : index / NAV_LINKS.length
        node.style.setProperty('--at', Math.min(1, Math.max(0, ratio)).toFixed(4))
      })
    }

    const update = () => {
      frame = 0
      let current = -1

      NAV_LINKS.forEach((link, index) => {
        const section = document.querySelector(link.href)
        if (section && window.scrollY + window.innerHeight * 0.45 >= section.offsetTop) {
          current = index
        }
      })

      setActive(current)
      setVisible(window.scrollY > window.innerHeight * 0.6)
    }

    const request = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        thresholds()
        update()
      })
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    thresholds()
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', request)
    window.addEventListener('load', request)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', request)
      window.removeEventListener('load', request)
    }
  }, [])

  return (
    <nav
      className={styles.rail}
      data-visible={visible}
      aria-hidden={!visible}
      aria-label="Progresso da página"
    >
      <span className={styles.track} aria-hidden="true">
        <span className={styles.knob} />
      </span>

      <ol className={styles.list}>
        {NAV_LINKS.map((link, index) => (
          <li
            key={link.href}
            id={`rail-tick-${index}`}
            className={styles.item}
            data-active={active === index}
          >
            <a
              className={styles.link}
              href={link.href}
              tabIndex={visible ? 0 : -1}
              aria-current={active === index ? 'true' : undefined}
            >
              <span className={styles.label}>{link.label}</span>
              <span className={styles.dot} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
