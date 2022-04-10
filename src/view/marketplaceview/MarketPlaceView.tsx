import styled from 'styled-components'
import { DisplayMarketplace } from './components/DisplayMarketplace'

export const MarketPlaceView = () => {
	return (	
		<Div>
			<DisplayMarketplace />
		</Div>
	)
}

const Div = styled.div`
	display: grid;
	align-content: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
`