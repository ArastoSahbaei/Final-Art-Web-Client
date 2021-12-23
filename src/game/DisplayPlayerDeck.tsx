import { card } from 'shared/interfaces/gameInterface'
import styled from 'styled-components'

export const DisplayPlayerDeck = (props: {
	setCardBeingPlayed: React.Dispatch<React.SetStateAction<card>>,
	deckOfCards: card[],
	activeCard: React.MutableRefObject<HTMLElement | null>,
	playBoard: React.MutableRefObject<HTMLElement | null>,
	player: string,
	playerTurn: string
}) => {

	const grabCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const element = e.target as HTMLElement
		if (element.classList.contains('ROFLMAO') && props.playBoard) {
			element.style.position = 'absolute'
			const x = e.clientX - 80
			const y = e.clientY - 80
			element.style.left = `${x}px`
			element.style.top = `${y}px`
		}
		props.activeCard.current = element
	}

	return (
		<>
			{
				props.deckOfCards.map((item: card, index: number) =>
					<Div className={'ROFLMAO'}
						image={item.image}
						player={props.player}
						playerTurn={props.playerTurn}
						key={Math.random()}
						onMouseOver={() => props.setCardBeingPlayed(item)}
						onMouseDown={e => grabCard(e)}>
						<span> N{item.cardValues.N} </span>
						<span> E{item.cardValues.E} </span>
						<span> S{item.cardValues.S} </span>
						<span> W{item.cardValues.W} </span>
					</Div>
				)}
		</>
	)
}

interface values {
	image: string
	player: string
	playerTurn: string
}

const Div = styled.div<values>`
	display: inline-block;

	background-color: ${props =>
		(props.playerTurn === props.player && props.player === 'player1') ? '#d04848 !important'
			: (props.playerTurn === props.player) ? '#4872d0 !important' : 'grey !important'};
	border-style: ridge;
	background: ${props => `url(${props.image})`};
	width: 150px;
	height: 150px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: 130px;
	&:hover {
		cursor: grab;
	}
	&:active {
		cursor: grabbing;
	}
`