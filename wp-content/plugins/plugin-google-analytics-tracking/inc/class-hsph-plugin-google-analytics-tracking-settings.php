<?php
/**
 * Settings pages for the Google Analytics Install.
 * Supports both network and regular installs.
 *
 * @package hpsh
 * @subpackage hsph-plugin-google-analytics-tracking
 */

/**
 * HSPH_Plugin_Google_Analytics_Tracking_Settings Class.
 */
class HSPH_Plugin_Google_Analytics_Tracking_Settings {

	/**
	 * Init function.
	 *
	 * @access public
	 * @return void
	 */
	public function init() {
		if ( is_multisite() ) {
			add_action( 'network_admin_menu', array( $this, 'network_admin_menu' ) );
			add_action( 'admin_init', array( $this, 'register_network_settings' ) );
		}

		// load the settings page.
		add_action( 'admin_init', array( $this, 'register_admin_settings' ) );
		add_action( 'admin_menu', array( $this, 'admin_menu' ) );
	}

	/**
	 * Add administration menus.
	 *
	 * @access public
	 * @return void
	 */
	public function admin_menu() {
		add_options_page( __( 'Google Analytics', 'hsph-plugin-google-analytics-tracking' ), __( 'Google Analytics', 'hsph-plugin-google-analytics-tracking' ), 'manage_options', 'hsph_google_analytics_options', array( $this, 'options_page' ) );
	}

	/**
	 * Add network administration menus.
	 *
	 * @access public
	 * @return void
	 */
	public function network_admin_menu() {
		$load_hook = add_submenu_page( 'settings.php', __( 'Google Analytics', 'hsph-plugin-google-analytics-tracking' ), __( 'Google Analytics', 'hsph-plugin-google-analytics-tracking' ), 'manage_options', 'hsph_google_analytics_network_options', array( $this, 'network_options_page' ) );

		add_action( 'load-' . $load_hook, array( $this, 'load_network_page' ) );
	}

	/**
	 * Load the Options Page.
	 *
	 * @access public
	 * @return void
	 */
	public function options_page() {
		$this->display_option_page( 'hsph_google_analytics_options' );
	}

	/**
	 * Load the Network Options Page.
	 *
	 * @access public
	 * @return void
	 */
	public function network_options_page() {
		$this->display_option_page( 'hsph_google_analytics_network_options', '' );
	}

	/**
	 * Display the settings screen based on context.
	 *
	 * @access public
	 *
	 * @param string $context Google analytics screen tontext field.
	 * @param string $action Where to pass the form.
	 *
	 * @return void
	 */
	public function display_option_page( $context = 'hsph_google_analytics_options', $action = 'options.php' ) {
		?>
	<div class="wrap">
		<h1><?php esc_html_e( 'Google Analytics Tracking', 'hsph-plugin-google-analytics-tracking' ); ?></h1>
		<form method="post" action="<?php echo esc_attr( $action ); ?>" accept-charset="utf-8">
			<?php
			settings_fields( $context );

			do_settings_sections( $context );

			submit_button();
			?>
		</form>
	</div>
		<?php
	}

	/**
	 * Register the network based settings.
	 *
	 * @access public
	 * @return void
	 */
	public function register_network_settings() {
		$this->register_settings( 'hsph_google_analytics_network_options' );
	}

	/**
	 * Register the non network settings.
	 *
	 * @access public
	 * @return void
	 */
	public function register_admin_settings() {
		$this->register_settings( 'hsph_google_analytics_options' );
	}

	/**
	 * Do the settings Registration.
	 *
	 * @access public
	 *
	 * @param string $screen Screen parameter to use for the generation.
	 *
	 * @return void
	 */
	public function register_settings( $screen = 'hsph_google_analytics_options' ) {
		// add the section.
		add_settings_section( 'hsph_google_analytics_profile', __( 'Profile Settings', 'hsph-plugin-google-analytics-tracking' ), array( $this, 'profile_section_callback' ), $screen );

		// register the settings.
		register_setting( $screen, 'hsph_google_analytics_profiles', 'sanitize_text_field' );
		register_setting( $screen, 'hsph_google_analytics_cookie_domain', array( $this, 'sanitize_domain' ) );
		register_setting( $screen, 'hsph_google_analytics_enhanced_links', array( $this, 'checkbox_sanitize' ) );
		register_setting( $screen, 'hsph_google_analytics_demographics', array( $this, 'checkbox_sanitize' ) );
		register_setting( $screen, 'hsph_google_analytics_download_tracking', array( $this, 'checkbox_sanitize' ) );

		if ( is_network_admin() || ! is_multisite() ) {
			register_setting( $screen, 'hsph_google_analytics_download_filetype', 'sanitize_text_field' );
			register_setting( $screen, 'hsph_google_analytics_tag_manager', array( $this, 'checkbox_sanitize' ) );
			register_setting( $screen, 'hsph_google_analytics_tag_manager_key', 'sanitize_text_field' );
		}

		// Add the field with the names and function to use for our new settings, put it in our new section.
		add_settings_field(
			'hsph_google_analytics_profiles',
			__( 'Profiles', 'hsph-plugin-google-analytics-tracking' ),
			array( $this, 'text_field_callback' ),
			$screen,
			'hsph_google_analytics_profile',
			array(
				'label_for' => 'hsph_google_analytics_profiles',
				'label'     => __( 'Separate multiple profile IDs with a comma.', 'hsph-plugin-google-analytics-tracking' ),
			)
		);

		// Add the field with the names and function to use for our new settings, put it in our new section.
		add_settings_field(
			'hsph_google_analytics_cookie_domain',
			__( 'Cookie Domain', 'hsph-plugin-google-analytics-tracking' ),
			array( $this, 'url_field_callback' ),
			$screen,
			'hsph_google_analytics_profile',
			array( 'label_for' => 'hsph_google_analytics_cookie_domain' )
		);

		// settings, demographic reports.
		add_settings_field(
			'hsph_google_analytics_demographics',
			__( 'Enable Demographics and Interests Reports', 'hsph-plugin-google-analytics-tracking' ),
			array( $this, 'checkbox_field_callback' ),
			$screen,
			'hsph_google_analytics_profile',
			array(
				'label_for' => 'hsph_google_analytics_demographics',
				'label'     => __( 'Check this setting to add the Demographics and Remarketing features to your Google Analytics tracking code. Make sure to enable Demographics and Remarketing in your Google Analaytics account.', 'hsph-plugin-google-analytics-tracking' ),
				'default'   => 'no',
			)
		);

		// settings, put it in our new section.
		add_settings_field(
			'hsph_google_analytics_enhanced_links',
			__( 'Enable enhanced link attribution', 'hsph-plugin-google-analytics-tracking' ),
			array( $this, 'checkbox_field_callback' ),
			$screen,
			'hsph_google_analytics_profile',
			array(
				'label_for' => 'hsph_google_analytics_enhanced_links',
				'label'     => __( 'Add Enhanced Link Attribution to your tracking code.', 'hsph-plugin-google-analytics-tracking' ),
				'default'   => 'no',
			)
		);

		// settings, put it in our new section.
		add_settings_field(
			'hsph_google_analytics_download_tracking',
			__( 'Enable download tracking', 'hsph-plugin-google-analytics-tracking' ),
			array( $this, 'checkbox_field_callback' ),
			$screen,
			'hsph_google_analytics_profile',
			array(
				'label_for' => 'hsph_google_analytics_download_tracking',
				'label'     => __( 'Track downloads of files in GA.', 'hsph-plugin-google-analytics-tracking' ),
				'default'   => 'no',
			)
		);

		if ( is_network_admin() || ! is_multisite() ) {
			// settings, put it in our new section.
			add_settings_field(
				'hsph_google_analytics_download_filetype',
				__( 'Download Filetypes', 'hsph-plugin-google-analytics-tracking' ),
				array( $this, 'text_field_callback' ),
				$screen,
				'hsph_google_analytics_profile',
				array(
					'label_for' => 'hsph_google_analytics_download_filetype',
					'label'     => __( 'Filetype list in regular expression format.', 'hsph-plugin-google-analytics-tracking' ),
					'default'   => 'zip|exe|pdf|doc*|xls*|ppt*|mp3',
				)
			);

			// settings, put it in our new section.
			add_settings_field(
				'hsph_google_analytics_download_cdn',
				__( 'File Domain/CDN', 'hsph-plugin-google-analytics-tracking' ),
				array( $this, 'text_field_callback' ),
				$screen,
				'hsph_google_analytics_profile',
				array(
					'label_for' => 'hsph_google_analytics_download_cdn',
					'label'     => __( 'Domain of CDN serving images and files.', 'hsph-plugin-google-analytics-tracking' ),
					'default'   => get_site_url(),
				)
			);

			// google Tag Manager Callback.
			add_settings_field(
				'hsph_google_analytics_tag_manager',
				__( 'Enable Google Tag Manager', 'hsph-plugin-google-analytics-tracking' ),
				array( $this, 'checkbox_field_callback' ),
				$screen,
				'hsph_google_analytics_profile',
				array(
					'label_for' => 'hsph_google_analytics_tag_manager',
					'label'     => __( 'Enable Google Tag Manager.', 'hsph-plugin-google-analytics-tracking' ),
					'default'   => 'no',
				)
			);

			// google Tag Manager key Callback.
			add_settings_field(
				'hsph_google_analytics_tag_manager_key',
				__( 'Google Tag Manager Profile ID', 'hsph-plugin-google-analytics-tracking' ),
				array( $this, 'text_field_callback' ),
				$screen,
				'hsph_google_analytics_profile',
				array(
					'label_for' => 'hsph_google_analytics_tag_manager_key',
					'label'     => __( 'Multiple IDs not supported.', 'hsph-plugin-google-analytics-tracking' ),
					'default'   => '',
				)
			);
		}
	}

	/**
	 * Settings section callback functions.
	 *
	 * This function is needed if we added a new section. This function
	 * will be run at the start of our section.
	 *
	 * @access public
	 * @return void
	 */
	public function profile_section_callback() {
		// enjoy the silence.
	}

	/**
	 * Callback function for settings.
	 *
	 * Creates a checkbox true/false option. Other types are surely possible
	 * A generic callback to display admin checkbox fields.
	 *
	 * @access public
	 *
	 * @param array $args Array of args to be passed to the input field generator.
	 *
	 * @return void
	 */
	public function checkbox_field_callback( $args ) {
		$defaults = array(
			'label_for' => '',
			'label'     => '',
			'default'   => 'no',
		);

		// Parse incoming $args into an array and merge it with $defaults.
		$args = wp_parse_args( $args, $defaults );

		// We sanitize $args.
		$field   = esc_attr( $args['label_for'] );
		$label   = esc_html( $args['label'] );
		$default = esc_attr( $args['default'] );

		$default = $this->checkbox_sanitize( $default );

		$option = $this->checkbox_sanitize( $this->get_option( $field, $default ) );

		echo '<label class="description"><input type="checkbox" name="' . esc_attr( $field ) . '" id="' . esc_attr( $field ) . '" value="yes" ' . checked( $option, 'yes', false ) . '> ' . esc_html( $label ) . '</label>';
	}

	/**
	 * A generic callback to display admin textfields.
	 *
	 * @access public
	 *
	 * @param array $args Array of args to be passed to the input field generator.
	 *
	 * @return void
	 */
	public function text_field_callback( $args ) {
		$defaults = array(
			'label_for' => '',
			'label'     => '',
			'default'   => '',
		);

		// Parse incoming $args into an array and merge it with $defaults.
		$args = wp_parse_args( $args, $defaults );

		// We sanitize $args.
		$field   = esc_attr( $args['label_for'] );
		$label   = esc_html( $args['label'] );
		$default = esc_attr( $args['default'] );

		$default = $this->get_option( $field, $default );

		echo '<input type="text" name="' . esc_attr( $field ) . '" id="' . esc_attr( $field ) . '" value="' . esc_attr( $default ) . '">';

		if ( ! empty( $label ) ) {
			echo '<span class="description">' . esc_html( $label ) . '</span>';
		}
	}

	/**
	 * A generic callback to display admin URL textfields.
	 *
	 * @access public
	 *
	 * @param array $args Array of args to be passed to the input field generator.
	 *
	 * @return void
	 */
	public function url_field_callback( $args ) {
		$defaults = array(
			'label_for' => '',
			'label'     => '',
			'default'   => '',
		);

		// Parse incoming $args into an array and merge it with $defaults.
		$args = wp_parse_args( $args, $defaults );

		// We sanitize $args.
		$field   = esc_attr( $args['label_for'] );
		$label   = esc_html( $args['label'] );
		$default = esc_attr( $args['default'] );

		$default = $this->sanitize_domain( $this->get_option( $field ) );

		echo '<input type="text" name="' . esc_attr( $field ) . '" id="' . esc_attr( $field ) . '" value="' . esc_attr( $default ) . '">';

		if ( ! empty( $label ) ) {
			echo '<span class="description">' . esc_html( $label ) . '</span>';
		}
	}

	/**
	 * Get the option value for a site.
	 *
	 * @access public
	 *
	 * @param string $field name of field.
	 * @param mixed  $default Default Value to return if not found.
	 *
	 * @return mixed Option Value.
	 */
	public function get_option( $field, $default = false ) {
		$screen = get_current_screen();

		if ( empty( $field ) ) {
			return false;
		}

		if ( 'settings_page_hsph_google_analytics_network_options-network' === $screen->id && true === $screen->is_network ) {
			return get_site_option( $field, $default );
		} else {
			return get_option( $field, $default );
		}
	}

	/**
	 * Runs only on the load of the network admin page.
	 *
	 * @access public
	 * @return void
	 */
	public function load_network_page() {
		// if this form is being sugmitted then lets handle the submit.
		if ( isset( $_POST['action'] ) && 'update' === sanitize_key( wp_unslash( $_POST['action'] ) ) ) { // phpcs:ignore WordPress.Security.NonceVerification
			// network settings update.
			$this->update_network_settings();
			// let the user know we have updated.
			add_action( 'admin_notices', array( $this, 'update_network_notice' ) );
		}
	}

	/**
	 * Save settings from the network admin page
	 *
	 * @access public
	 * @return void
	 */
	public function update_network_settings() {

		// We list all the fields that we expect and their type (mostly for validation).
		$fields = array();

		$fields['hsph_google_analytics_profiles']          = array( 'type' => 'text' );
		$fields['hsph_google_analytics_cookie_domain']     = array( 'type' => 'url' );
		$fields['hsph_google_analytics_demographics']      = array( 'type' => 'checkbox' );
		$fields['hsph_google_analytics_enhanced_links']    = array( 'type' => 'checkbox' );
		$fields['hsph_google_analytics_download_tracking'] = array( 'type' => 'checkbox' );
		$fields['hsph_google_analytics_download_filetype'] = array( 'type' => 'text' );
		$fields['hsph_google_analytics_tag_manager']       = array( 'type' => 'checkbox' );
		$fields['hsph_google_analytics_tag_manager_key']   = array( 'type' => 'text' );
		$fields['hsph_google_analytics_download_cdn']      = array( 'type' => 'url' );

		$fields = apply_filters( 'hsph_google_analytics_update_network_settings_fields', $fields );

		// Nonce check.
		if ( ! isset( $_POST['_wpnonce'] ) || ! wp_verify_nonce( sanitize_key( wp_unslash( $_POST['_wpnonce'] ) ), 'hsph_google_analytics_network_options-options' ) ) {
			return;
		}

		// We go through the list of fields.
		foreach ( $fields as $field => $attr ) {
			// We check if we received a value for this fields.
			// Sanitation based on the field type.
			if ( isset( $_POST[ $field ] ) && 'checkbox' === $attr['type'] ) {
				$value = $this->checkbox_sanitize( wp_unslash( $_POST[ $field ] ) ); // phpcs:ignore WordPress.Security.ValidatedSanitizedInput
			} elseif ( 'checkbox' === $attr['type'] ) {
				$value = 'no';
			} elseif ( 'url' === $attr['type'] ) {
				$value = $this->sanitize_domain( wp_unslash( $_POST[ $field ] ) ); // phpcs:ignore WordPress.Security.ValidatedSanitizedInput
			} else {
				$value = sanitize_text_field( wp_unslash( $_POST[ $field ] ) );
			}
			// We save the value.
			update_site_option( $field, $value );
		}
	}

	/**
	 * Display the updated message.
	 *
	 * @access public
	 * @return void
	 */
	public function update_network_notice() {
		?>
		<div class="updated notice">
			<p><?php esc_html_e( 'Settings saved.', 'hsph-plugin-google-analytics-tracking' ); ?></p>
		</div>
		<?php
	}

	/**
	 * Sanitize a yes/no checkbox/option.
	 *
	 * @access public
	 *
	 * @param string $input String to be sanitzed.
	 *
	 * @return string yes or no based on input value.
	 */
	public function checkbox_sanitize( $input ) {
		if ( strtolower( $input ) === 'yes' ) {
			return 'yes';
		}

		return 'no';
	}

	/**
	 * Sanitize a the domain name for use in the GA display.
	 *
	 * @access public
	 *
	 * @param string $input String to be sanitzed.
	 *
	 * @return string Parsed URL.
	 */
	public function sanitize_domain( $input ) {
		if ( empty( $input ) || trim( $input ) === '' || trim( strtolower( $input ) ) === 'auto' ) {
			return 'auto';
		}

		$input = esc_url_raw( $input );

		// in case scheme relative URI is passed, e.g., //www.google.com/.
		$input = trim( $input, '/' );

		// If scheme not included, prepend it.
		if ( ! preg_match( '#^http(s)?://#', $input ) ) {
			$input = 'http://' . $input;
		}

		$url_parts = wp_parse_url( $input );

		// remove www.
		$domain = preg_replace( '/^www\./', '', $url_parts['host'] );

		// return the domain.
		return $domain;
	}
}
