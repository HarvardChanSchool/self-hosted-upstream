<?php
/**
 * HSPH Plugin Social
 *
 * @package hpsh
 * @subpackage hsph-plugin-social
 */

/**
 * Plugin Name: HSPH Plugin Social
 * Plugin URI:  http://www.hsph.harvard.edu/information-technology/
 * Description: Everything social media related at HSPH.
 * Version:     1.0.1
 * Author:      HSPH Webteam
 * Author URI:  http://www.hsph.harvard.edu/
 * Text Domain: hsph-plugin-social
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'HSPH_PLUGIN_SOCIAL_ASSETS_URL', plugin_dir_url( __FILE__ ) . '/assets' );
define( 'HSPH_PLUGIN_SOCIAL_ASSETS_PATH', plugin_dir_path( __FILE__ ) . '/assets' );
define( 'HSPH_PLUGIN_SOCIAL_INC_PATH', plugin_dir_path( __FILE__ ) . '/inc' );
define( 'HSPH_PLUGIN_SOCIAL_VERSION', get_file_data( __FILE__, array( 'Version' => 'Version' ), 'plugin' ) );

require_once HSPH_PLUGIN_SOCIAL_INC_PATH . '/widgets/class-hsph-plugin-social-networks-widget.php';

require_once HSPH_PLUGIN_SOCIAL_INC_PATH . '/class-hsph-plugin-social-networks.php';
$hsph_plugin_social_networks = new HSPH_Plugin_Social_Networks();
$hsph_plugin_social_networks->init();

require_once HSPH_PLUGIN_SOCIAL_INC_PATH . '/class-hsph-plugin-sharing-buttons.php';
$hsph_plugin_sharing_buttons = new HSPH_Plugin_Sharing_Buttons();
$hsph_plugin_sharing_buttons->init();

/**
 * Saving ACF fields to assets folder.
 *
 * @return String The path where to save ACF json fields.
 */
add_filter(
	'acf/settings/save_json',
	function ( $path ) {
		/**
		 * The two return statements below is a hack for conflicting save points in ACF.
		 * Instructions:
		 * To edit and save field groups as local JSON, comment the first return statement
		 * and comment out the second return statement.
		 * Before committing your changes, uncomment the second return statement and
		 * and comment out the first return statement.
		 */
		// phpcs:disable Squiz.Commenting.InlineComment.InvalidEndChar, Squiz.PHP.CommentedOutCode.Found
		// return HSPH_PLUGIN_SOCIAL_ASSETS_PATH . '/acf'; // Never commit this line uncommented.
		return $path; // Always commit this line uncommented.
		// phpcs:enable
	}
);

/**
 * Loading ACF fields from assets folder.
 *
 * @return String The path where to load ACF json fields.
 */
add_filter(
	'acf/settings/load_json',
	function ( $paths ) {
		$paths[] = HSPH_PLUGIN_SOCIAL_ASSETS_PATH . '/acf';
		return $paths;
	}
);
