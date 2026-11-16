"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";
import { useImmediateAnimation } from "../../hooks/useScrollAnimation";
import Button from "../Button";
import SiteHeader from "../SiteHeader";
import { CTA_LOCATION, appCtaUrl, trackCtaClick } from "@/lib/analytics";

export default function Hero() {
  const textRef = useImmediateAnimation(300);
  const pathname = usePathname() || "/";
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => {
      if (media.matches) {
        video.pause();
        video.removeAttribute("autoplay");
      } else if (video.paused) {
        video.play().catch(() => {});
      }
    };

    syncMotion();
    media.addEventListener("change", syncMotion);
    return () => media.removeEventListener("change", syncMotion);
  }, []);

  return (
    <section className={styles.hero}>
      <video
        ref={videoRef}
        className={`${styles.bgVideo} ken-burns`}
        autoPlay
        muted
        loop
        playsInline
        poster="/Hero.webp"
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/HeroVid.webm" type="video/webm" />
        <source src="/Hero.webp" type="image/webp" />
      </video>
      <div className={styles.overlay} aria-hidden="true" />
      <SiteHeader variant="landing" current="home" />
      <div className={styles.heroContent}>
        <div className={styles.textWrapper} ref={textRef}>
          <h1 className={`${styles.title} animate-on-scroll`} data-stagger="0">
            STOP CHECKING BOXES. <span className={styles.highlight}>START SEEING RESULTS.</span>
          </h1>
          <p className={`${styles.subtitle} animate-on-scroll`} data-stagger="1">
            Logym is a fitness app with a fast interface for logging workouts in seconds.
          </p>
          <p className={`${styles.description} animate-on-scroll`} data-stagger="2">
            Everything you need to focus on what truly matters – your progress.
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
          <p className={`${styles.legalNote} animate-on-scroll`} data-stagger="4">
            Opening the app? See our{" "}
            <Link href="/privacy">Privacy Policy</Link> and{" "}
            <Link href="/cookies">Cookie Policy</Link>.
          </p>
        </div>
        <div className={`${styles.mockupWrapper} animate-slide-right`} aria-hidden="true" />
      </div>
    </section>
  );
}
