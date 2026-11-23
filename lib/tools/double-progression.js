export function nextDoubleProgression({ repMin, repMax, reps, weight, increment }) {
  if (!Number.isInteger(repMin) || !Number.isInteger(repMax) || repMin < 1 || repMax < repMin) {
    return { ok: false, error: 'Enter a rep range with a minimum of at least 1 and a maximum at or above it.' };
  }
  if (!Number.isInteger(reps) || reps < 1) {
    return { ok: false, error: 'Enter the reps you completed as a whole number of 1 or more.' };
  }
  if (!Number.isFinite(weight) || weight <= 0) {
    return { ok: false, error: 'Enter a weight greater than 0.' };
  }
  if (!Number.isFinite(increment) || increment <= 0) {
    return { ok: false, error: 'Enter a smallest weight jump greater than 0.' };
  }

  if (reps >= repMax) {
    return {
      ok: true,
      action: 'add-weight',
      nextWeight: weight + increment,
      nextReps: repMin,
    };
  }

  return {
    ok: true,
    action: 'add-reps',
    nextWeight: weight,
    nextReps: reps + 1,
  };
}
