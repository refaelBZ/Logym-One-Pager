"use client";
import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import ProgressBar from "../ProgressBar";

export default function ProgressSection() {
  const progressRef = useScrollAnimation({ threshold: 0.4 });
  const [isProgressVisible, setIsProgressVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsProgressVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, [progressRef]);

  return (
    <section className={styles.progressSection}>
      <div className={styles.progressBarContainer} ref={progressRef}>
        <ProgressBar percent={80} isVisible={isProgressVisible} />
      </div>
    </section>
  );
} 