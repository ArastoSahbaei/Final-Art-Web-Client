import { useState, useRef, useEffect } from 'react'
import { defaultValueCard, tilesData } from '../shared/data/tilesData'
import { determineTileIndex } from 'functions/determineTileIndex'
import { DisplayPlayerDeck } from './components/DisplayPlayerDeck'
import { DisplayGameTiles } from './components/DisplayGameTiles'
import { initialHandDeck2 } from 'shared/data/initialHandDeck2'
import { getAdjacentTiles } from 'functions/getAdjacentTiles'
import { initialHandDeck } from '../shared/data/initialHandDeck'
import { useWebSocket } from 'hooks/useWebSocket'
import { tile, card } from '../shared/interfaces/gameInterface'
import styled from 'styled-components'

export const GameController = () => {
	const boardRef = useRef<HTMLDivElement | null>(null)
	const activeCard = useRef<HTMLElement | null>(null)
	const [tiles, setTiles] = useState<Array<tile>>(tilesData)
	const [playerTurn, setPlayerTurn] = useState<boolean>(true)
	const [deckOfCards, setDeckOfCards] = useState<Array<card>>(initialHandDeck)
	const [deckOfCards2, setDeckOfCards2] = useState<Array<card>>(initialHandDeck2)
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

	const removeUsedCardFromDeck = (deck: card[]) => {
		const newArray = deck.filter((item) => item.name != cardBeingPlayed.name)
		playerTurn ? setDeckOfCards(newArray) : setDeckOfCards2(newArray)
		setCardBeingPlayed(defaultValueCard)
	}

	const verifyDroppedCardMovement = (tileIndex: number) => {
		const isTileOccupied = tiles[tileIndex - 1]?.card?.name
		const board = boardRef.current?.getBoundingClientRect() as DOMRect
		const card = activeCard.current?.getBoundingClientRect() as DOMRect
		const isOutOfBoundary: boolean = card?.bottom > board?.bottom || card?.top < board?.top || card?.right > board?.right|| card?.left < board?.left
		if (isOutOfBoundary || isTileOccupied) {
			resetActiveCardPosition()
			return false
		} else {
			const currentDeck = playerTurn ? deckOfCards : deckOfCards2
			removeUsedCardFromDeck(currentDeck)
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
		adjacentValues.T && card.cardValues.T > tiles[adjacentValues.T - 1].card.cardValues.B && (tilesCopy[adjacentValues.T - 1] = { ...tilesCopy[adjacentValues.T - 1], tileControlledBy: determinePlayerTurn() })
		adjacentValues.L && card.cardValues.L > tiles[adjacentValues.L - 1].card.cardValues.R && (tilesCopy[adjacentValues.L - 1] = { ...tilesCopy[adjacentValues.L - 1], tileControlledBy: determinePlayerTurn() })
		adjacentValues.R && card.cardValues.R > tiles[adjacentValues.R - 1].card.cardValues.L && (tilesCopy[adjacentValues.R - 1] = { ...tilesCopy[adjacentValues.R - 1], tileControlledBy: determinePlayerTurn() })
		adjacentValues.B && card.cardValues.B > tiles[adjacentValues.B - 1].card.cardValues.T && (tilesCopy[adjacentValues.B - 1] = { ...tilesCopy[adjacentValues.B - 1], tileControlledBy: determinePlayerTurn() })
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
		client.onmessage = (message: any) => { setTiles(JSON.parse(message.data)) }
	}, [])

	return (
		<Wrapper
			onMouseMove={e => moveCard(e)}
			onMouseUp={e => dropCardOnTile(e)}>
			<GameGrid>
				<PlayerCards>
					<h3>{'Player 1'}</h3>
					<br />
					<DisplayPlayerDeck playerTurn={determinePlayerTurn()} player={'player1'} deckOfCards={deckOfCards} setCardBeingPlayed={setCardBeingPlayed} activeCard={activeCard} playBoard={boardRef} />
				</PlayerCards>

				<TileGame
					ref={boardRef}>
					<DisplayGameTiles tiles={tiles} />
				</TileGame>

				<PlayerCards>
					<h3>{'Player 2'}</h3>
					<br />
					<DisplayPlayerDeck playerTurn={determinePlayerTurn()} player={'player2'} deckOfCards={deckOfCards2} setCardBeingPlayed={setCardBeingPlayed} activeCard={activeCard} playBoard={boardRef} />
				</PlayerCards>
			</GameGrid>
		</Wrapper>
	)
}


const Wrapper = styled.div`
	margin: 0 auto;
	margin-top: calc(100vh/12);
  	width: 1200px;
	height: 800px;
	background-color: #e0cfcf;
`
const GameGrid = styled.div`
	 display: grid;
	grid-template-columns: 1fr 4fr 1fr;
	width: 1200px;
`

const TileGame = styled.div`
	 width:800px;
`
const PlayerCards = styled.div`
	width: 200px;
	text-align: center;`

