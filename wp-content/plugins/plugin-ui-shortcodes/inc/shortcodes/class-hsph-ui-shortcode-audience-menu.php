<?php
/**
 * Audience Menu Shortcode.
 *
 * @package    hpsh
 * @subpackage plugin-ui-shortcodes
 */

/**
 * HSPH_UI_Shortcode_Audience_Menu class.
 */
class HSPH_UI_Shortcode_Audience_Menu {


	/**
	 * The shortcode.
	 *
	 * (default value: 'hsph_audience_menu')
	 *
	 * @var    string
	 * @access public
	 */
	public $shortcode = 'hsph_audience_menu';

	/**
	 * __construct function.
	 *
	 * @access public
	 * @return void
	 */
	public function __construct() {
		// We register the audience menu shortcode and UI.
		add_shortcode( $this->shortcode, array( $this, 'add_shortcode' ) );
		add_action( 'register_shortcode_ui', array( $this, 'register_shortcode_ui' ) );
	}

	/**
	 * Add the shortcode
	 *
	 * @access public
	 * @param  mixed $atts The shortcode attributes.
	 * @return string The generated html code for the shortcode
	 */
	public function add_shortcode( $atts ) {
		$html = '<nav class="audience-landing-nav" role="navigation" aria-label="' . esc_attr__( 'Inline Navigation', 'hsph-ui-shortcodes' ) . '">';

		if ( isset( $atts['menu'] ) && ! empty( $atts['menu'] ) ) {

			$menu_args = array(
				'echo'        => false,
				'fallback_cb' => false,
				'menu'        => esc_attr( $atts['menu'] ),
				'depth'       => 1,
			);

			if ( isset( $atts['class'] ) && ! empty( $atts['class'] ) ) {
				$menu_args['menu_class'] = esc_attr( $atts['class'] );
			}

			$html .= wp_nav_menu( $menu_args );
		} else {
			$html .= __( 'This menu doesn\'t exist', 'hsph-ui-shortcodes' );
		}

		$html .= '</nav>';

		// Return the generated html for the shortcode.
		return $html;
	}

	/**
	 * Add the shortcake UI integration for the shortcode
	 *
	 * @access public
	 * @return void
	 */
	public function register_shortcode_ui() {
		// We get the list of menus available the user.
		$nav_menus = get_terms(
			'nav_menu'
		);
		// If the list is not empty we display the shortcode UI.
		if ( is_array( $nav_menus ) && ! empty( $nav_menus ) ) {
			// Var to store the formated list of menu.
			$options = array();
			// We iterate though the available menus.
			foreach ( $nav_menus as $nav_menu ) {
				if ( is_a( $nav_menu, 'WP_Term' ) ) {
					$options[ $nav_menu->slug ] = $nav_menu->name;
				}
			}
			// We build the shortcode attributes array.
			$fields = array(
				array(
					'label'       => esc_html__( 'Select the menu', 'hsph-ui-shortcodes' ),
					'description' => esc_html__( 'You can create/edit menus in Appearance>Menus', 'hsph-ui-shortcodes' ),
					'attr'        => 'menu',
					'type'        => 'select',
					'options'     => $options,
					'value'       => key( $options ), // We need to set a default value since required is not supported.
				),
			);
			// We build the shortcake arguments array.
			$shortcode_ui_args = array(
				// The shortcode name.
				'label'         => esc_html__( 'Audience menu', 'hsph-ui-shortcodes' ),
				// The icon.
				'listItemImage' => '<img src="' . esc_url( HSPH_UI_SHORTCODES_ASSETS_URL . 'images/shortcake-preview/audience-menu.png' ) . '" />',
				// Define where the shorcode can be added.
				'post_type'     => HSPH_UI_Shortcodes::get_shortcake_post_types(),
				// The shortcode attributes we previously registered.
				'attrs'         => $fields,
			);
			shortcode_ui_register_for_shortcode( $this->shortcode, $shortcode_ui_args );
		}
	}
}
