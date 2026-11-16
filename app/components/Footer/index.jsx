import Link from "next/link";
import styles from "./style.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        © 2026 Logym. All rights reserved.
      </div>
      <div className={styles.links}>
        <Link href="/blog" className={styles.link}>Blog</Link>
        <span className={styles.separator}>|</span>
        <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
        <span className={styles.separator}>|</span>
        <Link href="/terms" className={styles.link}>Terms of Service</Link>
        <span className={styles.separator}>|</span>
        <Link href="/cookies" className={styles.link}>Cookies</Link>
        <span className={styles.separator}>|</span>
        <Link href="/health" className={styles.link}>Health Disclaimer</Link>
        <span className={styles.separator}>|</span>
        <Link href="/accessibility" className={styles.link}>Accessibility</Link>
        <span className={styles.separator}>|</span>
        <Link href="/contact" className={styles.link}>Contact</Link>
        <span className={styles.separator}>|</span>
        <Link href="/blog/rss.xml" className={styles.link}>RSS</Link>
      </div>
    </footer>
  );
}
