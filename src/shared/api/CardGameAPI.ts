
import Axios from 'axios'
import LocalStorage from '../cache/LocalStorage'

const CardGameAPI = Axios.create({
	baseURL: 'http://localhost:3001',
	headers: { 'Content-Type': 'application/json' }
})

// added config.headers = config.headers ?? {} ***** Might remove if it doesn't work prob...
CardGameAPI.interceptors.request.use(function (config) {
    
	const token = localStorage.getItem(LocalStorage.authenticationToken)
	config.headers!.Authorization = token ? `Bearer ${token}` : ''
	return config
})

export default CardGameAPI