import '../desktopnavigation/DesktopNavigation.css'
import { useNavigate } from 'react-router-dom'



export const NavBar = () => {
    const navigate = useNavigate()

    return(
        <div className={"navbarContanier"}>
            <button onClick={() => navigate("/home")} >{'Home'}</button>
            <button onClick={() => navigate("/marketplace")} >{'Marketplace'}</button>
            <button onClick={() => navigate("/playnow!")}>{'Play Now!'}</button> 
        </div>

    )


}

