<?php
/**
 * Qualtrics Embed Shortcode.
 *
 * @package    hpsh
 * @subpackage plugin-ui-shortcodes
 */

/**
 * HSPH_UI_Shortcode_Qualtrics class.
 */
class HSPH_UI_Shortcode_Qualtrics {


	/**
	 * The shortcode.
	 *
	 * (default value: 'qualtrics')
	 *
	 * @var    string
	 * @access public
	 */
	public $shortcode = 'qualtrics';

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
		// We check that we have a link and the domain is valid.
		if ( isset( $atts['link'] ) && ( false !== strpos( $atts['link'], 'qualtrics.com' ) || false !== strpos( $atts['link'], 'harvard.edu' ) ) ) {

			// If the height was not specified or is invalid we default at 800px.
			if ( ! isset( $atts['height'] ) || ! is_numeric( $atts['height'] ) ) {
				$atts['height'] = 800;
			}

			$html .= '<iframe class="qualtrics-iframe" style="display: block; margin: 0 auto; border: none; background: inherit;" src="' . esc_url( $atts['link'] ) . '" width="100%" height=" ' . absint( trim( $atts['height'] ) ) . 'px"></iframe>';
		} else {
			$html .= '<p style="color:red;">' . esc_html__( 'Invalid or missing survey link.', 'hsph-ui-shortcodes' ) . '</p>';
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
				'label'       => esc_html__( 'Survey Link', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( 'The survey link to be embeded (required - must be qualtrics.com or harvard.edu)', 'hsph-ui-shortcodes' ),
				'attr'        => 'link',
				'type'        => 'url',
			),
			array(
				'label'       => esc_html__( 'Height', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( 'The height in px of the iframe (optional - default 800)', 'hsph-ui-shortcodes' ),
				'attr'        => 'height',
				'type'        => 'number',
			),
		);
		// We build the shortcake arguments array.
		$shortcode_ui_args = array(
			// The shortcode name.
			'label'         => esc_html__( 'Embed Qualtrics Survey', 'hsph-ui-shortcodes' ),
			// The icon.
			'listItemImage' => '<img src="' . esc_url( HSPH_UI_SHORTCODES_ASSETS_URL . 'images/shortcake-preview/qualtrics.png' ) . '" />',
			// Define where the shorcode can be added.
			'post_type'     => HSPH_UI_Shortcodes::get_shortcake_post_types(),
			// The shortcode attributes we previously registered.
			'attrs'         => $fields,
		);
		shortcode_ui_register_for_shortcode( $this->shortcode, $shortcode_ui_args );
	}
}
