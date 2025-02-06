<?php
/**
 * HSPH Plugin Design System
 *
 * @package hpsh
 * @subpackage hsph-plugin-design-system
 */

use PHPHtmlParser\Dom;

/**
 * Plugin Name: HSPH Plugin Design System
 */
class Hsph_Plugin_Design_System {

	/**
	 * Displays paging on the page.
	 *
	 * @param array $links array of pagination links.
	 * @return void
	 */
	public static function display_pagination( $links = null ) {
		// Unless the links array is passed to this function, we create this array using paginate_links.
		$links = $links ?? paginate_links(
			array(
				'type'               => 'array',
				'before_page_number' => '<span class="screen-reader-text">' . esc_html__( 'Page ', 'hsph-plugin-design-system' ) . ' </span>',
			)
		);
		// Check that we got some pages to paginate.
		if ( ! is_array( $links ) || empty( $links ) ) {
			return;
		}
		// Extract the next and prev links from HTML markup.
		$next_link = ( new self() )->next_prev_links( $links, ( count( $links ) - 1 ) );
		$prev_link = ( new self() )->next_prev_links( $links, 0 );
		?>
		<div class="hsph-bootstrap">
			<nav class="pagination my-5">
				<h2 class="screen-reader-text"><?php esc_attr_e( 'Pagination navigation', 'hsph-plugin-design-system' ); ?></h2>
				<div class="page-next-prev">
					<?php if ( is_string( $prev_link ) ) : ?>
						<a class="page-link" href="<?php echo esc_url( $prev_link ); ?>" aria-label="<?php esc_attr_e( 'Previous page', 'hsph-plugin-design-system' ); ?>"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>
					<?php else : ?>
						<span class="page-link disabled" aria-hidden="true"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
					<?php endif; ?>
				</div>
				<div class="page-items">
					<?php foreach ( $links as $link ) : ?>
						<?php
						// Parse html string into an object we can work with.
						$dom = new Dom();
						$dom->loadStr( $link );
						// set current link to the <a> tag or the <span> tag (on the current page).
						$current_link = $dom->find( 'a' )[0] ?? $dom->find( 'span' )[0];
						// Set class to 'page-link' and only on the current page add 'active' to it.
						$current_link->setAttribute( 'class', strpos( $current_link->class, 'current' ) ? 'page-link active' : 'page-link' );
						echo $current_link->outerHtml; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped, WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase
						?>
					<?php endforeach; ?>
				</div>
				<div class="page-next-prev">
					<?php if ( is_string( $next_link ) ) : ?>
						<a class="page-link" href="<?php echo esc_url( $next_link ); ?>" aria-label="<?php esc_attr_e( 'Next page', 'hsph-plugin-design-system' ); ?>"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>
					<?php else : ?>
						<span class="page-link disabled" aria-hidden="true"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
					<?php endif; ?>
				</div>
			</nav>
		</div>
		<?php
	}


	/**
	 * Extract the next and previous page url links from the WordPress array of pagination html tags.
	 *
	 * @param array   $links    Array of pagination links passed by reference.
	 * @param integer $position Should be 0 to get the previous page link and last element to get the next link.
	 * @return false|string     Return false if the $position was not a prev/next link. Otherwise return the href attr value.
	 */
	private function next_prev_links( array &$links, int $position ) {
		if ( 0 === $position ) {
			$class = 'prev page-numbers';
		} else {
			$class = 'next page-numbers';
		}
		// First and last page don't contain next/prev links so we check if we have one.
		if ( isset( $links[ $position ] ) && is_int( strpos( $links[ $position ], $class ) ) ) {

			// Creating a DOM object for easier outputting.
			$dom = new Dom();
			$dom->loadStr( $links[ $position ] );

			// find the <a> tag in the dom object.
			$link = $dom->find( 'a' )[0];

			// Extract href.
			if ( ! is_null( $link->href ) ) {
				$link = $link->href;
			} else {
				$link = false;
			}
			unset( $links[ $position ] );
		} else {
			$link = false;
		}
		return $link;
	}

}
