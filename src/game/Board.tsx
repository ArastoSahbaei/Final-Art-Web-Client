import { useState, useRef } from 'react'
import { defaultValueCard, tilesData } from '../shared/data/tilesData'
import { determineTileIndex } from 'functions/determineTileIndex'
import { DisplayGameTiles } from './DisplayGameTiles'
import { initialHandDeck } from '../shared/data/initialHandDeck'
import { tile, card } from '../shared/interfaces/gameInterface'
import styled from 'styled-components'

export const Board = () => {
	const boardRef = useRef<HTMLDivElement | null>(null)
	const [tiles, setTiles] = useState<Array<tile>>(tilesData)
	const [deckOfCards, setDeckOfCards] = useState<Array<card>>(initialHandDeck)
	const [cardBeingPlayed, setCardBeingPlayed] = useState<card>(defaultValueCard)
	let activeCard: HTMLElement | null = null

	const grabCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const playBoard = boardRef.current
		const element = e.target as HTMLElement
		if (element.classList.contains('ROFLMAO') && playBoard) {
			element.style.position = 'absolute'
			const x = e.clientX - 80
			const y = e.clientY - 80
			element.style.left = `${x}px`
			element.style.top = `${y}px`
		}
		activeCard = element
	}

	const resetActiveCardPosition = () => { activeCard && (activeCard.style.position = '') }

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

	const verifyDroppedCardMovement = (tileIndex: number) => {
		const isTileOccupied = tiles[tileIndex - 1]?.card?.name
		const board: any = boardRef.current?.getBoundingClientRect()
		const card: any = activeCard?.getBoundingClientRect()
		const isOutOfBoundary: boolean = card.bottom > board.bottom || card.right > board.right

		if (isOutOfBoundary || isTileOccupied) {
			resetActiveCardPosition()
			activeCard = null
			return false
		} else {
			removeUsedCardFromDeck()
			return true
		}
	}

	const updateGameTile = (index: number, card: card) => {
		const tilesCopy = [...tiles]
		const oldTileIndex = tilesCopy.findIndex(tile => tile.tileNumber === index)
		tilesCopy[oldTileIndex] = { tileNumber: index, card }
		setTiles(tilesCopy)
		resetActiveCardPosition()
	}

	const dropCardOnTile = (e: React.MouseEvent) => {
		const playBoard = boardRef.current
		if (activeCard && playBoard) {
			const x = Math.ceil((Math.floor((e.clientX - playBoard.offsetLeft) / 100) + 1) / 2)
			const y = Math.ceil((Math.floor((e.clientY - playBoard.offsetTop) / 100) + 1) / 2)
			const tileIndex = determineTileIndex(x, y)
			if (verifyDroppedCardMovement(tileIndex)) {
				updateGameTile(tileIndex, cardBeingPlayed)
			}
		}
	}

	const displayPlayerDeck = () => {
		return deckOfCards.map((item: card, index: number) =>
			<Div className='ROFLMAO'
				image={item.image}
				key={index}
				onMouseOver={() => setCardBeingPlayed(item)}
				onMouseDown={e => grabCard(e)}>
				<span> N{item.cardValues.N} </span>
				<span> E{item.cardValues.E} </span>
				<span> S{item.cardValues.S} </span>
				<span> W{item.cardValues.W} </span>
			</Div>
		)
	}

	return (
		<>
			<div
				ref={boardRef}
				onMouseMove={e => moveCard(e)}
				onMouseUp={e => dropCardOnTile(e)}>
				<DisplayGameTiles tiles={tiles} />
				{displayPlayerDeck()}
			</div>
		</>
	)
}

interface image {
	image: string
}

const Div = styled.div<image>`
	display: inline-block;
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