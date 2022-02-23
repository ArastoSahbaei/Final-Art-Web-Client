import { useNavigate, NavLink, Route, Routes, useResolvedPath, useMatch, Link, Outlet } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'
import RoutingPath from '../../../../routes/RoutingPath'
import styled from 'styled-components'
import { primaryColor, secondaryFont } from '../../../../shared/style/GlobalStyle'
import useScrollPosition from '../../../../hooks/useScrollPosition'
import { MarketPlaceView } from 'view/marketplaceview/MarketPlaceView'
import { PlayNowView } from 'view/playnowview/PlayNowView'
import { HomeView } from 'view/homeview/HomeView'

export const DesktopNavigation = () => {
	// const navigate = useNavigate()
	const scrollPosition = useScrollPosition()



	// <Paragraph to={(RoutingPath.homeView)}>{'Home'}</Paragraph>
	// <Paragraph to={(RoutingPath.marketPlaceView)}>{'Marketplace'}</Paragraph>
	// <Paragraph to={(RoutingPath.playNowView)}>{'Play Now!'}</Paragraph>
	return(
		<Wrapper scrollPosition={scrollPosition}>
			<WrapperBackground />
			<Grid>
				<GridCell column1={'5/9'} column2={'5/10'} column3={'5/12'}>
					<ParagraphWrapper>
						
						<Routes>
							<Route path='/' element={<Layout />}>
								<Route path={(RoutingPath.homeView)} element={<HomeView />} />
								<Route path={(RoutingPath.marketPlaceView)} element={<MarketPlaceView />} />
								<Route path={(RoutingPath.playNowView)} element={<PlayNowView />} />
							</Route>
						</Routes>

					</ParagraphWrapper>

					
				</GridCell>
			</Grid>
		</Wrapper>
	)}

function CustomLink({ children, to, ...props }: LinkProps) {
	const resolved = useResolvedPath(to)
	const match = useMatch({ path: resolved.pathname, end: true })

	return (
		<div>
			<Link style={{ textDecoration: match ? 'underline' : 'none' }}
				to={to}  {...props}>
				{children}
			</Link>
			{match && ' (active)'}
		</div>
	)
}

function Layout() {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<CustomLink to='/'>{'Home'}</CustomLink>
					</li>
					<li>
						<CustomLink to={(RoutingPath.marketPlaceView)}>{'Marketplace'}</CustomLink>
					</li>
					<li>
						<CustomLink to={(RoutingPath.playNowView)}>{'Play Now'}</CustomLink>
					</li>
				</ul>
			</nav>

			<hr />

			<Outlet />
		</div>
	)
}



	interface x {
		column1?: string | '',
		column2?: string | ''
		column3?: string | ''
	}
	
	interface position {
		scrollPosition: number
	}
	
	
	
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

        