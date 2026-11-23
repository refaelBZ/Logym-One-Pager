import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../components/blog/Breadcrumbs';
import CtaBlock from '../../components/blog/CtaBlock';
import Faq from '../../components/blog/Faq';
import JsonLd from '../../components/blog/JsonLd';
import { CTA_LOCATION } from '@/lib/analytics';
import { breadcrumbSchema, faqSchema, webApplicationSchema } from '@/lib/schema';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/site';
import { getTool, TOOLS } from '@/lib/tools/catalog';
import { LIFTS, LEVELS, THRESHOLDS } from '@/lib/tools/strength-standards';
import ToolCalculator from '../ToolCalculator';
import styles from '../tools.module.scss';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return TOOLS.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  const canonical = `/tools/${tool.slug}`;

  return {
    title: tool.title,
    description: tool.description,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      url: canonical,
      title: `${tool.title} | ${SITE_NAME}`,
      description: tool.description,
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
      title: `${tool.title} | ${SITE_NAME}`,
      description: tool.description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

function StandardsTable() {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Table</th>
            <th>Lift</th>
            {LEVELS.map((level) => (
              <th key={level}>{level}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {['male', 'female'].flatMap((sex) => LIFTS.map((lift) => (
            <tr key={`${sex}-${lift.id}`}>
              <td>{sex}</td>
              <td>{lift.label}</td>
              {THRESHOLDS[sex][lift.id].map((cutoff) => (
                <td key={cutoff}>{cutoff}</td>
              ))}
            </tr>
          )))}
        </tbody>
      </table>
    </div>
  );
}

export default async function ToolPage({ params }) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools' },
    { name: tool.title },
  ];

  return (
    <div className={`${styles.wrap} ${styles.page}`}>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={faqSchema(tool.faq)} />
      <JsonLd data={webApplicationSchema({
        name: tool.title,
        description: tool.description,
        path: `/tools/${tool.slug}`,
      })}
      />
      <Breadcrumbs items={crumbs} />
      <h1 className={styles.title}>{tool.title}</h1>
      <p className={styles.intro}>{tool.description}</p>
      <section className={styles.section} aria-labelledby="how-to-use">
        <h2 id="how-to-use" className={styles.sectionTitle}>How to use it</h2>
        <ol className={styles.steps}>
          {tool.howTo.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </section>
      <ToolCalculator slug={tool.slug} />
      <section className={styles.section} aria-labelledby="how-calculated">
        <h2 id="how-calculated" className={styles.sectionTitle}>How it is calculated</h2>
        <ul className={styles.method}>
          {tool.method.map((line) => <li key={line}>{line}</li>)}
        </ul>
        {tool.slug === 'strength-standards-calculator' ? <StandardsTable /> : null}
      </section>
      <Faq items={tool.faq} />
      <section className={styles.section} aria-labelledby="related-guides">
        <h2 id="related-guides" className={styles.sectionTitle}>Related guides</h2>
        <ul className={styles.related}>
          {tool.related.map((post) => (
            <li key={post.href}>
              <Link href={post.href}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBlock location={CTA_LOCATION.toolPage}>{tool.cta}</CtaBlock>
      <p className={styles.note}>This is a training estimate, not medical advice.</p>
    </div>
  );
}
