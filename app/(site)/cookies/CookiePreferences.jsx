'use client';

import { useEffect, useState } from 'react';
import { COOKIE_CONSENT, COOKIE_CONSENT_KEY } from '@/lib/legal';
import { loadGoogleAnalytics, unloadGoogleAnalytics } from '@/lib/analytics';
import styles from './cookies.module.scss';

function readConsent() {
  try {
    return window.localStorage.getItem(COOKIE_CONSENT_KEY);
  } catch {
    return null;
  }
}

export default function CookiePreferences() {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    setConsent(readConsent());
    const sync = () => setConsent(readConsent());
    window.addEventListener('logym-cookie-consent', sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener('logym-cookie-consent', sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  const accept = () => {
    try {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, COOKIE_CONSENT.accepted);
    } catch {
      // ignore
    }
    loadGoogleAnalytics();
    window.dispatchEvent(new Event('logym-cookie-consent'));
    setConsent(COOKIE_CONSENT.accepted);
  };

  const reject = () => {
    try {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, COOKIE_CONSENT.rejected);
    } catch {
      // ignore
    }
    unloadGoogleAnalytics();
    window.dispatchEvent(new Event('logym-cookie-consent'));
    setConsent(COOKIE_CONSENT.rejected);
  };

  const statusLabel =
    consent === COOKIE_CONSENT.accepted
      ? 'Analytics accepted'
      : consent === COOKIE_CONSENT.rejected
        ? 'Essential only'
        : 'No choice saved yet';

  return (
    <div className={styles.panel}>
      <p>
        Current preference: <strong>{statusLabel}</strong>
      </p>
      <div className={styles.actions}>
        <button type="button" className={styles.reject} onClick={reject}>
          Essential only
        </button>
        <button type="button" className={styles.accept} onClick={accept}>
          Accept analytics
        </button>
      </div>
    </div>
  );
}
