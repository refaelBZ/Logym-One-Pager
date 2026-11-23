export const PLATES = {
  kg: [20, 15, 10, 5, 2.5, 1.25],
  lb: [45, 35, 25, 10, 5, 2.5],
};

export const DEFAULT_BAR = { kg: 20, lb: 45 };

function toMilli(value) {
  return Math.round(value * 1000);
}

export function platesPerSide({ target, barWeight, unit }) {
  const available = PLATES[unit];
  if (!available) {
    return { ok: false, error: 'Choose kilograms or pounds.' };
  }
  if (!Number.isFinite(target) || target <= 0) {
    return { ok: false, error: 'Enter a target weight greater than 0.' };
  }
  if (!Number.isFinite(barWeight) || barWeight < 0) {
    return { ok: false, error: 'Enter a bar weight of 0 or more.' };
  }
  if (target < barWeight) {
    return { ok: false, error: 'The target is lighter than the bar.' };
  }

  const perSide = toMilli(target) - toMilli(barWeight);
  if (perSide % 2 !== 0) {
    return { ok: false, error: 'That weight cannot be split evenly on both sides.' };
  }

  let remaining = perSide / 2;
  const plates = [];
  available.forEach((plate) => {
    const size = toMilli(plate);
    while (remaining >= size) {
      plates.push(plate);
      remaining -= size;
    }
  });

  if (remaining !== 0) {
    return {
      ok: false,
      error: 'That weight cannot be loaded with this plate set.',
    };
  }

  return { ok: true, plates, perSide: (toMilli(target) - toMilli(barWeight)) / 2000 };
}
