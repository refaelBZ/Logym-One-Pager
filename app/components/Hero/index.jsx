"use client";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";
import { useImmediateAnimation } from "../../hooks/useScrollAnimation";
import Button from "../Button"; // ייבוא רכיב הכפתור החדש
import SiteHeader from "../SiteHeader";
import { CTA_LOCATION, appCtaUrl, trackCtaClick } from "@/lib/analytics";

export default function Hero() {
  const textRef = useImmediateAnimation(300);
  const pathname = usePathname() || "/";

  return (
    <section className={styles.hero}>
      <video 
        className={`${styles.bgVideo} ken-burns`}
        autoPlay 
        muted 
        loop 
        playsInline
        poster="/Hero.webp"
        preload="metadata"
      >
        <source src="/HeroVid.webm" type="video/webm" />
        <source src="/Hero.webp" type="image/webp" />
        {/* Fallback לתמונה אם הוידאו לא נתמך */}
        <div className={styles.bgImage} />
      </video>
      <div className={styles.overlay} />
      <SiteHeader variant="landing" current="home" />
      <div className={styles.heroContent}>
        <div className={styles.textWrapper} ref={textRef}>
          <h1 className={`${styles.title} animate-on-scroll`} data-stagger="0">
            STOP CHECKING BOXES. <span className={styles.highlight}>START SEEING RESULTS.</span>
          </h1>
          <p className={`${styles.subtitle} animate-on-scroll`} data-stagger="1">
            Logym is a workout tracker with a single workout screen: log every set in seconds and see your progress over time.
          </p>
          <Button 
            href={appCtaUrl(pathname)}
            className="animate-on-scroll" 
            data-stagger="3"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCtaClick(CTA_LOCATION.landingHero, pathname)}
          >
            Start Seeing Results
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