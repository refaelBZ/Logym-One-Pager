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

export function trackCtaClick(location, pagePath) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', CTA_EVENT_NAME, {
    cta_location: location,
    page_path: pagePath || window.location.pathname,
  });
}
