import {usersAPI} from "../API";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_FULL_NAME';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

const initialState = {
  posts: [
    {id: 1, title: "Hello its post number one"},
    {id: 2, title: "Its second post"},
    {id: 3, title: "I am third"}
  ],
  profile: null,
  isFetching: false,
  status: '',
}

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      let post = {
        id: 5, title: action.post
      }
      return {...state, posts: [...state.posts, post]};

    case SET_PROFILE:
      return {...state, profile: action.profile}

    case SET_IS_FETCHING:
      return {...state, isFetching: action.isFetching}

    case SET_PROFILE_STATUS:
      return {
        ...state, status: action.status
      }

    default:
      return state
  }
}

export const addPost = (post) => ({type: ADD_POST, post})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status})

export const requestProfileStatus = (userId) => async (dispatch) => {
  const response = await usersAPI.getStatus(userId)
  dispatch(setProfileStatus(response.data))
}
export const updateProfileStatus = (status) => async (dispatch) => {
  const response = await usersAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setProfileStatus(status))
  }
}
export const requestProfile = (userId) => async (dispatch) => {
  dispatch(setIsFetching(true))
  const response = await usersAPI.getProfile(userId)
  dispatch(setIsFetching(false))
  dispatch(setProfile(response.data))
}
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})

export default profileReducer;

