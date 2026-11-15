import { getPublishedPosts } from '@/lib/blog';
import { absoluteUrl, SITE_NAME, SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function rfc822(iso) {
  const [year, month, day] = iso.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toUTCString();
}

function isoStamp(iso) {
  return `${iso}T00:00:00Z`;
}

function buildRss() {
  const posts = getPublishedPosts();
  const items = posts.map((post) => {
    const link = absoluteUrl(`/blog/${post.slug}`);
    return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${rfc822(post.datePublished)}</pubDate>
      <atom:updated>${isoStamp(post.dateModified)}</atom:updated>
    </item>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${SITE_NAME} Blog`)}</title>
    <link>${escapeXml(`${SITE_URL}/blog`)}</link>
    <atom:link href="${escapeXml(absoluteUrl('/blog/rss.xml'))}" rel="self" type="application/rss+xml" />
    <description>Practical strength training guides from ${escapeXml(SITE_NAME)}.</description>
    <language>en</language>
${items}
  </channel>
</rss>
`;
}

export function GET() {
  return new Response(buildRss(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
