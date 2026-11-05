<?php
/**
 * Expandable Region Shortcode.
 *
 * @package    hpsh
 * @subpackage plugin-ui-shortcodes
 */

/**
 * HSPH_UI_Shortcode_Expandable class.
 */
class HSPH_UI_Shortcode_Expandable {


	/**
	 * The shortcode.
	 *
	 * (default value: 'expandable')
	 *
	 * @var    string
	 * @access public
	 */
	public $shortcode = 'expandable';

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
	 * @param  mixed $content (default: null) The shortcode content.
	 * @return string The generated html code for the shortcode
	 */
	public function add_shortcode( $atts, $content = null ) {
		// Null content check.
		if ( null === $content ) {
			return;
		} else {
			$content = do_shortcode( $content );
		}

		// wrap the $content with a p tag.
		$content = '<p>' . $content . '</p>';
		// Remove the whitespace / empty <p> from the end of $content.
		$content = preg_replace( '/<p>(?:\s|&nbsp;)*?<\/p>/i', '', force_balance_tags( $content ) );

		$attributes = shortcode_atts(
			array(
				'id'    => uniqid( $this->shortcode . '-' ),
				'class' => '',
				'open'  => 'closed',
				'title' => '',
				'style' => '',
			),
			$atts
		);

		$class = sanitize_text_field( $attributes['class'] );
		$id    = esc_attr( $attributes['id'] );
		$open  = sanitize_title( $attributes['open'] );
		$title = sanitize_text_field( $attributes['title'] );
		$style = $attributes['style'];

		// Checking which color is selected from dropdown and adding the appropiate class.
		if ( 'blue' === $style ) {
			$bd_color = ' border-primary ';
		} elseif ( 'crimson' === $style ) {
			$bd_color = ' border-crimson ';
		} elseif ( 'green' === $style ) {
			$bd_color = ' border-positive ';
		} elseif ( 'orange' === $style ) {
			$bd_color = ' border-info ';
		} elseif ( 'red' === $style ) {
			$bd_color = ' border-alert ';
		} else {
			$bd_color = '';
		}

		// Return the generated html for the shortcode.
		if ( ! empty( $title ) && ! empty( $content ) ) {
			return '<div class="hsph-bootstrap">
			<details id="' . esc_attr( $id ) . '" class="expandable bg-light border-left py-1 px-3 mb-4 ' . esc_attr( $bd_color ) . esc_attr( $class ) . '" ' . ( 'open' === $open ? 'open' : '' ) . '>
				<summary class="h6 my-2" role="heading" aria-level="6">' . esc_html( $title ) . '</summary>
				' . $content . '
			</details>
			</div>';
		}
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
				'label'       => esc_attr__( 'Default State', 'hsph-ui-shortcodes' ),
				'description' => esc_attr__( 'Expandable region Default state when page loads', 'hsph-ui-shortcodes' ),
				'attr'        => 'open',
				'type'        => 'select',
				'options'     => array(
					'closed' => esc_attr__( 'Closed', 'hsph-ui-shortcodes' ),
					'open'   => esc_attr__( 'Open', 'hsph-ui-shortcodes' ),
				),
			),
			array(
				'label'       => esc_html__( 'Title', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( '(required) The title of the expandable region', 'hsph-ui-shortcodes' ),
				'attr'        => 'title',
				'type'        => 'text',
			),
			array(
				'label'       => esc_attr__( 'Border style', 'hsph-ui-shortcodes' ),
				'description' => esc_attr__( 'Choose the left border color', 'hsph-ui-shortcodes' ),
				'attr'        => 'style',
				'type'        => 'select',
				'options'     => array(
					'grey'    => esc_attr__( 'Neutral - Grey - Default', 'hsph-ui-shortcodes' ),
					'blue'    => esc_attr__( 'Highlighted - Blue', 'hsph-ui-shortcodes' ),
					'crimson' => esc_attr__( 'Highlighted - Crimson', 'hsph-ui-shortcodes' ),
					'green'   => esc_attr__( 'Positive - Green', 'hsph-ui-shortcodes' ),
					'orange'  => esc_attr__( 'Info - Orange', 'hsph-ui-shortcodes' ),
					'red'     => esc_attr__( 'Alert - Red', 'hsph-ui-shortcodes' ),
				),
			),
		);
		// We build the shortcake arguments array.
		$shortcode_ui_args = array(
			// The shortcode name.
			'label'         => esc_html__( 'Expandable Region', 'hsph-ui-shortcodes' ),
			// The icon.
			'listItemImage' => '<img src="' . esc_url( HSPH_UI_SHORTCODES_ASSETS_URL . 'images/shortcake-preview/expandable.png' ) . '" />',
			// Define where the shorcode can be added.
			'post_type'     => HSPH_UI_Shortcodes::get_shortcake_post_types(),
			// The shortcode attributes we previously registered.
			'attrs'         => $fields,
			// The content of the expandable region.
			'inner_content' => array(
				'label'       => esc_html__( 'Content', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( '(required) The text to display inside of the expandable region', 'hsph-ui-shortcodes' ),
			),
		);
		shortcode_ui_register_for_shortcode( $this->shortcode, $shortcode_ui_args );
	}
}
