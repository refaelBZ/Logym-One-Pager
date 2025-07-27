"use client";
import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';

export default function ProgressBar({ percent, isVisible = false }) {
  const [displayPercent, setDisplayPercent] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const targetPercent = percent < 20 ? 0 : percent;
      const duration = 1000; // 1 second
      const steps = 60;
      const increment = targetPercent / steps;
      const stepDuration = duration / steps;

      let currentPercent = 0;
      const timer = setInterval(() => {
        currentPercent += increment;
        if (currentPercent >= targetPercent) {
          currentPercent = targetPercent;
          clearInterval(timer);
        }
        setDisplayPercent(currentPercent);
      }, stepDuration);

      return () => clearInterval(timer);
    } else {
      setDisplayPercent(0);
    }
  }, [isVisible, percent]);

  return (
    <div className={styles.bar}>
      <div 
        className={styles.fill} 
        style={{ width: `${displayPercent}%` }}
      ></div>
    </div>
  );
}