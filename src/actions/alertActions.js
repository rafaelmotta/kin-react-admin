import {
	ALERT_ERROR,
	ALERT_SUCCESS
} from '../config/constants/actions'

export const alertError = (payload) => {
	return {
		type: ALERT_ERROR,
		payload
	}
}

export const alertSuccess = (payload) => {
	return {
		type: ALERT_SUCCESS,
		payload
	}
}
