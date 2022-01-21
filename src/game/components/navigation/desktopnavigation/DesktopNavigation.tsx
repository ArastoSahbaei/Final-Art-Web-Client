import { useNavigate } from 'react-router-dom'
import RoutingPath from '../../../../routes/RoutingPath'

export const DesktopNavigation = () => {
	const navigate = useNavigate()

	return(
		<div>
			<button onClick={() => navigate(RoutingPath.homeView)} >{'Home'}</button>
			<button onClick={() => navigate(RoutingPath.marketPlaceView)} >{'Marketplace'}</button>
			<button onClick={() => navigate(RoutingPath.playNowView)}>{'Play Now!'}</button> 
		</div>
	)}


        