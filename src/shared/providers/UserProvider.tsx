
import React, { useState, createContext } from 'react'
import { nonAuthenticatedUser } from '../../shared/data/nonAuthenticatedUser'
import { AuthenticatedUser } from '../interfaces/UserInterface'

export const UserContext = createContext<any>(null)

export const UserProvider = (props: { children?: React.ReactChild }) => {
	const [authenticatedUser, setAuthenticatedUser] = useState<AuthenticatedUser>(nonAuthenticatedUser)
	const { children } = props

	return (
		<UserContext.Provider value={[authenticatedUser, setAuthenticatedUser]}>
			{children}
		</UserContext.Provider>
	)
}