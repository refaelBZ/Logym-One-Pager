import { absoluteUrl, LOGO_PATH, SITE_NAME, SITE_URL } from './site';

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const IMAGE_LICENSE_PAGE = absoluteUrl('/image-license');

const PEXELS_LICENSE = 'https://www.pexels.com/license/';
const UNSPLASH_LICENSE = 'https://unsplash.com/license';

function photoHost(src, pageUrl) {
  const host = `${src ?? ''} ${pageUrl ?? ''}`;
  if (host.includes('unsplash.com')) return 'Unsplash';
  if (host.includes('pexels.com')) return 'Pexels';
  return null;
}

function ownedImageFields() {
  return {
    creator: { '@type': 'Organization', name: SITE_NAME },
    copyrightNotice: `© ${SITE_NAME}`,
    creditText: SITE_NAME,
    license: IMAGE_LICENSE_PAGE,
    acquireLicensePage: IMAGE_LICENSE_PAGE,
  };
}

export function imageObject(image, credit) {
  const result = {
    '@type': 'ImageObject',
    url: absoluteUrl(image.src),
    ...ownedImageFields(),
  };
  if (image.width) result.width = image.width;
  if (image.height) result.height = image.height;
  if (image.caption) result.caption = image.caption;

  const source = photoHost(image.src, credit?.url);
  if (!credit?.photographer || !source) return result;

  result.creator = {
    '@type': 'Person',
    name: credit.photographer,
    ...(credit.url ? { url: credit.url } : {}),
  };
  result.creditText = `Photo by ${credit.photographer} on ${source}`;
  result.copyrightNotice = `© ${credit.photographer}`;
  result.license = source === 'Unsplash' ? UNSPLASH_LICENSE : PEXELS_LICENSE;
  result.acquireLicensePage = credit.url || IMAGE_LICENSE_PAGE;
  return result;
}

const logo = imageObject({ src: LOGO_PATH, width: 100, height: 100 });

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
  const image = imageObject(post.heroImage, post.heroImageCredit);

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
    image,
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
    person.image = imageObject(author.image);
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: absoluteUrl(`/authors/${author.slug}`),
    mainEntity: person,
  };
}

export function webApplicationSchema({ name, description, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url: absoluteUrl(path),
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    publisher: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: SITE_NAME,
      url: SITE_URL,
    },
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
