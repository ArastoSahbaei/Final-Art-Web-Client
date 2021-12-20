import { getAdjacentTiles } from 'functions/getAdjacentTiles'
import { tile } from 'shared/interfaces/gameInterface'
import styled from 'styled-components'

export const DisplayGameTiles = (props: {
	tiles: tile[],
	boardRef2: React.MutableRefObject<HTMLDivElement | null>
}) => {

	return (
		<BoardWrapper>
			{props.tiles.map((item: tile) =>
				<TileDiv key={item.tileNumber} image={item.card.image} ref={props.boardRef2} onClick={() => getAdjacentTiles(item.tileNumber)}>
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
	background-position: center;
	width: 200px;
   height: 200px;
   background-color: white;   
   color: white;
   border-style: ridge;
`

const Paragraph = styled.p`
	color: #000000;
`