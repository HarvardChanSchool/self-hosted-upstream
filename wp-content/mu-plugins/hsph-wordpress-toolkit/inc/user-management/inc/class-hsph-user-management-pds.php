<?php
/**
 * Class file for HSPH_User_Management_PDS
 *
 * @package hsph
 * @subpackage hsph-user-management
 */

// phpcs:disable WordPress.Security.EscapeOutput.ExceptionNotEscaped -- all output is ours or from core.
/**
 * Lightweight PDS (Person Data Service) client for user management.
 */
class HSPH_User_Management_PDS {

	/**
	 * PDS API base URL.
	 *
	 * @var string
	 */
	const PDS_URL = 'https://go.prod.apis.huit.harvard.edu/ats/person/v3/search/';

	/**
	 * Construct the PDS API query 'conditions' POST parameter, using an array of "pds.api.field" => "filter condition(s)" key pairs.
	 *
	 * @param array $conditions_array The full list of fields and conditions to be converted into PDS API 'conditions'.
	 * @return array[\stdClass]
	 */
	public static function pds_conditions_param_from_array( $conditions_array ) {
		// The container for PDS 'conditions'.
		$pds_query_conditions = array();

		/**
		 * Add PDS API query-compatible 'conditions' params on to array( $pds_query_conditions).
		 *
		 * @param string $field The name of PDS API field  e.g. 'employeeRoles.faculty.code'.
		 * @param mixed  $field_conditions The filter value(s) to apply to the PDS condition.
		 */
		$array_to_pds_conditions_param_fn = function ( $field, $field_conditions ) use ( &$pds_query_conditions ) {
			// Use this object to set the current field condition.
			$condition_obj = new \stdClass();
			if ( is_array( $field_conditions ) ) {
				foreach ( $field_conditions as $condition_filter ) {
					/**
					 * Check for special case/scenario - when the PDS condition filter is an array of arrays.
					 * See https://portal.apis.huit.harvard.edu/docs/ats-person-v3/1/routes/person/v3/search/post
					 *
					 * "
					 * ...To do an AND condition with 2 values for the same field, you need to wrap the conditions in an Array,
					 * ...where the elements of the Array are objects that all have the same property name
					 * "
					 */
					if ( is_array( $condition_filter ) ) {
						$condition_obj           = new \stdClass();
						$condition_obj->{$field} = $condition_filter[0];
						$pds_query_conditions[]  = $condition_obj;
					} else {
						// An array of scalars can be used as-is.
						$condition_obj->{$field} = $field_conditions;
						$pds_query_conditions[]  = $condition_obj;
						break;
					}
				}
			} else {
				// A single/scalar condition can be used as-is.
				$condition_obj->{$field} = $field_conditions;
				$pds_query_conditions[]  = $condition_obj;
			}
		};
		// Construct PDS API query-compatible conditions, using the fields and filters contained in $conditions_array.
		array_map( $array_to_pds_conditions_param_fn, array_keys( $conditions_array ), array_values( $conditions_array ) );
		return $pds_query_conditions;
	}

	/**
	 * Send a PDS Request and return the response.
	 * Documentation: https://portal.apis.huit.harvard.edu/person-data-service-overview.
	 *
	 * @param string  $size How many results to return.
	 * @param boolean $paginate Whether to paginate the results and include a session URL.
	 * @param array   $conditions Essentially the WHERE clause of the query, (i.e. where 'field' = 'value').
	 * @param array   $fields The fields to include in the response as a flat array. All if omitted.
	 * @param array   $session_id The value from "session_id" in first result payload.
	 * @return array  The HTTP response or empty array on failure.
	 * @throws HSPH_User_Management_Exception If request returns a non 200 response or a WP_Error.
	 */
	public static function send_pds_request( $size, $paginate, $conditions, $fields, $session_id = '' ) {
		if ( ! defined( 'HSPH_USER_MANAGEMENT_PDS_KEY' ) ) {
			throw new HSPH_User_Management_Exception( 'The HSPH_USER_MANAGEMENT_PDS_KEY constant must be defined to use this function.' );
		}

		$endpoint = self::PDS_URL . $session_id . '?';
		// If set to true the API will return a session ID that can be used to retrieve results.
		if ( $paginate ) {
			$params['paginate'] = 'true';
		}
		// The number of records the API should return.
		$params['size'] = $size;
		if ( substr( $endpoint, -1 ) === '&' ) {
			$endpoint = substr( $endpoint, 0, -1 );
		}
		$body = array(
			'conditions' => $conditions,
			'fields'     => $fields,
		);
		$args = array(
			'headers' => array(
				'x-api-key'    => HSPH_USER_MANAGEMENT_PDS_KEY,
				'Content-Type' => 'application/json',
			),
			'body'    => wp_json_encode( $body ),
		);

		$response = wp_remote_post( $endpoint . http_build_query( $params ), $args );

		if ( $response instanceof WP_Error ) {
			// phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log -- intentional logging.
			error_log( 'HSPH User Management PDS: A recoverable error occurred during a call to ' . __FUNCTION__ . ': ' . $response->get_error_message() );
			// Set response back to empty array.
			$response = array();
		} elseif ( 200 !== $response['response']['code'] ) {
			throw new HSPH_User_Management_Exception(
				"The PDS request resulted in the following HTTP response code: {$response['response']['code']} in:" . __FUNCTION__,
				array(
					'session_id'    => $session_id,
					'response_body' => $response['body'],
				)
			);
		}
		// Sleep for a half second between requests to prevent performance issues.
		usleep( 500000 );
		return $response;
	}

	/**
	 * Query PDS for the people in $emails. Returns an array of EPPNs keyed by the matching email.
	 * https://portal.apis.huit.harvard.edu/docs/ats-person-v3/1/overview#search
	 *
	 * @param array $emails A list of email addresses to look up in PDS.
	 * @return array An array of eppns keyed by email.
	 * @throws HSPH_User_Management_Exception If the PDS response is empty or missing expected keys.
	 */
	public static function get_pds_eppns( $emails ) {
		// Store all the results from responses.
		$results = array();
		// Batch the emails into sizes that won't exceed POST params limit for PDS.
		$email_chunks = array_chunk( $emails, 200, true );

		// Keep making requests to PDS, until all records are retrieved.
		foreach ( $email_chunks as $email_chunk ) {
			$conditions = array();
			// Index as a numeric array to prevent json_encode encoding all keys as strings.
			// This avoids issues when the indices are not a continuous numeric sequence starting from 0 - https://www.php.net/manual/en/function.json-encode.php .
			$email_chunk = array_values( $email_chunk );

			// Create a class that acts as a PDS query condition, and set the emails as a condition.
			$email_pds_condition = new \stdClass();
			// phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase -- property name defined by PDS API.
			$email_pds_condition->loginName = $email_chunk;

			// PDS API query conditions.
			$standard_pds_conditions   = self::pds_conditions_param_from_array( $conditions );
			$standard_pds_conditions[] = $email_pds_condition;

			$fields = array(
				'loginName',
				'eppn',
			);
			// Make PDS API request.
			$response_raw = self::send_pds_request( count( $email_chunk ), false, $standard_pds_conditions, $fields );
			$response     = json_decode( $response_raw['body'], true );
			// Ensure the response contains expected keys.
			if ( empty( $response['total_count'] ) || empty( $response['results'] ) ) {
				// phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log -- intentional logging.
				error_log( 'HSPH User Management PDS: Empty response or error retrieving persons by email.' );
			} else {
				$eppns_by_login = array_column( $response['results'], 'eppn', 'loginName' );
				$results        = array_merge( $results, $eppns_by_login );
			}
		}
		return $results;
	}
}
