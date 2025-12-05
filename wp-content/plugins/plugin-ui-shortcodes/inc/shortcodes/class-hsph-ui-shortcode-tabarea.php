<?php
/**
 * Tabarea Shortcode.
 *
 * @package    hpsh
 * @subpackage plugin-ui-shortcodes
 */

/**
 * HSPH_UI_Shortcode_Tabarea class.
 */
class HSPH_UI_Shortcode_Tabarea {


	/**
	 * The shortcode.
	 *
	 * (default value: 'tabarea')
	 *
	 * @var    string
	 * @access public
	 */
	public $shortcode = 'tabarea';

	/**
	 * The Tab Area unique ID
	 *
	 * @var string.
	 */
	public $id;

	/**
	 * The tab buttons of the tab area.
	 *
	 * @var string
	 */
	public $headers = array();

	/**
	 * The content of all the tabs.
	 *
	 * @var string
	 */
	public $content = array();

	/**
	 * A counter to keep track of the number of tabs.
	 *
	 * @var integer
	 */
	public $counter = 0;

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
		// We use an id and arrays to be able to handle multiple shortcodes on the same page.
		$this->id                   = uniqid( $this->shortcode . '-' );
		$this->headers[ $this->id ] = '';
		$this->content[ $this->id ] = '';

		// Null content check.
		if ( null === $content ) {
			return;
		} else {
			// We don't store the result as the nested shortcodes will set the content on their own.
			do_shortcode( $content );
		}

		$attributes = shortcode_atts(
			array(
				'id'     => $this->id,
				'class'  => '',
				'opento' => '',
			),
			$atts
		);

		$id     = $attributes['id'];
		$class  = $attributes['class'];
		$opento = $attributes['opento'];

		if ( ! empty( $opento ) && absint( $opento ) !== 0 ) {
			$additional = '
		<script>
			jQuery(document).ready(function($) {
				$("#' . esc_attr( $id ) . '").tabs( "option", "active", ' . absint( $opento ) . ');
			});
		</script>
			';
		} else {
			$additional = '';
		}

		// Return the generated html for the shortcode.
		return '<div id="' . esc_attr( $id ) . '" class="hsph-ui-shortcodes tabs ' . esc_attr( $class ) . '">' .
					'<ul>' . $this->headers[ $this->id ] . '</ul>' .
					$this->content[ $this->id ] .
		'</div>' . $additional;
	}
}
