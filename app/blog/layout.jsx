import SiteShell from '../components/SiteShell';

export const dynamic = 'force-static';

export default function BlogLayout({ children }) {
  return <SiteShell current="blog">{children}</SiteShell>;
}
