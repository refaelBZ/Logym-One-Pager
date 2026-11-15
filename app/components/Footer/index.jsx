import Link from "next/link";
import styles from "./style.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        © 2025 Logym. All rights reserved.
      </div>
      <div className={styles.links}>
        <Link href="/blog" className={styles.link}>Blog</Link>
        <span className={styles.separator}>|</span>
        <a href="#" className={styles.link}>Privacy Policy</a>
        <span className={styles.separator}>|</span>
        <a href="#" className={styles.link}>Terms of Service</a>
        <span className={styles.separator}>|</span>
        <Link href="/blog/rss.xml" className={styles.link}>RSS</Link>
      </div>
    </footer>
  );
} 