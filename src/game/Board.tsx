import { useState, useRef } from 'react'
import { defaultValueCard, tilesData } from '../shared/data/tilesData'
import { determineTileIndex } from 'functions/determineTileIndex'
import { DisplayGameTiles } from './DisplayGameTiles'
import { initialHandDeck } from '../shared/data/initialHandDeck'
import { tile, card } from '../shared/interfaces/gameInterface'
import styled from 'styled-components'
import { DisplayPlayerDeck } from './DisplayPlayerDeck'

export const Board = () => {
	const boardRef = useRef<HTMLDivElement | null>(null)
	const activeCard = useRef<HTMLElement | null>(null)
	const [tiles, setTiles] = useState<Array<tile>>(tilesData)
	const [deckOfCards, setDeckOfCards] = useState<Array<card>>(initialHandDeck)
	const [cardBeingPlayed, setCardBeingPlayed] = useState<card>(defaultValueCard)

	const resetActiveCardPosition = () => {
		activeCard.current && (activeCard.current.style.position = '')
		activeCard.current = null
	}

	const moveCard = (e: React.MouseEvent) => {
		if (activeCard.current) {
			activeCard.current.style.position = 'absolute'
			const x = e.clientX - 80
			const y = e.clientY - 80
			activeCard.current.style.left = `${x}px`
			activeCard.current.style.top = `${y}px`
		}
	}

	const removeUsedCardFromDeck = () => {
		const newArray = deckOfCards.filter((item) => item.name != cardBeingPlayed.name)
		setDeckOfCards(newArray)
		setCardBeingPlayed(defaultValueCard)
	}

	const verifyDroppedCardMovement = (tileIndex: number) => {
		const isTileOccupied = tiles[tileIndex - 1]?.card?.name
		const board = boardRef.current?.getBoundingClientRect() as DOMRect
		const card = activeCard.current?.getBoundingClientRect() as DOMRect
		const isOutOfBoundary: boolean = card?.bottom > board?.bottom || card?.right > board?.right
		if (isOutOfBoundary || isTileOccupied) {
			resetActiveCardPosition()
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

	return (
		<BoardWrapper
			ref={boardRef}
			onMouseMove={e => moveCard(e)}
			onMouseUp={e => dropCardOnTile(e)}>
			<DisplayGameTiles tiles={tiles} boardRef2={boardRef} />
			<DisplayPlayerDeck deckOfCards={deckOfCards} setCardBeingPlayed={setCardBeingPlayed} activeCard={activeCard} playBoard={boardRef} />
			<DisplayPlayerDeck deckOfCards={deckOfCards} setCardBeingPlayed={setCardBeingPlayed} activeCard={activeCard} playBoard={boardRef} />
		</BoardWrapper>
	)
}

interface image {
	image: string
}

const BoardWrapper = styled.div`
	width: 800px;
	background-color: red
`

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