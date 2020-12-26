import {usersAPI} from "../API";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_FOLLOW_BUTTONS_DISABLED = 'SET_FOLLOW_BUTTONS_DISABLED'

const initialState = {
  users: [],
  currentPage: 1,
  pageSize: 3,
  totalUsersCount: 0,
  isFetching: false,
  followButtonsDisabled: []
}

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return {...u}
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return {...u}
        })
      }

    case SET_USERS:
      return {
        ...state, users: action.users
      };

    case SET_USERS_COUNT:
      return {
        ...state, totalUsersCount: action.usersCount
      };

    case SET_CURRENT_PAGE:
      return {
        ...state, currentPage: action.currentPage
      }

    case SET_IS_FETCHING:
      return {
        ...state, isFetching: action.isFetching
      }

    case SET_FOLLOW_BUTTONS_DISABLED:
      return {
        ...state,
        followButtonsDisabled: action.isFetching
          ? [...state.followButtonsDisabled, action.userId]
          : state.followButtonsDisabled.filter(id => id !== action.userId)
      }

    default:
      return state
  }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})

const followUnfollow = async (apiMethod, dispatch, actionCreator, userId) => {
  dispatch(setFollowButtonsDisable(userId, true))
  const response = await apiMethod(userId)
  const {resultCode} = response.data;
  debugger
  if (resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(setFollowButtonsDisable(userId, false))
}

export const follow = (userId) => async (dispatch) => {
  followUnfollow(usersAPI.follow.bind(usersAPI), dispatch, followSuccess, userId)
}

export const unfollow = (userId) => async (dispatch) => {
  followUnfollow(usersAPI.unfollow.bind(usersAPI), dispatch, unfollowSuccess, userId)
}

export const requestUsers = (pageSize, currentPage) => async (dispatch) => {
  dispatch(setIsFetching(true))
  const response = await usersAPI.getUsers(pageSize, currentPage)
  const {data} = response;

  dispatch(setIsFetching(false))
  dispatch(setUsers(data.items))
  dispatch(setUsersCount(data.totalCount))
  dispatch(setCurrentPage(currentPage))
}
export const setUsers = (users) => ({type: SET_USERS, users})
export const setUsersCount = (usersCount) => ({type: SET_USERS_COUNT, usersCount})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})
export const setFollowButtonsDisable = (userId, isFetching) => ({type: SET_FOLLOW_BUTTONS_DISABLED, isFetching, userId})

export default usersReducer;

