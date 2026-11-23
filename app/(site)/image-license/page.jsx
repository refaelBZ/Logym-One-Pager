import LegalDocument from '@/app/components/LegalDocument';
import { HELLO_EMAIL } from '@/lib/legal';
import { legalMetadata } from '@/lib/legal-pages';

export const metadata = legalMetadata({
  title: 'Image license',
  description: 'Who owns images on logym.fit and how to ask permission to use Logym brand assets.',
  path: '/image-license',
});

export default function ImageLicensePage() {
  return (
    <LegalDocument
      title="Image license"
      description="How images on this site are licensed, and how to ask to use Logym brand assets."
    >
      <h2>Logym brand assets</h2>
      <p>
        The Logym name, logo (including{' '}
        <a href="https://www.logym.fit/logym.svg">logym.svg</a>), and other
        images we create for this site, such as author photos, are © Logym.
        You need permission before you copy or reuse them.
      </p>
      <p>
        To ask for that permission, email{' '}
        <a href={`mailto:${HELLO_EMAIL}`}>{HELLO_EMAIL}</a>.
      </p>

      <h2>Blog photos</h2>
      <p>
        Hero photos on blog posts come from Pexels or Unsplash and are used
        under those sites&apos; licenses (
        <a href="https://www.pexels.com/license/">Pexels License</a>,{' '}
        <a href="https://unsplash.com/license">Unsplash License</a>
        ). Logym does not own those photos. Each one is credited to its
        photographer under the image.
      </p>
    </LegalDocument>
  );
}
