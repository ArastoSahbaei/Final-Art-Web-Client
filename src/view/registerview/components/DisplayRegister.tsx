import { useState } from 'react'
import styled from 'styled-components'
import { useAuthentication } from '../../../hooks/useAuthentication'
import {RegisterNewUser } from '../../../shared/interfaces/UserInterface'

export const DisplayRegister = () => {

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')


	/*
	const { registerNewUser } = useAuthentication()
	const [registerUser, setRegisterUser] = useState<RegisterNewUser>({ username: '', password: '', email: '', receiveNewsLetters: true })


	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, target: keyof RegisterNewUser) => {
		setRegisterUser({ ...registerUser, [target]: event.target.value })
	}

	const onSubmit = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault()
		registerNewUser(registerUser)
	}
	*/

	// <H1>{'Username: '}</H1> 
	// <Input  onChange={(event) => { handleChange(event, 'username') }} />
	// <H1>{'Password: '}</H1> 
	// <Input type='password' onChange={(event) => { handleChange(event, 'password') }} />
	// <H1>{'Email: '}</H1> 
	// <Input  onChange={(event) => { handleChange(event, 'email') }} />

	//<Button onClick={(event) => { onSubmit(event) }}>{'Register'}</Button>

	return (
		<Wrapper>
			<WrapperBackground />
			<RegisterWrapper>
				<H1>{'Username: '}</H1> 
				<Input  onChange={event => setUsername(event.target.value)} />
				<H1>{'Password: '}</H1> 
				<Input type='password'  onChange={event => setPassword(event.target.value)} />
				<H1>{'Email: '}</H1> 
				<Input  onChange={event => setEmail(event.target.value)} />
				<Button onClick={() => alert('Registered!')}>{'Register'}</Button>
			</RegisterWrapper>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  	display: grid;
  	margin: 0 auto;
  	width: 100%;
  	background-color: #4872d0;
  	border-radius: 5px;
	padding: 5px 15px;
	margin: 10px 0px;
	border: 3px solid whitesmoke;
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

const RegisterWrapper = styled.div`
    display: grid;
	justify-self: center;
	margin: 5px;
	justify-content: space-between;
	grid-template-rows: 1fr 1fr 1fr 1fr;
`

const H1 = styled.div`
	font-family: 600;
	font-weight: 400;
	font-size: 40px;
	align-self: center;
	margin-top: 5px;
	text-align: center;
	margin-bottom: 3px;
`

const Input = styled.input`
	justify-self: center;
`

const Button = styled.div`
	border-radius: 25px;
	background-color: #5fe616c7;
	padding: 10px 10px;
	border: 3px solid whitesmoke;
	font-weight: 400;
	font-size: 25px;
	width: 150%;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    color: #020202;
    align-self: center;
	text-align: center;
	width: 80%;
	justify-self: center;
	justify-content: center;
	margin-top: 5px;
`