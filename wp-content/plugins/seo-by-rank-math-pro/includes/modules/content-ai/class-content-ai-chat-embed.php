<?php
/**
 * Registers the WAP chat as an inline embed inside Content AI's Chat tab.
 *
 * @since      3.0.123
 * @package    RankMathPro
 * @subpackage RankMathPro\ContentAI
 * @author     Rank Math <support@rankmath.com>
 */

namespace RankMathPro;

use RankMath\Agent\Agent;
use RankMath\Agent\Support_Agent;
use RankMath\Helper;
use RankMath\KB;
use RankMath\Helpers\Param;
use RankMath\Traits\Hooker;
use RankMath\Traits\Grnd_Provider;
use RankMath\ContentAI\Content_AI as Content_AI_Free;

defined( 'ABSPATH' ) || exit;

/**
 * Content_AI_Chat_Embed class.
 */
class Content_AI_Chat_Embed {

	use Hooker;
	use Grnd_Provider;

	/** Embed id, namespaces the DOM id + auth/consent lookups. */
	const EMBED_ID = 'content-ai-chat';

	/** Product slug, aliased from Agent — all WAP personas currently share one product/role. */
	const PRODUCT = Agent::PRODUCT;

	/**
	 * Class constructor.
	 */
	public function __construct() {
		if ( ! class_exists( '\WapClient' ) || ! class_exists( '\RankMath\Agent\Agent' ) ) {
			return;
		}

		$this->action( 'init', 'register_embed' );
		// Priority 20: runs after ChatEmbed::maybe_activate() (library's own priority 5), so has_chatbox() below reflects the real per-screen result.
		$this->action( 'admin_enqueue_scripts', 'localize_availability', 20 );
		$this->action( 'admin_enqueue_scripts', 'enqueue_mixpanel_for_page' );

		// Priority 30: runs after FREE registers the shared content-ai handle (no explicit deps of its own), so it's already loaded when we declare it as our dependency below.
		$this->action( 'admin_enqueue_scripts', 'content_ai_page_scripts', 30 );
		$this->action( 'rank_math/admin/editor_scripts', 'editor_scripts', 30 );
	}

	/**
	 * Register the Content AI chat embed, scoped to the post editor and the Content AI admin page.
	 */
	public function register_embed() {
		\WapClient::register_chat_embed(
			[
				'id'              => self::EMBED_ID,
				'product'         => self::PRODUCT,
				'capability'      => 'manage_options',
				'server_url'      => Agent::get_server_url(),
				'screens'         => [ 'post', 'page', 'rank-math_page_rank-math-content-ai-page' ],
				'page_context'    => 'chat',
				'grnd_provider'   => [ $this, 'acquire_grnd' ],
				'terms_url'       => KB::get( 'terms-and-conditions', 'Content AI Chat Terms Link' ),
				'site_access_url' => KB::get( 'assistant-site-access', 'Content AI Chat Site Access Link' ),
				'privacy_url'     => KB::get( 'privacy-policy', 'Content AI Chat Privacy Policy Link' ),
				'brand'           => 'rankmath',
				'title'           => esc_html__( 'Rank Math Assistant', 'rank-math-pro' ),
				'layout'          => [
					'height'            => '70vh',
					// The embed shares product `rankmath` with the Support Agent, so it
					// reads and writes the same stored choices; without the gear the user
					// could act through this surface with no way to see or change them.
					'showSettings'      => true,
					// Hidden on every Rank Math surface for now.
					'showAgentSelector' => false,
				],
				// Reuses FREE's definition rather than restating the rows: the library keys
				// rows by id per product, so both surfaces must register identical ids or
				// they would present the user two controls over one stored value.
				'permissions'     => Support_Agent::get_permission_rows(),
				'i18n'            => Agent::get_i18n(),
			]
		);
	}

	/**
	 * GRND provider callback: mints, seals, and exchanges the credential for a GRND.
	 *
	 * @return array{grnd:string,expires_at:int}|\WP_Error
	 */
	public function acquire_grnd() {
		return $this->acquire_grnd_for( self::PRODUCT, 'Rank Math Content AI Chat' );
	}

	/**
	 * Localize the embed id and its per-screen availability for the Content AI JS.
	 */
	public function localize_availability() {
		Helper::add_json(
			'contentAI',
			[
				'wapChatEmbedId'   => self::EMBED_ID,
				'wapChatAvailable' => \WapClient::has_chatbox( self::EMBED_ID ),
			]
		);
	}

	/**
	 * Enqueue MixPanel on the Content AI admin page and Classic Editor screens, where FREE's block-editor-only Tracking::enqueue_mixpanel() doesn't run.
	 */
	public function enqueue_mixpanel_for_page() {
		$is_content_ai_page = 'rank-math-content-ai-page' === Param::get( 'page' );
		$is_classic_editor  = ! Helper::is_block_editor() && Content_AI_Free::can_add_tab();

		if ( ! $is_content_ai_page && ! $is_classic_editor ) {
			return;
		}

		rank_math()->tracking->enqueue_mixpanel_for_page();
	}

	/**
	 * Enqueue the Content AI JS bundle on the standalone Content AI admin page, independent of Content_AI's own business-plan gate.
	 */
	public function content_ai_page_scripts() {
		if ( 'rank-math-content-ai-page' !== Param::get( 'page' ) ) {
			return;
		}

		$this->enqueue_script();
	}

	/**
	 * Enqueue the Content AI JS bundle on post editor screens, independent of Content_AI's own business-plan gate.
	 */
	public function editor_scripts() {
		if ( ! Content_AI_Free::can_add_tab() ) {
			return;
		}

		$this->enqueue_script();
	}

	/**
	 * Enqueue the shared `rank-math-pro-content-ai` bundle, deduped by handle with Content_AI's own enqueue of the same script.
	 */
	private function enqueue_script() {
		wp_enqueue_script(
			'rank-math-pro-content-ai',
			RANK_MATH_PRO_URL . 'includes/modules/content-ai/assets/js/content-ai.js',
			[ 'rank-math-content-ai', 'rank-math-components' ],
			rank_math_pro()->version,
			true
		);
	}
}
