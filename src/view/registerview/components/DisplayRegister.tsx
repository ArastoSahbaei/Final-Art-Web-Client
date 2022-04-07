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
				<H1>{'Username: '}</H1> <br />
				<Input  onChange={event => setUsername(event.target.username)} />
				<H1>{'Password: '}</H1> <br />
				<Input type='password'  onChange={event => setPassword(event.target.password)} />
				<H1>{'Email: '}</H1> <br />
				<Input  onChange={event => setEmail(event.target.email)} />


				
			</RegisterWrapper>
			<Input type={'submit'} />
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

const RegisterWrapper = styled.div`
  display: grid;

`

const H1 = styled.div`
	font-family: 600;
	font-weight: 400;
	font-size: 30px;
	align-self: center;
	margin-top: 5px;
	text-align: center;
`

const Input = styled.div`
	
`