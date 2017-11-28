import {
	DASHBOARD_REQUEST,
} from '../config/constants/actions'

export const dashboardRequest = (payload) => {
	return {
		type: DASHBOARD_REQUEST,
		payload
	}
}
