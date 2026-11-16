import Link from 'next/link';
import {
  DRAFT_NOTICE,
  LEGAL_NAV,
  LEGAL_UPDATED,
  LEGAL_UPDATED_DISPLAY,
  OPERATOR_PLACEHOLDER,
} from '@/lib/legal';
import styles from './style.module.scss';

export default function LegalDocument({
  title,
  description,
  children,
  showOperator = true,
}) {
  return (
    <article className={styles.doc}>
      <p className={styles.draft}>{DRAFT_NOTICE}</p>
      <header>
        <h1 className={styles.title}>{title}</h1>
        {description ? <p className={styles.lede}>{description}</p> : null}
        <p className={styles.meta}>
          Last updated:{' '}
          <time dateTime={LEGAL_UPDATED}>{LEGAL_UPDATED_DISPLAY}</time>
        </p>
        {showOperator ? (
          <p className={styles.operator}>
            Operator: <span>{OPERATOR_PLACEHOLDER}</span>
          </p>
        ) : null}
      </header>
      <div className={styles.body}>{children}</div>
      <nav className={styles.related} aria-label="Legal documents">
        <h2 className={styles.relatedTitle}>Related</h2>
        <ul className={styles.relatedList}>
          {LEGAL_NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  );
}
