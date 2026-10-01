<?php
/**
 * WP-CLI commands for HSPH User Management.
 *
 * @package hsph
 * @subpackage hsph-user-management
 */

/**
 * Manage HSPH user metadata.
 */
class HSPH_User_Management_CLI {

	/**
	 * Import eduPersonPrincipalName user meta from PDS for all WordPress users.
	 *
	 * Queries PDS using each WordPress user's email to retrieve their eppn,
	 * then stores it as the eduPersonPrincipalName user meta field.
	 *
	 * ## OPTIONS
	 *
	 * [--dry-run]
	 * : Preview changes without writing to the database.
	 *
	 * ## EXAMPLES
	 *
	 *     wp hsph_user_management import_eppn
	 *     wp hsph_user_management import_eppn --dry-run
	 *
	 * @param array $args       Positional arguments.
	 * @param array $assoc_args Associative arguments.
	 */
	public function import_eppn( $args, $assoc_args ) {
		$dry_run = WP_CLI\Utils\get_flag_value( $assoc_args, 'dry-run', false );

		// Get all WordPress users network-wide (blog_id 0 skips the current-site scoping
		// get_users() applies by default on multisite) and build an email-to-user map.
		$users = get_users(
			array(
				'blog_id' => 0,
				'fields'  => array( 'ID', 'user_login', 'user_email' ),
			)
		);
		if ( empty( $users ) ) {
			WP_CLI::error( 'No WordPress users found.' );
		}

		$emails         = wp_list_pluck( $users, 'user_email' );
		$users_by_email = array();
		foreach ( $users as $user ) {
			$users_by_email[ $user->user_email ] = $user;
		}

		WP_CLI::log( sprintf( 'Querying PDS for %d user emails...', count( $emails ) ) );

		try {
			$eppns_by_email = HSPH_User_Management_PDS::get_pds_eppns( $emails );
		} catch ( HSPH_User_Management_Exception $e ) {
			WP_CLI::error( 'PDS request failed: ' . $e->getMessage() );
		}

		WP_CLI::log( sprintf( 'PDS returned %d eppn(s).', count( $eppns_by_email ) ) );

		$updated = 0;
		$errors  = 0;

		foreach ( $users_by_email as $email => $user ) {
			if ( isset( $eppns_by_email[ $email ] ) ) {
				$eppn = $eppns_by_email[ $email ] . '@harvard.edu';
			} else {
				WP_CLI::warning( "No PDS eppn found for user '{$user->user_login}' ({$email}), setting empty value." );
				$eppn = '';
			}

			if ( $dry_run ) {
				WP_CLI::log( "Dry run: would set eduPersonPrincipalName='{$eppn}' for user '{$user->user_login}' (ID {$user->ID})." );
				++$updated;
				continue;
			}

			$result = update_user_meta( $user->ID, 'eduPersonPrincipalName', $eppn );
			if ( false === $result ) {
				WP_CLI::warning( "Failed to update meta for user '{$user->user_login}'." );
				++$errors;
			} else {
				WP_CLI::log( "Updated eduPersonPrincipalName='{$eppn}' for user '{$user->user_login}' (ID {$user->ID})." );
				++$updated;
			}
		}

		$label = $dry_run ? 'Would update' : 'Updated';
		WP_CLI::success( "{$label}: {$updated}, Errors: {$errors}." );
	}
}
