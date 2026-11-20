# wp-pantheon-security

Security headers + a small REST hardening rule for the HSPH WordPress sites on Pantheon.

Loaded as part of `hsph-wordpress-toolkit`. Front-end only — admin requests are skipped so author tooling isn't impacted.

## What it sets

| Header | Posture | What it actually buys you |
|---|---|---|
| `Referrer-Policy: strict-origin-when-cross-origin` | Enforced | Reset/preview/SAML tokens in URLs don't leak to analytics, fonts, embeds. Search queries don't either. |
| `X-Content-Type-Options: nosniff` | Enforced | Uploaded `.txt` files can't be sniffed as HTML and executed. Polyglot file XSS shut down. |
| `Permissions-Policy` | Enforced | Embeds can't prompt for camera/mic/geolocation. Topics API / FLoC opted out. USB/serial/sensor APIs disabled. |
| `Content-Security-Policy` | **Enforced** (4 directives) | See below. |
| `Content-Security-Policy-Report-Only` | **Report-only** (the rest) | See below. |

Plus one REST rule: anonymous `GET /wp-json/wp/v2/users` returns 403. Stops username enumeration; admins still see it normally.

## Intent vs. reality — CSP

### What we enforce, and why only these

```
object-src 'none';
base-uri 'self';
frame-ancestors 'self' *.harvard.edu;
upgrade-insecure-requests;
```

These four directives **materially block real attacks** and almost never break legitimate pages:

- `object-src 'none'` — kills `<object>`/`<embed>`/`<applet>` pivots from any XSS foothold.
- `base-uri 'self'` — stops a single injected `<base>` tag from rewriting every URL on the page to an attacker origin.
- `frame-ancestors 'self' *.harvard.edu` — clickjacking protection; allows legitimate Harvard-side embeds.
- `upgrade-insecure-requests` — auto-promotes legacy `http://` subresources to `https://` without hunting them down.

### What we *don't* enforce, and why

Everything else (`script-src`, `style-src`, `img-src`, `font-src`, `connect-src`, `frame-src`, `worker-src`, `form-action`) lives in the **report-only** header with a deliberately permissive `https:` host policy.

The honest reason: GTM and inline event handlers require `'unsafe-inline'` in `script-src`. With `'unsafe-inline'` present, an XSS attacker can run inline `<script>` regardless of which CDN hostnames are on the allowlist — so a narrow allowlist costs marketing-team friction without meaningfully harder-to-bypass security. We keep the directives there to **catch protocol surprises** (mixed `http://` content, blob workers, off-origin form posts) and leave the hostname question to monitoring.

### What the report-only block is actually watching for

- `https:`-only across the board → any `http://` request that slipped past `upgrade-insecure-requests`.
- `form-action 'self'` → forms posting to external endpoints (Salesforce Web-to-Lead, Mailchimp). **Must be allowlisted before promoting to enforce** or those submits die silently.
- `worker-src 'self' blob:` → unexpected worker origins.
- `frame-src 'self' https:` → http/data: iframes (common XSS pivot).

It is **not** trying to police which third-party hosts you load scripts/images/fonts from. With `https:` allowed everywhere, those pass.

## Monitoring

No production reporting endpoint by design — at this site's volume, a `report-uri` log would be drowned in ads/analytics/extension noise nobody reads.

Instead: the **`wp-csp-audit`** package (Playwright + system Chrome, 400-page CSV) runs against `.test` / QA / live and produces a single JSON. `npm run csp:report:*` summarizes it. Re-run weekly or pre-deploy; diff the host grouping against the prior run.

The package lives in the shared `dev-resources` repo, not this repo:

```
~/code/dev-resources/WordPress/Scripts/csp-audit/
```

Install + wiring instructions are in that package's `README.md` (deploy steps 1–8). The short version is:

```bash
# From wp-content/:
npm install --save-dev file:../../code/dev-resources/WordPress/Scripts/csp-audit
# then add the csp:test:browser + csp:report:* npm scripts per its README.
```

After two clean audit runs, promote the report-only directives into the enforced header.

If we ever do want production telemetry: register a deduped REST route (`POST hsph/v1/csp-report`) that appends one line per (directive, host) per week to `wp-content/uploads/hsph-csp-errors.log`, then append `report-uri /wp-json/hsph/v1/csp-report;` to both headers. Pattern lives in `class-hsph-user-management-logger.php`.

## Extending

Filter `hsph_security_headers` lets other plugins / the theme add or override headers without touching this file:

```php
add_filter( 'hsph_security_headers', function ( $headers ) {
    // e.g. allowlist a vendor host before promoting form-action to enforce
    return $headers;
} );
```

## Known gaps

- Admin requests (`is_admin()`) are skipped — `wp-admin` runs without these headers. Block editor + Gutenberg inline scripts are the reason; revisit if/when we move to nonces.
- `frame-ancestors` violations are reported to the embedding page, not to us, if a legitimate embedder breaks, expect a ticket/complaint, not a log line.
- The audit script is anonymous-only and uses a single viewport. Logged-in flows and lazy-loaded below-the-fold assets are not exercised.
