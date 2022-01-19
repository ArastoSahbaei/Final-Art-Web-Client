import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HomeView } from "../view/homeview/HomeView"
import { MarketplaceView } from "../view/marketplaceview/MarketplaceView"
import { PlaynowView } from "../view/playnowview/PlaynowView"

import RoutingPath from './RoutingPath'

export const Routing = (props: { children: React.ReactChild }) => {
    return (
        <Router>
            {props.children}
            <Routes>
             
                
                {/* REGULAR PATHS */}
                <Route  path={RoutingPath.homeView} element={HomeView} />
                <Route  path={RoutingPath.marketplaceView} element={MarketplaceView} />
                <Route  path={RoutingPath.playnowView} element={PlaynowView} />
            </Routes>  
        </Router>
    )
}


/*
   <Route path={"/marketplace"} element={<MarketplaceView />} />
                <Route path={"/playnow!"} element={<PlaynowView />} />
                <Route path={"/home"}  element={<HomeView />} />

*/