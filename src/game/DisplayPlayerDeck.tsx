import styled from 'styled-components'

export const DisplayPlayerDeck = (props: { deckOfCards: any, setCardBeingPlayed: any, activeCard: any, playBoard: any }) => {


   const grabCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      console.log(props.activeCard.current)
		/* const playBoard = boardRef2.current */
		const element = e.target as HTMLElement
		if (element.classList.contains('ROFLMAO') && props.playBoard) {
			element.style.position = 'absolute'
			const x = e.clientX - 80
			const y = e.clientY - 80
			element.style.left = `${x}px`
			element.style.top = `${y}px`
		}
		/* activeCard = element */
		props.activeCard.current = element
	}

	const displayPlayerDeck = () => {
		return props.deckOfCards.map((item: any, index: number) =>
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
		)
	}

	return (
		<div>
			{displayPlayerDeck()}
		</div>
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