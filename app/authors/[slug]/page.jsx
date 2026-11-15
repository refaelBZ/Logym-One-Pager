import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../components/blog/Breadcrumbs';
import JsonLd from '../../components/blog/JsonLd';
import { formatDate, getAllAuthors, getAuthor, getPostsByAuthor } from '@/lib/blog';
import { breadcrumbSchema, profilePageSchema } from '@/lib/schema';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/site';
import styles from '../author.module.scss';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllAuthors().map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) return {};
  const image = author.image
    ? {
        url: author.image.src,
        width: author.image.width,
        height: author.image.height,
        alt: author.image.alt,
      }
    : {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Logym logo mark on a dark background',
      };

  return {
    title: author.name,
    description: author.bio,
    alternates: { canonical: `/authors/${author.slug}` },
    openGraph: {
      type: 'profile',
      url: `/authors/${author.slug}`,
      title: `${author.name} | ${SITE_NAME}`,
      description: author.bio,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${author.name} | ${SITE_NAME}`,
      description: author.bio,
      images: [image.url],
    },
  };
}

export default async function AuthorPage({ params }) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();
  const posts = getPostsByAuthor(author.slug);
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: author.name },
  ];

  return (
    <div className={styles.wrap}>
      <JsonLd data={profilePageSchema(author)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <header className={styles.identity}>
        {author.image ? (
          <Image
            className={styles.avatar}
            src={author.image.src}
            alt={author.image.alt}
            width={author.image.width}
            height={author.image.height}
            style={{ width: 'var(--space-64)', height: 'var(--space-64)' }}
          />
        ) : null}
        <div>
          <h1 className={styles.name}>{author.name}</h1>
          <p className={styles.role}>{author.role}</p>
        </div>
      </header>
      <p className={styles.bio}>{author.bio}</p>
      <section className={styles.articles} aria-labelledby="author-articles">
        <h2 id="author-articles" className={styles.articlesTitle}>Articles</h2>
        {posts.length === 0 ? (
          <p className={styles.empty}>No articles published yet.</p>
        ) : (
          <ul className={styles.list}>
            {posts.map((post) => (
              <li key={post.slug}>
                <h3 className={styles.cardTitle}>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className={styles.meta}>
                  <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
                </p>
                <p className={styles.summary}>{post.description}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
