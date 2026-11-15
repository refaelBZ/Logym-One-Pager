import Image from 'next/image';
import { BREAKPOINT_MD, CONTENT_WIDTH } from '@/lib/site';
import styles from './style.module.scss';

export default function MarkdownImage({ src, alt, width, height }) {
  const numericWidth = Number(width);
  const numericHeight = Number(height);
  if (
    typeof src !== 'string' ||
    !src.startsWith('/') ||
    typeof alt !== 'string' ||
    alt.trim() === '' ||
    !numericWidth ||
    !numericHeight
  ) {
    throw new Error('MDX images require a site src, alt text, width, and height.');
  }

  return (
    <Image
      className={styles.image}
      src={src}
      alt={alt}
      width={numericWidth}
      height={numericHeight}
      loading="lazy"
      sizes={`(max-width: ${BREAKPOINT_MD}px) 100vw, ${CONTENT_WIDTH}px`}
      style={{ width: '100%', height: 'auto' }}
    />
  );
}
