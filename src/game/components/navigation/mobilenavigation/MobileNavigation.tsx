import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import RoutingPath from '../../../../route/RoutingPath'


export const MobileNavigation = () => {
    const navigate = useNavigate()

	return (
        // Ska ta bort det här nere. La mest in något nu, så att inte programmet bråkar
		<div>
            <button onClick={() => navigate(RoutingPath.homeView)} >{'Home'}</button>
            <button onClick={() => navigate(RoutingPath.marketplaceView)} >{'Marketplace'}</button>
            <button onClick={() => navigate(RoutingPath.playnowView)}>{'Play Now!'}</button> 

            
        </div>
	)
}