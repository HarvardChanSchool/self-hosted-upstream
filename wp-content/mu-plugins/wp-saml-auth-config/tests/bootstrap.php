<?php
/**
 * Test bootstrap for wp-saml-auth-config.
 */

require_once __DIR__ . '/../vendor/autoload.php';

// Provide lightweight WordPress stubs used by the plugin code.
if ( ! function_exists( 'is_multisite' ) ) {
	function is_multisite() {
		return isset( $GLOBALS['wp_is_multisite'] ) ? (bool) $GLOBALS['wp_is_multisite'] : false;
	}
}

if ( ! function_exists( 'network_home_url' ) ) {
	function network_home_url() {
		return $GLOBALS['wp_network_home_url'] ?? 'https://network.example.test/';
	}
}

if ( ! function_exists( 'get_home_url' ) ) {
	function get_home_url() {
		return $GLOBALS['wp_home_url'] ?? 'https://example.test/';
	}
}

if ( ! function_exists( 'add_filter' ) ) {
	function add_filter() {
		// No-op for tests; hooks are not exercised directly.
	}
}

if ( ! function_exists( 'username_exists' ) ) {
	function username_exists( $username ) {
		$existing = $GLOBALS['wp_existing_usernames'] ?? array();
		return in_array( $username, $existing, true );
	}
}

require_once __DIR__ . '/../wp-saml-auth-config.php';
