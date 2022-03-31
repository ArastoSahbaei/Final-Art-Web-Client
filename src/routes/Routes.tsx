import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomeView } from '../view/homeview/HomeView'
import { MarketPlaceView } from '../view/marketplaceview/MarketPlaceView'
import { PlayNowView } from '../view/playnowview/PlayNowView'
import { SignInView } from '../view/signinview/SignInView'
import RoutingPath from './RoutingPath'

export const Routing = (props: { children: React.ReactChild }) => {
	return (
		<Router>
			{props.children}
			<Routes>  
				<Route path={RoutingPath.homeView} element={<HomeView/>} />
				<Route path={RoutingPath.marketPlaceView} element={<MarketPlaceView/>} />
				<Route path={RoutingPath.playNowView} element={<PlayNowView/>} />
				<Route path={RoutingPath.signInView} element={<SignInView/>} />
			</Routes>  
		</Router>
	)
}


