import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'



export const Navigation = () => {
    const navigate = useNavigate()

    return(
        <div className={"navigationContanier"}>
            <button onClick={() => navigate("/home")} >{'Home'}</button>
            <button onClick={() => navigate("/marketplace")} >{'Marketplace'}</button>
            <button onClick={() => navigate("/playnow!")}>{'Play Now!'}</button> 
        </div>




    )}


        