<?php
/**
 * Purges the cache based on a variety of WordPress events.
 *
 * @package Pantheon_Advanced_Page_Cache
 */

namespace Pantheon_Advanced_Page_Cache;

/**
 * Purges the appropriate surrogate key based on the event.
 */
class Purger {
	/**
	 * Purge surrogate keys associated with a post being updated.
	 *
	 * @param integer $post_id ID for the modified post.
	 * @param object  $post    The post object.
	 */
	public static function action_wp_insert_post( $post_id, $post ) {
		if ( 'publish' !== $post->post_status ) {
			return;
		}
		self::purge_post_with_related( $post );
	}

	/**
	 * Purge surrogate keys associated with a post being published or unpublished.
	 *
	 * @param string  $new_status New status for the post.
	 * @param string  $old_status Old status for the post.
	 * @param WP_Post $post Post object.
	 */
	public static function action_transition_post_status( $new_status, $old_status, $post ) {
		if ( 'publish' !== $new_status && 'publish' !== $old_status ) {
			return;
		}
		self::purge_post_with_related( $post );
		if ( 'publish' === $old_status ) {
			return;
		}
		// Targets 404 pages that could be cached with no surrogate keys (i.e.
		// a drafted post going live after the 404 has been cached).
		self::clear_post_path( $post );
	}


	/**
	 * Purge the cache for a given post's path
	 *
	 * @param WP_Post $post Post object.
	 * 
	 * @since 2.1.1-dev
	 */
	public static function clear_post_path( $post ) {
		$post_path = get_permalink( $post->ID );
		$parsed_url = parse_url( $post_path );
		$path = $parsed_url['path'];
		$paths = [ trailingslashit( $path ), untrailingslashit( $path ) ];
		
		/**
		 * Paths possibly without surrogate keys purges 
		 *
		 * @param array $paths    paths to clear.
		 */
		$paths = apply_filters( 'pantheon_clear_post_path', $paths );
		pantheon_wp_clear_edge_paths( $paths );
	}

	/**
	 * Purge surrogate keys associated with a post being deleted.
	 *
	 * @param integer $post_id ID for the post to be deleted.
	 */
	public static function action_before_delete_post( $post_id ) {
		$post = get_post( $post_id );
		self::purge_post_with_related( $post );
	}

	/**
	 * Purge surrogate keys associated with an attachment being deleted.
	 *
	 * @param integer $post_id ID for the modified attachment.
	 */
	public static function action_delete_attachment( $post_id ) {
		$post = get_post( $post_id );
		self::purge_post_with_related( $post );
	}

	/**
	 * Purge the post's surrogate key when the post cache is cleared.
	 *
	 * @param integer $post_id ID for the modified post.
	 */
	public static function action_clean_post_cache( $post_id ) {
		$type = get_post_type( $post_id );

		/**
		 * Allow specific post types to ignore the purge process.
		 *
		 * @param array $ignored_post_types Post types to ignore.
		 * @return array
		 * @since 1.5.0
		 */
		$ignored_post_types = apply_filters( 'pantheon_purge_post_type_ignored', [ 'revision' ] );

		if ( $type && in_array( $type, $ignored_post_types, true ) ) {
			return;
		}

		$keys = [
			'post-' . $post_id,
			'rest-post-' . $post_id,
			'post-huge',
			'rest-post-huge',
		];

		$keys = pantheon_wp_prefix_surrogate_keys_with_blog_id( $keys );
		/**
		 * Surrogate keys purged when clearing post cache.
		 *
		 * @param array $keys    Surrogate keys.
		 * @param array $post_id ID for purged post.
		 */
		$keys = apply_filters( 'pantheon_purge_clean_post_cache', $keys, $post_id );
		pantheon_wp_clear_edge_keys( $keys );
	}

	/**
	 * Purge surrogate keys associated with a term being created.
	 *
	 * @param integer $term_id  ID for the created term.
	 * @param int     $tt_id    Term taxonomy ID.
	 * @param string  $taxonomy Taxonomy slug.
	 */
	public static function action_created_term( $term_id, $tt_id, $taxonomy ) {
		self::purge_term( $term_id );
		$keys = [ 'rest-' . $taxonomy . '-collection' ];
		$keys = pantheon_wp_prefix_surrogate_keys_with_blog_id( $keys );
		/**
		 * Surrogate keys purged when creating a new term.
		 *
		 * @param array  $keys     Surrogate keys.
		 * @param array  $term_id  ID for new term.
		 * @param array  $tt_id    Term taxonomy ID for new term.
		 * @param string $taxonomy Taxonomy for the new term.
		 */
		$keys = apply_filters( 'pantheon_purge_create_term', $keys, $term_id, $tt_id, $taxonomy );
		pantheon_wp_clear_edge_keys( $keys );
	}

	/**
	 * Purge surrogate keys associated with a term being edited.
	 *
	 * @param integer $term_id ID for the edited term.
	 */
	public static function action_edited_term( $term_id ) {
		self::purge_term( $term_id );
	}

	/**
	 * Purge surrogate keys associated with a term being deleted.
	 *
	 * @param integer $term_id ID for the deleted term.
	 */
	public static function action_delete_term( $term_id ) {
		self::purge_term( $term_id );
	}

	/**
	 * Purge the term's archive surrogate key when the term is modified.
	 *
	 * @param integer $term_ids One or more IDs of modified terms.
	 */
	public static function action_clean_term_cache( $term_ids ) {
		$keys     = [];
		$term_ids = is_array( $term_ids ) ? $term_ids : [ $term_ids ];
		foreach ( $term_ids as $term_id ) {
			$keys[] = 'term-' . $term_id;
			$keys[] = 'rest-term-' . $term_id;
		}
		$keys[] = 'term-huge';
		$keys[] = 'rest-term-huge';
		$keys   = pantheon_wp_prefix_surrogate_keys_with_blog_id( $keys );
		/**
		 * Surrogate keys purged when clearing term cache.
		 *
		 * @param array $keys     Surrogate keys.
		 * @param array $term_ids IDs for purged terms.
		 */
		$keys = apply_filters( 'pantheon_purge_clean_term_cache', $keys, $term_ids );
		pantheon_wp_clear_edge_keys( $keys );
	}

	/**
	 * Purge surrogate keys when an approved comment is updated.
	 *
	 * @param integer    $id      The comment ID.
	 * @param WP_Comment $comment Comment object.
	 */
	public static function action_wp_insert_comment( $id, $comment ) {
		if ( 1 !== (int) $comment->comment_approved ) {
			return;
		}
		$keys = [
			'rest-comment-' . $comment->comment_ID,
			'rest-comment-collection',
			'rest-comment-huge',
		];
		$keys = pantheon_wp_prefix_surrogate_keys_with_blog_id( $keys );
		/**
		 * Surrogate keys purged when inserting a new comment.
		 *
		 * @param array      $keys    Surrogate keys.
		 * @param integer    $id      Comment ID.
		 * @param WP_Comment $comment Comment to be inserted.
		 */
		$keys = apply_filters( 'pantheon_purge_insert_comment', $keys, $id, $comment );
		pantheon_wp_clear_edge_keys( $keys );
	}

	/**
	 * Purge surrogate keys when a comment is approved or unapproved.
	 *
	 * @param int|string $new_status The new comment status.
	 * @param int|string $old_status The old comment status.
	 * @param object     $comment    The comment data.
	 */
	public static function action_transition_comment_status( $new_status, $old_status, $comment ) {
		$keys = [
			'rest-comment-' . $comment->comment_ID,
			'rest-comment-collection',
			'rest-comment-huge',
		];
		$keys = pantheon_wp_prefix_surrogate_keys_with_blog_id( $keys );
		/**
		 * Surrogate keys purged when transitioning a comment status.
		 *
		 * @param array      $keys       Surrogate keys.
		 * @param string     $new_status New comment status.
		 * @param string     $old_status Old comment status.
		 * @param WP_Comment $comment    Comment being transitioned.
		 */
		$keys = apply_filters( 'pantheon_purge_transition_comment_status', $keys, $new_status, $old_status, $comment );
		pantheon_wp_clear_edge_keys( $keys );
	}

	/**
	 * Purge the comment's surrogate key when the comment is modified.
	 *
	 * @param integer $comment_id Modified comment id.
	 */
	public static function action_clean_comment_cache( $comment_id ) {
		$keys = [
			'rest-comment-' . $comment_id,
			'rest-comment-huge',
		];
		$keys = pantheon_wp_prefix_surrogate_keys_with_blog_id( $keys );
		/**
		 * Surrogate keys purged when cleaning comment cache.
		 *
		 * @param array   $keys Surrogate keys.
		 * @param integer $id   Comment ID.
		 */
		$keys = apply_filters( 'pantheon_purge_clean_comment_cach', $keys, $comment_id );
		pantheon_wp_clear_edge_keys( $keys );
	}

	/**
	 * Purge the surrogate keys associated with a post being modified.
	 *
	 * @param object $post Object representing the modified post.
	 */
	private static function purge_post_with_related( $post ) {
		/**
		 * Allow specific post types to ignore the purge process.
		 *
		 * @param array $ignored_post_types Post types to ignore.
		 * @return array
		 * @since 1.5.0
		 */
		$ignored_post_types = apply_filters( 'pantheon_purge_post_type_ignored', [ 'revision' ] );

		if ( in_array( $post->post_type, $ignored_post_types, true ) ) {
			return;
		}

		$keys = [
			'post-' . $post->ID,
			$post->post_type . '-archive',
			'rest-' . $post->post_type . '-collection',
			'home',
			'front',
			'404',
			'feed',
			'post-huge',
		];

		if ( post_type_supports( $post->post_type, 'author' ) ) {
			$keys[] = 'user-' . $post->post_author;
			$keys[] = 'user-huge';
		}

		if ( post_type_supports( $post->post_type, 'comments' ) ) {
			$keys[] = 'rest-comment-post-' . $post->ID;
			$keys[] = 'rest-comment-post-huge';
		}

		$taxonomies = wp_list_filter(
			get_object_taxonomies( $post->post_type, 'objects' ),
			[ 'public' => true ]
		);

		foreach ( $taxonomies as $taxonomy ) {
			$terms = get_the_terms( $post, $taxonomy->name );
			if ( $terms ) {
				foreach ( $terms as $term ) {
					$keys[] = 'term-' . $term->term_id;
				}
				$keys[] = 'term-huge';
			}
		}

		$keys = pantheon_wp_prefix_surrogate_keys_with_blog_id( $keys );
		/**
		 * Related surrogate keys purged when purging a post.
		 *
		 * @param array   $keys Surrogate keys.
		 * @param WP_Post $post Post object.
		 */
		$keys = apply_filters( 'pantheon_purge_post_with_related', $keys, $post );
		pantheon_wp_clear_edge_keys( $keys );
	}

	/**
	 * Purge the surrogate keys associated with a term being modified.
	 *
	 * @param integer $term_id ID for the modified term.
	 */
	private static function purge_term( $term_id ) {
		$keys = [
			'term-' . $term_id,
			'rest-term-' . $term_id,
			'post-term-' . $term_id,
			'term-huge',
			'rest-term-huge',
			'post-term-huge',
		];
		$keys = pantheon_wp_prefix_surrogate_keys_with_blog_id( $keys );
		/**
		 * Surrogate keys purged when purging a term.
		 *
		 * @param array   $keys    Surrogate keys.
		 * @param integer $term_id Term ID.
		 */
		$keys = apply_filters( 'pantheon_purge_term', $keys, $term_id );
		pantheon_wp_clear_edge_keys( $keys );
	}


	/**
	 * Purge a variety of surrogate keys when a user is modified.
	 *
	 * @param integer $user_id ID for the modified user.
	 */
	public static function action_clean_user_cache( $user_id ) {
		$keys = [
			'user-' . $user_id,
			'rest-user-' . $user_id,
			'user-huge',
			'rest-user-huge',
		];
		$keys = pantheon_wp_prefix_surrogate_keys_with_blog_id( $keys );
		/**
		 * Surrogate keys purged when clearing user cache.
		 *
		 * @param array $keys    Surrogate keys.
		 * @param array $user_id ID for purged user.
		 */
		$keys = apply_filters( 'pantheon_purge_clean_user_cache', $keys, $user_id );
		pantheon_wp_clear_edge_keys( $keys );
	}

	/**
	 * Purge a variety of surrogate keys when an option is modified.
	 *
	 * @param string $option Name of the updated option.
	 */
	public static function action_updated_option( $option ) {
		if ( ! function_exists( 'get_registered_settings' ) ) {
			return;
		}
		$settings = get_registered_settings();
		if ( empty( $settings[ $option ] ) || empty( $settings[ $option ]['show_in_rest'] ) ) {
			return;
		}
		$rest_name = ! empty( $settings[ $option ]['show_in_rest']['name'] ) ? $settings[ $option ]['show_in_rest']['name'] : $option;
		$keys      = [
			'rest-setting-' . $rest_name,
			'rest-setting-huge',
		];
		$keys = pantheon_wp_prefix_surrogate_keys_with_blog_id( $keys );
		/**
		 * Surrogate keys purged when updating an option cache.
		 *
		 * @param array  $keys   Surrogate keys.
		 * @param string $option Option name.
		 */
		$keys = apply_filters( 'pantheon_purge_updated_option', $keys, $option );
		pantheon_wp_clear_edge_keys( $keys );
	}
}
