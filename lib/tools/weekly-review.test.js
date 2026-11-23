import { describe, expect, it } from 'vitest';
import { weeklyReviewAction } from './weekly-review';

describe('weeklyReviewAction', () => {
  it('prioritizes weight, then reps, then sets', () => {
    expect(weeklyReviewAction({ weightUp: true, repsUp: true, setsUp: true }).action).toBe('keep-the-new-weight');
    expect(weeklyReviewAction({ weightUp: false, repsUp: true, setsUp: true }).action).toBe('add-reps');
    expect(weeklyReviewAction({ weightUp: false, repsUp: false, setsUp: true }).action).toBe('add-a-rep');
    expect(weeklyReviewAction({ weightUp: false, repsUp: false, setsUp: false }).action).toBe('repeat');
  });

  it('requires a yes or no for each question', () => {
    expect(weeklyReviewAction({ weightUp: true, repsUp: false, setsUp: undefined }).ok).toBe(false);
  });
});
