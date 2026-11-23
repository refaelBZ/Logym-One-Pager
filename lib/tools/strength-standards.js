export const LEVELS = ['beginner', 'novice', 'intermediate', 'advanced', 'elite'];

export const LIFTS = [
  { id: 'squat', label: 'Squat' },
  { id: 'bench', label: 'Bench press' },
  { id: 'deadlift', label: 'Deadlift' },
  { id: 'ohp', label: 'Overhead press' },
];

// Approximate 1RM / bodyweight ratios. Same cutoffs at every bodyweight.
// A lifter meets a level when their ratio is greater than or equal to the cutoff.
export const THRESHOLDS = {
  male: {
    squat: [0.75, 1, 1.5, 2, 2.5],
    bench: [0.5, 0.75, 1.25, 1.5, 2],
    deadlift: [1, 1.5, 2, 2.5, 3],
    ohp: [0.35, 0.5, 0.75, 1, 1.25],
  },
  female: {
    squat: [0.5, 0.75, 1.25, 1.75, 2],
    bench: [0.25, 0.5, 0.75, 1, 1.5],
    deadlift: [0.75, 1, 1.5, 2, 2.5],
    ohp: [0.2, 0.35, 0.5, 0.75, 1],
  },
};

export function strengthLevel({ bodyweight, liftWeight, sex, lift }) {
  if (sex !== 'male' && sex !== 'female') {
    return { ok: false, error: 'Choose male or female.' };
  }
  if (!THRESHOLDS[sex][lift]) {
    return { ok: false, error: 'Choose squat, bench press, deadlift, or overhead press.' };
  }
  if (!Number.isFinite(bodyweight) || bodyweight <= 0) {
    return { ok: false, error: 'Enter a bodyweight greater than 0.' };
  }
  if (!Number.isFinite(liftWeight) || liftWeight < 0) {
    return { ok: false, error: 'Enter a lift weight of 0 or more.' };
  }

  const ratio = liftWeight / bodyweight;
  const cutoffs = THRESHOLDS[sex][lift];
  let level = 'below-beginner';
  cutoffs.forEach((cutoff, index) => {
    if (ratio >= cutoff) level = LEVELS[index];
  });

  return { ok: true, ratio, level };
}
