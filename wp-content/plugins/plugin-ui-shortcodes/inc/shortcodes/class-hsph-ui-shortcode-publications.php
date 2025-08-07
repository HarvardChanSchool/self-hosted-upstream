<?php
/**
 * Publications Shortcode.
 *
 * @package    hpsh
 * @subpackage plugin-ui-shortcodes
 */

/**
 * HSPH_UI_Shortcode_Publications class.
 */
class HSPH_UI_Shortcode_Publications {

	/**
	 * The shortcode.
	 *
	 * (default value: 'people')
	 *
	 * @var    string
	 * @access public
	 */
	public $shortcode = 'publications-list';

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
	 * @return string The generated html code for the shortcode
	 */
	public function add_shortcode( $atts ) {

		$attributes = shortcode_atts(
			array(
				'number' => '',
				'topics' => '',
				'class'  => '',
			),
			$atts
		);

		// Extracting the shortcode attributes.
		$number = $attributes['number'];
		$topics = $attributes['topics'];
		$class  = $attributes['class'];

		// Convert the input number to an appropriate value.
		// To mitigate performance issues we set the number of our upper limit posts_per_page to 100 instead of unlimited.
		// See https://wordpress.stackexchange.com/questions/294039/too-slow-when-using-both-tax-query-and-meta-query-both-in-wp-query.
		( ! isset( $number ) || ! is_numeric( $number ) ) ? $number = 10 : $number = intval( $number );
		$number > 100 ? $number                                     = 100 : $number;

		// Determine if we have topics selected.
		$has_topics = ( null !== $topics ) && ( '' !== $topics );

		// Creating our query.
		$query_args = array(
			'post_type'      => 'hsph_publication',
			'posts_per_page' => $number,
		);

		if ( true === $has_topics ) {
			$query_args = array(
				'post_type'      => 'hsph_publication',
				'posts_per_page' => $number,
				'tax_query'      => array(// phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_tax_query
					array(
						'taxonomy' => 'hsph_publication_topic',
						'terms'    => $topics,
					),
				),
			);
		}

		// The result query.
		$the_query = new WP_Query( $query_args );

		// We start buffering the page content.
		ob_start();

		?>
		<div class="hsph-bootstrap">
			<div class="publications-shortcode publication-list list-group my-5">
				<?php

				while ( $the_query->have_posts() ) :
					$the_query->the_post();

					/*
					* Include the Post-Format-specific template for the content.
					* If you want to override this in a child theme, then include a file
					* called content-___.php (where ___ is the Post Format name) and that will be used instead.
					*/
					// Main theme call.
					get_template_part( '/template-parts/content', 'publication' );
					// Affiliate Theme call.
					get_template_part( 'template-parts/publications/content', '' );

					// End the loop.
				endwhile;

				?>
			</div>
		</div>

		<?php
		$shortcode_content = ob_get_clean();

		/* Restore original Post Data */
		wp_reset_postdata();

		// Return the generated html for the shortcode.
		return $shortcode_content;
	}

	/**
	 * Add the shortcake UI integration for the shortcode.
	 *
	 * @access public
	 * @return void
	 */
	public function register_shortcode_ui() {

		// We build the shortcode attributes array.
		$fields = array(
			array(
				'label'       => esc_html__( 'Maximum number of publications', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( 'The number of publications you want to display on your page or post(default value: 10)', 'hsph-ui-shortcodes' ),
				'attr'        => 'number',
				'type'        => 'text',
				'required'    => 'true',
				'value'       => '10',
			),
			array(
				'label'       => esc_html__( 'Topic', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( 'Select the publication topic you want to display on your page or post (default value: all)', 'hsph-ui-shortcodes' ),
				'attr'        => 'topics',
				'type'        => 'term_select',
				'taxonomy'    => 'hsph_publication_topic',
			),
		);
		// We build the shortcake arguments array.
		$shortcode_ui_args = array(
			// The shortcode name.
			'label'         => esc_html__( 'Publications', 'hsph-ui-shortcodes' ),
			// The icon.
			'listItemImage' => '<img src="' . esc_url( HSPH_UI_SHORTCODES_ASSETS_URL . 'images/shortcake-preview/publications.png' ) . '" />',
			// Define where the shorcode can be added.
			'post_type'     => HSPH_UI_Shortcodes::get_shortcake_post_types(),
			// The shortcode attributes we previously registered.
			'attrs'         => $fields,
		);
		shortcode_ui_register_for_shortcode( $this->shortcode, $shortcode_ui_args );
	}
}
