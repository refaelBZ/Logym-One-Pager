import styles from './style.module.scss';

export default function Callout({ children }) {
  return (
    <aside className={styles.callout} role="note">
      {children}
    </aside>
  );
}
