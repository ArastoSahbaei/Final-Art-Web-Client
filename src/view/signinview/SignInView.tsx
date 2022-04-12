import styled from 'styled-components'
import { DisplaySignIn } from '../signinview/components/DisplaySignIn'

export const SignInView = () => {

	return (
		<Div>
			<DisplaySignIn />
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