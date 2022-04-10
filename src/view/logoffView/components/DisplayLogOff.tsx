import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


export const DisplayLogOff = () => {



	return (
		<Wrapper>
			<WrapperBackground />
			<LogoffWrapper>
				<H1>{'Do you want to log off? '}</H1> <br />
				<Input type={'submit'} />
			</LogoffWrapper>
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
const LogoffWrapper = styled.div`
    display: grid;
    


	justify-self: center;

`


const H1 = styled.div`
	font-family: 600;
	font-weight: 400;
	font-size: 40px;
	align-self: center;
	margin-top: 5px;
	text-align: center;
`

const Input = styled.input`
	justify-self: center;
	
`