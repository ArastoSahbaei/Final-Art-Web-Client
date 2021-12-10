import { useState } from 'react'
import { tilesData } from '../shared/data/tilesData'
import { initialHandDeck } from '../shared/data/initialHandDeck'
import './Board.css'
interface cardValues {
	N: number,
	E: number,
	S: number,
	W: number
}
interface card {
	name: string,
	card: cardValues,
	image: string
}
interface tile {
	tileNumber: number,
	card: cardValues
}

export const Board = () => {
	const [tiles, setTiles] = useState<Array<tile>>(tilesData)
	const [deckOfCards, setDeckOfCards] = useState<Array<card>>(initialHandDeck)

	const displayPlayerDeck = () => {
		return deckOfCards.map((item: card, index: number) =>
			<div key={index}>
				<h1>{item.name}</h1>
				<span>N{item.card.N} </span>
				<span>E{item.card.E} </span>
				<span>S{item.card.S} </span>
				<span>W{item.card.W} </span>
				<img src={item.image} style={{ width: 140 }} />
			</div>
		)
	}

	const displayTiles = () => {
		return tiles.map((item: tile) =>
			<div className='tile' key={item.tileNumber} onClick={() => getAdjacentTiles(item.tileNumber)}>
				<h1>{item.tileNumber}</h1>
				<p>N:{item.card.N}</p>
				<p>E:{item.card.E}</p>
				<p>W:{item.card.W}</p>
				<p>S:{item.card.S}</p>
			</div>
		)
	}

	const getRow = (tile: number) => { return tile > 0 && tile < 5 ? 1 : tile < 9 ? 2 : tile < 13 ? 3 : tile < 17 ? 4 : null }
	const getColumn = (tile: number) => { return [1, 5, 9, 13].includes(tile) ? 1 : [2, 6, 10, 14].includes(tile) ? 2 : [3, 7, 11, 15].includes(tile) ? 3 : 4 }
	const getAdjacentTiles = (tile: any) => {
		const row = getRow(tile)
		const column = getColumn(tile)

		const adjacent = {
			E: getRow(tile - 1) === row ? tile - 1 : null,
			W: getRow(tile + 1) === row ? tile + 1 : null,
			N: (tile - 4 > 1) ? tile - 4 : null,
			S: (tile + 4 < 16) ? tile + 4 : null
		}

		console.log('VALUE: ' + tile)
		console.log('ROW: ' + row, 'COLUMN: ' + column)
		console.log(`ADJACENT VALUES: E:${adjacent.E} W:${adjacent.W} N:${adjacent.N} S:${adjacent.S}`)
	}


	return (
		<div id='chessboard'>
			{displayTiles()}
			{displayPlayerDeck()}
		</div>
	)
}