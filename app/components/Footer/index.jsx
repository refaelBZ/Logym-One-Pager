import styles from "./style.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        © 2025 Logym. כל הזכויות שמורות.
      </div>
      <div className={styles.links}>
        <a href="#" className={styles.link}>מדיניות פרטיות</a>
        <span className={styles.separator}>|</span>
        <a href="#" className={styles.link}>תנאי שימוש</a>
      </div>
      {/* אפשר להוסיף כאן לוגו קטן אם תרצה בעתיד */}
    </footer>
  );
} 