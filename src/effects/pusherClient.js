import Pusher from 'pusher-js'

import { updateInfo } from '../actions'

class PusherClient {
  setup (repo, options) {
    var pusher  = new Pusher('cbd953bd1696f9fdef9e', { encrypted: true })
    var channel = pusher.subscribe('game')

    channel.bind('update', function(payload) {
      repo.push(updateInfo, payload)
    })
  }
}

export default PusherClient
