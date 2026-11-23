function flag(value, label) {
  if (typeof value !== 'boolean') {
    return `Answer whether ${label} went up.`;
  }
  return null;
}

export function weeklyReviewAction({ weightUp, repsUp, setsUp }) {
  const error = flag(weightUp, 'the weight')
    || flag(repsUp, 'the reps')
    || flag(setsUp, 'the sets');
  if (error) return { ok: false, error };

  if (weightUp) {
    return {
      ok: true,
      action: 'keep-the-new-weight',
      summary: 'The weight went up. Next session, repeat that heavier weight and log every set.',
    };
  }
  if (repsUp) {
    return {
      ok: true,
      action: 'add-reps',
      summary: 'Reps went up at the same weight. Next session, try one more rep before you add weight.',
    };
  }
  if (setsUp) {
    return {
      ok: true,
      action: 'add-a-rep',
      summary: 'Only the sets went up. Next session, keep the weight and try to add a rep on the working sets.',
    };
  }
  return {
    ok: true,
    action: 'repeat',
    summary: 'Weight, reps, and sets stayed the same. Next session, repeat the same work and write down the result.',
  };
}
