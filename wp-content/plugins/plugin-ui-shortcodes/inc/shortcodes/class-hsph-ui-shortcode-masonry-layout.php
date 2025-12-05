<?php
/**
 * Mansonry Layout shortcode.
 *
 * @package    hpsh
 * @subpackage plugin-ui-shortcodes
 */

/**
 * HSPH_UI_Shortcode_Masonry_Layout class.
 */
class HSPH_UI_Shortcode_Masonry_Layout {


	/**
	 * The shortcode.
	 *
	 * (default value: 'masonry')
	 *
	 * @var    string
	 * @access public
	 */
	public $shortcode = 'masonry_layout';

	/**
	 * __construct function.
	 *
	 * @access public
	 * @return void
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'init' ) );
	}

	/**
	 * Checks whether the Masonry laout is enabled.
	 *
	 * @return bool
	 */
	public function masonry_layout_is_enabled() {
		$enabled = false;

		if ( function_exists( 'get_field' ) ) {
			$enabled = true === get_field( 'enable_masonry_layout', 'option' );
		}

		/**
		 * Filters whether the masonry layout is enabled.
		 *
		 * @param bool $enabled
		 */
		return apply_filters( 'hsph_ui_shortcodes_masonry_layout_is_enabled', $enabled );
	}

	/**
	 * Init function.
	 *
	 * @access public
	 * @return void
	 */
	public function init() {
		if ( $this->masonry_layout_is_enabled() ) {
			add_shortcode( $this->shortcode, array( $this, 'add_shortcode' ) );
			add_filter( 'manage_post_posts_columns', array( $this, 'admin_table_columns' ) );
			add_action( 'manage_post_posts_custom_column', array( $this, 'custom_columns' ), 10, 2 );
		}
	}

	/**
	 * Modify posts menu.
	 *
	 * @param array $columns The columns array.
	 * @access public
	 * @return array
	 */
	public function admin_table_columns( $columns ) {
		if ( $this->masonry_layout_is_enabled() ) {

			// Remove undesired columns.
			unset( $columns['author'] );
			unset( $columns['categories'] );
			unset( $columns['tags'] );

			// Add new columns.
			$columns['post']  = __( 'Message', 'hsph-ui-shortcodes' );
			$columns['image'] = __( 'Image', 'hsph-ui-shortcodes' );

		}
		return $columns;
	}

	/**
	 * Content of custom post columns.
	 *
	 * @param string  $column  Column title.
	 * @param integer $post_id Post id of post item.
	 *
	 * @return void
	 */
	public function custom_columns( $column, $post_id ) {
		$post_id = absint( $post_id );

		if ( ! $post_id ) {
			return;
		}

		switch ( $column ) {
			case 'post':
				the_content();
				break;
			case 'image':
				echo get_the_post_thumbnail( $post_id, array( 80, 80 ) );
				break;
		}
	}

	/**
	 * Add the shortcode
	 *
	 * @access public
	 * @return string The generated html code for the shortcode
	 */
	public function add_shortcode() {

		// Check if featured is enabled in Page Elmenets settings menu?
		if ( $this->masonry_layout_is_enabled() ) {

			// Creating our query.
			$query_args = array(
				'post_type'      => 'post',
				'posts_per_page' => 200, // phpcs:ignore WordPress.WP.PostsPerPage.posts_per_page_posts_per_page
			);

			// The result query.
			$the_query = new WP_Query( $query_args );

			ob_start();
			echo '<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>'; // phpcs:ignore WordPress.WP.EnqueuedResources.NonEnqueuedScript
			?>
			<div class="hsph-bootstrap">
				<div class="grid" data-masonry='{ "itemSelector": ".grid-item" }'>
					<div class="grid-sizer"></div>
			<?php

			while ( $the_query->have_posts() ) :
				$the_query->the_post();
				?>

				<!-- Grid item -->
				<div class="grid-item col-sm-6 col-md-3 p-0 mb-5">
					<div class="grid-item-container overflow-hidden shadow-sm m-2">
						<?php if ( '' !== get_the_post_thumbnail() ) : ?>
							<div class="">
								<?php the_post_thumbnail( '', array( 'class' => 'rounded-top' ) ); ?>
							</div>
						<?php endif; ?>

						<?php
						$content = apply_filters( 'the_content', get_the_content() ); // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound
						?>
						<?php if ( ! empty( $content ) ) : ?>
							<div class="py-2 px-3">
								<?php the_content(); ?>
							</div>
						<?php endif; ?>
					</div>
				</div>

				<?php
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
		return 'shortcode is not enabled on this theme';
	}
}
