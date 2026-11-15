import Link from 'next/link';

export default function MarkdownLink({ href = '', children }) {
  if (href.startsWith('/')) {
    return <Link href={href}>{children}</Link>;
  }

  const external = href.startsWith('http://') || href.startsWith('https://');
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
