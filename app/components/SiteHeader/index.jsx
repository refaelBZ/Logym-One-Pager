import Link from 'next/link';
import { CTA_URL } from '@/lib/site';
import styles from './style.module.scss';

export default function SiteHeader({ variant = 'site', current }) {
  const className = `${styles.header} ${variant === 'landing' ? styles.landing : styles.site}`;

  return (
    <header className={className}>
      <Link className={styles.logo} href="/">Logym</Link>
      <nav className={styles.nav} aria-label="Primary">
        <Link className={styles.link} href="/" aria-current={current === 'home' ? 'page' : undefined}>
          Home
        </Link>
        <Link className={styles.link} href="/blog" aria-current={current === 'blog' ? 'page' : undefined}>
          Blog
        </Link>
        {variant === 'site' ? (
          <a className={styles.cta} href={CTA_URL} target="_blank" rel="noopener noreferrer">
            Log a workout
          </a>
        ) : null}
      </nav>
    </header>
  );
}
