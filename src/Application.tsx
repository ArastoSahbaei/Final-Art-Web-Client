import { GlobalStyle } from './shared/style/GlobalStyle'
import { DesktopNavigation } from './game/components/navigation/desktopnavigation/DesktopNavigation'
import { Routing } from './routes/Routes'

export const Application = () => {
	return (
		<>
			<GlobalStyle />
			<Routing>
				<DesktopNavigation />	
			</Routing>
		</>
	)
}