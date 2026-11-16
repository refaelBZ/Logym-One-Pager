import Link from 'next/link';
import AppCtaLink from '@/app/components/AppCtaLink';
import { CTA_LOCATION } from '@/lib/analytics';
import { CTA_TEXT } from '@/lib/site';
import styles from './style.module.scss';

export default function CtaBlock({ children }) {
  const text = children ?? CTA_TEXT;

  return (
    <aside className={styles.cta}>
      <div className={styles.text}>{text}</div>
      <AppCtaLink className={styles.button} location={CTA_LOCATION.blogPost}>
        Log a workout
      </AppCtaLink>
      <p className={styles.legalNote}>
        <Link href="/privacy">Privacy Policy</Link>
        {' · '}
        <Link href="/cookies">Cookies</Link>
      </p>
    </aside>
  );
}
