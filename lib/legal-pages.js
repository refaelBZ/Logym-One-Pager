import { DEFAULT_OG_IMAGE, SITE_URL } from '@/lib/site';
import { LEGAL_UPDATED } from '@/lib/legal';

export function legalMetadata({ title, description, path }) {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Logym`,
      description,
      type: 'website',
      url,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: 'Logym logo mark on a dark background',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Logym`,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    other: {
      'last-modified': LEGAL_UPDATED,
    },
  };
}
