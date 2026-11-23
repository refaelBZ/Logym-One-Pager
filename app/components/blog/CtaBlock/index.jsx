import AppCtaLink from '@/app/components/AppCtaLink';
import { CTA_LOCATION } from '@/lib/analytics';
import { CTA_TEXT } from '@/lib/site';
import styles from './style.module.scss';

export default function CtaBlock({ children, location = CTA_LOCATION.blogPost }) {
  const text = children ?? CTA_TEXT;

  return (
    <aside className={styles.cta}>
      <p className={styles.text}>{text}</p>
      <AppCtaLink className={styles.button} location={location}>
        Log a workout
      </AppCtaLink>
    </aside>
  );
}
