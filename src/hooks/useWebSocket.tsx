import { w3cwebsocket } from 'websocket'

export const useWebSocket = () => {
	const client = new w3cwebsocket('ws://127.0.0.1:8000')

	const connectToServer = () => {
		client.onopen = () => { console.log('Websocket client connected') }
	}

	const recieveMessages = () => {
		client.onmessage = (message: any) => {
			const dataFromServer = JSON.parse(message.data)
			console.log('reply from server: ', dataFromServer)
			return dataFromServer
		}
	}

	const sendMessage = (message: any) => {
		client.send(JSON.stringify(message))
	}
	const onCloseServer = (event: CloseEvent) => {
		console.log(event)
	}

	return {
		client,
		connectToServer,
		recieveMessages,
		sendMessage,
		onCloseServer
	}
}