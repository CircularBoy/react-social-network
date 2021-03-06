// import {createSelector} from "reselect";

export const getUsers = (state) => {
  return state.usersPage.users
}

// export const getUsersSuper = createSelector(getUsers, (users) => {
//   return users.filter(u => true)
// })

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage
}

export const getPageSize = (state) => {
  return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount
}

export const getIsFetching = (state) => {
  return state.usersPage.isFetching
}

export const getFollowButtonsDisabled = (state) => {
  return state.usersPage.followButtonsDisabled
}
