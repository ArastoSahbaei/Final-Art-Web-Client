import { useState } from 'react'
import { tilesData } from '../shared/data/tilesData'
import styled from 'styled-components'
import './Board.css'

export const Board = () => {
	const [tiles, setTiles] = useState(tilesData)

	const displayTiles = () => {
		return tiles.map((item: any) =>
			<div className='tile' key={item.tile} onClick={() => getAdjacentTiles(item.tile)}>
				<h1>{item.tile}</h1>
				<p>N:{item.card.N}</p>
				<p>E:{item.card.E}</p>
				<p>W:{item.card.W}</p>
				<p>S:{item.card.S}</p>
			</div>
		)
	}

	const getAdjacentTiles = (tile: any) => {
		const row = tile < 5 ? 1 : tile < 9 ? 2 : tile < 13 ? 3 : 4
		const column = [1, 5, 9, 13].includes(tile) ? 1 : [2, 6, 10, 14].includes(tile) ? 2 : [3, 7, 11, 15].includes(tile) ? 3 : 4
		const adjacentRows = { E: tile - 1, W: tile + 1 }

		console.log(tile)
		console.log('IS ON ROW: ' + row)
		console.log('IS ON COLUMN: ' + column)
		console.log(`ADJACENT ROWS: E: ${adjacentRows.E} W: ${adjacentRows.W}`)
		/* TODO: IF I CLICK ON A TILE I WANT TO RETRIEVE THE VALUES OF THE TILES FROM N-E-S-W */
	}

	return (
		<div id='chessboard'>
			{displayTiles()}
		</div>
	)
}

const Wrapper = styled.div``