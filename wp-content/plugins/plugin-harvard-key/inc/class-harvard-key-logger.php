<?php
/**
 *
 * Adds a HarvardKey logger.
 *
 * @package hpsh
 * @subpackage plugin-harvard-key
 */

use Monolog\Handler\StreamHandler;
use Monolog\Logger;

/**
 * A basic Monolog logger.
 *
 * @package hpsh
 * @subpackage plugin-harvard-key
 */

/**
 * Harvard_Key_Logger class.
 */
class Harvard_Key_Logger {

	/**
	 * Class constructor
	 *
	 * @throws Exception If HARVARD_KEY_DEBUG is enabled and HARVARD_KEY_DEBUG_FILE is not defined.
	 */
	public function __construct() {
		if (
			(
				// Only execute the second expression if HARVARD_KEY_DEBUG is defined.
				defined( 'HARVARD_KEY_DEBUG' ) && true === HARVARD_KEY_DEBUG
			)
			&&
			! defined( 'HARVARD_KEY_DEBUG_FILE' )
		) {
			throw new Exception( 'HARVARD_KEY_DEBUG_FILE is not defined' );
		}
		$logger = new Logger( 'plugin_harvard_key' );
		$logger->pushHandler( new StreamHandler( HARVARD_KEY_DEBUG_FILE, Logger::INFO ) );
		$this->logger = $logger;
	}

	/**
	 * A function to var_export and error_log if HarvardKey debug is activated.
	 *
	 * @param mixed $data data to be added to the log.
	 *
	 * @return void
	 */
	public function log( $data ) {
		if ( defined( 'HARVARD_KEY_DEBUG' ) && true === HARVARD_KEY_DEBUG ) {
			$this->logger->info( var_export( $data, true ) ); // phpcs:ignore WordPress.PHP.DevelopmentFunctions
		}
	}
}
