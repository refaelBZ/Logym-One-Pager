"use client";
import styles from "./style.module.scss";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const steps = [
  {
    title: "בחר תוכנית",
    desc: "בחר מתוכניות האימון המוכנות או צור אחת משלך.",
    img: "/mockup-step1.png"
  },
  {
    title: "התחל להתאמן",
    desc: "כל תרגיל, כל סט, הכל מונחה וברור.",
    img: "/mockup-step2.png"
  },
  {
    title: "תיעוד בשניות, לא דקות",
    desc: "זה הקסם. הממשק המהפכני שלנו מאפשר לך לתעד משקל וחזרות בין סטים, בלי להרוס את קצב האימון.",
    img: "/mockup-step3.png"
  }
];

export default function SolutionSection() {
  const introRef = useScrollAnimation({ threshold: 0.4 });
  const timelineRef = useScrollAnimation({ threshold: 0.2, staggerDelay: 300 }); // Delay for rising graph effect

  return (
    <section className={styles.solutionSection}>
      <div className={`${styles.intro} animate-on-scroll`} ref={introRef}>
        <h2 className={styles.title}>להתאמן חכם יותר. פשוט יותר.</h2>
        <p className={styles.description}>
          פיתחנו זרימת עבודה פשוטה בשלושה שלבים שהופכת את מעקב האימונים לחלק טבעי ונטול מאמץ מהשגרה שלך.
        </p>
      </div>
      
      <div className={styles.graphContainer} ref={timelineRef}>
        {steps.map((step, idx) => (
          <div className={`${styles.stepNode} animate-on-scroll`} data-stagger={idx} key={idx}>
            <div className={styles.mockup}>
              <img src={step.img} alt={step.title} />
            </div>
            <div className={styles.content}>
              <div className={styles.stepNumber}>{idx + 1}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 