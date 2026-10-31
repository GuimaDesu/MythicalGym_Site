import BrandMark from './BrandMark.jsx'
import styles from './SiteHeader.module.css'

export default function SiteHeader({ revealed, titleVisible, titleRef }) {
  return (
    <header className={styles.header} data-revealed={revealed}>
      <div className={styles.brand}>
        <h1 className={styles.title} data-visible={titleVisible}>
          <img
            className={styles.logo}
            ref={titleRef}
            src="/mythicalgym-logo.png"
            width="760"
            height="704"
            alt="Mythical Gym"
            decoding="async"
          />
        </h1>

        <span className={styles.wordmark} data-visible={titleVisible} aria-hidden="true">
          <BrandMark />
        </span>
      </div>

      <span className={styles.rule} aria-hidden="true" />
    </header>
  )
}
