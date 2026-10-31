import BrandMark from './BrandMark.jsx'
import styles from './Cover.module.css'

export default function Cover({ phase, onOpen, flightRef, markRef }) {
  const opening = phase !== 'cover'

  return (
    <div className={styles.cover} data-phase={phase} aria-hidden={opening || undefined}>
      <div className={styles.aura} aria-hidden="true" />

      <div className={styles.anchor}>
        <div className={styles.motion} ref={flightRef}>
          <button
            type="button"
            className={styles.trigger}
            onClick={onOpen}
            disabled={opening}
            aria-label="Descobrir a Mythical Gym"
            aria-describedby="cover-hint"
          >
            <img
              className={styles.mark}
              ref={markRef}
              src="/mythicalgym-logo.png"
              width="760"
              height="704"
              alt=""
              decoding="async"
            />
          </button>
        </div>

        <p className={styles.name}>
          <BrandMark />
        </p>

        <p className={styles.hint} id="cover-hint">
          <span className={styles.hintLine} aria-hidden="true" />
          <span className={styles.hintText}>Clica para descobrir</span>
        </p>
      </div>
    </div>
  )
}
