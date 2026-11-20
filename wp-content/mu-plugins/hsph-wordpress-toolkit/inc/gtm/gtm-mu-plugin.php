<?php
/**
 * Plugin Name:       10up GTM snippet
 * Description:       Snippet mu-plugin for GTM tag settings and FE functionality.
 * Version:           0.1.0
 * Author:            10up
 * Author URI:        https://10up.com
 * Requires at least: 6.4
 * Requires PHP:      7.4
 * Text Domain:       hsph
 *
 * @package hsph
 */

namespace HSPH\Settings\GTM;

/**
 * ID and option key that stores the Google Tag Manager container ID.
 *
 * @var string
 */
const GTM_SETTING_STRING = 'gtm_container_id';

/**
 * ID and option key that stores the Google Tag Manager Auth key.
 *
 * @var string
 */
const GTM_AUTH_PARAM_STRING = 'gtm_auth';

/**
 * Option key that stores the Google Tag Manager Preview key.
 *
 * @var string
 */
const GTM_PREVIEW_PARAM_STRING = 'gtm_preview';

/**
 * Set up hooks
 */
add_action( 'wpmu_options', __NAMESPACE__ . '\add_network_settings' );
add_action( 'update_wpmu_options', __NAMESPACE__ . '\save_network_settings' );
add_action( 'admin_init', __NAMESPACE__ . '\settings_setup' );
add_action( 'wp_head', __NAMESPACE__ . '\gtm_head_script', 6 );
add_action( 'wp_body_open', __NAMESPACE__ . '\gtm_body_script' );
add_filter( 'wp_resource_hints', __NAMESPACE__ . '\resource_hints', 10, 2 );

/**
 * Add Network level settings for multi site setup support.
 *
 * @return void
 */
function add_network_settings(): void {
	?>
	<h2>
		<?php esc_html_e( 'Google Tag Manager Network Wide Settings', 'hsph' ); ?>
	</h2>

	<p class="description" id="<?php echo esc_attr( GTM_PREVIEW_PARAM_STRING ); ?>-desc">
		<?php esc_html_e( 'Each setting can be overriden on a per site basis in Settings -> General.', 'hsph' ); ?>
	</p>

	<table class="form-table" role="presentation">
		<tr>
			<th scope="row">
				<label for="<?php echo esc_attr( GTM_SETTING_STRING ); ?>"><?php esc_html_e( 'Google Tag Manager ID', 'hsph' ); ?></label>
			</th>
			<td>
				<input
					type="text"
					class="regular-text"
					id="<?php echo esc_attr( GTM_SETTING_STRING ); ?>"
					name="<?php echo esc_attr( GTM_SETTING_STRING ); ?>"
					aria-describedby="<?php echo esc_attr( GTM_SETTING_STRING ); ?>-desc"
					value="<?php echo esc_attr( get_site_option( GTM_SETTING_STRING, '' ) ); ?>"
				>
				<p class="description" id="<?php echo esc_attr( GTM_SETTING_STRING ); ?>-desc">
					<?php esc_html_e( 'Full GTM container ID for use across all network sites.', 'hsph' ); ?>
				</p>
			</td>
		</tr>

		<tr>
			<th scope="row">
				<label for="<?php echo esc_attr( GTM_AUTH_PARAM_STRING ); ?>"><?php esc_html_e( 'Google Tag Manager Auth Parameter', 'hsph' ); ?></label>
			</th>
			<td>
				<input
					type="text"
					class="regular-text"
					id="<?php echo esc_attr( GTM_AUTH_PARAM_STRING ); ?>"
					name="<?php echo esc_attr( GTM_AUTH_PARAM_STRING ); ?>"
					aria-describedby="<?php echo esc_attr( GTM_AUTH_PARAM_STRING ); ?>-desc"
					value="<?php echo esc_attr( get_site_option( GTM_AUTH_PARAM_STRING, '' ) ); ?>"
				>
				<p class="description" id="<?php echo esc_attr( GTM_AUTH_PARAM_STRING ); ?>-desc">
					<?php esc_html_e( 'Auth parameter string from full script. (Optional)', 'hsph' ); ?>
				</p>
			</td>
		</tr>

		<tr>
			<th scope="row">
				<label for="<?php echo esc_attr( GTM_SETTING_STRING ); ?>"><?php esc_html_e( 'Google Tag Manager Preview Parameter', 'hsph' ); ?></label>
			</th>
			<td>
				<input
					type="text"
					class="regular-text"
					id="<?php echo esc_attr( GTM_PREVIEW_PARAM_STRING ); ?>"
					name="<?php echo esc_attr( GTM_PREVIEW_PARAM_STRING ); ?>"
					aria-describedby="<?php echo esc_attr( GTM_PREVIEW_PARAM_STRING ); ?>-desc"
					value="<?php echo esc_attr( get_site_option( GTM_PREVIEW_PARAM_STRING, '' ) ); ?>"
				>
				<p class="description" id="<?php echo esc_attr( GTM_PREVIEW_PARAM_STRING ); ?>-desc">
					<?php esc_html_e( 'Preview parameter string from full script. (Optional)', 'hsph' ); ?>
				</p>
			</td>
		</tr>
	</table>
	<?php
}

/**
 * Save/delete the network settings.
 *
 * @return void
 */
function save_network_settings(): void {
	if (
		empty( $_POST['_wpnonce'] ) ||
		! wp_verify_nonce( sanitize_key( $_POST['_wpnonce'] ), 'siteoptions' )
	) {
		return;
	}

	if ( isset( $_POST[ GTM_SETTING_STRING ] ) && '' !== sanitize_text_field( wp_unslash( $_POST[ GTM_SETTING_STRING ] ) ) ) {
		update_site_option( GTM_SETTING_STRING, sanitize_text_field( wp_unslash( $_POST[ GTM_SETTING_STRING ] ) ) );
	} else {
		delete_site_option( GTM_SETTING_STRING );
	}

	if ( isset( $_POST[ GTM_AUTH_PARAM_STRING ] ) && '' !== sanitize_text_field( wp_unslash( $_POST[ GTM_AUTH_PARAM_STRING ] ) ) ) {
		update_site_option( GTM_AUTH_PARAM_STRING, sanitize_text_field( wp_unslash( $_POST[ GTM_AUTH_PARAM_STRING ] ) ) );
	} else {
		delete_site_option( GTM_AUTH_PARAM_STRING );
	}

	if ( isset( $_POST[ GTM_PREVIEW_PARAM_STRING ] ) && '' !== sanitize_text_field( wp_unslash( $_POST[ GTM_PREVIEW_PARAM_STRING ] ) ) ) {
		update_site_option( GTM_PREVIEW_PARAM_STRING, sanitize_text_field( wp_unslash( $_POST[ GTM_PREVIEW_PARAM_STRING ] ) ) );
	} else {
		delete_site_option( GTM_PREVIEW_PARAM_STRING );
	}
}

/**
 * Register and add the custom settings.
 *
 * @return void
 */
function settings_setup(): void {
	register_setting(
		'general',
		GTM_SETTING_STRING,
		array(
			'sanitize_callback' => 'sanitize_text_field',
		)
	);

	add_settings_field(
		GTM_SETTING_STRING,
		__( 'Google Tag Manager ID', 'hsph' ),
		__NAMESPACE__ . '\display_gtm_id_field',
		'general',
		'default',
		array(
			'label_for' => GTM_SETTING_STRING,
		)
	);

	register_setting(
		'general',
		GTM_AUTH_PARAM_STRING,
		array(
			'sanitize_callback' => 'sanitize_text_field',
		)
	);

	add_settings_field(
		GTM_AUTH_PARAM_STRING,
		__( 'Google Tag Manager Auth Parameter', 'hsph' ),
		__NAMESPACE__ . '\display_gtm_auth_field',
		'general',
		'default',
		array(
			'label_for' => GTM_AUTH_PARAM_STRING,
		)
	);

	register_setting(
		'general',
		GTM_PREVIEW_PARAM_STRING,
		array(
			'sanitize_callback' => 'sanitize_text_field',
		)
	);

	add_settings_field(
		GTM_PREVIEW_PARAM_STRING,
		__( 'Google Tag Manager Preview Parameter', 'hsph' ),
		__NAMESPACE__ . '\display_gtm_prev_field',
		'general',
		'default',
		array(
			'label_for' => GTM_PREVIEW_PARAM_STRING,
		)
	);
}

/**
 * Call back function to display the Google Tag Manager container ID field
 *
 * @param array $args Arguments passed to callback from `add_settings_field()`.
 * @return void
 */
function display_gtm_id_field( $args ): void { // phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.Found
	?>
	<input
		type="text"
		class="regular-text"
		id="<?php echo esc_attr( GTM_SETTING_STRING ); ?>"
		name="<?php echo esc_attr( GTM_SETTING_STRING ); ?>"
		value="<?php echo esc_attr( get_option( GTM_SETTING_STRING, '' ) ); ?>"
	>
	<p class="description">
		<?php
		printf(
			// translators: GTM container ID placeholder with letters and strings.
			esc_html__( 'Full GTM container ID. (e.g. %s)', 'hsph' ),
			'GTM-XXXXXXX'
		);
		?>
	</p>
	<?php
}

/**
 * Call back function to display the Google Tag Manager auth ID field
 * Used for environments configurations.
 *
 * @link https://support.google.com/tagmanager/answer/6311518?hl=en
 *
 * @param array $args Arguments passed to callback from `add_settings_field()`.
 * @return void
 */
function display_gtm_auth_field( $args ): void { // phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.Found
	?>
	<input
		type="text"
		id="<?php echo esc_attr( GTM_AUTH_PARAM_STRING ); ?>"
		class="regular-text"
		name="<?php echo esc_attr( GTM_AUTH_PARAM_STRING ); ?>"
		value="<?php echo esc_attr( get_option( GTM_AUTH_PARAM_STRING, '' ) ); ?>"
	>
	<p class="description">
		<?php esc_html_e( 'Auth parameter string from full script. (Optional)', 'hsph' ); ?>
	</p>
	<?php
}

/**
 * Call back function to display the Google Tag Manager prev ID field
 * Used for environments configurations.
 *
 * @link https://support.google.com/tagmanager/answer/6311518?hl=en
 *
 * @param array $args Arguments passed to callback from `add_settings_field()`.
 * @return void
 */
function display_gtm_prev_field( $args ): void { // phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.Found
	?>
	<input
		type="text"
		id="<?php echo esc_attr( GTM_PREVIEW_PARAM_STRING ); ?>"
		class="regular-text"
		name="<?php echo esc_attr( GTM_PREVIEW_PARAM_STRING ); ?>"
		value="<?php echo esc_attr( get_option( GTM_PREVIEW_PARAM_STRING, '' ) ); ?>"
	>
	<p class="description">
		<?php esc_html_e( 'Preview parameter string from full script. (Optional)', 'hsph' ); ?>
	</p>
	<?php
}

/**
 * Output Google Tag Manager script in head
 */
function gtm_head_script(): void {
	$gtm_settings = get_gtm_settings();
	$public_id    = $gtm_settings[ GTM_SETTING_STRING ] ?? '';

	if ( empty( $public_id ) ) {
		return;
	}

	$env_params_string = http_build_query( gtm_env_params( $gtm_settings ) );
	?>

	<!-- Google Tag Manager -->
	<script>
	(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl
		<?php
		if ( $env_params_string ) {
			echo "+'&{$env_params_string}'"; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Need the & in URL.
		}
		?>
		;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','<?php echo esc_js( $public_id ); ?>');
	</script>
	<!-- End Google Tag Manager -->

	<?php
}

/**
 * Output Google Tag Manager iframe after opening body tag
 */
function gtm_body_script(): void {
	$gtm_settings = get_gtm_settings();
	$public_id    = $gtm_settings[ GTM_SETTING_STRING ] ?? '';

	if ( empty( $public_id ) ) {
		return;
	}

	$url_params = array(
		'id' => $public_id,
	) + gtm_env_params( $gtm_settings );

	$script_url = add_query_arg( $url_params, 'https://www.googletagmanager.com/ns.html' );

	?>

	<!-- Google Tag Manager (noscript) -->
	<noscript><iframe src="<?php echo esc_url( $script_url ); ?>" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->

	<?php
}

/**
 * Gets an array of GTM environment parameters from the given settings.
 *
 * @param array $gtm_settings Settings Array.
 *
 * @return array
 */
function gtm_env_params( array $gtm_settings ): array {
	$gtm_auth    = $gtm_settings[ GTM_AUTH_PARAM_STRING ] ?? '';
	$gtm_preview = $gtm_settings[ GTM_PREVIEW_PARAM_STRING ] ?? '';

	if ( ! $gtm_auth || ! $gtm_preview ) {
		return array();
	}

	return array(
		'gtm_auth'        => $gtm_auth,
		'gtm_preview'     => $gtm_preview,
		'gtm_cookies_win' => 'x',
	);
}

/**
 * Optimize asset delivery/fetch.
 *
 * @param array  $urls          Array of resources and their attributes, or URLs to print for resource hints.
 * @param string $relation_type The relation type the URLs are printed for, e.g. 'preconnect' or 'prerender'.
 * @return array
 */
function resource_hints( array $urls, string $relation_type ): array {
	if ( 'dns-prefetch' !== $relation_type ) {
		return $urls;
	}

	$urls[] = 'www.googletagmanager.com';

	return $urls;
}

/**
 * Utility function to get GTM options
 * Prioritizes single blog settings
 * w/network settings as fallback.
 *
 * @return array
 */
function get_gtm_settings(): array {
	$blog_settings = \get_options(
		array(
			GTM_SETTING_STRING,
			GTM_AUTH_PARAM_STRING,
			GTM_PREVIEW_PARAM_STRING,
		)
	);

	if ( ! empty( $blog_settings[ GTM_SETTING_STRING ] ) ) {
		return $blog_settings;
	}

	return array(
		GTM_SETTING_STRING       => get_site_option( GTM_SETTING_STRING ),
		GTM_AUTH_PARAM_STRING    => get_site_option( GTM_AUTH_PARAM_STRING ),
		GTM_PREVIEW_PARAM_STRING => get_site_option( GTM_PREVIEW_PARAM_STRING ),
	);
}
