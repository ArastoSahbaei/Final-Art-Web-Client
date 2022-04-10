import styled from 'styled-components'
import { useState } from 'react'
import RoutingPath from 'routes/RoutingPath'
import { useNavigate } from 'react-router-dom'


export const DisplaySignIn = () => {
	const navigate = useNavigate()
	const [username, setUsername] = useState('Daniel')
	const [password, setPassword] = useState('1234')


	return (
		<Wrapper>
			<WrapperBackground />
			<MainWrapper>
				<SignInWrapper>
					<H1>{'Username: '}</H1> <br />
					<Input  onChange={event => setUsername(event.target.value)} />
					<H1>{'Password: '}</H1> <br />
					<Input type='password'  onChange={event => setPassword(event.target.value)} />


					
			
				
					<Button onClick={() => alert('Ok!')} >{'Enter'}</Button>

				</SignInWrapper>
				<RegisterWrapper>
					<Button2 onClick={() => navigate(RoutingPath.registerView)}>{'Register here!'} </Button2>
				</RegisterWrapper>
			</MainWrapper>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  display: grid;
  margin: 0 auto;
	width: 100%;
 
`
const WrapperBackground = styled.div`
	position: absolute;
	background-color: #6d6df1dc;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
`


const MainWrapper = styled.div`
    display: grid;

	
	color: black;

	background-color: #4872d0;
	

	justify-self: center;

	border-radius: 5px;
	
		padding: 5px 15px;
		margin: 10px 0px;
		border: 3px solid whitesmoke;
`

const SignInWrapper = styled.div`
	display: grid;
	width: 100%;
`


const RegisterWrapper = styled.div`
	display: grid;
`

const Button = styled.div`
	border-radius: 25px;
	background-color: #5fe616c7;
	padding: 10px 60px;
	margin: 10px 0px;
	border: 3px solid whitesmoke;
	font-weight: 600;
	font-size: 40px;
	width: 100%;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    color: #020202;
    align-self: center;
	text-align: center;

	width: 80%;
	justify-self: center;
`

const Button2 = styled.div`
	border-radius: 25px;
	background-color: #d04848;
	padding: 10px 60px;
	margin: 10px 0px;
	border: 3px solid whitesmoke;
	font-weight: 600;
	font-size: 40px;
	width: 100%;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    color: #020202;
    align-self: center;
	text-align: center;

	width: 80%;
	justify-self: center;
`




const H1 = styled.div`
	
	font-weight: 400;
	font-size: 40px;
	align-self: center;
	margin-top: 10px;
	text-align: center;

	justify-self: center;
`
const Input = styled.input`
	width: 40%;
	justify-self: center;
	
`


