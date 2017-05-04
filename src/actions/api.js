import Gangway from 'gangway'

var API = Gangway({
  baseURL: 'https://guess-whoo.herokuapp.com'
})

API.route({
  info: {
    method: 'GET',
    path:   '/info'
  }
})

export default API
