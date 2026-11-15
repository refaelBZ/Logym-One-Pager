export const SITE_URL = 'https://www.logym.fit';

export function isPreviewDeployment() {
  return process.env.VERCEL_ENV === 'preview';
}
export const SITE_NAME = 'Logym';
export const CTA_URL = 'https://app.logym.fit/';
export const LOGO_PATH = '/logym.svg';
export const DEFAULT_OG_IMAGE = '/blog/og-default.webp';
export const MARKETING_UPDATED = '2026-01-31';
export const BLOG_UPDATED = '2026-11-15';
export const BREAKPOINT_MD = 768;
export const CONTENT_WIDTH = 720;

export const CTA_TEXT =
  'Log weight and reps between sets, follow a ready-made or custom plan, and see visual progress. Free, no commitment.';

export function absoluteUrl(pathname = '/') {
  if (!pathname) return SITE_URL;
  if (/^https?:\/\//.test(pathname)) return pathname;
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${SITE_URL}${path}`;
}
