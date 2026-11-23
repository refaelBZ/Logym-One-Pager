import { describe, expect, it } from 'vitest';
import { nextDoubleProgression } from './double-progression';

describe('nextDoubleProgression', () => {
  it('adds a rep below the top of the range, including the last step', () => {
    expect(nextDoubleProgression({
      repMin: 8, repMax: 12, reps: 11, weight: 24, increment: 2,
    })).toEqual({ ok: true, action: 'add-reps', nextWeight: 24, nextReps: 12 });
  });

  it('adds weight exactly at the top and above it', () => {
    expect(nextDoubleProgression({
      repMin: 8, repMax: 12, reps: 12, weight: 24, increment: 2,
    })).toEqual({ ok: true, action: 'add-weight', nextWeight: 26, nextReps: 8 });
    expect(nextDoubleProgression({
      repMin: 8, repMax: 12, reps: 13, weight: 24, increment: 2,
    }).action).toBe('add-weight');
  });

  it('does not add weight when reps are still under the minimum', () => {
    expect(nextDoubleProgression({
      repMin: 8, repMax: 12, reps: 7, weight: 24, increment: 2,
    })).toEqual({ ok: true, action: 'add-reps', nextWeight: 24, nextReps: 8 });
  });

  it('uses the dumbbell increment the caller provides', () => {
    expect(nextDoubleProgression({
      repMin: 6, repMax: 10, reps: 10, weight: 30, increment: 5,
    }).nextWeight).toBe(35);
  });

  it('rejects invalid ranges, weights, and increments', () => {
    expect(nextDoubleProgression({
      repMin: 12, repMax: 8, reps: 8, weight: 20, increment: 2,
    }).ok).toBe(false);
    expect(nextDoubleProgression({
      repMin: 8, repMax: 12, reps: 8, weight: 0, increment: 2,
    }).ok).toBe(false);
    expect(nextDoubleProgression({
      repMin: 8, repMax: 12, reps: 8, weight: 20, increment: 0,
    }).ok).toBe(false);
    expect(nextDoubleProgression({
      repMin: 8, repMax: 12, reps: Number.NaN, weight: 20, increment: 2,
    }).ok).toBe(false);
  });
});
