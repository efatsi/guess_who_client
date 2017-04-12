import Microcosm from 'microcosm'
import Pusher from 'pusher-js'

import { updateInfo } from './actions'
import Info from './domains/info'
import API from './api'

class Repo extends Microcosm {
  setup () {
    this.addDomain('info', Info)

    let repo = this
    API.info().then(function(response) {
      repo.push(updateInfo, response)
    })

    var pusher = new Pusher('cbd953bd1696f9fdef9e', {
      encrypted: true
    });

    var channel = pusher.subscribe('game');
    channel.bind('update', function(data) {
      repo.push(updateInfo, data)
    });
  }
}

export default Repo
