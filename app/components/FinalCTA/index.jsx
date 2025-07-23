"use client";
import styles from "./style.module.scss";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import Button from "../Button";

export default function FinalCTA() {
  const contentRef = useScrollAnimation({ threshold: 0.4 });
  const buttonRef = useScrollAnimation({ threshold: 0.4 });

  return (
    <section className={styles.finalCtaSection}>
      <div className={styles.backgroundVisual}></div>
      <div className={styles.content} ref={contentRef}>
        <h2 className={`${styles.title} animate-on-scroll`}>
          Your time is too precious to waste on guesswork.
        </h2>
        <p className={`${styles.subtitle} animate-on-scroll`}>
          The path to real progress starts with a single click. No payment, no commitment. Just results.
        </p>
        <Button className="animate-scale animate-in" ref={buttonRef}>
          Start Progressing for Free
        </Button>
      </div>
    </section>
  );
} 