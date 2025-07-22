"use client";
import styles from "./style.module.scss";
import { useImmediateAnimation } from "../../hooks/useScrollAnimation";
import Button from "../Button"; // ייבוא רכיב הכפתור החדש

export default function Hero() {
  const textRef = useImmediateAnimation(300);

  return (
    <section className={styles.hero}>
      <div className={`${styles.bgImage} ken-burns`} />
      <div className={styles.overlay} />
      <div className={styles.heroContent}>
        <div className={styles.textWrapper} ref={textRef}>
          <h1 className={`${styles.title} animate-on-scroll`} data-stagger="0">
            די לסמן וי. הזמן לראות תוצאות.
          </h1>
          <h2 className={`${styles.subtitle} animate-on-scroll`} data-stagger="1">
            Logym היא אפליקציית המעקב היחידה עם ממשק מהפכני למעקב אימונים בשניות.
          </h2>
          <p className={`${styles.description} animate-on-scroll`} data-stagger="2">
            הכל כדי שתוכל להתמקד במה שחשוב באמת - ההתקדמות שלך.
          </p>
          <Button className="animate-on-scroll" data-stagger="3">
            להתחיל להתקדם בחינם
          </Button>
        </div>
        <div className={`${styles.mockupWrapper} animate-slide-right`}>
          {/* כאן ייכנס המוקאפ המרחף של האפליקציה, אולי עם GIF בפנים */}
          {/* לדוגמה: <img src="/logym-mockup.png" alt="Logym App Interface" /> */}
        </div>
      </div>
    </section>
  );
} 