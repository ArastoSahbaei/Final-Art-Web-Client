import { getAdjacentTiles } from 'functions/getAdjacentTiles'
import { useRef } from 'react'
import { tile } from 'shared/interfaces/gameInterface'
import styled from 'styled-components'

export const DisplayGameTiles = (props: { tiles: any, boardRef2: any }) => {
	const boardRef = useRef<HTMLDivElement | null>(null)

	const displayTiles = (tiles: any) => {
		return tiles.map((item: tile) =>
			<TileDiv ref={props.boardRef2} image={item.card.image} key={item.tileNumber} onClick={() => getAdjacentTiles(item.tileNumber)}>
				<h1 style={{ textAlign: 'center' }}>{item.tileNumber}</h1>
				<Paragraph>N:{item.card.cardValues.N}</Paragraph>
				<Paragraph>E:{item.card.cardValues.E}</Paragraph>
				<Paragraph>W:{item.card.cardValues.W}</Paragraph>
				<Paragraph>S:{item.card.cardValues.S}</Paragraph>
			</TileDiv>
		)
	}

	return (
		<BoardWrapper>
			{displayTiles(props.tiles)}
			<button onClick={() => console.log(props.boardRef2.current?.getBoundingClientRect())}>lollollollollollollollol</button>
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