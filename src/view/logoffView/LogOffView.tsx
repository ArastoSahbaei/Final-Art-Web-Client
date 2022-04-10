import styled from 'styled-components'
import { DisplayLogOff } from '../logoffView/components/DisplayLogOff'

export const LogOffView = () => {






	return (
		<Div>
			<DisplayLogOff />
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