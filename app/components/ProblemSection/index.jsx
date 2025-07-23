"use client";
import styles from "./style.module.scss";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const problems = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="none"/><text x="50%" y="55%" textAnchor="middle" fill="#eaff00" fontSize="32" fontWeight="bold" dominantBaseline="middle">?</text></svg>
    ),
    title: "Memory betrays you at the worst time?",
    text: "Can't remember the weights from last week's session? Or that final set?"
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" stroke="#eaff00" strokeWidth="4"/><path d="M24 12v12l8 4" stroke="#eaff00" strokeWidth="3" strokeLinecap="round"/></svg>
    ),
    title: "Is your workout time spent on guesswork?",
    text: "Every minute in the gym is valuable. Your focus should be on lifting, not calculating."
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="8" y="28" width="8" height="12" fill="#eaff00"/><rect x="20" y="20" width="8" height="20" fill="#eaff00"/><rect x="32" y="12" width="8" height="28" fill="#eaff00"/></svg>
    ),
    title: "All the effort, but no visible results?",
    text: "It's time to turn your hard work into progress you can actually see and feel."
  }
];

export default function ProblemSection() {
  const titleRef = useScrollAnimation({ threshold: 0.3 });
  const cardsRef = useScrollAnimation({ threshold: 0.2, staggerDelay: 150 });

  return (
    <section className={styles.problemSection}>
      <div className={styles.backgroundVisual}></div>
      <h2 className={`${styles.sectionTitle} animate-on-scroll`} ref={titleRef}>
        That feeling of being stuck? It's real.
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