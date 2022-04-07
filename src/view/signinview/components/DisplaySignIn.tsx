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
					<Button onClick={() => navigate(RoutingPath.registerView)}>{'Register here!'} </Button>
				</RegisterWrapper>
			</MainWrapper>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  display: grid;
  margin: 0 auto;
  margin-top: 80px;
 
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
	border-color: white;
	border-radius: 10px;
	background-color: #4872d0;
	width: 60%;
	height: 100;
	justify-self: center;
`

const SignInWrapper = styled.div`
	display: grid;
`


const RegisterWrapper = styled.div`
	display: grid;
`

const Button = styled.div`
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
`
const H1 = styled.div`
	font-family: 600;
	font-weight: 400;
	font-size: 30px;
	align-self: center;
	margin-top: 5px;
	text-align: center;
`
const Input = styled.input`
	
`


