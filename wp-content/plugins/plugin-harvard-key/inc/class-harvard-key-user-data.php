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
	 * Initialize the instance.
	 */
	public function __construct() {
		$this->logger = new Harvard_Key_Logger();
	}

	/**
	 * Prepare an array of user data to be updated after a user authenticates.
	 *
	 * @param  array   $saml_attrs The SAML attributes of the authenticated user.
	 * @param  WP_User $wp_user The authenticated WordPress user.
	 * @return array
	 */
	public function prepare_user_data( $saml_attrs, $wp_user ) {
		// Attributes in $saml_attrs will always be arrays (per wp_saml_auth docs).
		// Set these to the empty string if the attribute isn't set.
		$eppn = $saml_attrs['eduPersonPrincipalName'][0] ?? '';
		// Report to Sentry if eppn is empty. It's is used for user management and is a security risk if absent.
		if ( empty( $eppn ) ) {
			$msg = "WordPress user {$wp_user->user_login} is missing the eduPersonPrincipalName attribute";
			$this->logger->log( $msg );
			send_to_sentry( new Exception( $msg ) );
		}
		// Update last login.
		$current_time = sanitize_text_field( current_time( 'mysql' ) );
		$userdata     = array(
			'ID'           => $wp_user->ID,
			'display_name' => $saml_attrs['displayName'][0] ?? '',
			'nickname'     => $wp_user->user_login,
			'first_name'   => $saml_attrs['givenName'][0] ?? '',
			'last_name'    => $saml_attrs['sn'][0] ?? '',
			'meta_input'   => array(
				'grouper_groups'         => $saml_attrs['memberOf'] ?? array(),
				'last_login'             => $current_time,
				'eduPersonPrincipalName' => $eppn,
			),
		);
		return $userdata;
	}
}
