import { describe, expect, it } from 'vitest';
import { strengthLevel, THRESHOLDS } from './strength-standards';

describe('strengthLevel', () => {
  it('lands on the cutoff and the step below it', () => {
    const bodyweight = 80;
    const novice = THRESHOLDS.male.squat[1];
    const beginner = THRESHOLDS.male.squat[0];
    expect(strengthLevel({
      bodyweight,
      liftWeight: bodyweight * novice,
      sex: 'male',
      lift: 'squat',
    }).level).toBe('novice');
    expect(strengthLevel({
      bodyweight,
      liftWeight: bodyweight * beginner - 0.01,
      sex: 'male',
      lift: 'squat',
    }).level).toBe('below-beginner');
    expect(strengthLevel({
      bodyweight,
      liftWeight: bodyweight * beginner,
      sex: 'male',
      lift: 'squat',
    }).level).toBe('beginner');
  });

  it('keeps elite at and above the top cutoff', () => {
    const bodyweight = 70;
    const elite = THRESHOLDS.female.bench[4];
    const advanced = THRESHOLDS.female.bench[3];
    expect(strengthLevel({
      bodyweight,
      liftWeight: bodyweight * elite,
      sex: 'female',
      lift: 'bench',
    }).level).toBe('elite');
    expect(strengthLevel({
      bodyweight,
      liftWeight: bodyweight * elite + 20,
      sex: 'female',
      lift: 'bench',
    }).level).toBe('elite');
    expect(strengthLevel({
      bodyweight,
      liftWeight: bodyweight * advanced,
      sex: 'female',
      lift: 'bench',
    }).level).toBe('advanced');
  });

  it('uses the table for the selected lift and sex', () => {
    const maleOhp = strengthLevel({
      bodyweight: 100,
      liftWeight: 75,
      sex: 'male',
      lift: 'ohp',
    });
    const femaleOhp = strengthLevel({
      bodyweight: 100,
      liftWeight: 75,
      sex: 'female',
      lift: 'ohp',
    });
    expect(maleOhp.level).toBe('intermediate');
    expect(femaleOhp.level).toBe('advanced');
  });

  it('rejects bad inputs', () => {
    expect(strengthLevel({ bodyweight: 0, liftWeight: 100, sex: 'male', lift: 'deadlift' }).ok).toBe(false);
    expect(strengthLevel({ bodyweight: 80, liftWeight: -1, sex: 'male', lift: 'deadlift' }).ok).toBe(false);
    expect(strengthLevel({ bodyweight: Number.NaN, liftWeight: 100, sex: 'male', lift: 'squat' }).ok).toBe(false);
    expect(strengthLevel({ bodyweight: 80, liftWeight: 100, sex: 'other', lift: 'squat' }).ok).toBe(false);
  });
});
