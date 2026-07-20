<?php
/**
 * Add the Google Analytics Tracking code to the page.
 * Depending on the tracking ids provided and options chosen.
 *
 * @package hpsh
 * @subpackage hsph-plugin-google-analytics-tracking
 */

/**
 * HSPH_Plugin_Google_Analytics_Tracking_Display Class.
 */
class HSPH_Plugin_Google_Analytics_Tracking_Display {

	/**
	 * The site tracking GA Profile IDs.
	 * Stored in an array for retrevial by the file tracking portion if needed.
	 *
	 * (default value: array())
	 *
	 * @var string
	 * @access public
	 */
	public $site_trackers = array();

	/**
	 * Init function.
	 *
	 * @access public
	 * @return void
	 */
	public function init() {
		add_action( 'wp_head', array( $this, 'google_analytics_tracking_code' ) );

		// Only show google tag manager if enabled.
		if ( $this->get_contextual_setting( 'network', 'hsph_google_analytics_tag_manager', 'no' ) === 'yes' ) {
			add_action( 'wp_head', array( $this, 'google_tag_manager' ) );
			add_action( 'wp_footer', array( $this, 'google_tag_manager_noscript_footer' ) );
		}
	}

	/**
	 * Add google analytics Tracking Code to the page.
	 *
	 * @access public
	 * @return void
	 */
	public function google_analytics_tracking_code() {
		?>
<!-- Google Analytics -->
<script type="text/javascript">
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
			<?php
			if ( is_multisite() ) {
				$this->google_analytics_display_profiles( 'network' );
			}

			$this->google_analytics_display_profiles( 'site' );

			// display the code for file tracking if required.
			if ( count( $this->site_trackers ) > 0 ) {
				$this->google_analytics_track_files();
			}
			?>
</script>
<!-- End Google Analytics -->
		<?php
	}

	/**
	 * Add Tracking Code for Google Tag Manager to the header.
	 *
	 * @access public
	 * @return void
	 */
	public function google_tag_manager() {
		$gtm_id = $this->get_contextual_setting( 'network', 'hsph_google_analytics_tag_manager_key', '' );
		?>

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','<?php echo esc_attr( $gtm_id ); ?>');</script>
<!-- End Google Tag Manager -->
		<?php
	}

	/**
	 * Add Tracking Code for Google Tag Manager to the footer for noscript use.
	 *
	 * @access public
	 * @return void
	 */
	public function google_tag_manager_noscript_footer() {
		if ( $this->get_contextual_setting( 'network', 'hsph_google_analytics_tag_manager', 'no' ) === 'yes' ) {
			$gtm_id = $this->get_contextual_setting( 'network', 'hsph_google_analytics_tag_manager_key', '' );
			?>
			<!-- Google Tag Manager (noscript) -->
			<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=<?php echo esc_attr( $gtm_id ); ?>"
			height="0" width="0" title="Google tag manager" aria-hidden="true" style="display:none;visibility:hidden"></iframe></noscript>			<!-- End Google Tag Manager (noscript) -->
			<?php
		}
	}

	/**
	 * Create the GA tracker object for each to the Google Analytics IDs we have.
	 * These can be netowrk or local.
	 *
	 * @access public
	 *
	 * @param string $type Type of option in use here.
	 *
	 * @return void
	 */
	public function google_analytics_display_profiles( $type = '' ) {

		$prefix = 's';

		if ( 'network' === $type ) {
			$prefix = 'n';
		}

		$google_profiles = $this->get_contextual_setting( $type, 'hsph_google_analytics_profiles', '' );

		if ( ! empty( $google_profiles ) ) {
			$profiles_list = explode( ',', $google_profiles );

			$i = 0;
			foreach ( $profiles_list as $profile ) {
				$i++;

				// prevent empty profiles.
				if ( trim( $profile ) === '' ) {
					continue;
				}

				$cookie_domain = $this->sanitize_domain( $this->get_contextual_setting( $type, 'hsph_google_analytics_cookie_domain', 'auto' ) );

				echo "
	ga( 'create', '" . esc_attr( $profile ) . "', '" . esc_attr( $cookie_domain ) . "', 'tracker" . esc_attr( $prefix ) . absint( $i ) . "');";

				if ( $this->get_contextual_setting( $type, 'hsph_google_analytics_demographics', 'no' ) === 'yes' ) {
					echo "
	ga( 'tracker" . esc_attr( $prefix ) . absint( $i ) . ".require', 'displayfeatures');";
				}

				if ( $this->get_contextual_setting( $type, 'hsph_google_analytics_enhanced_links', 'no' ) === 'yes' ) {
					echo "
	ga( 'tracker" . esc_attr( $prefix ) . absint( $i ) . ".require', 'linkid');";
				}

				// add a variable for loggin in vs not loged in.
				if ( is_user_logged_in() ) {
					echo "
	ga( 'tracker" . esc_attr( $prefix ) . absint( $i ) . ".set', 'dimension1', 'logged_in' );
	ga( 'tracker" . esc_attr( $prefix ) . absint( $i ) . ".set', 'dimension2', '" . esc_attr( get_current_user_id() ) . "' );";
				} else {
					echo "
	ga( 'tracker" . esc_attr( $prefix ) . absint( $i ) . ".set', 'dimension1', 'signed_out' );
	ga( 'tracker" . esc_attr( $prefix ) . absint( $i ) . ".set', 'dimension2', 'none' );";
				}

				echo "
	ga( 'tracker" . esc_attr( $prefix ) . absint( $i ) . ".send', 'pageview');

";

				if ( $this->get_contextual_setting( $type, 'hsph_google_analytics_download_tracking', 'no' ) === 'yes' ) {
					$this->site_trackers[] = 'tracker' . $prefix . $i;
				}
			}
		}
	}

	/**
	 * File download tracking code.
	 * Based on tracking links and placing an onclick on each link to fire before the link is clicked.
	 *
	 * @access public
	 * @return void
	 */
	public function google_analytics_track_files() {
		?>
			jQuery(document).ready( function($) {

			var filetypes = "/\.(<?php echo esc_html( $this->get_contextual_setting( 'network', 'hsph_google_analytics_download_filetype', 'zip|exe|pdf|doc*|xls*|ppt*|mp3' ) ); ?>)$/i";
			var baseHref = "";

			if ( $( 'base' ).attr('href') != undefined ) {
				baseHref = $( 'base' ).attr('href');
			}

			$( '#content a' ).each(function() {
				var href = $( this ).attr( 'href' );
				if ( href && (href.match(/^https?\:/i)) && (!href.match(document.domain)) && (!href.match('<?php echo esc_html( $this->get_contextual_setting( 'network', 'hsph_google_analytics_download_cdn', get_site_url() ) ); ?>'))) {
					$( this ).click(function() {
						var clicklink = href.replace(/^https?\:\/\//i, '');
			<?php
			foreach ( $this->site_trackers as $tracker ) {
				echo "
						ga( '" . esc_attr( $tracker ) . ".send', 'event', {
							eventCategory: 'Outbound Link',
							eventAction: 'click',
							eventLabel: clicklink,
							transport: 'beacon'
						});
				";
			}
			?>
						if ( $(this).attr( 'target' ) != undefined && $( this ).attr( 'target' ).toLowerCase() != '_blank') {
							setTimeout(function() { location.href = href; }, 200);
							return false;
						}
					});
				} else if (href && href.match(/^mailto\:/i)) {
					$(this).click(function() {
						var mailLink = href.replace(/^mailto\:/i, '');
			<?php
			foreach ( $this->site_trackers as $tracker ) {
				echo "
						ga( '" . esc_attr( $tracker ) . ".send', 'event', {
							eventCategory: 'Email',
							eventAction: 'click',
							eventLabel: mailLink,
							transport: 'beacon'
						});
				";
			}
			?>
					});
				} else if (href && href.match(filetypes)) {
					$(this).click(function() {
						var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
						var filePath = href;

			<?php
			foreach ( $this->site_trackers as $tracker ) {
				echo "
						ga( '" . esc_attr( $tracker ) . ".send', 'event', {
							eventCategory: 'Download',
							eventAction: 'click-' + extension,
							eventLabel: filePath,
							transport: 'beacon'
						});
				";
			}
			?>
						if ( $(this).attr('target') != undefined && $(this).attr('target').toLowerCase() != '_blank') {
							setTimeout(function() { location.href = baseHref + href; }, 200);
							return false;
						}
					});
				}
			});
		});
		<?php
	}

	/**
	 * Return the setting value based on netowrk or not.
	 *
	 * @access public
	 *
	 * @param string $type Type of option in use here.
	 * @param string $field Field name to retrieve.
	 * @param mixed  $default Default Value to use.
	 *
	 * @return mixed The option value of the setting.
	 */
	public function get_contextual_setting( $type = '', $field = '', $default = false ) {
		if ( empty( $field ) ) {
			return false;
		}

		// If we are looking for a network option and we are on a network install then get it.
		// Otherwise fefault to a non network option.
		if ( 'network' === $type && is_multisite() ) {
			return get_site_option( $field, $default );
		} else {
			return get_option( $field, $default );
		}

	}

	/**
	 * Sanitize a the domain name for use in the GA display.
	 *
	 * @access public
	 *
	 * @param string $input String to be sanitzed.
	 *
	 * @return string Parsed URL.
	 */
	public function sanitize_domain( $input ) {
		if ( empty( $input ) || trim( $input ) === '' || trim( strtolower( $input ) ) === 'auto' ) {
			return 'auto';
		}

		$input = esc_url_raw( $input );

		// in case scheme relative URI is passed, e.g., //www.google.com/.
		$input = trim( $input, '/' );

		// If scheme not included, prepend it.
		if ( ! preg_match( '#^http(s)?://#', $input ) ) {
			$input = 'http://' . $input;
		}

		$url_parts = wp_parse_url( $input );

		// remove www.
		$domain = preg_replace( '/^www\./', '', $url_parts['host'] );

		// return the domain.
		return $domain;
	}
}
