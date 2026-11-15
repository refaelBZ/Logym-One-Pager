import Link from 'next/link';
import styles from './style.module.scss';

export default function Breadcrumbs({ items }) {
  return (
    <nav className={styles.nav} aria-label="Breadcrumb">
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li className={styles.item} key={`${item.name}-${index}`}>
              {item.path && !isLast ? (
                <Link className={styles.link} href={item.path}>{item.name}</Link>
              ) : (
                <span className={styles.current} aria-current="page">{item.name}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
