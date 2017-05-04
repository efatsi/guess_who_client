import Gangway from 'gangway'

var API = Gangway({
  // baseURL: 'https://guess-whoo.herokuapp.com'
  baseURL: 'http://localhost:3000'
})

API.route({
  info: {
    method: 'GET',
    path:   '/info'
  }
})

export default API
