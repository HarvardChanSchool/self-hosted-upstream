<?php
/**
 * Social networks menu
 *
 * Offers the user various ways of displaying a list of links to their social media profiles.
 *
 * @package hpsh
 * @subpackage hsph-plugin-social
 */

/**
 * HSPH_Plugin_Social_Networks Class.
 */
class HSPH_Plugin_Social_Networks {

	/**
	 * Init function.
	 *
	 * @access public
	 * @return void
	 */
	public function init() {
		// Register social media settings.
		add_action( 'widgets_init', array( $this, 'widgets_init' ) );
		// Display menu on hsph main theme and affiliate theme.
		add_action( 'affiliate2017_after_utility_menu', array( $this, 'display_social_networks_menu' ) );
		add_action( 'hsph_after_nav_left_sidebar', array( $this, 'display_social_networks_menu' ) );
	}

	/**
	 * Determine if the social network buttons are enabled on the current theme.
	 *
	 * @access public
	 * @return boolean Whether or not the feature is active.
	 */
	public function is_active_on_current_theme() {
		// Get the list of themes where the feature is activated.
		$hsph_social_icons_themes = apply_filters(
			'hsph_social_icons_themes',
			array()
		);
		// Check if the current theme is in that list.
		foreach ( $hsph_social_icons_themes as $hsph_social_icons_theme ) {
			// The @ characters serve as required delimiters for the regex pattern.
			$hsph_theme_pattern = '@' . $hsph_social_icons_theme . '(-child-.+)?@';
			if ( ! empty( preg_match( $hsph_theme_pattern, get_stylesheet() ) ) ) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Get list of networks.
	 * Important : We use static methode so we can easily call this from other classes (widgets,shortcode,etc.)
	 *
	 * @access public
	 * @return array The array of all available social newtorks.
	 */
	public static function get_available_networks() {
		$networks = array(
			array(
				'id'   => 'facebook',
				'name' => 'Facebook',
				'icon' => 'fa-facebook',
			),
			array(
				'id'   => 'twitter',
				'name' => 'Twitter',
				'icon' => 'fa-twitter',
			),
			array(
				'id'   => 'linkedin',
				'name' => 'LinkedIn',
				'icon' => 'fa-linkedin',
			),
			array(
				'id'   => 'instagram',
				'name' => 'Instagram',
				'icon' => 'fa-instagram',
			),
			array(
				'id'   => 'youtube',
				'name' => 'Youtube',
				'icon' => 'fa-youtube',
			),
			array(
				'id'   => 'soundcloud',
				'name' => 'SoundCloud',
				'icon' => 'fa-soundcloud',
			),
			array(
				'id'   => 'newsletter',
				'name' => 'Newsletter',
				'icon' => 'fa-envelope-open',
			),
		);
		return $networks;
	}

	/**
	 * Get the prefix used for wp option meta key
	 * Important : We use static method so we can easily call this from other classes (widgets,shortcode,etc.)
	 *
	 * @access public
	 * @return string The prefix used for wp option meta key.
	 */
	public static function get_network_settings_prefix() {
		return 'hsph_social_network_link_';
	}

	/**
	 * Register widget that displays our social networks menu.
	 *
	 * @return void
	 */
	public function widgets_init() {
		if ( $this->is_active_on_current_theme() ) {
			require_once HSPH_PLUGIN_SOCIAL_INC_PATH . '/widgets/class-hsph-plugin-social-networks-widget.php';
			register_widget( 'HSPH_Plugin_Social_Networks_Widget' );
		}
	}

	/**
	 * Render the html for the social media menu
	 * Important : We use static method so we can easily call this from other classes (widgets,shortcode,etc.)
	 *
	 * @access public
	 * @return string The prefix used for wp option meta key.
	 */
	public static function get_the_social_network_menu() {
		$html     = '';
		$networks = self::get_available_networks();
		foreach ( $networks as $network ) {
			$network_url_field = self::get_network_settings_prefix() . $network['id'];
			$network_url       = get_field( $network_url_field, 'option' );
			$aria_label        = $network['name'] . ' ' . __( ' profile link', 'hsph-plugin-social' );
			if ( ! empty( esc_url( $network_url ) ) ) {
				$html .= '<a rel="external noreferrer nofollow" href="' . esc_url( $network_url ) . '" aria-label="' . esc_attr( $aria_label ) . '" class="social-media-menu-' . esc_attr( $network['icon'] ) . '"><i class="fa ' . esc_attr( $network['icon'] ) . '" aria-hidden="true"></i></a>';
			}
		}
		// If we don't have any social network.
		if ( empty( $html ) ) {
			return '';
		} else {
			return '<span class="social-media-menu-label">' . __( 'Follow', 'hsph-plugin-social' ) . ':</span><span class="social-media-menu-icons">' . $html . '</span>';
		}
	}


	/**
	 * Display the social media menu.
	 * Callback function for the `affiliate2017_before_utility_menu` and `hsph_main_before_utility_menu` actions.
	 *
	 * @return void
	 */
	public function display_social_networks_menu() {
		if ( $this->is_active_on_current_theme() ) {
			$display = get_field( 'hsph_show_hide_social_icons', 'option' );
			if ( 'show' === $display ) {
				echo '<nav class="social-media-menu-wrapper">' . self::get_the_social_network_menu() . '</nav>'; //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			}
		}
	}
}
