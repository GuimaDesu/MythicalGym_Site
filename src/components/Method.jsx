import { METHOD } from '../content.js'
import ui from '../styles/ui.module.css'
import styles from './Method.module.css'

const ARCH = 'M40 214 V126 C40 80 76 46 120 46 C164 46 200 80 200 126 V214'

const steps = METHOD.steps

export default function Method() {
  return (
    <section
      id="metodo"
      className={`${ui.track} ${styles.track}`}
      data-scroll
      style={{
        '--p': '0',
        '--pin': '0',
        '--track': '460vh',
        '--steps': String(steps.length),
      }}
      aria-labelledby="metodo-title"
    >
      <div className={ui.pin} data-reveal>
        <p className={ui.eyebrow}>
          <span className={ui.eyebrowIndex}>{METHOD.index}</span>
          {METHOD.label}
        </p>

        <div className={`${styles.grid} ${ui.reveal}`}>
          <div className={styles.panel} aria-hidden="true">
            <svg className={styles.graphic} viewBox="0 0 240 240" role="presentation">
              <defs>
                <linearGradient id="method-arch" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#c7a66b" stopOpacity="0.08" />
                  <stop offset="60%" stopColor="#c7a66b" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#ece6d9" stopOpacity="0.32" />
                </linearGradient>
                <radialGradient id="method-halo" cx="50%" cy="64%" r="56%">
                  <stop offset="0%" stopColor="#c7a66b" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="#c7a66b" stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle cx="120" cy="132" r="96" fill="url(#method-halo)" />

              <g className={styles.orbit}>
                <circle
                  className={styles.orbitLine}
                  cx="120"
                  cy="126"
                  r="112"
                  pathLength="1"
                  vectorEffect="non-scaling-stroke"
                />
                <circle cx="120" cy="14" r="2.4" className={styles.orbitDot} />
              </g>

              <path
                className={`${styles.arch} ${styles.archGhost}`}
                d={ARCH}
                vectorEffect="non-scaling-stroke"
              />
              <path
                className={`${styles.arch} ${styles.archMid}`}
                d={ARCH}
                pathLength="1"
                stroke="url(#method-arch)"
                vectorEffect="non-scaling-stroke"
              />
              <path
                className={`${styles.arch} ${styles.archFront}`}
                d={ARCH}
                pathLength="1"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            <div className={styles.digits}>
              {steps.map((step, index) => (
                <span
                  key={step.title}
                  className={styles.digit}
                  style={{ '--i': String(index) }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.copy}>
            <h2 id="metodo-title" className={`${ui.headline} ${styles.headline}`}>
              {METHOD.title}
            </h2>

            <ol className={styles.steps}>
              {steps.map((step, index) => (
                <li key={step.title} className={styles.step} style={{ '--i': String(index) }}>
                  <span className={styles.stepIndex} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className={styles.stepBody}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepText}>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
