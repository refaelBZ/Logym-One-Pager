import Image from 'next/image';
import Link from 'next/link';
import { CLUSTERS, formatDate, sourceIncludesCta } from '@/lib/blog';
import { MdxContent } from '@/lib/mdx';
import { blogPostingSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { BREAKPOINT_MD, CONTENT_WIDTH } from '@/lib/site';
import Breadcrumbs from '../Breadcrumbs';
import CtaBlock from '../CtaBlock';
import Faq from '../Faq';
import JsonLd from '../JsonLd';
import styles from './style.module.scss';

export default function ArticleLayout({ post, author }) {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.title },
  ];
  const showFaq = post.faq.length > 0;

  return (
    <article className={styles.article}>
      <JsonLd data={blogPostingSchema(post, author)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      {showFaq ? <JsonLd data={faqSchema(post.faq)} /> : null}
      <Breadcrumbs items={crumbs} />
      {post.draft ? (
        <p className={styles.draft}>Draft. This preview is hidden in production.</p>
      ) : null}
      <header>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.byline}>
          <span>
            By <Link href={`/authors/${author.slug}`}>{author.name}</Link>
          </span>
          <span>
            Published <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
          </span>
          <span>
            Updated <time dateTime={post.dateModified}>{formatDate(post.dateModified)}</time>
          </span>
        </p>
        <p className={styles.topic}>{CLUSTERS[post.cluster]}</p>
      </header>
      <div className={styles.hero}>
        <Image
          className={styles.heroImage}
          src={post.heroImage.src}
          alt={post.heroImage.alt}
          width={post.heroImage.width}
          height={post.heroImage.height}
          priority
          fetchPriority="high"
          sizes={`(max-width: ${BREAKPOINT_MD}px) 100vw, ${CONTENT_WIDTH}px`}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className={styles.body}>
        <MdxContent source={post.content} />
      </div>
      {showFaq ? <Faq items={post.faq} /> : null}
      {sourceIncludesCta(post.content) ? null : <CtaBlock />}
      <p className={styles.disclaimer}>
        This is educational training content, not medical advice.
      </p>
    </article>
  );
}
