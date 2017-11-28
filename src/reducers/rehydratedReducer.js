import {
  REHYDRATE
} from '../config/constants/actions'

const initialState = false

const rehydratedReducer = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE: {
      return true
    }

    default: {
      return state
    }
  }
}

export default rehydratedReducer
