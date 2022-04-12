import styled from 'styled-components'
import { DisplayHome } from './components/DisplayHome'

export const HomeView = () => {
	return (
		<Div>
			<DisplayHome />
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


