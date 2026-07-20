<?php
/**
 *
 * Miscellaneous functions.
 *
 * @package hpsh
 * @subpackage plugin-harvard-key
 */

/**
 * A set of generic functions to re-use accross the plug-in.
 *
 * @package hpsh
 * @subpackage plugin-harvard-key
 */

if ( ! function_exists( 'wp_password_change_notification' ) ) {
	/**
	 * Plugable function from WP.
	 * Notify the blog admin of a user changing password, normally via email.
	 *
	 * @param WP_User $user User object.
	 */
	function wp_password_change_notification( $user ) { //phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedFunctionFound
		// do nothing.
	}
}

/**
 * Allow us to easily get an option from either the site or network on multisite.
 * But it also allow us to get the current blog option on a multisite install.
 *
 * @param string  $field The string option name.
 * @param boolean $always_current_blog Use the network level or the site level.
 *
 * @return string Option Value.
 */
function harvard_key_get_contextual_option( $field, $always_current_blog = false ) {
	if ( is_multisite() && false === $always_current_blog ) {
		return get_site_option( $field );
	} else {
		return get_option( $field );
	}
}
