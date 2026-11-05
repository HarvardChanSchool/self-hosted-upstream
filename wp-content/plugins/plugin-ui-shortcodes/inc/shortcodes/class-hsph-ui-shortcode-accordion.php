<?php
/**
 * Accordion Shortcode.
 *
 * @package    hpsh
 * @subpackage plugin-ui-shortcodes
 */

/**
 * HSPH_UI_Shortcode_Accordion class.
 */
class HSPH_UI_Shortcode_Accordion {

	/**
	 * The shortcode.
	 *
	 * (default value: 'accordion')
	 *
	 * @var    string
	 * @access public
	 */
	public $shortcode = 'accordion';

	/**
	 * __construct function.
	 *
	 * @access public
	 * @return void
	 */
	public function __construct() {
		add_shortcode( 'accordion', array( $this, 'add_shortcode' ) );
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
				'id'     => uniqid( $this->shortcode . '-' ),
				'class'  => '',
				'opento' => '',
			),
			$atts
		);

		$opento = absint( $attributes['opento'] );
		$class  = sanitize_text_field( $attributes['class'] );
		$id     = esc_attr( $attributes['id'] );

		$additional = '';

		if ( ! empty( $opento ) && 0 !== $opento && 'none' !== $opento ) {
			$additional = '
		<script>
			jQuery(document).ready(function($) {
				$("#' . esc_attr( $id ) . '").accordion( "option", "active", ' . absint( $opento ) . ');
			});
		</script>
			';
		} elseif ( ! empty( $opento ) && 'none' === $opento ) {
			$additional = '
		<script>
			jQuery(document).ready(function($) {
				$("#' . esc_attr( $id ) . '").accordion( "option", "active", false);
			});
		</script>
			';
		}

		// Start the accoridion.
		return '<div id="' . esc_attr( $id ) . '" class="hsph-ui-shortcodes accordion ' . esc_attr( $class ) . '">' . $content . '</div>' . $additional;
	}
}
