<?php
/**
 * Password management related features/functions/hooks
 *
 * @package hpsh
 * @subpackage plugin-harvard-key
 */

/**
 * Harvard_Key_Passwords class.
 * A class to mananage HKPF
 */
class Harvard_Key_Passwords {
	/**
	 * Init function.
	 * Add actions, hooks and filters
	 *
	 * @access public
	 * @return void
	 */
	public function init() {
		// disable and hide the retrieve password and password reset options we do not need them anymore.
		add_action( 'retrieve_password', array( $this, 'disable_function' ) );
		add_action( 'password_reset', array( $this, 'disable_function' ) );
		add_action( 'lost_password', array( $this, 'disable_function' ) );
		add_action( 'check_passwords', array( $this, 'generate_password' ), 10, 3 );

		add_filter( 'wp_is_application_passwords_available', '__return_false' );
		// Disable WordPress Administration email verification prompt.
		add_filter( 'admin_email_check_interval', '__return_false' );

		// block access to the password reset page.
		add_filter( 'allow_password_reset', array( $this, 'show_password_field' ) );
		add_filter( 'show_password_fields', array( $this, 'show_password_field' ) );
	}

	/**
	 * A function to check if we should display or not password fields for add_filter('show_password_fields','').
	 *
	 * @return boolean Show or hide the password.
	 */
	public function show_password_field() {
		// Show only password fields for super users.
		if ( current_user_can( 'manage_network_users' ) ) {
			return true;
		}
		// If the setting is not overriden we return false to hide password fields everywhere.
		return false;
	}

	/**
	 * Set the passwords on user creation.
	 *
	 * @param int    $user User to check pass for.
	 * @param string $pass1 Password 1 passed by reference.
	 * @param string $pass2 Password 2 passed by reference.
	 *
	 * @return void
	 */
	public function generate_password( $user, $pass1, $pass2 ) {
		$random_password = wp_generate_password( 64 );
		$pass2           = $random_password;
		$pass1           = $pass2;
	}

	/**
	 * Disabled reset, lost, and retrieve password features.
	 *
	 * @return void
	 */
	public function disable_function() {
		wp_die( esc_html__( 'Sorry, this feature is disabled.', 'plugin-harvard-key' ) );
	}
}
