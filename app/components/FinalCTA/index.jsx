"use client";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import Button from "../Button";
import { CTA_LOCATION, appCtaUrl, trackCtaClick } from "@/lib/analytics";

export default function FinalCTA() {
  const contentRef = useScrollAnimation({ threshold: 0.4 });
  const buttonRef = useScrollAnimation({ threshold: 0.4 });
  const pathname = usePathname() || "/";

  return (
    <section className={styles.finalCtaSection}>
      {/* <div className={styles.backgroundVisual}></div> */}
      <div className={styles.content} ref={contentRef}>
        <h2 className={`${styles.title} animate-on-scroll`}>
          Your time is too precious to waste on guesswork.
        </h2>
        <p className={`${styles.subtitle} animate-on-scroll`}>
          The path to real progress starts with a single click. No payment, no commitment. Just results.
        </p>
        <Button 
          href={appCtaUrl(pathname)}
          className="animate-scale animate-in" 
          ref={buttonRef}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackCtaClick(CTA_LOCATION.landingFooter, pathname)}
        >
          Start Seeing Results
        </Button>
      </div>
    </section>
  );
} 