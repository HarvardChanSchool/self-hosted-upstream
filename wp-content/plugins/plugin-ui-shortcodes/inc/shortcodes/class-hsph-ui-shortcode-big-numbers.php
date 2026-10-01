<?php
/**
 * Content Big Numbers Shortcode.
 *
 * @package    hpsh
 * @subpackage plugin-ui-shortcodes
 */

/**
 * HSPH_UI_Shortcode_Big_Numbers class.
 */
class HSPH_UI_Shortcode_Big_Numbers {

	/**
	 * The shortcode.
	 *
	 * (default value: 'big_numbers')
	 *
	 * @var    string
	 * @access public
	 */
	public $shortcode = 'big_numbers';

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
	 * Add_shortcode function.
	 *
	 * @access public
	 * @param  mixed $atts    The shortcode attributes.
	 * @return string The generated html code for the shortcode
	 */
	public function add_shortcode( $atts ) {

		$attributes = shortcode_atts(
			array(
				'number' => '',
				'desc'   => '',
				'notes'  => '',
				'class'  => '',
			),
			$atts
		);

		// Extracting the shortcode attributes.
		$number = $attributes['number'];
		$desc   = $attributes['desc'];
		$notes  = $attributes['notes'];
		$class  = $attributes['class'];

		if ( '0' === $number || ! empty( $number ) ) {
			// Clean up our number.
			$number = esc_html( $number );
			$number = '<h3 class="big-numbers-element ui-content-number">' . $number . '</h3>';
		}

		// Do we have a description?
		if ( '0' === $desc || ! empty( $desc ) ) {
			// Clean up our number.
			$desc = esc_html( $desc );
			$desc = '<p class="big-numbers-element ui-content-desc">' . $desc . '</p>';
		}

		// Do we have notes?
		if ( '0' === $notes || ! empty( $notes ) ) {
			// Clean up our number.
			$notes = esc_html( $notes );
			$notes = '<p class="big-numbers-element ui-content-notes">' . $notes . '</p>';
		} else {
			// This <p> tag is added to ensure all cards have similar Big Numbers divs have the same height.
			$notes = '<p class="big-numbers-element ui-content-notes ui-content-notes-empty" aria-hidden="true">Hidden</p>';
		}

		// Return the generated html for the shortcode.
		return '<div class="big-numbers ' . $class . '">' . $number . $desc . $notes . '</div>';
	}

	/**
	 * Add the shortcake UI integration for the shortcode.
	 *
	 * @access public
	 * @return void
	 */
	public function register_shortcode_ui() {
		// We build the shortcode attributes array.
		$fields = array(
			array(
				'label'       => esc_html__( 'Number', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( 'Enter the number', 'hsph-ui-shortcodes' ),
				'attr'        => 'number',
				'type'        => 'text',
				'required'    => 'true',
			),
			array(
				'label'       => esc_html__( 'Description', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( 'Enter the description (Large text under the number)', 'hsph-ui-shortcodes' ),
				'attr'        => 'desc',
				'type'        => 'text',
				'required'    => 'true',
			),
			array(
				'label'       => esc_html__( 'Notes', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( '(optional) Smaller discrete text under the label', 'hsph-ui-shortcodes' ),
				'attr'        => 'notes',
				'type'        => 'text',
			),
		);
		// We build the shortcake arguments array.
		$shortcode_ui_args = array(
			// The shortcode name.
			'label'         => esc_html__( 'Big Numbers', 'hsph-ui-shortcodes' ),
			// The icon.
			'listItemImage' => '<img src="' . esc_url( HSPH_UI_SHORTCODES_ASSETS_URL . 'images/shortcake-preview/big_numbers.png' ) . '" />',
			// Define where the shorcode can be added.
			'post_type'     => HSPH_UI_Shortcodes::get_shortcake_post_types(),
			// The shortcode attributes we previously registered.
			'attrs'         => $fields,
		);
		shortcode_ui_register_for_shortcode( $this->shortcode, $shortcode_ui_args );
	}
}
