import { w3cwebsocket as W3CWebSocket } from 'websocket'
import { useEffect } from 'react'

export const WebSocketTest = () => {
	const client = new W3CWebSocket('ws://127.0.0.1:8000')
	useEffect(() => {
		client.onopen = () => { console.log('Websocket client connected') }
		client.onmessage = (message: any) => {
			const dataFromServer = JSON.parse(message.data)
			console.log('reply from server: ', dataFromServer)
		}
	}, [])
   
	const test = () => {
		client.send(JSON.stringify({ name: 'arasto', age: 28 }))
	}
	return (
		<div>
			<button onClick={() => test()}>{'wat'}</button>

		</div>
	)
}
