<?php

namespace HSPH\Plugins\WPSAMLAuthConfigSelfHosted;

/**
 * Filter the default wp-saml-auth confifuration option values.
 * Any value set in $defaults will be used instead of the plugin-default.
 * Adapted from the example provided here: https://github.com/pantheon-systems/wp-saml-auth.
 *
 * @param  mixed  $value The default configuration option value.
 * @param  string $option_name The name of the configuration option.
 * @return string The filtered configuration option value.
 */
function hsph_wp_saml_auth_config( $value, $option_name ) {
	// Trim any trailing slash to ensure this variable is always the home URL with no trailing slash.
	// WordPress documentation doesn't specify whether the home_url includes trailing slashes https://developer.wordpress.org/reference/functions/home_url/.
	$home_url_no_slash = rtrim( home_url(), '/' );
    $home_url = $home_url_no_slash . '/';
	$defaults = array(
		/**
		 * Type of SAML connection bridge to use.
		 *
		 * 'internal' uses OneLogin bundled library; 'simplesamlphp' uses SimpleSAMLphp.
		 *
		 * Defaults to SimpleSAMLphp for backwards compatibility.
		 *
		 * @param string
		 */
		'connection_type' => 'internal',
		/**
		 * Configuration options for OneLogin library use.
		 *
		 * See comments with "Required:" for values you absolutely need to configure.
		 *
		 * @param array
		 */
		'internal_config'        => array(
			// Validation of SAML responses is required.
			'strict'       => true,
			'debug'        => defined( 'WP_DEBUG' ) && WP_DEBUG ? true : false,
			'baseurl'      => home_url(),
			'sp'           => array(
				'entityId' => $home_url,
				'assertionConsumerService' => array(
					'url'  => wp_login_url(),
					'binding' => 'urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST',
				),
			),
			'idp'          => array(
				// Required: Set based on provider's supplied value.
				'entityId' => 'https://fed.huit.harvard.edu/idp/shibboleth',
				'singleSignOnService' => array(
					// Required: Set based on provider's supplied value.
					'url'  => 'https://key-idp.iam.harvard.edu/idp/profile/SAML2/Redirect/SSO',
					'binding' => 'urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect',
				),
				'singleLogoutService' => array(
					// Required: Set based on provider's supplied value.
					'url'  => 'https://key.harvard.edu/logout',
					'binding' => 'urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect',
				),
				// Required: Contents of the IDP's public x509 certificate.
				'x509cert' => <<<EOC
					MIIDRDCCAiygAwIBAgIUdXfRRGHcHe0kqyWjt9pzdElroS8wDQYJKoZIhvcNAQEL
					BQAwIjEgMB4GA1UEAwwXa2V5LWlkcC5pYW0uaGFydmFyZC5lZHUwHhcNMTYwNjA5
					MjAyNDEyWhcNMzYwNjA5MjAyNDEyWjAiMSAwHgYDVQQDDBdrZXktaWRwLmlhbS5o
					YXJ2YXJkLmVkdTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAIr/Hd3R
					cDBNh5C2hi9GicY0LCOJDW34ndazmFZy5djYajqxoy7+RPDZwOlJdjIq7hpzxKvD
					K59dSLha60XfSSzqKpnQ8S/jcvpKnpW9UStMR7lGaIUTLSAEqHvguzR7iQt3wuKD
					FxGPxvQeO/z32F0wvmbmemI1XhLSIo1aJAOujsAFPex1K3QYTkBQDOiDqd9gatr9
					W163rx+Nd7BHpXaUWGQcLpkM7iMH9lgmWg4F4yvJLOV72ygOwb/YP7bnVog2B+VM
					AuX//TVhMHc3d4QOMS7zDDKexbG1kdlBuFrawV5betGnIywEFE9Du3RCH61Zhppd
					rhtfP+ie2tbqFlUCAwEAAaNyMHAwHQYDVR0OBBYEFHKP/f1hfPpCGc1DKMtXlWom
					aAV7ME8GA1UdEQRIMEaCF2tleS1pZHAuaWFtLmhhcnZhcmQuZWR1hitodHRwczov
					L2ZlZC5odWl0LmhhcnZhcmQuZWR1L2lkcC9zaGliYm9sZXRoMA0GCSqGSIb3DQEB
					CwUAA4IBAQAFLHg4EBEDDeUhQi+QRVgbgmkiKkPSiZLeeDbmaWyELEr5kGye7Q6Z
					wcXDK3qHOQc6GRhBw13A7YqCuuhjgxD51hzlPvOy6HAmPkaqWuNfXl2QMxb1LNkY
					0WJiEHLOZvnpItV5mTgszzlTfg/rj1l8IfsBSYfSZjePIk7IIW4y0PsQG+mOCz4D
					jrZDSJtefq5iaDcZKHGmAOex9osIjM2JJ7hUV52YV/ct+Ha6q+oBnzUo62lVGOsx
					zyNYEoUX1Q25f0lm72MYS7M4LifZ4sW3fF9OZClDelj2VcqAWHeMQhjkbtMyrTc5
					59SJSzhAtL9UdzpgB0Poym6nF34EgDtl
					EOC,
			),
			'security'     => array(
				// If true, an error will not be raised when the SAML response contains two attributes with the same FriendlyName.
				'allowRepeatAttributeName' => true,
			),
		),
		/**
		 * Path to SimpleSAMLphp autoloader.
		 *
		 * Follow the standard implementation by installing SimpleSAMLphp
		 * alongside the plugin, and provide the path to its autoloader.
		 * Alternatively, this plugin will work if it can find the
		 * `SimpleSAML_Auth_Simple` class.
		 *
		 * @param string
		 */
		'simplesamlphp_autoload' => dirname( __FILE__ ) . '/simplesamlphp/lib/_autoload.php',
		/**
		 * Authentication source to pass to SimpleSAMLphp
		 *
		 * This must be one of your configured identity providers in
		 * SimpleSAMLphp. If the identity provider isn't configured
		 * properly, the plugin will not work properly.
		 *
		 * @param string
		 */
		'auth_source'            => 'default-sp',
		/**
		 * Whether or not to automatically provision new WordPress users.
		 *
		 * When WordPress is presented with a SAML user without a
		 * corresponding WordPress account, it can either create a new user
		 * or display an error that the user needs to contact the site
		 * administrator.
		 *
		 * @param bool
		 */
		'auto_provision'         => false,
		/**
		 * Whether or not to permit logging in with username and password.
		 *
		 * If this feature is disabled, all authentication requests will be
		 * channeled through SimpleSAMLphp.
		 *
		 * @param bool
		 */
		'permit_wp_login'        => false,
		/**
		 * Attribute by which to get a WordPress user for a SAML user.
		 *
		 * @param string Supported options are 'email' and 'login'.
		 */
		'get_user_by'            => 'email',
		/**
		 * SAML attribute which includes the user_login value for a user.
		 *
		 * @param string
		 */
		'user_login_attribute'   => 'mail',
		/**
		 * SAML attribute which includes the user_email value for a user.
		 *
		 * @param string
		 */
		'user_email_attribute'   => 'mail',
		/**
		 * SAML attribute which includes the display_name value for a user.
		 *
		 * @param string
		 */
		'display_name_attribute' => 'displayName',
		/**
		 * SAML attribute which includes the first_name value for a user.
		 *
		 * @param string
		 */
		'first_name_attribute' => 'givenName',
		/**
		 * SAML attribute which includes the last_name value for a user.
		 *
		 * @param string
		 */
		'last_name_attribute' => 'sn',
		/**
		 * Default WordPress role to grant when provisioning new users.
		 *
		 * @param string
		 */
		'default_role'           => 'subscriber',
	);
	$value = isset( $defaults[ $option_name ] ) ? $defaults[ $option_name ] : $value;
	return $value;
}
add_filter( 'wp_saml_auth_option', __NAMESPACE__ . '\\hsph_wp_saml_auth_config', 10, 2 );

/**
 * Gets the user's SAML attributes indexed by friendly name.
 *
 * @param  array  $attributes The authenticated user's SAML attributes.
 * @param  object $provider   The authentication provider, in this case the OneLogin SAML toolkit.
 * @return array
 */
function use_friendly_attrs( $attributes, $provider ) {
	return $provider->getAttributesWithFriendlyName();
}
add_filter( 'wp_saml_auth_attributes', __NAMESPACE__ . '\\use_friendly_attrs', 10, 2 );
