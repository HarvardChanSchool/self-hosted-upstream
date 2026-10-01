<?php
/**
 * An exception class that integrates nicely with HSPH_User_Management_Logger.
 *
 * @package hsph
 * @subpackage hsph-user-management
 */

/**
 * HSPH_User_Management_Exception
 */
class HSPH_User_Management_Exception extends Exception {

	/**
	 * The previous exception, used for linking in traceback.
	 *
	 * @var Exception
	 */
	public $previous;

	/**
	 * Extra user defined detail to provide logging context.
	 *
	 * @var array
	 */
	public $extra;

	/**
	 * Redefine the exception constructor so message isn't optional.
	 *
	 * @param string    $message The error message that will display in logs.
	 * @param array     $extra Extra user defined detail to provide logging context.
	 * @param integer   $code The unique code for that exception. Helpful for sorting/filtering logs.
	 * @param Exception $previous The previous exception, if it exists.
	 */
	public function __construct( string $message, array $extra = array(), int $code = 0, Exception $previous = null ) {
		// Make sure everything is assigned properly.
		parent::__construct( $message, $code );

		if ( ! is_null( $previous ) ) {
			// Exception chaining for a working traceback.
			$this->previous = $previous;
		}
		$this->extra = $extra;
	}

	/**
	 * Custom string representation of object.
	 *
	 * @return string
	 */
	public function __toString() {
		return __CLASS__ . ": [{$this->code}]: {$this->message}\n";
	}
}
