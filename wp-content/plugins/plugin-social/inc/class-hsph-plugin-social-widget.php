<?php
/**
 * HSPH Plugin Social Widget
 *
 * @package hpsh
 * @subpackage hsph-plugin-social
 */

/**
 * HSPH_Plugin_Social_Widget Class.
 */
class HSPH_Plugin_Social_Widget {

	/**
	 * Action and filters Hooks.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'widgets_init', array( $this, 'widgets_init' ), 99 );
	}

	/**
	 * Unregister and Register Widgets.
	 *
	 * @return void
	 */
	public function widgets_init() {

		// Load the individual widget files.
		require_once plugin_dir_path( __FILE__ ) . 'widgets/class-hsph-plugin-social-widget.php';
		register_widget( 'HSPH_Plugin_Affiliate_Template_Widget_HSPH_Social' );

	}
}
