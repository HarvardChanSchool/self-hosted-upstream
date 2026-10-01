<?php
/**
 * People Shortcode.
 *
 * @package    hpsh
 * @subpackage plugin-ui-shortcodes
 */

/**
 * HSPH_UI_Shortcode_People class.
 */
class HSPH_UI_Shortcode_People {

	/**
	 * The shortcode.
	 *
	 * (default value: 'people')
	 *
	 * @var    string
	 * @access public
	 */
	public $shortcode = 'people';

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
				'layout'     => '',
				'number'     => '',
				'categories' => '',
				'tags'       => '',
				'class'      => '',
			),
			$atts
		);

		// Extracting the shortcode attributes.
		$number     = $attributes['number'];
		$layout     = $attributes['layout'];
		$categories = $attributes['categories'];
		$tags       = $attributes['tags'];
		$class      = $attributes['class'];

		// Convert the input number to an appropriate value.
		// To mitigate performance issues we set number our upper limit posts_per_page to 50 instead of unlimited.
		// See https://wordpress.stackexchange.com/questions/294039/too-slow-when-using-both-tax-query-and-meta-query-both-in-wp-query.
		( ! isset( $number ) || ! is_numeric( $number ) ) ? $number = 50 : $number = intval( $number );

		// Determine if we have categories or tags selected.
		// $has_categories and has_tags will be null if the select box didn't render on the screen AND they will be '' if the user doesn't select anything.
		$has_categories = ( null !== $categories ) && ( '' !== $categories );
		$has_tags       = ( null !== $tags ) && ( '' !== $tags );

		// Creating our query.
		$query_args = array(
			'post_type'      => 'people',
			'posts_per_page' => $number,
			// Sort people by menu order, last name and then first name.
			'orderby'        => array(
				'menu_order' => 'ASC',
				'last_name'  => 'ASC', // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_value
				'first_name' => 'ASC', // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_value
			),
			'meta_query'     => array( // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_query
				'relation' => 'OR',
				array(
					'relation'   => 'AND',
					'last_name'  => array(
						'key'     => 'last_name',
						'compare' => 'EXISTS',
					),
					'first_name' => array(
						'key'     => 'first_name',
						'compare' => 'EXISTS',
					),
				),
				array(
					'last_name' => array(
						'key'     => 'last_name',
						'compare' => 'NOT EXISTS',
					),
				),
			),
		);

		if ( true === $has_categories && true === $has_tags ) {
			$query_args['tax_query'] = array(// phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_tax_query
				array(
					'taxonomy' => 'people_categories',
					'terms'    => $categories,
				),
				array(
					'taxonomy' => 'people_tags',
					'terms'    => $tags,
				),
			);
		} elseif ( $has_tags ) {
			$query_args['tax_query'] = array(// phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_tax_query
				array(
					'taxonomy' => 'people_tags',
					'terms'    => $tags,
				),
			);
		} elseif ( $has_categories ) {
			$query_args['tax_query'] = array(// phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_tax_query
				array(
					'taxonomy' => 'people_categories',
					'terms'    => $categories,
				),
			);
		}

		// The result query.
		$the_query = new WP_Query( $query_args );

		// We start buffering the page content.
		ob_start();

		?>
		<div class="hsph-bootstrap"><div class="<?php echo ( 'grid' === $layout ) ? 'people-grid ' : 'people-list '; ?>post-type-people-shortcode row">
		<?php

		while ( $the_query->have_posts() ) :
			$the_query->the_post();

			/*
			 * Include the Post-Format-specific template for the content.
			 * If you want to override this in a child theme, then include a file
			 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
			 */
			// People page layout option coming from ACF 'Enable / Disable Page Elements Features'.
			if ( 'grid' === $layout ) {
				set_query_var( 'hsph_is_people_shortcode', true );
				// Locates the template part on theme-main-2016.
				get_template_part( '/template-parts/content-people-grid', 'people' );
				// Locates the template part on affiliate-template-2016.
				get_template_part( 'template-parts/people/content-grid', '' );
			} else {
				set_query_var( 'hsph_is_people_shortcode', true );
				// Locates the template part on theme-main-2016.
				get_template_part( '/template-parts/content', 'people' );
				// Locates the template part on affiliate-template-2016.
				get_template_part( 'template-parts/people/content', '' );
			}

			// End the loop.
		endwhile;

		?>
		</div></div>

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

		// Check if categories is not empty.
		$people_cat_objs    = get_terms( 'people_categories' );
		$people_cats_exists = ! empty( $people_cat_objs ) && ! is_wp_error( $people_cat_objs );
		if ( $people_cats_exists && count( $people_cat_objs ) > 0 ) {
			$people_categories = array(
				'label'       => esc_html__( 'People categories', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( 'Show only people with the selected categories on the page', 'hsph-ui-shortcodes' ),
				'attr'        => 'categories',
				'type'        => 'term_select',
				'taxonomy'    => 'people_categories',
			);
		} else {
			$people_categories = null;
		}
		// Check if tags is not empty.
		$people_tag_objs    = get_terms( 'people_tags' );
		$people_tags_exists = ! empty( $people_tag_objs ) && ! is_wp_error( $people_tag_objs );
		if ( $people_tags_exists && count( $people_tag_objs ) > 0 ) {
			$people_tags = array(
				'label'       => esc_html__( 'People tags', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( 'Show only people with the selected tags on the page', 'hsph-ui-shortcodes' ),
				'attr'        => 'tags',
				'type'        => 'term_select',
				'taxonomy'    => 'people_tags',
			);
		} else {
			$people_tags = null;
		}

		// We build the shortcode attributes array.
		$fields = array(
			array(
				'label'       => esc_html__( 'Layout', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( 'Select page layout (list or grid)', 'hsph-ui-shortcodes' ),
				'attr'        => 'layout',
				'type'        => 'select',
				'options'     => array(
					'list' => esc_attr__( 'List', 'hsph-ui-shortcodes' ),
					'grid' => esc_attr__( 'Grid', 'hsph-ui-shortcodes' ),
				),
				'value'       => 'list', // We need to set a default value since required is not supported.
			),
			array(
				'label'       => esc_html__( 'Number of people', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( 'The number of people you want to display on your page (default value: unlimited)', 'hsph-ui-shortcodes' ),
				'attr'        => 'number',
				'type'        => 'text',
				'required'    => 'true',
				'value'       => '',
			),
			$people_categories,
			$people_tags,
		);
		// We build the shortcake arguments array.
		$shortcode_ui_args = array(
			// The shortcode name.
			'label'         => esc_html__( 'People', 'hsph-ui-shortcodes' ),
			// The icon.
			'listItemImage' => '<img src="' . esc_url( HSPH_UI_SHORTCODES_ASSETS_URL . 'images/shortcake-preview/people.png' ) . '" />',
			// Define where the shorcode can be added.
			'post_type'     => HSPH_UI_Shortcodes::get_shortcake_post_types(),
			// The shortcode attributes we previously registered.
			'attrs'         => $fields,
		);
		shortcode_ui_register_for_shortcode( $this->shortcode, $shortcode_ui_args );
	}
}
