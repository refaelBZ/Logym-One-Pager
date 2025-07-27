"use client";
import styles from "./style.module.scss";
import { useImmediateAnimation } from "../../hooks/useScrollAnimation";
import Button from "../Button"; // ייבוא רכיב הכפתור החדש
import Header from "../Header";

export default function Hero() {
  const textRef = useImmediateAnimation(300);

  return (
    <section className={styles.hero}>
      <video 
        className={`${styles.bgVideo} ken-burns`}
        autoPlay 
        muted 
        loop 
        playsInline
        poster="/Hero.webp"
      >
        <source src="/Herovid.webm" type="video/webm" />
        {/* Fallback לתמונה אם הוידאו לא נתמך */}
        <div className={styles.bgImage} />
      </video>
      <div className={styles.overlay} />
      <Header />
      <div className={styles.heroContent}>
        <div className={styles.textWrapper} ref={textRef}>
          <h1 className={`${styles.title} animate-on-scroll`} data-stagger="0">
            STOP CHECKING BOXES. <span className={styles.highlight}>START SEEING RESULTS.</span>
          </h1>
          <h2 className={`${styles.subtitle} animate-on-scroll`} data-stagger="1">
            Logym is the only fitness app with a revolutionary interface for logging workouts in seconds.
          </h2>
          <p className={`${styles.description} animate-on-scroll`} data-stagger="2">
            Everything you need to focus on what truly matters – your progress.
          </p>
          <Button className="animate-on-scroll" data-stagger="3">
            Start Progressing for Free
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