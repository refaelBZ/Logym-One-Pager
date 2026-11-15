import styles from './style.module.scss';

export default function MarkdownTable({ children }) {
  return (
    <div className={styles.scroll}>
      <table className={styles.table}>{children}</table>
    </div>
  );
}
