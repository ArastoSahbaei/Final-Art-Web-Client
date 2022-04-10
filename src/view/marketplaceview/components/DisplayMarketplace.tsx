
import styled from 'styled-components'
import BearticPic from '../../../shared/images/Beartic.png'
import OnixPic from '../../../shared/images/Onix.png'
import GengarPic from '../../../shared/images/Gengar.png'
import BulbasaurPic from '../../../shared/images/Oddish.png'


export const DisplayMarketplace = () => {
	

	return (
		<Wrapper>
			<WrapperBackground />
			<MarketplaceWrapper>
				<StoreitemWrapper>
					<H1>{'Welcome to the Store where you can bu your favorite Pokécards!'}</H1> 
				
					<CurrencyWrapper>
						<H3>{'PokéPoint: '}</H3>
						<H3>{'2500P '}</H3>
					</CurrencyWrapper>
				
					<PokeWrapper>
						<H2>{'Beartic'}</H2>
						<PokeImage src={BearticPic} alt='Error...' />
						<H2>{'Price: 800P'}</H2>
						<Button onClick={() => alert('Purchased!')} >{'Buy!'}</Button>
						
					</PokeWrapper>
					<PokeWrapper>
						<H2>{'Bulbasaur'}</H2>
						<PokeImage src={BulbasaurPic} alt='Error...' />
						<H2>{'Price: 1000P'}</H2>
						<Button onClick={() => alert('Purchased!')} >{'Buy!'}</Button>
						
					</PokeWrapper>
					<PokeWrapper>
						<H2>{'Gengar'}</H2>
						<PokeImage src={GengarPic} alt='Error...' />
						<H2>{'Price: 2000P'}</H2>
						<Button onClick={() => alert('Purchased!')} >{'Buy!'}</Button>
						
					</PokeWrapper>
					<PokeWrapper>
						<H2>{'Onix'}</H2>
						<PokeImage src={OnixPic} alt='Error...' />
						<H2>{'Price: 1500P'}</H2>
						<Button onClick={() => alert('Purchased!')} >{'Buy!'}</Button>
						
					</PokeWrapper>
				</StoreitemWrapper>


			</MarketplaceWrapper>
		</Wrapper>
	)
}

const Wrapper = styled.div`
    display: grid;
	width: 100%;
	text-align: center;

	align-content: center;
	justify-content: center;
	align-items: center;
	justify-self: center;
	

`

const WrapperBackground = styled.div`
	position: absolute;
	background-color: #6d6df1dc;
	left: 0;
	top: 0;
	width: 100%;
	height: 200%;
	z-index: -1;
	`

const MarketplaceWrapper = styled.div`
    display: grid;
	background-color: #4872d0;
	width: 80%;

	
	align-items: center;
	text-align: center;
	align-self: center;

	justify-content: center;

	border-radius: 25px;

padding: 10px 60px;
margin: 15px 0px;
border: 3px solid black;

margin: 0 auto;

margin-top: 700px;
`

const StoreitemWrapper = styled.div`
    display: grid;

	align-items: center;
	text-align: center;
	align-self: center;

	justify-content: center;

	margin: 5px;
	
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
font-size: 30px;

cursor: pointer;
text-transform: uppercase;

text-decoration: none;
color: #020202;
align-self: center;


text-align: center;
justify-items: center;


`

const H1 = styled.div`
	font-family: 600;
	font-weight: 400;
	font-size: 50px;
	align-self: center;
	margin-top: 5px;
	`

const H2 = styled.div`
    font-family: 600;
	font-weight: 400;
	font-size: 30px;
	align-self: center;

`

const H3 = styled.div`
	font-family: 600;
	font-weight: 400;
	font-size: 40px;
	align-self: center;
	margin-top: 5px;
`

const PokeWrapper = styled.div`
    display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	justify-content: space-between;


	width: 80%;

	justify-self: center;

	background-color: #fdf5f57a;





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
