import styles from './BrandMark.module.css'

export default function BrandMark({ className = '', innerRef, interactive = false }) {
  return (
    <span
      ref={innerRef}
      className={`${styles.wordmark} ${interactive ? styles.interactive : ''} ${className}`.trim()}
    >
      <span className={`${styles.word} ${styles.first}`}>MYTHICAL</span>{' '}
      <span className={`${styles.word} ${styles.second}`}>GYM</span>
    </span>
  )
}
