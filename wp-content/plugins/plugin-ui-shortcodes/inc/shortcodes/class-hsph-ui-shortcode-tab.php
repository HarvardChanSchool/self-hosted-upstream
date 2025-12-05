<?php
/**
 * Tab Shortcode.
 *
 * @package    hpsh
 * @subpackage plugin-ui-shortcodes
 */

/**
 * HSPH_UI_Shortcode_Tab class.
 */
class HSPH_UI_Shortcode_Tab {


	/**
	 * The shortcode.
	 *
	 * (default value: 'tab')
	 *
	 * @var    string
	 * @access public
	 */
	public $shortcode = 'tab';

	/**
	 * The parent tabarea.
	 *
	 * (default value: 'false')
	 *
	 * @var boolean|HSPH_UI_Shortcode_Tabarea
	 */
	private $tabarea = false;

	/**
	 * Constructor.
	 *
	 * @param  boolean|HSPH_UI_Shortcode_Tabarea $tabarea The parent tabarea.
	 * @access public
	 * @return void
	 */
	public function __construct( $tabarea = false ) {
		$this->tabarea = &$tabarea;
		add_shortcode( 'tab', array( $this, 'add_shortcode' ) );
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

		// Tabs require a valid tabarea to be displayed correctly.
		if ( false === $this->tabarea || ! is_a( $this->tabarea, 'HSPH_UI_Shortcode_Tabarea' ) ) {
			return;
		}

		++$this->tabarea->counter;

		$attributes = shortcode_atts(
			array(
				'title' => 'Section Title',
			),
			$atts
		);

		// Append headers and tabs content to the tabarea.
		$this->tabarea->headers[ $this->tabarea->id ] .= '<li><a href="#tabs-' . $this->tabarea->counter . '">' . esc_html( $attributes['title'] ) . '</a></li>';
		$this->tabarea->content[ $this->tabarea->id ] .= '<div id="tabs-' . $this->tabarea->counter . '">' . wpautop( $content ) . '</div>';
	}
}
