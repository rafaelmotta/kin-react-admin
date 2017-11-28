import {
	USER_DETAILS_REQUEST,
	USER_CREATE_REQUEST,
	USER_UPDATE_REQUEST,
	USER_RESET_REQUEST
} from '../config/constants/actions'

export const userDetailsRequest = (payload) => {
	return {
		type: USER_DETAILS_REQUEST,
		payload
	}
}

export const userUpdateRequest = (payload) => {
	return {
		type: USER_UPDATE_REQUEST,
		payload
	}
}

export const userCreateRequest = (payload) => {
	return {
		type: USER_CREATE_REQUEST,
		payload
	}
}

export const userResetRequest = () => {
	return {
		type: USER_RESET_REQUEST
	}
}
