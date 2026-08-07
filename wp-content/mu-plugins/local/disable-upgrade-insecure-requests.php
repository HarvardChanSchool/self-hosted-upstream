<?php
/**
 * Plugin Name: Local Disable Upgrade Insecure Requests
 * Description: Removes the CSP upgrade-insecure-requests directive for local development.
 */

add_filter(
	'hsph_security_headers',
	function ( $headers ) {
		if ( empty( $headers['Content-Security-Policy'] ) ) {
			return $headers;
		}

		$directives = array_filter(
			array_map( 'trim', explode( ';', $headers['Content-Security-Policy'] ) ),
			function ( $directive ) {
				return '' !== $directive && 'upgrade-insecure-requests' !== strtolower( $directive );
			}
		);

		if ( empty( $directives ) ) {
			unset( $headers['Content-Security-Policy'] );
			return $headers;
		}

		$headers['Content-Security-Policy'] = implode( '; ', $directives ) . ';';

		return $headers;
	}
);
