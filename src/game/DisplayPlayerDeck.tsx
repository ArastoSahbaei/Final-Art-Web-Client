import { card } from 'shared/interfaces/gameInterface'
import styled from 'styled-components'

export const DisplayPlayerDeck = (props: {
   setCardBeingPlayed: React.Dispatch<React.SetStateAction<card>>,
   deckOfCards: card[],
   activeCard: React.MutableRefObject<HTMLElement | null>,
   playBoard: React.MutableRefObject<HTMLElement | null>
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
						key={index}
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