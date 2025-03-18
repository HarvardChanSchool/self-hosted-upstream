<?php
/**
 * Call2action Bar Shortcode.
 *
 * @package    hpsh
 * @subpackage plugin-ui-shortcodes
 */

/**
 * HSPH_UI_Shortcode_call2action-bar class.
 */
class HSPH_UI_Shortcode_Call2action_Bar {


	/**
	 * The shortcode.
	 *
	 * (default value: 'hsph_call2action_bar')
	 *
	 * @var    string
	 * @access public
	 */
	public $shortcode = 'hsph_call2action_bar';

	/**
	 * __construct function.
	 *
	 * @access public
	 * @return void
	 */
	public function __construct() {
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
		$html = '';

		// set $class veriable.
		if ( isset( $atts['class'] ) && ! empty( $atts['class'] ) ) {
			$class = esc_attr( $atts['class'] );
		} else {
			$class = '';
		}

		// Check if desciption is passed to the function.
		if ( isset( $atts['desc'] ) && ! empty( $atts['desc'] ) ) {
			$desc = esc_html( $atts['desc'] );
			$desc = '<div class="call2action-bar-desc">' . $desc . '</div>';
		} else {
			$desc = '';
		}

		// Check if title is passed to the function.
		if ( isset( $atts['title'] ) && ! empty( $atts['title'] ) ) {
			$title = esc_html( $atts['title'] );
			$title = "<h3 class=\"call2action-bar-header\"> $title </h3>";
		} else {
			$title = '';
		}

		// Check if link is passed to the function.
		if ( isset( $atts['link'] ) && ! empty( $atts['link'] ) ) {
			$url = esc_url( $atts['link'] );
		} else {
			$url = '#';
		}

		$arrow = '<i class="fa fa-angle-right " aria-hidden="true"></i>';
		$arrow = '<div class="call2action-bar-arrow"> ' . $arrow . '</div>';

		$html .= '<div class="call2action-bar ' . $class . '"><a href="' . $url . '" class="call2action-bar-link">' . $title . $desc . $arrow . '</a></div>';

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
		// We build the shortcode attributes array.
		$fields = array(
			array(
				'label'       => esc_html__( 'Title (max 80 characters)', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( 'Primary label for the call to action bar', 'hsph-ui-shortcodes' ),
				'attr'        => 'title',
				'type'        => 'text',
				'meta'        => array(
					'maxlength' => 80,
				),
			),
			array(
				'label'       => esc_html__( 'Description (max 240 characters)', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( 'A preview or description of the call to action, to provide context', 'hsph-ui-shortcodes' ),
				'attr'        => 'desc',
				'type'        => 'textarea',
				'meta'        => array(
					'maxlength' => 240,
				),
			),
			array(
				'label'       => esc_html__( 'Link URL', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( 'Hyperlink for the page to which user will be navigated after clicking the call to action bar', 'hsph-ui-shortcodes' ),
				'attr'        => 'link',
				'type'        => 'url',
			),
		);
		// We build the shortcake arguments array.
		$shortcode_ui_args = array(
			// The shortcode name.
			'label'         => esc_html__( 'Call to action bar', 'hsph-ui-shortcodes' ),
			// The icon.
			'listItemImage' => '<img src="' . esc_url( HSPH_UI_SHORTCODES_ASSETS_URL . 'images/shortcake-preview/call2action-bar.png' ) . '" />',
			// Define where the shorcode can be added.
			'post_type'     => HSPH_UI_Shortcodes::get_shortcake_post_types(),
			// The shortcode attributes we previously registered.
			'attrs'         => $fields,
		);
		shortcode_ui_register_for_shortcode( $this->shortcode, $shortcode_ui_args );
	}
}
