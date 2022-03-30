import styled from 'styled-components'
import RoutingPath from '../../../routes/RoutingPath'
import { useNavigate   } from 'react-router-dom'
import { primaryColor, secondaryFont } from 'shared/style/GlobalStyle'

export const DisplayHome = () => {
	
	const navigate = useNavigate()


	return (
		<Wrapper>
			<WrapperBackground />
			<HomeGrid>
				<HomeCell column1={'1/4'} column2={'3/4'}>
					<H1>{'Welcome to PokéCards!'}</H1> 
					
					<ParagraphWrapper>
						<Button onClick={() => navigate(RoutingPath.playNowView)}>{'Play Now!'} </Button>
					</ParagraphWrapper>
				</HomeCell>
			</HomeGrid>
		</Wrapper>
	)
}

interface x {
	column1?: string | '',
	column2?: string | ''
}

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(20, 1fr);
	margin-top: 90px;
	width: 100%;
	text-align: center;
	`

const WrapperBackground = styled.div`
	position: absolute;
	background-color: #6d6df1dc;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	`

const HomeGrid = styled.div`
    display: grid;
	grid-template-columns: 1fr 4fr 1fr;
	width: 1000px;
    `

const HomeCell = styled.div<x>`
		grid-column: ${(props) => props.column1};
		display: grid;
		align-items: center;
		max-height: 100%;
		position: relative;
		height: 100%;
		@media(max-width: 1750px) {
			grid-column: ${(props) => props.column2};
		}
		@media(max-width: 1750px) {
			grid-column: ${(props) => props.column2};
		}
		
	`
const ParagraphWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	`

const Button = styled.div`
	border-radius: 25px;
	background-color: #ad0404;
	padding: 10px 60px;
	margin: 10px 0px;
	

	font-weight: 600;
	font-size: 40px;
	width: 100%;
    cursor: pointer;
    text-transform: uppercase;
    font-family: ${secondaryFont};
    text-decoration: none;
    color: #020202;
    align-self: center;
    &.is-active {
      color: ${primaryColor};
    }
	`
const H1 = styled.div`
	font-family: 600;
	font-size: 50px;
	`