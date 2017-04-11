import Gangway from 'gangway'

var API = Gangway({
  baseURL: 'http://localhost:3000'
})

API.route({
  info: {
    method: 'GET',
    path:   '/info'
  }
})

export default API
