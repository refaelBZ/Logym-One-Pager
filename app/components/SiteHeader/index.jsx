import Link from 'next/link';
import AppCtaLink from '@/app/components/AppCtaLink';
import { CTA_LOCATION } from '@/lib/analytics';
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
        <Link className={styles.link} href="/tools" aria-current={current === 'tools' ? 'page' : undefined}>
          Tools
        </Link>
        {variant === 'site' ? (
          <AppCtaLink className={styles.cta} location={CTA_LOCATION.header}>
            Log a workout
          </AppCtaLink>
        ) : null}
      </nav>
    </header>
  );
}
