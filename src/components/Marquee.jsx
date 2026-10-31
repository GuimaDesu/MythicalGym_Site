import { MARQUEE } from '../content.js'
import styles from './Marquee.module.css'

const items = [...MARQUEE, ...MARQUEE, ...MARQUEE]

export default function Marquee() {
  return (
    <div className={styles.band} data-scroll style={{ '--p': '0' }} aria-hidden="true">
      <div className={styles.row}>
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className={styles.item}>
            {item}
            <span className={styles.dot} />
          </span>
        ))}
      </div>
    </div>
  )
}
