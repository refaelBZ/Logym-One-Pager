"use client";
import styles from "./style.module.scss";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { FiHelpCircle, FiClock, FiBarChart2 } from "react-icons/fi";

const problems = [
  {
    icon: <FiHelpCircle size={48} color="#eaff00" strokeWidth={2} />,
    title: "Memory betrays you at the worst time?",
    text: "Can't remember the weights from last week's session? Or that final set?"
  },
  {
    icon: <FiClock size={48} color="#eaff00" strokeWidth={2} />,
    title: "Is your workout time spent on guesswork?",
    text: "Every minute in the gym is valuable. Your focus should be on lifting, not calculating."
  },
  {
    icon: <FiBarChart2 size={48} color="#eaff00" strokeWidth={2} />,
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