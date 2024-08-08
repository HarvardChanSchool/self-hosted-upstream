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
		$user_props  = Harvard_Key_User_Data::prepare_user_data( $attributes, $user );
		$update_user = wp_update_user( $user_props );
		if ( is_wp_error( $update_user ) ) {
			$this->logger->log( "Error updating user {$user->user_login}" );
			return;
		}
	}
}
