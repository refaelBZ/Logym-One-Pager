"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles from './style.module.scss';

const Picker = ({ title, value, onValueChange, min = 0, max = 1000, step = 1 }) => {
  // State for the previous, current, and next values
  const [prevValue, setPrevValue] = useState(Math.max(min, value - step));
  const [currentValue, setCurrentValue] = useState(value);
  const [nextValue, setNextValue] = useState(Math.min(max, value + step));
  // State for animation class
  const [animationClass, setAnimationClass] = useState('');

  // Update internal state when props change
  useEffect(() => {
    setCurrentValue(value);
    setPrevValue(Math.max(min, value - step));
    setNextValue(Math.min(max, value + step));
  }, [value, step, min, max]);

  // Function to update values based on direction (next or previous)
  const updateValues = useCallback((direction) => {
    // Set animation class based on direction
    setAnimationClass(direction === 'next' ? styles.slideUp : styles.slideDown);
    
    setTimeout(() => {
      if (direction === 'next' && currentValue < max) {
        // Move to next value
        const newValue = Math.min(max, currentValue + step);
        setPrevValue(currentValue);
        setCurrentValue(newValue);
        setNextValue(Math.min(max, newValue + step));
        onValueChange(newValue);
      } else if (direction === 'prev' && currentValue > min) {
        // Move to previous value
        const newValue = Math.max(min, currentValue - step);
        setNextValue(currentValue);
        setCurrentValue(newValue);
        setPrevValue(Math.max(min, newValue - step));
        onValueChange(newValue);
      }
      // Clear animation class
      setAnimationClass('');
    }, 200); // Animation duration
  }, [currentValue, min, max, step, onValueChange]);

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedUp: () => updateValues('next'),
    onSwipedDown: () => updateValues('prev'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className={styles.numb} {...swipeHandlers}>
      <div className={`${styles.prevValue} ${animationClass}`}>{prevValue}</div>
      <div className={`${styles.currentValue} ${animationClass}`}>{currentValue}</div>
      <div className={`${styles.nextValue} ${animationClass}`}>{nextValue}</div>
      <div className={styles.pickerTitle}>
        {title}
      </div>
    </div>
  );
};

export default React.memo(Picker);