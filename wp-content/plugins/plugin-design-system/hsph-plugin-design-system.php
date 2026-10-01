<?php
/**
 * HSPH Plugin Design System
 *
 * @package hpsh
 * @subpackage hsph-plugin-design-system
 */

/**
 * Plugin Name: HSPH Plugin Design System
 * Plugin URI:  http://www.hsph.harvard.edu/information-technology/
 * Description: Libraries and resources to implement the HSPH design system.
 * Version:     1.4.12
 * Author:      HSPH Webteam
 * Author URI:  http://www.hsph.harvard.edu/
 * Text Domain: hsph-plugin-design-system
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

$hsph_design_system_version = get_file_data( __FILE__, array( 'Version' => 'Version' ), 'plugin' );

define( 'HSPH_DESIGN_SYSTEM_ASSETS_URL', plugins_url( '/assets/', __FILE__ ) );
define( 'HSPH_PLUGIN_DESIGN_SYSTEM_DIR', plugin_dir_path( __FILE__ ) );
define( 'HSPH_PLUGIN_DESIGN_SYSTEM_INC_DIR', HSPH_PLUGIN_DESIGN_SYSTEM_DIR . 'inc/' );
define( 'HSPH_DESIGN_SYSTEM_PLUGIN_VERSION', $hsph_design_system_version['Version'] );

// Loading composer autoload to load DOM Parser Class.
require_once plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';

add_action(
	'wp_enqueue_scripts',
	function() {
		wp_register_style( 'hsph-bootstrap', HSPH_DESIGN_SYSTEM_ASSETS_URL . 'css/hsph-bootstrap-no-conflict.css', array(), HSPH_DESIGN_SYSTEM_PLUGIN_VERSION );
		wp_register_script( 'hsph-bootstrap', HSPH_DESIGN_SYSTEM_ASSETS_URL . 'js/hsph-bootstrap.bundle.min.js', array(), HSPH_DESIGN_SYSTEM_PLUGIN_VERSION, true );
		wp_register_style( 'hsph-fontawesome', HSPH_DESIGN_SYSTEM_ASSETS_URL . 'css/hsph-fontawesome.css', array(), HSPH_DESIGN_SYSTEM_PLUGIN_VERSION );
		wp_register_style( 'hsph-select2', HSPH_DESIGN_SYSTEM_ASSETS_URL . 'css/hsph-select2.css', array(), HSPH_DESIGN_SYSTEM_PLUGIN_VERSION );
	}
);

add_action(
	'admin_enqueue_scripts',
	function() {
		wp_register_style( 'hsph-bootstrap', HSPH_DESIGN_SYSTEM_ASSETS_URL . 'css/hsph-bootstrap-no-conflict.css', array(), HSPH_DESIGN_SYSTEM_PLUGIN_VERSION );
		wp_register_script( 'hsph-bootstrap', HSPH_DESIGN_SYSTEM_ASSETS_URL . 'js/hsph-bootstrap.bundle.min.js', array(), HSPH_DESIGN_SYSTEM_PLUGIN_VERSION, true );
		wp_register_style( 'hsph-fontawesome', HSPH_DESIGN_SYSTEM_ASSETS_URL . 'css/hsph-fontawesome.css', array(), HSPH_DESIGN_SYSTEM_PLUGIN_VERSION );
		wp_register_style( 'hsph-select2', HSPH_DESIGN_SYSTEM_ASSETS_URL . 'css/hsph-select2.css', array(), HSPH_DESIGN_SYSTEM_PLUGIN_VERSION );
	}
);


add_action(
	'init',
	function() {
		add_editor_style( HSPH_DESIGN_SYSTEM_ASSETS_URL . 'css/hsph-bootstrap-no-conflict.css?ver=' . HSPH_DESIGN_SYSTEM_PLUGIN_VERSION );
		add_editor_style( HSPH_DESIGN_SYSTEM_ASSETS_URL . 'css/hsph-fontawesome.css?ver=' . HSPH_DESIGN_SYSTEM_PLUGIN_VERSION );
		add_editor_style( HSPH_DESIGN_SYSTEM_ASSETS_URL . 'css/hsph-select2.css?ver=' . HSPH_DESIGN_SYSTEM_PLUGIN_VERSION );
	}
);

// Include plugin-design-system class.
require_once HSPH_PLUGIN_DESIGN_SYSTEM_INC_DIR . 'class-hsph-plugin-design-system.php';
