<?php
/**
 * Plugin init.
 *
 * @package    hpsh
 * @subpackage plugin-ui-shortcodes
 */

/**
 * HSPH_UI_Shortcodes class.
 */
class HSPH_UI_Shortcodes {


	/**
	 * __construct function.
	 *
	 * @access public
	 * @return void
	 */
	public function init() {
		add_action( 'init', array( $this, 'add_editor_style' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts_and_styles' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_scripts_and_styles' ) );
		add_action( 'wp_enqueue_editor', array( $this, 'enqueue_editor_scripts_and_styles' ) );
	}

	/**
	 * Add the shortcodes scripts and styles to the current theme
	 *
	 * @access public
	 * @return void
	 */
	public function enqueue_scripts_and_styles() {
		wp_enqueue_style( 'hsph-ui-shortcodes-style', HSPH_UI_SHORTCODES_ASSETS_URL . 'css/hsph-ui-shortcodes.css', array( 'dashicons', 'hsph-bootstrap' ), HSPH_UI_SHORTCODES_VERSION );
		wp_enqueue_script( 'hsph-ui-shortcodes-scripts', HSPH_UI_SHORTCODES_ASSETS_URL . 'js/hsph-ui-shortcodes.js', array( 'jquery-ui-tabs', 'jquery-ui-accordion' ), HSPH_UI_SHORTCODES_VERSION, false );
	}

	/**
	 * Add scripts to the WP admin.
	 *
	 * @access public
	 * @return void
	 */
	public function enqueue_admin_scripts_and_styles() {
		wp_enqueue_script( 'hsph-ui-shortcodes-admin-scripts', HSPH_UI_SHORTCODES_ASSETS_URL . 'js/hsph-ui-shortcodes-admin.js', array(), HSPH_UI_SHORTCODES_VERSION, false );
		$hsph_shortcode_vars = array(
			'css_path' => HSPH_UI_SHORTCODES_ASSETS_URL . 'css/hsph-ui-shortcodes.css?v=' . HSPH_UI_SHORTCODES_VERSION,
		);
		wp_localize_script( 'hsph-ui-shortcodes-admin-scripts', 'hsph_shortcode_vars', $hsph_shortcode_vars );
	}

	/**
	 * Add the shortcodes styles to the editor so we get a nice preview with shortcake
	 *
	 * @access public
	 * @return void
	 */
	public function add_editor_style() {
		add_editor_style( HSPH_UI_SHORTCODES_ASSETS_URL . 'css/hsph-ui-shortcodes.css?ver=' . HSPH_UI_SHORTCODES_VERSION );
	}

	/**
	 * Return the post types to which shortcake UI will be added
	 *
	 * @access public
	 * @static
	 * @return array List of post types for which shortcake is available.
	 */
	public static function get_shortcake_post_types() {
		$post_types = array( 'post', 'page' );
		// Allow plugins to add new post types.
		return apply_filters( 'hsph_ui_shortcodes_post_types', $post_types );
	}

	/**
	 * Add the plugin admin scripts styles to the current theme
	 *
	 * @access public
	 * @return void
	 */
	public function enqueue_editor_scripts_and_styles() {
		wp_enqueue_style( 'hsph-ui-shortcodes-editor-style', HSPH_UI_SHORTCODES_ASSETS_URL . 'css/shortcake-richtext.css', array( 'dashicons' ), HSPH_UI_SHORTCODES_VERSION );
		wp_enqueue_script( 'hsph-ui-shortcodes-editor-richtext', HSPH_UI_SHORTCODES_ASSETS_URL . 'js/shortcake-richtext.js', array( 'jquery' ), HSPH_UI_SHORTCODES_VERSION, true );
	}
}
