'use client';

import { useEffect } from 'react';
import { COOKIE_CONSENT, COOKIE_CONSENT_KEY } from '@/lib/legal';
import { loadGoogleAnalytics, unloadGoogleAnalytics } from '@/lib/analytics';

// GA4 loads only after the visitor accepts analytics cookies.
export default function GoogleAnalytics() {
  useEffect(() => {
    const sync = () => {
      try {
        const consent = window.localStorage.getItem(COOKIE_CONSENT_KEY);
        if (consent === COOKIE_CONSENT.accepted) {
          loadGoogleAnalytics();
        } else {
          unloadGoogleAnalytics();
        }
      } catch {
        unloadGoogleAnalytics();
      }
    };

    sync();
    window.addEventListener('logym-cookie-consent', sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener('logym-cookie-consent', sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  return null;
}
