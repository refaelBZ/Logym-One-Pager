# Compliance scan — Logym marketing site (www.logym.fit)

Scan date: **2026-11-16**. Scope: this repo (landing, blog shell, legal pages, cookie/GA gating). App at `app.logym.fit` is covered only where marketing copy/policies claim behaviors.

Statuses: **Fixed** in this PR · **Open** remaining.

---

## Legal

| ID | Severity | Finding | Paths | Status |
| --- | --- | --- | --- | --- |
| L1 | Critical | Absolute marketing claim (“the only fitness app… revolutionary interface”) is unverifiable and risks misleading advertising / unfair commercial practice claims (EU UCPD / UK CAP / similar). | `app/components/Hero/index.jsx`, `app/layout.js`, `app/page.jsx` | **Fixed** — softened to non-absolute product description. |
| L2 | High | Operator / governing law still placeholders; pages correctly mark draft status. | `lib/legal.js`, all `app/(site)/*/page.jsx` | **Open** — owner must form entity (see `LEGAL-TODO.md`). |
| L3 | High | Mailboxes `support@` / `privacy@` not confirmed live. | `lib/legal.js`, `LEGAL-TODO.md` | **Open** — owner ops. |
| L4 | Medium | Footer copyright year was 2025. | `app/components/Footer/index.jsx` | **Fixed** — 2026. |
| L5 | Medium | No payment/subscription terms (correct while free). | `app/(site)/terms/page.jsx` | **Open** — intentional until payments ship. |
| L6 | Low | Blog educational program posts vs “user-created plans only” — health disclaimer already clarifies sample routines. | `content/blog/*`, `app/(site)/health/page.jsx` | **Open** — acceptable with disclaimer; optional blog CTA sweep later. |
| L7 | Low | All legal pages remain drafts pending lawyer review. | legal pages | **Open** — documented. |

---

## Privacy & Cookies (GDPR / ePrivacy / UK GDPR / CCPA/CPRA)

| ID | Severity | Finding | Paths | Status |
| --- | --- | --- | --- | --- |
| P1 | Critical | Two parallel consent systems (`CookieConsent` + flag-gated `ConsentBanner`) used different `localStorage` keys and copy; enabling the flag could show a placeholder banner that does not drive the real GA gate. | `app/layout.js`, `app/components/ConsentBanner/*`, `app/components/CookieConsent/*`, `lib/consent.js`, `lib/analytics.js` | **Fixed** — sole banner is `CookieConsent`; prep banner unmounted; GA consent defaults use the real cookie key. |
| P2 | Critical | GA must not load before analytics consent. Verified: script inject only after `logym_cookie_consent=accepted`; production-only; hostname-gated; unload on reject. | `lib/analytics.js`, `app/components/CookieConsent/index.jsx`, `app/components/GoogleAnalytics/index.jsx` | **Fixed** (confirmed + consent-mode defaults aligned). |
| P3 | High | Equal reject choice existed but Accept was visually primary; ePrivacy expects comparable prominence. | `app/components/CookieConsent/style.module.scss` | **Fixed** — reject styled as equal-weight outline control. |
| P4 | High | Landing CTA → app signup had no nearby Privacy/Terms link (footer only). | `app/components/Hero/index.jsx`, `app/components/FinalCTA/index.jsx`, `app/components/blog/CtaBlock/index.jsx` | **Fixed** — privacy/cookies note under CTAs. |
| P5 | Medium | Cookie Policy did not state that Geist fonts are self-hosted via `next/font` (no Google Fonts CDN at runtime). | `app/(site)/cookies/page.jsx`, `app/layout.js` | **Fixed** — documented. |
| P6 | Medium | CCPA “Do Not Sell/Share” link not in footer (analytics refuse + cookie prefs cover sharing opt-out for GA). | Footer / privacy | **Open** — optional dedicated DNS/DNS link when selling/sharing expands. |
| P7 | Medium | No self-serve account deletion in app; policy routes to email. | Privacy Policy, `LEGAL-TODO.md` | **Open** — product work in app repo. |
| P8 | Low | Processor regions / DPAs / SCCs still TBD. | Privacy §6, `LEGAL-TODO.md` | **Open** — owner. |
| P9 | Low | Change-of-choice UI exists on `/cookies` (`CookiePreferences`). | `app/(site)/cookies/CookiePreferences.jsx` | OK (no change). |

---

## Accessibility (WCAG 2.2 AA)

| ID | Severity | Finding | Paths | Status |
| --- | --- | --- | --- | --- |
| A1 | Critical | Landing page lacked skip link and `<main>` landmark (SiteShell pages had them; home did not). Accessibility statement claimed skip link site-wide. | `app/page.jsx`, `app/page.module.scss`, `app/(site)/accessibility/page.jsx` | **Fixed**. |
| A2 | Critical | No `prefers-reduced-motion` handling; scroll animations start at `opacity: 0`; hero video autoplays looping. | `styles/_mixins.scss`, `styles/globals.scss`, `app/hooks/useScrollAnimation.js`, `app/components/Hero/index.jsx` | **Fixed** — reduced-motion CSS + JS short-circuit; video paused/hidden when reduced motion. |
| A3 | High | Hero subtitle marked `<h2>` (skips hierarchy / mislabels non-section copy). | `app/components/Hero/index.jsx` | **Fixed** — `<p>`. |
| A4 | High | Cookie banner `role="dialog"` without `aria-modal`, description wiring, or initial focus. | `app/components/CookieConsent/index.jsx` | **Fixed**. |
| A5 | High | Primary `Button` / footer links lacked visible `:focus-visible` outlines. | `styles/_mixins.scss`, `app/components/Footer/style.module.scss` | **Fixed**. |
| A6 | High | Decorative react-icons exposed to AT without `aria-hidden`. | `ProblemSection`, `BenefitsSection` | **Fixed**. |
| A7 | Medium | Hero decorative video lacked `aria-hidden`. | `Hero` | **Fixed**. |
| A8 | Medium | Case-study lightbox labels in Hebrew while site `lang="en"`. | `app/components/CaseStudy/index.jsx` | **Open** — page not in primary nav; fix when casestudy is polished. |
| A9 | Low | `#666` dim text fails AA (~3:1) where used (casestudy). | `styles/_vars.scss`, CaseStudy styles | **Open**. |
| A10 | Low | Full WCAG audit / screen-reader pass not run; statement remains draft. | Accessibility page | **Open**. |

---

## Notes on third parties (consistency check)

| Technology | Behavior | Disclosed? |
| --- | --- | --- |
| Google Analytics 4 | Loaded only after Accept on www.logym.fit | Yes (Privacy + Cookies) |
| Google Tag Manager | Not used | Yes |
| Geist via `next/font` | Self-hosted woff2 from `/_next/static/media/` | Yes after this PR |
| Vercel hosting | Technical logs / CDN | Mentioned at high level |
| Unsplash/Pexels remotePatterns | Configured; blog heroes use local/credited assets | Blog credits path OK |
| OpenAI in app server | Inactive | Privacy discloses |

---

## Residual owner actions

See updated `LEGAL-TODO.md` (entity, mailboxes, lawyer review, processors, formal a11y audit).
