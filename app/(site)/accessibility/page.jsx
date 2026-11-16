import Link from 'next/link';
import LegalDocument from '@/app/components/LegalDocument';
import { SUPPORT_EMAIL } from '@/lib/legal';
import { legalMetadata } from '@/lib/legal-pages';

export const metadata = legalMetadata({
  title: 'Accessibility Statement',
  description: 'How Logym approaches digital accessibility on the marketing site and app.',
  path: '/accessibility',
});

export default function AccessibilityPage() {
  return (
    <LegalDocument
      title="Accessibility Statement"
      description="We want people to be able to learn about Logym and use the product with as few barriers as possible."
    >
      <h2>1. Our commitment</h2>
      <p>
        Logym aims to make the marketing site (www.logym.fit) and the workout
        app (app.logym.fit) usable for people with diverse abilities. We use
        semantic HTML, keyboard-focus styles, and a “Skip to content” link on
        the landing page and on site pages that use the shared shell.
      </p>

      <h2>2. Conformance target</h2>
      <p>
        We work toward WCAG 2.2 Level AA for the marketing site where
        practical. This statement does not claim full conformance. The app is a
        mobile-first web product and continues to improve.
      </p>

      <h2>3. Known limitations</h2>
      <ul>
        <li>Some older interactive flows in the app may need further keyboard and screen-reader testing.</li>
        <li>Chart visualizations may be harder to interpret with assistive technology; we aim to keep underlying numbers available in the UI where possible.</li>
        <li>Third-party embeds or analytics scripts (when enabled) are outside our full control.</li>
        <li>The optional case-study page still needs English control labels and contrast polish.</li>
        <li>This statement is not a claim of full WCAG 2.2 AA conformance; a formal audit is still outstanding.</li>
      </ul>

      <h2>4. Feedback</h2>
      <p>
        If you encounter an accessibility barrier, email{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with:
      </p>
      <ul>
        <li>the page or screen URL;</li>
        <li>a description of the problem;</li>
        <li>your browser and assistive technology, if known.</li>
      </ul>
      <p>
        We will review feedback and aim to respond within a reasonable time.
        You can also use the <Link href="/contact">Contact</Link> page.
      </p>

      <h2>5. Preparation of this statement</h2>
      <p>
        This statement was prepared as a launch draft based on the current
        Logym One-Pager and app architecture. It should be reviewed again after
        a formal accessibility audit.
      </p>
    </LegalDocument>
  );
}
