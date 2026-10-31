import { PLANS } from '../content.js'
import ui from '../styles/ui.module.css'
import styles from './Planos.module.css'

const plans = PLANS.plans

export default function Planos() {
  return (
    <section
      id="planos"
      className={ui.section}
      data-reveal
      data-scroll
      style={{ '--p': '0', '--pin': '0' }}
      aria-labelledby="planos-title"
    >
      <p className={ui.eyebrow}>
        <span className={ui.eyebrowIndex}>{PLANS.index}</span>
        {PLANS.label}
      </p>

      <div className={styles.head}>
        <h2 id="planos-title" className={`${ui.headline} ${styles.headline} ${ui.reveal}`}>
          {PLANS.title}
        </h2>
        <p className={`${styles.note} ${ui.reveal}`}>{PLANS.note}</p>
      </div>

      <ul className={styles.grid}>
        {plans.map((plan, index) => (
          <li
            key={plan.name}
            className={`${styles.card} ${ui.glass} ${ui.fade} ${
              plan.featured ? styles.featured : ''
            }`}
            style={{ '--i': String(index) }}
          >
            <div className={styles.cardHead}>
              <span className={styles.name}>{plan.name}</span>
              {plan.featured && <span className={styles.badge}>Mais escolhido</span>}
            </div>

            <p className={styles.price}>
              <span className={styles.currency}>€</span>
              <span className={styles.amount}>{plan.price}</span>
              <span className={styles.period}>{plan.period}</span>
            </p>

            <p className={styles.summary}>{plan.summary}</p>

            <ul className={styles.features}>
              {plan.features.map((feature) => (
                <li key={feature} className={styles.feature}>
                  <span className={styles.tick} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            <a className={styles.pick} href="#contacto">
              {PLANS.cta}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
