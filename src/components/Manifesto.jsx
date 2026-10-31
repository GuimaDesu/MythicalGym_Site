import { Fragment } from 'react'
import { MANIFESTO } from '../content.js'
import ui from '../styles/ui.module.css'
import styles from './Manifesto.module.css'

const WORDS = MANIFESTO.text.split(' ')

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className={`${ui.track} ${styles.track}`}
      data-scroll
      style={{ '--p': '0', '--pin': '0', '--track': '320vh' }}
      aria-labelledby="manifesto-title"
    >
      <div className={ui.pin} data-reveal>
        <p className={ui.eyebrow}>
          <span className={ui.eyebrowIndex}>{MANIFESTO.index}</span>
          {MANIFESTO.label}
        </p>

        <h2
          id="manifesto-title"
          className={`${ui.headline} ${styles.headline}`}
          style={{ '--n': String(WORDS.length) }}
        >
          {WORDS.map((word, index) => (
            <Fragment key={`${word}-${index}`}>
              <span className={styles.word} style={{ '--i': String(index) }}>
                {word}
              </span>{' '}
            </Fragment>
          ))}
        </h2>

        <div className={styles.foot}>
          <span className={styles.hair} aria-hidden="true" />
          <p className={styles.note}>{MANIFESTO.note}</p>
        </div>
      </div>
    </section>
  )
}
