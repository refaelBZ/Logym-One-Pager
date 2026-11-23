import { describe, expect, it } from 'vitest';
import { brzycki, epley, estimateOneRepMax, percentageTable } from './one-rep-max';

describe('estimateOneRepMax', () => {
  it('matches Epley 116.7 and Brzycki 112.5 for 100 kg x 5', () => {
    expect(epley(100, 5)).toBeCloseTo(116.6667, 3);
    expect(brzycki(100, 5)).toBeCloseTo(112.5, 5);
    const result = estimateOneRepMax(100, 5);
    expect(result.ok).toBe(true);
    expect(result.epley).toBeCloseTo(116.6667, 3);
    expect(result.brzycki).toBeCloseTo(112.5, 5);
    expect(result.average).toBeCloseTo((116.6667 + 112.5) / 2, 3);
    expect(result.lowConfidence).toBe(false);
  });

  it('returns the entered weight for a single', () => {
    const result = estimateOneRepMax(140, 1);
    expect(result).toMatchObject({ ok: true, epley: 140, brzycki: 140, average: 140 });
  });

  it('flags reps above 10 and rejects reps outside 1 to 12', () => {
    expect(estimateOneRepMax(60, 11).lowConfidence).toBe(true);
    expect(estimateOneRepMax(60, 12).ok).toBe(true);
    expect(estimateOneRepMax(60, 13).ok).toBe(false);
    expect(estimateOneRepMax(60, 0).ok).toBe(false);
    expect(estimateOneRepMax(60, 5.5).ok).toBe(false);
  });

  it('rejects non-positive and non-numeric weights', () => {
    expect(estimateOneRepMax(0, 5).ok).toBe(false);
    expect(estimateOneRepMax(-10, 5).ok).toBe(false);
    expect(estimateOneRepMax(Number.NaN, 5).ok).toBe(false);
  });

  it('builds a 50 to 100 percent table in 5 percent steps', () => {
    const rows = percentageTable(200);
    expect(rows).toHaveLength(11);
    expect(rows[0]).toEqual({ percent: 50, weight: 100 });
    expect(rows[10]).toEqual({ percent: 100, weight: 200 });
    expect(rows[1].percent).toBe(55);
  });
});
