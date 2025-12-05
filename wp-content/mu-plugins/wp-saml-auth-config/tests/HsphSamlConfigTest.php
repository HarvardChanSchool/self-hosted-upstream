<?php

use PHPUnit\Framework\TestCase;

class HsphSamlConfigTest extends TestCase {
	protected function setUp(): void {
		parent::setUp();
		$GLOBALS['wp_is_multisite']       = false;
		$GLOBALS['wp_home_url']           = 'https://example.test/';
		$GLOBALS['wp_network_home_url']   = 'https://network.example.test/';
		$GLOBALS['wp_existing_usernames'] = array();
	}

	protected function tearDown(): void {
		parent::tearDown();
		unset(
			$GLOBALS['wp_is_multisite'],
			$GLOBALS['wp_home_url'],
			$GLOBALS['wp_network_home_url'],
			$GLOBALS['wp_existing_usernames']
		);
	}

	public function test_get_config_defaults_single_site(): void {
		$defaults = hsph_get_config_defaults();

		$this->assertSame( 'https://example.test/', $defaults['base_url'] );
		$this->assertSame( 'https://example.test/', $defaults['sp_entity_id'] );
		$this->assertSame( 'https://example.test/wp-login.php', $defaults['sp_acs_url'] );
		$this->assertFalse( $defaults['auto_provision'] );
	}

	public function test_legacy_config_applies_overrides(): void {
		$legacy = hsph_get_legacy_config();

		$this->assertSame( 'https://fed.huit.harvard.edu/idp/shibboleth', $legacy['idp_entity_id'] );
		$this->assertSame( 'https://key-idp.iam.harvard.edu/idp/profile/SAML2/Redirect/SSO', $legacy['idp_sso_url'] );
		$this->assertSame( 'https://key.harvard.edu/logout', $legacy['idp_slo_url'] );
	}

	public function test_auto_provision_username_suffixes_when_exists(): void {
		$GLOBALS['wp_existing_usernames'] = array( 'jdoe', 'jdoe1' );

		$user_args = array(
			'user_email' => 'jdoe@example.test',
			'user_login' => '',
		);

		$result = hsph_set_auto_provision_un( $user_args, array() );

		$this->assertSame( 'jdoe2', $result['user_login'] );
	}

	public function test_get_saml_config_defaults_without_okta(): void {
		$config = hsph_get_saml_config();

		$this->assertSame( 'https://key-idp.iam.harvard.edu/idp/profile/SAML2/Redirect/SSO', $config['idp_sso_url'] );
		$this->assertSame( 'email', $config['get_user_by'] );
	}

	/**
	 * @runInSeparateProcess
	 */
	public function test_get_saml_config_uses_okta_metadata_when_available(): void {
		$GLOBALS['wp_home_url'] = 'https://okta.test/';

		$metadata = <<<XML
<?xml version="1.0"?>
<EntityDescriptor entityID="https://okta.example.org/app/sso/saml" xmlns="urn:oasis:names:tc:SAML:2.0:metadata" xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
	<IDPSSODescriptor>
		<KeyDescriptor use="signing">
			<ds:KeyInfo>
				<ds:X509Data>
					<ds:X509Certificate>TESTCERT</ds:X509Certificate>
				</ds:X509Data>
			</ds:KeyInfo>
		</KeyDescriptor>
		<SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="https://okta.example.org/sso"/>
	</IDPSSODescriptor>
</EntityDescriptor>
XML;

		$temp_file = tempnam( sys_get_temp_dir(), 'okta-md' );
		file_put_contents( $temp_file, $metadata );

		define( 'WP_SAML_AUTH_OKTA_METADATA_PATH', $temp_file );
		define( 'WP_SAML_AUTH_IDP_METADATA_PATH', $temp_file );

		$config = hsph_get_saml_config();

		$this->assertSame( 'https://okta.example.org/app/sso/saml', $config['idp_entity_id'] );
		$this->assertSame( 'https://okta.example.org/sso', $config['idp_sso_url'] );
		$this->assertSame( 'TESTCERT', $config['idp_x509cert'] );

		@unlink( $temp_file );
	}

	/**
	 * @runInSeparateProcess
	 */
	public function test_constants_override_config_values(): void {
		define( 'WP_SAML_AUTH_BASE_URL', 'https://constants.example/' );
		define( 'WP_SAML_AUTH_SP_ENTITY_ID', 'https://constants.example/sp' );
		define( 'WP_SAML_AUTH_SP_ACS_URL', 'https://constants.example/acs' );
		define( 'WP_SAML_AUTH_AUTO_PROVISION', true );
		define( 'WP_SAML_AUTH_PERMIT_WP_LOGIN', true );
		define( 'WP_SAML_AUTH_GET_USER_BY', 'login' );

		$config = hsph_get_saml_config();

		$this->assertSame( 'https://constants.example/', $config['base_url'] );
		$this->assertSame( 'https://constants.example/sp', $config['sp_entity_id'] );
		$this->assertSame( 'https://constants.example/acs', $config['sp_acs_url'] );
		$this->assertTrue( $config['auto_provision'] );
		$this->assertTrue( $config['permit_wp_login'] );
		$this->assertSame( 'login', $config['get_user_by'] );
	}
}
