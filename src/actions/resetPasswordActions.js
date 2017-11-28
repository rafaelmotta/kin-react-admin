import {
  RESET_PASSWORD_REQUEST
} from '../config/constants/actions'

export const resetPasswordRequest = (payload) => {
	return {
		type: ME_REQUEST,
    payload
	}
}
