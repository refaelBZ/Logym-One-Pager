'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { COOKIE_CONSENT, COOKIE_CONSENT_KEY } from '@/lib/legal';
import { loadGoogleAnalytics, unloadGoogleAnalytics } from '@/lib/analytics';
import styles from './style.module.scss';

function readConsent() {
  try {
    return window.localStorage.getItem(COOKIE_CONSENT_KEY);
  } catch {
    return null;
  }
}

function writeConsent(value) {
  try {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
  } catch {
    // Ignore storage failures; banner may reappear.
  }
  window.dispatchEvent(new Event('logym-cookie-consent'));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const titleId = useId();
  const descId = useId();
  const rejectRef = useRef(null);

  useEffect(() => {
    const existing = readConsent();
    if (existing === COOKIE_CONSENT.accepted) {
      loadGoogleAnalytics();
      setVisible(false);
      return;
    }
    if (existing === COOKIE_CONSENT.rejected) {
      unloadGoogleAnalytics();
      setVisible(false);
      return;
    }
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible || !rejectRef.current) return;
    rejectRef.current.focus();
  }, [visible]);

  const accept = () => {
    writeConsent(COOKIE_CONSENT.accepted);
    loadGoogleAnalytics();
    setVisible(false);
  };

  const reject = () => {
    writeConsent(COOKIE_CONSENT.rejected);
    unloadGoogleAnalytics();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={styles.banner}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p id={titleId} className={styles.title}>
            Cookies and analytics
          </p>
          <p id={descId} className={styles.text}>
            We use Google Analytics on this marketing site only if you allow it.
            Essential storage for the app (such as your login session) is separate.{' '}
            <Link href="/cookies">Cookie Policy</Link>
            {' · '}
            <Link href="/privacy">Privacy Policy</Link>
          </p>
        </div>
        <div className={styles.actions}>
          <button
            ref={rejectRef}
            type="button"
            className={styles.reject}
            onClick={reject}
          >
            Essential only
          </button>
          <button type="button" className={styles.accept} onClick={accept}>
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}
