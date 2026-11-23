import Link from 'next/link';
import Breadcrumbs from '../components/blog/Breadcrumbs';
import JsonLd from '../components/blog/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/site';
import { TOOLS } from '@/lib/tools/catalog';
import styles from './tools.module.scss';

const title = 'Free Strength Training Tools';
const description = 'Free calculators and templates for one-rep max, plates, strength standards, double progression, and a weekly training review.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/tools' },
  openGraph: {
    type: 'website',
    url: '/tools',
    title: `${title} | ${SITE_NAME}`,
    description,
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
    title: `${title} | ${SITE_NAME}`,
    description,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function ToolsIndexPage() {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Tools' },
  ];

  return (
    <div className={styles.wrap}>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.intro}>{description}</p>
      <ul className={styles.list}>
        {TOOLS.map((tool) => (
          <li key={tool.slug}>
            <article className={styles.card}>
              <h2 className={styles.cardTitle}>
                <Link href={`/tools/${tool.slug}`}>{tool.title}</Link>
              </h2>
              <p className={styles.summary}>{tool.summary}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
