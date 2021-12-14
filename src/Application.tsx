import { Game } from './game/Game'
import { GlobalStyle } from './shared/style/GlobalStyle'

export const Application = () => {
	return (
		<div>
			<GlobalStyle />
			<Game />
			{/* 			1. create board
			2. make it playable
			3. deploy
			4. make it playable with a friend
			<h1>This is Final Art</h1> */}
		</div>
	)
}
