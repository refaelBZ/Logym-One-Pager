'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  CONSENT_COPY,
  CONSENT_DENIED,
  CONSENT_GRANTED,
  CONSENT_STORAGE_KEY,
  PRIVACY_PATH,
  applyAnalyticsConsent,
  consentBannerEnabled,
} from '@/lib/consent';
import styles from './style.module.scss';

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!consentBannerEnabled()) return;
    let choice = null;
    try {
      choice = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    } catch {
      choice = null;
    }
    if (choice !== CONSENT_GRANTED && choice !== CONSENT_DENIED) {
      setVisible(true);
    }
  }, []);

  if (!consentBannerEnabled() || !visible) return null;

  function choose(choice) {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    } catch {
      // Storage can be blocked. Still update consent for this page.
    }
    applyAnalyticsConsent(choice);
    setVisible(false);
  }

  return (
    <section className={styles.banner} aria-labelledby="consent-title">
      <div className={styles.copy}>
        <h2 id="consent-title" className={styles.title}>{CONSENT_COPY.title}</h2>
        <p className={styles.body}>
          {CONSENT_COPY.body}{' '}
          <Link href={PRIVACY_PATH}>{CONSENT_COPY.privacyLink}</Link>
        </p>
      </div>
      <div className={styles.actions}>
        <button type="button" className={styles.reject} onClick={() => choose(CONSENT_DENIED)}>
          {CONSENT_COPY.reject}
        </button>
        <button type="button" className={styles.accept} onClick={() => choose(CONSENT_GRANTED)}>
          {CONSENT_COPY.accept}
        </button>
      </div>
    </section>
  );
}
