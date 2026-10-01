<?php
/**
 * Local development mock of the Harvard Grouper Convenience API.
 *
 * Intercepts requests made by HSPH_User_Management_Grouper via the
 * pre_http_request filter, so the user-management sync can be exercised
 * without real Grouper credentials or a network call.
 *
 * Enable by defining HSPH_TOOLKIT_ENABLE_GROUPER_MOCK as true (e.g. in a
 * local wp-config.php). Never enable in production.
 *
 * @package hsph
 * @subpackage hsph-user-management
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( ! defined( 'HSPH_GROUPER_API_URL' ) ) {
	define( 'HSPH_GROUPER_API_URL', 'https://grouper.mock/' );
}
if ( ! defined( 'HSPH_GROUPER_AUTH_GROUPS' ) ) {
	define( 'HSPH_GROUPER_AUTH_GROUPS', array( 'mock:wp-authorized-users' ) );
}
if ( ! defined( 'HSPH_GROUPER_CONVENIENCE_API_KEY' ) ) {
	define( 'HSPH_GROUPER_CONVENIENCE_API_KEY', 'mock-api-key' );
}
if ( ! defined( 'HSPH_GROUPER_BASE_API_USERNAME' ) ) {
	define( 'HSPH_GROUPER_BASE_API_USERNAME', 'mock-username' );
}
if ( ! defined( 'HSPH_GROUPER_BASE_API_PASSWORD' ) ) {
	define( 'HSPH_GROUPER_BASE_API_PASSWORD', 'mock-password' );
}

/**
 * Additional eppns to include in the mock server's response, alongside
 * the eppns derived from usermeta. Can be defined in wp-config.php.
 */
if ( ! defined( 'HSPH_GROUPER_MOCK_EXTRA_EPPNS' ) ) {
	define( 'HSPH_GROUPER_MOCK_EXTRA_EPPNS', array() );
}

/**
 * Build the mock membership payload for a given page.
 *
 * Page 1 returns every WordPress user's eduPersonPrincipalName usermeta
 * value as-is, plus any eppns defined in HSPH_GROUPER_MOCK_EXTRA_EPPNS.
 * Any later page returns an empty membership array so
 * HSPH_User_Management::get_wp_auth_group()'s pagination loop terminates.
 *
 * @param int $page_num The requested page number.
 * @return array
 */
function hsph_grouper_mock_membership_payload( $page_num ) {
	if ( $page_num > 1 ) {
		return array(
			'getGroupMembershipResponse' => array( 'groupMembership' => array() ),
		);
	}

	// blog_id 0 skips the current-site scoping get_users() applies by default on
	// multisite, matching HSPH_User_Management::get_wp_users(), which queries
	// $wpdb->users directly with no per-site scoping.
	$users = get_users(
		array(
			'blog_id'  => 0,
			'meta_key' => 'eduPersonPrincipalName',
		)
	);
	$eppns = HSPH_GROUPER_MOCK_EXTRA_EPPNS;
	foreach ( $users as $user ) {
		$eppn = get_user_meta( $user->ID, 'eduPersonPrincipalName', true );
		if ( '' !== $eppn ) {
			$eppns[] = $eppn;
		}
	}

	return array(
		'getGroupMembershipResponse' => array( 'groupMembership' => $eppns ),
	);
}

/**
 * Intercept HSPH_User_Management_Grouper requests and return mock data.
 *
 * @param false|array|WP_Error $preempt A preemptive return value. Default false.
 * @param array                $args    HTTP request arguments.
 * @param string               $url     The request URL.
 * @return false|array
 */
function hsph_grouper_mock_pre_http_request( $preempt, $args, $url ) {
	if ( 0 !== strpos( $url, HSPH_GROUPER_API_URL ) || false === strpos( $url, '/membership' ) ) {
		return $preempt;
	}

	$query = wp_parse_url( $url, PHP_URL_QUERY );
	parse_str( (string) $query, $params );
	$page_num = isset( $params['page_num'] ) ? (int) $params['page_num'] : 1;

	return array(
		'body'     => wp_json_encode( hsph_grouper_mock_membership_payload( $page_num ) ),
		'response' => array(
			'code'    => 200,
			'message' => 'OK',
		),
		'headers'  => array(),
		'cookies'  => array(),
		'filename' => null,
	);
}
add_filter( 'pre_http_request', 'hsph_grouper_mock_pre_http_request', 10, 3 );
