import Gangway from 'gangway'

var API = Gangway({
  baseURL: 'https://guess-whoo.herokuapp.com'
API.route({
  info: {
    method: 'GET',
    path:   '/info'
  }
})

API.route({
  pics: {
    method: 'GET',
    path:   '/pics'
  }
})

export default API
