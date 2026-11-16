import Link from 'next/link';
import LegalDocument from '@/app/components/LegalDocument';
import { SUPPORT_EMAIL } from '@/lib/legal';
import { legalMetadata } from '@/lib/legal-pages';

export const metadata = legalMetadata({
  title: 'Health & Fitness Disclaimer',
  description:
    'Important health and fitness disclaimer for using Logym workout tracking.',
  path: '/health',
});

export default function HealthPage() {
  return (
    <LegalDocument
      title="Health & Fitness Disclaimer"
      description="Logym is a workout logging tool, not a medical or coaching service. Please read this before you train."
    >
      <h2>1. Not medical advice</h2>
      <p>
        Logym and its website, blog, and app provide general fitness
        information and tools for tracking workouts you choose. Nothing on
        Logym is medical advice, diagnosis, treatment, physiotherapy guidance,
        or a personalized training prescription from a licensed professional.
      </p>

      <h2>2. Consult a professional</h2>
      <p>
        Always consult a qualified physician or other licensed health
        professional before starting or changing an exercise program,
        especially if you have injuries, medical conditions, take medication,
        are pregnant, or are new to training.
      </p>
      <p>
        Stop exercising and seek medical help if you feel pain, dizziness,
        chest discomfort, unusual shortness of breath, or other warning signs.
      </p>

      <h2>3. You assume training risk</h2>
      <p>
        Strength training and other physical activity involve inherent risks of
        injury. You alone decide which exercises, loads, and volumes to perform.
        Logym does not supervise your form, programming, or recovery.
      </p>

      <h2>4. User-created plans only</h2>
      <p>
        The current Logym app lets you create and log your own workout plans. It
        does not currently ship a library of ready-made, coach-certified, or
        clinically reviewed programs. Blog articles that discuss sample
        routines are educational illustrations, not individualized plans.
      </p>

      <h2>5. Accuracy of data</h2>
      <p>
        Progress charts and history depend on what you enter. We do not warrant
        that your logs are complete or that visualizations will lead to any
        particular fitness outcome.
      </p>

      <h2>6. No emergency service</h2>
      <p>
        Logym is not monitored for emergencies. In a medical emergency, call
        your local emergency number immediately.
      </p>

      <h2>7. Related documents</h2>
      <p>
        Also see our <Link href="/terms">Terms of Service</Link> and{' '}
        <Link href="/privacy">Privacy Policy</Link>. Questions:{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
    </LegalDocument>
  );
}
