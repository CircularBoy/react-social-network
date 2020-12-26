import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '03f7093f-bb49-49fe-a6f4-4e9e0a7c9050'
  }
  // responseType: "application/json"
})

export const usersAPI = {
  getUsers(pageSize, currentPage) {
    return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(
      response => {
        return response
      })
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId)
  },
  getStatus(userId) {
    return instance.get('profile/status/' + userId)
  },
  updateStatus(status) {
    return instance.put('profile/status', {status})
  },
  follow(userId) {
    return instance.post('/follow/'+userId, {}).then(response => {
      return response
    })
  },
  unfollow(userId) {
    return instance.delete('/follow/'+userId).then(response => {
      return response
    })
  }

}

export const authAPI = {
  me() {
    return instance.get('/auth/me').then(response => {
      return {
        data: response.data.data,
        resultCode: response.data.resultCode
      }
    })
  },
  login(email, password, rememberMe) {
    return instance.post('/auth/login', {
      email, password, rememberMe
    }).then(response => {
      return {
        messages: response.data.messages,
        resultCode: response.data.resultCode
      }
    })
  },
  logout() {
    return instance.delete('/auth/login').then(response => {
      return {
        data: response.data.data,
        resultCode: response.data.resultCode
      }
    })
  }
}

