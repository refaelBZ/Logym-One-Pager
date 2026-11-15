import Link from 'next/link';
import Breadcrumbs from '../components/blog/Breadcrumbs';
import JsonLd from '../components/blog/JsonLd';
import { formatDate, getPublishedPosts } from '@/lib/blog';
import { breadcrumbSchema } from '@/lib/schema';
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/site';
import styles from './blog.module.scss';

const title = 'Strength Training Guides';
const description = 'Practical strength training guides on workout logging, progressive overload, and training programs.';

export const dynamic = 'force-static';

export const metadata = {
  title,
  description,
  alternates: {
    canonical: '/blog',
    types: {
      'application/rss+xml': `${absoluteUrl('/blog/rss.xml')}`,
    },
  },
  openGraph: {
    type: 'website',
    url: '/blog',
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

export default function BlogIndexPage() {
  const posts = getPublishedPosts();
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog' },
  ];

  return (
    <div className={styles.wrap}>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.intro}>{description}</p>
      {posts.length === 0 ? (
        <p className={styles.empty}>No articles published yet. New guides are on the way.</p>
      ) : (
        <ul className={styles.list}>
          {posts.map((post) => (
            <li key={post.slug}>
              <article className={styles.card}>
                <h2 className={styles.cardTitle}>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className={styles.meta}>
                  <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
                </p>
                <p className={styles.summary}>{post.description}</p>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
