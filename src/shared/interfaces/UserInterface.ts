
export interface LoginCredentials {
	username: string,
	password: string
}

export interface AuthenticatedUser {
	username: string | undefined,
	token: string | undefined,
	authenticated: boolean,

}



export interface RegisterNewUser {
	username: string,
	password: string,
	email: string
	receiveNewsLetters: boolean | true
}


