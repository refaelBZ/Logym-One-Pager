"use client";
import styles from "./style.module.scss";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const benefits = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><ellipse cx="24" cy="20" rx="12" ry="14" stroke="#eaff00" strokeWidth="4"/><rect x="20" y="34" width="8" height="8" rx="2" fill="#eaff00"/><rect x="18" y="42" width="12" height="2" rx="1" fill="#eaff00"/></svg>
    ),
    title: "בהירות ומיקוד",
    text: "לדעת בדיוק מה לעשות בכל תרגיל כדי להתקדם."
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><polyline points="8,40 20,28 30,36 40,16" stroke="#eaff00" strokeWidth="4" fill="none"/><circle cx="8" cy="40" r="3" fill="#eaff00"/><circle cx="20" cy="28" r="3" fill="#eaff00"/><circle cx="30" cy="36" r="3" fill="#eaff00"/><circle cx="40" cy="16" r="3" fill="#eaff00"/></svg>
    ),
    title: "מוטיבציה מבוססת נתונים",
    text: "לראות את ההתקדמות בעין ולהישאר חדורי מטרה."
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" stroke="#eaff00" strokeWidth="4"/><path d="M24 14v10l7 7" stroke="#eaff00" strokeWidth="3" strokeLinecap="round"/><rect x="34" y="34" width="8" height="4" rx="2" fill="#eaff00"/><rect x="36" y="32" width="4" height="8" rx="2" fill="#eaff00"/></svg>
    ),
    title: "תוצאות שנראות בשטח",
    text: "חיסכון בזמן יקר שמושקע כולו בעבודה קשה."
  }
];

export default function BenefitsSection() {
  const titleRef = useScrollAnimation({ threshold: 0.4 });
  // נשתמש ב-hook לכל שורת תועלת בנפרד
  return (
    <section className={styles.benefitsSection}>
      <div className={`${styles.intro} animate-on-scroll`} ref={titleRef}>
        <h2 className={styles.title}>יותר מסתם מעקב. תוצאות אמיתיות.</h2>
      </div>
      <div className={styles.benefitsContainer}>
        {benefits.map((item, idx) => {
          const rowRef = useScrollAnimation({ threshold: 0.3 });
          
          return (
            <div 
              className={`${styles.benefitRow} ${idx % 2 === 1 ? styles.reversed : ''}`} 
              key={idx}
              ref={rowRef}
            >
              <div className={`${styles.textContainer} ${idx % 2 === 1 ? 'animate-slide-left' : 'animate-slide-right'}`}>
                <h3 className={styles.benefitTitle}>{item.title}</h3>
                <p className={styles.benefitText}>{item.text}</p>
              </div>
              <div className={`${styles.iconContainer} ${idx % 2 === 1 ? 'animate-slide-right' : 'animate-slide-left'}`}>
                {item.icon}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
} 