<?php
/**
 * A simple JSON logger. Based on Monolog/PSR-3.
 *
 * @package hsph
 * @subpackage hsph-user-management
 */

use Psr\Log\LogLevel;

/**
 * HSPH_User_Management_Logger
 */
class HSPH_User_Management_Logger implements \JsonSerializable {

	/**
	 * The path of the file to log to.
	 *
	 * @var string
	 */
	public $log_path;

	/**
	 * The exception to log.
	 *
	 * @var Exception
	 */
	public $exception;

	/**
	 * The allowed log levels.
	 *
	 * @var array
	 */
	public $levels;

	/**
	 * Create a logger.
	 *
	 * @param string $log_path The path to the log file to use.
	 * @param string $print_log_level Logs with a level below this will not print to the log file.
	 * @param array  $global_context Items in this array will be added to every log.
	 */
	public function __construct( $log_path, $print_log_level, array $global_context = array() ) {
		$this->log_path = $log_path;
		// Create the log file if it doesn't exist.
		if ( ! file_exists( $log_path ) ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_operations_touch
			touch( $log_path );
		}
		$this->log_levels      = array(
			LogLevel::EMERGENCY => 0,
			LogLevel::ALERT     => 1,
			LogLevel::CRITICAL  => 2,
			LogLevel::ERROR     => 3,
			LogLevel::WARNING   => 4,
			LogLevel::NOTICE    => 5,
			LogLevel::INFO      => 6,
			LogLevel::DEBUG     => 7,
		);
		$this->print_log_level = $this->log_levels[ $print_log_level ];
		$this->global_context  = $global_context;
	}

	/**
	 * Create an array of structured log data. If the log level is greater than or equal to the
	 * print_log_level, print it to the log file as a JSON object.
	 *
	 * @param string $level The level of the log, used for conditional printing, etc.
	 * @param string $message The log message.
	 * @param array  $context An array of other information to present in the log. If an instance of an
	 * exception is provided, it must be in the 'exception' key.
	 */
	public function log( string $level, string $message, array $context = array() ) {
		if ( defined( 'HSPH_USER_MANAGEMENT_CRON_IS_DRYRUN' ) && true === HSPH_USER_MANAGEMENT_CRON_IS_DRYRUN ) {
			$message = 'DRYRUN: ' . $message;
		}
		$this->exception = $context['exception'] ?? null;
		unset( $context['exception'] );
		// Merge the global context with the log context.
		$this->extra = array_merge( $this->global_context, $context );
		$date_string = new DateTimeImmutable( 'now', new DateTimeZone( 'America/New_York' ) );
		// An array representation of the log that will be converted to JSON by self::jsonSerialize.
		$this->log = array(
			'level'    => $level,
			'message'  => $message,
			'datetime' => array(
				'date'     => $date_string->format( 'Y-m-d\TH:i:s.uP' ),
				'timezone' => 'America/New_York',
			),
			'extra'    => $this->extra,
		);
		// If an exception is passed to the logger, add the info we want to the log.
		if ( ! empty( $this->exception ) ) {
			$this->log_error();
		}
		// Is one of pre-defined log levels.
		$is_ll = array_key_exists( $level, $this->log_levels );
		// Is gte the print log level (below which we don't print to the log file).
		$gte_pll = $this->log_levels[ $level ] <= $this->print_log_level;
		// Conditionally print the log.
		if ( $is_ll && $gte_pll ) {
			// phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
			error_log( $this, 3, $this->log_path );
		}
	}

	/**
	 * An error was provided, add its data to the log.
	 *
	 * @return void
	 */
	public function log_error() {
		// Merge the exception's context with the log's context.
		$this->extra    = array_merge( $this->extra, $this->exception->extra ?? array() );
		$exception_data = array(
			'class'   => get_class( $this->exception ),
			'message' => $this->exception->getMessage(),
			'code'    => (int) $this->exception->getCode(),
			'file'    => $this->exception->getFile() . ':' . $this->exception->getLine(),
		);
		// Add trace info.
		$trace = $this->exception->getTrace();
		foreach ( $trace as $frame ) {
			if ( isset( $frame['file'] ) ) {
				$exception_data['trace'][] = $frame['file'] . ':' . $frame['line'];
			}
		}
		$this->log['exception'] = $exception_data;
	}

	/**
	 * The json_encode function will call this when this object is passed to it.
	 *
	 * @return string A string in JSON format.
	 */
	public function jsonSerialize(): mixed {
		//phpcs:ignore WordPress.WP.AlternativeFunctions.json_encode_json_encode
		return json_encode( $this->log, JSON_UNESCAPED_SLASHES );
	}

	/**
	 * Custom string representation of object.
	 *
	 * @return string
	 */
	public function __toString() {
		return self::jsonSerialize() . PHP_EOL;
	}
}
