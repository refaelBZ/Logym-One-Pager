# Legal TODO (Logym)

Open compliance items for launch. Marketing legal pages live at `/terms`,
`/privacy`, `/cookies`, `/health`, `/accessibility`, and `/contact`.

**All published legal pages are drafts pending lawyer review.**

Last reviewed in-repo: 2026-11-16.

## Placeholders to replace

| Item | Current placeholder | Owner action |
| --- | --- | --- |
| Legal operator / entity | `[OPERATOR LEGAL NAME / ADDRESS – TO BE ADDED]` | Form or designate an operating entity; add legal name and postal address on every legal page (`lib/legal.js`). |
| Support mailbox | `support@logym.fit` | Create and monitor the mailbox on the `logym.fit` domain. |
| Privacy mailbox | `privacy@logym.fit` | Create and monitor the mailbox on the `logym.fit` domain. |
| Effective / governing law | TBD until entity exists | Choose governing law and venue; update Terms. |
| Backend hosting processor | “API hosting provider to be confirmed” in Privacy Policy | Confirm where the Express API runs (Render, Railway, Fly, etc.) and document it. |
| Email SMTP provider | Configured via env (`EMAIL_*`) | Record the live provider (e.g. Gmail SMTP, Resend, SES) in the processor list. |
| MongoDB region / Atlas org | Via `MONGO_URI` | Confirm cloud region and DPA. |
| Google Analytics account ownership | Measurement ID in `lib/analytics.js` / `NEXT_PUBLIC_GA_ID` | Confirm GA4 property settings, retention, and EU consent mode if needed. |

## Minimum age

- Product decision: **minimum age 16 globally** (`MINIMUM_AGE` in `lib/legal.js`).
- Age 16 satisfies GDPR Art. 8 in every EU/EEA member state and is above the
  US COPPA under-13 threshold. No parental-consent or country-based age-gate
  open item.

## Payments / subscriptions

- Do **not** draft subscription, billing, auto-renewal, or refund terms yet.
- When payments are introduced, add Terms sections and any store/platform
  disclosures before charging users.

## Product / privacy engineering gaps (from code audit)

- No self-serve **account deletion** UI or routed API for full user erasure
  (deletion helpers exist server-side but are not exposed for end users).
  Privacy Policy currently routes requests to email.
- No in-app link to Privacy/Terms at signup yet (app repo is separate).
  Marketing CTAs now link to Privacy/Cookies/Terms near the buttons.
- OpenAI dependency is present but inactive; confirm it stays off or update
  Privacy Policy before enabling.
- Marketing and blog previously claimed **ready-made workout plans**; the app
  only supports **user-created** plans. Landing CTA + Solution step copy were
  fixed earlier; absolute “only/revolutionary” claims were softened in the
  compliance-critical PR. Remaining blog CTA phrases should be swept if needed.
- Do **not** remount `ConsentBanner` while `CookieConsent` is live — they used
  different storage keys. Live preference key is `logym_cookie_consent`.
- See `COMPLIANCE-SCAN.md` for the 2026-11-16 legal / privacy / WCAG scan and
  residual High/Medium items (entity, mailboxes, formal a11y audit, casestudy).

## Documents still needing human/lawyer review

- [ ] Terms of Service
- [ ] Privacy Policy (especially special-category/health data basis under GDPR Art. 9)
- [ ] Cookie Policy + consent UX (GA4)
- [ ] Health & Fitness Disclaimer
- [ ] Accessibility Statement (after a real audit)
- [ ] Confirm international transfer mechanisms (SCCs / UK IDTA as needed)
- [ ] Publish final “Last updated” / effective dates when leaving draft status
- [ ] Data-processing agreements with each processor

## Source notes

- App data practices audited from public repo `refaelBZ/Logym` (Client + Server).
- Prior drafts in `refaelBZ/logym-growth` (`product-readiness/legal/`) were **not
  accessible** to this agent (404). Recreate or paste those drafts into this
  repo if further merge is needed.
