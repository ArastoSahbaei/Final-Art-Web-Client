import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from 'shared/providers/UserProvider'
//import { validateToken } from 'functions/validateToken'
//import { nonAuthenticatedUser } from 'shared/data/nonAuthenticatedUser'
import { LoginCredentials, RegisterNewUser } from 'shared/interfaces/UserInterface'
// import { toast } from 'react-toastify'
import RoutingPath from 'routes/RoutingPath'
import LocalStorage from '../shared/cache/LocalStorage'
import CardGameAPIService from '../shared/api/services/CardGameAPIService'

export const useAuthentication = () => {
	const navigate = useNavigate()
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const login = async (loginCredentials: LoginCredentials) => {
		try {
			const { data } = await CardGameAPIService.login(loginCredentials)
			localStorage.setItem(LocalStorage.authenticationToken, data.token)
			console.log(data)
			setAuthenticatedUser(data)
			navigate(RoutingPath.signInView)
		} catch (error) {
			console.log(error)
		}
	}

	const registerNewUser = async (newUserCredentials: RegisterNewUser) => {
		try {
			await CardGameAPIService.registerNewUser(newUserCredentials)
			//TODO: If registration is successfull -> login the user and tell em to verify their email
			alert('Sucessfully created your account!')
		} catch (error) {
			console.log(error)
		}
	}



	return {
		login,
		registerNewUser,
	}

}