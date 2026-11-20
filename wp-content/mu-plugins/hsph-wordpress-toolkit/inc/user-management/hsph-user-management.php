<?php
/**
 * HSPH User Management
 *
 * @package hsph
 * @subpackage hsph-user-management
 */

/**
 * Plugin Name: HSPH User Management
 * Plugin URI:  http://www.hsph.harvard.edu/information-technology/
 * Description: Manages WordPress users by removing accounts not authorized via Harvard Grouper.
 *              Works in both single-site and multisite WordPress installations.
 * Version:     1.0.0
 * Author:      HSPH Webteam
 * Author URI:  http://www.hsph.harvard.edu/
 * Text Domain: hsph-user-management
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Users of the site that should never be deleted. These are merged
 * with the hard coded list in the constructor of the HSPH_User_Management class.
 * Can be overridden in wp-config.php.
 */
if ( ! defined( 'HSPH_USER_MANAGEMENT_DO_NOT_DELETE' ) ) {
	define( 'HSPH_USER_MANAGEMENT_DO_NOT_DELETE', array() );
}

/**
 * The maximum number of users that can be deleted per session.
 * Can be overridden in wp-config.php.
 */
if ( ! defined( 'HSPH_USER_MANAGEMENT_MAX_DELETIONS' ) ) {
	define( 'HSPH_USER_MANAGEMENT_MAX_DELETIONS', 100 );
}

/**
 * Whether to use the failsafe mechanism in the cron job.
 * Can be overridden in wp-config.php.
 */
if ( ! defined( 'HSPH_USER_MANAGEMENT_CRON_USE_FAILSAFE' ) ) {
	define( 'HSPH_USER_MANAGEMENT_CRON_USE_FAILSAFE', true );
}

/**
 * Whether the cron job should be a dry run.
 * Can be overridden in wp-config.php.
 */
if ( ! defined( 'HSPH_USER_MANAGEMENT_CRON_IS_DRYRUN' ) ) {
	define( 'HSPH_USER_MANAGEMENT_CRON_IS_DRYRUN', false );
}

/**
 * Whether the cron job is enabled.
 * Can be overridden in wp-config.php.
 */
if ( ! defined( 'HSPH_USER_MANAGEMENT_CRON_ENABLED' ) ) {
	define( 'HSPH_USER_MANAGEMENT_CRON_ENABLED', true );
}

/**
 * The minimum log level to write to the log file.
 * Can be overridden in wp-config.php.
 */
if ( ! defined( 'HSPH_USER_MANAGEMENT_LOG_LEVEL' ) ) {
	define( 'HSPH_USER_MANAGEMENT_LOG_LEVEL', Psr\Log\LogLevel::DEBUG );
}

/**
 * The path to the log file.
 * Can be overridden in wp-config.php.
 */
if ( ! defined( 'HSPH_USER_MANAGEMENT_LOG_PATH' ) ) {
	define( 'HSPH_USER_MANAGEMENT_LOG_PATH', ABSPATH . 'wp-content/uploads/private/user-management.log' );
}

/**
 * Grouper mock API off by default.
 * Can be overridden in wp-config.php.
 */
if ( ! defined( 'HSPH_TOOLKIT_ENABLE_GROUPER_MOCK' ) ) {
	define( 'HSPH_TOOLKIT_ENABLE_GROUPER_MOCK', false );
}

/**
 * On activation, create the log file if it doesn't already exist.
 */
register_activation_hook(
	__FILE__,
	function () {
		$log_dir = dirname( HSPH_USER_MANAGEMENT_LOG_PATH );
		if ( ! is_dir( $log_dir ) ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_operations_mkdir
			mkdir( $log_dir, 0755, true );
		}
		if ( ! file_exists( HSPH_USER_MANAGEMENT_LOG_PATH ) ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_operations_touch
			touch( HSPH_USER_MANAGEMENT_LOG_PATH );
		}
	}
);

// Ensure wp_delete_user() is available.
require_once ABSPATH . 'wp-admin/includes/user.php';

// Custom exception class.
require_once 'inc/class-hsph-user-management-exception.php';

// JSON logger.
require_once 'inc/class-hsph-user-management-logger.php';

// Grouper API client.
require_once 'inc/class-hsph-user-management-grouper.php';

// PDS API client.
require_once 'inc/class-hsph-user-management-pds.php';

// Main user management class.
require_once 'inc/class-hsph-user-management.php';

// Cron handler.
require_once 'inc/class-hsph-user-management-cron.php';

$hsph_user_management_cron = new HSPH_User_Management_Cron();
$hsph_user_management_cron->init();

// WP-CLI command.
if ( defined( 'WP_CLI' ) && WP_CLI ) {
	require_once 'inc/class-hsph-user-management-cli.php';
	WP_CLI::add_command( 'hsph_user_management', 'HSPH_User_Management_CLI' );
}
