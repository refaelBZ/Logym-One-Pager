"use client";
import styles from "./style.module.scss";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { FiEye, FiTrendingUp, FiClock } from "react-icons/fi";

const benefits = [
  {
    icon: <FiEye size={48} color="#eaff00" strokeWidth={2} />,
    title: "Clarity & Focus",
    text: "Know exactly what you need to do on every exercise to move forward."
  },
  {
    icon: <FiTrendingUp size={48} color="#eaff00" strokeWidth={2} />,
    title: "Data-Driven Motivation",
    text: "See your progress visually and stay relentlessly motivated on your journey."
  },
  {
    icon: <FiClock size={48} color="#eaff00" strokeWidth={2} />,
    title: "Results You Can See & Feel",
    text: "Save precious time on logging and invest it in hard work that pays off."
  }
];

export default function BenefitsSection() {
  const titleRef = useScrollAnimation({ threshold: 0.4 });
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.backgroundVisual}></div>
      <div className={`${styles.intro} animate-on-scroll`} ref={titleRef}>
        <h2 className={styles.title}>More than tracking. Real results.</h2>
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