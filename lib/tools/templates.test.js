import { describe, expect, it } from 'vitest';
import { TEMPLATES, templateToText } from './templates';

describe('templateToText', () => {
  it('includes every template name and its first exercise', () => {
    expect(TEMPLATES.map((template) => template.id)).toEqual(['5x5', 'ppl', 'upper-lower', 'full-body']);
    const text = templateToText(TEMPLATES[0]);
    expect(text.startsWith('5x5')).toBe(true);
    expect(text).toContain('Squat: 5x5');
    expect(text).toContain('Deadlift: 1x5');
  });
});
