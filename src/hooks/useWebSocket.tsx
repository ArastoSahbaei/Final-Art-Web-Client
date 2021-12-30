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
		client.send(JSON.stringify(lol))
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


const lol = [
	{
		'tileNumber': 0,
		'card': {
			'name': '',
			'cardValues': {
				'N': 0,
				'E': 0,
				'S': 0,
				'W': 0
			},
			'image': '/Final-Art-Web-Client/static/media/tile.c33835dd.jpg'
		},
		'tileControlledBy': ''
	},
	{
		'tileNumber': 1,
		'card': {
			'name': '',
			'cardValues': {
				'N': 0,
				'E': 0,
				'S': 0,
				'W': 0
			},
			'image': '/Final-Art-Web-Client/static/media/tile.c33835dd.jpg'
		},
		'tileControlledBy': ''
	},
	{
		'tileNumber': 2,
		'card': {
			'name': '',
			'cardValues': {
				'N': 0,
				'E': 0,
				'S': 0,
				'W': 0
			},
			'image': '/Final-Art-Web-Client/static/media/tile.c33835dd.jpg'
		},
		'tileControlledBy': 'player1'
	},
	{
		'tileNumber': 3,
		'card': {
			'name': '',
			'cardValues': {
				'N': 0,
				'E': 0,
				'S': 0,
				'W': 0
			},
			'image': '/Final-Art-Web-Client/static/media/tile.c33835dd.jpg'
		},
		'tileControlledBy': ''
	},
	{
		'tileNumber': 4,
		'card': {
			'name': '',
			'cardValues': {
				'N': 0,
				'E': 0,
				'S': 0,
				'W': 0
			},
			'image': '/Final-Art-Web-Client/static/media/tile.c33835dd.jpg'
		},
		'tileControlledBy': ''
	},
	{
		'tileNumber': 5,
		'card': {
			'name': '',
			'cardValues': {
				'N': 0,
				'E': 0,
				'S': 0,
				'W': 0
			},
			'image': '/Final-Art-Web-Client/static/media/tile.c33835dd.jpg'
		},
		'tileControlledBy': 'player1'
	},
	{
		'tileNumber': 6,
		'card': {
			'name': 'Beartic',
			'cardValues': {
				'N': 5,
				'E': 5,
				'S': 5,
				'W': 5
			},
			'image': '/Final-Art-Web-Client/static/media/Beartic.82e3a632.png'
		},
		'tileControlledBy': 'player1'
	},
	{
		'tileNumber': 7,
		'card': {
			'name': '',
			'cardValues': {
				'N': 0,
				'E': 0,
				'S': 0,
				'W': 0
			},
			'image': '/Final-Art-Web-Client/static/media/tile.c33835dd.jpg'
		},
		'tileControlledBy': 'player1'
	},
	{
		'tileNumber': 8,
		'card': {
			'name': '',
			'cardValues': {
				'N': 0,
				'E': 0,
				'S': 0,
				'W': 0
			},
			'image': '/Final-Art-Web-Client/static/media/tile.c33835dd.jpg'
		},
		'tileControlledBy': ''
	},
	{
		'tileNumber': 9,
		'card': {
			'name': '',
			'cardValues': {
				'N': 0,
				'E': 0,
				'S': 0,
				'W': 0
			},
			'image': '/Final-Art-Web-Client/static/media/tile.c33835dd.jpg'
		},
		'tileControlledBy': ''
	},
	{
		'tileNumber': 10,
		'card': {
			'name': '',
			'cardValues': {
				'N': 0,
				'E': 0,
				'S': 0,
				'W': 0
			},
			'image': '/Final-Art-Web-Client/static/media/tile.c33835dd.jpg'
		},
		'tileControlledBy': 'player1'
	},
	{
		'tileNumber': 11,
		'card': {
			'name': '',
			'cardValues': {
				'N': 0,
				'E': 0,
				'S': 0,
				'W': 0
			},
			'image': '/Final-Art-Web-Client/static/media/tile.c33835dd.jpg'
		},
		'tileControlledBy': ''
	},
	{
		'tileNumber': 12,
		'card': {
			'name': '',
			'cardValues': {
				'N': 0,
				'E': 0,
				'S': 0,
				'W': 0
			},
			'image': '/Final-Art-Web-Client/static/media/tile.c33835dd.jpg'
		},
		'tileControlledBy': ''
	},
	{
		'tileNumber': 13,
		'card': {
			'name': '',
			'cardValues': {
				'N': 0,
				'E': 0,
				'S': 0,
				'W': 0
			},
			'image': '/Final-Art-Web-Client/static/media/tile.c33835dd.jpg'
		},
		'tileControlledBy': ''
	},
	{
		'tileNumber': 14,
		'card': {
			'name': '',
			'cardValues': {
				'N': 0,
				'E': 0,
				'S': 0,
				'W': 0
			},
			'image': '/Final-Art-Web-Client/static/media/tile.c33835dd.jpg'
		},
		'tileControlledBy': ''
	},
	{
		'tileNumber': 15,
		'card': {
			'name': '',
			'cardValues': {
				'N': 0,
				'E': 0,
				'S': 0,
				'W': 0
			},
			'image': '/Final-Art-Web-Client/static/media/tile.c33835dd.jpg'
		},
		'tileControlledBy': ''
	}
]