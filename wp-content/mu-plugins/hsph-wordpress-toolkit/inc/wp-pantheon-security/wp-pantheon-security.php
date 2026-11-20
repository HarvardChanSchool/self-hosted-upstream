<?php
/**
 * Plugin Name: WP Pantheon Security
 * Plugin URI: https://github.com/HarvardChanSchool/wp-pantheon-security
 * Description: An mu-plugin used to configure Pantheon sites with best-practice
 * security settings.
 * Version: 1.0.0
 * Author: Harvard T.H. Chan School of Public Health
 * Author URI: https://github.com/HarvardChanSchool
 *
 * @package Pantheon
 */

/**
 * Adds security headers. Documentation for each is provided below; refer to Mozilla for more.
 *
 * @param $headers The site headers.
 *
 * @link https://docs.pantheon.io/guides/wordpress-developer/wordpress-best-practices#security-headers
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
 *
 * @return array
 */

add_filter(
	'wp_headers',
	function ( $result ) {
		$headers = $result;

		if ( ! is_admin() ) {
			/**
			 * Stops the URL's path + query string from leaking to third parties via the
			 * Referer header on cross-origin requests. Cross-origin destinations get only
			 * "https://hsph.harvard.edu/"; same-origin requests still get the full URL.
			 *
			 * Prevents, concretely:
			 *   - Reset/preview/SAML tokens in `?token=...` URLs leaking to every analytics
			 *     beacon, CDN font, embed, and outbound link on that page.
			 *   - Internal search queries (`/?s=...`) leaking the user's topic of interest
			 *     to every third-party asset loaded on the results page.
			 *   - Which specific HSPH article/page a visitor is reading being broadcast to
			 *     every ad/analytics/embed host on the page.
			 */
			$headers['Referrer-Policy'] = 'strict-origin-when-cross-origin';

			/**
			 * Forces the browser to honor the declared Content-Type instead of guessing
			 * from the bytes. Without this, an uploaded `notes.txt` containing `<script>`
			 * tags can be sniffed as HTML and executed in the user's session — turning
			 * any file-upload field (media library, GF attachments) into an XSS vector.
			 * Also blocks "polyglot" files (valid JPEG that's also valid JS) from being
			 * loaded as scripts.
			 */
			$headers['X-Content-Type-Options'] = 'nosniff';

			/**
			 * Denies powerful device/browser APIs to anything on the page — including
			 * embedded third-party iframes — that has no business asking for them.
			 *
			 * Prevents, concretely:
			 *   - An embedded YouTube/Vimeo iframe (or a compromised ad tag) silently
			 *     prompting the user for camera, microphone, or geolocation access.
			 *   - Payment Request API popups from injected scripts on checkout-shaped pages.
			 *   - The site being included in Chrome's Topics API ad-interest computation
			 *     (`browsing-topics=()`): HSPH visits cannot be classified into ad-topic
			 *     buckets, and embedded ad-tech cannot read a visitor's topics here.
			 *     Visitors' public-health research is not advertising signal.
			 *   - USB/serial/sensor APIs being callable at all from this origin (we don't
			 *     use them; denying them removes the entire attack surface).
			 *
			 * `interest-cohort=()` is the opt-out for FLoC, which Google killed in 2022
			 * and replaced with Topics. Kept for forward-compat with Chromium forks /
			 * older browsers that may still honor the directive; effectively a no-op in
			 * modern Chrome. The directive doing the live work is `browsing-topics=()`.
			 *
			 * `geolocation=(self)` keeps the door open for first-party use (e.g. a future
			 * "find nearest clinic" feature) without granting it to embeds.
			 */
			$headers['Permissions-Policy'] = implode(
				', ',
				array(
					'geolocation=(self)',
					'microphone=()',
					'camera=()',
					'payment=()',
					'usb=()',
					'serial=()',
					'accelerometer=()',
					'gyroscope=()',
					'magnetometer=()',
					'interest-cohort=()',
					'browsing-topics=()',
				)
			);
			/**
			 * Enforced CSP: the four directives that materially block real attacks
			 * without breaking legitimate pages. Each one closes a specific vector:
			 *
			 *   Directives:
			 *
			 *   object-src 'none'
			 *     Kills `<object>` / `<embed>` / `<applet>`. An attacker who can inject
			 *     HTML (stored XSS in a comment, a compromised editor account, an SVG
			 *     upload) can't pivot to running Flash/PDF-plugin/SVG-script payloads.
			 *
			 *   base-uri 'self'
			 *     Stops injected `<base href="https://evil.com/">` from silently
			 *     rewriting every relative URL on the page — every `<a href="/login">`,
			 *     every form action, every relative `<script src>` — to point at an
			 *     attacker origin. Single-tag, page-wide hijack; this shuts it down.
			 *
			 *   frame-ancestors 'self' *.harvard.edu
			 *     Clickjacking protection. Prevents attacker.com from iframing an HSPH
			 *     page (login form, wp-admin, donate page) under a transparent overlay
			 *     and tricking a logged-in user into clicking through. Allows legitimate
			 *     Harvard-side embedding from any *.harvard.edu subdomain.
			 *
			 *   upgrade-insecure-requests
			 *     Auto-upgrades any `http://` subresource to `https://` before the
			 *     request is sent. Fixes the mixed-content cases that already exist in
			 *     legacy posts (e.g. `<img src="http://hsph.harvard.edu/...">`) without
			 *     hunting them down by hand, and prevents new ones from leaking traffic
			 *     in cleartext.
			 */
			$headers['Content-Security-Policy'] = implode(
				' ',
				array(
					"object-src 'none';",
					"base-uri 'self';",
					"frame-ancestors 'self' *.harvard.edu;",
					'upgrade-insecure-requests;',
				)
			);

			/**
			 * Report-only CSP: deliberately permissive host policy (`https:` rather than
			 * hostname allowlists). With `'unsafe-inline'` already required for GTM/inline
			 * handlers, narrow hostname allowlists add little real security while generating
			 * thousands of noisy violations per page from ad/analytics tags.
			 *
			 * What this *will* catch and report (the failure modes worth knowing about):
			 *   - Mixed content: any `http://` script/style/asset still being requested
			 *     after `upgrade-insecure-requests` should have caught it (belt + braces).
			 *   - `form-action 'self'`: Gravity Forms posting to an external endpoint
			 *     (Salesforce Web-to-Lead, Mailchimp, Marketo). MUST be allowlisted
			 *     before promoting this directive to enforce, or those submits die silently.
			 *   - `worker-src 'self' blob:`: a plugin spawning workers from an unexpected
			 *     origin (e.g. a CDN-hosted analytics worker we didn't know about).
			 *   - `frame-src 'self' https:`: an `http:` iframe or a `data:`-URI iframe,
			 *     both of which are common XSS pivots.
			 *
			 * What this deliberately does *not* try to catch: third-party script/image/font
			 * origins. With `https:` allowed everywhere, those pass — the value here is
			 * scoping to "encrypted transport only" and surfacing protocol surprises.
			 *
			 * Monitoring strategy (no production reporting endpoint by design):
			 *   - Re-run `npm run csp:test:browser` weekly (or pre-deploy) and diff
			 *     host-grouped output vs. the prior run via `npm run csp:report:hosts`.
			 *     The audit lives in the shared `wp-csp-audit` package at
			 *     dev-resources/WordPress/Scripts/csp-audit/; see this directory's
			 *     README.md for install + wiring.
			 *   - After two clean audit runs, promote these directives into the enforcing
			 *     block above.
			 *   - If we ever need production telemetry, build a deduped REST endpoint
			 *     (POST hsph/v1/csp-report) that appends one line per (directive, host)
			 *     per week to wp-content/uploads/hsph-csp-errors.log, following the
			 *     class-hsph-user-management-logger.php pattern, and append
			 *     `report-uri /wp-json/hsph/v1/csp-report;` to both headers.
			 */
			$headers['Content-Security-Policy-Report-Only'] = implode(
				' ',
				array(
					"default-src 'self';",
					"script-src 'self' 'unsafe-inline' https:;",
					"style-src 'self' 'unsafe-inline' https:;",
					"img-src 'self' data: blob: https:;",
					"font-src 'self' data: https:;",
					"connect-src 'self' https:;",
					"frame-src 'self' https:;",
					"worker-src 'self' blob:;",
					"form-action 'self';",
				)
			);
		}

		/**
		 * Allow plugins to adjust headers as needed.
		 */
		$headers = apply_filters( 'hsph_security_headers', $headers );

		return $headers;
	}
);

/**
 * Blocks anonymous reads of /wp-json/wp/v2/users. By default WordPress lets
 * anyone GET that endpoint and receive the full list of accounts that have
 * authored a post — login slugs included.
 *
 * Prevents, concretely:
 *   - Username enumeration for password-spraying and targeted phishing
 *     ("hi {real_editor_login}, please reset your Harvard Key...").
 *   - Mapping the editorial org chart from outside the firewall.
 *   - The default WP fingerprint that scanners (wpscan, nuclei) use to
 *     confirm a site is exploitable WordPress before launching auth attacks.
 *
 * Logged-in users with `list_users` (admins) keep their normal access.
 *
 * @link https://docs.pantheon.io/guides/wordpress-developer/wordpress-best-practices#disable-anonymous-access-to-the-wordpress-rest-api
 */

add_filter(
	'rest_authentication_errors',
	function ( $access ) {
		if ( ! is_user_logged_in() || ! current_user_can( 'list_users' ) ) {
			$requested_route = sanitize_text_field( wp_unslash( $_SERVER['REQUEST_URI'] ?? '' ) );
			if ( strpos( $requested_route, '/wp/v2/users' ) !== false ) {
				return new WP_Error( 'rest_forbidden', 'Sorry, you are not allowed to do that.', array( 'status' => 403 ) );
			}
		}
		return $access;
	}
);
