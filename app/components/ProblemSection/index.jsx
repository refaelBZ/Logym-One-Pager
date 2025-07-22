"use client";
import styles from "./style.module.scss";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const problems = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="none"/><text x="50%" y="55%" textAnchor="middle" fill="#eaff00" fontSize="32" fontWeight="bold" dominantBaseline="middle">?</text></svg>
    ),
    title: "הזיכרון בוגד ברגע קריטי?",
    text: "כמה הרמנו באימון הקודם? מה היה הסט האחרון?"
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" stroke="#eaff00" strokeWidth="4"/><path d="M24 12v12l8 4" stroke="#eaff00" strokeWidth="3" strokeLinecap="round"/></svg>
    ),
    title: "הזמן באימון מתבזבז על ניחושים?",
    text: "כל דקה יקרה. המטרה היא להתאמן, לא לחשב."
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="8" y="28" width="8" height="12" fill="#eaff00"/><rect x="20" y="20" width="8" height="20" fill="#eaff00"/><rect x="32" y="12" width="8" height="28" fill="#eaff00"/></svg>
    ),
    title: "משקיעים קשה, אבל ההתקדמות לא נראית?",
    text: "הגיע הזמן להפוך מאמץ לתוצאות שאפשר לראות."
  }
];

export default function ProblemSection() {
  const titleRef = useScrollAnimation({ threshold: 0.3 });
  const cardsRef = useScrollAnimation({ threshold: 0.2, staggerDelay: 150 });

  return (
    <section className={styles.problemSection}>
      <h2 className={`${styles.sectionTitle} animate-on-scroll`} ref={titleRef}>
        התחושה הזו, שדורכים במקום? אנחנו מכירים אותה.
      </h2>
      <div className={styles.cards} ref={cardsRef}>
        {problems.map((item, idx) => (
          <div className={`${styles.card} animate-on-scroll`} key={idx} data-stagger={idx}>
            <div className={styles.icon}>{item.icon}</div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 