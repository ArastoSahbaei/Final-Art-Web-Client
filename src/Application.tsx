import { GameController } from 'game/GameController'
import { WebSocketTest } from 'game/WebSocketTest'
import { useWebSocket } from 'hooks/useWebSocket'
import { useEffect } from 'react'
import { GlobalStyle } from './shared/style/GlobalStyle'

export const Application = () => {
	const { connectToServer, recieveMessages, sendMessage } = useWebSocket()

	useEffect(() => {
		connectToServer()
		/* recieveMessages() */
	}, [])

	return (
		<>
			<button onClick={() => sendMessage('xdxd')}>{'omgomg'}</button>
			<GlobalStyle />
			<GameController />
		</>
	)
}