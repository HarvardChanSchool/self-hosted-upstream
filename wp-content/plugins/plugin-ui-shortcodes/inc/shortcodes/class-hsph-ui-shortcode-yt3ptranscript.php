<?php
/**
 * Youtube 3Play Transcript Embed Shortcode.
 *
 * @package    hpsh
 * @subpackage plugin-ui-shortcodes
 */

/**
 * HSPH_UI_Shortcode_Yt3ptranscript class.
 */
class HSPH_UI_Shortcode_Yt3ptranscript {


	/**
	 * The shortcode.
	 *
	 * (default value: 'altmetric')
	 *
	 * @var    string
	 * @access public
	 */
	public $shortcode = 'yt3ptranscript';

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
		// Because there is no way to conditionally load JS and pass params with UI Shortcodes. We inline the required JS.
		// phpcs:disable WordPress.WP.EnqueuedResources.NonEnqueuedScript
		// We check that we have a link and the domain is valid.
		if ( isset( $atts['ytvideoid'] ) && ! empty( $atts['ytvideoid'] ) && isset( $atts['3pfileid'] ) && ! empty( $atts['3pfileid'] ) ) {
			$html .= '<script type="text/javascript" src="https://www.youtube.com/iframe_api"></script>';
			$html .= '<div class="hsph-bootstrap"><div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/' . esc_attr( $atts['ytvideoid'] ) . '?enablejsapi=1" id="tpm-plugin-rpdlsupy-' . esc_attr( $atts['ytvideoid'] ) . '"></iframe></div></div>';
			$html .= '<div id="3p-plugin-target-' . esc_attr( $atts['3pfileid'] ) . '" class="p3sdk-target"></div>';
			$html .= '<script type="text/javascript" src="//plugin.3playmedia.com/ajax.js?embed=ajax&height=500px&itx=1&mf=' . esc_attr( $atts['3pfileid'] ) . '&p=11439&player_type=youtube&plugin_skin=light&target=3p-plugin-target-' . esc_attr( $atts['3pfileid'] ) . '&vembed=0&video_id=' . esc_attr( $atts['ytvideoid'] ) . '&video_target=tpm-plugin-rpdlsupy-' . esc_attr( $atts['ytvideoid'] ) . '&width=100%25"></script>';
		}
		// phpcs:enable WordPress.WP.EnqueuedResources.NonEnqueuedScript
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
				'label'       => esc_html__( 'YouTube Video ID', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( 'i.e. HoV5yPpT0UA', 'hsph-ui-shortcodes' ),
				'attr'        => 'ytvideoid',
				'type'        => 'text',
			),
			array(
				'label'       => esc_html__( '3play File ID', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( 'i.e. 237258', 'hsph-ui-shortcodes' ),
				'attr'        => '3pfileid',
				'type'        => 'text',
			),
		);
		// We build the shortcake arguments array.
		$shortcode_ui_args = array(
			// The shortcode name.
			'label'         => esc_html__( 'YouTube player with 3Play transcript', 'hsph-ui-shortcodes' ),
			// The icon.
			'listItemImage' => '<img src="' . esc_url( HSPH_UI_SHORTCODES_ASSETS_URL . 'images/shortcake-preview/yt3play.png' ) . '" />',
			// Define where the shorcode can be added.
			'post_type'     => HSPH_UI_Shortcodes::get_shortcake_post_types(),
			// The shortcode attributes we previously registered.
			'attrs'         => $fields,
		);
		shortcode_ui_register_for_shortcode( $this->shortcode, $shortcode_ui_args );
	}
}
