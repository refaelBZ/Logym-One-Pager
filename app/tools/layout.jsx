import SiteShell from '../components/SiteShell';

export const dynamic = 'force-static';

export default function ToolsLayout({ children }) {
  return <SiteShell current="tools">{children}</SiteShell>;
}
