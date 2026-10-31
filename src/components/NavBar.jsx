import { useEffect, useState } from 'react'
import { CONTACT, NAV_LINKS } from '../content.js'
import styles from './NavBar.module.css'

/**
 * Barra fixa que só entra depois de o utilizador sair do hero.
 * A largura da barra de progresso vem de `--scroll`, escrito pelo scroll engine.
 */
export default function NavBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      setVisible(window.scrollY > window.innerHeight * 0.6)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <nav
      className={styles.nav}
      data-visible={visible}
      aria-hidden={!visible}
      inert={!visible}
      aria-label="Navegação principal"
    >
      <a className={styles.brand} href="#topo" tabIndex={visible ? 0 : -1}>
        <img
          className={styles.mark}
          src="/mythicalgym-logo.png"
          width="760"
          height="704"
          alt=""
          loading="lazy"
          decoding="async"
        />
        <span className={styles.wordmark}>MYTHICAL GYM</span>
      </a>

      <ul className={styles.links}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a className={styles.link} href={link.href} tabIndex={visible ? 0 : -1}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        className={styles.cta}
        href="#contacto"
        tabIndex={visible ? 0 : -1}
        aria-label={CONTACT.cta}
      >
        <span>Agendar visita</span>
      </a>

      <span className={styles.progress} aria-hidden="true" />
    </nav>
  )
}
