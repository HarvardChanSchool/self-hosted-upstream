<?php
/**
 * Local Uploads Proxy
 *
 * Local-only. Redirects missing /wp-content/uploads/ requests to production
 * so local dev doesn't need a full media sync.
 *
 * @package HSPHPlugin
 */

// Only ever run in the local environment. This is a no-op on Pantheon.
if ( function_exists( 'wp_get_environment_type' ) && 'local' !== wp_get_environment_type() ) {
	return;
}

/**
 * Redirect requests for missing uploads to production.
 *
 * By the time WordPress boots for a /wp-content/uploads/ request, Valet has
 * already confirmed no local file exists at that path (otherwise it would
 * have been served statically and never reached PHP), so any request that
 * gets here is safe to bounce to prod.
 */
add_action(
	'template_redirect',
	function () {
		$uri = isset( $_SERVER['REQUEST_URI'] ) ? sanitize_text_field( wp_unslash( $_SERVER['REQUEST_URI'] ) ) : '';

		// Multisite subdirectory installs serve uploads at both /wp-content/uploads/...
		// and /<subsite>/wp-content/uploads/..., so allow one optional leading segment.
		if ( ! preg_match( '#^(/[^/]+)?/wp-content/uploads/#', $uri ) ) {
			return;
		}

		if ( defined( 'HSPH_UPLOADS_PROXY_HOST' ) ) {
			$host = HSPH_UPLOADS_PROXY_HOST;
		} else {
			// Derive the production host from the local one: intranet.hsph.harvard.edu.test
			// -> https://intranet.hsph.harvard.edu. Herd serves .test domains locally.
			$local_host = isset( $_SERVER['HTTP_HOST'] )
				? sanitize_text_field( wp_unslash( $_SERVER['HTTP_HOST'] ) )
				: '';

			if ( '' === $local_host && defined( 'DOMAIN_CURRENT_SITE' ) ) {
				$local_host = DOMAIN_CURRENT_SITE;
			}

			// Strip any port, then the .test suffix.
			$local_host = strtolower( preg_replace( '/:\d+$/', '', $local_host ) );
			$host       = 'https://' . preg_replace( '/\.test$/', '', $local_host );

			// Bail if we couldn't derive anything sane; let the request 404 normally.
			if ( ! preg_match( '/^https:\/\/[^.\/]+\.[^.\/]/', $host ) ) {
				return;
			}
		}

		add_filter(
			'allowed_redirect_hosts',
			function ( $hosts ) use ( $host ) {
				$hosts[] = wp_parse_url( $host, PHP_URL_HOST );
				return $hosts;
			}
		);

		wp_safe_redirect( $host . $uri, 302 );
		exit;
	},
	0
);
