<?php
/**
 *
 * Persist user data from SAML assertion.
 *
 * @package hpsh
 * @subpackage plugin-harvard-key
 */

/**
 * Harvard_Key_User_Data class.
 */
class Harvard_Key_User_Data {

	/**
	 * Prepare an array of user data to be updated after a user authenticates.
	 *
	 * @param  array   $saml_attrs The SAML attributes of the authenticated user.
	 * @param  WP_User $wp_user The authenticated WordPress user.
	 * @return array
	 */
	public static function prepare_user_data( $saml_attrs, $wp_user ) {
		// Items in $saml_attrs will always be arrays (per wp_saml_auth docs).
		// We want to store the eppn as a string.
		$eppn = $saml_attrs['eduPersonPrincipalName'][0];
		// Update last login.
		$current_time = sanitize_text_field( current_time( 'mysql' ) );
		$userdata     = array(
			'ID'           => $wp_user->ID,
			'user_email'   => $saml_attrs['harvardEduOfficialEMail'][0],
			'display_name' => $saml_attrs['displayName'][0],
			'nickname'     => $wp_user->user_login,
			'first_name'   => $saml_attrs['givenName'][0],
			'last_name'    => $saml_attrs['sn'][0],
			'meta_input'   => array(
				'grouper_groups'         => $saml_attrs['memberOf'],
				'last_login'             => $current_time,
				'eduPersonPrincipalName' => $eppn,
			),
		);
		return $userdata;
	}
}
