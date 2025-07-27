"use client";
import styles from "./style.module.scss";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const steps = [
  {
    title: "Choose Your Workout",
    desc: "Select from ready-made workout plans or create your own from scratch.",
    img: "/mockup-step1.png"
  },
  {
    title: "Enter Your Data",
    desc: "Log weight and reps between sets in seconds, without breaking your rhythm.",
    img: "/mockup-step2.png"
  },
  {
    title: "See Your Results",
    desc: "Track your progress visually and watch your hard work translate into real results.",
    img: "/mockup-step3.png"
  }
];

export default function SolutionSection() {
  const introRef = useScrollAnimation({ threshold: 0.4 });
  const timelineRef = useScrollAnimation({ threshold: 0.2, staggerDelay: 300 });

  return (
    <section className={styles.solutionSection}>
      <div className={`${styles.intro} animate-on-scroll`} ref={introRef}>
        <h2 className={styles.title}>Train smarter. And simpler.</h2>
        <p className={styles.description}>
          We designed a 3-step workflow that makes tracking a seamless, effortless part of your routine.
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
              <div className={styles.textContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 