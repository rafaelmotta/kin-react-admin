import {
  ME_REQUEST,
	ME_UPDATE_REQUEST,
} from '../config/constants/actions'

export const meRequest = () => {
	return {
		type: ME_REQUEST
	}
}

export const meUpdateRequest = (payload) => {
	return {
		type: ME_UPDATE_REQUEST,
    payload
	}
}
