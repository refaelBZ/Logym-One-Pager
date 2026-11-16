import { COOKIE_CONSENT, COOKIE_CONSENT_KEY } from '@/lib/legal';

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-LFJXE5CEGF';
export const GA_HOST = 'www.logym.fit';
export const CTA_EVENT_NAME = 'cta_app_click';
export const APP_ORIGIN = 'https://app.logym.fit/';

export const UTM = {
  source: 'logym_site',
  medium: {
    blog: 'blog',
    landing: 'landing',
  },
  campaignLanding: 'landing',
};

export const CTA_LOCATION = {
  blogPost: 'blog_post_cta',
  landingHero: 'landing_hero',
  landingFooter: 'landing_footer',
  header: 'header',
  caseStudy: 'case_study',
};

export function blogCampaignSlug(pathname = '') {
  const match = String(pathname).match(/^\/blog\/([a-z0-9]+(?:-[a-z0-9]+)*)$/);
  return match ? match[1] : null;
}

export function appCtaUrl(pathname = '/') {
  const slug = blogCampaignSlug(pathname);
  const url = new URL(APP_ORIGIN);
  url.searchParams.set('utm_source', UTM.source);
  url.searchParams.set('utm_medium', slug ? UTM.medium.blog : UTM.medium.landing);
  url.searchParams.set('utm_campaign', slug || UTM.campaignLanding);
  return url.toString();
}

export function shouldIncludeGaSnippet({
  nodeEnv = process.env.NODE_ENV,
  vercelEnv = process.env.VERCEL_ENV,
} = {}) {
  if (nodeEnv !== 'production') return false;
  if (vercelEnv === 'preview') return false;
  return true;
}

export function shouldRunGa(hostname) {
  return hostname === GA_HOST;
}

function canLoadGaInBrowser() {
  if (typeof window === 'undefined') return false;
  if (!shouldIncludeGaSnippet()) return false;
  if (!shouldRunGa(window.location.hostname)) return false;
  try {
    return window.localStorage.getItem(COOKIE_CONSENT_KEY) === COOKIE_CONSENT.accepted;
  } catch {
    return false;
  }
}

export function loadGoogleAnalytics() {
  if (!canLoadGaInBrowser()) return;
  if (typeof window.gtag === 'function' && window.__logymGaLoaded) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  const existing = document.getElementById('logym-ga4');
  if (!existing) {
    const script = document.createElement('script');
    script.id = 'logym-ga4';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
    document.head.appendChild(script);
  }

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
  window.__logymGaLoaded = true;
}

export function unloadGoogleAnalytics() {
  if (typeof window === 'undefined') return;
  window.__logymGaLoaded = false;

  const script = document.getElementById('logym-ga4');
  if (script) script.remove();

  // Best-effort cleanup of GA cookies on this host.
  const cookies = document.cookie ? document.cookie.split(';') : [];
  for (const raw of cookies) {
    const name = raw.split('=')[0]?.trim();
    if (!name) continue;
    if (name.startsWith('_ga') || name === '_gid') {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=${window.location.hostname}`;
      document.cookie = `${name}=; Max-Age=0; path=/`;
    }
  }
}

export function trackCtaClick(location, pagePath) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  if (!canLoadGaInBrowser()) return;
  window.gtag('event', CTA_EVENT_NAME, {
    cta_location: location,
    page_path: pagePath || window.location.pathname,
  });
}
