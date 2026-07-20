<?php
/**
 * Content Box Shortcode.
 *
 * @package    hpsh
 * @subpackage plugin-ui-shortcodes
 */

/**
 * HSPH_UI_Shortcode_Cbox class.
 */
class HSPH_UI_Shortcode_Cbox {

	/**
	 * The shortcode.
	 *
	 * (default value: 'cbox')
	 *
	 * @var    string
	 * @access public
	 */
	public $shortcode = 'cbox';

	/**
	 * __construct function.
	 *
	 * @access public
	 * @return void
	 */
	public function __construct() {
		add_shortcode( $this->shortcode, array( $this, 'add_shortcode' ) );
		add_action( 'register_shortcode_ui', array( $this, 'register_shortcode_ui' ) );
		add_action( 'after_setup_theme', array( $this, 'add_card_image_sizes' ) );
	}

	/**
	 * Add image sizes for the content cards.
	 *
	 * @access public
	 * @return void
	 */
	public function add_card_image_sizes() {
		add_image_size( 'hsph-shortcode-ui-cbox-image', 500, 500, false );
	}

	/**
	 * Add_shortcode function.
	 *
	 * @access public
	 * @param  mixed $atts    The shortcode attributes.
	 * @param  mixed $content (default: null) The shortcode content.
	 * @return string The generated html code for the shortcode
	 */
	public function add_shortcode( $atts, $content = null ) {
		// Null content check.
		if ( null === $content ) {
			return;
		} else {
			$content = do_shortcode( rtrim( $content ) );
		}

		// Remove the whitespace / empty <p> from the end of $content.
		$content = preg_replace( '/<p>(?:\s|&nbsp;)*?<\/p>/i', '', force_balance_tags( $content ) );

		$attributes = shortcode_atts(
			array(
				'title'     => '',
				'image'     => '',
				'link'      => '',
				'readmore'  => '',
				'class'     => '',
				'style'     => '',
				'img_align' => '',
				'img_size'  => '',
			),
			$atts
		);

		// Extracting the shortcode attributes.
		$title     = $attributes['title'];
		$image     = $attributes['image'];
		$img_align = $attributes['img_align'];
		$img_size  = $attributes['img_size'];
		$link      = $attributes['link'];
		$readmore  = $attributes['readmore'];
		$class     = $attributes['class'];
		$style     = $attributes['style'];

		// We need to support $image being either an URL (legacy support) or an WP Attachment Post ID.
		// We check if $image looks like a WP Attachment Post ID.
		if ( is_numeric( $image ) ) {
			$image = wp_get_attachment_image( $image, 'hsph-shortcode-ui-cbox-image w-100' );
		} elseif ( filter_var( $image, FILTER_VALIDATE_URL ) ) { // We check if $image looks like a valid URL otherwise we set it as an empty string.
			$image = '<img class="w-100" src="' . esc_url( $image ) . '" title="' . esc_attr( $title ) . '" alt="' . esc_attr( $title ) . '">';
		} else {
			$image = '';
		}

		// Image size.
		$img_col_size = '';
		$con_col_size = 'col-md-12 ';
		if ( ! empty( $image ) ) {
			$img_col_size = 'col-md-5 ';
			$con_col_size = 'col-md-7 ';
			if ( 'medium' === $img_size ) {
				$img_col_size = 'col-md-4 ';
				$con_col_size = 'col-md-8 ';
			} elseif ( 'small' === $attributes['img_size'] ) {
				$img_col_size = 'col-md-3 ';
				$con_col_size = 'col-md-9 ';
			}
		}

		// Image alignment.
		$img_align_class = '';
		if ( 'right' === $img_align ) {
			$img_align_class = ' order-md-2';
		}

		// Generate image div.
		if ( ! empty( $image ) ) {
			$img_div = '<div class="ui-content-image mb-3 mb-md-0 ' . esc_attr( $img_align_class ) . ' ' . esc_attr( $img_col_size ) . '">' . $image . '</div>';
		} else {
			$img_div = '';
		}

		// Checking which color is selected from dropdown and adding the appropiate class.
		if ( 'blue' === $style ) {
			$class .= ' border-primary ';
		} elseif ( 'crimson' === $style ) {
			$class .= ' border-crimson ';
		} elseif ( 'green' === $style ) {
			$class .= ' border-positive ';
		} elseif ( 'orange' === $style ) {
			$class .= ' border-info ';
		} elseif ( 'red' === $style ) {
			$class .= ' border-alert ';
		} else {
			$class .= '';
		}

		// Generate random number to use as the header ID name.
		$random_id = wp_rand();
		$random_id = 'cbox-content-header' . $random_id;

		if ( ! empty( $title ) ) {
			// Do we have a link? But we only add the link if the readmore button is not displayed.
			if ( ! empty( $link ) && empty( $readmore ) ) {
				$title = '<a href="' . esc_url( $link ) . '">' . esc_html( $title ) . '</a>';
			} else {
				$title = esc_html( $title );
			}

			$title = '<h4 id="' . esc_html( $random_id ) . '" class="ui-content-header card-title">' . $title . '</h4>';
		}

		// Do we have a read more label and a link?
		if ( ! empty( $link ) && ! empty( $readmore ) ) {
			$readmore = '<a class="ui-content-readmore btn btn-primary mt-3" href="' . esc_url( $link ) . '" aria-labelledby="' . esc_attr( $random_id ) . '" >' . esc_html( $readmore ) . '</a>';
		}

		// Return the generated html for the shortcode.
		return '<div class="hsph-bootstrap content-box"><div class="card mb-4 border-left ' . esc_attr( $class ) . '"><div class="content-box card-body row ">' . $img_div . '<div class="' . esc_attr( $con_col_size ) . '">' . $title . '<div class="card-text">' . $content . '</div>' . $readmore . '</div></div></div></div>';
	}

	/**
	 * Add the shortcake UI integration for the shortcode.
	 *
	 * @access public
	 * @return void
	 */
	public function register_shortcode_ui() {
		// We build the shortcode attributes array.
		$fields = array(
			array(
				'label'       => esc_html__( 'Title', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( '(optional) The title of the highlighted content', 'hsph-ui-shortcodes' ),
				'attr'        => 'title',
				'type'        => 'text',
			),
			array(
				'label'       => esc_html__( 'Link', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( '(optional) If you want the title and image to be active links', 'hsph-ui-shortcodes' ),
				'attr'        => 'link',
				'type'        => 'url',
			),
			array(
				'label'       => esc_html__( 'Image', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( '(optional) The image to display on the left of the highlighted content', 'hsph-ui-shortcodes' ),
				'attr'        => 'image',
				'type'        => 'attachment',
				'libraryType' => array( 'image' ),
				'addButton'   => esc_html__( 'Select Image', 'hsph-ui-shortcodes' ),
				'frameTitle'  => esc_html__( 'Select Image', 'hsph-ui-shortcodes' ),
			),
			array(
				'label'       => esc_attr__( 'Image Alignment', 'hsph-ui-shortcodes' ),
				'description' => esc_attr__( 'Choose image alignment', 'hsph-ui-shortcodes' ),
				'attr'        => 'img_align',
				'type'        => 'select',
				'options'     => array(
					'left'  => esc_html__( 'Left - Default', 'hsph-ui-shortcodes' ),
					'right' => esc_html__( 'Right', 'hsph-ui-shortcodes' ),
				),
			),
			array(
				'label'       => esc_attr__( 'Image Size', 'hsph-ui-shortcodes' ),
				'description' => esc_attr__( 'Choose image size', 'hsph-ui-shortcodes' ),
				'attr'        => 'img_size',
				'type'        => 'select',
				'options'     => array(
					'larg'   => esc_html__( 'Large - Default', 'hsph-ui-shortcodes' ),
					'medium' => esc_html__( 'Medium', 'hsph-ui-shortcodes' ),
					'small'  => esc_html__( 'Small', 'hsph-ui-shortcodes' ),
				),
			),
			array(
				'label'       => esc_html__( '"Read more" link text', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( '(optional) Display a "read more" link with this text', 'hsph-ui-shortcodes' ),
				'attr'        => 'readmore',
				'type'        => 'text',
			),
			array(
				'label'       => esc_attr__( 'Highlight style', 'hsph-ui-shortcodes' ),
				'description' => esc_attr__( 'Choose the left border color', 'hsph-ui-shortcodes' ),
				'attr'        => 'style',
				'type'        => 'select',
				'options'     => array(
					'grey'    => esc_attr__( 'Neutral - Grey - Default', 'hsph-ui-shortcodes' ),
					'blue'    => esc_attr__( 'Highlighted - Blue', 'hsph-ui-shortcodes' ),
					'crimson' => esc_attr__( 'Highlighted - Crimson', 'hsph-ui-shortcodes' ),
					'green'   => esc_attr__( 'Positive - Green', 'hsph-ui-shortcodes' ),
					'orange'  => esc_attr__( 'Info - Orange', 'hsph-ui-shortcodes' ),
					'red'     => esc_attr__( 'Alert - Red', 'hsph-ui-shortcodes' ),
				),
			),
		);
		// We build the shortcake arguments array.
		$shortcode_ui_args = array(
			// The shortcode name.
			'label'         => esc_html__( 'Highlighted content', 'hsph-ui-shortcodes' ),
			// The icon.
			'listItemImage' => '<img src="' . esc_url( HSPH_UI_SHORTCODES_ASSETS_URL . 'images/shortcake-preview/cbox.png' ) . '" />',
			// Define where the shorcode can be added.
			'post_type'     => HSPH_UI_Shortcodes::get_shortcake_post_types(),
			// The shortcode attributes we previously registered.
			'attrs'         => $fields,
			// The content of the CBox.
			'inner_content' => array(
				'label'       => esc_html__( 'Content', 'hsph-ui-shortcodes' ),
				'description' => esc_html__( 'The text to display inside of the highlighted content area', 'hsph-ui-shortcodes' ),
			),
		);
		shortcode_ui_register_for_shortcode( $this->shortcode, $shortcode_ui_args );
	}
}
