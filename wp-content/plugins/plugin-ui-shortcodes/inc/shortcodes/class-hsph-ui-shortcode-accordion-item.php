<?php
/**
 * Accordion Item Shortcode.
 *
 * @package    hpsh
 * @subpackage plugin-ui-shortcodes
 */

/**
 * HSPH_UI_Shortcode_Accordion_Item class.
 */
class HSPH_UI_Shortcode_Accordion_Item {


	/**
	 * The shortcode.
	 *
	 * (default value: 'aitem')
	 *
	 * @var    string
	 * @access public
	 */
	public $shortcode = 'aitem';

	/**
	 * __construct function.
	 *
	 * @access public
	 * @return void
	 */
	public function __construct() {
		add_shortcode( $this->shortcode, array( $this, 'add_shortcode' ) );
	}

	/**
	 * Add_shortcode function.
	 *
	 * @access public
	 * @param  mixed $atts    The shortcode attributes.
	 * @param  mixed $content (default: null) The shortcode content.
	 * @return string The generated html code for the shortcode.
	 */
	public function add_shortcode( $atts, $content = null ) {
		// Null content check.
		if ( null === $content ) {
			return;
		} else {
			$content = do_shortcode( $content );
		}

		$attributes = shortcode_atts(
			array(
				'title' => 'Section Title',
			),
			$atts
		);

		// Return the generated html for the shortcode.
		return '<h3>' . esc_html( $attributes['title'] ) . '</h3><div>' . $content . '</div>';
	}
}
