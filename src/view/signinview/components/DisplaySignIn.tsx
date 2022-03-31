import styled from 'styled-components'
import { useState } from 'react'
import { primaryBackgroundColor, primaryColor, secondaryColor } from '../../../shared/style/GlobalStyle'

export const DisplaySignIn = () => {
	const [loginView, setLoginView] = useState<boolean>(true)

	return (
		<Wrapper>
			<MainWrapper>
				<TitleWrapper>
					<TitleWrapperItem
						loginView={loginView}
						primaryColor={primaryBackgroundColor}
						secondaryColor={secondaryColor}
						onClick={() => setLoginView(true)}>
						<Paragraph>{'Sign In'}</Paragraph>
					</TitleWrapperItem>
					<TitleWrapperItem
						loginView={!loginView}
						primaryColor={primaryBackgroundColor}
						secondaryColor={secondaryColor}
						onClick={() => setLoginView(false)}>
						<Paragraph>{'Register'}</Paragraph>
					</TitleWrapperItem>


				</TitleWrapper>
			</MainWrapper>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  display: grid;
`

const MainWrapper = styled.div`
    display: grid;
`

export const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  background-color: ${secondaryColor};
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
`

interface values {
	loginView: boolean;
	primaryColor: string;
	secondaryColor: string;
}

export const TitleWrapperItem = styled.div<values>`
  background-color: ${props => props.loginView ? props.primaryColor : props.secondaryColor};
  border-top-left-radius: ${props => props.loginView ? '0.5em' : '0.5em'};
  border-top-right-radius: ${props => props.loginView ? '0.5em' : '0.5em'};
  &:hover {
    background-color: ${primaryColor};
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
  }
`

const Paragraph = styled.p`
  font-size: 1.25em;
  cursor: pointer;
  margin-bottom: 0.25em;
`