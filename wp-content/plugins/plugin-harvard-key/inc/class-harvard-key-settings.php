<?php
/**
 * Password management related features/functions/hooks
 *
 * @package hpsh
 * @subpackage plugin-harvard-key
 */

/**
 * Harvard_Key_Settings class.
 * A class to mananage HKPF
 */
class Harvard_Key_Settings {
	/**
	 * Init function.
	 * Add actions, hooks and filters
	 *
	 * @access public
	 * @return void
	 */
	public function init() {

		// admin init.
		add_action( 'admin_init', array( $this, 'harvard_key_page_admin_init' ) );

		// Register an option page, as we may have site specific options.
		if ( is_admin() ) {
			add_action( 'admin_menu', array( $this, 'harvard_key_admin_menu' ) );
		}

		// Add filters to tie into the super admin roles plugin.
		add_filter( 'hsph_super_admin_roles_filterable', array( $this, 'super_admin_roles_filter_list' ) );
		add_filter( 'hsph_super_admin_roles_display_name', array( $this, 'super_admin_roles_display' ), 10, 2 );
		add_filter( 'hsph_super_admin_roles_display_description', array( $this, 'super_admin_roles_description' ), 10, 2 );
	}

	/**
	 * Filter the super admin roles list.
	 *
	 * @param array $roles Current list of roles.
	 * @return array Filtered Roles.
	 */
	public function super_admin_roles_filter_list( $roles ) {
		$grouper_roles = array(
			'use_grouper_groups',
		);

		// Inject the grouper roles into the array after the super admin roles in position 2.
		$roles = array_slice( $roles, 0, 2, true ) + array( 'grouper' => $grouper_roles ) + array_slice( $roles, 2, count( $roles ) - 2, true );
		return $roles;
	}

	/**
	 * Display the Grouper roles header on the admin screen.
	 *
	 * @param array $title Title to filter.
	 * @param array $role Current role.
	 * @return mixed Title if successful - void if not.
	 */
	public function super_admin_roles_display( $title, $role ) {
		if ( 'grouper' === $role ) {
			return __( 'Grouper', 'plugin-harvard-key' );
		}

		if ( 'hkey' === $role ) {
			return __( 'Harvard Key', 'plugin-harvard-key' );
		}

		return $title;
	}

	/**
	 * Add a description about these capabilities.
	 *
	 * @param array $description description to go off of.
	 * @param array $role Current Role.
	 * @return mixed Title if successful - void if not.
	 */
	public function super_admin_roles_description( $description, $role ) {
		if ( 'hkey' === $role ) {
			return __( 'Allow access to the super admin HarvardKey plugin screen.', 'plugin-harvard-key' );
		}

		if ( 'grouper' === $role ) {
			return __( 'These roles are used for managing access to grouper groups permissions in the HarvardKey Plugin.', 'plugin-harvard-key' );
		}

		return $description;
	}

	/**
	 * Set up the Admin Init functions for the page
	 *
	 * This function will both register the settings for the page
	 */
	public function harvard_key_page_admin_init() {

		// Multisite or not we want these settings to be displayed at the site level.
		$option_page = 'harvard_key_options';

		// fields to it.
		add_settings_section( 'harvard_key_page_entire_site', __( 'Protect Entire Site', 'plugin-harvard-key' ), array( $this, 'harvard_key_page_entire_site_section' ), $option_page );

		// Add the field with the names and function to use for our new.
		// settings, put it in our new section.
		add_settings_field(
			'harvard_key_page_entire_site',
			__( 'Entire Site', 'plugin-harvard-key' ),
			array( $this, 'harvard_key_checkbox_field_callback' ),
			$option_page,
			'harvard_key_page_entire_site',
			array(
				'label_for'         => 'harvard_key_page_entire_site',
				'label'             => __( 'Key protect the entire site.', 'plugin-harvard-key' ),
				'always_get_option' => true,
			)
		);

		// register our settings.
		register_setting( $option_page, 'harvard_key_page_entire_site', array( $this, 'harvard_key_checkbox_sanitize' ) );

		// post types section.
		add_settings_section( 'harvard_key_page_post_types', __( 'Protect Post Types', 'plugin-harvard-key' ), array( $this, 'harvard_key_page_post_types_section' ), $option_page );

		// args for post types.
		$args = array(
			'public' => true,
		);

		// get all the post types.
		$post_types = get_post_types( $args, 'objects' );

		foreach ( $post_types as $type ) {
			// Add the field with the names and function to use for our new.
			// settings, put it in our new section.
			$field_name = 'harvard_key_page_' . $type->name;

			add_settings_field(
				$field_name,
				$type->label,
				array( $this, 'harvard_key_checkbox_field_callback' ),
				$option_page,
				'harvard_key_page_post_types',
				array(
					'label_for'         => $field_name,
					'label'             => esc_html__( 'Key protect all ', 'plugin-harvard-key' ) . $type->label,
					'always_get_option' => true,
				)
			);

			// register our settings.
			register_setting( $option_page, 'harvard_key_page_' . $type->name, array( $this, 'harvard_key_checkbox_sanitize' ) );
		}

		// register our settings.
		register_setting( $option_page, 'harvard_key_page_archives', array( $this, 'harvard_key_checkbox_sanitize' ) );

		// Add the field with the names and function to use for our new.
		// settings, put it in our new section.
		add_settings_field(
			'harvard_key_page_archives',
			__( 'Post Archives', 'plugin-harvard-key' ),
			array( $this, 'harvard_key_checkbox_field_callback' ),
			$option_page,
			'harvard_key_page_post_types',
			array(
				'label_for'         => 'harvard_key_page_archives',
				'label'             => __( 'Key protect all Post archive pages', 'plugin-harvard-key' ),
				'always_get_option' => true,
			)
		);
	}

	/**
	 * Section callback for the key protect enire site.
	 *
	 * @return void
	 */
	public function harvard_key_page_entire_site_section() {
		?>
		<p>
			<?php esc_html_e( 'HarvardKey Protect the entire site. This will activate HarvardKey Protection on the entire site and cannot be overridden on individual pages.', 'plugin-harvard-key' ); ?>
		</p>
		<?php
	}

	/**
	 * Section callback for the key protect post types.
	 *
	 * @return void
	 */
	public function harvard_key_page_post_types_section() {
		?>
		<p>
			<?php esc_html_e( 'Use the toggles below to set the defaults for each post type on the site. These can be overridden on a page by page basis. Check the box to have the post type hidden by default', 'plugin-harvard-key' ); ?>
		</p>
		<?php
	}

	/**
	 * Add administration menus for non network installs
	 *
	 * @return void
	 */
	public function harvard_key_admin_menu() {
		add_options_page( __( 'HarvardKey', 'plugin-harvard-key' ), __( 'HarvardKey', 'plugin-harvard-key' ), 'manage_options', 'harvard_key_options', array( $this, 'harvard_key_options_page' ) );
	}

	/**
	 * Load options page for non-network installs
	 *
	 * @return void
	 */
	public function harvard_key_options_page() {
		$this->harvard_key_display_option_page( 'harvard_key_options' );
	}

	/**
	 * Allow us to easily set an option from either the site or network on multisite.
	 * But it also allow us to update the current blog option on a multisite install.
	 *
	 * @param string  $field The string option name.
	 * @param string  $value The value to set.
	 * @param boolean $always_current_blog Use the network level or the site level.
	 *
	 * @return string Option Value.
	 */
	public function harvard_key_update_contextual_option( $field, $value, $always_current_blog = false ) {
		if ( is_multisite() && false === $always_current_blog ) {
			return update_site_option( $field, $value );
		} else {
			return update_option( $field, $value );
		}
	}

	/**
	 * Sanitize a yes/no checkbox/option.
	 *
	 * @param string $input yes/no to be sanitized from a yes/no checkbox.
	 *
	 * @return string Yes or No.
	 */
	public function harvard_key_checkbox_sanitize( $input ) {
		if ( strtolower( $input ) === 'yes' ) {
			return 'yes';
		}
		return 'no';
	}

	/**
	 * A generic callback to display admin checkbox fields.
	 *
	 * @param array $args Array of args to be passed.
	 *
	 * @return void
	 */
	public function harvard_key_checkbox_field_callback( $args ) {
		// We sanitize $args.
		$field             = sanitize_key( $args['label_for'] );
		$label             = sanitize_text_field( $args['label'] );
		$always_get_option = false;
		if ( isset( $args['always_get_option'] ) && true === $args['always_get_option'] ) {
			$always_get_option = true;
		}

		$default = $this->harvard_key_checkbox_sanitize( harvard_key_get_contextual_option( $field, $always_get_option ) );

		echo '<label class="description"><input type="checkbox" name="' . esc_attr( $field ) . '" id="' . esc_attr( $field ) . '" value="yes" ' . checked( $default, 'yes', false ) . '> ' . esc_html( $label ) . '</label>';
	}

	/**
	 * Generate an option page.
	 *
	 * @param string $context THe variable contact to display from.
	 * @param string $action Use the default options.php or another form handler.
	 *
	 * @return void
	 */
	public function harvard_key_display_option_page( $context, $action = 'options.php' ) {
		?>
		<div class="wrap">
			<h1><?php esc_html_e( 'HarvardKey Settings', 'plugin-harvard-key' ); ?></h1>
			<form method="post" action="<?php echo esc_attr( $action ); ?>" accept-charset="utf-8">
				<?php
				settings_fields( $context );

				do_settings_sections( $context );

				submit_button();
				?>
			</form>
		</div>
		<?php
	}
}
