export const TEMPLATES = [
  {
    id: '5x5',
    name: '5x5',
    summary: 'Two alternating days. The main lifts are 5 sets of 5.',
    days: [
      {
        name: 'Day A',
        exercises: [
          ['Squat', '5x5'],
          ['Bench press', '5x5'],
          ['Barbell row', '5x5'],
        ],
      },
      {
        name: 'Day B',
        exercises: [
          ['Squat', '5x5'],
          ['Overhead press', '5x5'],
          ['Deadlift', '1x5'],
        ],
      },
    ],
  },
  {
    id: 'ppl',
    name: 'Push / Pull / Legs',
    summary: 'Three days you can repeat across the week.',
    days: [
      {
        name: 'Push',
        exercises: [
          ['Bench press', '4x6-8'],
          ['Overhead press', '3x8-10'],
          ['Incline press', '3x8-12'],
          ['Triceps extension', '3x10-12'],
        ],
      },
      {
        name: 'Pull',
        exercises: [
          ['Deadlift', '3x5'],
          ['Row', '4x6-8'],
          ['Lat pulldown', '3x8-12'],
          ['Curl', '3x10-12'],
        ],
      },
      {
        name: 'Legs',
        exercises: [
          ['Squat', '4x6-8'],
          ['Romanian deadlift', '3x8-10'],
          ['Lunge', '3x8-12'],
          ['Calf raise', '3x10-15'],
        ],
      },
    ],
  },
  {
    id: 'upper-lower',
    name: 'Upper / Lower',
    summary: 'Four days: upper, lower, rest, upper, lower.',
    days: [
      {
        name: 'Upper',
        exercises: [
          ['Bench press', '4x6-8'],
          ['Row', '4x6-8'],
          ['Overhead press', '3x8-10'],
          ['Lat pulldown', '3x8-12'],
        ],
      },
      {
        name: 'Lower',
        exercises: [
          ['Squat', '4x6-8'],
          ['Romanian deadlift', '3x6-8'],
          ['Lunge', '3x8-12'],
          ['Calf raise', '3x10-15'],
        ],
      },
    ],
  },
  {
    id: 'full-body',
    name: 'Beginner full body',
    summary: 'Three similar days each week, with a rest day between them.',
    days: [
      {
        name: 'Each session',
        exercises: [
          ['Squat', '3x5'],
          ['Bench press', '3x5'],
          ['Row', '3x5'],
          ['Romanian deadlift', '2x8'],
        ],
      },
    ],
  },
];

export function templateToText(template) {
  const lines = [template.name, ''];
  template.days.forEach((day) => {
    lines.push(day.name);
    day.exercises.forEach(([name, scheme]) => {
      lines.push(`${name}: ${scheme}`);
    });
    lines.push('');
  });
  return lines.join('\n').trim();
}
