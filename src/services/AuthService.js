import axios from 'axios'

const url = 'https://spacesharp-db.com:3600/'
// const url = 'http://localhost:3600/'

export default {
  login (credentials) {
    return axios
      .post(url + 'auth', credentials)
      .then(response => response.data)
  },
  signUp (credentials) {
    return axios
      .post(url + 'users', credentials)
      .then(response => response.data)
  },
  getSecretContent () {
    return axios.get(url + 'secret-route/').then(response => response.data)
  },
}
