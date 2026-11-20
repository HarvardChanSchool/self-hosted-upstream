<?php
/**
 * Plugin Name:       HSPH Plugin Toolkit
 * Description:       Toolkit of functions and features for HSPH WordPress sites.
 * Version:           0.1.0
 * Author:            10up
 * Author URI:        https://hsph.harvard.edu/
 * Text Domain:       hsph-wordpress-toolkit
 *
 * @package           HSPHPlugin
 */

define( 'HSPH_TOOLKIT_PATH', plugin_dir_path( __FILE__ ) );
define( 'HSPH_TOOLKIT_INC', HSPH_TOOLKIT_PATH . 'inc/' );

// Require Composer autoloader if it exists.
if ( file_exists( HSPH_TOOLKIT_PATH . 'vendor/autoload.php' ) ) {
	require_once HSPH_TOOLKIT_PATH . 'vendor/autoload.php';
}

/**
 * PRODUCTION FEATURE FLAGS
 * Default: enabled
 * Environments: all
 * They are active unless the corresponding HSPH_TOOLKIT_DISABLE_* constant
 * is defined and set to "true".
 */

// Google Tag Manager.
if ( ! defined( 'HSPH_TOOLKIT_DISABLE_GTM' ) || true !== HSPH_TOOLKIT_DISABLE_GTM ) {
	require_once HSPH_TOOLKIT_INC . 'gtm/gtm-mu-plugin.php';
}
// Security Hardening.
if ( ! defined( 'HSPH_TOOLKIT_DISABLE_PANTHEON_SECURITY' ) || true !== HSPH_TOOLKIT_DISABLE_PANTHEON_SECURITY ) {
	require_once HSPH_TOOLKIT_INC . 'wp-pantheon-security/wp-pantheon-security.php';
}
// HarvardKey Auth.
if ( ! defined( 'HSPH_TOOLKIT_DISABLE_SAML_AUTH' ) || true !== HSPH_TOOLKIT_DISABLE_SAML_AUTH ) {
	require_once HSPH_TOOLKIT_INC . 'harvard-key/wp-saml-auth-config.php';
}
// User Management.
if ( ! defined( 'HSPH_TOOLKIT_DISABLE_USER_MGMT' ) || true !== HSPH_TOOLKIT_DISABLE_USER_MGMT ) {
	require_once HSPH_TOOLKIT_INC . 'user-management/hsph-user-management.php';
}

/**
 * LOCAL DEV FEATURE FLAGS
 * Default: enabled
 * Environments: local only
 * They are active in local development environments unless the corresponding
 * HSPH_TOOLKIT_DISABLE_* constant is defined and set to "true".
 */

// Local dev feature flags must be inside this if statement.
if ( ! isset( $_ENV['PANTHEON_ENVIRONMENT'] ) && defined( 'WP_ENVIRONMENT_TYPE' ) && 'local' === WP_ENVIRONMENT_TYPE ) {
	// Local Uploads Proxy.
	if ( ! defined( 'HSPH_TOOLKIT_DISABLE_LOCAL_UPLOADS_PROXY' ) || true !== HSPH_TOOLKIT_DISABLE_LOCAL_UPLOADS_PROXY ) {
		require_once HSPH_TOOLKIT_INC . 'local-uploads-proxy/local-uploads-proxy.php';
	}

	// Grouper API Proxy.
	if ( ! defined( 'HSPH_TOOLKIT_DISABLE_GROUPER_MOCK' ) || true !== HSPH_TOOLKIT_DISABLE_GROUPER_MOCK ) {
		require_once HSPH_TOOLKIT_INC . 'user-management/dev/hsph-grouper-mock.php';
	}
}
