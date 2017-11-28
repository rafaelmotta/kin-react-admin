import {
  REQUEST_START,
  REQUEST_END
} from '../config/constants/actions'

const initialState = false

const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_START: {
      return true
    }

    case REQUEST_END: {
      return false
    }

    default: {
      return state
    }
  }
}

export default requestReducer
