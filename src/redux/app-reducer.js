import {getMe} from "./auth-reducer";

const SET_APP_INITIALIZED = 'SET_APP_INITIALIZED';

const initialState = {
  initialized: false
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_APP_INITIALIZED:
      return {
        ...state,
        initialized: true
      }

    default:
      return state
  }
}

export const initializedSuccess = () => ({type: 'SET_APP_INITIALIZED'})

export const initialize = () => (dispatch) => {
  dispatch(getMe()).then(() => {
    dispatch(initializedSuccess())
  })
}