import { useState, useRef } from 'react'
import { tilesData } from '../shared/data/tilesData'
import { initialHandDeck } from '../shared/data/initialHandDeck'
import styled from 'styled-components'
import './Board.css'
import { GRID_SIZE } from '../shared/constants/GRID_SIZE'
interface cardValues {
	N: number,
	E: number,
	S: number,
	W: number
}

const defaultValueCard = {
	name: 'Bahamut',
	cardValues: { N: 0, E: 0, S: 0, W: 0 },
	image: 'https://img-9gag-fun.9cache.com/photo/aO7o502_460s.jpg'
}
interface card {
	name: string,
	cardValues: cardValues,
	image: string
}
interface tile {
	tileNumber: number,
	card: card
}

export const Board = () => {
	const boardRef = useRef<HTMLDivElement | null>(null)
	const [tiles, setTiles] = useState<Array<tile>>(tilesData)
	const [deckOfCards, setDeckOfCards] = useState<Array<card>>(initialHandDeck)
	const [cardBeingPlayed, setCardBeingPlayed] = useState<card>(defaultValueCard)
	let activeCard: HTMLElement | null = null


	const grabCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const playBoard = boardRef.current
		const element = e.target as HTMLElement
		console.log(element.classList)
		if (element.classList.contains('ROFLMAO') && playBoard) {
			element.style.position = 'absolute'
			const x = e.clientX - 80
			const y = e.clientY - 80
			element.style.left = `${x}px`
			element.style.top = `${y}px`
		}
		activeCard = element
	}

	const moveCard = (e: React.MouseEvent) => {
		if (activeCard) {
			activeCard.style.position = 'absolute'
			const x = e.clientX - 80
			const y = e.clientY - 80
			activeCard.style.left = `${x}px`
			activeCard.style.top = `${y}px`
		}
	}


	const removeUsedCardFromDeck = () => {
		const newArray = deckOfCards.filter((item) => item.name != cardBeingPlayed.name)
		setDeckOfCards(newArray)
		setCardBeingPlayed(defaultValueCard)
	}

	const verifyDroppedCardMovement = () => {
		const board: any = boardRef.current?.getBoundingClientRect()
		const card: any = activeCard?.getBoundingClientRect()
		const isOutOfBoundary: boolean = card.bottom > board.bottom || card.right > board.right
		console.log(board)
		console.log(card)
		if (isOutOfBoundary) {
			activeCard && (activeCard.style.position = '')
			activeCard = null
			return false
		} else {
			removeUsedCardFromDeck()
			return true
		}
	}

	const determineTileIndex = (column: number, row: number) => {
		let value = [1, 2, 3, 4];
		(row === 1) ? null :
			(row === 2) ? value = [5, 6, 7, 8] :
				(row === 3) ? value = [9, 10, 11, 12] :
					(row === 4) ? value = [13, 14, 15, 16] : null
		return value[column - 1]
	}

	const updateGameTile = (index: number, card: card) => {
		const tilesCopy = [...tiles]
		const oldTileIndex = tilesCopy.findIndex(tile => tile.tileNumber === index)
		tilesCopy[oldTileIndex] = { tileNumber: index, card }
		setTiles(tilesCopy)
	}

	const dropCard = (e: React.MouseEvent) => {
		const playBoard = boardRef.current
		if (activeCard && playBoard) {
			const x = Math.ceil((Math.floor((e.clientX - playBoard.offsetLeft) / 100) + 1) / 2)
			const y = Math.ceil((Math.floor((e.clientY - playBoard.offsetTop) / 100) + 1) / 2)
			const tileIndex = determineTileIndex(x, y)
			if (verifyDroppedCardMovement()) {
				updateGameTile(tileIndex, cardBeingPlayed)
			}
		}
	}

	const displayPlayerDeck = () => {
		return deckOfCards.map((item: card, index: number) =>
			<Div onMouseOver={() => setCardBeingPlayed(item)} image={item.image} key={index} onMouseDown={e => grabCard(e)}
				className='ROFLMAO'>
				<span>N{item.cardValues.N} </span>
				<span>E{item.cardValues.E} </span>
				<span>S{item.cardValues.S} </span>
				<span>W{item.cardValues.W} </span>
			</Div>
		)
	}

	const displayTiles = () => {
		return tiles.map((item: tile) =>
			<TileDiv image={item.card.image} className='tile' key={item.tileNumber} onClick={() => getAdjacentTiles(item.tileNumber)}>
				<h1>{item.tileNumber}</h1>
				<Paragraph>N:{item.card.cardValues.N}</Paragraph>
				<Paragraph>E:{item.card.cardValues.E}</Paragraph>
				<Paragraph>W:{item.card.cardValues.W}</Paragraph>
				<Paragraph>S:{item.card.cardValues.S}</Paragraph>
			</TileDiv>
		)
	}

	const getRow = (tile: number) => { return tile > 0 && tile < 5 ? 1 : tile < 9 ? 2 : tile < 13 ? 3 : tile < 17 ? 4 : null }
	const getColumn = (tile: number) => { return [1, 5, 9, 13].includes(tile) ? 1 : [2, 6, 10, 14].includes(tile) ? 2 : [3, 7, 11, 15].includes(tile) ? 3 : 4 }
	const getAdjacentTiles = (tile: number) => {
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
		<>
			<div id='chessboard'
				ref={boardRef}
				onMouseMove={e => moveCard(e)}
				onMouseUp={e => dropCard(e)}>
				{displayTiles()}
				{displayPlayerDeck()}
				<h1>currently hovering: {cardBeingPlayed.name}</h1>
			</div>
		</>
	)
}

interface image {
	image: string
}

const Div = styled.div<image>`
	background: ${props => `url(${props.image})`};
	width: 150px;
	height: 150px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: 80px;
	&:hover {
		cursor: grab;
	}
	&:active {
		cursor: grabbing;
	}
`

const TileDiv = styled.div<image>`
	background: ${props => `url(${props.image})`};
	background-repeat: no-repeat;
	background-position: center;
`

const Paragraph = styled.p`
	color: #000000;
`