
// import { ContactForm } from 'shared/interfaces/ContactFormInterface'
import { LoginCredentials, RegisterNewUser } from 'shared/interfaces/UserInterface'
import http from '../CardGameAPI'

const authenticatedRouteExample = () => {
	return http.get('/rofl')
}

const registerNewUser = (data: RegisterNewUser) => {
	return http.post('/user/register', data)
}

const login = (credentials: LoginCredentials) => {
	return http.post('/user/login', credentials)
}

const getAllUsers = () => {
	return http.get('/user')
}

const getUserWithID = (ID: string) => {
	return http.get(`/user/${ID}`)
}

export default {
	getAllUsers,
	getUserWithID,
	login,
	registerNewUser,
	authenticatedRouteExample,
}