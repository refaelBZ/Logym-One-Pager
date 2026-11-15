import { CTA_TEXT, CTA_URL } from '@/lib/site';
import styles from './style.module.scss';

export default function CtaBlock({ children }) {
  const text = children ?? CTA_TEXT;

  return (
    <aside className={styles.cta}>
      <p className={styles.text}>{text}</p>
      <a
        className={styles.button}
        href={CTA_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Log a workout
      </a>
    </aside>
  );
}
