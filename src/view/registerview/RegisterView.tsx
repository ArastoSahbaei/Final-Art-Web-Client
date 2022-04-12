import styled from 'styled-components'
import { DisplayRegister } from '../registerview/components/DisplayRegister'

export const RegisterView = () => {
	return (
		<Div>
			<DisplayRegister />
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
