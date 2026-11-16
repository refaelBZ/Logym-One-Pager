import Link from 'next/link';
import LegalDocument from '@/app/components/LegalDocument';
import {
  OPERATOR_PLACEHOLDER,
  PRIVACY_EMAIL,
  SUPPORT_EMAIL,
} from '@/lib/legal';
import { legalMetadata } from '@/lib/legal-pages';

export const metadata = legalMetadata({
  title: 'Contact',
  description: 'Contact Logym support and privacy teams.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <LegalDocument
      title="Contact"
      description="Reach the Logym team for support, privacy requests, or accessibility feedback."
      showOperator
    >
      <h2>Support</h2>
      <p>
        Product help and account questions:{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </p>
      <p>
        Mailboxes on <strong>logym.fit</strong> are reserved for Logym. The
        owner still needs to create and monitor these addresses (see
        LEGAL-TODO).
      </p>

      <h2>Privacy</h2>
      <p>
        Data-subject and privacy requests:{' '}
        <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>
      </p>
      <p>
        Related documents:{' '}
        <Link href="/privacy">Privacy Policy</Link>,{' '}
        <Link href="/cookies">Cookie Policy</Link>,{' '}
        <Link href="/terms">Terms of Service</Link>.
      </p>

      <h2>Postal / legal entity</h2>
      <p>
        Formal operator details are not finalized yet:{' '}
        <strong>{OPERATOR_PLACEHOLDER}</strong>
      </p>

      <h2>App</h2>
      <p>
        Open the workout app at{' '}
        <a href="https://app.logym.fit">app.logym.fit</a>.
      </p>
    </LegalDocument>
  );
}
