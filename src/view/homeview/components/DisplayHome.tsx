import styled from "styled-components"

export const DisplayHome = () => {
	
	


	return (
		<Wrapper>
			<HomeGrid>
				<h1>{'This is HomeGrid'}</h1>
			</HomeGrid>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(20, 1fr);
	`
const HomeGrid = styled.div`
    display: grid;
	grid-template-columns: 1fr 4fr 1fr;
	width: 1000px;
    `