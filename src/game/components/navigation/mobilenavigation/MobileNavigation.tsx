import { useNavigate } from 'react-router-dom'
import RoutingPath from '../../../../routes/RoutingPath'

export const MobileNavigation = () => {
	const navigate = useNavigate()

	return (
	// Ska ta bort det här nere. La mest in något nu, så att inte programmet bråkar
		<div>
			<button onClick={() => navigate(RoutingPath.homeView)} >{'Home'}</button>
			<button onClick={() => navigate(RoutingPath.marketPlaceView)} >{'Marketplace'}</button>
			<button onClick={() => navigate(RoutingPath.playNowView)}>{'Play Now!'}</button> 
			<button onClick={() => navigate(RoutingPath.signInView)}>{'Sign In!'} </button>
			<button onClick={() => navigate(RoutingPath.logoffView)}>{'Log Off'} </button>
		</div>
	)
}