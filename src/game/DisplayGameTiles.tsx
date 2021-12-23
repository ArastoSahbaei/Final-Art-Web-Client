import { getAdjacentTiles } from 'functions/getAdjacentTiles'
import { tile } from 'shared/interfaces/gameInterface'
import styled from 'styled-components'

export const DisplayGameTiles = (props: {
	tiles: tile[]
}) => {

	return (
		<BoardWrapper>
			{props.tiles.map((item: tile) =>
				<TileDiv
					key={Math.random()}
					tileControlledBy={item.tileControlledBy}
					image={item.card.image}
					onClick={() => getAdjacentTiles(item.tileNumber)}>
					<h1 style={{ textAlign: 'center' }}>{item.tileNumber}</h1>
					<Paragraph>N:{item.card.cardValues.N}</Paragraph>
					<Paragraph>E:{item.card.cardValues.E}</Paragraph>
					<Paragraph>W:{item.card.cardValues.W}</Paragraph>
					<Paragraph>S:{item.card.cardValues.S}</Paragraph>
				</TileDiv>
			)}
		</BoardWrapper>
	)
}

interface image {
	image: string
	tileControlledBy: string | undefined
}

const BoardWrapper = styled.div`
	display: grid;
   grid-template-columns: repeat(4, 200px);
   grid-template-rows: repeat(4, 200px);
   width: 800px;
   height: 800px;
`

const TileDiv = styled.div<image>`
	background: ${props => `url(${props.image})`};
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	background-color: ${props => (props.tileControlledBy == 'player1') ? '#d04848' : '#4872d0'};
	width: 200px;
   height: 200px;
   color: white;
   border-style: ridge;
`

const Paragraph = styled.p`
	color: #000000;
`