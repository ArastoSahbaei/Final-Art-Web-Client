import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


export const DisplayRegister = () => {
	const navigate = useNavigate()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')


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


				<Input type={'submit'} />
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