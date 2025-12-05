<?php
/**
 * Altmetric Embed Shortcode.
 *
 * @package    hpsh
 * @subpackage plugin-ui-shortcodes
 */

/**
 * HSPH_UI_Shortcode_Altmetric class.
 */
class HSPH_UI_Shortcode_Altmetric {


	/**
	 * The shortcode.
	 *
	 * (default value: 'altmetric')
	 *
	 * @var    string
	 * @access public
	 */
	public $shortcode = 'altmetric';

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
		if ( isset( $atts['resourcetype'] ) && ! empty( $atts['resourcetype'] ) && isset( $atts['resourceid'] ) && ! empty( $atts['resourceid'] ) ) {
			$html .= '<div class="altmetric-embed" data-badge-popover="right" data-badge-type="1" data-' . esc_attr( $atts['resourcetype'] ) . '="' . esc_attr( $atts['resourceid'] ) . '" data-hide-no-mentions="true">' . esc_html__( 'AM Badge Preview', 'hsph-ui-shortcodes' ) . '</div>';
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
				'label'       => esc_attr__( 'Resource Type', 'hsph-ui-shortcodes' ),
				'description' => esc_attr__( 'Altmetric support multiple resource types.', 'hsph-ui-shortcodes' ),
				'attr'        => 'resourcetype',
				'type'        => 'select',
				'options'     => array(
					'pmid'     => esc_attr__( 'PubMed ID', 'hsph-ui-shortcodes' ),
					'doi'      => esc_attr__( 'DOI', 'hsph-ui-shortcodes' ),
					'arxiv-id' => esc_attr__( 'arXiv ID', 'hsph-ui-shortcodes' ),
					'isbn'     => esc_attr__( 'ISBN', 'hsph-ui-shortcodes' ),
					'handle'   => esc_attr__( 'Handle', 'hsph-ui-shortcodes' ),
					'uri'      => esc_attr__( 'URI', 'hsph-ui-shortcodes' ),
				),
			),
			array(
				'label'       => esc_html__( 'Resource ID', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( 'ie. If DOI : 10.1038/nature.2012.9872 , if Pubmed ID : 21771119', 'hsph-ui-shortcodes' ),
				'attr'        => 'resourceid',
				'type'        => 'text',
			),
		);
		// We build the shortcake arguments array.
		$shortcode_ui_args = array(
			// The shortcode name.
			'label'         => esc_html__( 'Altmetric Badge', 'hsph-ui-shortcodes' ),
			// The icon.
			'listItemImage' => '<img src="' . esc_url( HSPH_UI_SHORTCODES_ASSETS_URL . 'images/shortcake-preview/altmetric.png' ) . '" />',
			// Define where the shorcode can be added.
			'post_type'     => HSPH_UI_Shortcodes::get_shortcake_post_types(),
			// The shortcode attributes we previously registered.
			'attrs'         => $fields,
		);
		shortcode_ui_register_for_shortcode( $this->shortcode, $shortcode_ui_args );
	}
}
