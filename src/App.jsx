import { useEffect, useRef } from 'react'
import Contacto from './components/Contacto.jsx'
import Cover from './components/Cover.jsx'
import Marquee from './components/Marquee.jsx'
import Manifesto from './components/Manifesto.jsx'
import Method from './components/Method.jsx'
import NavBar from './components/NavBar.jsx'
import Planos from './components/Planos.jsx'
import SiteHeader from './components/SiteHeader.jsx'
import Space from './components/Space.jsx'
import Stage from './components/Stage.jsx'
import ScrollRail from './components/ScrollRail.jsx'
import { useOpeningSequence } from './hooks/useOpeningSequence.js'
import { useScrollEngine } from './hooks/useScrollEngine.js'
import ui from './styles/ui.module.css'
import styles from './App.module.css'

export default function App() {
  const flightRef = useRef(null)
  const sourceRef = useRef(null)
  const targetRef = useRef(null)
  const mainRef = useRef(null)

  useScrollEngine()

  const { phase, open } = useOpeningSequence({
    flightRef,
    sourceRef,
    targetRef,
  })

  const revealed = phase !== 'cover'
  const titleVisible = phase === 'settling' || phase === 'open'

  useEffect(() => {
    document.body.style.overflow = phase === 'open' ? '' : 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'open') {
      mainRef.current?.focus({ preventScroll: true })
    }
  }, [phase])

  return (
    <div className={styles.app} id="topo" data-phase={phase}>
      <div className={styles.ambient} aria-hidden="true" />

      <div className={styles.decor} aria-hidden="true">
        <span className={`${styles.drift} ${styles.driftWarm}`}>
          <span className={styles.orb} />
        </span>
        <span className={`${styles.drift} ${styles.driftCool}`}>
          <span className={styles.orb} />
        </span>
        <span className={`${styles.drift} ${styles.driftRingA}`}>
          <span className={styles.ring} />
        </span>
        <span className={`${styles.drift} ${styles.driftRingB}`}>
          <span className={styles.ring} />
        </span>
        <span className={`${styles.drift} ${styles.driftPaneA}`}>
          <span className={`${ui.glass} ${styles.pane}`} />
        </span>
        <span className={`${styles.drift} ${styles.driftPaneB}`}>
          <span className={`${ui.glass} ${styles.pane}`} />
        </span>
      </div>

      <NavBar />
      <ScrollRail />

      <main className={styles.site} ref={mainRef} tabIndex={-1}>
        <SiteHeader revealed={revealed} titleVisible={titleVisible} titleRef={targetRef} />
        <Stage revealed={revealed} />

        <Manifesto />
        <Method />
        <Space />
        <Marquee />
        <Planos />
        <Contacto />
      </main>

      {phase !== 'open' && (
        <Cover phase={phase} onOpen={open} flightRef={flightRef} markRef={sourceRef} />
      )}

      <div className={styles.frame} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />
    </div>
  )
}
