import {
	LOGIN_REQUEST,
} from '../config/constants/actions'

export const loginRequest = (payload) => {
	return {
		type: LOGIN_REQUEST,
		payload
	}
}
