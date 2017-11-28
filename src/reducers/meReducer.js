import {
  LOGIN_REQUEST_SUCCESS,
  ME_REQUEST_SUCCESS,
  ME_UPDATE_REQUEST_SUCCESS,
  LOGOUT_REQUEST
} from '../config/constants/actions'

const initialState = {
  data: null
}

const meReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOGIN_REQUEST_SUCCESS: {
      return {
        ...state,
        data: action.payload.data
      }
    }

    case ME_REQUEST_SUCCESS: {
      return {
        ...state,
        data: action.payload.data
      }
    }

    case ME_UPDATE_REQUEST_SUCCESS: {
      return {
        ...state,
        data: action.payload.data
      }
    }

    case LOGOUT_REQUEST: {
      return {
        data: null
      }
    }

    default: {
      return state
    }
  }
}

export default meReducer
