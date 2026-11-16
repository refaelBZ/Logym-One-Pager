import Script from 'next/script';
import { GA_HOST, GA_MEASUREMENT_ID, shouldIncludeGaSnippet } from '@/lib/analytics';
import { CONSENT_GRANTED, CONSENT_STORAGE_KEY } from '@/lib/consent';

// GA4 gtag only. This is not a Google Tag Manager container.
export default function GoogleAnalytics() {
  if (!shouldIncludeGaSnippet()) return null;

  const id = JSON.stringify(GA_MEASUREMENT_ID);
  const host = JSON.stringify(GA_HOST);
  const storageKey = JSON.stringify(CONSENT_STORAGE_KEY);
  const granted = JSON.stringify(CONSENT_GRANTED);
  const script = process.env.NEXT_PUBLIC_CONSENT_BANNER === 'true'
    ? `(function () {
        if (location.hostname !== ${host}) return;
        var id = ${id};
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () { window.dataLayer.push(arguments); };
        var choice = null;
        try { choice = localStorage.getItem(${storageKey}); } catch (e) {}
        window.gtag('consent', 'default', {
          analytics_storage: choice === ${granted} ? 'granted' : 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied'
        });
        var s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
        document.head.appendChild(s);
        window.gtag('js', new Date());
        window.gtag('config', id);
      })();`
    : `(function () {
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
      })();`;

  return (
    <Script id="ga4" strategy="afterInteractive">
      {script}
    </Script>
  );
}
