import { absoluteUrl, LOGO_PATH, SITE_NAME, SITE_URL } from './site';

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

const logo = {
  '@type': 'ImageObject',
  url: absoluteUrl(LOGO_PATH),
  width: 100,
  height: 100,
};

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo,
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}

export function blogPostingSchema(post, author) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(`/blog/${post.slug}`),
    },
    image: {
      '@type': 'ImageObject',
      url: absoluteUrl(post.heroImage.src),
      width: post.heroImage.width,
      height: post.heroImage.height,
    },
    author: {
      '@type': 'Person',
      name: author.name,
      url: absoluteUrl(`/authors/${author.slug}`),
    },
    publisher: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: SITE_NAME,
      url: SITE_URL,
      logo,
    },
  };
}

export function profilePageSchema(author) {
  const person = {
    '@type': 'Person',
    name: author.name,
    url: absoluteUrl(`/authors/${author.slug}`),
    description: author.bio,
  };

  if (author.image?.src) {
    person.image = absoluteUrl(author.image.src);
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: absoluteUrl(`/authors/${author.slug}`),
    mainEntity: person,
  };
}

export function faqSchema(faq) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
