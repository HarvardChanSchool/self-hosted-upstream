/**
 * WordPress dependencies
 */
import { useEffect, useRef } from '@wordpress/element'

const WapChatEmbed = () => {
	const containerRef = useRef( null )

	useEffect( () => {
		if ( ! containerRef.current || ! window.WapChat ) {
			return
		}

		const instance = window.WapChat.mount( containerRef.current, { column: false } )

		return () => instance?.destroy?.()
	}, [] )

	return <div className="rank-math-wap-chat-embed" ref={ containerRef } />
}

export default WapChatEmbed
