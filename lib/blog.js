import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');
const AUTHOR_DIR = path.join(process.cwd(), 'content/authors');

export const CLUSTERS = {
  logging: 'Workout logging',
  overload: 'Progressive overload',
  programs: 'Training programs',
  standards: '1RM and standards',
  plateaus: 'Plateaus',
  beginners: 'Beginners',
};

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function fail(file, message) {
  throw new Error(`${file}: ${message}`);
}

function asIsoDate(value, field, file) {
  let iso = value;
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    iso = value.toISOString().slice(0, 10);
  }
  if (typeof iso !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(iso)) {
    fail(file, `${field} must be a YYYY-MM-DD date`);
  }
  const [year, month, day] = iso.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    fail(file, `${field} is not a real calendar date`);
  }
  return iso;
}

function assertImage(image, field, file) {
  if (!image || typeof image !== 'object') {
    fail(file, `${field} must include src, alt, width, and height`);
  }
  if (typeof image.src !== 'string' || !image.src.startsWith('/')) {
    fail(file, `${field}.src must be a site path starting with /`);
  }
  if (typeof image.alt !== 'string' || image.alt.trim() === '') {
    fail(file, `${field}.alt is required`);
  }
  const width = Number(image.width);
  const height = Number(image.height);
  if (!Number.isInteger(width) || width <= 0 || !Number.isInteger(height) || height <= 0) {
    fail(file, `${field}.width and ${field}.height must be positive integers`);
  }
  const filePath = path.join(process.cwd(), 'public', image.src.replace(/^\//, ''));
  if (!fs.existsSync(filePath)) {
    fail(file, `${field}.src does not exist at public${image.src}`);
  }
  return { src: image.src, alt: image.alt.trim(), width, height };
}

function readAuthors() {
  if (!fs.existsSync(AUTHOR_DIR)) {
    fail('content/authors', 'directory is missing');
  }
  return fs
    .readdirSync(AUTHOR_DIR)
    .filter((file) => file.endsWith('.json'))
    .map((file) => {
      const filePath = path.join(AUTHOR_DIR, file);
      const slug = file.slice(0, -'.json'.length);
      const label = `content/authors/${file}`;
      if (!SLUG_PATTERN.test(slug)) {
        fail(label, 'filename must be a lowercase hyphenated slug');
      }
      let data;
      try {
        data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      } catch (error) {
        fail(label, `invalid JSON (${error.message})`);
      }
      if (data.slug !== slug) {
        fail(label, `slug "${data.slug}" does not match filename "${slug}"`);
      }
      if (typeof data.name !== 'string' || data.name.trim() === '') {
        fail(label, 'name is required');
      }
      if (typeof data.role !== 'string' || data.role.trim() === '') {
        fail(label, 'role is required');
      }
      if (typeof data.bio !== 'string' || data.bio.trim() === '') {
        fail(label, 'bio is required');
      }
      const author = {
        slug,
        name: data.name.trim(),
        role: data.role.trim(),
        bio: data.bio.trim(),
      };
      if (data.image) {
        author.image = assertImage(data.image, 'image', label);
      }
      if (data.sameAs !== undefined) {
        if (!Array.isArray(data.sameAs) || data.sameAs.some((url) => typeof url !== 'string')) {
          fail(label, 'sameAs must be an array of URLs');
        }
        author.sameAs = data.sameAs;
      }
      return author;
    });
}

function readFaq(value, file) {
  if (value === undefined || value === null) return [];
  if (!Array.isArray(value)) fail(file, 'faq must be an array');
  return value.map((item, index) => {
    if (!item || typeof item.question !== 'string' || item.question.trim() === '') {
      fail(file, `faq[${index}].question is required`);
    }
    if (typeof item.answer !== 'string' || item.answer.trim() === '') {
      fail(file, `faq[${index}].answer is required`);
    }
    return { question: item.question.trim(), answer: item.answer.trim() };
  });
}

function readPosts() {
  if (!fs.existsSync(BLOG_DIR)) {
    fail('content/blog', 'directory is missing');
  }
  const authors = new Map(readAuthors().map((author) => [author.slug, author]));
  const posts = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filenameSlug = file.slice(0, -'.mdx'.length);
      const label = `content/blog/${file}`;
      if (!SLUG_PATTERN.test(filenameSlug)) {
        fail(label, 'filename must be a lowercase hyphenated slug');
      }
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
      const { data, content } = matter(raw);
      if (data.slug !== filenameSlug) {
        fail(label, `frontmatter slug "${data.slug ?? ''}" does not match filename "${filenameSlug}"`);
      }
      if (typeof data.title !== 'string' || data.title.trim() === '') {
        fail(label, 'title is required');
      }
      if (typeof data.description !== 'string' || data.description.trim() === '') {
        fail(label, 'description is required');
      }
      if (typeof data.author !== 'string' || !authors.has(data.author)) {
        fail(label, `author "${data.author ?? ''}" does not match a file in content/authors`);
      }
      if (!Object.prototype.hasOwnProperty.call(CLUSTERS, data.cluster)) {
        fail(label, `cluster must be one of: ${Object.keys(CLUSTERS).join(', ')}`);
      }
      if (typeof data.pillar !== 'boolean') {
        fail(label, 'pillar must be true or false');
      }
      const draft = data.draft === undefined ? false : data.draft;
      if (typeof draft !== 'boolean') {
        fail(label, 'draft must be true or false');
      }
      let tags = [];
      if (data.tags !== undefined) {
        if (!Array.isArray(data.tags) || data.tags.some((tag) => typeof tag !== 'string')) {
          fail(label, 'tags must be an array of strings');
        }
        tags = data.tags;
      }
      const heroImage = assertImage(data.heroImage, 'heroImage', label);
      return {
        title: data.title.trim(),
        description: data.description.trim(),
        slug: filenameSlug,
        datePublished: asIsoDate(data.datePublished, 'datePublished', label),
        dateModified: asIsoDate(data.dateModified, 'dateModified', label),
        author: data.author,
        cluster: data.cluster,
        pillar: data.pillar,
        tags,
        heroImage,
        faq: readFaq(data.faq, label),
        draft,
        canonical: typeof data.canonical === 'string' ? data.canonical : null,
        content,
      };
    });

  const titles = new Set();
  const descriptions = new Set();
  for (const post of posts) {
    if (titles.has(post.title)) fail(`content/blog/${post.slug}.mdx`, 'title must be unique');
    if (descriptions.has(post.description)) {
      fail(`content/blog/${post.slug}.mdx`, 'description must be unique');
    }
    titles.add(post.title);
    descriptions.add(post.description);
  }

  return posts.sort((a, b) => (a.datePublished < b.datePublished ? 1 : a.datePublished > b.datePublished ? -1 : 0));
}

// Drafts render in local dev and on Vercel preview builds.
// Production (VERCEL_ENV=production, and a local production build) omits them.
// Sitemap and RSS keep using getPublishedPosts(), so drafts stay out of both.
export function draftsAreVisible() {
  if (process.env.VERCEL_ENV === 'preview') return true;
  if (process.env.VERCEL_ENV === 'production') return false;
  return process.env.NODE_ENV !== 'production';
}

export function getAllAuthors() {
  return readAuthors().sort((a, b) => a.name.localeCompare(b.name));
}

export function getAuthor(slug) {
  return getAllAuthors().find((author) => author.slug === slug) ?? null;
}

export function getPublishedPosts() {
  return readPosts().filter((post) => !post.draft);
}

export function getRenderablePosts() {
  return readPosts().filter((post) => !post.draft || draftsAreVisible());
}

export function getPost(slug) {
  return getRenderablePosts().find((post) => post.slug === slug) ?? null;
}

export function getPostsByAuthor(slug) {
  return getRenderablePosts().filter((post) => post.author === slug);
}

export function formatDate(iso) {
  const [year, month, day] = iso.split('-').map(Number);
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export function sourceIncludesCta(source) {
  return /<CtaBlock(\s|\/|>)/.test(source);
}
