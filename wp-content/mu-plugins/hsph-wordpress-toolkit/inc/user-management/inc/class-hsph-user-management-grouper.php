<?php
/**
 * Abstraction layer used to send requests to the Harvard Grouper Convenience API.
 *
 * @package hsph
 * @subpackage hsph-user-management
 */

//phpcs:disable WordPress.Security.EscapeOutput.ExceptionNotEscaped -- Our own text.

use Psr\Log\LogLevel;

/**
 * HSPH_User_Management_Grouper class.
 */
class HSPH_User_Management_Grouper {

	/**
	 * Base URL of the Grouper Convenience API.
	 *
	 * @var string
	 */
	public $grouper_api_url = 'https://go.apis.huit.harvard.edu/ats/grouper-convenience/v2/';

	/**
	 * The logger
	 *
	 * @var HSPH_User_Management_Logger
	 */
	public $logger;

	/**
	 * Class constructor.
	 *
	 * @param HSPH_User_Management_Logger $logger The logger object used to write log messages.
	 */
	public function __construct( HSPH_User_Management_Logger $logger ) {
		$this->logger = $logger;
	}

	/**
	 * Send a request and return the response.
	 * Documentation: https://portal.apis.huit.harvard.edu/docs/ats-grouper-convenience-api/1/overview.
	 *
	 * @param string $endpoint The resource being requested, i.e. group/{group-path}/membership.
	 * @param array  $params An array of query parameters as {param => value}.
	 * @return string
	 * @throws HSPH_User_Management_Exception If request returns a non 200 response or a WP_Error.
	 */
	public function send_grouper_request( $endpoint, $params ) {
		// Fall back to defaults if not set.
		$params['page_size']  ??= '1000';
		$params['pagination'] ??= 'true';
		$params['page_num']   ??= '1';
		$args                   = array(
			'timeout' => 120,
			'headers' => array(
				// Search LastPass for "Grouper" to get the key value.
				// The below constant can be defined in wp-config.php.
				'X-Api-Key'          => HSPH_GROUPER_CONVENIENCE_API_KEY,
				'X-Grouper-Username' => HSPH_GROUPER_BASE_API_USERNAME,
				'X-Grouper-Password' => HSPH_GROUPER_BASE_API_PASSWORD,
			),
		);
		$request_url            = HSPH_GROUPER_API_URL . $endpoint . '?';
		// Iterate over url parameters and append them to the base url + endpoint.
		foreach ( $params as $param => $value ) {
			$request_url .= $param . '=' . $value . '&';
		}
		// Trim the final ampersand if exists.
		if ( substr( $request_url, -1 ) === '&' ) {
			$request_url = substr( $request_url, 0, -1 );
		}
		$this->logger->log( LogLevel::DEBUG, $request_url );
		$response  = wp_remote_get( $request_url, $args );
		$log_extra = array(
			'request_url' => $request_url,
		);
		if ( $response instanceof WP_Error ) {
			$error_message = $response->get_error_message();
			throw new HSPH_User_Management_Exception( "The Grouper request resulted in an error: $error_message", $log_extra );
		} elseif ( 200 !== $response['response']['code'] ) {
			$log_extra['response_body'] = $response['body'];
			throw new HSPH_User_Management_Exception( "The Grouper request resulted in the following HTTP response code: {$response['response']['code']}", $log_extra );
		}
		// Sleep for a quarter second between requests to prevent performance issues.
		usleep( 250000 );
		return $response;
	}

	/**
	 * Get the members of a Grouper group as an array of eppn values.
	 *
	 * @param string $group_path The path of the group.
	 * @param int    $page Which page of results to get.
	 *
	 * @return array
	 * @throws HSPH_User_Management_Exception If the group is not found.
	 */
	public function get_group_members( $group_path, $page ) {
		$endpoint   = "group/{$group_path}/membership";
		$params     = array(
			'identifier' => 'eppn',
			'page_num'   => strval( $page ),
		);
		$response   = $this->send_grouper_request(
			$endpoint,
			$params,
		);
		$log_extra  = array(
			'group_path' => $group_path,
			'page'       => $page,
		);
		$response_a = json_decode( $response['body'], true );
		// The 'count' element of the response array will be '0' if no person is found.
		// In the above case, throw an error that will be caught and logged.
		$members = $response_a['getGroupMembershipResponse']['groupMembership'] ?? null;
		if ( null === $members ) {
			$log_extra['response_body'] = $response_a['body'];
			throw new HSPH_User_Management_Exception( "There was a problem getting the group membership for $group_path", $log_extra );
		}
		return $members;
	}
}
