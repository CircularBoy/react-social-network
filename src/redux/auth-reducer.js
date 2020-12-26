import {authAPI} from "../API";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_IS_AUTH = 'SET_IS_AUTH';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data
      }

    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }

    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.isAuth
      }

    default:
      return state
  }
}

export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})
export const getMe = () => async dispatch => {
  dispatch(setIsFetching(true));
  const response = await authAPI.me();
  const {data, resultCode} = response

  if (resultCode === 0) {
    let {id, login, email} = data
    dispatch(setUserData(id, email, login))
    dispatch(setIsAuth(true))
  }
  dispatch(setIsFetching(false))
}
export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth})

export const authLogin = (email, password, rememberMe) => async dispatch => {
  const response = await authAPI.login(email, password, rememberMe)
  const {messages, resultCode} = response

  if (resultCode === 0) {
    dispatch(getMe())
  } else {
    debugger
    let error = messages.length > 0 ? messages[0] : 'Some undefined error'
    dispatch(stopSubmit('login', {_error: error}))
  }
}

export const authLogout = () => async (dispatch) => {
  const response = await authAPI.logout();
  const {resultCode} = response;
  if (resultCode === 0) {
    dispatch(setUserData(false, false, false));
    dispatch(setIsAuth(false));
  }
}

export default authReducer;

