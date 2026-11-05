<?php
/**
 * Various methods for managing / cleaning up WordPress users.
 *
 * Works in both single-site and multisite WordPress installations.
 * Uses is_multisite() to conditionally handle network-specific operations.
 *
 * @package hsph
 * @subpackage hsph-user-management
 */

//phpcs:disable WordPress.Security.EscapeOutput.ExceptionNotEscaped -- Our own text.

use Psr\Log\LogLevel;

/**
 * HSPH_User_Management Class.
 */
class HSPH_User_Management {

	/**
	 * The user_login that deleted user content will be reassigned to.
	 *
	 * @var string
	 */
	public $reassign_to_userlogin;

	/**
	 * Class constructor.
	 *
	 * @param HSPH_User_Management_Logger $logger The logger object used to write log messages.
	 * @throws Exception If the HSPH_USER_MANAGEMENT_REASSIGN_TO constant is not defined in wp-config.
	 */
	public function __construct( HSPH_User_Management_Logger $logger ) {
		global $wpdb;
		if ( ! defined( 'HSPH_USER_MANAGEMENT_REASSIGN_TO' ) ) {
			throw new Exception( 'The HSPH_USER_MANAGEMENT_REASSIGN_TO constant must be defined in wp-config.' );
		}
		$this->reassign_to_userlogin = HSPH_USER_MANAGEMENT_REASSIGN_TO;
		$this->logger                = $logger;
		// Generate a unique ID so log records can be grouped by session.
		$bytes                        = random_bytes( 5 );
		$this->session_id             = bin2hex( $bytes );
		$this->logger->global_context = array(
			'session_id' => $this->session_id,
		);
		$this->wp_auth_group_members  = array();
		$this->statistics             = array(
			'num_users_deleted' => 0,
		);
		/**
		 * Deletes a user (single-site).
		 */
		if ( ! function_exists( 'wp_delete_user' ) ) {
			require_once ABSPATH . 'wp-admin/includes/user.php';
		}
		/**
		 * Deletes a multisite network user. Only needed on multisite.
		 */
		if ( is_multisite() && ! function_exists( 'wpmu_delete_user' ) ) {
			require_once ABSPATH . 'wp-admin/includes/ms.php';
		}
		/**
		 * WordPress user_logins to exclude from deletion.
		 *
		 * @var array
		 */
		$do_not_delete       = array(
			$this->reassign_to_userlogin,
			'salesforce',
			'appsteam',
			'webappsteam',
			'hsph-author',
		);
		$this->do_not_delete = array_merge(
			$do_not_delete,
			HSPH_USER_MANAGEMENT_DO_NOT_DELETE,
		);
	}


	/**
	 * Carries out a user management session. All logging output shares a session id for easy filtering.
	 *
	 * @param bool $dry_run      If true, no users will be deleted, but a log message will be created for each user that
	 * would have been deleted.
	 *
	 * @param bool $use_failsafe If true, and $unauthorized_users exceeds
	 * HSPH_USER_MANAGEMENT_MAX_DELETIONS, exit without deleting any users
	 * and log the event.
	 *
	 * @return void
	 * @throws Throwable If any exception is raised in $this->delete_unauthorized_users that isn't a HSPH_User_Management_Exception.
	 */
	public function user_mgmt_session( bool $dry_run = false, bool $use_failsafe = true ) {
		$this->logger->log(
			LogLevel::INFO,
			'User management session started'
		);
		try {
			$this->delete_unauthorized_users( $dry_run, $use_failsafe );
		} catch ( Throwable $err ) {
			$this->logger->log(
				LogLevel::CRITICAL,
				'A fatal exception ocurred during the user management session',
				array(
					'exception' => $err,
				)
			);
			throw $err;
		}
		$this->logger->log(
			LogLevel::INFO,
			'User management session completed',
			$this->statistics
		);
	}

	/**
	 * Deletes any unauthorized WP user as defined by $this->get_unauthorized_wp_users.
	 *
	 * @param bool $dry_run      If true, no users will be deleted, but a log message will be created for each user that
	 * would have been deleted.
	 *
	 * @param bool $use_failsafe If true, and $unauthorized_users exceeds HSPH_USER_MANAGEMENT_MAX_DELETIONS, exit without
	 * deleting any users and log the event.
	 *
	 * @throws HSPH_User_Management_Exception Logs and continues. Halts for other exceptions.
	 * @return void
	 */
	public function delete_unauthorized_users( bool $dry_run = false, bool $use_failsafe = true ) {
		$unauthorized_users     = $this->get_unauthorized_wp_users();
		$num_unauthorized_users = count( $unauthorized_users );
		// Check if in failsafe state.
		$max_deletions = strval( HSPH_USER_MANAGEMENT_MAX_DELETIONS );
		if ( ! $dry_run && $use_failsafe && $num_unauthorized_users > HSPH_USER_MANAGEMENT_MAX_DELETIONS ) {
			$err = new HSPH_User_Management_Exception( "The number of planned deletions {$num_unauthorized_users} exceeds the max allowed {$max_deletions}" );
			$this->logger->log(
				LogLevel::ERROR,
				$err->getMessage(),
				array(
					'exception' => $err,
				)
			);
			return;
		}
		foreach ( $unauthorized_users as $unauthorized_user ) {
			try {
				if ( ! $this->delete_user_ok( $unauthorized_user ) ) {
					continue;
				}
				$delete_log = $this->delete_user( $unauthorized_user );
				++$this->statistics['num_users_deleted'];
				$this->logger->log(
					LogLevel::INFO,
					"Deleted user {$unauthorized_user['user_login']}",
					array(
						'user'       => $unauthorized_user,
						'delete_log' => $delete_log,
					)
				);
			} catch ( HSPH_User_Management_Exception $err ) {
				// Catch, log, and proceed for all exceptions of type HSPH_User_Management_Exception.
				// All others will be caught, logged, and rethrown by the calling function.
				$this->logger->log(
					LogLevel::ERROR,
					$err->getMessage(),
					array(
						'user'      => $unauthorized_user,
						'exception' => $err,
					)
				);
			}
		}
	}

	/**
	 * Gets all WordPress users that are not authorized for one of the following reasons.
	 * - They aren't in the Grouper WordPress authorization group.
	 * - They don't have access to any blogs (multisite only).
	 *
	 * @return array
	 */
	public function get_unauthorized_wp_users() {
		$wp_users = $this->get_wp_users();
		$wp_count = count( $wp_users );
		$this->logger->log( LogLevel::INFO, "Total WP users: {$wp_count}" );
		$auth_group         = $this->get_wp_auth_group();
		$unauthorized_users = array();
		for ( $i = 0; $i < $wp_count; $i++ ) {
			$wp_user                  = $wp_users[ $i ];
			$wp_user['in_auth_group'] = ! empty( $wp_user['eppn'] ) && in_array( $wp_user['eppn'], $auth_group, true );
			if ( ! $wp_user['has_blog_access'] || ! $wp_user['in_auth_group'] ) {
				array_push( $unauthorized_users, $wp_user );
			}
		}
		$unauthorized_count = count( $unauthorized_users );
		$this->logger->log( LogLevel::INFO, "Total unauthorized user count: {$unauthorized_count}" );
		return $unauthorized_users;
	}

	/**
	 * Gets an array of user IDs that have access to at least one active blog on a multisite network.
	 *
	 * Queries usermeta for wp_X_capabilities entries and filters to users on
	 * active (non-archived, non-deleted) blogs.
	 *
	 * @throws Exception If a db query returns an empty result or causes a db error.
	 * @return array An array of user ids.
	 */
	public function get_multisite_blog_users() {
		global $wpdb;

		// Get all WordPress usermeta where the meta_key matches the (sql) pattern 'wp%capabilities'.
		// phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery
		$usermetas = $wpdb->get_results(
			<<<QUERY
			SELECT user_id, meta_key
			FROM $wpdb->usermeta AS um
			WHERE meta_key LIKE '{$wpdb->prefix}%capabilities';
			QUERY,
			ARRAY_A
		);
		// Check for empty result.
		if ( empty( $usermetas ) ) {
			throw new Exception( 'The usermetas query returned an empty result' );
		}
		// Check for errors.
		if ( $wpdb->last_error ) {
			throw new Exception( $wpdb->last_error );
		}
		// Get all active WordPress blogs.
		// phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery
		$active_blogs_2d = $wpdb->get_results(
			<<<QUERY
			SELECT blog_id
			FROM $wpdb->blogs
			WHERE archived = 0
			AND deleted = 0;
			QUERY,
			ARRAY_A
		) ?? array();
		// Check for empty result.
		if ( empty( $active_blogs_2d ) ) {
			throw new Exception( 'The active_blogs query returned an empty result' );
		}
		// Check for errors.
		if ( $wpdb->last_error ) {
			throw new Exception( $wpdb->last_error );
		}
		// A flat array of active blog ids. Blog ids are strings.
		$active_blogs = array_column( $active_blogs_2d, 'blog_id' );
		// An array of users who have access to at least one blog.
		$users_with_blogs = array();
		// Iterate over every the usermeta.
		foreach ( $usermetas as $usermeta ) {
			$site_id = null;
			// This user has access to site 1.
			if ( 'wp_capabilities' === $usermeta['meta_key'] ) {
				$site_id = '1';
			} else {
				// The meta_key holds the site_id. Use a capture group to get it.
				$rmatch = preg_match( '/wp_([0-9]+)_capabilities/', $usermeta['meta_key'], $matches );
				// If the string doesn't match our pattern, or preg_match fails continue.
				if ( 0 === $rmatch || false === $rmatch ) {
					continue;
				} else {
					// Set the site_id to the first substring that matched our capture group.
					$site_id = $matches[1];
				}
			}
			// Skip this user capability if it pertains to an inactive site.
			if ( ! in_array( $site_id, $active_blogs, true ) ) {
				continue;
			}
			// Add this user to the array if they aren't already in it.
			if ( ! in_array( $usermeta['user_id'], $users_with_blogs, true ) ) {
				$users_with_blogs[] = $usermeta['user_id'];
			}
		}
		return $users_with_blogs;
	}

	/**
	 * Gets all members of the Grouper WordPress authorization groups.
	 *
	 * Iterates over HSPH_GROUPER_AUTH_GROUPS (an array of group paths) and
	 * returns the deduplicated union of all group memberships.
	 *
	 * @return array
	 */
	public function get_wp_auth_group() {
		$grouper       = new HSPH_User_Management_Grouper( $this->logger );
		$group_members = array();
		if ( true === HSPH_TOOLKIT_ENABLE_GROUPER_MOCK ) {
			$this->logger->log( LogLevel::INFO, 'NOTE: Grouper mock API is enabled. See hsph-wp-toolkit/inc/user-management/dev/hsph-grouper-mock.php.' );
		}
		foreach ( HSPH_GROUPER_AUTH_GROUPS as $group_path ) {
			$this->logger->log( LogLevel::INFO, "Retrieving authorization group members from {$group_path}" );
			$page         = 1;
			$page_results = $grouper->get_group_members( $group_path, $page );
			while ( $page_results ) {
				$group_members = array_merge( $group_members, $page_results );
				$page_results  = $grouper->get_group_members( $group_path, ++$page );
			}
		}
		$this->wp_auth_group_members = array_unique( $group_members );
		$auth_grp_cnt                = count( $this->wp_auth_group_members );
		$this->logger->log( LogLevel::INFO, "Count of auth group members: {$auth_grp_cnt}" );
		return $this->wp_auth_group_members;
	}

	/**
	 * Gets all WordPress users directly from the database. This allows us to join
	 * all the attributes we need together for each user.
	 *
	 * @throws Exception If the query returns an empty result or causes a db error.
	 * @return array
	 */
	public function get_wp_users() {
		global $wpdb;
		// Get all WordPress users.
		// phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery
		$results = $wpdb->get_results(
			<<<QUERY
			SELECT u.ID, u.user_login, u.user_email, u.user_registered, m1.meta_value AS last_login, m2.meta_value AS eppn
			FROM $wpdb->users as u
			LEFT JOIN (SELECT *
					FROM $wpdb->usermeta
					WHERE meta_key = 'last_login') AS m1
			ON u.ID = m1.user_id
			LEFT JOIN (SELECT *
					FROM $wpdb->usermeta
					WHERE meta_key = 'eduPersonPrincipalName') AS m2
			ON u.ID = m2.user_id
			;
			QUERY,
			ARRAY_A
		);
		// Check for empty result.
		if ( empty( $results ) ) {
			throw new Exception( 'The get_wp_users query returned an empty result' );
		}
		// Check for errors.
		if ( $wpdb->last_error ) {
			throw new Exception( $wpdb->last_error );
		}
		// Default all users to having blog access.
		foreach ( $results as &$user ) {
			$user['has_blog_access'] = true;
		}
		unset( $user );
		// On multisite, mark users without access to any active blog.
		if ( is_multisite() ) {
			$multisite_blog_users = $this->get_multisite_blog_users();
			foreach ( $results as &$user ) {
				if ( ! in_array( $user['ID'], $multisite_blog_users, true ) ) {
					$user['has_blog_access'] = false;
				}
			}
			unset( $user );
		}
		return $results;
	}

	/**
	 * There are scenarios in which a user must not be deleted.
	 * This function checks each of them, and returns false if the user meets the condition.
	 * If the user meets none of the conditions, it returns true and the user is deleted.
	 *
	 * Scenarios in which this function will return false, i.e. do not delete:
	 *   - User is on the do not delete list.
	 *   - User is a super admin (only applies to multisite WP).
	 *   - User has an empty eppn, but has logged in within the last 365 days.
	 *
	 * @param array $user An array of attributes that identify a WordPress user.
	 *              Pulled from the WP database using $this->get_wp_users.
	 * @return mixed If any of the checks fail the function returns false. Otherwise returns true.
	 */
	public function delete_user_ok( $user ) {
		/**
		 * "Do not delete" list check.
		 *
		 * Description:
		 * Do not delete users on the 'do not delete' list, i.e. $this->do_not_delete.
		 */
		if ( in_array( $user['user_login'], $this->do_not_delete, true ) ) {
			$this->logger->log(
				LogLevel::INFO,
				"Skipped deleting user on do_not_delete list '{$user['user_login']}'",
				array(
					'user' => $user,
				)
			);
			return false;
		}
		/**
		 * New user check.
		 *
		 * Description:
		 * Do not delete users if their account was registered in the last 60 days.
		 *
		 * Background:
		 * The way we decide whether a WP user is authorized is by checking if their EPPN
		 * matches the EPPN of a user in the Grouper authorization group. Thus, if the WP
		 * user has no EPPN, they will be deleted by default. The EPPN user_meta isn't set
		 * until the user logs in for the first time, so we need to check the user_registered
		 * date to ensure we're not deleting newly registered users. Fixes DEV-10086.
		 */
		// User was registered within the last 60 days.
		$is_recently_registered = ! empty( $user['user_registered'] ) && ! $this->gt_x_days_ago( 60, $user['user_registered'] );
		// If the user was registered recently, don't delete their account.
		// Create an exception, log it, and return false.
		if ( empty( $user['eppn'] ) && $is_recently_registered ) {
			$err = new HSPH_User_Management_Exception( "Skipped deleting recently registered user '{$user['user_login']}'.", $user );
			$this->logger->log(
				LogLevel::INFO,
				$err->getMessage(),
				array(
					'user'      => $user,
					'exception' => $err,
				)
			);
			return false;
			/**
			 * Super Admin check.
			 *
			 * Description:
			 * Don't delete multisite super admins.
			 */
		} elseif ( is_multisite() && is_super_admin( $user['ID'] ) ) {
			// Leaves a log message indicating if a super user is being deleted.
			$err = new HSPH_User_Management_Exception( "Skipped deleting Super Admin '{$user['user_login']}'" );
			$this->logger->log(
				LogLevel::WARNING,
				$err->getMessage(),
				array(
					'user'      => $user,
					'exception' => $err,
				)
			);
			return false;
		}
		// If the function reaches this point without returning false, it's ok to delete the user.
		return true;
	}

	/**
	 * Delete a user and reassign all their content.
	 *
	 * On multisite: iterates over all blogs the user belongs to, switches blog context,
	 * deletes the user per-blog via wp_delete_user(), then removes the user network-wide
	 * via wpmu_delete_user().
	 *
	 * On single-site: deletes the user directly via wp_delete_user() without blog switching.
	 *
	 * @param array $user An array of attributes that identify a WordPress user.
	 *              Pulled from the WP database using $this->get_wp_users.
	 * @throws mixed If the default admin was not found, a (fatal) Exception is thrown.
	 *               If there's an error while deleting a user a HSPH_User_Management_Exception is thrown.
	 *
	 * @return array An array of info about the deleted user.
	 */
	public function delete_user( $user ) {
		$default_admin = get_user_by( 'login', $this->reassign_to_userlogin );
		if ( ! $default_admin ) {
			$errmsg = 'The default admin was not found: ' . $this->reassign_to_userlogin;
			$err    = new Exception( $errmsg );
			$this->logger->log(
				LogLevel::ALERT,
				$err->getMessage(),
				array(
					'user'      => $user,
					'exception' => $err,
				)
			);
			// As this is not a HSPH_User_Management_Exception it will not be caught, and will halt the cron job.
			throw $err;
		} else {
			$default_admin = (object) $default_admin;
		}
		if ( is_multisite() ) {
			return $this->delete_multisite_user( $user, $default_admin );
		} else {
			return $this->delete_singlesite_user( $user, $default_admin );
		}
	}

	/**
	 * Delete a user from a single-site WordPress installation.
	 *
	 * @param array    $user          The user to delete.
	 * @param stdClass $default_admin The fallback admin for content reassignment.
	 * @throws HSPH_User_Management_Exception If the deletion fails.
	 * @return array A delete_log array.
	 */
	protected function delete_singlesite_user( $user, $default_admin ) {
		$is_dryrun        = defined( 'HSPH_USER_MANAGEMENT_CRON_IS_DRYRUN' ) && true === HSPH_USER_MANAGEMENT_CRON_IS_DRYRUN;
		$reassign_to_user = $default_admin;
		// If one of the existing site admins is an authorized user, reassign to them.
		$admins = get_users( array( 'role' => 'administrator' ) );
		foreach ( $admins as $admin ) {
			$admin_eppn         = get_user_meta( $admin->ID, 'eduPersonPrincipalName', true );
			$admin_eppn_missing = empty( $admin_eppn );
			$user_is_admin      = $admin->user_login === $user['user_login'];
			$admin_is_authzd    = in_array( $admin_eppn, $this->wp_auth_group_members, true );
			if ( ! $admin_eppn_missing && ! $user_is_admin && $admin_is_authzd ) {
				$reassign_to_user = $admin;
				break;
			}
		}
		$user_deleted = false;
		// Delete the user if dry run is disabled.
		if ( ! $is_dryrun ) {
			$user_deleted = wp_delete_user( $user['ID'], $reassign_to_user->ID );
		} else {
			// Simulate succesful user deletion for dry run.
			$user_deleted = true;
		}
		if ( ! $user_deleted ) {
			$err = new HSPH_User_Management_Exception( "Error deleting user '{$user['user_login']}'" );
			$this->logger->log(
				LogLevel::ERROR,
				$err->getMessage(),
				array(
					'user'      => $user,
					'exception' => $err,
				)
			);
			throw $err;
		}
		$delete_log = array(
			'user_blogs' => array(
				array(
					'blog_id'       => get_current_blog_id(),
					'site_url'      => get_site_url(),
					'delete_status' => true,
					'reassigned_to' => $reassign_to_user->user_login,
				),
			),
		);
		return $delete_log;
	}

	/**
	 * Delete a user from the multisite network, and reassign all their content.
	 *
	 * @param array    $user          The user to delete.
	 * @param stdClass $default_admin The fallback admin for content reassignment.
	 * @throws HSPH_User_Management_Exception If there's an error while deleting a user.
	 * @return array A delete_log array.
	 */
	protected function delete_multisite_user( $user, $default_admin ) {
		$is_dryrun           = defined( 'HSPH_USER_MANAGEMENT_CRON_IS_DRYRUN' ) && true === HSPH_USER_MANAGEMENT_CRON_IS_DRYRUN;
		$user_blogs          = get_blogs_of_user( $user['ID'] );
		$affected_user_blogs = array();
		foreach ( $user_blogs as $user_blog ) {
			$affected_user_blog = array(
				'blog_id'       => $user_blog->userblog_id,
				'site_url'      => $user_blog->siteurl,
				'delete_status' => false,
				'reassigned_to' => 'N/A',
			);
			switch_to_blog( $user_blog->userblog_id );
			$admins           = get_users(
				array(
					'role'    => 'administrator',
					'blog_id' => $user_blog->userblog_id,
				)
			);
			$reassign_to_user = $default_admin;
			// If one of the existing site admins is an authorized user, reassign to them.
			foreach ( $admins as $admin ) {
				$admin_eppn         = get_user_meta( $admin->ID, 'eduPersonPrincipalName', true );
				$admin_eppn_missing = empty( $admin_eppn );
				$user_is_admin      = $admin->user_login === $user['user_login'];
				$admin_is_authzd    = in_array( $admin_eppn, $this->wp_auth_group_members, true );
				if ( ! $admin_eppn_missing && ! $user_is_admin && $admin_is_authzd ) {
					$reassign_to_user = $admin;
					break;
				}
			}
			$user_deleted = false;
			// Delete the user if dry run is disabled.
			if ( ! $is_dryrun ) {
				$user_deleted = wp_delete_user( $user['ID'], $reassign_to_user->ID );
			} else {
				// Simulate succesful user deletion for dry run.
				$user_deleted = true;
			}
			// Delete the user.
			$affected_user_blog['delete_status'] = $user_deleted ? true : false;
			$affected_user_blog['reassigned_to'] = $reassign_to_user->user_login;
			array_push( $affected_user_blogs, $affected_user_blog );
			restore_current_blog();
		}
		// Try to delete user from the network.
		$network_entry     = array(
			'blog_id'       => 1,
			'site_url'      => network_home_url(),
			'delete_status' => false,
			'reassigned_to' => 'N/A',
		);
		$deletion_statuses = array();
		foreach ( $affected_user_blogs as $blog ) {
			array_push( $deletion_statuses, $blog['delete_status'] );
		}
		if ( ! in_array( false, $deletion_statuses, true ) ) {
			$deleted_user_network = false;
			// Delete the network user if dry run is disabled.
			if ( ! $is_dryrun ) {
				$deleted_user_network = wpmu_delete_user( $user['ID'] );
			} else {
				// Simulate succesful network user deletion for dry run.
				$deleted_user_network = true;
			}
			if ( $deleted_user_network ) {
				$network_entry['delete_status'] = true;
			}
		} else {
			$err = new HSPH_User_Management_Exception( "Error deleting user '{$user['user_login']}' from one or more sites" );
			$this->logger->log(
				LogLevel::ERROR,
				$err->getMessage(),
				array(
					'user'      => $user,
					'exception' => $err,
				)
			);
			throw $err;
		}
		// Add the deletion log for user's network account.
		array_push( $affected_user_blogs, $network_entry );
		$delete_log = array(
			'user_blogs' => $affected_user_blogs,
		);
		return $delete_log;
	}

	/**
	 * Check if a date is more than the provided number of days in the past.
	 *
	 * @param int    $numdays The number of days to compare against.
	 * @param string $past_date A date string that can be parsed by the DateTime constructor.
	 *
	 * @return bool
	 */
	public function gt_x_days_ago( $numdays, $past_date ) {
		$now       = new DateTime();
		$then      = new DateTime( $past_date );
		$days_diff = $then->diff( $now )->format( '%a' );
		return intval( $days_diff ) > $numdays;
	}
}
