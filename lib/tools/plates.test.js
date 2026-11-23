import { describe, expect, it } from 'vitest';
import { platesPerSide } from './plates';

describe('platesPerSide', () => {
  it('loads 100 kg on a 20 kg bar as 20 + 20 per side', () => {
    expect(platesPerSide({ target: 100, barWeight: 20, unit: 'kg' })).toEqual({
      ok: true,
      plates: [20, 20],
      perSide: 40,
    });
  });

  it('loads 60 kg on a 20 kg bar as 20 per side', () => {
    expect(platesPerSide({ target: 60, barWeight: 20, unit: 'kg' })).toEqual({
      ok: true,
      plates: [20],
      perSide: 20,
    });
  });

  it('loads pounds with a 45 lb bar', () => {
    expect(platesPerSide({ target: 135, barWeight: 45, unit: 'lb' })).toEqual({
      ok: true,
      plates: [45],
      perSide: 45,
    });
    expect(platesPerSide({ target: 225, barWeight: 45, unit: 'lb' }).plates).toEqual([45, 45]);
  });

  it('allows an empty bar and rejects impossible targets', () => {
    expect(platesPerSide({ target: 20, barWeight: 20, unit: 'kg' }).plates).toEqual([]);
    expect(platesPerSide({ target: 15, barWeight: 20, unit: 'kg' }).ok).toBe(false);
    expect(platesPerSide({ target: 101, barWeight: 20, unit: 'kg' }).ok).toBe(false);
    expect(platesPerSide({ target: 21, barWeight: 20, unit: 'kg' }).ok).toBe(false);
    expect(platesPerSide({ target: -5, barWeight: 20, unit: 'kg' }).ok).toBe(false);
    expect(platesPerSide({ target: Number.NaN, barWeight: 20, unit: 'kg' }).ok).toBe(false);
  });
});
