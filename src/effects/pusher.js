import Pusher from 'pusher-js'

import { updateInfo } from '../actions'

class PusherClient {
  setup (repo, options) {
    var pusher  = new Pusher('cbd953bd1696f9fdef9e', { encrypted: true })
    var channel = pusher.subscribe('game')

    channel.bind('update', function(data) {
      repo.push(updateInfo, data)
    })
  }
}

export default PusherClient
