<?php
/**
 * HSPH Plugin Google Analytics Tracking
 *
 * @package hpsh
 * @subpackage hsph-plugin-google-analytics-tracking
 */

/**
 * Plugin Name: HSPH Plugin Google Analytics Tracking
 * Plugin URI:  http://www.hsph.harvard.edu/information-technology/
 * Description: Adds the Google Analytics tracking code to the header of the site.
 * Version:     1.0.1
 * Author:      HSPH Webteam
 * Author URI:  http://www.hsph.harvard.edu/
 * Text Domain: hsph-plugin-google-analytics-tracking
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

// Load the Tracking Display code.
require_once plugin_dir_path( __FILE__ ) . 'inc/class-hsph-plugin-google-analytics-tracking-display.php';
$hsph_plugin_google_analytics_tracking_display = new HSPH_Plugin_Google_Analytics_Tracking_Display();

$hsph_plugin_google_analytics_tracking_display->init();

// Load the settings and options pages depending on network install or not.
require_once plugin_dir_path( __FILE__ ) . 'inc/class-hsph-plugin-google-analytics-tracking-settings.php';
$hsph_plugin_google_analytics_tracking_settings = new HSPH_Plugin_Google_Analytics_Tracking_Settings();

$hsph_plugin_google_analytics_tracking_settings->init();
