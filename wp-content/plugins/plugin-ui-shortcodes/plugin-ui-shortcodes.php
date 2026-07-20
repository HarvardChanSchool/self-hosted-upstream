<?php
/**
 * HSPH Plugin UI Shortcodes
 *
 * @package    hpsh
 * @subpackage plugin-ui-shortcodes
 */

/**
 * Plugin Name: HSPH Plugin UI Shortcodes
 * Plugin URI: http://www.hsph.harvard.edu/it
 * Description: A set of UI Shortcodes for use around the site.
 * Author: HSPH WebTeam
 * Version: 1.6.11
 *
 * Author URI: http://www.hsph.harvard.edu/it
 */

define( 'HSPH_UI_SHORTCODES_VERSION', '1.6.11' );

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'HSPH_UI_SHORTCODES_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
define( 'HSPH_UI_SHORTCODES_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'HSPH_UI_SHORTCODES_ASSETS_URL', plugin_dir_url( __FILE__ ) . 'assets/' );
define( 'HSPH_UI_SHORTCODES_ASSETS_PATH', plugin_dir_path( __FILE__ ) . 'assets/' );
define( 'HSPH_UI_SHORTCODES_INC_PATH', plugin_dir_path( __FILE__ ) . 'inc/' );

// Adding ACF local json support.
require HSPH_UI_SHORTCODES_INC_PATH . 'acf.php';

// We init the plugin which is mostly queuing CSS.
require HSPH_UI_SHORTCODES_INC_PATH . 'class-hsph-ui-shortcodes.php';
$hsph_ui_shortcodes = new HSPH_UI_Shortcodes();
$hsph_ui_shortcodes->init();

// We add the Audience Menu shortcode [hsph_audience_menu].
require HSPH_UI_SHORTCODES_INC_PATH . 'shortcodes/class-hsph-ui-shortcode-audience-menu.php';
$hsph_ui_shortcode_audience_menu = new HSPH_UI_Shortcode_Audience_Menu();

// We add the Expandable Region shortcode [expandable].
require HSPH_UI_SHORTCODES_INC_PATH . 'shortcodes/class-hsph-ui-shortcode-expandable.php';
$hsph_ui_shortcode_expandable = new HSPH_UI_Shortcode_Expandable();

// We add the Accordion shortcode [accordion][aitem][/aitem][/accordion].
require HSPH_UI_SHORTCODES_INC_PATH . 'shortcodes/class-hsph-ui-shortcode-accordion.php';
require HSPH_UI_SHORTCODES_INC_PATH . 'shortcodes/class-hsph-ui-shortcode-accordion-item.php';
$hsph_ui_shortcode_accordion      = new HSPH_UI_Shortcode_Accordion();
$hsph_ui_shortcode_accordion_item = new HSPH_UI_Shortcode_Accordion_Item();

// We add the Tabs shortcode [tabarea][tab][/tab][/tabarea].
require HSPH_UI_SHORTCODES_INC_PATH . 'shortcodes/class-hsph-ui-shortcode-tabarea.php';
require HSPH_UI_SHORTCODES_INC_PATH . 'shortcodes/class-hsph-ui-shortcode-tab.php';
$hsph_ui_shortcode_tabarea = new HSPH_UI_Shortcode_Tabarea();
$hsph_ui_shortcode_tab     = new HSPH_UI_Shortcode_Tab( $hsph_ui_shortcode_tabarea );

// We add the Content box shortcode [cbox].
require HSPH_UI_SHORTCODES_INC_PATH . 'shortcodes/class-hsph-ui-shortcode-cbox.php';
$hsph_ui_shortcode_cbox = new HSPH_UI_Shortcode_Cbox();

// We add the Audience Menu shortcode [hsph_call2action_button].
require HSPH_UI_SHORTCODES_INC_PATH . 'shortcodes/class-hsph-ui-shortcode-call2action-button.php';
$hsph_ui_shortcode_call2action_button = new HSPH_UI_Shortcode_Call2action_Button();

// We add the Qualtrics embed shortcode [qualtrics].
require HSPH_UI_SHORTCODES_INC_PATH . 'shortcodes/class-hsph-ui-shortcode-qualtrics.php';
$hsph_ui_shortcode_qualtrics = new HSPH_UI_Shortcode_Qualtrics();

// We add the Altmetric embed shortcode [altmetric].
require HSPH_UI_SHORTCODES_INC_PATH . 'shortcodes/class-hsph-ui-shortcode-altmetric.php';
$hsph_ui_shortcode_altmetric = new HSPH_UI_Shortcode_Altmetric();

// We add the Youtube 3Play Transcript embed shortcode [yt3ptranscript].
require HSPH_UI_SHORTCODES_INC_PATH . 'shortcodes/class-hsph-ui-shortcode-yt3ptranscript.php';
$hsph_ui_shortcode_yt3ptranscript = new HSPH_UI_Shortcode_Yt3ptranscript();

// We add the Call to Action Bar [hsph_call2action_Bar].
require HSPH_UI_SHORTCODES_INC_PATH . 'shortcodes/class-hsph-ui-shortcode-call2action-bar.php';
$hsph_ui_shortcode_call2action_bar = new HSPH_UI_Shortcode_Call2action_Bar();
// We add the Big Numbers shortcode [big_numbers].
require HSPH_UI_SHORTCODES_INC_PATH . 'shortcodes/class-hsph-ui-shortcode-big-numbers.php';
$hsph_ui_shortcode_big_numbers = new HSPH_UI_Shortcode_Big_Numbers();

// We add the Publications shortcode [publications] on main theme and afflaite only AND when the publications plugin is active.
if ( ( false !== strpos( get_stylesheet(), 'theme-affiliate-template-2016' ) || false !== strpos( get_stylesheet(), 'theme-main-2016' ) ) && ( ( true === is_plugin_active( 'plugin-pubmed-publications/hsph-plugin-pubmed-publications.php' ) ) ) ) {
	require HSPH_UI_SHORTCODES_INC_PATH . 'shortcodes/class-hsph-ui-shortcode-publications.php';
	$hsph_ui_shortcode_publications = new HSPH_UI_Shortcode_Publications();
}

// We add the People shortcode [people] on main theme and afflaite only.
if ( false !== strpos( get_stylesheet(), 'theme-affiliate-template-2016' ) || false !== strpos( get_stylesheet(), 'theme-main-2016' ) ) {
	require HSPH_UI_SHORTCODES_INC_PATH . 'shortcodes/class-hsph-ui-shortcode-people.php';
	$hsph_ui_shortcode_people = new HSPH_UI_Shortcode_People();
}

// include masonry layout class.
require HSPH_UI_SHORTCODES_INC_PATH . 'shortcodes/class-hsph-ui-shortcode-masonry-layout.php';
$hsph_ui_shortcode_masonry_layout = new HSPH_UI_Shortcode_Masonry_Layout();
