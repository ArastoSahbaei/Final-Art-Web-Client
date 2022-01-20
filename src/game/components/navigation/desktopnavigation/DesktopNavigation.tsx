import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import RoutingPath from '../../../../route/RoutingPath'


export const DesktopNavigation = () => {
    const navigate = useNavigate()

    return(
        <div>
            <button onClick={() => navigate(RoutingPath.homeView)} >{'Home'}</button>
            <button onClick={() => navigate(RoutingPath.marketplaceView)} >{'Marketplace'}</button>
            <button onClick={() => navigate(RoutingPath.playnowView)}>{'Play Now!'}</button> 

            
        </div>
      




    )}


        