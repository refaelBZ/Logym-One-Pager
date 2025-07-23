import styles from "./style.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        © 2025 Logym. All rights reserved.
      </div>
      <div className={styles.links}>
        <a href="#" className={styles.link}>Privacy Policy</a>
        <span className={styles.separator}>|</span>
        <a href="#" className={styles.link}>Terms of Service</a>
      </div>
      {/* Optionally add a small logo here in the future */}
    </footer>
  );
} 