/* global mixpanel */

/**
 * External dependencies
 */
import { isEmpty } from 'lodash'

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import { useState, useEffect } from '@wordpress/element'
import { Button } from '@wordpress/components'

/**
 * Internal dependencies
 */
import WapChatEmbed from './WapChatEmbed'

const trackChatAccess = ( mode ) => {
	if ( isEmpty( rankMath.tracking ) ) {
		return
	}

	const { plugin, email, language, path } = rankMath.tracking

	mixpanel.identify( email )
	mixpanel.track(
		'wap' === mode ? 'Content AI WAP Chat Accessed' : 'Content AI Legacy Chat Accessed',
		{
			context: 'wp_plugin',
			brand: 'rankmath',
			application: 'rankmath',
			plugin,
			path,
			language,
		}
	)
}

/**
 * Wraps FREE's legacy Chat view with a toggle between it and the WAP chat embed.
 *
 * @param {Function} LegacyChatView FREE's own `Chat` component, handed to us as
 *                                  the `rank_math_content_ai_chat_view` filter's
 *                                  default argument.
 *
 * @return {Function} The switcher component.
 */
const createChatModeSwitcher = ( LegacyChatView ) => ( props ) => {
	const wapAvailable = !! rankMath.contentAI.wapChatAvailable
	const [ mode, setMode ] = useState( wapAvailable ? 'wap' : 'legacy' )

	useEffect( () => {
		trackChatAccess( mode )
	}, [ mode ] )

	if ( ! wapAvailable ) {
		return <LegacyChatView { ...props } />
	}

	const switchLink = (
		<Button
			className="rank-math-chat-mode-switcher is-small is-link"
			onClick={ () => setMode( 'wap' === mode ? 'legacy' : 'wap' ) }
		>
			{ 'wap' === mode
				? (
					<>
						<span className="rank-math-chat-mode-switcher-full">{ __( 'Switch to the legacy Content AI Chat', 'rank-math-pro' ) }</span>
						<span className="rank-math-chat-mode-switcher-short">{ __( 'Legacy Chat', 'rank-math-pro' ) }</span>
					</>
				)
				: (
					<>
						<span className="rank-math-chat-mode-switcher-full">{ __( 'Switch back to the new AI Chat', 'rank-math-pro' ) }</span>
						<span className="rank-math-chat-mode-switcher-short">{ __( 'AI Chat', 'rank-math-pro' ) }</span>
					</>
				)
			}
		</Button>
	)

	// The WAP widget renders its own title, so the switch sits in a footer row below it.
	if ( 'wap' === mode ) {
		return (
			<div className="rank-math-wap-chat-frame">
				<WapChatEmbed { ...props } />

				<div className="rank-math-wap-chat-footer">
					{ switchLink }
				</div>
			</div>
		)
	}

	// Position the switch as a top-right overlay to avoid altering Chat.js's layout.
	return (
		<div className="rank-math-chat-mode-switcher-overlay">
			{ switchLink }
			<LegacyChatView { ...props } />
		</div>
	)
}

export default createChatModeSwitcher
