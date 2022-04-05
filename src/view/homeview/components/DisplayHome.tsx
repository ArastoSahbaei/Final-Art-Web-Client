import styled from 'styled-components'
import RoutingPath from '../../../routes/RoutingPath'
import { useNavigate   } from 'react-router-dom'
import { primaryColor, secondaryFont } from 'shared/style/GlobalStyle'
import testPic from '../../../shared/images/Beartic.png'

export const DisplayHome = () => {
	const navigate = useNavigate()

	return (
		<Wrapper>
			<WrapperBackground />
			<HomeGrid>
				<HomeCell>
					<H1>{'Welcome to PokéCards! The premier cardbattle game on the market. Play with your favorite pokémon in the new tactical arena.'}</H1> 
					<ParagraphWrapper>
						<PokeImage src={testPic} alt='Error...' />
						<Button onClick={() => navigate(RoutingPath.playNowView)}>{'Play Now!'} </Button>
					</ParagraphWrapper>
				</HomeCell>
			</HomeGrid>
		</Wrapper>
	)
}



const Wrapper = styled.div`
	margin: 0 auto;
	margin-top: 75px;
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
	margin-left: 26%;

	align-self: center;
	width: 1000px;
    `

const HomeCell = styled.div`
		border-radius: 5px;
		background-color: #4872d0;
		padding: 5px 15px;
		margin: 10px 0px;
		border: 3px solid whitesmoke;
		width: 750px;
		
		display: grid;
		align-items: center;
		max-height: 100%;
		position: relative;
		height: 100%;
	`
const ParagraphWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	`

const Button = styled.div`
	border-radius: 25px;
	background-color: #d04848;
	padding: 10px 60px;
	margin: 10px 0px;
	border: 3px solid whitesmoke;

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
	font-weight: 400;
	font-size: 30px;
	align-self: center;
	margin-top: 5px;
	`

const PokeImage = styled.img`
	background-color: #4872d0;
	text-align: center;
	`