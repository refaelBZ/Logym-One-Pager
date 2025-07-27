import React from 'react';
import { FiArrowLeft } from "react-icons/fi";
import styles from './style.module.scss';
import Button from '../../components/Button';
import Picker from '../../components/Picker';
import ProgressBar from '../../components/ProgressBar';

const Workout = ({ workoutName = "Workout", exerciseName = "Exercise", sets = 3, reps = 10, muscleGroup = "Chest", notes = "", currentExercise = 1, totalExercises = 5, progress = 20, weight = 50, difficulty = 8 }) => {
  return (
    <div className={styles.workoutPage}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.backArrow}>
          <FiArrowLeft className={styles.icon} />
        </div>
        <div className={styles.pageName}>{workoutName}</div>
        <div></div>
      </div>
      
      {/* Exercise Info Box */}
      <div className={styles.exerciseInfoBox}>
        <div className={styles.exerciseTitle}>{exerciseName}</div>
        <div className={styles.exerciseInfo}>
          <div className={styles.infoItem}>
            <div className={styles.infoValue}>{sets}</div>
            <div className={styles.infoType}>Sets</div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoValue}>{reps}</div>
            <div className={styles.infoType}>Reps</div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoValue}>{muscleGroup}</div>
            <div className={styles.infoType}>Muscles</div>
          </div>
        </div>
        <div className={styles.progressBar}>
          <ProgressBar percent={progress} className={styles.progress} />
          <div className={styles.exerciseNumber}>{currentExercise} / {totalExercises}</div>
        </div>
        <div className={styles.notes}>
          {notes}
        </div>
      </div>
      
      {/* Picker inputs */}
      <div className={styles.inputs}>
        <Picker title="Weight" value={weight} />
        <Picker title="Reps" value={reps} />
        <Picker title="Sets" value={sets} />
        <Picker title="Difficulty" value={difficulty} />
      </div>
      
      {/* Action Buttons */}
      <div className={styles.actionButtons}>
        <Button
          title="Complete"
          type="primary"
        />
        <div className={styles.prevSkip}>
          <Button title="Prev" type="secondary" />
          <Button title="Skip" type="secondary" />
        </div>
      </div>
    </div>
  );
};

export default Workout;