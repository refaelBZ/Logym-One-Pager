const MIN_REPS = 1;
const MAX_REPS = 12;

export function epley(weight, reps) {
  return weight * (1 + reps / 30);
}

export function brzycki(weight, reps) {
  return weight * (36 / (37 - reps));
}

export function percentageTable(oneRepMax) {
  const rows = [];
  for (let percent = 50; percent <= 100; percent += 5) {
    rows.push({ percent, weight: oneRepMax * (percent / 100) });
  }
  return rows;
}

export function estimateOneRepMax(weight, reps) {
  if (!Number.isFinite(weight) || weight <= 0) {
    return { ok: false, error: 'Enter a weight greater than 0.' };
  }
  if (!Number.isInteger(reps) || reps < MIN_REPS || reps > MAX_REPS) {
    return { ok: false, error: 'Enter a whole number of reps from 1 to 12.' };
  }

  if (reps === 1) {
    return {
      ok: true,
      epley: weight,
      brzycki: weight,
      average: weight,
      lowConfidence: false,
    };
  }

  const epleyValue = epley(weight, reps);
  const brzyckiValue = brzycki(weight, reps);
  return {
    ok: true,
    epley: epleyValue,
    brzycki: brzyckiValue,
    average: (epleyValue + brzyckiValue) / 2,
    lowConfidence: reps > 10,
  };
}
