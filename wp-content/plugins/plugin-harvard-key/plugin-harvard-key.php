<?php
/**
 * HSPH Plugin Harvard Key
 *
 * @package hpsh
 * @subpackage plugin-harvard-key
 */

/**
 * Plugin Name: HSPH Plugin Harvard Key
 * Plugin URI:  http://www.hsph.harvard.edu/information-technology/
 * Description: HarvardKey Integration for WordPress. This plugin offers authentication, auto-account provisionning, files and content access restriction using HarvardKey.
 * Version:     2.2.0
 * Author:      HSPH Webteam
 * Author URI:  http://www.hsph.harvard.edu/
 * Text Domain: plugin-harvard-key
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

$harvard_key_plugin_data = get_file_data( __FILE__, array( 'Version' => 'Version' ), 'plugin' );

define( 'HARVARD_KEY_PLUGIN_VERSION', $harvard_key_plugin_data['Version'] );
define( 'HARVARD_KEY_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
define( 'HARVARD_KEY_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

require_once HARVARD_KEY_PLUGIN_PATH . 'vendor/autoload.php';

// Load the logger.
require_once HARVARD_KEY_PLUGIN_PATH . 'inc/class-harvard-key-logger.php';

// Load a set of helper functions to be reused across the plugin.
require_once HARVARD_KEY_PLUGIN_PATH . 'inc/harvard-key-functions.php';

// Load the SAML class.
require_once HARVARD_KEY_PLUGIN_PATH . 'inc/class-harvard-key-saml.php';
$harvard_key_saml = new Harvard_Key_Saml();
$harvard_key_saml->init();

// Load the user data class.
require_once HARVARD_KEY_PLUGIN_PATH . 'inc/class-harvard-key-user-data.php';

// Load settings related functions and functions that are used in settings pages.
require_once HARVARD_KEY_PLUGIN_PATH . 'inc/class-harvard-key-settings.php';
$harvard_key_page_settings = new Harvard_Key_Settings();
$harvard_key_page_settings->init();

// Load password related features.
require_once HARVARD_KEY_PLUGIN_PATH . 'inc/class-harvard-key-passwords.php';
$harvard_key_passwords = new Harvard_Key_Passwords();
$harvard_key_passwords->init();

// Load individual page protections.
require_once HARVARD_KEY_PLUGIN_PATH . 'inc/class-harvard-key-page-protect.php';
$harvard_key_page_protect = new Harvard_Key_Page_Protect();
$harvard_key_page_protect->init();

if ( ! function_exists( 'send_to_sentry' ) ) {
	/**
	 * Send an exception to Sentry.
	 *
	 * @param  \Exception $err The exception to be sent to Sentry.
	 * @return void
	 */
	function send_to_sentry( $err ) { // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedFunctionFound
		// We are using wp_sentry_safe to make sure this code runs even if the Sentry plugin is disabled.
		if ( function_exists( 'wp_sentry_safe' ) ) {
			wp_sentry_safe(
				function ( \Sentry\State\HubInterface $client ) use ( $err ) {
					$client->captureException( $err );
				}
			);
		}
	}
}
