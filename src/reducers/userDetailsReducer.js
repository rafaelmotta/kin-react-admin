import {
  USER_DETAILS_REQUEST_SUCCESS,
  USER_RESET_REQUEST
} from '../config/constants/actions'

const initialState = {
  data: null
}

const userDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST_SUCCESS: {
      return {
        ...state,
        data: action.payload.data
      }
    }

    case USER_RESET_REQUEST: {
      return {
        data: null
      }
    }

    default: {
      return state
    }
  }
}

export default userDetailsReducer
