import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HomeView } from "../view/homeview/HomeView"
import { MarketplaceView } from "../view/marketplaceview/MarketplaceView"
import { PlaynowView } from "../view/playnowview/PlaynowView"

export const Routing = (props: { children: React.ReactChild }) => {
    return (
        <Router>
            {props.children}
          
            <Routes>
                <Route path={"/marketplace"} element={<MarketplaceView />} />
                <Route path={"/playnow!"} element={<PlaynowView />} />
                <Route path={"/home"}  element={<HomeView />} />
            </Routes>
          
        </Router>
    )


}