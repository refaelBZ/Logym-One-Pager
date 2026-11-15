import Script from 'next/script';
import { GA_HOST, GA_MEASUREMENT_ID, shouldIncludeGaSnippet } from '@/lib/analytics';

// GA4 gtag only. This is not a Google Tag Manager container.
export default function GoogleAnalytics() {
  if (!shouldIncludeGaSnippet()) return null;

  const id = JSON.stringify(GA_MEASUREMENT_ID);
  const host = JSON.stringify(GA_HOST);

  return (
    <Script id="ga4" strategy="afterInteractive">
      {`(function () {
        if (location.hostname !== ${host}) return;
        var id = ${id};
        var s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
        document.head.appendChild(s);
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () { window.dataLayer.push(arguments); };
        window.gtag('js', new Date());
        window.gtag('config', id);
      })();`}
    </Script>
  );
}
