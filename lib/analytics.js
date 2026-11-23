export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-LFJXE5CEGF';
export const GA_HOST = 'www.logym.fit';
export const CTA_EVENT_NAME = 'cta_app_click';
export const APP_ORIGIN = 'https://app.logym.fit/';

export const UTM = {
  source: 'logym_site',
  medium: {
    blog: 'blog',
    tools: 'tools',
    landing: 'landing',
  },
  campaignLanding: 'landing',
  campaignTools: 'tools',
};

export const CTA_LOCATION = {
  blogPost: 'blog_post_cta',
  toolPage: 'tool_page_cta',
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
  const path = String(pathname);
  const blogSlug = blogCampaignSlug(path);
  const toolSlug = path.match(/^\/tools\/([a-z0-9]+(?:-[a-z0-9]+)*)$/)?.[1] ?? null;
  const url = new URL(APP_ORIGIN);
  url.searchParams.set('utm_source', UTM.source);
  if (blogSlug) {
    url.searchParams.set('utm_medium', UTM.medium.blog);
    url.searchParams.set('utm_campaign', blogSlug);
  } else if (toolSlug) {
    url.searchParams.set('utm_medium', UTM.medium.tools);
    url.searchParams.set('utm_campaign', toolSlug);
  } else if (path === '/tools') {
    url.searchParams.set('utm_medium', UTM.medium.tools);
    url.searchParams.set('utm_campaign', UTM.campaignTools);
  } else {
    url.searchParams.set('utm_medium', UTM.medium.landing);
    url.searchParams.set('utm_campaign', UTM.campaignLanding);
  }
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
