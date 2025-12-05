<?php
/**
 *
 * SAML authentication
 *
 * @package hpsh
 * @subpackage plugin-harvard-key
 */

/**
 * Harvard_Key_Saml class.
 */
class Harvard_Key_Saml {

	/**
	 * Init function.
	 * Add actions, hooks and filters
	 *
	 * @access public
	 * @return void
	 */
	public function init() {
		$this->logger = new Harvard_Key_Logger();
		add_filter( 'wp_saml_auth_attributes', array( $this, 'use_friendly_attrs' ), 10, 2 );
		add_action( 'wp_saml_auth_existing_user_authenticated', array( $this, 'update_wp_user' ), 10, 2 );
		add_action( 'wp_saml_auth_new_user_authenticated', array( $this, 'update_wp_user' ), 10, 2 );
	}

	/**
	 * Gets the user's SAML attributes indexed by friendly name.
	 *
	 * @param  array  $attributes The authenticated user's SAML attributes.
	 * @param  object $provider   The authentication provider, in this case the OneLogin SAML toolkit.
	 * @return array
	 */
	public function use_friendly_attrs( $attributes, $provider ) {
		return $provider->getAttributesWithFriendlyName();
	}

	/**
	 * Update the authenticated WordPress user using the received SAML attributes.
	 * Update the last_login user_meta.
	 *
	 * @param  WP_User $user The authenticated WordPress user.
	 * @param  array   $attributes The authenticated user's SAML attributes.
	 * @return void
	 */
	public function update_wp_user( $user, $attributes ) {
		$saml_user  = new Harvard_Key_User_Data();
		$user_props = $saml_user->prepare_user_data( $attributes, $user );
		$this->logger->log( "User {$user->user_login} SAML authenticated. Updating user based on the following attributes" );
		$this->logger->log( $user_props );
		$update_user = wp_update_user( $user_props );
		if ( is_wp_error( $update_user ) ) {
			$msg = "Error updating WordPress user {$user->user_login} during SAML authentication" . $update_user->get_error_message();
			$this->logger->log( $msg );
			send_to_sentry( new Exception( $msg ) );
		}
	}
}
