import { useState, useRef, useEffect } from 'react'
import { defaultValueCard, tilesData } from '../shared/data/tilesData'
import { determineTileIndex } from 'functions/determineTileIndex'
import { DisplayPlayerDeck } from './DisplayPlayerDeck'
import { DisplayGameTiles } from './DisplayGameTiles'
import { initialHandDeck2 } from 'shared/data/initialHandDeck2'
import { getAdjacentTiles } from 'functions/getAdjacentTiles'
import { initialHandDeck } from '../shared/data/initialHandDeck'
import { tile, card } from '../shared/interfaces/gameInterface'
import styled from 'styled-components'
import { useWebSocket } from 'hooks/useWebSocket'

export const GameController = () => {
	const boardRef = useRef<HTMLDivElement | null>(null)
	const activeCard = useRef<HTMLElement | null>(null)
	const [tiles, setTiles] = useState<Array<tile>>(tilesData)
	const [playerTurn, setPlayerTurn] = useState<boolean>(true)
	const [deckOfCards, setDeckOfCards] = useState<Array<card>>(initialHandDeck)
	const [cardBeingPlayed, setCardBeingPlayed] = useState<card>(defaultValueCard)
	const { client, sendMessage, connectToServer, recieveMessages } = useWebSocket()

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

	const determinePlayerTurn = () => {
		const turn = playerTurn ? 'player1' : 'player2'
		return turn
	}

	const fight = (index: number, card: card) => {
		const tilesCopy = [...tiles]
		tilesCopy[index - 1] = { ...tilesCopy[index - 1], tileNumber: index - 1, card }
		tilesCopy[index - 1] = { ...tilesCopy[index - 1], tileControlledBy: determinePlayerTurn() }

		const adjacentValues = getAdjacentTiles(index)
		adjacentValues.N && card.cardValues.N > tiles[adjacentValues.N - 1].card.cardValues.S && (tilesCopy[adjacentValues.N - 1] = { ...tilesCopy[adjacentValues.N - 1], tileControlledBy: determinePlayerTurn() })
		adjacentValues.E && card.cardValues.E > tiles[adjacentValues.E - 1].card.cardValues.W && (tilesCopy[adjacentValues.E - 1] = { ...tilesCopy[adjacentValues.E - 1], tileControlledBy: determinePlayerTurn() })
		adjacentValues.W && card.cardValues.W > tiles[adjacentValues.W - 1].card.cardValues.E && (tilesCopy[adjacentValues.W - 1] = { ...tilesCopy[adjacentValues.W - 1], tileControlledBy: determinePlayerTurn() })
		adjacentValues.S && card.cardValues.E > tiles[adjacentValues.S - 1].card.cardValues.N && (tilesCopy[adjacentValues.S - 1] = { ...tilesCopy[adjacentValues.S - 1], tileControlledBy: determinePlayerTurn() })
		sendMessage(tilesCopy)
		resetActiveCardPosition()
	}

	const dropCardOnTile = (e: React.MouseEvent) => {
		const playBoard = boardRef.current
		if (activeCard && playBoard) {
			const x = Math.ceil((Math.floor((e.clientX - playBoard.offsetLeft) / 100) + 1) / 2)
			const y = Math.ceil((Math.floor((e.clientY - playBoard.offsetTop) / 100) + 1) / 2)
			const tileIndex = determineTileIndex(x, y)
			if (verifyDroppedCardMovement(tileIndex) && cardBeingPlayed.name) {
				fight(tileIndex, cardBeingPlayed)
				setPlayerTurn(!playerTurn)
			}
		}
	}

	useEffect(() => {
		connectToServer()
		client.onmessage = (message: any) => {
			const dataFromServer = JSON.parse(message.data)
			setTiles(dataFromServer)
		}
	}, [])

	return (
		<Wrapper
			ref={boardRef}
			onMouseMove={e => moveCard(e)}
			onMouseUp={e => dropCardOnTile(e)}>
			<DisplayGameTiles tiles={tiles} />
			<br />
			<DisplayPlayerDeck playerTurn={determinePlayerTurn()} player={'player1'} deckOfCards={deckOfCards} setCardBeingPlayed={setCardBeingPlayed} activeCard={activeCard} playBoard={boardRef} />
			<br />
			<br />
			<DisplayPlayerDeck playerTurn={determinePlayerTurn()} player={'player2'} deckOfCards={initialHandDeck2} setCardBeingPlayed={setCardBeingPlayed} activeCard={activeCard} playBoard={boardRef} />
			<button onMouseOver={() => console.log(tiles)}>{'display tiles'}</button>

		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 800px;
	background-color: #e0cfcf
`
