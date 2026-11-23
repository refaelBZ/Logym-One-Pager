'use client';

import { useMemo, useState } from 'react';
import { nextDoubleProgression } from '@/lib/tools/double-progression';
import { formatWeight } from '@/lib/tools/format';
import { estimateOneRepMax, percentageTable } from '@/lib/tools/one-rep-max';
import { DEFAULT_BAR, platesPerSide } from '@/lib/tools/plates';
import { LIFTS, strengthLevel } from '@/lib/tools/strength-standards';
import { TEMPLATES, templateToText } from '@/lib/tools/templates';
import { weeklyReviewAction } from '@/lib/tools/weekly-review';
import styles from './tools.module.scss';

function numberValue(value) {
  if (String(value).trim() === '') return Number.NaN;
  return Number(value);
}

function integerValue(value) {
  if (!/^\d+$/.test(String(value).trim())) return Number.NaN;
  return Number(value);
}

function Field({ label, children }) {
  return (
    <label className={styles.field}>
      <span>{label}</span>
      {children}
    </label>
  );
}

function UnitToggle({ unit, onChange }) {
  return (
    <fieldset className={styles.field}>
      <legend className={styles.legend}>Unit</legend>
      <div className={styles.row}>
        {['kg', 'lb'].map((option) => (
          <label className={styles.choice} key={option}>
            <input
              type="radio"
              name="unit"
              checked={unit === option}
              onChange={() => onChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function OneRepMaxCalculator() {
  const [unit, setUnit] = useState('kg');
  const [weight, setWeight] = useState('100');
  const [reps, setReps] = useState('5');
  const [result, setResult] = useState(null);

  function onSubmit(event) {
    event.preventDefault();
    setResult(estimateOneRepMax(numberValue(weight), integerValue(reps)));
  }

  const rows = result?.ok ? percentageTable(result.average) : [];

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <UnitToggle unit={unit} onChange={setUnit} />
      <Field label={`Weight (${unit})`}>
        <input className={styles.input} inputMode="decimal" value={weight} onChange={(event) => setWeight(event.target.value)} />
      </Field>
      <Field label="Reps (1 to 12)">
        <input className={styles.input} inputMode="numeric" value={reps} onChange={(event) => setReps(event.target.value)} />
      </Field>
      <button className={styles.button} type="submit">Calculate</button>
      {result && !result.ok ? <p className={styles.error} role="alert">{result.error}</p> : null}
      {result?.ok ? (
        <div className={styles.result}>
          <p>Epley: {formatWeight(result.epley)} {unit}</p>
          <p>Brzycki: {formatWeight(result.brzycki)} {unit}</p>
          <p>Average: {formatWeight(result.average)} {unit}</p>
          {result.lowConfidence ? (
            <p className={styles.note}>Accuracy drops above 10 reps. Treat this estimate as a rough figure.</p>
          ) : null}
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Percent of average</th>
                  <th>Weight ({unit})</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.percent}>
                    <td>{row.percent}%</td>
                    <td>{formatWeight(row.weight)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </form>
  );
}

const LEVEL_LABEL = {
  'below-beginner': 'Below beginner',
  beginner: 'Beginner',
  novice: 'Novice',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
  elite: 'Elite',
};

export function StrengthStandardsCalculator() {
  const [sex, setSex] = useState('male');
  const [lift, setLift] = useState('squat');
  const [bodyweight, setBodyweight] = useState('80');
  const [liftWeight, setLiftWeight] = useState('100');
  const [result, setResult] = useState(null);

  function onSubmit(event) {
    event.preventDefault();
    setResult(strengthLevel({
      sex,
      lift,
      bodyweight: numberValue(bodyweight),
      liftWeight: numberValue(liftWeight),
    }));
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <fieldset className={styles.field}>
        <legend className={styles.legend}>Standards table</legend>
        <div className={styles.row}>
          {['male', 'female'].map((option) => (
            <label className={styles.choice} key={option}>
              <input type="radio" name="sex" checked={sex === option} onChange={() => setSex(option)} />
              {option === 'male' ? 'Male' : 'Female'}
            </label>
          ))}
        </div>
      </fieldset>
      <Field label="Lift">
        <select className={styles.select} value={lift} onChange={(event) => setLift(event.target.value)}>
          {LIFTS.map((item) => (
            <option value={item.id} key={item.id}>{item.label}</option>
          ))}
        </select>
      </Field>
      <Field label="Bodyweight">
        <input className={styles.input} inputMode="decimal" value={bodyweight} onChange={(event) => setBodyweight(event.target.value)} />
      </Field>
      <Field label="Lift weight (estimated 1RM)">
        <input className={styles.input} inputMode="decimal" value={liftWeight} onChange={(event) => setLiftWeight(event.target.value)} />
      </Field>
      <button className={styles.button} type="submit">Compare</button>
      <p className={styles.note}>These levels are approximate estimates. They are not a test result or a requirement.</p>
      {result && !result.ok ? <p className={styles.error} role="alert">{result.error}</p> : null}
      {result?.ok ? (
        <div className={styles.result}>
          <p>Level: {LEVEL_LABEL[result.level]}</p>
          <p>Bodyweight ratio: {formatWeight(result.ratio)}</p>
        </div>
      ) : null}
    </form>
  );
}

export function PlateCalculator() {
  const [unit, setUnit] = useState('kg');
  const [target, setTarget] = useState('100');
  const [bar, setBar] = useState(String(DEFAULT_BAR.kg));
  const [result, setResult] = useState(null);

  function changeUnit(next) {
    setUnit(next);
    setBar(String(DEFAULT_BAR[next]));
  }

  function onSubmit(event) {
    event.preventDefault();
    setResult(platesPerSide({
      target: numberValue(target),
      barWeight: numberValue(bar),
      unit,
    }));
  }

  const plateText = result?.ok
    ? (result.plates.length ? result.plates.join(' + ') : 'No plates')
    : '';

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <UnitToggle unit={unit} onChange={changeUnit} />
      <Field label={`Target weight (${unit})`}>
        <input className={styles.input} inputMode="decimal" value={target} onChange={(event) => setTarget(event.target.value)} />
      </Field>
      <Field label={`Bar weight (${unit})`}>
        <input className={styles.input} inputMode="decimal" value={bar} onChange={(event) => setBar(event.target.value)} />
      </Field>
      <button className={styles.button} type="submit">Load</button>
      {result && !result.ok ? <p className={styles.error} role="alert">{result.error}</p> : null}
      {result?.ok ? (
        <p className={styles.result}>Per side: {plateText}</p>
      ) : null}
    </form>
  );
}

export function WorkoutTemplates() {
  const [copied, setCopied] = useState('');

  async function copy(template) {
    const text = templateToText(template);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(template.id);
    } catch {
      setCopied('');
    }
  }

  return (
    <div>
      {TEMPLATES.map((template) => (
        <section className={styles.template} key={template.id}>
          <h2 className={styles.sectionTitle}>{template.name}</h2>
          <p className={styles.prose}>{template.summary}</p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Exercise</th>
                  <th>Sets x reps</th>
                </tr>
              </thead>
              <tbody>
                {template.days.flatMap((day) => day.exercises.map(([name, scheme], index) => (
                  <tr key={`${day.name}-${name}`}>
                    <td>{index === 0 ? day.name : ''}</td>
                    <td>{name}</td>
                    <td>{scheme}</td>
                  </tr>
                )))}
              </tbody>
            </table>
          </div>
          <textarea className={styles.textarea} readOnly value={templateToText(template)} aria-label={`${template.name} as text`} />
          <button className={styles.button} type="button" onClick={() => copy(template)}>
            {copied === template.id ? 'Copied' : 'Copy text'}
          </button>
        </section>
      ))}
    </div>
  );
}

export function DoubleProgressionChart() {
  const [repMin, setRepMin] = useState('8');
  const [repMax, setRepMax] = useState('12');
  const [reps, setReps] = useState('8');
  const [weight, setWeight] = useState('20');
  const [increment, setIncrement] = useState('2');
  const [result, setResult] = useState(null);

  function onSubmit(event) {
    event.preventDefault();
    setResult(nextDoubleProgression({
      repMin: integerValue(repMin),
      repMax: integerValue(repMax),
      reps: integerValue(reps),
      weight: numberValue(weight),
      increment: numberValue(increment),
    }));
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Field label="Range minimum">
        <input className={styles.input} inputMode="numeric" value={repMin} onChange={(event) => setRepMin(event.target.value)} />
      </Field>
      <Field label="Range maximum">
        <input className={styles.input} inputMode="numeric" value={repMax} onChange={(event) => setRepMax(event.target.value)} />
      </Field>
      <Field label="Reps completed">
        <input className={styles.input} inputMode="numeric" value={reps} onChange={(event) => setReps(event.target.value)} />
      </Field>
      <Field label="Current weight">
        <input className={styles.input} inputMode="decimal" value={weight} onChange={(event) => setWeight(event.target.value)} />
      </Field>
      <Field label="Smallest weight jump (dumbbells included)">
        <input className={styles.input} inputMode="decimal" value={increment} onChange={(event) => setIncrement(event.target.value)} />
      </Field>
      <button className={styles.button} type="submit">Next session</button>
      {result && !result.ok ? <p className={styles.error} role="alert">{result.error}</p> : null}
      {result?.ok ? (
        <p className={styles.result}>
          {result.action === 'add-weight'
            ? `Add weight. Next session: ${formatWeight(result.nextWeight)} for ${result.nextReps} reps.`
            : `Add a rep. Next session: ${formatWeight(result.nextWeight)} for ${result.nextReps} reps.`}
        </p>
      ) : null}
    </form>
  );
}

const QUESTIONS = [
  ['weightUp', 'Did the weight go up?'],
  ['repsUp', 'Did the reps go up?'],
  ['setsUp', 'Did the sets go up?'],
];

export function WeeklyTrainingReview() {
  const [answers, setAnswers] = useState({ weightUp: null, repsUp: null, setsUp: null });

  const result = useMemo(() => {
    if (QUESTIONS.some(([key]) => answers[key] === null)) return null;
    return weeklyReviewAction(answers);
  }, [answers]);

  return (
    <div className={styles.checklist}>
      {QUESTIONS.map(([key, label]) => (
        <fieldset className={styles.field} key={key}>
          <legend className={styles.legend}>{label}</legend>
          <div className={styles.row}>
            {[['yes', true], ['no', false]].map(([name, value]) => (
              <label className={styles.choice} key={name}>
                <input
                  type="radio"
                  name={key}
                  checked={answers[key] === value}
                  onChange={() => setAnswers((current) => ({ ...current, [key]: value }))}
                />
                {name === 'yes' ? 'Yes' : 'No'}
              </label>
            ))}
          </div>
        </fieldset>
      ))}
      {result?.ok ? <p className={styles.result}>{result.summary}</p> : null}
      <p className={styles.note}>Answers stay in this browser tab and are cleared when you leave or refresh.</p>
    </div>
  );
}

const CALCULATORS = {
  '1rm-calculator': OneRepMaxCalculator,
  'strength-standards-calculator': StrengthStandardsCalculator,
  'plate-calculator': PlateCalculator,
  'workout-templates': WorkoutTemplates,
  'double-progression-chart': DoubleProgressionChart,
  'weekly-training-review': WeeklyTrainingReview,
};

export default function ToolCalculator({ slug }) {
  const Calculator = CALCULATORS[slug];
  if (!Calculator) return null;
  return <Calculator />;
}
