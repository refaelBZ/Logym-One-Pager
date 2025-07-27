'use client';

import { useState } from 'react';
import DiagonalProgressBar from './index';
import styles from './example.module.scss';

const DiagonalProgressBarExample = () => {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);
    setProgress(0);
    
    setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsAnimating(false);
      }, 2000);
    }, 100);
  };

  const resetProgress = () => {
    setProgress(0);
    setIsAnimating(false);
  };

  return (
    <div className={styles.exampleContainer}>
      <h2>דוגמה לרכיב DiagonalProgressBar</h2>
      
      <div className={styles.progressBarWrapper}>
        <DiagonalProgressBar 
          progress={progress}
          duration={2000}
          width={300}
          height={150}
          color="#00ff88"
          backgroundColor="#333"
          showPercentage={true}
        />
      </div>
      
      <div className={styles.controls}>
        <button 
          onClick={startAnimation}
          disabled={isAnimating}
          className={styles.button}
        >
          התחל אנימציה
        </button>
        
        <button 
          onClick={resetProgress}
          className={styles.button}
        >
          איפוס
        </button>
      </div>
      
      <div className={styles.info}>
        <h3>תכונות הרכיב:</h3>
        <ul>
          <li>חץ אלכסוני שעולה כלפי מעלה</li>
          <li>אנימציה חלקה עם אפקט זוהר</li>
          <li>הצגת אחוז התקדמות במרכז</li>
          <li>רספונסיבי למובייל</li>
          <li>ניתן להתאמה אישית (צבעים, גודל, משך)</li>
        </ul>
      </div>
    </div>
  );
};

export default DiagonalProgressBarExample; 