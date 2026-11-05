<?php
/**
 * Social sharing buttons
 *
 * Adds social sharing buttons to content.
 *
 * @package hpsh
 * @subpackage hsph-plugin-social
 */

/**
 * HSPH_Plugin_Sharing_Buttons Class.
 */
class HSPH_Plugin_Sharing_Buttons {
	/**
	 * Init function.
	 *
	 * @access public
	 * @return void
	 */
	public function init() {
		// Install share buttons on init hook.
		add_action( 'init', array( $this, 'hsph_check_for_theme' ) );
	}

	/**
	 * Install function
	 *
	 * @access public
	 * @return void
	 */
	public function hsph_check_for_theme() {
		$hsph_sharing_buttons_themes   = apply_filters(
			'hsph_sharing_buttons_themes',
			array()
		);
		$hsph_is_sharing_buttons_theme = false;

		foreach ( $hsph_sharing_buttons_themes as $hsph_sharing_button_theme ) {
			// The @ characters serve as required delimiters for the regex pattern.
			$hsph_theme_pattern = '@' . $hsph_sharing_button_theme . '(-child-.+)?@';
			if ( ! empty( preg_match( $hsph_theme_pattern, get_stylesheet() ) ) ) {
				$hsph_is_sharing_buttons_theme = true;
			}
		}
		if ( true === $hsph_is_sharing_buttons_theme ) {
			self::hsph_install_share_buttons();
		}
	}

	/**
	 * Installs the share buttons.
	 *
	 * @access public
	 * @return void
	 */
	public function hsph_install_share_buttons() {
		// Advanced Custom Fields create and update site options page.
		add_action( 'wp_loaded', array( $this, 'share_buttons_site_options_page' ) );
		// Display buttons on hsph main theme and affiliate theme.
		add_action( 'hsph_before_entry_footer', array( $this, 'display_share_buttons' ), 10, 4 );
		// Enqueue sharing button styles.
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_styles_and_scripts' ) );
		// Set the default post type options.
		add_filter( 'acf/load_field/name=share_button_post_types', array( $this, 'load_site_options_post_types' ) );
		// Add a custom ACF location rule.
		add_filter( 'acf/location/rule_types', array( $this, 'acf_location_rules_types' ) );
		// Add an ACF operator.
		add_filter( 'acf/location/rule_operators', array( $this, 'add_acf_location_rules_operator' ) );
		// Add the value for the above custom ACF location rule.
		add_filter(
			'acf/location/rule_values/sharing_buttons_post_types',
			array(
				$this,
				'add_acf_location_rule_value_current_post_type',
			)
		);
		// Match the custom ACF location rule.
		add_filter(
			'acf/location/rule_match/sharing_buttons_post_types',
			array(
				$this,
				'match_acf_location_rule_match_sharing_buttons_post_types',
			),
			10,
			4
		);

		// Default ACF option values.
		define( 'HSPH_PLUGIN_SOCIAL_DEFAULT_SHARE_BUTTON_POST_TYPES', array( 'post' ) );
		define( 'HSPH_PLUGIN_SOCIAL_DEFAULT_SHARE_BUTTON_PLATFORMS', array( 'facebook', 'linkedin', 'twitter', 'reddit' ) );
	}

	/**
	 * Enqueue plugin styles.
	 *
	 * @access public
	 * @return void
	 */
	public function enqueue_styles_and_scripts() {
		wp_enqueue_style(
			'hsph-sharing-buttons-styles',
			HSPH_PLUGIN_SOCIAL_ASSETS_URL . '/css/hsph-sharing-buttons.css',
			array(),
			HSPH_PLUGIN_SOCIAL_VERSION
		);
	}

	/**
	 * Get list of sharing destinations.
	 * Important : We use static methode so we can easily call this from other
	 * classes (widgets,shortcode,etc.)
	 *
	 * @access public
	 * @return array The array of all available social newtorks.
	 */
	public static function get_available_shares() {
		$shares = array(
			array(
				'id'            => 'facebook',
				'name'          => 'Facebook',
				'icon'          => 'fa-facebook',
				'shareUrlBase'  => 'https://www.facebook.com/sharer/sharer.php?',
				'shareUrlQuery' => array(
					'url' => array(
						'paramName'  => 'u',
						'paramValue' => null,
					),

				),
			),
			array(
				'id'            => 'twitter',
				'name'          => 'Twitter',
				'icon'          => 'fa-twitter',
				'shareUrlBase'  => 'https://twitter.com/intent/tweet?',
				'shareUrlQuery' => array(
					'url'  => array(
						'paramName'  => 'url',
						'paramValue' => null,
					),
					'text' => array(
						'paramName'  => 'text',
						'paramValue' => null,
					),

				),
			),
			array(
				'id'            => 'linkedin',
				'name'          => 'LinkedIn',
				'icon'          => 'fa-linkedin',
				'shareUrlBase'  => 'https://www.linkedin.com/shareArticle?mini=true&',
				'shareUrlQuery' => array(
					'url'  => array(
						'paramName'  => 'url',
						'paramValue' => null,
					),
					'text' => array(
						'paramName'  => 'title',
						'paramValue' => null,
					),

				),
			),
			array(
				'id'            => 'reddit',
				'name'          => 'Reddit',
				'icon'          => 'fa-reddit-alien',
				'shareUrlBase'  => 'http://www.reddit.com/submit?',
				'shareUrlQuery' => array(
					'url'  => array(
						'paramName'  => 'url',
						'paramValue' => null,
					),
					'text' => array(
						'paramName'  => 'title',
						'paramValue' => null,
					),

				),
			),
		);
		return $shares;
	}

	/**
	 * Get the prefix used for wp option meta key
	 * Important : We use static method so we can easily call this from other classes (widgets,shortcode,etc.)
	 *
	 * @access public
	 * @return string The prefix used for wp option meta key.
	 */
	public static function get_button_settings_prefix() {
		return 'hsph_social_button_link_';
	}

	/**
	 * Render the html for the social media buttons
	 * Important : We use static method so we can easily call this from other classes (widgets,shortcode,etc.)
	 *
	 * @access public
	 * @return string The prefix used for wp option meta key.
	 */
	public static function get_the_social_buttons() {
		$html     = '';
		$shares   = self::get_available_shares();
		$elements = array();
		foreach ( $shares as $share ) {
			$query_param_values = array(
				'url'  => get_permalink(),
				'text' => get_the_title(),

			);
			$query_data = array();
			foreach ( $share['shareUrlQuery'] as $query_param_name => $query_param_data ) {
				$query_data[ $query_param_data['paramName'] ] = $query_param_values[ $query_param_name ];
			}
			$url_encoded              = $share['shareUrlBase'] . http_build_query( $query_data );
			$share_id                 = self::get_button_settings_prefix() . $share['id'];
			$aria_label               = $share['name'] . ' ' . __( ' button link', 'hsph-plugin-social' );
			$html                     = '<a rel="external noreferrer nofollow" target="_blank" href="' .
			$url_encoded . '" aria-label="' . $aria_label . '" class="btn btn-light btn-sm btn-squared shadow-none mr-2 mb-2 hsph-share-button-' .
			$share['id'] . '"><i class="fa ' . $share['icon'] . '" aria-hidden="true"></i>' .
			$share['name'] . '</a>';
			$elements[ $share['id'] ] = $html;
		}
		return $elements;
	}

	/**
	 * Display the share buttons.
	 * Callback function for the 'hsph_before_entry_footer' action.
	 *
	 * @param string $current_post_type The current post type.
	 * @param string $is_singular Whether the page is for a single post.
	 * @param bool   $is_page Whether the current query is for a page.
	 * @param bool   $is_front_page Whether the current query is for the front page.
	 * @return void
	 */
	public function display_share_buttons( $current_post_type, $is_singular, $is_page, $is_front_page ) {
		$html                    = '';
		$share_buttons           = self::get_the_social_buttons();
		$share_button_post_types = get_field( 'share_button_post_types', 'option' );
		// ACF field is null until the option has been saved for the first time.
		if ( null === $share_button_post_types ) {
			$share_button_post_types = HSPH_PLUGIN_SOCIAL_DEFAULT_SHARE_BUTTON_POST_TYPES;
		}
		$current_post_type_display_share_buttons = in_array( $current_post_type, $share_button_post_types, true );
		$current_post_hide_share_buttons         = get_field( 'hsph_hide_post_share_buttons', false );
		$platforms_to_display                    = get_field( 'hsph_share_buttons_platforms', 'option' );
		// ACF field is null until the option has been saved for the first time.
		if ( null === $platforms_to_display ) {
			$platforms_to_display = HSPH_PLUGIN_SOCIAL_DEFAULT_SHARE_BUTTON_PLATFORMS;
		}
		foreach ( $share_buttons as $btn_key => $btn_value ) {
			$display = in_array( $btn_key, $platforms_to_display, true );
			if ( true === $display ) {
				$html .= $btn_value;
			}
		}
		$share_buttons_with_label = '<span class="hsph-share-btns-label">'
										. __( 'Share this:', 'hsph-plugin-social' )
									. '</span>' . $html . '</span>';
		if (
			( $is_singular || $is_page || $is_front_page ) &&
			$current_post_type_display_share_buttons &&
			! $current_post_hide_share_buttons
		) {
			$share_buttons = '<div class="hsph-share-buttons hsph-bootstrap">' . $share_buttons_with_label . '</div>';
		} else {
			$share_buttons = '';
		}
		echo $share_buttons; //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	/**
	 * Create an ACF options page for share buttons settings.
	 *
	 * @return void
	 */
	public function share_buttons_site_options_page() {
		// Check function exists.
		if ( function_exists( 'acf_add_options_sub_page' ) ) {
			// Register options page.
			$option_page = acf_add_options_sub_page(
				array(
					'page_title'  => __( 'Social Media', 'hsph-plugin-social' ),
					'menu_title'  => __( 'Social Media', 'hsph-plugin-social' ),
					'parent_slug' => 'options-general.php',
					'capability'  => 'edit_posts',
					'redirect'    => false,
				)
			);
		}
	}

	/**
	 * Loads the post types for the site options page.
	 *
	 * @param object $field ACF field object to inject post types into.
	 * @return $field
	 */
	public function load_site_options_post_types( $field ) {
		$theme_provided_post_types  = apply_filters(
			'hsph_theme_provided_post_types',
			array()
		);
		$site_registered_post_types = get_post_types( array(), 'names' );
		$plugin_default_post_types  = array(
			'tribe_events' => 'Calendar Events',
			'research'     => 'Research',
			'people'       => 'People',
			'post'         => 'Posts',
			'page'         => 'Pages',
		);
		// Default post types and theme provided post types.
		$candidate_post_types = array_unique( array_merge( $theme_provided_post_types, $plugin_default_post_types ) );
		// Intersection of default/theme provided post types and site registered post types.
		$available_post_types   = array_intersect_key( $candidate_post_types, $site_registered_post_types );
		$field['choices']       = $available_post_types;
		$field['default_value'] = array( 'post' );
		return $field;
	}

	/**
	 * Add a custom field group location rule type.
	 * https://www.advancedcustomfields.com/resources/custom-location-rules/
	 *
	 * @param object $choices The available rule types.
	 * @return $choices
	 */
	public function acf_location_rules_types( $choices ) {

		$choices['HSPH']['sharing_buttons_post_types'] = 'Sharing Buttons Post Types';

		return $choices;

	}

	/**
	 * Add the "include" operator.
	 * https://www.advancedcustomfields.com/resources/custom-location-rules/
	 *
	 * @param array $choices The existing choices for this rule.
	 * @return $choices
	 */
	public function add_acf_location_rules_operator( $choices ) {
		$choices['includes'] = 'includes';
		return $choices;
	}

	/**
	 * Provide the rule with the "current post type" value to use with the "includes" operator.
	 * https://www.advancedcustomfields.com/resources/custom-location-rules/
	 *
	 * @param array $choices The existing choices for this rule.
	 * @return $new_choices
	 */
	public function add_acf_location_rule_value_current_post_type( $choices ) {
		$new_choices = array( 'current_post_type' => 'Current Post Type' );
		return $new_choices;
	}

	/**
	 * Rule matching callback for displaying the share buttons override field.
	 * https://www.advancedcustomfields.com/resources/custom-location-rules/
	 *
	 * @param boolean $match Whether or not to display the field.
	 * @param array   $rule The rule being applied.
	 * @param array   $options An array of data about the current edit screen.
	 * @param array   $field_group The field group this rule belongs to.
	 * @return $match
	 */
	public function match_acf_location_rule_match_sharing_buttons_post_types( $match, $rule, $options, $field_group ) {
		$share_button_post_types = get_field( 'share_button_post_types', 'option' );
		if ( null === $share_button_post_types ) {
			$share_button_post_types = HSPH_PLUGIN_SOCIAL_DEFAULT_SHARE_BUTTON_POST_TYPES;
		}
		if ( array_key_exists( 'post_type', $options ) ) {
			$current_post_type = $options['post_type'];
			$match             = in_array( $current_post_type, $share_button_post_types, true );
		} else {
			$match = false;
		}
		return $match;
	}
}
