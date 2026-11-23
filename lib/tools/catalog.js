export const TOOLS_UPDATED = '2026-11-23';

export const TOOLS = [
  {
    slug: '1rm-calculator',
    title: '1RM Calculator',
    description: 'Estimate a one-rep max from a weight and reps with the Epley and Brzycki formulas, then see working weights from 50% to 100%.',
    summary: 'Estimated max from weight and reps, plus a percentage table for working weights.',
    howTo: [
      'Enter the weight you lifted and the reps you completed in one hard set.',
      'Use a set of 1 to 12 reps. Estimates from more than 10 reps are less reliable.',
      'Read the Epley result, the Brzycki result, and the average. The percentage table uses the average.',
    ],
    method: [
      'Epley: weight times (1 + reps / 30).',
      'Brzycki: weight times 36 / (37 minus reps).',
      'The average is those two estimates added together, then divided by 2. A true single is already a one-rep max, so 1 rep returns the weight you entered for both formulas.',
      'The working-weight table lists 50% through 100% of that average, in steps of 5%.',
    ],
    faq: [
      {
        question: 'Which formula should I use?',
        answer: 'Neither formula is a measured max. Logym shows both and an average so you can see the spread. Use the same formula each time you compare sessions.',
      },
      {
        question: 'Why only 1 to 12 reps?',
        answer: 'These formulas are built for low-rep strength sets. Above 10 reps the estimate drifts, and above 12 it is not useful as a max.',
      },
      {
        question: 'Does 1 rep use the formula?',
        answer: 'No. A completed single is the one-rep max, so both results match the weight you typed.',
      },
      {
        question: 'What do the percentages mean?',
        answer: 'Each row is a share of the average estimate. They are planning numbers for warm-up and working sets, not a required program.',
      },
    ],
    related: [
      { href: '/blog/how-to-calculate-one-rep-max', title: 'How to Calculate Your One Rep Max (1RM)' },
      { href: '/blog/how-to-choose-weight-at-the-gym', title: 'How to Choose the Right Weight at the Gym' },
      { href: '/blog/strength-standards', title: 'Strength Standards: What They Are and How to Use Them' },
    ],
    cta: 'Log the working weight in your next session and compare it with this estimate later.',
  },
  {
    slug: 'strength-standards-calculator',
    title: 'Strength Standards Calculator',
    description: 'Compare squat, bench, deadlift, or overhead press with bodyweight and see an approximate beginner to elite level.',
    summary: 'Approximate squat, bench, deadlift, and overhead press levels from bodyweight and sex.',
    howTo: [
      'Choose the lift and whether the standards table is the male or female set.',
      'Enter bodyweight and a one-rep max, or a weight you treat as your current best single.',
      'Read the level as a rough comparison. It is an estimate, not a grade you have to hit.',
    ],
    method: [
      'The ratio is lift weight divided by bodyweight.',
      'Each level has a minimum ratio. You land on the highest level whose cutoff you meet or pass. Below the beginner cutoff, the result is below beginner.',
      'Cutoffs are round estimates and do not change with bodyweight class, age, or equipment. Different published tables use different numbers.',
    ],
    faq: [
      {
        question: 'Are these official standards?',
        answer: 'No. They are approximate bodyweight ratios chosen as round cutoffs. Treat them as a rough guide and track your own ratio over time.',
      },
      {
        question: 'Should I enter a true one-rep max?',
        answer: 'The ratio is meant for a single. If you only have a multi-rep set, estimate a max first, then enter that number.',
      },
      {
        question: 'Why do male and female tables differ?',
        answer: 'The two tables use different ratios so the comparison is not the same number for everyone. They are still estimates.',
      },
      {
        question: 'What if I am between levels?',
        answer: 'You get the highest level you have reached. Being close to the next cutoff does not move you up.',
      },
    ],
    related: [
      { href: '/blog/strength-standards', title: 'Strength Standards: What They Are and How to Use Them' },
      { href: '/blog/squat-strength-standards', title: 'Squat Strength Standards: How to Measure Your Squat' },
      { href: '/blog/bench-press-strength-standards', title: 'Bench Press Strength Standards: How to Measure Your Bench' },
    ],
    cta: 'Log the lift each week and see the bodyweight ratio move toward the next level.',
  },
  {
    slug: 'plate-calculator',
    title: 'Plate Calculator',
    description: 'Turn a target barbell weight into the plates to load on each side, in kilograms or pounds.',
    summary: 'Plates per side for a target barbell weight, using a standard plate set.',
    howTo: [
      'Enter the weight you want on the bar and the weight of the empty bar. The default bar is 20 kg or 45 lb.',
      'The result lists plates for one side. Load the same plates on the other side.',
      'If the target cannot be made with the plate set, the calculator says so instead of rounding.',
    ],
    method: [
      'Kilogram plates, largest first: 20, 15, 10, 5, 2.5, 1.25.',
      'Pound plates, largest first: 45, 35, 25, 10, 5, 2.5.',
      'Per side is (target minus bar) / 2. Plates are chosen largest first until that side is filled. A remainder that is smaller than the smallest plate is not loadable.',
    ],
    faq: [
      {
        question: 'Why is 100 kg two 20 kg plates per side?',
        answer: 'With a 20 kg bar, 80 kg is left, so 40 kg per side. The set starts at 20 kg plates, so that is 20 + 20 on each side.',
      },
      {
        question: 'What if my gym has 25 kg plates?',
        answer: 'This set uses 20 kg as the largest plate so the common 40 kg side loads as two 20s. A 25 kg plate would be a different combination.',
      },
      {
        question: 'Can the target be the empty bar?',
        answer: 'Yes. If the target equals the bar, each side gets no plates.',
      },
      {
        question: 'Why do some weights fail?',
        answer: 'Both sides must match, and the leftover must be a sum of the plates in the set. Anything in between, or lighter than the bar, cannot be loaded.',
      },
    ],
    related: [
      { href: '/blog/how-to-choose-weight-at-the-gym', title: 'How to Choose the Right Weight at the Gym' },
      { href: '/blog/how-to-calculate-one-rep-max', title: 'How to Calculate Your One Rep Max (1RM)' },
      { href: '/blog/how-to-log-sets-during-your-workout', title: 'How to Log Sets During Your Workout' },
    ],
    cta: 'Log the loaded weight, not just the plates, so the next session starts from the same number.',
  },
  {
    slug: 'workout-templates',
    title: 'Workout Templates',
    description: 'Copy a simple 5x5, push pull legs, upper/lower, or beginner full body template and use it as a starting plan.',
    summary: 'Ready-made 5x5, push pull legs, upper/lower, and beginner full body templates.',
    howTo: [
      'Pick the template that matches how many days you want to train.',
      'Copy the text and paste it into your notes, or use it as the outline of a plan.',
      'Keep the exercises and the set scheme the same for a few weeks so you can add weight or reps.',
    ],
    method: [
      'These are static templates, not a generated program. Sets and reps are the common schemes for each style.',
      '5x5 alternates two days. Push pull legs is three sessions. Upper/lower is two session types. The beginner plan repeats one full body session.',
    ],
    faq: [
      {
        question: 'Which template should a beginner use?',
        answer: 'The beginner full body template repeats a short session three times a week. It is the smallest plan on this page.',
      },
      {
        question: 'Do I have to use every exercise?',
        answer: 'You can swap an accessory you cannot do, and keep the main lift pattern. Change one thing at a time so you still know what progressed.',
      },
      {
        question: 'How long should I follow one?',
        answer: 'Stay with a template long enough to repeat it and add weight or reps. A few weeks is a practical minimum.',
      },
      {
        question: 'Are the rep ranges exact prescriptions?',
        answer: 'They are the working scheme written on the template. Stop a set if form breaks down, and record what you actually did.',
      },
    ],
    related: [
      { href: '/blog/5x5-workout-program', title: '5x5 Workout Program: How It Works and How to Run It' },
      { href: '/blog/push-pull-legs-program', title: 'Push Pull Legs Program: A Simple Guide' },
      { href: '/blog/full-body-workout-plan-for-beginners', title: 'Full Body Workout Plan for Beginners (3 Days a Week)' },
    ],
    cta: 'Start a ready-made plan on Logym instead of keeping the template only in a note.',
  },
  {
    slug: 'double-progression-chart',
    title: 'Double Progression Chart',
    description: 'Enter a rep range, the reps you hit, and your smallest weight jump to see whether the next session adds a rep or adds weight.',
    summary: 'Next-session recommendation from your rep range, current reps, and smallest weight jump.',
    howTo: [
      'Enter the low and high end of the rep range, such as 8 and 12.',
      'Enter the weight you used, the reps you completed, and the smallest jump you can make. For dumbbells that is often the next pair up.',
      'If you are under the top of the range, add a rep. If you hit the top, add the jump and return to the low end.',
    ],
    method: [
      'While completed reps are below the top of the range, the next session stays at the same weight and adds one rep.',
      'When completed reps reach or pass the top of the range, the next session adds the smallest jump and starts again at the bottom of the range.',
      'Reps under the bottom of the range still add a rep, not weight. Weight changes only after the top of the range.',
    ],
    faq: [
      {
        question: 'What if the dumbbell jump is large?',
        answer: 'Type the real jump, such as 2 kg or 5 lb. The chart will not add weight until you hit the top of the rep range, so you earn the bigger step first.',
      },
      {
        question: 'What if I did more reps than the range?',
        answer: 'That counts as finishing the range. Add the weight jump next time and drop back to the minimum reps.',
      },
      {
        question: 'What if I missed the bottom of the range?',
        answer: 'Stay at the same weight and try for one more rep. Do not add weight yet.',
      },
      {
        question: 'Does this change the sets?',
        answer: 'No. It only recommends the weight and the rep target for the next session.',
      },
    ],
    related: [
      { href: '/blog/double-progression', title: 'Double Progression: The Simplest Way to Add Weight' },
      { href: '/blog/when-to-add-weight-vs-reps', title: 'When to Add Weight vs When to Add Reps' },
      { href: '/blog/progressive-overload-with-dumbbells', title: 'Progressive Overload with Dumbbells: How to Keep Progressing' },
    ],
    cta: 'Last week\'s numbers are what this chart uses. Log them so the next session has a starting point.',
  },
  {
    slug: 'weekly-training-review',
    title: 'Weekly Training Review',
    description: 'A short checklist: did weight, reps, or sets go up, and what should you do in the next session?',
    summary: 'A short checklist for whether weight, reps, or sets went up, and the next session action.',
    howTo: [
      'Look at one lift across the week you just trained.',
      'Answer the three questions: weight, reps, then sets.',
      'Read the single next-session action. Nothing is saved on a server.',
    ],
    method: [
      'The checklist stays in this browser tab. Refreshing the page clears it.',
      'If the weight went up, keep that weight next time. If only reps went up, add another rep. If only sets went up, try to add a rep on the working sets. If nothing went up, repeat the same work and write it down.',
    ],
    faq: [
      {
        question: 'Is this saved?',
        answer: 'No. Answers stay in the page while you are looking at it. They are not sent anywhere.',
      },
      {
        question: 'Which lift should I review?',
        answer: 'Pick one main lift. Mixing several lifts into one yes or no hides which one actually moved.',
      },
      {
        question: 'What if weight and reps both went up?',
        answer: 'Weight comes first. Keep the heavier weight and log the sets you can do with it.',
      },
      {
        question: 'What if nothing went up?',
        answer: 'Repeat the same weight, reps, and sets next session. A single flat week is a note in the log, not a reason to rewrite the plan.',
      },
    ],
    related: [
      { href: '/blog/how-to-review-your-training-week', title: 'How to Review Your Training Week in Five Minutes' },
      { href: '/blog/how-to-track-progressive-overload', title: 'How to Track Progressive Overload in Your Workout Log' },
      { href: '/blog/why-write-down-your-workouts', title: 'Why You Should Write Down Your Workouts' },
    ],
    cta: 'Do the weekly review on the visual log, where the last sessions are already written down.',
  },
];

export function getTool(slug) {
  return TOOLS.find((tool) => tool.slug === slug) ?? null;
}
