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
  title: 'Privacy Policy',
  description:
    'Draft privacy policy describing how Logym collects and uses personal data under GDPR, UK GDPR, and US privacy laws.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      description="This policy explains what personal data Logym collects, why we collect it, and the choices you have. It covers the marketing site (www.logym.fit) and the app (app.logym.fit)."
    >
      <h2>1. Who is responsible</h2>
      <p>
        The controller of your personal data is:{' '}
        <strong>{OPERATOR_PLACEHOLDER}</strong>. Contact:{' '}
        <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a> (privacy) or{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> (support).
      </p>
      <p>
        This document is a <strong>draft pending legal review</strong>. Data
        statements below are based on the current Logym application and
        marketing site code.
      </p>

      <h2>2. Scope</h2>
      <p>This policy applies to:</p>
      <ul>
        <li>the Logym marketing website and blog;</li>
        <li>the Logym web app used to create accounts and log workouts;</li>
        <li>related emails we send (welcome and password reset).</li>
      </ul>

      <h2>3. Personal data we collect</h2>
      <h3>Account and profile</h3>
      <ul>
        <li>Username</li>
        <li>Email address</li>
        <li>Password (stored hashed with bcrypt; we do not store plain-text passwords)</li>
        <li>Account settings such as weight step size</li>
        <li>Account status and creation date</li>
        <li>Password-reset tokens and expiry times when you request a reset</li>
      </ul>

      <h3>Workout and training data you create</h3>
      <ul>
        <li>Workout names, descriptions, notes, status, and dates</li>
        <li>Exercises (name, muscle group, planned sets/reps)</li>
        <li>Logged performance: weight, reps, sets, difficulty/effort, scores, and history over time</li>
        <li>Optional free-text notes you add to exercises or workouts</li>
      </ul>
      <p>
        We treat workout logs as personal data linked to your account. They may
        also be considered health-related information in some jurisdictions
        because they describe physical activity. We only use this data to
        provide the tracking features you request.
      </p>

      <h3>Device and session data</h3>
      <ul>
        <li>
          App session: a JWT auth token and your email address stored in the
          browser’s <code>localStorage</code> (<code>logym_token</code>,{' '}
          <code>logym_userEmail</code>)
        </li>
        <li>
          Active workout resume state in <code>localStorage</code> (
          <code>logym_active_workout</code>)
        </li>
        <li>Standard server/technical logs needed to operate and secure the API (for example IP address and request metadata processed by our hosts)</li>
      </ul>

      <h3>Marketing site analytics (optional)</h3>
      <p>
        If you accept analytics cookies, Google Analytics 4 may collect
        approximate usage data on <strong>www.logym.fit</strong> (pages viewed,
        device/browser information, approximate location derived by Google, and
        similar metrics). See the <Link href="/cookies">Cookie Policy</Link>.
        Analytics are not loaded until you consent. You can change your choice
        anytime on the Cookie Policy page.
      </p>
      <p>
        Site fonts (Geist) are self-hosted with the marketing site and are not
        fetched from Google’s font CDN when you browse www.logym.fit.
      </p>

      <h3>What we do not currently collect</h3>
      <ul>
        <li>Payment card or billing data (no in-app payments yet)</li>
        <li>Precise GPS location</li>
        <li>Government ID numbers</li>
        <li>Biometric identifiers</li>
        <li>Contacts from your device</li>
      </ul>
      <p>
        An OpenAI client library exists in the server codebase but is not
        active in the current product paths we reviewed. We do not presently
        send your workout content to generative AI providers. If that changes,
        we will update this policy first.
      </p>

      <h2>4. How we collect data</h2>
      <ul>
        <li>Directly from you when you sign up, log in, edit your profile, create workouts, or contact us</li>
        <li>Automatically through the app’s API when you use features</li>
        <li>Automatically on the marketing site if you consent to analytics</li>
      </ul>

      <h2>5. Why we use data (purposes and legal bases)</h2>
      <p>Under GDPR / UK GDPR we rely on these bases:</p>
      <ul>
        <li>
          <strong>Contract</strong> — to create and manage your account,
          authenticate you, store your workouts, and provide the tracking
          service you request.
        </li>
        <li>
          <strong>Legitimate interests</strong> — to secure the service, prevent
          abuse, debug failures, and improve reliability, balanced against your
          rights.
        </li>
        <li>
          <strong>Consent</strong> — for non-essential marketing-site analytics
          cookies (Google Analytics). You can withdraw consent at any time via
          the Cookie Policy controls.
        </li>
        <li>
          <strong>Legal obligation</strong> — where we must retain or disclose
          information to comply with law.
        </li>
      </ul>
      <p>
        Where workout data is treated as special-category/health data, we
        process it only as needed to provide the fitness logging service you
        actively use. A lawyer should confirm the precise Art. 9 condition
        before launch in the EU/UK.
      </p>

      <h2>6. Where data is stored and who processes it</h2>
      <p>Based on the current architecture:</p>
      <ul>
        <li>
          <strong>Application database:</strong> MongoDB (hosted MongoDB Atlas
          or equivalent via <code>MONGO_URI</code>)
        </li>
        <li>
          <strong>App frontend hosting:</strong> Vercel (including{' '}
          <code>app.logym.fit</code> / Vercel project hosting)
        </li>
        <li>
          <strong>Marketing site hosting:</strong> Vercel (<code>www.logym.fit</code>)
        </li>
        <li>
          <strong>API / backend hosting:</strong> the Node/Express API that
          serves the app (hosting provider to be confirmed in LEGAL-TODO)
        </li>
        <li>
          <strong>Transactional email:</strong> SMTP / email provider configured
          via environment variables (Nodemailer) for welcome and password-reset
          messages
        </li>
        <li>
          <strong>Analytics (optional):</strong> Google Analytics 4 on the
          marketing site only, after consent
        </li>
      </ul>
      <p>
        These providers may process data in the United States or other
        countries. Where required, we will use appropriate transfer safeguards
        (such as Standard Contractual Clauses). Confirm processor list and
        regions before launch.
      </p>

      <h2>7. How long we keep data</h2>
      <ul>
        <li>Account and workout data: kept while your account remains active</li>
        <li>Password-reset tokens: short-lived (about one hour)</li>
        <li>JWT sessions: expire after about 30 days unless you log out earlier</li>
        <li>Analytics data: according to your Google Analytics retention settings</li>
        <li>Support emails: kept as long as needed to resolve your request</li>
      </ul>
      <p>
        When you ask us to delete your account, we will delete or anonymize
        personal data we control, except where we must retain it for legal
        reasons. Self-serve account deletion is not yet built into the app UI;
        email us to request deletion.
      </p>

      <h2>8. Sharing</h2>
      <p>We do not sell your personal information. We share data only with:</p>
      <ul>
        <li>service providers who process it on our instructions (hosting, database, email, analytics if consented);</li>
        <li>authorities when required by law;</li>
        <li>a successor entity if Logym is transferred as part of a business transaction, with notice where required.</li>
      </ul>

      <h2>9. Your rights</h2>
      <h3>EEA / UK (GDPR / UK GDPR)</h3>
      <p>You may have the right to:</p>
      <ul>
        <li>access your data;</li>
        <li>correct inaccurate data;</li>
        <li>erase data;</li>
        <li>restrict or object to certain processing;</li>
        <li>data portability;</li>
        <li>withdraw consent (for analytics) at any time;</li>
        <li>lodge a complaint with your local supervisory authority.</li>
      </ul>

      <h3>California and similar US state laws (CCPA/CPRA basics)</h3>
      <p>
        If you are a California resident, you may have rights to know, delete,
        and correct personal information, and to opt out of “sale” or “sharing”
        for cross-context behavioral advertising. We do not sell personal
        information for money. Marketing analytics, if enabled, may involve
        disclosures that some laws treat as “sharing”; you can refuse analytics
        cookies to limit this. We do not knowingly use sensitive personal
        information for purposes that require a Limit Use right beyond providing
        the service.
      </p>
      <p>
        To exercise rights, email <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>.
        We will verify requests reasonably and respond within the time required
        by law.
      </p>

      <h2>10. Children (COPPA and similar)</h2>
      <p>
        The minimum age to use Logym is <strong>{MINIMUM_AGE}</strong> worldwide.
        Logym is not directed to children, and we do not knowingly collect
        personal information from anyone under {MINIMUM_AGE}. That threshold is
        at or above the GDPR Art. 8 digital-consent age in every EU/EEA member
        state and above the US COPPA under-13 rule.
      </p>
      <p>
        If you believe someone under {MINIMUM_AGE} provided personal data,
        contact us and we will delete it.
      </p>

      <h2>11. Security</h2>
      <p>
        We use industry-standard measures appropriate to a small web app,
        including password hashing (bcrypt), JWT-based API authentication, HTTPS
        on our public sites, and access controls on hosting accounts. No method
        of transmission or storage is 100% secure.
      </p>

      <h2>12. Automated decision-making</h2>
      <p>
        We do not use your data for automated decisions that produce legal or
        similarly significant effects about you.
      </p>

      <h2>13. Changes</h2>
      <p>
        We may update this Privacy Policy. The “Last updated” date will change
        when we do. For material changes we will take additional steps where
        required by law.
      </p>

      <h2>14. Contact</h2>
      <p>
        Privacy requests: <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>
        <br />
        General support: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        <br />
        Or visit <Link href="/contact">Contact</Link>.
      </p>
    </LegalDocument>
  );
}
