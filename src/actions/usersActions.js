import {
	USERS_REQUEST,
	USERS_RESET_REQUEST,
	USER_DELETE_REQUEST
} from '../config/constants/actions'

export const usersRequest = (payload) => {
	return {
		type: USERS_REQUEST,
		payload
	}
}

export const userDeleteRequest = (payload) => {
	return {
		type: USER_DELETE_REQUEST,
		payload
	}
}

export const usersResetRequest = () => {
	return {
		type: USERS_RESET_REQUEST
	}
}
