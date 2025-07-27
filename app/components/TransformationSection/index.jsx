import React from 'react';
import styles from './style.module.scss';
import Workout from '../Workout';

const staticWorkoutProps = {
  workout: {
    name: "Workout A",
    exercises: [{
      name: "Bench Press",
      sets: 4,
      reps: 15,
      muscleGroup: 'Chest',
      notes: "Notes will appear here"
    }]
  },
  currentExerciseIndex: 0,
  currentExerciseValues: {
    weight: 80,
    reps: 10,
    sets: 3,
    difficulty: 9
  },
  handleChange: () => {},
  handleDone: () => {},
  handleSkip: () => {},
  handlePrevious: () => {},
  handleBack: () => {}
};

const chaosElementsData = [
  { id: '1', name: 'Element 1' },
  { id: '2', name: 'Element 2' },
  { id: '3', name: 'Element 3' },
  { id: '4', name: 'Element 4' },
  { id: '5', name: 'Element 5' }
];

export default function TransformationSection() {
  return (
    <section className={styles.transformationSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.intro}>
          <h2 className={styles.title}>From guesswork to greatness.</h2>
          <p className={styles.description}>
            Logym turns the chaos of a regular workout into a clear path to progress.
          </p>
        </div>

        <div className={styles.animationCanvas}>
        {chaosElementsData.map((item) => (
          <div key={item.id} className={styles.chaosElement}>
            {item.name}
          </div>
        ))}
          <div className={styles.phoneMockup}>
            {/* שימוש ישיר ברכיב ה-Workout שלך עם ה-props הסטטיים */}
            <Workout {...staticWorkoutProps} />
          </div>
        </div>
      </div>
    </section>
  );
}
