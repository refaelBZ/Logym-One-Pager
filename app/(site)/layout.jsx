import SiteShell from '../components/SiteShell';

export const dynamic = 'force-static';

export default function SiteSectionLayout({ children }) {
  return <SiteShell>{children}</SiteShell>;
}
