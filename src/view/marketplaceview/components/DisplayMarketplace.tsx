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
					<PokeWrapper>
						<H2>{'Beartic'}</H2>
						<PokeWarapper2>
							<PokeImage src={testPic} alt='Error...' />
							<Button onClick={() => navigate(RoutingPath.playNowView)}>{'Buy Now!'} </Button>
						</PokeWarapper2>
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
background-color: #d04848;
padding: 10px 60px;
margin: 10px 0px;
border: 3px solid whitesmoke;

font-weight: 600;
font-size: 40px;
width: 100%;
cursor: pointer;
text-transform: uppercase;

text-decoration: none;
color: #020202;
align-self: center;


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
	font-size: 25px;
	align-self: center;

`

const PokeWrapper = styled.div`
    display: grid;
`

const PokeWarapper2 = styled.div`
  
`