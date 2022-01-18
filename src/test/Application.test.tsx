import { render, screen } from '@testing-library/react'
import { Application } from '../Application'

test('renders learn react link', () => {
	render(<Application />)
	const linkElement = screen.getByText(/learn reacerwrwerwet/i)
	expect(linkElement).toBeInTheDocument()
})
