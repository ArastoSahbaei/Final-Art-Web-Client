import styled from 'styled-components'


export const DisplayLogOff = () => {



	return (
		<Wrapper>
			<WrapperBackground />
			<LogoffWrapper>
				<H1>{'Do you want to log off? '}</H1> <br />
				<Button onClick={() => alert('Logged Out!')} >{'Log Out'}</Button>
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

const Button = styled.div`
	border-radius: 25px;
	background-color: #5fe616c7;
	padding: 10px 10px;

	border: 3px solid whitesmoke;
	font-weight: 500;
	font-size: 30px;
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