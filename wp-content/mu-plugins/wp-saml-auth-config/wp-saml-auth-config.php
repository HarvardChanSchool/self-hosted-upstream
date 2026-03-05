<?php
/**
 * Plugin Name: WP Saml Auth Config
 * Plugin URI: https://github.com/HarvardChanSchool/wp-saml-auth-config
 * Description: An mu-plugin used to configure the wp-saml-auth plugin
 * Version: 1.0.0
 * Author: Harvard Chan School of Public Health
 * Author URI: https://github.com/HarvardChanSchool
 *
 * @package pantheon
 */

/**
 * Filter wp-saml-auth confifuration values.
 * Adapted from the example provided here: https://github.com/pantheon-systems/wp-saml-auth.
 *
 * @param  mixed  $value The default configuration option value.
 * @param  string $option_name The name of the configuration option.
 * @return string The filtered configuration option value.
 */
function hsph_wp_saml_auth_config( $value, $option_name ) {
	// Resolve environment overrides and metadata-driven values once.
	$_config = hsph_get_saml_config();
	// The wp-saml-auth plugin expects an array in this format.
	// Configurable values are replaced below with those in $_config.
	$config = array(
		/**
		 * Type of SAML connection bridge to use.
		 *
		 * 'internal' uses OneLogin bundled library; 'simplesamlphp' uses SimpleSAMLphp.
		 *
		 * Defaults to SimpleSAMLphp for backwards compatibility.
		 *
		 * @param string
		 */
		'connection_type'        => 'internal',
		/**
		 * Configuration options for OneLogin library use.
		 *
		 * See comments with "Required:" for values you absolutely need to configure.
		 *
		 * @param array
		 */
		'internal_config'        => array(
			// Validation of SAML responses is required.
			'strict'   => true,
			'debug'    => defined( 'WP_DEBUG' ) && WP_DEBUG ? true : false,
			'baseurl'  => $_config['base_url'],
			'sp'       => array(
				'entityId'                 => $_config['sp_entity_id'],
				'assertionConsumerService' => array(
					'url'     => $_config['sp_acs_url'],
					'binding' => 'urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST',
				),
			),
			'idp'      => array(
				// Required: Set based on provider's supplied value.
				'entityId'            => $_config['idp_entity_id'],
				'singleSignOnService' => array(
					// Required: Set based on provider's supplied value.
					'url'     => $_config['idp_sso_url'],
					'binding' => 'urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect',
				),
				'singleLogoutService' => array(
					// Required: Set based on provider's supplied value.
					'url'     => $_config['idp_slo_url'],
					'binding' => 'urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect',
				),
				// Required: Contents of the IDP's public x509 certificate.
				'x509cert'            => $_config['idp_x509cert'],
			),
			'security' => array(
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
		'simplesamlphp_autoload' => __DIR__ . '/simplesamlphp/lib/_autoload.php',
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
		'auto_provision'         => $_config['auto_provision'],
		/**
		 * Whether or not to permit logging in with username and password.
		 *
		 * If this feature is disabled, all authentication requests will be
		 * channeled through SimpleSAMLphp.
		 *
		 * @param bool
		 */
		'permit_wp_login'        => $_config['permit_wp_login'],
		/**
		 * Attribute by which to get a WordPress user for a SAML user.
		 *
		 * @param string Supported options are 'email' and 'login'.
		 */
		'get_user_by'            => $_config['get_user_by'],
		/**
		 * SAML attribute which includes the user_login value for a user.
		 *
		 * @param string
		 */
		'user_login_attribute'   => $_config['user_login_attr'],
		/**
		 * SAML attribute which includes the user_email value for a user.
		 *
		 * @param string
		 */
		'user_email_attribute'   => $_config['user_email_attr'],
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
		'first_name_attribute'   => 'givenName',
		/**
		 * SAML attribute which includes the last_name value for a user.
		 *
		 * @param string
		 */
		'last_name_attribute'    => 'sn',
		/**
		 * Default WordPress role to grant when provisioning new users.
		 *
		 * @param string
		 */
		'default_role'           => $_config['default_role'],
	);
	$value = isset( $config[ $option_name ] ) ? $config[ $option_name ] : $value;
	return $value;
}
add_filter( 'wp_saml_auth_option', 'hsph_wp_saml_auth_config', 10, 2 );

/**
 * Build the default SAML configuration values shared across providers.
 *
 * @return array Default configuration keyed by option name.
 */
function hsph_get_config_defaults() {
	// Get the correct home url for single site and multisite.
	$home_url_base = is_multisite() ? network_home_url() : get_home_url();
	// Ensure the home url ends in a forward slash.
	$home_url = rtrim( $home_url_base, '/' ) . '/';
	// Provide consistent defaults that mirror the main site endpoints.
	$login_url = $home_url . 'wp-login.php';
	$defaults  = array(
		'base_url'        => $home_url,
		'sp_entity_id'    => $home_url,
		'sp_acs_url'      => $login_url,
		'idp_entity_id'   => '',
		'idp_sso_url'     => '',
		'idp_slo_url'     => '',
		'idp_x509cert'    => '',
		'auto_provision'  => false,
		'permit_wp_login' => false,
		'get_user_by'     => 'email',
		'user_login_attr' => 'mail',
		'user_email_attr' => 'mail',
		'default_role'    => 'subscriber',
	);
	return $defaults;
}

/**
 * Retrieve the legacy IdP x509 certificate string.
 *
 * @return string Legacy IdP x509 certificate contents.
 */
function hsph_get_legacy_x509cert() {
	$x509cert = <<<EOC
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
	EOC;
	return $x509cert;
}

/**
 * Assemble the legacy SAML configuration array.
 *
 * @return array Legacy configuration values keyed by option name.
 */
function hsph_get_legacy_config() {
	$legacy_config = hsph_get_config_defaults();
	// Populate the fixed legacy IdP endpoints baked into our on-prem configuration.
	$legacy_config['idp_entity_id'] = 'https://fed.huit.harvard.edu/idp/shibboleth';
	$legacy_config['idp_sso_url']   = 'https://key-idp.iam.harvard.edu/idp/profile/SAML2/Redirect/SSO';
	$legacy_config['idp_slo_url']   = 'https://key.harvard.edu/logout';
	$legacy_config['idp_x509cert']  = hsph_get_legacy_x509cert();
	return $legacy_config;
}

/**
 * Build the Okta-backed SAML configuration from metadata.
 *
 * @param  string $metadata_path Path to the Okta SAML metadata XML file.
 * @return array|null Configuration array or null when metadata is unavailable.
 */
function hsph_get_okta_config( $metadata_path ) {
	if ( empty( $metadata_path ) || ! file_exists( $metadata_path ) ) {
		throw new Exception( "Okta metadata file not found: $metadata_path" );
	}
	try {
		// Start with the default config.
		$okta_config   = hsph_get_config_defaults();
		// Load live metadata so dynamic IdP values stay in sync with Okta configuration.
		$md_dom                       = hsph_get_okta_md_dom( $metadata_path );
		$okta_config['idp_entity_id'] = hsph_get_okta_md( $md_dom, '/md:EntityDescriptor/@entityID' );
		$okta_config['idp_sso_url']   = hsph_get_okta_md( $md_dom, '/md:EntityDescriptor/md:IDPSSODescriptor/md:SingleSignOnService[@Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect"]/@Location' );
		// As of October 2025, HUIT instructs integrators to use a fixed logout URL. See step 6 of https://www.iam.harvard.edu/okta-migration.
		$okta_config['idp_slo_url']   = 'https://login.harvard.edu/signin/logout';
		$okta_config['idp_x509cert']  = hsph_get_okta_md( $md_dom, '/md:EntityDescriptor/md:IDPSSODescriptor/md:KeyDescriptor[@use="signing"]/ds:KeyInfo/ds:X509Data/ds:X509Certificate' );
		return $okta_config;
	} catch ( Exception $e ) {
		throw $e;
	}
	return $okta_config;
}

/**
 * Map configuration keys to their corresponding override constants.
 *
 * @return array<string,string> Map of config keys to constant names.
 */
function hsph_saml_config_consts() {
	$map = array(
		'base_url'        => 'WP_SAML_AUTH_BASE_URL',
		'sp_entity_id'    => 'WP_SAML_AUTH_SP_ENTITY_ID',
		'sp_acs_url'      => 'WP_SAML_AUTH_SP_ACS_URL',
		'idp_entity_id'   => 'WP_SAML_AUTH_IDP_ENTITY_ID',
		'idp_sso_url'     => 'WP_SAML_AUTH_IDP_SSO_URL',
		'idp_slo_url'     => 'WP_SAML_AUTH_IDP_SLO_URL',
		'idp_x509cert'    => 'WP_SAML_AUTH_IDP_X509CERT',
		'auto_provision'  => 'WP_SAML_AUTH_AUTO_PROVISION',
		'permit_wp_login' => 'WP_SAML_AUTH_PERMIT_WP_LOGIN',
		'get_user_by'     => 'WP_SAML_AUTH_GET_USER_BY',
		'user_login_attr' => 'WP_SAML_AUTH_USER_LOGIN_ATTR',
		'user_email_attr' => 'WP_SAML_AUTH_USER_EMAIL_ATTR',
		'default_role'    => 'WP_SAML_AUTH_DEFAULT_ROLE',
	);
	// Only these keys are eligible for constant-based overrides.
	return $map;
}

/**
 * Resolve the effective SAML configuration applying provider data and overrides.
 *
 * @return array Final configuration values keyed by option name.
 * @throws Exception If configuration cannot be loaded.
 */
function hsph_get_saml_config() {
	$hostname = isset( $_SERVER['HTTP_HOST'] ) ? $_SERVER['HTTP_HOST'] : '';
	$metadata_path = defined( 'WP_SAML_AUTH_OKTA_METADATA_PATH' ) ? WP_SAML_AUTH_OKTA_METADATA_PATH : ABSPATH . 'wp-content/uploads/private/okta/' . $hostname . '.xml';
	// If an Okta metadata file exists, use the Okta IdP.
	if ( ! empty( $hostname ) && ! empty( $metadata_path ) && file_exists( $metadata_path ) ) {
		$config = hsph_get_okta_config( $metadata_path );
	} else {
		$config = hsph_get_legacy_config();
	}
	// Ensure our config is an array as expected.
	if ( ! is_array( $config ) ) {
		throw new Exception( 'Failed to load SAML configuration in wp-saml-auth-config plugin' );
	}
	$const_map = hsph_saml_config_consts();
	foreach ( $const_map as $config_key => $constant ) {
		if ( defined( $constant ) ) {
			// Override config with values defined in constants.
			$config[ $config_key ] = constant( $constant );
		}
	}
	return $config;
}

/**
 * Gets the user's SAML attributes indexed by friendly name.
 *
 * @param  array  $attributes The authenticated user's SAML attributes.
 * @param  object $provider   The authentication provider, in this case the OneLogin SAML toolkit.
 * @return array
 */
function hsph_use_friendly_attrs( $attributes, $provider ) {
	$filtered_attrs = $provider->getAttributesWithFriendlyName();
	if ( empty( $filtered_attrs ) ) {
		// Map URNs to friendly names manually if the provider didn't.
		$filtered_attrs = array(
			'displayName'             => $attributes['urn:oid:2.16.840.1.113730.3.1.241'] ?? '',
			'givenName'               => $attributes['urn:oid:2.5.4.42'] ?? '',
			'sn'                      => $attributes['urn:oid:2.5.4.4'] ?? '',
			'mail'                    => $attributes['urn:oid:0.9.2342.19200300.100.1.3'] ?? '',
			'harvardEduOfficialEMail' => $attributes['urn:oid:1.3.6.1.4.1.6341.610.1.2.1.175'] ?? '',
			'eduPersonPrincipalName'  => $attributes['urn:oid:1.3.6.1.4.1.5923.1.1.1.6'] ?? '',
			'memberOf'                => $attributes['urn:oid:1.2.840.113556.1.2.102'] ?? '',
		);
	}
	return $filtered_attrs;
}
add_filter( 'wp_saml_auth_attributes', 'hsph_use_friendly_attrs', 10, 2 );

/**
 * When a user is auto-provisioned, use their email account name for their WordPress user_login.
 * For example, the user_login for jnicholson@hsph.harvard.edu will be jnicholson.
 *
 * @param array $user_args  The args that will be passed to wp_insert_user.
 * @param array $attributes The authenticated user's SAML attributes.
 * @return array
 */
function hsph_set_auto_provision_un( $user_args, $attributes ) {
	$at_pos = strpos( $user_args['user_email'], '@' );
	if ( false !== $at_pos ) {
		// Use the email local-part as the base username for new accounts.
		$user_args['user_login'] = substr( $user_args['user_email'], 0, $at_pos );
	}

	// Guarantee uniqueness by suffixing an incrementing counter.
	$base_username = $user_args['user_login'];
	$counter       = 1;
	while ( username_exists( $user_args['user_login'] ) ) {
		$user_args['user_login'] = $base_username . $counter;
		++$counter;
	}
	return $user_args;
}
add_filter( 'wp_saml_auth_insert_user', 'hsph_set_auto_provision_un', 10, 2 );

/**
 * Read an Okta SAML metadata XML file and return a DOMXPath object.
 *
 * @param  string $path The path to the XML file.
 * @return DOMXPath
 * @throws Exception If the file does not exist or the XML cannot be loaded.
 */
function hsph_get_okta_md_dom( $path ): DOMXPath {
	// Check if file exists.
	if ( ! file_exists( $path ) ) {
		throw new Exception( "File not found: $path" );
	}

	// Load the XML file.
	$xml                     = new DOMDocument();
	$xml->preserveWhiteSpace = false;

	// Suppress warnings for malformed XML and handle errors manually.
	$loaded = @$xml->load( $path );
	if ( ! $loaded ) {
		throw new Exception( "Failed to load XML from: $path" );
	}

	// Create XPath object.
	$xpath = new DOMXPath( $xml );

	// Register namespaces used in the SAML metadata.
	$xpath->registerNamespace( 'md', 'urn:oasis:names:tc:SAML:2.0:metadata' );
	$xpath->registerNamespace( 'ds', 'http://www.w3.org/2000/09/xmldsig#' );
	return $xpath;
}

/**
 * Get metadata from a DOMXPath object created from an Okta SAML metadata XML file.
 *
 * @param  DOMXPath $xpath The DOMXPath object.
 * @param  string   $q The XPath query to execute.
 * @return string
 * @throws Exception If the XML cannot be loaded.
 */
function hsph_get_okta_md( $xpath, $q ): string {
	// Execute the XPath query.
	$result = $xpath->query( $q );

	// Check if query returned any results.
	if ( $result === false || $result->length === 0 ) {
		// Return an empty string when the metadata omits the requested value.
		return '';
	}

	// Get the first matching node.
	$node = $result->item( 0 );

	// Return node value or attribute value.
	if ( $node->nodeType === XML_ATTRIBUTE_NODE ) {
		return $node->nodeValue;
	} elseif ( $node->nodeType === XML_ELEMENT_NODE ) {
		// Trim text nodes to avoid stray whitespace in configuration values.
		return trim( $node->textContent );
	}
	return $node->nodeValue ?? '';
}
