<?php
class Tribe__Settings_Manager {
	const OPTION_CACHE_VAR_NAME = 'Tribe__Settings_Manager:option_cache';

	protected static $network_options;
	public static $tribe_events_mu_defaults;

	/**
	 * constructor
	 */
	public function __construct() {
		$this->add_hooks();

		// Load multisite defaults.
		if ( is_multisite() ) {
			$tribe_events_mu_defaults = [];
			if ( file_exists( WP_CONTENT_DIR . '/tribe-events-mu-defaults.php' ) ) {
				require_once WP_CONTENT_DIR . '/tribe-events-mu-defaults.php';
			}
			self::$tribe_events_mu_defaults = apply_filters( 'tribe_events_mu_defaults', $tribe_events_mu_defaults );
		}
	}

	public function add_hooks() {
		// option pages
		add_action( '_network_admin_menu', [ $this, 'init_options' ] );
		add_action( '_admin_menu', [ $this, 'init_options' ] );

		add_action( 'tribe_settings_do_tabs', [ $this, 'do_setting_tabs' ] );
		add_action( 'tribe_settings_validate_tab_network', [ $this, 'save_all_tabs_hidden' ] );
		add_action( 'updated_option', [ $this, 'update_options_cache' ], 10, 3 );
	}

	/**
	 * For performance reasons our options are saved in memory, but we need to make sure we update it when WordPress
	 * updates the variable directly.
	 *
	 * @since 4.11.0
	 *
	 * @param string $option    Name of the updated option.
	 * @param mixed  $old_value The old option value.
	 * @param mixed  $value     The new option value.
	 *
	 * @return void
	 */
	public function update_options_cache( $option, $old_value, $value ) {
		// Bail when not our option.
		if ( Tribe__Main::OPTIONNAME !== $option ) {
			return;
		}

		tribe_set_var( self::OPTION_CACHE_VAR_NAME, $value );
	}

	/**
	 * Init the settings API and add a hook to add your own setting tabs
	 *
	 * @return void
	 */
	public function init_options() {
		tribe( 'settings' );
	}

	/**
	 * Create setting tabs
	 *
	 * @return void
	 */
	public function do_setting_tabs() {
		// Make sure Thickbox is available regardless of which admin page we're on
		add_thickbox();

		$this->do_licenses_tab();
	}

	/**
	 * Get all options for the Events Calendar
	 *
	 * @return array of options
	 */
	public static function get_options() {
		$options = tribe_get_var( self::OPTION_CACHE_VAR_NAME, [] );

		if ( empty( $options ) ) {
			$options = (array) get_option( Tribe__Main::OPTIONNAME, [] );

			tribe_set_var( self::OPTION_CACHE_VAR_NAME, $options );
 		}

		return $options;
	}

	/**
	 * Get value for a specific option
	 *
	 * @param string $option_name name of option
	 * @param string $default     default value
	 *
	 * @return mixed results of option query
	 */
	public static function get_option( $option_name, $default = '' ) {
		if ( ! $option_name ) {
			return null;
		}
		$options = static::get_options();

		$option = $default;
		if ( array_key_exists( $option_name, $options ) ) {
			$option = $options[ $option_name ];
		} elseif ( is_multisite() && isset( self::$tribe_events_mu_defaults ) && is_array( self::$tribe_events_mu_defaults ) && in_array( $option_name, array_keys( self::$tribe_events_mu_defaults ) ) ) {
			$option = self::$tribe_events_mu_defaults[ $option_name ];
		}

		return apply_filters( 'tribe_get_single_option', $option, $default, $option_name );
	}

	/**
	 * Saves the options for the plugin
	 *
	 * @param array $options formatted the same as from get_options()
	 * @param bool  $apply_filters
	 *
	 * @return bool True if the value was updated, false otherwise.
	 */
	public static function set_options( $options, $apply_filters = true ) {
		if ( ! is_array( $options ) ) {
			return false;
		}
		$old_options = self::get_options();
		if ( true === $apply_filters ) {
			$options = apply_filters( 'tribe-events-save-options', $options );
		}

		/**
		 * Fires before the options are set.
		 *
		 * @since 6.8.0
		 *
		 * @param array $options     The new options.
		 * @param array $old_options The old options.
		 */
		do_action( 'tec_common_settings_manager_pre_set_options', $options, $old_options );

		$updated = update_option( Tribe__Main::OPTIONNAME, $options );

		if ( $updated ) {
			tribe_set_var( self::OPTION_CACHE_VAR_NAME, $options );

			/**
			 * Fires after the options are set.
			 *
			 * @since 6.8.0
			 *
			 * @param array $options     The new options.
			 * @param array $old_options The old options.
			 */
			do_action( 'tec_common_settings_manager_post_set_options', $options, $old_options );
		}

		return $updated;
	}

	/**
	 * Set an option
	 *
	 * @param string $name The option key or 'name'.
	 * @param mixed  $value The value we want to set.
	 *
	 * @return bool True if the value was updated, false otherwise.
	 */
	public static function set_option( $name, $value ) {
		$options        = self::get_options();
		$previous_value = $options[ $name ] ?? null;

		/**
		 * Filters the value of an option before it is set.
		 *
		 * @since 6.8.0
		 *
		 * @param mixed  $value          The value we want to set.
		 * @param string $name           The option key.
		 * @param mixed  $previous_value The previous option value.
		 * @param array  $options        The options array.
		 */
		$options[ $name ] = apply_filters( 'tec_common_settings_manager_set_option', $value, $name, $previous_value, $options );

		/**
		 * Fires when an option is set.
		 *
		 * @since 6.8.0
		 *
		 * @param string $name           The option key.
		 * @param mixed  $value          The option value.
		 * @param mixed  $previous_value The previous option value.
		 * @param array  $options        The options array.
		 */
		do_action( 'tec_common_settings_manager_set_option', $name, $value, $previous_value, $options );

		return static::set_options( $options );
	}

	/**
	 * Remove an option. Actually remove (unset), as opposed to setting to null/empty string/etc.
	 *
	 * @since 4.14.13
	 *
	 * @param string $name The option key or 'name'.
	 *
	 * @return bool
	 */
	public static function remove_option( $name ) {
		$options = self::get_options();

		/**
		 * Fires when an option is removed.
		 *
		 * @since 6.8.0
		 *
		 * @param string $name The option key.
		 * @param mixed  $value The option value.
		 * @param array  $options The options array.
		 */
		do_action( 'tec_common_settings_manager_remove_option', $name, $options[ $name ] ?? null, $options );

		unset( $options[ $name ] );

		return static::set_options( $options );
	}

	/**
	 * Get all network options for the Events Calendar
	 *
	 * @return array of options
	 * @TODO add force option, implement in setNetworkOptions
	 */
	public static function get_network_options() {
		if ( ! isset( self::$network_options ) ) {
			$options               = get_site_option( Tribe__Main::OPTIONNAMENETWORK, [] );
			self::$network_options = apply_filters( 'tribe_get_network_options', $options );
		}

		return self::$network_options;
	}

	/**
	 * Get value for a specific network option
	 *
	 * @param string $option_name name of option
	 * @param string $default    default value
	 *
	 * @return mixed results of option query
	 */
	public static function get_network_option( $option_name, $default = '' ) {
		if ( ! $option_name ) {
			return null;
		}

		if ( ! isset( self::$network_options ) ) {
			self::get_network_options();
		}

		if ( isset( self::$network_options[ $option_name ] ) ) {
			$option = self::$network_options[ $option_name ];
		} else {
			$option = $default;
		}

		return apply_filters( 'tribe_get_single_network_option', $option, $default );
	}

	/**
	 * Saves the network options for the plugin
	 *
	 * @param array $options formatted the same as from get_options()
	 * @param bool  $apply_filters
	 *
	 * @return void
	 */
	public static function set_network_options( $options, $apply_filters = true ) {
		if ( ! is_array( $options ) ) {
			return;
		}

		if (
			isset( $_POST['tribeSaveSettings'] )
			&& isset( $_POST['current-settings-tab'] )
		) {
			$options['hideSettingsTabs'] = tribe_get_request_var( 'hideSettingsTabs', [] );
		}

		$admin_pages = tribe( 'admin.pages' );
		$admin_page  = $admin_pages->get_current_page();

		if ( true === $apply_filters ) {
			$options = apply_filters( 'tribe-events-save-network-options', $options, $admin_page );
		}

		if ( update_site_option( Tribe__Main::OPTIONNAMENETWORK, $options ) ) {
			self::$network_options = apply_filters( 'tribe_get_network_options', $options );
		} else {
			self::$network_options = self::get_network_options();
		}
	}

	/**
	 * Add the network admin options page
	 *
	 * @return void
	 */
	public static function add_network_options_page() {
		_deprecated_function( __METHOD__, '4.15.0' );
	}

	/**
	 * Render network admin options view
	 *
	 * @return void
	 */
	public static function do_network_settings_tab() {
		_deprecated_function( __METHOD__, '4.15.0' );
	}

	/**
	 * Registers the license key management tab in the Events > Settings screen,
	 * only if premium addons are detected.
	 */
	protected function do_licenses_tab() {
		$show_tab = ( current_user_can( 'activate_plugins' ) && $this->have_addons() );

		/**
		 * Provides an opportunity to override the decision to show or hide the licenses tab
		 *
		 * Normally it will only show if the current user has the "activate_plugins" capability
		 * and there are some currently-activated premium plugins.
		 *
		 * @var bool
		 */
		if ( ! apply_filters( 'tribe_events_show_licenses_tab', $show_tab ) ) {
			return;
		}

		/**
		 * @var $licenses_tab
		 */
		include Tribe__Main::instance()->plugin_path . 'src/admin-views/tribe-options-licenses.php';
	}

	/**
	 * Create the help tab.
	 *
	 * @deprecated 6.3.2 This method is deprecated and should no longer be used. Use \TEC\Common\Admin\Help_Hub\Hub instead.
	 *
	 */
	public function do_help_tab() {
		/**
		 * Include Help tab Assets here
		 */

		include_once Tribe__Main::instance()->plugin_path . 'src/admin-views/help.php';
	}

	/**
	 * Add help menu item to the admin (unless blocked via network admin settings).
	 *
	 * @deprecated 5.0.2
	 */
	public function add_help_admin_menu_item() {
		_deprecated_function( __METHOD__, '5.0.2', 'Now handled by Tribe\Events\Admin\Settings::add_admin_pages()' );
	}

	/**
	 * Tries to discover if licensable addons are activated on the same site.
	 *
	 * @return bool
	 */
	protected function have_addons() {
		$addons = apply_filters( 'tribe_licensable_addons', [] );

		return ! empty( $addons );
	}

	/**
	 * Save hidden tabs
	 *
	 * @return void
	 */
	public function save_all_tabs_hidden() {
		$all_tabs_keys = array_keys( apply_filters( 'tribe_settings_all_tabs', [] ) );

		$network_options = (array) get_site_option( Tribe__Main::OPTIONNAMENETWORK );

		$this->set_network_options( $network_options );
	}

	/**
	 * Static Singleton Factory Method
	 *
	 * @return Tribe__Settings_Manager
	 */
	public static function instance() {
		return tribe( 'settings.manager' );
	}
}
