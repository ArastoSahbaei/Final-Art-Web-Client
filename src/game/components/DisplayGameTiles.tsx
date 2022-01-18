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
					<Paragraph row='1/1' column='6/6'>{item.card.cardValues.T}</Paragraph>
					<Paragraph row='6/6' column='1/1'>{item.card.cardValues.L}</Paragraph>
					<Paragraph row='6/6' column='11/11'>{item.card.cardValues.R}</Paragraph>
					<Paragraph row='11/11' column='6/6'>{item.card.cardValues.B}</Paragraph>
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
	display: grid;
	grid-template-columns: repeat(1fr, 10);
	grid-template-rows: repeat(1fr, 10);
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

interface gridPlacement {
	column: string
	row: string
}

const Paragraph = styled.p<gridPlacement>`
	color: white;
	grid-column: ${props => props.column};
	grid-row: ${props => props.row};
	align-self: center;
	justify-self: center;
`