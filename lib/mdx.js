import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import Callout from '@/app/components/blog/Callout';
import CtaBlock from '@/app/components/blog/CtaBlock';
import Faq from '@/app/components/blog/Faq';
import MarkdownImage from '@/app/components/blog/MarkdownImage';
import MarkdownLink from '@/app/components/blog/MarkdownLink';
import MarkdownTable from '@/app/components/blog/MarkdownTable';

export const mdxComponents = {
  img: MarkdownImage,
  Image: MarkdownImage,
  a: MarkdownLink,
  table: MarkdownTable,
  Callout,
  CtaBlock,
  Faq,
};

export const mdxOptions = {
  // Posts are trusted files in this repo. Numeric props such as width={1200}
  // need JS expressions. Dangerous globals stay blocked by the library default.
  blockJS: false,
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
};

export function MdxContent({ source }) {
  return <MDXRemote source={source} components={mdxComponents} options={mdxOptions} />;
}
