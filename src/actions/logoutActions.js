import {
	LOGOUT_REQUEST,
} from '../config/constants/actions'

export const logoutRequest = (payload) => {
	return {
		type: LOGOUT_REQUEST,
		payload
	}
}
