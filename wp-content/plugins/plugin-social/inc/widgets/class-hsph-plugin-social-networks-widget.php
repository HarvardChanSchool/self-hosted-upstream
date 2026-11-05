<?php
/**
 * A widget to display links to the user's social media profiles.
 *
 * @package hpsh
 * @subpackage hsph-plugin-social
 */

/**
 * HSPH_Plugin_Social_Networks_Widget Class.
 */
class HSPH_Plugin_Social_Networks_Widget extends WP_Widget {

	/**
	 * Constructor - Pass data to the parent constructor.
	 *
	 * @return void
	 */
	public function __construct() {
		parent::__construct(
			'hsph_social_widget',
			__( 'Social Profiles for Sites (HSPH)', 'hsph-plugin-social' ),
			array(
				'description' => __( 'Displays a list of social profile icons.', 'hsph-plugin-social' ),
			)
		);
	}

	/**
	 * Display the widget.
	 *
	 * @param mixed $args Display arguments including 'before_title', 'after_title', 'before_widget', and 'after_widget'.
	 * @param mixed $instance The settings for the particular instance of the widget.
	 * @return void
	 */
	public function widget( $args, $instance ) {

		$menu = HSPH_Plugin_Social_Networks::get_the_social_network_menu();

		if ( ! empty( $menu ) ) {
			echo $args['before_widget'] . $menu . $args['after_widget']; //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
	}

	/**
	 * Outputs the settings update form.
	 *
	 * @param array $instance The settings for the particular instance of the widget.
	 * @return void
	 */
	public function form( $instance ) {
		$edit_url = admin_url( 'options-general.php?page=acf-options-social-media' );
		echo '<p>Social media profile icons can be edited in <a href="' . esc_url( $edit_url ) . '" target="_blank">Settings>Social Media</a>.</p>';
	}
}
