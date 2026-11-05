<?php
/**
 * Call2action Button Shortcode.
 *
 * @package    hpsh
 * @subpackage plugin-ui-shortcodes
 */

/**
 * HSPH_UI_Shortcode_Call2action_Button class.
 */
class HSPH_UI_Shortcode_Call2action_Button {


	/**
	 * The shortcode.
	 *
	 * (default value: 'hsph_call2action_button')
	 *
	 * @var    string
	 * @access public
	 */
	public $shortcode = 'hsph_call2action_button';

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
		if ( isset( $atts['link'] ) && ! empty( $atts['link'] ) && isset( $atts['label'] ) && ! empty( $atts['label'] ) ) {

			if ( isset( $atts['class'] ) && ! empty( $atts['class'] ) ) {
				$class = $atts['class'];
			} else {
				$class = '';
			}

			$html .= '<a class="call2action-button ' . esc_attr( $class ) . '" href="' . esc_url( $atts['link'] ) . '">' . esc_attr( $atts['label'] ) . '</a>';
		}
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
				'label'       => esc_html__( 'Label', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( 'The label of the button', 'hsph-ui-shortcodes' ),
				'attr'        => 'label',
				'type'        => 'text',
			),
			array(
				'label'       => esc_html__( 'Link', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( 'The link to which user will be redirected when they click on the button', 'hsph-ui-shortcodes' ),
				'attr'        => 'link',
				'type'        => 'url',
			),
		);
		// We build the shortcake arguments array.
		$shortcode_ui_args = array(
			// The shortcode name.
			'label'         => esc_html__( 'Call to action button', 'hsph-ui-shortcodes' ),
			// The icon.
			'listItemImage' => '<img src="' . esc_url( HSPH_UI_SHORTCODES_ASSETS_URL . 'images/shortcake-preview/call2action-button.png' ) . '" />',
			// Define where the shorcode can be added.
			'post_type'     => HSPH_UI_Shortcodes::get_shortcake_post_types(),
			// The shortcode attributes we previously registered.
			'attrs'         => $fields,
		);
		shortcode_ui_register_for_shortcode( $this->shortcode, $shortcode_ui_args );
	}
}
