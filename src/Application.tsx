import { GameController } from 'game/GameController'
import { GlobalStyle } from './shared/style/GlobalStyle'
import { NavBar } from './game/components/navigation/desktopnavigation/DesktopNavigation'

import { Routing } from './route/Routes'

export const Application = () => {
	return (
		<>
			<GlobalStyle />
			<Routing>
				<NavBar />	
			</Routing>
			
			<GameController />
		</>
	)
}