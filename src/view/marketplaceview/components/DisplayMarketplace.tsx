import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import testPic from '../../../shared/images/Beartic.png'
import RoutingPath from '../../../routes/RoutingPath'

export const DisplayMarketplace = () => {
	const navigate = useNavigate()

	return (
		<Wrapper>
			<WrapperBackground />
			<MarketplaceWrapper>
				<StoreitemWrapper>
					<H1>{'Welcome to the Store where we sell your favorite Pokécards!'}</H1> 
				
					<CurrencyWrapper>
						<H1>{'PokéPoint: '}</H1>
						<H1>{'2500P '}</H1>
					</CurrencyWrapper>
				
					<PokeWrapper>
						<H2>{'Beartic'}</H2>
						<PokeImage src={testPic} alt='Error...' />
						<H2>{'Price: 800P'}</H2>
						<Button onClick={() => navigate(RoutingPath.playNowView)}>{'Buy Now!'} </Button>
						
					</PokeWrapper>
				</StoreitemWrapper>


			</MarketplaceWrapper>
		</Wrapper>
	)
}

const Wrapper = styled.div`
    margin-top: 80px;
	width: 100%;
	text-align: center;

	align-content: center;
	justify-content: center;
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

const MarketplaceWrapper = styled.div`
    display: grid;
	background-color: #4872d0;
	width: 80%;

	
	align-items: center;
	text-align: center;
	align-self: center;

	
`

const StoreitemWrapper = styled.div`
    display: grid;

	
`

const PokeImage = styled.img`
	background-color: #4872d0;
	text-align: center;


	`

const Button = styled.div`
border-radius: 25px;
background-color: #5fe616c7;
padding: 10px 60px;
margin: 15px 0px;
border: 3px solid whitesmoke;

font-weight: 600;
font-size: 40px;
width: 80%;
height: 80%;
cursor: pointer;
text-transform: uppercase;

text-decoration: none;
color: #020202;
align-self: center;


text-align: center;


`

const H1 = styled.div`
	font-family: 600;
	font-weight: 400;
	font-size: 40px;
	align-self: center;
	margin-top: 5px;
	`

const H2 = styled.div`
    font-family: 600;
	font-weight: 400;
	font-size: 45px;
	align-self: center;

`

const PokeWrapper = styled.div`
    display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	justify-content: space-between;


	width: 80%;

	justify-self: center;

	background-color: brown;

	padding: 10px 60px;

	border: 3px solid whitesmoke;
`


const CurrencyWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;

	background-color: red;

	width: 80%;
	justify-self: center;

	padding: 10px 60px;

	border: 3px solid whitesmoke;
`
