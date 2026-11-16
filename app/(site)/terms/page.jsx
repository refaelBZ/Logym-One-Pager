import Link from 'next/link';
import LegalDocument from '@/app/components/LegalDocument';
import {
  MINIMUM_AGE,
  OPERATOR_PLACEHOLDER,
  PRIVACY_EMAIL,
  SUPPORT_EMAIL,
} from '@/lib/legal';
import { legalMetadata } from '@/lib/legal-pages';

export const metadata = legalMetadata({
  title: 'Terms of Service',
  description: 'Draft terms for using the Logym workout tracking website and app.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <LegalDocument
      title="Terms of Service"
      description="These Terms explain the rules for using Logym’s marketing site and workout tracking app."
    >
      <h2>1. Who we are</h2>
      <p>
        Logym (“Logym”, “we”, “us”) is a workout tracking product available at{' '}
        <a href="https://www.logym.fit">www.logym.fit</a> (marketing site) and{' '}
        <a href="https://app.logym.fit">app.logym.fit</a> (the app). The legal
        operator of Logym is currently: <strong>{OPERATOR_PLACEHOLDER}</strong>.
      </p>

      <h2>2. Agreement</h2>
      <p>
        By accessing or using Logym, you agree to these Terms and our{' '}
        <Link href="/privacy">Privacy Policy</Link>,{' '}
        <Link href="/cookies">Cookie Policy</Link>, and{' '}
        <Link href="/health">Health &amp; Fitness Disclaimer</Link>. If you do
        not agree, do not use Logym.
      </p>
      <p>
        This document is a <strong>draft pending legal review</strong>. We may
        update it; the “Last updated” date at the top will change when we do.
      </p>

      <h2>3. The service</h2>
      <p>
        Logym lets you create your own workout plans, log sets, reps, weight,
        and effort during sessions, and view progress charts based on the data
        you enter. Ready-made or coach-prescribed program libraries are not part
        of the current product.
      </p>
      <p>
        Logym is provided free of charge today. We do not currently process
        payments or subscriptions through the product. If paid plans are
        introduced later, separate billing and refund terms will be published
        before those features go live.
      </p>

      <h2>4. Eligibility and minimum age</h2>
      <p>
        You must be at least <strong>{MINIMUM_AGE} years old</strong> to create
        an account or use the app. By signing up, you confirm that you meet this
        age requirement. Logym is not intended for anyone under {MINIMUM_AGE}.
      </p>

      <h2>5. Accounts</h2>
      <p>To use the app you create an account with a username, email address, and password. You agree to:</p>
      <ul>
        <li>provide accurate information;</li>
        <li>keep your password confidential;</li>
        <li>notify us promptly at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> if you suspect unauthorized access.</li>
      </ul>
      <p>
        Authentication uses email and password. Session tokens are stored in
        your browser’s local storage. You are responsible for activity under
        your account.
      </p>

      <h2>6. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use Logym for anything illegal or harmful;</li>
        <li>attempt to disrupt, scrape at abusive scale, reverse engineer, or gain unauthorized access to our systems;</li>
        <li>upload malware or content you do not have the right to use;</li>
        <li>impersonate others or misrepresent your affiliation with Logym;</li>
        <li>use the service in a way that could harm other users or our infrastructure.</li>
      </ul>
      <p>We may suspend or terminate accounts that violate these Terms.</p>

      <h2>7. Your content</h2>
      <p>
        You keep ownership of the workout data and notes you create. You grant
        us a limited license to host, store, process, and display that content
        solely to operate Logym for you.
      </p>
      <p>
        You are responsible for the accuracy of the training data you enter.
        Logym does not provide medical, physiotherapy, or coaching advice.
      </p>

      <h2>8. Intellectual property</h2>
      <p>
        The Logym name, logos, website design, software, and original content
        (excluding your personal workout data) are owned by us or our licensors.
        You may not copy, modify, or distribute them without permission, except
        as allowed by law.
      </p>

      <h2>9. Third-party services</h2>
      <p>
        We rely on third-party providers to run Logym (for example hosting,
        database, email delivery, and—on the marketing site—analytics if you
        consent). Their use of data is described in our Privacy Policy.
      </p>

      <h2>10. Disclaimers</h2>
      <p>
        Logym is provided “as is” and “as available.” To the fullest extent
        permitted by law, we disclaim warranties of merchantability, fitness for
        a particular purpose, and non-infringement. We do not warrant that the
        service will be uninterrupted, error-free, or that data will never be
        lost.
      </p>
      <p>
        Training involves risk. Read the{' '}
        <Link href="/health">Health &amp; Fitness Disclaimer</Link> before using
        the app to plan or log workouts.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by applicable law, Logym and the
        operator named above will not be liable for indirect, incidental,
        special, consequential, or punitive damages, or for lost profits, data,
        or goodwill, arising from your use of the service.
      </p>
      <p>
        Nothing in these Terms excludes liability that cannot be excluded under
        applicable law (including liability for death or personal injury caused
        by negligence where such exclusion is prohibited).
      </p>

      <h2>12. Indemnity</h2>
      <p>
        You agree to defend and indemnify us against claims arising from your
        misuse of Logym, your content, or your breach of these Terms, to the
        extent permitted by law.
      </p>

      <h2>13. Termination</h2>
      <p>
        You may stop using Logym at any time. You may request account deletion
        by contacting <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> or{' '}
        <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>. We may suspend
        or end access if you breach these Terms or if we discontinue the
        service.
      </p>

      <h2>14. Changes</h2>
      <p>
        We may change these Terms. Material changes will be reflected by
        updating the “Last updated” date. Continued use after changes take
        effect means you accept the revised Terms, where permitted by law.
      </p>

      <h2>15. Governing law</h2>
      <p>
        Until a legal entity and jurisdiction are finalized (
        <strong>{OPERATOR_PLACEHOLDER}</strong>), these Terms are intended to
        be interpreted in a manner consistent with consumer protections that
        apply to you in your place of residence, including EU/UK consumer law
        where applicable. Governing law and venue will be confirmed when the
        operator entity is added.
      </p>

      <h2>16. Contact</h2>
      <p>
        Questions about these Terms: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        Privacy questions: <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>.
        Or use our <Link href="/contact">Contact</Link> page.
      </p>
    </LegalDocument>
  );
}
