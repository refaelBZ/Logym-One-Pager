import { SITE_URL } from '@/lib/site';

// Owner decision, 2026-11-15: allow every crawler, including GPTBot,
// ClaudeBot, and Google-Extended. Do not add an allowlist or Disallow rules.
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
