<?php
/**
 * Basic configuration for the pages needed
 *
 * @package hpsh
 * @subpackage plugin-harvard-key
 */

/**
 * Harvard_Key_Page_Protect class.
 */
class Harvard_Key_Page_Protect {
	/**
	 * Groups list to be used in the group fields.
	 *
	 * @var array
	 */
	public $groups_list = array();

	/**
	 * Init function.
	 * Add actions, hooks and filters
	 *
	 * @access public
	 * @return void
	 */
	public function init() {
		$this->logger = new Harvard_Key_Logger();
		// Individual Key protection pages.
		add_action( 'save_post', array( $this, 'save_post_data' ) );
		add_action( 'add_meta_boxes', array( $this, 'add_meta_box' ) );

		// add pages columns.
		add_filter( 'manage_pages_columns', array( $this, 'manage_pages_columns' ) );
		add_action( 'manage_pages_custom_column', array( $this, 'manage_pages_custom_column' ), 10, 2 );

		if ( ! is_admin() ) {
			// pre get posts remove.
			add_action( 'pre_get_posts', array( $this, 'pre_get_posts' ) );
		}

		add_action( 'init', array( $this, 'set_default_grouper_groups' ) );
		add_action( 'wp', array( $this, 'check_page_protection' ) );
		add_filter( 'login_url', array( $this, 'filter_login_url' ), 10, 3 );
	}

	/**
	 * Filter the login URL.
	 *
	 * @param string $login_url    The login URL. Not HTML-encoded.
	 * @param string $redirect     The path to redirect to on login, if supplied.
	 * @param bool   $force_reauth Whether to force reauthorization, even if a cookie is present.
	 * @return string
	 */
	public function filter_login_url( $login_url, $redirect, $force_reauth ) {
		if ( ! empty( $redirect ) ) {
			$login_url = add_query_arg( 'redirect_to', rawurlencode( $redirect ), $login_url );
		}
		if ( $force_reauth ) {
			$login_url = add_query_arg( 'reauth', '1', $login_url );
		}
		return $login_url;
	}

	/**
	 * Set up the default grouper groups that we can use for page sorting.
	 *
	 * @return void
	 */
	public function set_default_grouper_groups() {
		// faculty - use SPH Faculty reference group (memberOf:valuePattern:harvard:org:schools:sph:it:*:faculty).
		// staff - use SPH Staff reference group (memberOf:valuePattern:harvard:org:schools:sph:it:*:staff).
		// postdoc - use SPH Postdoctoral reference group (memberOf:valuePattern:harvard:org:schools:sph:it:*:postdocs).
		// student - use SPH Students and Class Participants reference group (memberOf:valuePattern:harvard:org:schools:sph:it:*:students).
		$groups_list = array(
			'all'         => array(
				'name'      => __( 'All HarvardKey Holders', 'plugin-harvard-key' ),
				'slug'      => 'all',
				'attribute' => '',
			),
			'sph_faculty' => array(
				'name'      => __( 'HSPH Faculty', 'plugin-harvard-key' ),
				'slug'      => 'sph_faculty',
				'attribute' => 'harvard:org:schools:sph:apps:managed:faculty-sph-apps',
			),
			'sph_staff'   => array(
				'name'      => __( 'HSPH Staff', 'plugin-harvard-key' ),
				'slug'      => 'staff',
				'attribute' => 'harvard:org:schools:sph:apps:managed:staff-sph-apps',
			),
			'sph_postdoc' => array(
				'name'      => __( 'HSPH Postdocs', 'plugin-harvard-key' ),
				'slug'      => 'postdocs',
				'attribute' => 'harvard:org:schools:sph:apps:managed:postdoctoral-sph-apps',
			),
			'sph_student' => array(
				'name'      => __( 'HSPH Student', 'plugin-harvard-key' ),
				'slug'      => 'students',
				'attribute' => 'harvard:org:schools:sph:apps:managed:students-sph-apps',
			),
			'other'       => array(
				'name'      => __( 'Other Group Not Listed', 'plugin-harvard-key' ),
				'slug'      => 'other',
				'attribute' => '',
			),
		);

		$this->groups_list = apply_filters( 'harvard_key_protect_groups_list', $groups_list );
	}

	/**
	 * This function will redirect the page to the login screen if that page is set to
	 * HarvardKey protected only and the person does not have permisssions.
	 *
	 * @return void
	 */
	public function check_page_protection() {
		// By default the page is not Key Protected.
		$protected_page = false;

		// If the user is logged they can access the page.
		if ( is_super_admin() ) {
			return;
		}

		// First we check if the entire site is Key Protected. strtolower for retro compatibility.
		if ( 'yes' === strtolower( get_option( 'harvard_key_page_entire_site' ) ) ) {
			$protected_page = true;
		} else {
			// We get the post/page we are about to display.
			$page_object = get_queried_object();
			if (
				// Is this specific post/page is protected?
				( is_a( $page_object, 'WP_Post' ) &&
				'pinlogin' === get_post_meta( $page_object->ID, 'harvard_key_page_only', true ) ) ||
				// Are all the post/page with this post type protected?
				( is_a( $page_object, 'WP_Post' ) &&
				'yes' === get_option( 'harvard_key_page_' . $page_object->post_type ) ) ||
				// Is this an archive and all archive pages are protected? strtolower for retro compatibility.
				( is_archive() && 'yes' === strtolower( get_option( 'harvard_key_page_archives' ) ) )
			) {
				$protected_page = true;
			}
		}
		if ( isset( $protected_page ) && true === $protected_page ) {
			if ( ! is_user_logged_in() ) {
				auth_redirect();
			}
			$current_user = wp_get_current_user();
			if ( 0 === $current_user->ID ) {
				wp_die( esc_html__( 'An error has occurred while signing you in using HarvardKey. It appears we cannot validate your credentials. Please try logging in again, or if the issue persists please contact the HelpDesk.', 'plugin-harvard-key' ) );
			}
			// Get the user's Grouper groups.
			$user_groups = get_user_meta( $current_user->ID, 'grouper_groups', true );

			// Default post groups.
			$groups = array( 'all' );

			// Get the current post groups.
			if ( is_a( get_queried_object(), 'WP_Post' ) ) {
				$post_groups = get_post_meta( get_queried_object()->ID, 'harvard_key_page_group', true );
				// $groups must be an array.
				if ( is_array( $post_groups ) ) {
					$groups = $post_groups;
				}
			}

			// use the permissions to detect page permisssions.
			$authorized = false;

			// faculty, staff, student, affiliate, or member.
			// Log if debug is activated for troubleshooting.
			$this->logger->log( 'Page protect user groups:' );
			$this->logger->log( $user_groups );

			if ( in_array( 'all', $groups, true ) ) {
				// this is the default we allow everyone in.
				$authorized = true;
			} else {
				// get the page protect attribute groups.
				$key_groups = $this->groups_list;

				if ( ! empty( $user_groups ) ) {

					foreach ( $key_groups as $key_group => $attributes ) {
						// Logic for 'Other' Groups.
						if ( 'other' === $key_group ) {
							// Get the value for the other group variable.
							$other_group = get_post_meta( get_queried_object_id(), 'harvard_key_page_other_group', true );

							$attributes['attribute'] = 'harvard:org:schools:sph:apps:managed:' . $other_group;
						}

						// is this user a member of this group.
						if ( in_array( $attributes['attribute'], (array) $user_groups, true ) && in_array( $key_group, $groups, true ) ) {
							// set the authorized to true.
							$authorized = true;
						}
					}
				}
			}

			if ( true !== $authorized ) {
				wp_die( esc_html__( 'It appears that you do not have permission to view this content.', 'plugin-harvard-key' ) );
			}
		}
	}

	/**
	 * Remove all pages that have the meta.
	 *
	 * @param WP_Query $query Query Vars to set to the wp_Query object.
	 *
	 * @return void
	 */
	public function pre_get_posts( $query ) {
		if ( $query->is_main_query() && ! $query->is_singular() ) {
			$query->set(
				'meta_query',
				array(
					'relation' => 'OR',
					array(
						'key'     => 'harvard_key_page_only',
						'compare' => 'NOT EXISTS',
					),
					array(
						'key'     => 'harvard_key_page_only',
						'value'   => 'pinlogin',
						'compare' => '!=',
					),
				)
			);
		}
	}

	/**
	 * Adds a column for the users.
	 *
	 * @param array $defaults An array of defaults to update.
	 *
	 * @return array Filtered array list.
	 */
	public function manage_pages_columns( $defaults ) {
		$defaults['visibility'] = 'Visibility';
		return $defaults;
	}

	/**
	 * Populates the column.
	 *
	 * @param string  $column_name The name of the column for the list table.
	 * @param integer $post_id THe post Id to get for the meta.
	 *
	 * @return void
	 */
	public function manage_pages_custom_column( $column_name, $post_id ) {
		if ( 'visibility' === $column_name ) {
			// If the entire site or the specific page is HKP we display a lock icon.
			if ( 'pinlogin' === get_post_meta( $post_id, 'harvard_key_page_only', true ) || 'yes' === strtolower( get_option( 'harvard_key_page_' . get_post_type( $post_id ) ) ) ) {
				$class = 'dashicons-lock';
			} else {
				$class = 'dashicons-admin-site';
			}
			?>
			<span class="dashicons <?php echo esc_attr( $class ); ?>"></span>
			<?php
		}
	}

	/**
	 * Register meta box.
	 *
	 * @return void
	 */
	public function add_meta_box() {
		add_meta_box( 'hsph-pin-page-protect', esc_html__( 'HarvardKey Protection', 'plugin-harvard-key' ), array( $this, 'display_meta_box' ), null, 'side', 'default' );
	}

	/**
	 * Meta box display callback.
	 *
	 * @param WP_Post $post Current post object.
	 */
	public function display_meta_box( $post ) {
		// the front page cannot be members only!
		if ( is_front_page() ) {
			return;
		}

		// get the post type object so we have access to the labels, etc.
		$type   = get_post_type_object( $post->post_type );
		$labels = $type->labels;

		// get the toggle variable value.
		$toggle_value = get_post_meta( $post->ID, 'harvard_key_page_only', true );

		// get the selected group value.
		$groups = maybe_unserialize( get_post_meta( $post->ID, 'harvard_key_page_group', true ) );

		// Get the value for the other group variable.
		$other_group = get_post_meta( $post->ID, 'harvard_key_page_other_group', true );

		// groupsmust be an array.
		if ( ! is_array( $groups ) ) {
			$groups = array( 'all' );
		}

		// get the option for the post type default. strtolower for retro compatibility.
		if ( 'yes' === strtolower( get_option( 'harvard_key_page_' . $post->post_type ) ) ) {
			$default_option = 'HarvardKey Protected';
		} else {
			$default_option = 'Public ' . ucfirst( $labels->singular_name );
		}

		$key_groups = $this->groups_list;

		// and finally the option.
		?>
		<div id="pin_protected">
			<p><strong><?php esc_html_e( 'HarvardKey protect this', 'plugin-harvard-key' ); ?> <?php echo esc_html( $labels->singular_name ); ?>?</strong></p>
			<label id='pin-protected' for="harvard_key_page_only">
				<select name="harvard_key_page_only" id="harvard_key_page_only">
					<option value="" <?php selected( $toggle_value, '' ); ?>><?php esc_html_e( 'Default', 'plugin-harvard-key' ); ?> (<?php echo esc_html( $default_option ); ?>)</option>
					<option value="pinlogin" <?php selected( $toggle_value, 'pinlogin' ); ?>><?php esc_html_e( 'HarvardKey Protected', 'plugin-harvard-key' ); ?></option>
					<option value="public" <?php selected( $toggle_value, 'public' ); ?>><?php esc_html_e( 'Public', 'plugin-harvard-key' ); ?> <?php echo esc_html( ucfirst( $labels->singular_name ) ); ?></option>
				</select>
			</label>
			<p><strong><?php esc_html_e( 'Access Groups:', 'plugin-harvard-key' ); ?></strong></p>
			<label id='pin-group' for="harvard_key_group">
				<?php
				foreach ( $key_groups as $key_group => $key_value ) {

					// Only super admins and people who can manage grouper groups should see the other box.
					// phpcs:ignore WordPress.WP.Capabilities.Unknown
					if ( ! current_user_can( 'use_grouper_groups' ) && 'other' === $key_group ) {
						continue;
					}

					if ( in_array( $key_group, $groups, true ) ) {
						$checked = ' checked="checked"';
					} else {
						$checked = '';
					}
					?>
						<label><input type="checkbox" id="harvard_key_page_group_<?php echo esc_attr( $key_group ); ?>" name="harvard_key_page_group[<?php echo esc_attr( $key_group ); ?>]" value="yes" <?php echo esc_html( $checked ); ?> <?php echo ( 'other' === $key_group ? 'onclick="hsph_tagging_other_group_toggle( \'#hsph-other-group-display\', this );" ' : '' ); ?>> <?php echo esc_html( $key_value['name'] ); ?></label><br>
					<?php
				}
				?>
			</label>
			<?php // phpcs:ignore WordPress.WP.Capabilities.Unknown ?>
			<?php if ( current_user_can( 'use_grouper_groups' ) ) { ?>
			<div id="hsph-other-group-display">
				<p><strong><?php esc_html_e( 'Other Group', 'plugin-harvard-key' ); ?></strong></p>
				<label id='pin-protected' for="harvard_key_page_other_group">
					<p class="description">harvard:org:schools:sph:apps:managed:</p>
					<input type="text" name="harvard_key_page_other_group" id="harvard_key_page_other_group" value="<?php echo esc_attr( $other_group ); ?>">
				</label>
			</div>
			<script>
				// Toggle the display of the box on or off depending on if it is used.
				function hsph_tagging_other_group_toggle( className, obj ) {
					var $input = jQuery( obj );
					if ( $input.prop( 'checked' ) ) {
						jQuery( className ).show();
					} else {
						jQuery( className ).hide();
					}
				}

				hsph_tagging_other_group_toggle( '#hsph-other-group-display', '#harvard_key_page_group_other' );
			</script>
			<?php } ?>
		</div>
		<?php
		wp_nonce_field( 'harvard_key_page_submit', 'harvard_key_page_nonce' );
	}

	/**
	 * Saves the post meta to the page.
	 *
	 * @param integer $post_id Post ID to get the save data for.
	 *
	 * @return mixed $post_id on failure otherwise return void.
	 */
	public function save_post_data( $post_id ) {
		// Check if our nonce is set.
		if ( ! isset( $_POST['harvard_key_page_nonce'] ) ) {
			return $post_id;
		}

		// Verify that the nonce is valid.
		if ( ! wp_verify_nonce( sanitize_key( wp_unslash( $_POST['harvard_key_page_nonce'] ) ), 'harvard_key_page_submit' ) ) {
			return $post_id;
		}

		// verify if this is an auto save routine.
		// If it is our form has not been submitted, so we dont want to do anything.
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return $post_id;
		}

		// Check permissions.
		if ( ! current_user_can( 'edit_pages', $post_id ) ) {
			return $post_id;
		}

		if ( isset( $_POST['harvard_key_page_only'] ) ) {
			update_post_meta( $post_id, 'harvard_key_page_only', sanitize_title( wp_unslash( $_POST['harvard_key_page_only'] ) ) );
		}

		// get the key groups.
		$key_groups = $this->groups_list;
		$groups     = array();

		// foreach key grous.
		foreach ( $key_groups as $key_group => $key_value ) {
			if ( ! empty( $_POST['harvard_key_page_group'][ $key_group ] ) && 'yes' === $_POST['harvard_key_page_group'][ $key_group ] ) {
				$groups[] = sanitize_title( $key_group );
			}
		}

		if ( isset( $_POST['harvard_key_page_other_group'] ) ) {
			update_post_meta( $post_id, 'harvard_key_page_other_group', sanitize_text_field( wp_unslash( $_POST['harvard_key_page_other_group'] ) ) );
		}

		update_post_meta( $post_id, 'harvard_key_page_group', $groups );
	}
}
