import {
  USERS_REQUEST_SUCCESS,
  USERS_RESET_REQUEST,
  USER_DELETE_REQUEST_SUCCESS
} from '../config/constants/actions'

const initialState = {
  data: null
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_REQUEST_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        meta: action.payload.meta
      }
    }

    case USER_DELETE_REQUEST_SUCCESS: {
      let data = state.data.map((item) => {
        if(item.id === action.payload.data.id) {
          return action.payload.data
        }
        return item
      })

      return {
        ...state,
        data,
        meta: 1
      }
    }

    case USERS_RESET_REQUEST: {
      return {
        data: null
      }
    }

    default: {
      return state
    }
  }
}

export default usersReducer
