'use client';

import { useState, useEffect } from 'react';
import styles from './style.module.scss';

const DiagonalProgressBar = ({ 
  progress = 0, 
  duration = 2000, 
  width = 200, 
  height = 100,
  color = '#00ff88',
  backgroundColor = '#333',
  showPercentage = true 
}) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;
    
    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);
      
      setCurrentProgress(progress * progressRatio);
      
      if (now < endTime) {
        requestAnimationFrame(animate);
      } else {
        setCurrentProgress(progress);
      }
    };
    
    animate();
  }, [progress, duration]);

  const strokeWidth = 8;
  const padding = 20;
  const actualWidth = width - padding * 2;
  const actualHeight = height - padding * 2;
  
  // יצירת נתיב אלכסוני
  const pathData = `M ${padding} ${height - padding} L ${width - padding} ${padding}`;
  
  // חישוב אורך הנתיב
  const pathLength = Math.sqrt(actualWidth * actualWidth + actualHeight * actualHeight);
  
  // חישוב stroke-dasharray ו-stroke-dashoffset
  const strokeDasharray = pathLength;
  const strokeDashoffset = pathLength - (currentProgress / 100) * pathLength;

  return (
    <div className={styles.progressBarContainer} style={{ width, height }}>
      <svg 
        width={width} 
        height={height} 
        className={styles.progressSvg}
      >
        {/* רקע הנתיב */}
        <path
          d={pathData}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
        />
        
        {/* נתיב ההתקדמות */}
        <path
          d={pathData}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className={styles.progressPath}
        />
        
        {/* חץ בסוף הנתיב */}
        {currentProgress > 0 && (
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill={color}
              />
            </marker>
          </defs>
        )}
        
        <path
          d={pathData}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          markerEnd="url(#arrowhead)"
        />
      </svg>
      
      {showPercentage && (
        <div className={styles.percentageText}>
          {Math.round(currentProgress)}%
        </div>
      )}
    </div>
  );
};

export default DiagonalProgressBar; 