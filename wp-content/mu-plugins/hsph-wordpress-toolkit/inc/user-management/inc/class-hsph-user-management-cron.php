<?php
/**
 * HSPH User Management Cron
 * Provides a class where cron jobs can be registered/managed.
 *
 * @package hsph
 * @subpackage hsph-user-management
 */

use Psr\Log\LogLevel;

/**
 * HSPH_User_Management_Cron
 */
class HSPH_User_Management_Cron {

	/**
	 * Register action hooks and schedule the cron.
	 *
	 * Unlike a regular plugin, must-use plugins cannot use register_activation_hook().
	 * Instead, the cron is scheduled on every WordPress init via register_user_mgmt_cron(),
	 * which guards against duplicate scheduling with wp_next_scheduled().
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'hsph_user_mgmt_cron', array( $this, 'user_mgmt_handler' ) );
		add_action( 'init', array( $this, 'register_user_mgmt_cron' ) );
	}

	/**
	 * Handler for the user management cron.
	 *
	 * @return void
	 */
	public function user_mgmt_handler() {
		$user_mgmt_logger = new HSPH_User_Management_Logger(
			HSPH_USER_MANAGEMENT_LOG_PATH,
			HSPH_USER_MANAGEMENT_LOG_LEVEL
		);
		// A timeout of 120s is already set for all Grouper requests in send_grouper_request().
		// 1800 seconds or 30 minutes should be more than enough time to accommodate this task.
		// Especially since only script execution time is counted towards this limit.
		// See https://www.php.net/manual/en/function.set-time-limit.php.
		set_time_limit( 1800 );
		// Check if the cron job is enabled.
		if ( ! HSPH_USER_MANAGEMENT_CRON_ENABLED ) {
			$user_mgmt_logger->log(
				LogLevel::INFO,
				'User management cron is disabled'
			);
			return;
		}
		$user_mgmt = new HSPH_User_Management( $user_mgmt_logger );
		$user_mgmt->user_mgmt_session(
			HSPH_USER_MANAGEMENT_CRON_IS_DRYRUN,
			HSPH_USER_MANAGEMENT_CRON_USE_FAILSAFE
		);
	}

	/**
	 * Schedules the user management cron if not already scheduled.
	 *
	 * @return void
	 */
	public function register_user_mgmt_cron() {
		// If the job is not already scheduled, schedule it.
		if ( ! wp_next_scheduled( 'hsph_user_mgmt_cron' ) ) {
			wp_schedule_event( strtotime( '1AM' ), 'weekly', 'hsph_user_mgmt_cron' );
		}
	}

	/**
	 * Unschedules the user management cron. Call this manually if you need to
	 * remove the cron event (e.g., when disabling user management).
	 *
	 * @return void
	 */
	public function unschedule_user_mgmt_cron() {
		// Remove all future occurrences of this job.
		wp_clear_scheduled_hook( 'hsph_user_mgmt_cron' );
	}
}
