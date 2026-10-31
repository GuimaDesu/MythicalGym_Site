import { HERO } from '../content.js'
import ui from '../styles/ui.module.css'
import styles from './Stage.module.css'

const ARCH_PATH =
  'M0.5 100 V38 C0.5 17.2 22.6 0.5 50 0.5 C77.4 0.5 99.5 17.2 99.5 38 V100'

export default function Stage({ revealed }) {
  return (
    <section
      className={styles.stage}
      data-revealed={revealed}
      data-scroll="hero"
      style={{ '--p': '0' }}
      aria-label="Mythical Gym"
    >
      <span className={styles.thread} aria-hidden="true" />

      <div className={styles.portal}>
        <svg
          className={styles.arch}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          role="presentation"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="portal-glow" cx="50%" cy="72%" r="64%">
              <stop offset="0%" stopColor="#c7a66b" stopOpacity="0.2" />
              <stop offset="52%" stopColor="#c7a66b" stopOpacity="0.055" />
              <stop offset="100%" stopColor="#c7a66b" stopOpacity="0" />
            </radialGradient>
          </defs>

          <g className={styles.field}>
            <path d={`${ARCH_PATH} Z`} fill="url(#portal-glow)" className={styles.fieldShape} />
          </g>

          <path
            d={ARCH_PATH}
            pathLength="1"
            className={styles.archLine}
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className={styles.phrase}>
          <p className={styles.phraseText}>{HERO.phrase}</p>

          <ul className={styles.pills}>
            {HERO.disciplines.map((discipline, index) => (
              <li
                key={discipline}
                className={`${styles.pill} ${ui.glass}`}
                style={{ '--i': String(index) }}
              >
                <span className={styles.pillDot} aria-hidden="true" />
                {discipline}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className={`${styles.meta} ${styles.metaLeft}`}>
        <span className={styles.metaDot} aria-hidden="true" />
        {HERO.place}
      </p>

      <p className={`${styles.cue}`} aria-hidden="true">
        <span className={styles.cueText}>Desliza</span>
        <span className={styles.cueLine} />
      </p>

      <p className={`${styles.meta} ${styles.metaRight}`}>{HERO.year}</p>
    </section>
  )
}
