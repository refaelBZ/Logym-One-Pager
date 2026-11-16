// Placeholder copy. The legal text is being written separately.
export const CONSENT_COPY = {
  title: 'Cookies',
  body: 'Placeholder. This site can measure visits with analytics cookies. The legal text is still being written.',
  accept: 'Accept',
  reject: 'Reject',
  privacyLink: 'Privacy',
};

export const PRIVACY_PATH = '/privacy';
export const CONSENT_STORAGE_KEY = 'logym_analytics_consent';
export const CONSENT_GRANTED = 'granted';
export const CONSENT_DENIED = 'denied';

export function consentBannerEnabled(value = process.env.NEXT_PUBLIC_CONSENT_BANNER) {
  return value === 'true';
}

export function analyticsStorageFor(choice) {
  return choice === CONSENT_GRANTED ? 'granted' : 'denied';
}

export function applyAnalyticsConsent(choice) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('consent', 'update', {
    analytics_storage: analyticsStorageFor(choice),
  });
}
