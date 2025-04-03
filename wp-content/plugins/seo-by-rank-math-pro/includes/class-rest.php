<?php
/**
 * The Global functionality of the plugin.
 *
 * Defines the functionality loaded on admin.
 *
 * @since      1.0.15
 * @package    RankMathPro
 * @subpackage RankMathPro\Rest
 * @author     Rank Math <support@rankmath.com>
 */

namespace RankMathPro\Rest;

use WP_Error;
use WP_REST_Server;
use WP_REST_Request;
use WP_REST_Response;
use WP_REST_Controller;
use RankMath\Admin\Admin_Helper;
use RankMathPro\Admin\Admin_Helper as ProAdminHelper;

defined( 'ABSPATH' ) || exit;

/**
 * Rest class.
 */
class Rest extends WP_REST_Controller {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->namespace = \RankMath\Rest\Rest_Helper::BASE;
	}

	/**
	 * Registers the routes for the objects of the controller.
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/pingSettings',
			[
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => [ $this, 'ping_settings' ],
				'permission_callback' => [ $this, 'has_ping_permission' ],
				'args'                => $this->get_ping_settings_args(),
			]
		);

		register_rest_route(
			$this->namespace,
			'/searchIntent',
			[
				'methods'             => WP_REST_Server::CREATABLE,
				'callback'            => [ $this, 'determine_search_intent' ],
				'permission_callback' => [ $this, 'has_search_intent_permission' ],
				'args'                => $this->get_search_intent_args(),
			]
		);
	}

	/**
	 * Check API key in request.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return bool                     Whether the API key matches or not.
	 */
	public function has_ping_permission( WP_REST_Request $request ) {
		$data = Admin_Helper::get_registration_data();

		return $request->get_param( 'apiKey' ) === $data['api_key'] &&
			$request->get_param( 'username' ) === $data['username'];
	}

	/**
	 * Check API key in request.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return bool                     Whether the API key matches or not.
	 */
	public function has_search_intent_permission( WP_REST_Request $request ) {
		return \RankMath\Helper::has_cap( 'onpage_general' ) && ! empty( Admin_Helper::get_registration_data() );
	}

	/**
	 * Determine Search Intent.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 *
	 * @return WP_REST_Response|WP_Error Response object on success, or WP_Error object on failure.
	 */
	public function determine_search_intent( WP_REST_Request $request ) {
		$keyword       = strtolower( esc_html( $request->get_param( 'keyword' ) ) );
		$search_intent = ProAdminHelper::determine_search_intent(
			[
				'focus_keyword' => $keyword,
			]
		);

		if ( isset( $search_intent['error'] ) ) {
			return new WP_REST_Response(
				[
					'success' => false,
					'message' => $search_intent['error'],
				]
			);
		}

		ProAdminHelper::get_search_intent( [ $keyword => $search_intent ] );

		return new WP_REST_Response(
			[
				'success' => true,
				'keyword' => $search_intent,
			]
		);
	}

	/**
	 * Disconnect website.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 *
	 * @return WP_REST_Response|WP_Error Response object on success, or WP_Error object on failure.
	 */
	public function ping_settings( WP_REST_Request $request ) {
		$data         = Admin_Helper::get_registration_data();
		$data['plan'] = $request->get_param( 'plan' );

		Admin_Helper::get_registration_data( $data );
		update_option( 'rank_math_keyword_quota', json_decode( $request->get_param( 'keywords' ) ) );

		$settings = json_decode( $request->get_param( 'settings' ), true );
		if ( ! ProAdminHelper::is_business_plan() && ! empty( $settings['analytics'] ) ) {
			cmb2_update_option( 'rank-math-options-general', 'sync_global_setting', $settings['analytics'] );
		}

		return true;
	}

	/**
	 * Get the query params for collections.
	 *
	 * @return array
	 */
	private function get_ping_settings_args() {
		return [
			'apiKey'   => [
				'description'       => esc_html__( 'API Key.', 'rank-math-pro' ),
				'type'              => 'string',
				'required'          => true,
				'sanitize_callback' => 'rest_sanitize_request_arg',
				'validate_callback' => 'rest_validate_request_arg',
			],
			'username' => [
				'description'       => esc_html__( 'Username.', 'rank-math-pro' ),
				'type'              => 'string',
				'required'          => true,
				'sanitize_callback' => 'rest_sanitize_request_arg',
				'validate_callback' => 'rest_validate_request_arg',
			],
			'plan'     => [
				'description'       => esc_html__( 'Plan.', 'rank-math-pro' ),
				'type'              => 'string',
				'required'          => true,
				'sanitize_callback' => 'rest_sanitize_request_arg',
				'validate_callback' => 'rest_validate_request_arg',
			],
			'keywords' => [
				'description'       => esc_html__( 'Keywords.', 'rank-math-pro' ),
				'type'              => 'string',
				'required'          => true,
				'sanitize_callback' => 'rest_sanitize_request_arg',
				'validate_callback' => 'rest_validate_request_arg',
			],
			'settings' => [
				'description'       => esc_html__( 'Settings.', 'rank-math-pro' ),
				'type'              => 'string',
				'required'          => true,
				'sanitize_callback' => 'rest_sanitize_request_arg',
				'validate_callback' => 'rest_validate_request_arg',
			],
		];
	}

	/**
	 * Get the query params for collections.
	 *
	 * @return array
	 */
	private function get_search_intent_args() {
		return [
			'keyword' => [
				'description' => esc_html__( 'The keyword used to determine the intent.', 'rank-math-pro' ),
				'type'        => 'string',
				'required'    => true,
			],
		];
	}
}
