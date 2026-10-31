import BrandMark from './BrandMark.jsx'
import { CONTACT } from '../content.js'
import ui from '../styles/ui.module.css'
import styles from './Contacto.module.css'

export default function Contacto() {
  return (
    <>
      <section
        id="contacto"
        className={`${ui.section} ${styles.contact}`}
        data-reveal
        data-scroll
        style={{ '--p': '0', '--pin': '0' }}
        aria-labelledby="contacto-title"
      >
        <p className={ui.eyebrow}>
          <span className={ui.eyebrowIndex}>{CONTACT.index}</span>
          {CONTACT.label}
        </p>

        <div className={styles.hero}>
          <h2 id="contacto-title" className={`${ui.headline} ${styles.headline} ${ui.reveal}`}>
            {CONTACT.title}
          </h2>

          <div className={styles.actions}>
            <p className={`${ui.lede} ${styles.lede} ${ui.reveal}`}>{CONTACT.lede}</p>
            <a className={`${styles.cta} ${ui.reveal}`} href="mailto:ola@mythicalgym.pt">
              <span>{CONTACT.cta}</span>
            </a>
          </div>
        </div>

        <dl className={styles.details}>
          {CONTACT.details.map((detail, index) => (
            <div
              key={detail.label}
              className={`${styles.detail} ${ui.fade}`}
              style={{ '--i': String(index) }}
            >
              <dt className={styles.detailLabel}>{detail.label}</dt>
              <dd className={styles.detailValue}>
                {detail.href ? (
                  <a href={detail.href}>{detail.value}</a>
                ) : (
                  <span className={styles.multiline}>{detail.value}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <footer className={styles.footer}>
        <div className={styles.brand}>
          <img
            className={styles.mark}
            src="/mythicalgym-logo.png"
            width="760"
            height="704"
            alt=""
            loading="lazy"
            decoding="async"
          />
          <BrandMark className={styles.wordmark} />
        </div>

        <nav className={styles.socials} aria-label="Ligações externas">
          {CONTACT.socials.map((social) => (
            <a key={social.label} className={styles.social} href={social.href}>
              {social.label}
            </a>
          ))}
        </nav>

        <p className={styles.legal}>
          © MMXXVI Mythical Gym · Lisboa, Portugal
          <span className={styles.mock}>Site de demonstração — dados ilustrativos</span>
        </p>
      </footer>
    </>
  )
}
