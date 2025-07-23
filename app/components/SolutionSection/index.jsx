"use client";
import styles from "./style.module.scss";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const steps = [
  {
    title: "Choose Your Plan",
    desc: "Select from ready-made workout plans or create your own from scratch.",
    img: "/mockup-step1.png"
  },
  {
    title: "Start Your Workout",
    desc: "Every exercise, every set—guided, clear, and focused.",
    img: "/mockup-step2.png"
  },
  {
    title: "Log data in seconds, not minutes.",
    desc: "This is our magic. Our revolutionary interface lets you log weight and reps between sets, without breaking your rhythm.",
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
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 