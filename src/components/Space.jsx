import Counter from './Counter.jsx'
import { SPACE } from '../content.js'
import ui from '../styles/ui.module.css'
import styles from './Space.module.css'

const stats = SPACE.stats

export default function Space() {
  return (
    <section
      id="espaco"
      className={ui.track}
      data-scroll
      style={{ '--p': '0', '--pin': '0', '--track': '280vh' }}
      aria-labelledby="espaco-title"
    >
      <div className={ui.pin} data-reveal>
        <p className={ui.eyebrow}>
          <span className={ui.eyebrowIndex}>{SPACE.index}</span>
          {SPACE.label}
        </p>

        <div className={styles.intro}>
          <h2 id="espaco-title" className={`${ui.headline} ${styles.headline} ${ui.reveal}`}>
            {SPACE.title}
          </h2>
          <p className={`${ui.lede} ${styles.lede} ${ui.reveal}`}>{SPACE.note}</p>
        </div>

        <figure className={`${styles.figure} ${ui.reveal}`}>
          <div className={styles.shot} role="img" aria-label={SPACE.caption}>
            <div className={styles.scene} aria-hidden="true">
              <span className={styles.beam} />
              <span className={`${styles.rack} ${styles.rackA}`} />
              <span className={`${styles.rack} ${styles.rackB}`} />
              <span className={styles.arches}>
                <svg viewBox="0 0 200 200" role="presentation">
                  <path
                    className={styles.archWide}
                    d="M24 196 V104 C24 58 57 24 100 24 C143 24 176 58 176 104 V196"
                    pathLength="1"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    className={styles.archNarrow}
                    d="M62 196 V116 C62 82 78 60 100 60 C122 60 138 82 138 116 V196"
                    pathLength="1"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </span>
              <span className={styles.floor} />
              <span className={styles.vignette} />
              <span className={styles.grain} />
            </div>

            <span className={styles.chip}>
              <span className={styles.chipDot} aria-hidden="true" />
              {SPACE.caption}
            </span>
          </div>

          <figcaption className={styles.caption}>{SPACE.caption}</figcaption>
        </figure>

        <div className={styles.stats}>
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`${styles.stat} ${ui.fade}`}
              style={{ '--depth': String(index + 1) }}
            >
              <span className={styles.statValue}>
                <Counter value={stat.value} suffix={stat.suffix} duration={1200 + index * 180} />
              </span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
