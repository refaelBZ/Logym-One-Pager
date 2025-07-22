"use client";
import styles from "./style.module.scss";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import Button from "../Button"; // ייבוא רכיב הכפתור החדש

export default function FinalCTA() {
  const contentRef = useScrollAnimation({ threshold: 0.4 });

  return (
    <section className={styles.finalCtaSection}>
      <div className={styles.backgroundVisual}></div>
      <div className={styles.content} ref={contentRef}>
        <h2 className={`${styles.title} animate-on-scroll`}>
          הזמן יקר מדי לבזבוז על ניחושים. כדי לראות תוצאות, חייבים לעקוב חכם.
        </h2>
        <p className={`${styles.subtitle} animate-on-scroll`}>
          הדרך להתקדמות אמיתית מתחילה בלחיצת כפתור אחת. בלי תשלום, בלי התחייבות. רק תוצאות.
        </p>
        <Button className="animate-scale animate-in">
          להתחיל להתקדם בחינם
        </Button>
      </div>
    </section>
  );
} 