import { notFound } from 'next/navigation';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { getAuthor, getPost, getRenderablePosts } from '@/lib/blog';
import { SITE_NAME } from '@/lib/site';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return getRenderablePosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const author = getAuthor(post.author);
  const canonical = post.canonical || `/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      url: canonical,
      title: post.title,
      description: post.description,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: author ? [author.name] : [],
      images: [
        {
          url: post.heroImage.src,
          width: post.heroImage.width,
          height: post.heroImage.height,
          alt: post.heroImage.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | ${SITE_NAME}`,
      description: post.description,
      images: [post.heroImage.src],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const author = getAuthor(post.author);
  if (!author) notFound();

  return <ArticleLayout post={post} author={author} />;
}
