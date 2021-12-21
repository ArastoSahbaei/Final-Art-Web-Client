import { useState, useRef } from 'react'
import { defaultValueCard, tilesData } from '../shared/data/tilesData'
import { determineTileIndex } from 'functions/determineTileIndex'
import { DisplayPlayerDeck } from './DisplayPlayerDeck'
import { DisplayGameTiles } from './DisplayGameTiles'
import { initialHandDeck2 } from 'shared/data/initialHandDeck2'
import { initialHandDeck } from '../shared/data/initialHandDeck'
import { tile, card } from '../shared/interfaces/gameInterface'
import styled from 'styled-components'

export const GameController = () => {
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
		tilesCopy[index - 1] = { ...tilesCopy[index - 1], tileNumber: index, card }
		tilesCopy[index - 1] = { ...tilesCopy[index - 1], tileControlledBy: 'player1' }
		setTiles(tilesCopy)
		resetActiveCardPosition()
		console.log(tiles)
	}

	const dropCardOnTile = (e: React.MouseEvent) => {
		const playBoard = boardRef.current
		if (activeCard && playBoard) {
			const x = Math.ceil((Math.floor((e.clientX - playBoard.offsetLeft) / 100) + 1) / 2)
			const y = Math.ceil((Math.floor((e.clientY - playBoard.offsetTop) / 100) + 1) / 2)
			const tileIndex = determineTileIndex(x, y)
			if (verifyDroppedCardMovement(tileIndex) && cardBeingPlayed.name) {
				updateGameTile(tileIndex, cardBeingPlayed)
			}
		}
	}

	return (
		<Wrapper
			ref={boardRef}
			onMouseMove={e => moveCard(e)}
			onMouseUp={e => dropCardOnTile(e)}>
			<DisplayGameTiles tiles={tiles} /* boardRef={boardRef} */ />
			<DisplayPlayerDeck deckOfCards={deckOfCards} setCardBeingPlayed={setCardBeingPlayed} activeCard={activeCard} playBoard={boardRef} />
			<DisplayPlayerDeck deckOfCards={initialHandDeck2} setCardBeingPlayed={setCardBeingPlayed} activeCard={activeCard} playBoard={boardRef} />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 800px;
	background-color: red
`
