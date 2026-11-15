import { getAllAuthors, getPublishedPosts } from '@/lib/blog';
import { BLOG_UPDATED, MARKETING_UPDATED, SITE_URL } from '@/lib/site';

export default function sitemap() {
  const posts = getPublishedPosts();
  const blogUpdated = posts[0]?.dateModified ?? BLOG_UPDATED;

  return [
    { url: `${SITE_URL}/`, lastModified: MARKETING_UPDATED },
    { url: `${SITE_URL}/casestudy`, lastModified: MARKETING_UPDATED },
    { url: `${SITE_URL}/blog`, lastModified: blogUpdated },
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.dateModified,
    })),
    ...getAllAuthors().map((author) => {
      const authored = posts.filter((post) => post.author === author.slug);
      return {
        url: `${SITE_URL}/authors/${author.slug}`,
        lastModified: authored[0]?.dateModified ?? blogUpdated,
      };
    }),
  ];
}
