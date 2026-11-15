'use client';

import { usePathname } from 'next/navigation';
import { appCtaUrl, trackCtaClick } from '@/lib/analytics';

export default function AppCtaLink({ location, className, children }) {
  const pathname = usePathname() || '/';

  return (
    <a
      className={className}
      href={appCtaUrl(pathname)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCtaClick(location, pathname)}
    >
      {children}
    </a>
  );
}
