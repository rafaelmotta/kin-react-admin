import {
  DASHBOARD_REQUEST_SUCCESS
} from '../config/constants/actions'

const initialState = {
  data: null
}

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARD_REQUEST_SUCCESS: {
      return {
        ...state,
        data: action.payload.data
      }
    }

    default: {
      return state
    }
  }
}

export default dashboardReducer
