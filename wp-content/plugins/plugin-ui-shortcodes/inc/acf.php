<?php
/**
 * Adding ACF local json hooks to the plugin.
 * More details here: https://www.advancedcustomfields.com/resources/local-json/
 *
 * @package hpsh
 * @subpackage plugin-ui-shortcodes
 */

/**
 * Saving ACF fields to assets folder.
 *
 * @return String The path where to save ACF json fields.
 */
add_filter(
	'acf/settings/save_json',
	function ( $path ) {
		/** The following line is commented on pupose and should only be uncommented
		 *  when actively editing the ACF fields during development.
		 *  It should be commented againg before commiting.
		 */
		// $path = HSPH_UI_SHORTCODES_ASSETS_PATH . 'acf/'; //phpcs:ignore Squiz.PHP.CommentedOutCode.Found
		return $path;
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
		$paths[] = HSPH_UI_SHORTCODES_ASSETS_PATH . 'acf/';
		return $paths;
	}
);
