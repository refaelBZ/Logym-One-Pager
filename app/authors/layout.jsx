import SiteShell from '../components/SiteShell';

export const dynamic = 'force-static';

export default function AuthorsLayout({ children }) {
  return <SiteShell>{children}</SiteShell>;
}
