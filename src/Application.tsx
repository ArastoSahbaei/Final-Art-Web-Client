import { GameController } from 'game/GameController'
import { GlobalStyle } from './shared/style/GlobalStyle'

export const Application = () => {
	return (
		<>
			<GlobalStyle />
			<GameController />
		</>
	)
}