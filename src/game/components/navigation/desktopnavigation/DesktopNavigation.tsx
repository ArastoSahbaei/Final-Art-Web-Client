import { useNavigate   } from 'react-router-dom'
import RoutingPath from '../../../../routes/RoutingPath'
import styled from 'styled-components'
import { primaryColor, secondaryFont } from '../../../../shared/style/GlobalStyle'
import useScrollPosition from '../../../../hooks/useScrollPosition'


export const DesktopNavigation = () => {
	const navigate = useNavigate()
	const scrollPosition = useScrollPosition()


	return(
		<Wrapper scrollPosition={scrollPosition}>
			<WrapperBackground />
			<Grid>
				<GridCell column1={'3/6'} column2={'3/8'} column3={'3/10'}>
					<ParagraphWrapper>
						<Button onClick={() => navigate(RoutingPath.homeView)}>{'Home'}</Button>
						<Button onClick={() => navigate(RoutingPath.marketPlaceView)}>{'Marketplace'}</Button>
						<Button onClick={() => navigate(RoutingPath.playNowView)}>{'Play Now!'} </Button>
						<Button onClick={() => navigate(RoutingPath.signInView)}>{'Sign In!'} </Button>
						<Button onClick={() => navigate(RoutingPath.logoffView)}>{'Log Off'} </Button>
					</ParagraphWrapper>	
				</GridCell>
			</Grid>
		</Wrapper>
	)}

	interface x {
		column1?: string | '',
		column2?: string | ''
		column3?: string | ''
	}
	
	interface position {
		scrollPosition: number
	}
	
const Button = styled.div`
	  font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;
    font-family: ${secondaryFont};
    text-decoration: none;
    color: white;
    align-self: center;
    &.is-active {
      color: ${primaryColor};
    }
	`
	
const Grid = styled.div`
		display: grid;
		grid-template-columns: repeat(20, 1fr);
		width: 100%;
		height: 100%;
	`
	
const GridCell = styled.div<x>`
		grid-column: ${(props) => props.column1};
		display: grid;
		align-items: center;
		max-height: 100%;
		position: relative;
		height: 100%;
		@media(max-width: 1750px) {
			grid-column: ${(props) => props.column2};
		}
		@media(max-width: 1750px) {
			grid-column: ${(props) => props.column2};
		}
		@media(max-width: 1400px) {
			grid-column: ${(props) => props.column3};
		}
	`
	
const Wrapper = styled.nav<position>`
		position: fixed;
		height: ${(props) => props.scrollPosition > 100 ? '3.2rem;' : '5.2rem;'};
		top: 0;
		left: 0;
		z-index: 300;
		width: 100%;
		transition: 0.4s;
	`
	
const WrapperBackground = styled.div`
		position: absolute;
		background-color: #263746;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	`


	
export const Paragraph2 = styled.p`
		font-weight: 600;
		color: white;
		align-self: center;
		text-transform: uppercase;
		grid-column: 18/18;
		cursor: pointer;
	`
	
const ParagraphWrapper = styled.div`
		display: flex;
		justify-content: space-between;
	`

        