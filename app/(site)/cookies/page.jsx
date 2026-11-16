import Link from 'next/link';
import LegalDocument from '@/app/components/LegalDocument';
import { COOKIE_CONSENT_KEY, PRIVACY_EMAIL } from '@/lib/legal';
import { legalMetadata } from '@/lib/legal-pages';
import CookiePreferences from './CookiePreferences';

export const metadata = legalMetadata({
  title: 'Cookie Policy',
  description:
    'How Logym uses cookies and similar technologies on the marketing site and in the app.',
  path: '/cookies',
});

export default function CookiesPage() {
  return (
    <LegalDocument
      title="Cookie Policy"
      description="How Logym uses cookies and similar technologies on the marketing site and in the app."
    >
      <h2>1. Summary</h2>
      <p>
        The marketing site (<strong>www.logym.fit</strong>) can use Google
        Analytics 4, which sets non-essential cookies/identifiers. We load
        analytics only after you choose <strong>Accept analytics</strong>.
      </p>
      <p>
        The workout app (<strong>app.logym.fit</strong>) primarily uses browser{' '}
        <code>localStorage</code> for your login session and in-progress workout
        state. That storage is needed for the app to work and is not used for
        advertising.
      </p>

      <h2>2. Manage your choice</h2>
      <CookiePreferences />

      <h2>3. Marketing site (www.logym.fit)</h2>
      <h3>Essential</h3>
      <ul>
        <li>
          <strong>Cookie consent preference</strong> — stored in{' '}
          <code>localStorage</code> key <code>{COOKIE_CONSENT_KEY}</code> so we
          remember whether you accepted or rejected analytics.
        </li>
      </ul>
      <h3>Analytics (optional, consent required)</h3>
      <ul>
        <li>
          <strong>Google Analytics 4</strong> (measurement ID configured for
          Logym) — may set cookies such as <code>_ga</code> and related
          identifiers to understand aggregated traffic and CTA clicks on the
          marketing site.
        </li>
      </ul>
      <p>
        We do not use a Google Tag Manager container on this site. Analytics
        scripts are omitted in development and on Vercel preview deployments.
      </p>

      <h2>4. App (app.logym.fit)</h2>
      <p>The app uses local storage rather than advertising cookies:</p>
      <ul>
        <li>
          <code>logym_token</code> — JWT session token for API authentication
        </li>
        <li>
          <code>logym_userEmail</code> — email used to load your profile/settings
        </li>
        <li>
          <code>logym_active_workout</code> — temporary state so you can resume
          an in-progress workout
        </li>
      </ul>
      <p>
        Clearing site data in your browser will sign you out and remove local
        workout resume state.
      </p>

      <h2>5. Fonts and similar assets</h2>
      <p>
        This marketing site uses the Geist typeface via Next.js{' '}
        <code>next/font</code>. Font files are self-hosted from this site’s own
        origin (<code>/_next/static/media/</code>). Visiting the site does{' '}
        <strong>not</strong> load fonts from fonts.google.com or another Google
        CDN for typography.
      </p>

      <h2>6. Other technologies</h2>
      <p>
        Our hosts (for example Vercel) and security layers may process technical
        data such as IP addresses in server logs. Those are operational, not
        advertising cookies set by Logym.
      </p>

      <h2>7. More information</h2>
      <p>
        See the <Link href="/privacy">Privacy Policy</Link> for how personal
        data is handled. Questions:{' '}
        <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>.
      </p>
    </LegalDocument>
  );
}
